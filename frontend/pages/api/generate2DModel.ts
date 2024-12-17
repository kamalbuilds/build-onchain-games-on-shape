import { NextApiRequest , NextApiResponse } from "next";
import { Client } from "@gradio/client";


export default async function POST (req: NextApiRequest, res: NextApiResponse) {
    const generate2d = async (file, prompt, negativePrompt) => {
        const sessionHash = Math.random().toString(36).substring(2, 12);
      
        const sketchPath = await uploadImage(file);
      
        const sketchPngPath = await createEventSource(
          sessionHash,
          0,
          sketchToSketchPngBody(sketchPath, getUrlFromPath(sketchPath), file, sessionHash))
      
        const image2dPath = await createEventSource(
          sessionHash,
          1,
          sketchPngTo2dBody(sketchPngPath, getUrlFromPath(sketchPngPath), file, sessionHash, prompt, negativePrompt))
      
        return await createEventSource(
          sessionHash,
          url,
          2,
          image2dToImage2d2Body(image2dPath, getUrlFromPath(image2dPath), file, sessionHash));
      }
}
