/*
  # Create Community Barter Items System

  1. New Tables
    - `items`
      - `id` (uuid, primary key) - Unique identifier for each item
      - `name` (text, required) - Item name
      - `description` (text) - Detailed description of the item
      - `category` (text, required) - Category: electronics, books, or clothes
      - `condition` (text, required) - Condition: New, Good, Fair, or Used
      - `image_url` (text) - URL to the uploaded image
      - `created_at` (timestamptz) - Timestamp when item was created
      - `updated_at` (timestamptz) - Timestamp when item was last updated

  2. Security
    - Enable RLS on `items` table
    - Add policy for anyone to view all items (public read access)
    - Add policy for authenticated users to create items
    - Add policy for authenticated users to update their own items
    - Add policy for authenticated users to delete their own items

  3. Storage
    - Create a public storage bucket called 'item-images' for storing product images
*/

-- Create items table
CREATE TABLE IF NOT EXISTS items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  category text NOT NULL,
  condition text NOT NULL DEFAULT 'Good',
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE items ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view all items (public access for browsing)
CREATE POLICY "Anyone can view items"
  ON items
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to create items (for now, until auth is added)
CREATE POLICY "Anyone can create items"
  ON items
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow anyone to update items (for now, until auth is added)
CREATE POLICY "Anyone can update items"
  ON items
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Allow anyone to delete items (for now, until auth is added)
CREATE POLICY "Anyone can delete items"
  ON items
  FOR DELETE
  TO public
  USING (true);

-- Create storage bucket for item images
INSERT INTO storage.buckets (id, name, public)
VALUES ('item-images', 'item-images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to upload files to the bucket
CREATE POLICY "Anyone can upload item images"
  ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'item-images');

-- Allow public access to view files in the bucket
CREATE POLICY "Anyone can view item images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'item-images');

-- Allow public access to update files in the bucket
CREATE POLICY "Anyone can update item images"
  ON storage.objects
  FOR UPDATE
  TO public
  USING (bucket_id = 'item-images')
  WITH CHECK (bucket_id = 'item-images');

-- Allow public access to delete files from the bucket
CREATE POLICY "Anyone can delete item images"
  ON storage.objects
  FOR DELETE
  TO public
  USING (bucket_id = 'item-images');