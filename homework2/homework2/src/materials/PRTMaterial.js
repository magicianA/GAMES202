class PRTMaterial extends Material {

    constructor(apreComputeL,vertexShader, fragmentShader) {
        super({
            'aPreComputeL0': { type: '3fv', value: apreComputeL[0] },
            'aPreComputeL1': { type: '3fv', value: apreComputeL[1] },
            'aPreComputeL2': { type: '3fv', value: apreComputeL[2] },
            'aPreComputeL3': { type: '3fv', value: apreComputeL[3] },
            'aPreComputeL4': { type: '3fv', value: apreComputeL[4] },
            'aPreComputeL5': { type: '3fv', value: apreComputeL[5] },
            'aPreComputeL6': { type: '3fv', value: apreComputeL[6] },
            'aPreComputeL7': { type: '3fv', value: apreComputeL[7] },
            'aPreComputeL8': { type: '3fv', value: apreComputeL[8] },
        }, ['aPrecomputeLT'], vertexShader, fragmentShader, null);
    }
}

async function buildPRTMaterial(apreComputeL,vertexPath, fragmentPath) {


    let vertexShader = await getShaderString(vertexPath);
    let fragmentShader = await getShaderString(fragmentPath);

    return new PRTMaterial(apreComputeL, vertexShader, fragmentShader);

}