import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from "@gradio/client";
import FormData from 'form-data';
import { createEventSource, getUrlFromPath, image2dToObjBody } from '../../thetaedgecustomhooks';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method === 'POST') {
    try {

  /**
   * Generate a 3D object from a 2D image
   * @param {string} imagePath - The path of the 2D image
   * @returns {string} the path of the generated 3D object
   */
  const generate3d = async (imagePath : string) => {
    const sessionHash = Math.random().toString(36).substring(2, 12);
  
    return await createEventSource(
      sessionHash,
      4,
      image2dToObjBody(imagePath, getUrlFromPath(imagePath), sessionHash));
  }
      


      res.status(200).json({  });
    } catch (error) {
      console.error("3D Model generation error:", error);
      res.status(500).json({ error: '3D Model generation error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
