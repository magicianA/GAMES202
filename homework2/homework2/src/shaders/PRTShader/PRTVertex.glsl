attribute vec3 aVertexPosition;
attribute vec3 aNormalPosition;
attribute vec2 aTextureCoord;

attribute mat3 aPrecomputeLT;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform vec3 aPreComputeL0;
uniform vec3 aPreComputeL8;
uniform vec3 aPreComputeL7;
uniform vec3 aPreComputeL6;
uniform vec3 aPreComputeL5;
uniform vec3 aPreComputeL4;
uniform vec3 aPreComputeL3;
uniform vec3 aPreComputeL2;
uniform vec3 aPreComputeL1;


varying highp vec3 vColor;

void main(void) {

  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix *
                vec4(aVertexPosition, 1.0);
  vColor = aPreComputeL0 * aPrecomputeLT[0][0]
           +aPreComputeL1 * aPrecomputeLT[0][1]
           +aPreComputeL2 * aPrecomputeLT[0][2]
           +aPreComputeL3 * aPrecomputeLT[1][0]
           +aPreComputeL4 * aPrecomputeLT[1][1]
           +aPreComputeL5 * aPrecomputeLT[1][2]
           +aPreComputeL6 * aPrecomputeLT[2][0]
           +aPreComputeL7 * aPrecomputeLT[2][1]
            +aPreComputeL8 * aPrecomputeLT[2][2];
//   vec3 t = vec3(1.0);
//              vColor = aPrecomputeLT[0][0]
//            +t*aPrecomputeLT[0][1]
//            +t*aPrecomputeLT[0][2]
//            +t*aPrecomputeLT[1][0]
//            +t*aPrecomputeLT[1][1]
//            +t*aPrecomputeLT[1][2]
//            +t*aPrecomputeLT[2][0]
//            +t*aPrecomputeLT[2][1]
//            +t*aPrecomputeLT[2][2];         
}