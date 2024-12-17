const pexel = (id: any) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: `/images/img5_.jpg` },
    // Back
    { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: `/images/img7_.jpg` },
    { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: `/images/img3_.jpg` },
    // Left
    { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: `/images/img2_.jpg` },
    { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: `/images/img1_.jpg` },
    { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: `/images/img5_.jpg` },
    // Right
    { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: `/images/img6_.jpg` },
    { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: `/images/img8_.jpg` },
    { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: `/images/img10_.jpg` }
]


export { images };