const url = process.env.NEXT_PUBLIC_URL_ENDPOINT;
let eventSource = null;

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('files', file, file.name);
  
    try {
      const response = await fetch(`${url}/upload`, {
        method: 'POST',
        body: formData
      })
      const json = await response?.json();
      return json?.[0]
    } catch (e) {
      console.log(e)
    }
  
  }

export  const createEventSource = async (sessionHash, fnIndex, body) => {
    return new Promise((resolve) => {
  
    
      if (eventSource) {
        eventSource.close()
        eventSource = null
      }
  
      let eventSource = new EventSource(`${url}/queue/join?fn_index=${fnIndex}&session_hash=${sessionHash}`);

      eventSource.onmessage = (e) => {
        const data = JSON.parse(e.data)
  
        switch (data.msg) {
          case 'process_completed':
            if (data.success) {
              resolve(data.output.data[0].path)
            } else {
              // onError event
            }
            eventSource.close()
            break;
          case 'send_data':
            queueData(url, body, data.event_id)
            break;
          case 'estimation':
            // onEstimation event
            break;
          default:
            break;
        }
      };
  
      eventSource.onerror = (e) => {
        if (e.readyState === EventSource.CONNECTING) {
          return
        }
  
        // onError event
        
        eventSource.close()
      };
    });
  }


      
  const queueData = async (body, eventId) => {
      
    const response = await fetch(`${url}/queue/data`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({...body, event_id: eventId}),
    });
  
    const json = await response?.json();
  
    if (!response.ok) {
      let errorMessage = json?.detail || 'Failed to generate'
      if (errorMessage.toLowerCase().includes('queue is full')) {
        errorMessage = 'The queue is currently full. Please try again later.'
      }
  
      throw new Error(errorMessage)
    }
  }
  
  export const getUrlFromPath = (path) => {
    return `${url}/file=${path}`
  }
  
  export const sketchToSketchPngBody = (sketchPath, sketchUrl, file, sessionHash) => {
    return {
      data: [
        {
          "background": {
            "mime_type": "",
            "orig_name": "background.png",
            "path": sketchPath,
            "size": file.size,
            "url": sketchUrl
          },
          "composite": {
            "mime_type": "",
            "orig_name": "composite.png",
            "path": sketchPath,
            "size": file.size,
            "url": sketchUrl
          },
        }
      ],
      session_hash: sessionHash,
      fn_index: 0,
      trigger_id: 30,
      event_data: null,
    }
  }
  
  export const sketchPngTo2dBody = (sketchPath, sketchUrl, file, sessionHash, prompt, negativePrompt) => {
    return {
      "data": [
        {
          "mime_type": null,
          "orig_name": "image.png",
          "path": sketchPath,
          "size": null,
          "url": sketchUrl
        },
        "stablediffusionapi/rev-animated-v122-eol",
        "lllyasviel/control_v11p_sd15_lineart",
        512,
        512,
        true,
        1,
        prompt,
        negativePrompt,
        1,
        7.5,
        30,
        "DDIM",
        0,
        "Lineart"
      ],
      "event_data": null,
      "fn_index": 1,
      "session_hash": sessionHash,
      "trigger_id": 30
    }
  }
  
  export const image2dToImage2d2Body = (image2dPath, image2dUrl, file, sessionHash) => {
    return {
      "data": [
        {
          "mime_type": null,
          "orig_name": "image.png",
          "path": image2dPath,
          "size": null,
          "url": image2dUrl
        },
        true,
        0.85,
      ],
      "event_data": null,
      "fn_index": 2,
      "session_hash": sessionHash,
      "trigger_id": 30
    }
  }
  
  export const image2dToObjBody = (image2dPath, image2dUrl, sessionHash) => {
    return {
      "data": [
        {
          "mime_type": null,
          "orig_name": "image.png",
          "path": image2dPath,
          "size": null,
          "url": image2dUrl
        },
        256,
      ],
      "event_data": null,
      "fn_index": 4,
      "session_hash": sessionHash,
      "trigger_id": 35
    }
  }