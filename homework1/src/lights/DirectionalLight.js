class DirectionalLight {

    constructor(lightIntensity, lightColor, lightPos, focalPoint, lightUp, hasShadowMap, gl) {
        this.mesh = Mesh.cube(setTransform(0, 0, 0, 0.2, 0.2, 0.2, 0));
        this.mat = new EmissiveMaterial(lightIntensity, lightColor);
        this.lightPos = lightPos;
        this.focalPoint = focalPoint;
        this.lightUp = lightUp

        this.hasShadowMap = hasShadowMap;
        this.fbo = new FBO(gl);
        if (!this.fbo) {
            console.log("无法设置帧缓冲区对象");
            return;
        }
    }

    CalcLightMVP(translate, scale) {
        let lightMVP = mat4.create();
        let modelMatrix = mat4.create();
        let viewMatrix = mat4.create();
        let projectionMatrix = mat4.create();

        // Model transform
        // 没有这玩意
        
        // View transform
        let translateM = mat4.create();
        mat4.set(translateM,
            0,0,0,translate[0],
            0,0,0,translate[1],
            0,0,0,translate[2],
            0,0,0,0);
        let scaleM = mat4.create();
        mat4.set(scaleM,
            scale[0],0,0,0,
            0,scale[1],0,0,
            0,0,scale[2],0,
            0,0,0,0);
        mat4.multiply(viewMatrix,scale,translate);

        // Projection transform
        

        mat4.multiply(lightMVP, projectionMatrix, viewMatrix);
        mat4.multiply(lightMVP, lightMVP, modelMatrix);
        return lightMVP;
    }
}
