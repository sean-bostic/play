(()=>{var Kp=Object.defineProperty;var pt=(i,e)=>()=>(i&&(e=i(i=0)),e);var jp=(i,e)=>{for(var t in e)Kp(i,t,{get:e[t],enumerable:!0})};var Sr,fo=pt(()=>{Sr=/\/[^/]+-lab\//.test(location.pathname);if(Sr)for(let i of["getItem","setItem","removeItem"]){let e=Storage.prototype[i];Storage.prototype[i]=function(t,...n){return e.call(this,`lab:${t}`,...n)}}});function kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function wl(i,e){return(i%e+e)%e}function Km(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jm(i,e,t){return i!==e?(t-i)/(e-i):0}function Fr(i,e,t){return(1-t)*i+t*e}function Zm(i,e,t,n){return Fr(i,e,1-Math.exp(-t*n))}function Jm(i,e=1){return e-Math.abs(wl(i,e*2)-e)}function $m(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function e0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function t0(i,e){return i+Math.random()*(e-i)}function n0(i){return i*(.5-Math.random())}function i0(i){i!==void 0&&(Eu=i);let e=Eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s0(i){return i*Or}function r0(i){return i*er}function Xc(i){return(i&i-1)===0&&i!==0}function o0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function a0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),A=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*A,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*A,a*l);break;case"ZYZ":i.set(c*A,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Yf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function c0(){let i=Gr("canvas");return i.style.display="block",i}function Br(i){i in Tu||(Tu[i]=!0,console.warn(i))}function Ks(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function mc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);let a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),c=e.dot(ts),l=t.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function Sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function M0(i,e,t,n,s,r,o,a){let c;if(e.side===un?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Kn,a),c===null)return null;Po.copy(a),Po.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Po);return l<t.near||l>t.far?null:{distance:l,point:Po.clone(),object:i}}function Lo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ns),i.getVertexPosition(c,Us),i.getVertexPosition(l,Os);let h=M0(i,e,t,n,Ns,Us,Os,Io);if(h){s&&(wo.fromBufferAttribute(s,a),Ro.fromBufferAttribute(s,c),Co.fromBufferAttribute(s,l),h.uv=as.getInterpolation(Io,Ns,Us,Os,wo,Ro,Co,new Ue)),r&&(wo.fromBufferAttribute(r,a),Ro.fromBufferAttribute(r,c),Co.fromBufferAttribute(r,l),h.uv1=as.getInterpolation(Io,Ns,Us,Os,wo,Ro,Co,new Ue),h.uv2=h.uv1),o&&(zu.fromBufferAttribute(o,a),ku.fromBufferAttribute(o,c),Hu.fromBufferAttribute(o,l),h.normal=as.getInterpolation(Io,Ns,Us,Os,zu,ku,Hu,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};as.getNormal(Ns,Us,Os,u.normal),h.face=u}return h}function tr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=tr(i[t]);for(let s in n)e[s]=n[s]}return e}function b0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jf(i){return i.getRenderTarget()===null?i.outputColorSpace:Qe.workingColorSpace}function Zf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function C0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,p=u.byteLength,A=i.createBuffer();i.bindBuffer(h,A),i.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:A,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let f=h.array,p=h._updateRange,A=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&A.length===0&&i.bufferSubData(u,0,f),A.length!==0){for(let x=0,m=A.length;x<m;x++){let d=A[x];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}function lx(i,e,t,n,s,r,o){let a=new we(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function A(m,d){let v=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?t:e).get(g)),g===null?x(a,c):g&&g.isColor&&(x(g,1),v=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ba)?(h===void 0&&(h=new At(new dn(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:tr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(g.colorSpace)!==mt,(u!==g||f!==g.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,f=g.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new At(new Gt(2,2),new mi({name:"BackgroundMaterial",uniforms:tr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(g.colorSpace)!==mt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=g,f=g.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,d){m.getRGB(No,jf(i)),n.buffers.color.setClear(No.r,No.g,No.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:A}}function hx(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(L,z,q,Z,J){let j=!1;if(o){let ie=x(Z,q,z);l!==ie&&(l=ie,p(l.object)),j=d(L,Z,q,J),j&&v(L,Z,q,J)}else{let ie=z.wireframe===!0;(l.geometry!==Z.id||l.program!==q.id||l.wireframe!==ie)&&(l.geometry=Z.id,l.program=q.id,l.wireframe=ie,j=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,G(L,z,q,Z),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function A(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,z,q){let Z=q.wireframe===!0,J=a[L.id];J===void 0&&(J={},a[L.id]=J);let j=J[z.id];j===void 0&&(j={},J[z.id]=j);let ie=j[Z];return ie===void 0&&(ie=m(f()),j[Z]=ie),ie}function m(L){let z=[],q=[],Z=[];for(let J=0;J<s;J++)z[J]=0,q[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:Z,object:L,attributes:{},index:null}}function d(L,z,q,Z){let J=l.attributes,j=z.attributes,ie=0,ce=q.getAttributes();for(let Ae in ce)if(ce[Ae].location>=0){let ee=J[Ae],me=j[Ae];if(me===void 0&&(Ae==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),Ae==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),ee===void 0||ee.attribute!==me||me&&ee.data!==me.data)return!0;ie++}return l.attributesNum!==ie||l.index!==Z}function v(L,z,q,Z){let J={},j=z.attributes,ie=0,ce=q.getAttributes();for(let Ae in ce)if(ce[Ae].location>=0){let ee=j[Ae];ee===void 0&&(Ae==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),Ae==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));let me={};me.attribute=ee,ee&&ee.data&&(me.data=ee.data),J[Ae]=me,ie++}l.attributes=J,l.attributesNum=ie,l.index=Z}function g(){let L=l.newAttributes;for(let z=0,q=L.length;z<q;z++)L[z]=0}function y(L){w(L,0)}function w(L,z){let q=l.newAttributes,Z=l.enabledAttributes,J=l.attributeDivisors;q[L]=1,Z[L]===0&&(i.enableVertexAttribArray(L),Z[L]=1),J[L]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),J[L]=z)}function R(){let L=l.newAttributes,z=l.enabledAttributes;for(let q=0,Z=z.length;q<Z;q++)z[q]!==L[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function C(L,z,q,Z,J,j,ie){ie===!0?i.vertexAttribIPointer(L,z,q,J,j):i.vertexAttribPointer(L,z,q,Z,J,j)}function G(L,z,q,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let J=Z.attributes,j=q.getAttributes(),ie=z.defaultAttributeValues;for(let ce in j){let Ae=j[ce];if(Ae.location>=0){let X=J[ce];if(X===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let ee=X.normalized,me=X.itemSize,Se=t.get(X);if(Se===void 0)continue;let ye=Se.buffer,Le=Se.type,ze=Se.bytesPerElement,Pe=n.isWebGL2===!0&&(Le===i.INT||Le===i.UNSIGNED_INT||X.gpuType===Uf);if(X.isInterleavedBufferAttribute){let Je=X.data,B=Je.stride,wt=X.offset;if(Je.isInstancedInterleavedBuffer){for(let Re=0;Re<Ae.locationSize;Re++)w(Ae.location+Re,Je.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let Re=0;Re<Ae.locationSize;Re++)y(Ae.location+Re);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Re=0;Re<Ae.locationSize;Re++)C(Ae.location+Re,me/Ae.locationSize,Le,ee,B*ze,(wt+me/Ae.locationSize*Re)*ze,Pe)}else{if(X.isInstancedBufferAttribute){for(let Je=0;Je<Ae.locationSize;Je++)w(Ae.location+Je,X.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Je=0;Je<Ae.locationSize;Je++)y(Ae.location+Je);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Je=0;Je<Ae.locationSize;Je++)C(Ae.location+Je,me/Ae.locationSize,Le,ee,me*ze,me/Ae.locationSize*Je*ze,Pe)}}else if(ie!==void 0){let ee=ie[ce];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(Ae.location,ee);break;case 3:i.vertexAttrib3fv(Ae.location,ee);break;case 4:i.vertexAttrib4fv(Ae.location,ee);break;default:i.vertexAttrib1fv(Ae.location,ee)}}}}R()}function M(){K();for(let L in a){let z=a[L];for(let q in z){let Z=z[q];for(let J in Z)A(Z[J].object),delete Z[J];delete z[q]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;let z=a[L.id];for(let q in z){let Z=z[q];for(let J in Z)A(Z[J].object),delete Z[J];delete z[q]}delete a[L.id]}function F(L){for(let z in a){let q=a[z];if(q[L.id]===void 0)continue;let Z=q[L.id];for(let J in Z)A(Z[J].object),delete Z[J];delete q[L.id]}}function K(){le(),h=!0,l!==c&&(l=c,p(l.object))}function le(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:K,resetDefaultState:le,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:g,enableAttribute:y,disableUnusedAttributes:R}}function ux(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,A;if(s)p=i,A="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[A](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let A=0;A<f;A++)this.render(h[A],u[A]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let A=0;for(let x=0;x<f;x++)A+=u[x];t.update(A,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function fx(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,y=o||e.has("OES_texture_float"),w=g&&y,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:A,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:R}}function dx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new hi,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let A=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||A===null||A.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,g=v*4,y=d.clippingState||null;c.value=y,y=h(A,f,g,p);for(let w=0;w!==g;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,A){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,A!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,y=p;g!==x;++g,y+=4)o.copy(u[g]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function px(i){let e=new WeakMap;function t(o,a){return a===Hc?o.mapping=Zs:a===Gc&&(o.mapping=Js),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Hc||a===Gc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new jc(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function mx(i){let e=[],t=[],n=[],s=i,r=i-Xs+1+Gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Xs?c=Gu[o-i+Xs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,A=6,x=3,m=2,d=1,v=new Float32Array(x*A*p),g=new Float32Array(m*A*p),y=new Float32Array(d*A*p);for(let R=0;R<p;R++){let C=R%3*2/3-1,G=R>2?0:-1,M=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];v.set(M,x*A*R),g.set(f,m*A*R);let T=[R,R,R,R,R,R];y.set(T,d*A*R)}let w=new Ht;w.setAttribute("position",new It(v,x)),w.setAttribute("uv",new It(g,m)),w.setAttribute("faceIndex",new It(y,d)),e.push(w),s>Xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xu(i,e,t){let n=new pi(i,e,t);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ax(i,e,t){let n=new Float32Array(os),s=new I(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function qu(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Yu(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Hc||c===Gc,h=c===Zs||c===Js;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new oa(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new oa(i));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yx(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let A in f.attributes)e.remove(f.attributes[A]);for(let A in f.morphAttributes){let x=f.morphAttributes[A];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let A in f)e.update(f[A],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let A in p){let x=p[A];for(let m=0,d=x.length;m<d;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,A=u.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let g=0,y=v.length;g<y;g+=3){let w=v[g+0],R=v[g+1],C=v[g+2];f.push(w,R,R,C,C,w)}}else if(A!==void 0){let v=A.array;x=A.version;for(let g=0,y=v.length/3-1;g<y;g+=3){let w=g+0,R=g+1,C=g+2;f.push(w,R,R,C,C,w)}}else return;let m=new(Yf(f)?ia:na)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function _x(i,e,t,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,A){i.drawElements(r,A,a,p*c),t.update(A,r,1)}function u(p,A,x){if(x===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,A,a,p*c,x),t.update(A,r,x)}function f(p,A,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/c,A[d]);else{m.multiDrawElementsWEBGL(r,A,0,a,p,0,x);let d=0;for(let v=0;v<x;v++)d+=A[v];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function vx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mx(i,e){return i[0]-e[0]}function bx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Sx(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new ot,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,A=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==A){let L=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],G=0;v===!0&&(G=1),g===!0&&(G=2),y===!0&&(G=3);let M=h.attributes.position.count*G,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let F=new Float32Array(M*T*4*A),K=new ea(F,M,T,A);K.type=ui,K.needsUpdate=!0;let le=G*4;for(let z=0;z<A;z++){let q=w[z],Z=R[z],J=C[z],j=M*T*4*z;for(let ie=0;ie<q.count;ie++){let ce=ie*le;v===!0&&(o.fromBufferAttribute(q,ie),F[j+ce+0]=o.x,F[j+ce+1]=o.y,F[j+ce+2]=o.z,F[j+ce+3]=0),g===!0&&(o.fromBufferAttribute(Z,ie),F[j+ce+4]=o.x,F[j+ce+5]=o.y,F[j+ce+6]=o.z,F[j+ce+7]=0),y===!0&&(o.fromBufferAttribute(J,ie),F[j+ce+8]=o.x,F[j+ce+9]=o.y,F[j+ce+10]=o.z,F[j+ce+11]=J.itemSize===4?o.w:1)}}x={count:A,texture:K,size:new Ue(M,T)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=f===void 0?0:f.length,A=n[h.id];if(A===void 0||A.length!==p){A=[];for(let g=0;g<p;g++)A[g]=[g,0];n[h.id]=A}for(let g=0;g<p;g++){let y=A[g];y[0]=g,y[1]=f[g]}A.sort(bx);for(let g=0;g<8;g++)g<p&&A[g][1]?(a[g][0]=A[g][0],a[g][1]=A[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Mx);let x=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let g=0;g<8;g++){let y=a[g],w=y[0],R=y[1];w!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+g)!==x[w]&&h.setAttribute("morphTarget"+g,x[w]),m&&h.getAttribute("morphNormal"+g)!==m[w]&&h.setAttribute("morphNormal"+g,m[w]),s[g]=R,d+=R):(x&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),m&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),s[g]=0)}let v=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Ex(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}function hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ta(i,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Ix(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;$u.set(n),i.uniformMatrix2fv(this.addr,!1,$u),Dt(t,n)}}function Px(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Ju.set(n),i.uniformMatrix3fv(this.addr,!1,Ju),Dt(t,n)}}function Lx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),Dt(t,n)}}function Dx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Fx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Hx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?$f:Jf;t.setTexture2D(e||r,s)}function Gx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ed,s)}function Vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||td,s)}function Wx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qf,s)}function Xx(i){switch(i){case 5126:return Tx;case 35664:return wx;case 35665:return Rx;case 35666:return Cx;case 35674:return Ix;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Nx;case 35668:case 35672:return Ux;case 35669:case 35673:return Ox;case 5125:return Fx;case 36294:return Bx;case 36295:return zx;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Wx}}function qx(i,e){i.uniform1fv(this.addr,e)}function Yx(i,e){let t=hr(e,this.size,2);i.uniform2fv(this.addr,t)}function Kx(i,e){let t=hr(e,this.size,3);i.uniform3fv(this.addr,t)}function jx(i,e){let t=hr(e,this.size,4);i.uniform4fv(this.addr,t)}function Zx(i,e){let t=hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jx(i,e){let t=hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $x(i,e){let t=hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qx(i,e){i.uniform1iv(this.addr,e)}function ey(i,e){i.uniform2iv(this.addr,e)}function ty(i,e){i.uniform3iv(this.addr,e)}function ny(i,e){i.uniform4iv(this.addr,e)}function iy(i,e){i.uniform1uiv(this.addr,e)}function sy(i,e){i.uniform2uiv(this.addr,e)}function ry(i,e){i.uniform3uiv(this.addr,e)}function oy(i,e){i.uniform4uiv(this.addr,e)}function ay(i,e,t){let n=this.cache,s=e.length,r=Ta(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Jf,r[o])}function cy(i,e,t){let n=this.cache,s=e.length,r=Ta(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ed,r[o])}function ly(i,e,t){let n=this.cache,s=e.length,r=Ta(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||td,r[o])}function hy(i,e,t){let n=this.cache,s=e.length,r=Ta(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qf,r[o])}function uy(i){switch(i){case 5126:return qx;case 35664:return Yx;case 35665:return Kx;case 35666:return jx;case 35674:return Zx;case 35675:return Jx;case 35676:return $x;case 5124:case 35670:return Qx;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return sy;case 36295:return ry;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return hy}}function Qu(i,e){i.seq.push(e),i.map[e.id]=e}function fy(i,e,t){let n=i.name,s=n.length;for(Lc.lastIndex=0;;){let r=Lc.exec(n),o=Lc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qu(t,l===void 0?new Zc(a,i,e):new Jc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new $c(a),Qu(t,u)),t=u}}}function ef(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function my(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ay(i){let e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(i),n;switch(e===t?n="":e===jo&&t===Ko?n="LinearDisplayP3ToLinearSRGB":e===Ko&&t===jo&&(n="LinearSRGBToLinearDisplayP3"),i){case Pt:case Ea:return[n,"LinearTransferOETF"];case tt:case Tl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function tf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+my(i.getShaderSource(e),o)}else return s}function gy(i,e){let t=Ay(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xy(i,e){let t;switch(e){case bm:t="Linear";break;case Sm:t="Reinhard";break;case Em:t="OptimizedCineon";break;case bl:t="ACESFilmic";break;case wm:t="AgX";break;case Tm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qs).join(`
`)}function _y(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qs).join(`
`)}function vy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function My(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qs(i){return i!==""}function nf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Qc(i){return i.replace(by,Ey)}function Ey(i,e){let t=Ye[e];if(t===void 0){let n=Sy.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}function rf(i){return i.replace(Ty,wy)}function wy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function of(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ry(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Cy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function Py(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Df:e="ENVMAP_BLENDING_MULTIPLY";break;case vm:e="ENVMAP_BLENDING_MIX";break;case Mm:e="ENVMAP_BLENDING_ADD";break}return e}function Ly(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Ry(t),l=Cy(t),h=Iy(t),u=Py(t),f=Ly(t),p=t.isWebGL2?"":yy(t),A=_y(t),x=vy(r),m=s.createProgram(),d,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(qs).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(qs).join(`
`),v.length>0&&(v+=`
`)):(d=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),v=[p,of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ui?xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,gy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),o=Qc(o),o=nf(o,t),o=sf(o,t),a=Qc(a),a=nf(a,t),a=sf(a,t),o=rf(o),a=rf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let y=g+d+o,w=g+v+a,R=ef(s,s.VERTEX_SHADER,y),C=ef(s,s.FRAGMENT_SHADER,w);s.attachShader(m,R),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function G(K){if(i.debug.checkShaderErrors){let le=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(R).trim(),z=s.getShaderInfoLog(C).trim(),q=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,R,C);else{let J=tf(s,R,"vertex"),j=tf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+J+`
`+j)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(L===""||z==="")&&(Z=!1);Z&&(K.diagnostics={runnable:q,programLog:le,vertexShader:{log:L,prefix:d},fragmentShader:{log:z,prefix:v}})}s.deleteShader(R),s.deleteShader(C),M=new js(s,m),T=My(s,m)}let M;this.getUniforms=function(){return M===void 0&&G(this),M};let T;this.getAttributes=function(){return T===void 0&&G(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,dy)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=py++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=C,this}function Uy(i,e,t,n,s,r,o){let a=new Vr,c=new el,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,T,F,K,le){let L=K.fog,z=le.geometry,q=M.isMeshStandardMaterial?K.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),J=Z&&Z.mapping===ba?Z.image.height:null,j=A[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ce=ie!==void 0?ie.length:0,Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let X,ee,me,Se;if(j){let nn=qn[j];X=nn.vertexShader,ee=nn.fragmentShader}else X=M.vertexShader,ee=M.fragmentShader,c.update(M),me=c.getVertexShaderID(M),Se=c.getFragmentShaderID(M);let ye=i.getRenderTarget(),Le=le.isInstancedMesh===!0,ze=le.isBatchedMesh===!0,Pe=!!M.map,Je=!!M.matcap,B=!!Z,wt=!!M.aoMap,Re=!!M.lightMap,ke=!!M.bumpMap,_e=!!M.normalMap,dt=!!M.displacementMap,He=!!M.emissiveMap,E=!!M.metalnessMap,_=!!M.roughnessMap,k=M.anisotropy>0,re=M.clearcoat>0,te=M.iridescence>0,oe=M.sheen>0,ve=M.transmission>0,pe=k&&!!M.anisotropyMap,b=re&&!!M.clearcoatMap,N=re&&!!M.clearcoatNormalMap,U=re&&!!M.clearcoatRoughnessMap,D=te&&!!M.iridescenceMap,Y=te&&!!M.iridescenceThicknessMap,ae=oe&&!!M.sheenColorMap,ne=oe&&!!M.sheenRoughnessMap,$=!!M.specularMap,Q=!!M.specularColorMap,ue=!!M.specularIntensityMap,Ce=ve&&!!M.transmissionMap,qe=ve&&!!M.thicknessMap,Me=!!M.gradientMap,se=!!M.alphaMap,P=M.alphaTest>0,fe=!!M.alphaHash,de=!!M.extensions,De=!!z.attributes.uv1,Ie=!!z.attributes.uv2,ct=!!z.attributes.uv3,lt=Ui;return M.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(lt=i.toneMapping),{isWebGL2:h,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:ee,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ze,instancing:Le,instancingColor:Le&&le.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Pt,map:Pe,matcap:Je,envMap:B,envMapMode:B&&Z.mapping,envMapCubeUVHeight:J,aoMap:wt,lightMap:Re,bumpMap:ke,normalMap:_e,displacementMap:f&&dt,emissiveMap:He,normalMapObjectSpace:_e&&M.normalMapType===km,normalMapTangentSpace:_e&&M.normalMapType===Wf,metalnessMap:E,roughnessMap:_,anisotropy:k,anisotropyMap:pe,clearcoat:re,clearcoatMap:b,clearcoatNormalMap:N,clearcoatRoughnessMap:U,iridescence:te,iridescenceMap:D,iridescenceThicknessMap:Y,sheen:oe,sheenColorMap:ae,sheenRoughnessMap:ne,specularMap:$,specularColorMap:Q,specularIntensityMap:ue,transmission:ve,transmissionMap:Ce,thicknessMap:qe,gradientMap:Me,opaque:M.transparent===!1&&M.blending===Ys,alphaMap:se,alphaTest:P,alphaHash:fe,combine:M.combine,mapUv:Pe&&x(M.map.channel),aoMapUv:wt&&x(M.aoMap.channel),lightMapUv:Re&&x(M.lightMap.channel),bumpMapUv:ke&&x(M.bumpMap.channel),normalMapUv:_e&&x(M.normalMap.channel),displacementMapUv:dt&&x(M.displacementMap.channel),emissiveMapUv:He&&x(M.emissiveMap.channel),metalnessMapUv:E&&x(M.metalnessMap.channel),roughnessMapUv:_&&x(M.roughnessMap.channel),anisotropyMapUv:pe&&x(M.anisotropyMap.channel),clearcoatMapUv:b&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:N&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ne&&x(M.sheenRoughnessMap.channel),specularMapUv:$&&x(M.specularMap.channel),specularColorMapUv:Q&&x(M.specularColorMap.channel),specularIntensityMapUv:ue&&x(M.specularIntensityMap.channel),transmissionMapUv:Ce&&x(M.transmissionMap.channel),thicknessMapUv:qe&&x(M.thicknessMap.channel),alphaMapUv:se&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(_e||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ie,vertexUv3s:ct,pointsUvs:le.isPoints===!0&&!!z.attributes.uv&&(Pe||se),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:le.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:de&&M.extensions.derivatives===!0,extensionFragDepth:de&&M.extensions.fragDepth===!0,extensionDrawBuffers:de&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let F in M.defines)T.push(F),T.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(v(T,M),g(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function g(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){let T=A[M.type],F;if(T){let K=qn[T];F=S0.clone(K.uniforms)}else F=M.uniforms;return F}function w(M,T){let F;for(let K=0,le=l.length;K<le;K++){let L=l[K];if(L.cacheKey===T){F=L,++F.usedTimes;break}}return F===void 0&&(F=new Dy(i,T,M,r),l.push(F)),F}function R(M){if(--M.usedTimes===0){let T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function C(M){c.remove(M)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:R,releaseShaderCache:C,programs:l,dispose:G}}function Oy(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Fy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function af(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,A,x,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:A,renderOrder:u.renderOrder,z:x,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=A,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,f,p,A,x,m){let d=o(u,f,p,A,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,A,x,m){let d=o(u,f,p,A,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||Fy),n.length>1&&n.sort(f||af),s.length>1&&s.sort(f||af)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function By(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new cf,i.set(n,[o])):s>=r.length?(o=new cf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new we};break;case"SpotLight":t={position:new I,direction:new I,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function ky(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Gy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vy(i,e){let t=new zy,n=ky(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new Xe,a=new Xe;function c(h,u){let f=0,p=0,A=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let x=0,m=0,d=0,v=0,g=0,y=0,w=0,R=0,C=0,G=0,M=0;h.sort(Gy);let T=u===!0?Math.PI:1;for(let K=0,le=h.length;K<le;K++){let L=h[K],z=L.color,q=L.intensity,Z=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=z.r*q*T,p+=z.g*q*T,A+=z.b*q*T;else if(L.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(L.sh.coefficients[j],q);M++}else if(L.isDirectionalLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){let ie=L.shadow,ce=n.get(L);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,s.directionalShadow[x]=ce,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=L.shadow.matrix,y++}s.directional[x]=j,x++}else if(L.isSpotLight){let j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(z).multiplyScalar(q*T),j.distance=Z,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,s.spot[d]=j;let ie=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,ie.updateMatrices(L),L.castShadow&&G++),s.spotLightMatrix[d]=ie.matrix,L.castShadow){let ce=n.get(L);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,s.spotShadow[d]=ce,s.spotShadowMap[d]=J,R++}d++}else if(L.isRectAreaLight){let j=t.get(L);j.color.copy(z).multiplyScalar(q),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=j,v++}else if(L.isPointLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*T),j.distance=L.distance,j.decay=L.decay,L.castShadow){let ie=L.shadow,ce=n.get(L);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,ce.shadowCameraNear=ie.camera.near,ce.shadowCameraFar=ie.camera.far,s.pointShadow[m]=ce,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,w++}s.point[m]=j,m++}else if(L.isHemisphereLight){let j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(q*T),j.groundColor.copy(L.groundColor).multiplyScalar(q*T),s.hemi[g]=j,g++}}v>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=A;let F=s.hash;(F.directionalLength!==x||F.pointLength!==m||F.spotLength!==d||F.rectAreaLength!==v||F.hemiLength!==g||F.numDirectionalShadows!==y||F.numPointShadows!==w||F.numSpotShadows!==R||F.numSpotMaps!==C||F.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=v,s.point.length=m,s.hemi.length=g,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=R+C-G,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=M,F.directionalLength=x,F.pointLength=m,F.spotLength=d,F.rectAreaLength=v,F.hemiLength=g,F.numDirectionalShadows=y,F.numPointShadows=w,F.numSpotShadows=R,F.numSpotMaps=C,F.numLightProbes=M,s.version=Hy++)}function l(h,u){let f=0,p=0,A=0,x=0,m=0,d=u.matrixWorldInverse;for(let v=0,g=h.length;v<g;v++){let y=h[v];if(y.isDirectionalLight){let w=s.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),f++}else if(y.isSpotLight){let w=s.spot[A];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),A++}else if(y.isRectAreaLight){let w=s.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let w=s.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let w=s.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function lf(i,e){let t=new Vy(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Wy(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new lf(i,e),t.set(r,[c])):o>=a.length?(c=new lf(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}function Yy(i,e,t){let n=new Wr,s=new Ue,r=new Ue,o=new ot,a=new nl({depthPacking:zm}),c=new il,l={},h=t.maxTextureSize,u={[Kn]:un,[un]:Kn,[hn]:hn},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Xy,fragmentShader:qy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let A=new Ht;A.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new At(A,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lf;let d=this.type;this.render=function(R,C,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let M=i.getRenderTarget(),T=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Ni),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let le=d!==li&&this.type===li,L=d===li&&this.type!==li;for(let z=0,q=R.length;z<q;z++){let Z=R[z],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let j=J.getFrameExtents();if(s.multiply(j),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,J.mapSize.y=r.y)),J.map===null||le===!0||L===!0){let ce=this.type!==li?{minFilter:Rt,magFilter:Rt}:{};J.map!==null&&J.map.dispose(),J.map=new pi(s.x,s.y,ce),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let ie=J.getViewportCount();for(let ce=0;ce<ie;ce++){let Ae=J.getViewport(ce);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),K.viewport(o),J.updateMatrices(Z,ce),n=J.getFrustum(),y(C,G,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===li&&v(J,G),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,T,F)};function v(R,C){let G=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,G,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,G,p,x,null)}function g(R,C,G,M){let T=null,F=G.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)T=F;else if(T=G.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let K=T.uuid,le=C.uuid,L=l[K];L===void 0&&(L={},l[K]=L);let z=L[le];z===void 0&&(z=T.clone(),L[le]=z,C.addEventListener("dispose",w)),T=z}if(T.visible=C.visible,T.wireframe=C.wireframe,M===li?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let K=i.properties.get(T);K.light=G}return T}function y(R,C,G,M,T){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===li)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld);let le=e.update(R),L=R.material;if(Array.isArray(L)){let z=le.groups;for(let q=0,Z=z.length;q<Z;q++){let J=z[q],j=L[J.materialIndex];if(j&&j.visible){let ie=g(R,j,M,T);R.onBeforeShadow(i,R,C,G,le,ie,J),i.renderBufferDirect(G,null,le,ie,R,J),R.onAfterShadow(i,R,C,G,le,ie,J)}}}else if(L.visible){let z=g(R,L,M,T);R.onBeforeShadow(i,R,C,G,le,z,null),i.renderBufferDirect(G,null,le,z,R,null),R.onAfterShadow(i,R,C,G,le,z,null)}}let K=R.children;for(let le=0,L=K.length;le<L;le++)y(K[le],C,G,M,T)}function w(R){R.target.removeEventListener("dispose",w);for(let G in l){let M=l[G],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Ky(i,e,t){let n=t.isWebGL2;function s(){let P=!1,fe=new ot,de=null,De=new ot(0,0,0,0);return{setMask:function(Ie){de!==Ie&&!P&&(i.colorMask(Ie,Ie,Ie,Ie),de=Ie)},setLocked:function(Ie){P=Ie},setClear:function(Ie,ct,lt,Ft,nn){nn===!0&&(Ie*=Ft,ct*=Ft,lt*=Ft),fe.set(Ie,ct,lt,Ft),De.equals(fe)===!1&&(i.clearColor(Ie,ct,lt,Ft),De.copy(fe))},reset:function(){P=!1,de=null,De.set(-1,0,0,0)}}}function r(){let P=!1,fe=null,de=null,De=null;return{setTest:function(Ie){Ie?ze(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(Ie){fe!==Ie&&!P&&(i.depthMask(Ie),fe=Ie)},setFunc:function(Ie){if(de!==Ie){switch(Ie){case pm:i.depthFunc(i.NEVER);break;case mm:i.depthFunc(i.ALWAYS);break;case Am:i.depthFunc(i.LESS);break;case Xo:i.depthFunc(i.LEQUAL);break;case gm:i.depthFunc(i.EQUAL);break;case xm:i.depthFunc(i.GEQUAL);break;case ym:i.depthFunc(i.GREATER);break;case _m:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Ie}},setLocked:function(Ie){P=Ie},setClear:function(Ie){De!==Ie&&(i.clearDepth(Ie),De=Ie)},reset:function(){P=!1,fe=null,de=null,De=null}}}function o(){let P=!1,fe=null,de=null,De=null,Ie=null,ct=null,lt=null,Ft=null,nn=null;return{setTest:function(ht){P||(ht?ze(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(ht){fe!==ht&&!P&&(i.stencilMask(ht),fe=ht)},setFunc:function(ht,sn,Xn){(de!==ht||De!==sn||Ie!==Xn)&&(i.stencilFunc(ht,sn,Xn),de=ht,De=sn,Ie=Xn)},setOp:function(ht,sn,Xn){(ct!==ht||lt!==sn||Ft!==Xn)&&(i.stencilOp(ht,sn,Xn),ct=ht,lt=sn,Ft=Xn)},setLocked:function(ht){P=ht},setClear:function(ht){nn!==ht&&(i.clearStencil(ht),nn=ht)},reset:function(){P=!1,fe=null,de=null,De=null,Ie=null,ct=null,lt=null,Ft=null,nn=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},p={},A=new WeakMap,x=[],m=null,d=!1,v=null,g=null,y=null,w=null,R=null,C=null,G=null,M=new we(0,0,0),T=0,F=!1,K=null,le=null,L=null,z=null,q=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,j=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=j>=1):ie.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=j>=2);let ce=null,Ae={},X=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),me=new ot().fromArray(X),Se=new ot().fromArray(ee);function ye(P,fe,de,De){let Ie=new Uint8Array(4),ct=i.createTexture();i.bindTexture(P,ct),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<de;lt++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(fe,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(fe+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return ct}let Le={};Le[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ze(i.DEPTH_TEST),c.setFunc(Xo),He(!1),E(Gh),ze(i.CULL_FACE),_e(Ni);function ze(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function Pe(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Je(P,fe){return p[P]!==fe?(i.bindFramebuffer(P,fe),p[P]=fe,n&&(P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=fe),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=fe)),!0):!1}function B(P,fe){let de=x,De=!1;if(P)if(de=A.get(fe),de===void 0&&(de=[],A.set(fe,de)),P.isWebGLMultipleRenderTargets){let Ie=P.texture;if(de.length!==Ie.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,lt=Ie.length;ct<lt;ct++)de[ct]=i.COLOR_ATTACHMENT0+ct;de.length=Ie.length,De=!0}}else de[0]!==i.COLOR_ATTACHMENT0&&(de[0]=i.COLOR_ATTACHMENT0,De=!0);else de[0]!==i.BACK&&(de[0]=i.BACK,De=!0);De&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function wt(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let Re={[rs]:i.FUNC_ADD,[Qp]:i.FUNC_SUBTRACT,[em]:i.FUNC_REVERSE_SUBTRACT};if(n)Re[qh]=i.MIN,Re[Yh]=i.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(Re[qh]=P.MIN_EXT,Re[Yh]=P.MAX_EXT)}let ke={[tm]:i.ZERO,[nm]:i.ONE,[im]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[lm]:i.SRC_ALPHA_SATURATE,[am]:i.DST_COLOR,[rm]:i.DST_ALPHA,[sm]:i.ONE_MINUS_SRC_COLOR,[kc]:i.ONE_MINUS_SRC_ALPHA,[cm]:i.ONE_MINUS_DST_COLOR,[om]:i.ONE_MINUS_DST_ALPHA,[hm]:i.CONSTANT_COLOR,[um]:i.ONE_MINUS_CONSTANT_COLOR,[fm]:i.CONSTANT_ALPHA,[dm]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(P,fe,de,De,Ie,ct,lt,Ft,nn,ht){if(P===Ni){d===!0&&(Pe(i.BLEND),d=!1);return}if(d===!1&&(ze(i.BLEND),d=!0),P!==$p){if(P!==v||ht!==F){if((g!==rs||R!==rs)&&(i.blendEquation(i.FUNC_ADD),g=rs,R=rs),ht)switch(P){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vh:i.blendFunc(i.ONE,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,w=null,C=null,G=null,M.set(0,0,0),T=0,v=P,F=ht}return}Ie=Ie||fe,ct=ct||de,lt=lt||De,(fe!==g||Ie!==R)&&(i.blendEquationSeparate(Re[fe],Re[Ie]),g=fe,R=Ie),(de!==y||De!==w||ct!==C||lt!==G)&&(i.blendFuncSeparate(ke[de],ke[De],ke[ct],ke[lt]),y=de,w=De,C=ct,G=lt),(Ft.equals(M)===!1||nn!==T)&&(i.blendColor(Ft.r,Ft.g,Ft.b,nn),M.copy(Ft),T=nn),v=P,F=!1}function dt(P,fe){P.side===hn?Pe(i.CULL_FACE):ze(i.CULL_FACE);let de=P.side===un;fe&&(de=!de),He(de),P.blending===Ys&&P.transparent===!1?_e(Ni):_e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);let De=P.stencilWrite;l.setTest(De),De&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ze(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){K!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),K=P)}function E(P){P!==Zp?(ze(i.CULL_FACE),P!==le&&(P===Gh?i.cullFace(i.BACK):P===Jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),le=P}function _(P){P!==L&&(J&&i.lineWidth(P),L=P)}function k(P,fe,de){P?(ze(i.POLYGON_OFFSET_FILL),(z!==fe||q!==de)&&(i.polygonOffset(fe,de),z=fe,q=de)):Pe(i.POLYGON_OFFSET_FILL)}function re(P){P?ze(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function te(P){P===void 0&&(P=i.TEXTURE0+Z-1),ce!==P&&(i.activeTexture(P),ce=P)}function oe(P,fe,de){de===void 0&&(ce===null?de=i.TEXTURE0+Z-1:de=ce);let De=Ae[de];De===void 0&&(De={type:void 0,texture:void 0},Ae[de]=De),(De.type!==P||De.texture!==fe)&&(ce!==de&&(i.activeTexture(de),ce=de),i.bindTexture(P,fe||Le[P]),De.type=P,De.texture=fe)}function ve(){let P=Ae[ce];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function b(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function D(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(P){me.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),me.copy(P))}function Ce(P){Se.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Se.copy(P))}function qe(P,fe){let de=u.get(fe);de===void 0&&(de=new WeakMap,u.set(fe,de));let De=de.get(P);De===void 0&&(De=i.getUniformBlockIndex(fe,P.name),de.set(P,De))}function Me(P,fe){let De=u.get(fe).get(P);h.get(fe)!==De&&(i.uniformBlockBinding(fe,De,P.__bindingPointIndex),h.set(fe,De))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ce=null,Ae={},p={},A=new WeakMap,x=[],m=null,d=!1,v=null,g=null,y=null,w=null,R=null,C=null,G=null,M=new we(0,0,0),T=0,F=!1,K=null,le=null,L=null,z=null,q=null,me.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ze,disable:Pe,bindFramebuffer:Je,drawBuffers:B,useProgram:wt,setBlending:_e,setMaterial:dt,setFlipSided:He,setCullFace:E,setLineWidth:_,setPolygonOffset:k,setScissorTest:re,activeTexture:te,bindTexture:oe,unbindTexture:ve,compressedTexImage2D:pe,compressedTexImage3D:b,texImage2D:$,texImage3D:Q,updateUBOMapping:qe,uniformBlockBinding:Me,texStorage2D:ae,texStorage3D:ne,texSubImage2D:N,texSubImage3D:U,compressedTexSubImage2D:D,compressedTexSubImage3D:Y,scissor:ue,viewport:Ce,reset:se}}function jy(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(E,_){return p?new OffscreenCanvas(E,_):Gr("canvas")}function x(E,_,k,re){let te=1;if((E.width>re||E.height>re)&&(te=re/Math.max(E.width,E.height)),te<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let oe=_?Jo:Math.floor,ve=oe(te*E.width),pe=oe(te*E.height);u===void 0&&(u=A(ve,pe));let b=k?A(ve,pe):u;return b.width=ve,b.height=pe,b.getContext("2d").drawImage(E,0,0,ve,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+pe+")."),b}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Xc(E.width)&&Xc(E.height)}function d(E){return a?!1:E.wrapS!==kt||E.wrapT!==kt||E.minFilter!==Rt&&E.minFilter!==an}function v(E,_){return E.generateMipmaps&&_&&E.minFilter!==Rt&&E.minFilter!==an}function g(E){i.generateMipmap(E)}function y(E,_,k,re,te=!1){if(a===!1)return _;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe=_;if(_===i.RED&&(k===i.FLOAT&&(oe=i.R32F),k===i.HALF_FLOAT&&(oe=i.R16F),k===i.UNSIGNED_BYTE&&(oe=i.R8)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(oe=i.R8UI),k===i.UNSIGNED_SHORT&&(oe=i.R16UI),k===i.UNSIGNED_INT&&(oe=i.R32UI),k===i.BYTE&&(oe=i.R8I),k===i.SHORT&&(oe=i.R16I),k===i.INT&&(oe=i.R32I)),_===i.RG&&(k===i.FLOAT&&(oe=i.RG32F),k===i.HALF_FLOAT&&(oe=i.RG16F),k===i.UNSIGNED_BYTE&&(oe=i.RG8)),_===i.RGBA){let ve=te?Yo:Qe.getTransfer(re);k===i.FLOAT&&(oe=i.RGBA32F),k===i.HALF_FLOAT&&(oe=i.RGBA16F),k===i.UNSIGNED_BYTE&&(oe=ve===mt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function w(E,_,k){return v(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==Rt&&E.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){return E===Rt||E===qo||E===Ur?i.NEAREST:i.LINEAR}function C(E){let _=E.target;_.removeEventListener("dispose",C),M(_),_.isVideoTexture&&h.delete(_)}function G(E){let _=E.target;_.removeEventListener("dispose",G),F(_)}function M(E){let _=n.get(E);if(_.__webglInit===void 0)return;let k=E.source,re=f.get(k);if(re){let te=re[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(E),Object.keys(re).length===0&&f.delete(k)}n.remove(E)}function T(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let k=E.source,re=f.get(k);delete re[_.__cacheKey],o.memory.textures--}function F(E){let _=E.texture,k=n.get(E),re=n.get(_);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(k.__webglFramebuffer[te]))for(let oe=0;oe<k.__webglFramebuffer[te].length;oe++)i.deleteFramebuffer(k.__webglFramebuffer[te][oe]);else i.deleteFramebuffer(k.__webglFramebuffer[te]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[te])}else{if(Array.isArray(k.__webglFramebuffer))for(let te=0;te<k.__webglFramebuffer.length;te++)i.deleteFramebuffer(k.__webglFramebuffer[te]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let te=0,oe=_.length;te<oe;te++){let ve=n.get(_[te]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(_[te])}n.remove(_),n.remove(E)}let K=0;function le(){K=0}function L(){let E=K;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),K+=1,E}function z(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function q(E,_){let k=n.get(E);if(E.isVideoTexture&&dt(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let re=E.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(k,E,_);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function Z(E,_){let k=n.get(E);if(E.version>0&&k.__version!==E.version){me(k,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function J(E,_){let k=n.get(E);if(E.version>0&&k.__version!==E.version){me(k,E,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function j(E,_){let k=n.get(E);if(E.version>0&&k.__version!==E.version){Se(k,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let ie={[di]:i.REPEAT,[kt]:i.CLAMP_TO_EDGE,[kr]:i.MIRRORED_REPEAT},ce={[Rt]:i.NEAREST,[qo]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Sl]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},Ae={[Hm]:i.NEVER,[Ym]:i.ALWAYS,[Gm]:i.LESS,[Xf]:i.LEQUAL,[Vm]:i.EQUAL,[qm]:i.GEQUAL,[Wm]:i.GREATER,[Xm]:i.NOTEQUAL};function X(E,_,k){if(k?(i.texParameteri(E,i.TEXTURE_WRAP_S,ie[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ie[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ie[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ce[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ce[_.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==kt||_.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,R(_.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==Rt&&_.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let re=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Rt||_.minFilter!==Ur&&_.minFilter!==Fi||_.type===ui&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Hr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(E,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function ee(E,_){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));let re=_.source,te=f.get(re);te===void 0&&(te={},f.set(re,te));let oe=z(_);if(oe!==E.__cacheKey){te[oe]===void 0&&(te[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[oe].usedTimes++;let ve=te[E.__cacheKey];ve!==void 0&&(te[E.__cacheKey].usedTimes--,ve.usedTimes===0&&T(_)),E.__cacheKey=oe,E.__webglTexture=te[oe].texture}return k}function me(E,_,k){let re=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(re=i.TEXTURE_3D);let te=ee(E,_),oe=_.source;t.bindTexture(re,E.__webglTexture,i.TEXTURE0+k);let ve=n.get(oe);if(oe.version!==ve.__version||te===!0){t.activeTexture(i.TEXTURE0+k);let pe=Qe.getPrimaries(Qe.workingColorSpace),b=_.colorSpace===Rn?null:Qe.getPrimaries(_.colorSpace),N=_.colorSpace===Rn||pe===b?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);let U=d(_)&&m(_.image)===!1,D=x(_.image,U,!1,s.maxTextureSize);D=He(_,D);let Y=m(D)||a,ae=r.convert(_.format,_.colorSpace),ne=r.convert(_.type),$=y(_.internalFormat,ae,ne,_.colorSpace,_.isVideoTexture);X(re,_,Y);let Q,ue=_.mipmaps,Ce=a&&_.isVideoTexture!==!0&&$!==Hf,qe=ve.__version===void 0||te===!0,Me=w(_,D,Y);if(_.isDepthTexture)$=i.DEPTH_COMPONENT,a?_.type===ui?$=i.DEPTH_COMPONENT32F:_.type===Li?$=i.DEPTH_COMPONENT24:_.type===cs?$=i.DEPTH24_STENCIL8:$=i.DEPTH_COMPONENT16:_.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ls&&$===i.DEPTH_COMPONENT&&_.type!==El&&_.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Li,ne=r.convert(_.type)),_.format===$s&&$===i.DEPTH_COMPONENT&&($=i.DEPTH_STENCIL,_.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=cs,ne=r.convert(_.type))),qe&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,$,D.width,D.height):t.texImage2D(i.TEXTURE_2D,0,$,D.width,D.height,0,ae,ne,null));else if(_.isDataTexture)if(ue.length>0&&Y){Ce&&qe&&t.texStorage2D(i.TEXTURE_2D,Me,$,ue[0].width,ue[0].height);for(let se=0,P=ue.length;se<P;se++)Q=ue[se],Ce?t.texSubImage2D(i.TEXTURE_2D,se,0,0,Q.width,Q.height,ae,ne,Q.data):t.texImage2D(i.TEXTURE_2D,se,$,Q.width,Q.height,0,ae,ne,Q.data);_.generateMipmaps=!1}else Ce?(qe&&t.texStorage2D(i.TEXTURE_2D,Me,$,D.width,D.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,D.width,D.height,ae,ne,D.data)):t.texImage2D(i.TEXTURE_2D,0,$,D.width,D.height,0,ae,ne,D.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ce&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,$,ue[0].width,ue[0].height,D.depth);for(let se=0,P=ue.length;se<P;se++)Q=ue[se],_.format!==wn?ae!==null?Ce?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Q.width,Q.height,D.depth,ae,Q.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,$,Q.width,Q.height,D.depth,0,Q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Q.width,Q.height,D.depth,ae,ne,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,$,Q.width,Q.height,D.depth,0,ae,ne,Q.data)}else{Ce&&qe&&t.texStorage2D(i.TEXTURE_2D,Me,$,ue[0].width,ue[0].height);for(let se=0,P=ue.length;se<P;se++)Q=ue[se],_.format!==wn?ae!==null?Ce?t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Q.width,Q.height,ae,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,se,$,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(i.TEXTURE_2D,se,0,0,Q.width,Q.height,ae,ne,Q.data):t.texImage2D(i.TEXTURE_2D,se,$,Q.width,Q.height,0,ae,ne,Q.data)}else if(_.isDataArrayTexture)Ce?(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,$,D.width,D.height,D.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,ae,ne,D.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,D.width,D.height,D.depth,0,ae,ne,D.data);else if(_.isData3DTexture)Ce?(qe&&t.texStorage3D(i.TEXTURE_3D,Me,$,D.width,D.height,D.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,ae,ne,D.data)):t.texImage3D(i.TEXTURE_3D,0,$,D.width,D.height,D.depth,0,ae,ne,D.data);else if(_.isFramebufferTexture){if(qe)if(Ce)t.texStorage2D(i.TEXTURE_2D,Me,$,D.width,D.height);else{let se=D.width,P=D.height;for(let fe=0;fe<Me;fe++)t.texImage2D(i.TEXTURE_2D,fe,$,se,P,0,ae,ne,null),se>>=1,P>>=1}}else if(ue.length>0&&Y){Ce&&qe&&t.texStorage2D(i.TEXTURE_2D,Me,$,ue[0].width,ue[0].height);for(let se=0,P=ue.length;se<P;se++)Q=ue[se],Ce?t.texSubImage2D(i.TEXTURE_2D,se,0,0,ae,ne,Q):t.texImage2D(i.TEXTURE_2D,se,$,ae,ne,Q);_.generateMipmaps=!1}else Ce?(qe&&t.texStorage2D(i.TEXTURE_2D,Me,$,D.width,D.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ne,D)):t.texImage2D(i.TEXTURE_2D,0,$,ae,ne,D);v(_,Y)&&g(re),ve.__version=oe.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Se(E,_,k){if(_.image.length!==6)return;let re=ee(E,_),te=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);let oe=n.get(te);if(te.version!==oe.__version||re===!0){t.activeTexture(i.TEXTURE0+k);let ve=Qe.getPrimaries(Qe.workingColorSpace),pe=_.colorSpace===Rn?null:Qe.getPrimaries(_.colorSpace),b=_.colorSpace===Rn||ve===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);let N=_.isCompressedTexture||_.image[0].isCompressedTexture,U=_.image[0]&&_.image[0].isDataTexture,D=[];for(let se=0;se<6;se++)!N&&!U?D[se]=x(_.image[se],!1,!0,s.maxCubemapSize):D[se]=U?_.image[se].image:_.image[se],D[se]=He(_,D[se]);let Y=D[0],ae=m(Y)||a,ne=r.convert(_.format,_.colorSpace),$=r.convert(_.type),Q=y(_.internalFormat,ne,$,_.colorSpace),ue=a&&_.isVideoTexture!==!0,Ce=oe.__version===void 0||re===!0,qe=w(_,Y,ae);X(i.TEXTURE_CUBE_MAP,_,ae);let Me;if(N){ue&&Ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Q,Y.width,Y.height);for(let se=0;se<6;se++){Me=D[se].mipmaps;for(let P=0;P<Me.length;P++){let fe=Me[P];_.format!==wn?ne!==null?ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,0,0,fe.width,fe.height,ne,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,Q,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,0,0,fe.width,fe.height,ne,$,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,Q,fe.width,fe.height,0,ne,$,fe.data)}}}else{Me=_.mipmaps,ue&&Ce&&(Me.length>0&&qe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Q,D[0].width,D[0].height));for(let se=0;se<6;se++)if(U){ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,D[se].width,D[se].height,ne,$,D[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Q,D[se].width,D[se].height,0,ne,$,D[se].data);for(let P=0;P<Me.length;P++){let de=Me[P].image[se].image;ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,0,0,de.width,de.height,ne,$,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,Q,de.width,de.height,0,ne,$,de.data)}}else{ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne,$,D[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Q,ne,$,D[se]);for(let P=0;P<Me.length;P++){let fe=Me[P];ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,0,0,ne,$,fe.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,Q,ne,$,fe.image[se])}}}v(_,ae)&&g(i.TEXTURE_CUBE_MAP),oe.__version=te.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ye(E,_,k,re,te,oe){let ve=r.convert(k.format,k.colorSpace),pe=r.convert(k.type),b=y(k.internalFormat,ve,pe,k.colorSpace);if(!n.get(_).__hasExternalTextures){let U=Math.max(1,_.width>>oe),D=Math.max(1,_.height>>oe);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,oe,b,U,D,_.depth,0,ve,pe,null):t.texImage2D(te,oe,b,U,D,0,ve,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),_e(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,te,n.get(k).__webglTexture,0,ke(_)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,te,n.get(k).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(E,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let re=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||_e(_)){let te=_.depthTexture;te&&te.isDepthTexture&&(te.type===ui?re=i.DEPTH_COMPONENT32F:te.type===Li&&(re=i.DEPTH_COMPONENT24));let oe=ke(_);_e(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,re,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,re,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){let re=ke(_);k&&_e(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,_.width,_.height):_e(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let re=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let te=0;te<re.length;te++){let oe=re[te],ve=r.convert(oe.format,oe.colorSpace),pe=r.convert(oe.type),b=y(oe.internalFormat,ve,pe,oe.colorSpace),N=ke(_);k&&_e(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,b,_.width,_.height):_e(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,b,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,b,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let re=n.get(_.depthTexture).__webglTexture,te=ke(_);if(_.depthTexture.format===ls)_e(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(_.depthTexture.format===$s)_e(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Pe(E){let _=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ze(_.__webglFramebuffer,E)}else if(k){_.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[re]),_.__webglDepthbuffer[re]=i.createRenderbuffer(),Le(_.__webglDepthbuffer[re],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Le(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(E,_,k){let re=n.get(E);_!==void 0&&ye(re.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Pe(E)}function B(E){let _=E.texture,k=n.get(E),re=n.get(_);E.addEventListener("dispose",G),E.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=_.version,o.memory.textures++);let te=E.isWebGLCubeRenderTarget===!0,oe=E.isWebGLMultipleRenderTargets===!0,ve=m(E)||a;if(te){k.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[pe]=[];for(let b=0;b<_.mipmaps.length;b++)k.__webglFramebuffer[pe][b]=i.createFramebuffer()}else k.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)k.__webglFramebuffer[pe]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(oe)if(s.drawBuffers){let pe=E.texture;for(let b=0,N=pe.length;b<N;b++){let U=n.get(pe[b]);U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&_e(E)===!1){let pe=oe?_:[_];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let b=0;b<pe.length;b++){let N=pe[b];k.__webglColorRenderbuffer[b]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[b]);let U=r.convert(N.format,N.colorSpace),D=r.convert(N.type),Y=y(N.internalFormat,U,D,N.colorSpace,E.isXRRenderTarget===!0),ae=ke(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Y,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+b,i.RENDERBUFFER,k.__webglColorRenderbuffer[b])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),X(i.TEXTURE_CUBE_MAP,_,ve);for(let pe=0;pe<6;pe++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let b=0;b<_.mipmaps.length;b++)ye(k.__webglFramebuffer[pe][b],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,b);else ye(k.__webglFramebuffer[pe],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(_,ve)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let pe=E.texture;for(let b=0,N=pe.length;b<N;b++){let U=pe[b],D=n.get(U);t.bindTexture(i.TEXTURE_2D,D.__webglTexture),X(i.TEXTURE_2D,U,ve),ye(k.__webglFramebuffer,E,U,i.COLOR_ATTACHMENT0+b,i.TEXTURE_2D,0),v(U,ve)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?pe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,re.__webglTexture),X(pe,_,ve),a&&_.mipmaps&&_.mipmaps.length>0)for(let b=0;b<_.mipmaps.length;b++)ye(k.__webglFramebuffer[b],E,_,i.COLOR_ATTACHMENT0,pe,b);else ye(k.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,pe,0);v(_,ve)&&g(pe),t.unbindTexture()}E.depthBuffer&&Pe(E)}function wt(E){let _=m(E)||a,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0,te=k.length;re<te;re++){let oe=k[re];if(v(oe,_)){let ve=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(oe).__webglTexture;t.bindTexture(ve,pe),g(ve),t.unbindTexture()}}}function Re(E){if(a&&E.samples>0&&_e(E)===!1){let _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,re=E.height,te=i.COLOR_BUFFER_BIT,oe=[],ve=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(E),b=E.isWebGLMultipleRenderTargets===!0;if(b)for(let N=0;N<_.length;N++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let N=0;N<_.length;N++){oe.push(i.COLOR_ATTACHMENT0+N),E.depthBuffer&&oe.push(ve);let U=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(U===!1&&(E.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),b&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[N]),U===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ve])),b){let D=n.get(_[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,k,re,0,0,k,re,te,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),b)for(let N=0;N<_.length;N++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,pe.__webglColorRenderbuffer[N]);let U=n.get(_[N]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function ke(E){return Math.min(s.maxSamples,E.samples)}function _e(E){let _=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function dt(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function He(E,_){let k=E.colorSpace,re=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Wc||k!==Pt&&k!==Rn&&(Qe.getTransfer(k)===mt?a===!1?e.has("EXT_sRGB")===!0&&re===wn?(E.format=Wc,E.minFilter=an,E.generateMipmaps=!1):_=$o.sRGBToLinear(_):(re!==wn||te!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}this.allocateTextureUnit=L,this.resetTextureUnits=le,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=Je,this.setupRenderTarget=B,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=_e}function Zy(i,e,t){let n=t.isWebGL2;function s(r,o=Rn){let a,c=Qe.getTransfer(o);if(r===Oi)return i.UNSIGNED_BYTE;if(r===Of)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ff)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Cm)return i.BYTE;if(r===Im)return i.SHORT;if(r===El)return i.UNSIGNED_SHORT;if(r===Uf)return i.INT;if(r===Li)return i.UNSIGNED_INT;if(r===ui)return i.FLOAT;if(r===Hr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Pm)return i.ALPHA;if(r===wn)return i.RGBA;if(r===Lm)return i.LUMINANCE;if(r===Dm)return i.LUMINANCE_ALPHA;if(r===ls)return i.DEPTH_COMPONENT;if(r===$s)return i.DEPTH_STENCIL;if(r===Wc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nm)return i.RED;if(r===Bf)return i.RED_INTEGER;if(r===Um)return i.RG;if(r===zf)return i.RG_INTEGER;if(r===kf)return i.RGBA_INTEGER;if(r===rc||r===oc||r===ac||r===cc)if(c===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jh||r===Zh||r===Jh||r===$h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qh||r===eu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Qh)return c===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===eu)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tu||r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===cu||r===lu||r===hu||r===uu||r===fu||r===du||r===pu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===tu)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nu)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===iu)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===su)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ru)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ou)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===au)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cu)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lu)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hu)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uu)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fu)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===du)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pu)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lc||r===mu||r===Au)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===lc)return c===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Au)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Om||r===gu||r===xu||r===yu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===lc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===gu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cs?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function $y(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,jf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,g,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),A(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,g):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let g=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*g,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function A(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qy(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,g){let y=g.program;n.uniformBlockBinding(v,y)}function l(v,g){let y=s[v.id];y===void 0&&(A(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let w=g.program;n.updateUBOMapping(v,w);let R=e.render.frame;r[v.id]!==R&&(f(v),r[v.id]=R)}function h(v){let g=u();v.__bindingPointIndex=g;let y=i.createBuffer(),w=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let g=s[v.id],y=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let R=0,C=y.length;R<C;R++){let G=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,T=G.length;M<T;M++){let F=G[M];if(p(F,R,M,w)===!0){let K=F.__offset,le=Array.isArray(F.value)?F.value:[F.value],L=0;for(let z=0;z<le.length;z++){let q=le[z],Z=x(q);typeof q=="number"||typeof q=="boolean"?(F.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,K+L,F.__data)):q.isMatrix3?(F.__data[0]=q.elements[0],F.__data[1]=q.elements[1],F.__data[2]=q.elements[2],F.__data[3]=0,F.__data[4]=q.elements[3],F.__data[5]=q.elements[4],F.__data[6]=q.elements[5],F.__data[7]=0,F.__data[8]=q.elements[6],F.__data[9]=q.elements[7],F.__data[10]=q.elements[8],F.__data[11]=0):(q.toArray(F.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,g,y,w){let R=v.value,C=g+"_"+y;if(w[C]===void 0)return typeof R=="number"||typeof R=="boolean"?w[C]=R:w[C]=R.clone(),!0;{let G=w[C];if(typeof R=="number"||typeof R=="boolean"){if(G!==R)return w[C]=R,!0}else if(G.equals(R)===!1)return G.copy(R),!0}return!1}function A(v){let g=v.uniforms,y=0,w=16;for(let C=0,G=g.length;C<G;C++){let M=Array.isArray(g[C])?g[C]:[g[C]];for(let T=0,F=M.length;T<F;T++){let K=M[T],le=Array.isArray(K.value)?K.value:[K.value];for(let L=0,z=le.length;L<z;L++){let q=le[L],Z=x(q),J=y%w;J!==0&&w-J<Z.boundary&&(y+=w-J),K.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=y,y+=Z.storage}}}let R=y%w;return R>0&&(y+=w-R),v.__size=y,v.__cache={},this}function x(v){let g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){let g=v.target;g.removeEventListener("dispose",m);let y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}function Bo(i,e,t,n,s,r){Vs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ir.x=r*Vs.x-s*Vs.y,Ir.y=s*Vs.x+r*Vs.y):Ir.copy(Vs),i.copy(e),i.x+=Ir.x,i.y+=Ir.y,i.applyMatrix4(nd)}function Tf(i,e,t,n,s,r,o){let a=cl.distanceSqToPoint(i);if(a<t){let c=new I;cl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function Wo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function i_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function s_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function wf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function id(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function r_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return gi;case"color":return Aa;case"quaternion":return jn;case"bool":case"boolean":return Hi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function o_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=r_(i.type);if(i.times===void 0){let t=[],n=[];id(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function Pf(i,e){return i.distance-e.distance}function _l(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)_l(s[r],e,t,!0)}}var vl,Zp,Gh,Jp,Lf,Ml,li,Kn,un,hn,Ni,Ys,Vh,Wh,Xh,$p,rs,Qp,em,qh,Yh,tm,nm,im,sm,zc,kc,rm,om,am,cm,lm,hm,um,fm,dm,pm,mm,Am,Xo,gm,xm,ym,_m,Df,vm,Mm,Ui,bm,Sm,Em,bl,Tm,wm,Kh,Rm,Nf,Zs,Js,Hc,Gc,ba,di,kt,kr,Rt,qo,Ur,an,Sl,Fi,Oi,Cm,Im,El,Uf,Li,ui,Hr,Of,Ff,cs,Pm,wn,Lm,Dm,ls,$s,Nm,Bf,Um,zf,kf,rc,oc,ac,cc,jh,Zh,Jh,$h,Hf,Qh,eu,tu,nu,iu,su,ru,ou,au,cu,lu,hu,uu,fu,du,pu,lc,mu,Au,Om,gu,xu,yu,Qs,us,hc,_u,vu,Mu,Fm,Gf,Sa,Qr,Vf,hs,Bm,zm,Wf,km,Rn,tt,Pt,Tl,Ea,Yo,mt,Ko,jo,Ss,bu,Hm,Gm,Vm,Xf,Wm,Xm,qm,Ym,Vc,Su,Wc,fi,Zo,Bi,Jt,Eu,Or,er,qf,Ue,Ze,uc,Tu,wu,Ru,po,l0,Qe,Es,$o,h0,Qo,u0,qt,ot,qc,pi,ea,Yc,Hn,I,pc,Cu,xt,ii,Fn,mo,Ts,ws,Rs,wi,Ri,es,Er,Ao,go,ts,f0,Tr,Ac,_n,si,gc,xo,Ci,xc,yo,yc,fs,Xe,Cs,Bn,d0,p0,Ii,_o,xn,Iu,Pu,ta,Vr,m0,Lu,Is,ri,vo,wr,A0,g0,Du,Nu,Uu,x0,y0,yt,zn,oi,_c,ai,Ps,Ls,Ou,vc,Mc,bc,Mo,as,Kf,Pi,bo,we,$t,_0,fn,Yt,Tt,So,It,na,ia,at,v0,Tn,Ec,Ds,yn,Rr,zt,Ht,Fu,ns,Eo,Bu,Ns,Us,Os,Tc,To,wo,Ro,Co,zu,ku,Hu,Io,Po,At,dn,S0,E0,T0,mi,sa,Ct,Fs,Bs,Kc,ra,jc,wc,w0,R0,hi,is,Do,Wr,Gt,I0,P0,L0,D0,N0,U0,O0,F0,B0,z0,k0,H0,G0,V0,W0,X0,q0,Y0,K0,j0,Z0,J0,$0,Q0,eA,tA,nA,iA,sA,rA,oA,aA,cA,lA,hA,uA,fA,dA,pA,mA,AA,gA,xA,yA,_A,vA,MA,bA,SA,EA,TA,wA,RA,CA,IA,PA,LA,DA,NA,UA,OA,FA,BA,zA,kA,HA,GA,VA,WA,XA,qA,YA,KA,jA,ZA,JA,$A,QA,eg,tg,ng,ig,sg,rg,og,ag,cg,lg,hg,ug,fg,dg,pg,mg,Ag,gg,xg,yg,_g,vg,Mg,bg,Sg,Eg,Tg,wg,Rg,Cg,Ig,Pg,Lg,Dg,Ng,Ug,Og,Fg,Bg,zg,kg,Hg,Gg,Vg,Wg,Xg,qg,Yg,Kg,jg,Zg,Jg,$g,Qg,ex,tx,nx,ix,sx,rx,ox,ax,cx,Ye,he,qn,No,nr,Xs,Gu,os,Rc,Vu,Cc,Ic,Pc,ss,zs,Wu,oa,aa,Jf,$f,Qf,ed,td,Ku,ju,Zu,Ju,$u,Zc,Jc,$c,Lc,js,dy,py,by,Sy,Ty,Ny,el,tl,Hy,nl,il,Xy,qy,sl,nt,Jy,zr,rl,Xr,ol,ca,ir,rn,ds,sr,ks,Cr,Hs,Gs,Vs,Ir,nd,Oo,Pr,Fo,hf,Dc,uf,qr,ff,df,pf,e_,mf,zo,Nc,Af,Uc,la,Yr,al,gf,t_,ha,ps,Ws,xf,ko,yf,n_,Lr,Dr,ua,Kr,_f,vf,Mf,Oc,Ho,rr,bf,Sf,fa,da,jr,Ef,cl,Go,Vo,pa,or,Zr,Ve,ar,ma,Nt,zi,vn,Cn,ki,ll,hl,ul,In,Hi,Aa,Ai,fl,jn,Gi,gi,ga,Di,dl,a_,xi,ci,pl,Jr,ml,xa,cr,ya,Fc,Rf,Cf,$r,Al,_a,If,Nr,Bc,gl,yi,xl,lr,Vi,va,Cl,c_,Il,l_,h_,u_,f_,d_,p_,m_,yl,ut,Sv,Ma,Pn=pt(()=>{vl="160",Zp=0,Gh=1,Jp=2,Lf=1,Ml=2,li=3,Kn=0,un=1,hn=2,Ni=0,Ys=1,Vh=2,Wh=3,Xh=4,$p=5,rs=100,Qp=101,em=102,qh=103,Yh=104,tm=200,nm=201,im=202,sm=203,zc=204,kc=205,rm=206,om=207,am=208,cm=209,lm=210,hm=211,um=212,fm=213,dm=214,pm=0,mm=1,Am=2,Xo=3,gm=4,xm=5,ym=6,_m=7,Df=0,vm=1,Mm=2,Ui=0,bm=1,Sm=2,Em=3,bl=4,Tm=5,wm=6,Kh="attached",Rm="detached",Nf=300,Zs=301,Js=302,Hc=303,Gc=304,ba=306,di=1e3,kt=1001,kr=1002,Rt=1003,qo=1004,Ur=1005,an=1006,Sl=1007,Fi=1008,Oi=1009,Cm=1010,Im=1011,El=1012,Uf=1013,Li=1014,ui=1015,Hr=1016,Of=1017,Ff=1018,cs=1020,Pm=1021,wn=1023,Lm=1024,Dm=1025,ls=1026,$s=1027,Nm=1028,Bf=1029,Um=1030,zf=1031,kf=1033,rc=33776,oc=33777,ac=33778,cc=33779,jh=35840,Zh=35841,Jh=35842,$h=35843,Hf=36196,Qh=37492,eu=37496,tu=37808,nu=37809,iu=37810,su=37811,ru=37812,ou=37813,au=37814,cu=37815,lu=37816,hu=37817,uu=37818,fu=37819,du=37820,pu=37821,lc=36492,mu=36494,Au=36495,Om=36283,gu=36284,xu=36285,yu=36286,Qs=2300,us=2301,hc=2302,_u=2400,vu=2401,Mu=2402,Fm=2500,Gf=0,Sa=1,Qr=2,Vf=3e3,hs=3001,Bm=3200,zm=3201,Wf=0,km=1,Rn="",tt="srgb",Pt="srgb-linear",Tl="display-p3",Ea="display-p3-linear",Yo="linear",mt="srgb",Ko="rec709",jo="p3",Ss=7680,bu=519,Hm=512,Gm=513,Vm=514,Xf=515,Wm=516,Xm=517,qm=518,Ym=519,Vc=35044,Su="300 es",Wc=1035,fi=2e3,Zo=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=1234567,Or=Math.PI/180,er=180/Math.PI;qf={DEG2RAD:Or,RAD2DEG:er,generateUUID:kn,clamp:Qt,euclideanModulo:wl,mapLinear:Km,inverseLerp:jm,lerp:Fr,damp:Zm,pingpong:Jm,smoothstep:$m,smootherstep:Qm,randInt:e0,randFloat:t0,randFloatSpread:n0,seededRandom:i0,degToRad:s0,radToDeg:r0,isPowerOfTwo:Xc,ceilPowerOfTwo:o0,floorPowerOfTwo:Jo,setQuaternionFromProperEuler:a0,normalize:st,denormalize:Yn},Ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],A=n[8],x=s[0],m=s[3],d=s[6],v=s[1],g=s[4],y=s[7],w=s[2],R=s[5],C=s[8];return r[0]=o*x+a*v+c*w,r[3]=o*m+a*g+c*R,r[6]=o*d+a*y+c*C,r[1]=l*x+h*v+u*w,r[4]=l*m+h*g+u*R,r[7]=l*d+h*y+u*C,r[2]=f*x+p*v+A*w,r[5]=f*m+p*g+A*R,r[8]=f*d+p*y+A*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,A=t*u+n*f+s*p;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/A;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uc.makeScale(e,t)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uc=new Ze;Tu={};wu=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ru=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),po={[Pt]:{transfer:Yo,primaries:Ko,toReference:i=>i,fromReference:i=>i},[tt]:{transfer:mt,primaries:Ko,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ea]:{transfer:Yo,primaries:jo,toReference:i=>i.applyMatrix3(Ru),fromReference:i=>i.applyMatrix3(wu)},[Tl]:{transfer:mt,primaries:jo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ru),fromReference:i=>i.applyMatrix3(wu).convertLinearToSRGB()}},l0=new Set([Pt,Ea]),Qe={enabled:!0,_workingColorSpace:Pt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!l0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=po[e].toReference,s=po[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return po[i].primaries},getTransfer:function(i){return i===Rn?Yo:po[i].transfer}};$o=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Gr("canvas")),Es.width=e.width,Es.height=e.height;let n=Es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ks(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ks(t[n]/255)*255):t[n]=Ks(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},h0=0,Qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dc(s[o].image)):r.push(dc(s[o]))}else r=dc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};u0=0,qt=class i extends Bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=kt,s=kt,r=an,o=Fi,a=wn,c=Oi,l=i.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=kn(),this.name="",this.source=new Qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===hs?tt:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?hs:Vf}set encoding(e){Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===hs?tt:Rn}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Nf;qt.DEFAULT_ANISOTROPY=1;ot=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],A=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(A-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(A+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(l+1)/2,y=(p+1)/2,w=(d+1)/2,R=(h+f)/4,C=(u+x)/4,G=(A+m)/4;return g>y&&g>w?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=R/n,r=C/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=G/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=G/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-A)*(m-A)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-A)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qc=class extends Bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===hs?tt:Rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ea=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yc=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],A=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=A,e[t+3]=x;return}if(u!==x||c!==f||l!==p||h!==A){let m=1-a,d=c*f+l*p+h*A+u*x,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){let w=Math.sqrt(g),R=Math.atan2(w,d*v);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}let y=a*v;if(c=c*m+f*y,l=l*m+p*y,h=h*m+A*y,u=u*m+x*y,m===1-a){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],A=r[o+3];return e[t]=a*A+h*u+c*p-l*f,e[t+1]=c*A+h*f+l*u-a*p,e[t+2]=l*A+h*p+a*f-c*u,e[t+3]=h*A-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),A=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*A,this._y=l*p*u-f*h*A,this._z=l*h*A+f*p*u,this._w=l*h*u-f*p*A;break;case"YXZ":this._x=f*h*u+l*p*A,this._y=l*p*u-f*h*A,this._z=l*h*A-f*p*u,this._w=l*h*u+f*p*A;break;case"ZXY":this._x=f*h*u-l*p*A,this._y=l*p*u+f*h*A,this._z=l*h*A+f*p*u,this._w=l*h*u-f*p*A;break;case"ZYX":this._x=f*h*u-l*p*A,this._y=l*p*u+f*h*A,this._z=l*h*A-f*p*u,this._w=l*h*u+f*p*A;break;case"YZX":this._x=f*h*u+l*p*A,this._y=l*p*u+f*h*A,this._z=l*h*A-f*p*u,this._w=l*h*u-f*p*A;break;case"XZY":this._x=f*h*u-l*p*A,this._y=l*p*u-f*h*A,this._z=l*h*A+f*p*u,this._w=l*h*u+f*p*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pc=new I,Cu=new Hn,xt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Ao.subVectors(this.max,Er),Ts.subVectors(e.a,Er),ws.subVectors(e.b,Er),Rs.subVectors(e.c,Er),wi.subVectors(ws,Ts),Ri.subVectors(Rs,ws),es.subVectors(Ts,Rs);let t=[0,-wi.z,wi.y,0,-Ri.z,Ri.y,0,-es.z,es.y,wi.z,0,-wi.x,Ri.z,0,-Ri.x,es.z,0,-es.x,-wi.y,wi.x,0,-Ri.y,Ri.x,0,-es.y,es.x,0];return!mc(t,Ts,ws,Rs,Ao)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,Ts,ws,Rs,Ao))?!1:(go.crossVectors(wi,Ri),t=[go.x,go.y,go.z],mc(t,Ts,ws,Rs,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ii=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,mo=new xt,Ts=new I,ws=new I,Rs=new I,wi=new I,Ri=new I,es=new I,Er=new I,Ao=new I,go=new I,ts=new I;f0=new xt,Tr=new I,Ac=new I,_n=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):f0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);let t=Tr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Ac)),this.expandByPoint(Tr.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},si=new I,gc=new I,xo=new I,Ci=new I,xc=new I,yo=new I,yc=new I,fs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gc.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xo),a=Ci.dot(this.direction),c=-Ci.dot(xo),l=Ci.lengthSq(),h=Math.abs(1-o*o),u,f,p,A;if(h>0)if(u=o*c-a,f=o*a-c,A=r*h,u>=0)if(f>=-A)if(f<=A){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-A?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=A?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gc).addScaledVector(xo,f),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){xc.subVectors(t,e),yo.subVectors(n,e),yc.crossVectors(xc,yo);let o=this.direction.dot(yc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let c=a*this.direction.dot(yo.crossVectors(Ci,yo));if(c<0)return null;let l=a*this.direction.dot(xc.cross(Ci));if(l<0||c+l>o)return null;let h=-a*Ci.dot(yc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,p,A,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,p,A,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,p,A,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=A,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,A=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+A*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=A+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,A=l*h,x=l*u;t[0]=f+x*a,t[4]=A*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-A,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,A=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=A+p*a,t[1]=p+A*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,A=a*h,x=a*u;t[0]=c*h,t[4]=A*l-p,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=p*l-A,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,A=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=A*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+A,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,p=o*l,A=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-A,t[2]=A*u-p,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d0,e,p0)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ii.crossVectors(n,xn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ii.crossVectors(n,xn)),Ii.normalize(),_o.crossVectors(xn,Ii),s[0]=Ii.x,s[4]=_o.x,s[8]=xn.x,s[1]=Ii.y,s[5]=_o.y,s[9]=xn.y,s[2]=Ii.z,s[6]=_o.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],A=n[2],x=n[6],m=n[10],d=n[14],v=n[3],g=n[7],y=n[11],w=n[15],R=s[0],C=s[4],G=s[8],M=s[12],T=s[1],F=s[5],K=s[9],le=s[13],L=s[2],z=s[6],q=s[10],Z=s[14],J=s[3],j=s[7],ie=s[11],ce=s[15];return r[0]=o*R+a*T+c*L+l*J,r[4]=o*C+a*F+c*z+l*j,r[8]=o*G+a*K+c*q+l*ie,r[12]=o*M+a*le+c*Z+l*ce,r[1]=h*R+u*T+f*L+p*J,r[5]=h*C+u*F+f*z+p*j,r[9]=h*G+u*K+f*q+p*ie,r[13]=h*M+u*le+f*Z+p*ce,r[2]=A*R+x*T+m*L+d*J,r[6]=A*C+x*F+m*z+d*j,r[10]=A*G+x*K+m*q+d*ie,r[14]=A*M+x*le+m*Z+d*ce,r[3]=v*R+g*T+y*L+w*J,r[7]=v*C+g*F+y*z+w*j,r[11]=v*G+g*K+y*q+w*ie,r[15]=v*M+g*le+y*Z+w*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],A=e[3],x=e[7],m=e[11],d=e[15];return A*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],A=e[12],x=e[13],m=e[14],d=e[15],v=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,g=A*f*l-h*m*l-A*c*p+o*m*p+h*c*d-o*f*d,y=h*x*l-A*u*l+A*a*p-o*x*p-h*a*d+o*u*d,w=A*u*c-h*x*c-A*a*f+o*x*f+h*a*m-o*u*m,R=t*v+n*g+s*y+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=v*C,e[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*C,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*d+n*c*d)*C,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*C,e[4]=g*C,e[5]=(h*m*r-A*f*r+A*s*p-t*m*p-h*s*d+t*f*d)*C,e[6]=(A*c*r-o*m*r-A*s*l+t*m*l+o*s*d-t*c*d)*C,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*C,e[8]=y*C,e[9]=(A*u*r-h*x*r-A*n*p+t*x*p+h*n*d-t*u*d)*C,e[10]=(o*x*r-A*a*r+A*n*l-t*x*l-o*n*d+t*a*d)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*C,e[12]=w*C,e[13]=(h*x*s-A*u*s+A*n*f-t*x*f-h*n*m+t*u*m)*C,e[14]=(A*a*s-o*x*s-A*n*c+t*x*c+o*n*m-t*a*m)*C,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,A=r*u,x=o*h,m=o*u,d=a*u,v=c*l,g=c*h,y=c*u,w=n.x,R=n.y,C=n.z;return s[0]=(1-(x+d))*w,s[1]=(p+y)*w,s[2]=(A-g)*w,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(f+d))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(A+g)*C,s[9]=(m-v)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Cs.set(s[0],s[1],s[2]).length(),o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);let l=1/r,h=1/o,u=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=fi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,A;if(a===fi)p=-(o+r)/(o-r),A=-2*o*r/(o-r);else if(a===Zo)p=-o/(o-r),A=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=fi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,p=(n+s)*h,A,x;if(a===fi)A=(o+r)*u,x=-2*u;else if(a===Zo)A=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Cs=new I,Bn=new Xe,d0=new I(0,0,0),p0=new I(1,1,1),Ii=new I,_o=new I,xn=new I,Iu=new Xe,Pu=new Hn,ta=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ta.DEFAULT_ORDER="XYZ";Vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},m0=0,Lu=new I,Is=new Hn,ri=new Xe,vo=new I,wr=new I,A0=new I,g0=new Hn,Du=new I(1,0,0),Nu=new I(0,1,0),Uu=new I(0,0,1),x0={type:"added"},y0={type:"removed"},yt=class i extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new ta,n=new Hn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ze}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vo.copy(e):vo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(wr,vo,this.up):ri.lookAt(vo,wr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(ri),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(x0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),A=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),A.length>0&&(n.nodes=A)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};yt.DEFAULT_UP=new I(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;zn=new I,oi=new I,_c=new I,ai=new I,Ps=new I,Ls=new I,Ou=new I,vc=new I,Mc=new I,bc=new I,Mo=!1,as=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),oi.subVectors(n,t),_c.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(oi),c=zn.dot(_c),l=oi.dot(oi),h=oi.dot(_c),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,A=(o*h-a*c)*f;return r.set(1-p-A,A,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,n,s,r,o,a,c){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),oi.subVectors(e,t),zn.cross(oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),zn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ps.subVectors(s,n),Ls.subVectors(r,n),vc.subVectors(e,n);let c=Ps.dot(vc),l=Ls.dot(vc);if(c<=0&&l<=0)return t.copy(n);Mc.subVectors(e,s);let h=Ps.dot(Mc),u=Ls.dot(Mc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ps,o);bc.subVectors(e,r);let p=Ps.dot(bc),A=Ls.dot(bc);if(A>=0&&p<=A)return t.copy(r);let x=p*l-c*A;if(x<=0&&l>=0&&A<=0)return a=l/(l-A),t.copy(n).addScaledVector(Ls,a);let m=h*A-p*u;if(m<=0&&u-h>=0&&p-A>=0)return Ou.subVectors(r,s),a=(u-h)/(u-h+(p-A)),t.copy(s).addScaledVector(Ou,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},bo={h:0,s:0,l:0};we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=wl(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Sc(o,r,e+1/3),this.g=Sc(o,r,e),this.b=Sc(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=Kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=fc(e.r),this.g=fc(e.g),this.b=fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return Qe.fromWorkingColorSpace($t.copy(this),e),Math.round(Qt($t.r*255,0,255))*65536+Math.round(Qt($t.g*255,0,255))*256+Math.round(Qt($t.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=tt){Qe.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(bo);let n=Fr(Pi.h,bo.h,t),s=Fr(Pi.s,bo.s,t),r=Fr(Pi.l,bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new we;we.NAMES=Kf;_0=0,fn=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Ys,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=kc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==kc&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Yt=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tt=new I,So=new Ue,It=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}},na=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ia=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}},at=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},v0=0,Tn=new Xe,Ec=new yt,Ds=new I,yn=new xt,Rr=new xt,zt=new I,Ht=class i extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yf(e)?ia:na)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(yn.min,Rr.min),yn.expandByPoint(zt),zt.addVectors(yn.max,Rr.max),yn.expandByPoint(zt)):(yn.expandByPoint(Rr.min),yn.expandByPoint(Rr.max))}yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)zt.fromBufferAttribute(a,l),c&&(Ds.fromBufferAttribute(e,l),zt.add(Ds)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new I,h[T]=new I;let u=new I,f=new I,p=new I,A=new Ue,x=new Ue,m=new Ue,d=new I,v=new I;function g(T,F,K){u.fromArray(s,T*3),f.fromArray(s,F*3),p.fromArray(s,K*3),A.fromArray(o,T*2),x.fromArray(o,F*2),m.fromArray(o,K*2),f.sub(u),p.sub(u),x.sub(A),m.sub(A);let le=1/(x.x*m.y-m.x*x.y);isFinite(le)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(le),v.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(le),l[T].add(d),l[F].add(d),l[K].add(d),h[T].add(v),h[F].add(v),h[K].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,F=y.length;T<F;++T){let K=y[T],le=K.start,L=K.count;for(let z=le,q=le+L;z<q;z+=3)g(n[z+0],n[z+1],n[z+2])}let w=new I,R=new I,C=new I,G=new I;function M(T){C.fromArray(r,T*3),G.copy(C);let F=l[T];w.copy(F),w.sub(C.multiplyScalar(C.dot(F))).normalize(),R.crossVectors(G,F);let le=R.dot(h[T])<0?-1:1;c[T*4]=w.x,c[T*4+1]=w.y,c[T*4+2]=w.z,c[T*4+3]=le}for(let T=0,F=y.length;T<F;++T){let K=y[T],le=K.start,L=K.count;for(let z=le,q=le+L;z<q;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){let A=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,A),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,A),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(A,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,A=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[A++]=l[p++]}return new It(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fu=new Xe,ns=new fs,Eo=new _n,Bu=new I,Ns=new I,Us=new I,Os=new I,Tc=new I,To=new I,wo=new Ue,Ro=new Ue,Co=new Ue,zu=new I,ku=new I,Hu=new I,Io=new I,Po=new I,At=class extends yt{constructor(e=new Ht,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){To.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Tc.fromBufferAttribute(u,e),o?To.addScaledVector(Tc,h):To.addScaledVector(Tc.sub(t),h))}t.add(To)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Eo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Eo,Bu)===null||ns.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Fu.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Fu),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let A=0,x=f.length;A<x;A++){let m=f[A],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=g;y<w;y+=3){let R=a.getX(y),C=a.getX(y+1),G=a.getX(y+2);s=Lo(this,d,e,n,l,h,u,R,C,G),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let A=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=A,d=x;m<d;m+=3){let v=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);s=Lo(this,o,e,n,l,h,u,v,g,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let A=0,x=f.length;A<x;A++){let m=f[A],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=g;y<w;y+=3){let R=y,C=y+1,G=y+2;s=Lo(this,d,e,n,l,h,u,R,C,G),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let A=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=A,d=x;m<d;m+=3){let v=m,g=m+1,y=m+2;s=Lo(this,o,e,n,l,h,u,v,g,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};dn=class i extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;A("z","y","x",-1,-1,n,t,e,o,r,0),A("z","y","x",1,-1,n,t,-e,o,r,1),A("x","z","y",1,1,e,n,t,s,o,2),A("x","z","y",1,-1,e,n,-t,s,o,3),A("x","y","z",1,-1,e,t,n,s,r,4),A("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function A(x,m,d,v,g,y,w,R,C,G,M){let T=y/C,F=w/G,K=y/2,le=w/2,L=R/2,z=C+1,q=G+1,Z=0,J=0,j=new I;for(let ie=0;ie<q;ie++){let ce=ie*F-le;for(let Ae=0;Ae<z;Ae++){let X=Ae*T-K;j[x]=X*v,j[m]=ce*g,j[d]=L,l.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[d]=R>0?1:-1,h.push(j.x,j.y,j.z),u.push(Ae/C),u.push(1-ie/G),Z+=1}}for(let ie=0;ie<G;ie++)for(let ce=0;ce<C;ce++){let Ae=f+ce+z*ie,X=f+ce+z*(ie+1),ee=f+(ce+1)+z*(ie+1),me=f+(ce+1)+z*ie;c.push(Ae,X,me),c.push(X,ee,me),J+=6}a.addGroup(p,J,M),p+=J,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};S0={clone:tr,merge:on},E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=b0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},sa=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ct=class extends sa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fs=-90,Bs=1,Kc=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(Fs,Bs,e,t);s.layers=this.layers,this.add(s);let r=new Ct(Fs,Bs,e,t);r.layers=this.layers,this.add(r);let o=new Ct(Fs,Bs,e,t);o.layers=this.layers,this.add(o);let a=new Ct(Fs,Bs,e,t);a.layers=this.layers,this.add(a);let c=new Ct(Fs,Bs,e,t);c.layers=this.layers,this.add(c);let l=new Ct(Fs,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}},ra=class extends qt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jc=class extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===hs?tt:Rn),this.texture=new ra(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dn(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ni});r.uniforms.tEquirect.value=t;let o=new At(s,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=an),new Kc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},wc=new I,w0=new I,R0=new Ze,hi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=wc.subVectors(n,t).cross(w0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(wc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||R0.getNormalMatrix(e),s=this.coplanarPoint(wc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new _n,Do=new I,Wr=class{constructor(e=new hi,t=new hi,n=new hi,s=new hi,r=new hi,o=new hi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],A=s[9],x=s[10],m=s[11],d=s[12],v=s[13],g=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,m-p,y-d).normalize(),n[1].setComponents(c+r,f+l,m+p,y+d).normalize(),n[2].setComponents(c+o,f+h,m+A,y+v).normalize(),n[3].setComponents(c-o,f-h,m-A,y-v).normalize(),n[4].setComponents(c-a,f-u,m-x,y-g).normalize(),t===fi)n[5].setComponents(c+a,f+u,m+x,y+g).normalize();else if(t===Zo)n[5].setComponents(a,u,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Do.x=s.normal.x>0?e.max.x:e.min.x,Do.y=s.normal.y>0?e.max.y:e.min.y,Do.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Gt=class i extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],A=[],x=[],m=[];for(let d=0;d<h;d++){let v=d*f-o;for(let g=0;g<l;g++){let y=g*u-r;A.push(y,-v,0),x.push(0,0,1),m.push(g/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let g=v+l*d,y=v+l*(d+1),w=v+1+l*(d+1),R=v+1+l*d;p.push(g,y,R),p.push(y,w,R)}this.setIndex(p),this.setAttribute("position",new at(A,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oA="gl_FragColor = linearToOutputTexel( gl_FragColor );",aA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_A=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,OA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,XA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,YA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$A=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ex=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ax=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:I0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:N0,alphatest_pars_fragment:U0,aomap_fragment:O0,aomap_pars_fragment:F0,batching_pars_vertex:B0,batching_vertex:z0,begin_vertex:k0,beginnormal_vertex:H0,bsdfs:G0,iridescence_fragment:V0,bumpmap_pars_fragment:W0,clipping_planes_fragment:X0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:K0,color_fragment:j0,color_pars_fragment:Z0,color_pars_vertex:J0,color_vertex:$0,common:Q0,cube_uv_reflection_fragment:eA,defaultnormal_vertex:tA,displacementmap_pars_vertex:nA,displacementmap_vertex:iA,emissivemap_fragment:sA,emissivemap_pars_fragment:rA,colorspace_fragment:oA,colorspace_pars_fragment:aA,envmap_fragment:cA,envmap_common_pars_fragment:lA,envmap_pars_fragment:hA,envmap_pars_vertex:uA,envmap_physical_pars_fragment:bA,envmap_vertex:fA,fog_vertex:dA,fog_pars_vertex:pA,fog_fragment:mA,fog_pars_fragment:AA,gradientmap_pars_fragment:gA,lightmap_fragment:xA,lightmap_pars_fragment:yA,lights_lambert_fragment:_A,lights_lambert_pars_fragment:vA,lights_pars_begin:MA,lights_toon_fragment:SA,lights_toon_pars_fragment:EA,lights_phong_fragment:TA,lights_phong_pars_fragment:wA,lights_physical_fragment:RA,lights_physical_pars_fragment:CA,lights_fragment_begin:IA,lights_fragment_maps:PA,lights_fragment_end:LA,logdepthbuf_fragment:DA,logdepthbuf_pars_fragment:NA,logdepthbuf_pars_vertex:UA,logdepthbuf_vertex:OA,map_fragment:FA,map_pars_fragment:BA,map_particle_fragment:zA,map_particle_pars_fragment:kA,metalnessmap_fragment:HA,metalnessmap_pars_fragment:GA,morphcolor_vertex:VA,morphnormal_vertex:WA,morphtarget_pars_vertex:XA,morphtarget_vertex:qA,normal_fragment_begin:YA,normal_fragment_maps:KA,normal_pars_fragment:jA,normal_pars_vertex:ZA,normal_vertex:JA,normalmap_pars_fragment:$A,clearcoat_normal_fragment_begin:QA,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:tg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:sg,premultiplied_alpha_fragment:rg,project_vertex:og,dithering_fragment:ag,dithering_pars_fragment:cg,roughnessmap_fragment:lg,roughnessmap_pars_fragment:hg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:fg,shadowmap_vertex:dg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:Ag,skinning_vertex:gg,skinnormal_vertex:xg,specularmap_fragment:yg,specularmap_pars_fragment:_g,tonemapping_fragment:vg,tonemapping_pars_fragment:Mg,transmission_fragment:bg,transmission_pars_fragment:Sg,uv_pars_fragment:Eg,uv_pars_vertex:Tg,uv_vertex:wg,worldpos_vertex:Rg,background_vert:Cg,background_frag:Ig,backgroundCube_vert:Pg,backgroundCube_frag:Lg,cube_vert:Dg,cube_frag:Ng,depth_vert:Ug,depth_frag:Og,distanceRGBA_vert:Fg,distanceRGBA_frag:Bg,equirect_vert:zg,equirect_frag:kg,linedashed_vert:Hg,linedashed_frag:Gg,meshbasic_vert:Vg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:Kg,meshnormal_vert:jg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:$g,meshphysical_vert:Qg,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:sx,shadow_vert:rx,shadow_frag:ox,sprite_vert:ax,sprite_frag:cx},he={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},qn={basic:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new we(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:on([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:on([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new we(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:on([he.points,he.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:on([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:on([he.common,he.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:on([he.sprite,he.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:on([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:on([he.lights,he.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};qn.physical={uniforms:on([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};No={r:0,b:0,g:0};nr=class extends sa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xs=4,Gu=[.125,.215,.35,.446,.526,.582],os=20,Rc=new nr,Vu=new we,Cc=null,Ic=0,Pc=0,ss=(1+Math.sqrt(5))/2,zs=1/ss,Wu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ss,zs),new I(0,ss,-zs),new I(zs,0,ss),new I(-zs,0,ss),new I(ss,zs,0),new I(-ss,zs,0)],oa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Cc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Ic,Pc),e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Hr,format:wn,colorSpace:Pt,depthBuffer:!1},s=Xu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mx(r)),this._blurMaterial=Ax(r,e,t)}return s}_compileMaterial(e){let t=new At(this._lodPlanes[0],e);this._renderer.compile(t,Rc)}_sceneToCubeUV(e,t,n,s){let a=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Vu),h.toneMapping=Ui,h.autoClear=!1;let p=new Yt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),A=new At(new dn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Vu),x=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let g=this._cubeSize;Uo(s,v*g,d>2?g:0,g,g),h.setRenderTarget(s),x&&h.render(A,a),h.render(e,a)}A.geometry.dispose(),A.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zs||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Uo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Rc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Wu[(s-1)%Wu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new At(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,A=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*os-1),x=r/A,m=isFinite(r)?1+Math.floor(h*x):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let d=[],v=0;for(let C=0;C<os;++C){let G=C/x,M=Math.exp(-G*G/2);d.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:g}=this;f.dTheta.value=A,f.mipInt.value=g-n;let y=this._sizeLods[s],w=3*y*(s>g-Xs?s-g+Xs:0),R=4*(this._cubeSize-y);Uo(t,w,R,3*y,2*y),c.setRenderTarget(t),c.render(u,Rc)}};aa=class extends qt{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:ls,h!==ls&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ls&&(n=Li),n===void 0&&h===$s&&(n=cs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=c!==void 0?c:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jf=new qt,$f=new aa(1,1);$f.compareFunction=Xf;Qf=new ea,ed=new Yc,td=new ra,Ku=[],ju=[],Zu=new Float32Array(16),Ju=new Float32Array(9),$u=new Float32Array(4);Zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xx(t.type)}},Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uy(t.type)}},$c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Lc=/(\w+)(\])?(\[|\.)?/g;js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fy(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};dy=37297,py=0;by=/^[ \t]*#include +<([\w\d./]+)>/gm;Sy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ny=0,el=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new tl(e),t.set(e,n)),n}},tl=class{constructor(e){this.id=Ny++,this.code=e,this.usedTimes=0}};Hy=0;nl=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},il=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;sl=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},nt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jy={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,A=.005;l.inputState.pinching&&f>p+A?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-A&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rl=class extends Bi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,A=null,x=t.getContextAttributes(),m=null,d=null,v=[],g=[],y=new Ue,w=null,R=new Ct;R.layers.enable(1),R.viewport=new ot;let C=new Ct;C.layers.enable(2),C.viewport=new ot;let G=[R,C],M=new sl;M.layers.enable(1),M.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=v[X];return ee===void 0&&(ee=new zr,v[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=v[X];return ee===void 0&&(ee=new zr,v[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=v[X];return ee===void 0&&(ee=new zr,v[X]=ee),ee.getHandSpace()};function K(X){let ee=g.indexOf(X.inputSource);if(ee===-1)return;let me=v[ee];me!==void 0&&(me.update(X.inputSource,X.frame,l||o),me.dispatchEvent({type:X.type,data:X.inputSource}))}function le(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",L);for(let X=0;X<v.length;X++){let ee=g[X];ee!==null&&(g[X]=null,v[X].disconnect(ee))}T=null,F=null,e.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",le),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new pi(p.framebufferWidth,p.framebufferHeight,{format:wn,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,me=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=x.stencil?$s:ls,me=x.stencil?cs:Li);let ye={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new pi(f.textureWidth,f.textureHeight,{format:wn,type:Oi,depthTexture:new aa(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Le=e.properties.get(d);Le.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(X){for(let ee=0;ee<X.removed.length;ee++){let me=X.removed[ee],Se=g.indexOf(me);Se>=0&&(g[Se]=null,v[Se].disconnect(me))}for(let ee=0;ee<X.added.length;ee++){let me=X.added[ee],Se=g.indexOf(me);if(Se===-1){for(let Le=0;Le<v.length;Le++)if(Le>=g.length){g.push(me),Se=Le;break}else if(g[Le]===null){g[Le]=me,Se=Le;break}if(Se===-1)break}let ye=v[Se];ye&&ye.connect(me)}}let z=new I,q=new I;function Z(X,ee,me){z.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(me.matrixWorld);let Se=z.distanceTo(q),ye=ee.projectionMatrix.elements,Le=me.projectionMatrix.elements,ze=ye[14]/(ye[10]-1),Pe=ye[14]/(ye[10]+1),Je=(ye[9]+1)/ye[5],B=(ye[9]-1)/ye[5],wt=(ye[8]-1)/ye[0],Re=(Le[8]+1)/Le[0],ke=ze*wt,_e=ze*Re,dt=Se/(-wt+Re),He=dt*-wt;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(He),X.translateZ(dt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let E=ze+dt,_=Pe+dt,k=ke-He,re=_e+(Se-He),te=Je*Pe/_*E,oe=B*Pe/_*E;X.projectionMatrix.makePerspective(k,re,te,oe,E,_),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;M.near=C.near=R.near=X.near,M.far=C.far=R.far=X.far,(T!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,F=M.far);let ee=X.parent,me=M.cameras;J(M,ee);for(let Se=0;Se<me.length;Se++)J(me[Se],ee);me.length===2?Z(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),j(X,M,ee)};function j(X,ee,me){me===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=er*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let ie=null;function ce(X,ee){if(h=ee.getViewerPose(l||o),A=ee,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Se=!1;me.length!==M.cameras.length&&(M.cameras.length=0,Se=!0);for(let ye=0;ye<me.length;ye++){let Le=me[ye],ze=null;if(p!==null)ze=p.getViewport(Le);else{let Je=u.getViewSubImage(f,Le);ze=Je.viewport,ye===0&&(e.setRenderTargetTextures(d,Je.colorTexture,f.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(d))}let Pe=G[ye];Pe===void 0&&(Pe=new Ct,Pe.layers.enable(ye),Pe.viewport=new ot,G[ye]=Pe),Pe.matrix.fromArray(Le.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Le.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(ze.x,ze.y,ze.width,ze.height),ye===0&&(M.matrix.copy(Pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Se===!0&&M.cameras.push(Pe)}}for(let me=0;me<v.length;me++){let Se=g[me],ye=v[me];Se!==null&&ye!==void 0&&ye.update(Se,ee,l||o)}ie&&ie(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),A=null}let Ae=new Zf;Ae.setAnimationLoop(ce),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}};Xr=class{constructor(e={}){let{canvas:t=c0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),A=new Int32Array(4),x=null,m=null,d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=Ui,this.toneMappingExposure=1;let g=this,y=!1,w=0,R=0,C=null,G=-1,M=null,T=new ot,F=new ot,K=null,le=new we(0),L=0,z=t.width,q=t.height,Z=1,J=null,j=null,ie=new ot(0,0,z,q),ce=new ot(0,0,z,q),Ae=!1,X=new Wr,ee=!1,me=!1,Se=null,ye=new Xe,Le=new Ue,ze=new I,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Je(){return C===null?Z:1}let B=n;function wt(S,O){for(let V=0;V<S.length;V++){let W=S[V],H=t.getContext(W,O);if(H!==null)return H}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",fe,!1),B===null){let O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),B=wt(O,S),B===null)throw wt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Re,ke,_e,dt,He,E,_,k,re,te,oe,ve,pe,b,N,U,D,Y,ae,ne,$,Q,ue,Ce;function qe(){Re=new xx(B),ke=new fx(B,Re,e),Re.init(ke),Q=new Zy(B,Re,ke),_e=new Ky(B,Re,ke),dt=new vx(B),He=new Oy,E=new jy(B,Re,_e,He,ke,Q,dt),_=new px(g),k=new gx(g),re=new C0(B,ke),ue=new hx(B,Re,re,ke),te=new yx(B,re,dt,ue),oe=new Ex(B,te,re,dt),ae=new Sx(B,ke,E),U=new dx(He),ve=new Uy(g,_,k,Re,ke,ue,U),pe=new $y(g,He),b=new By,N=new Wy(Re,ke),Y=new lx(g,_,k,_e,oe,f,c),D=new Yy(g,oe,ke),Ce=new Qy(B,dt,ke,_e),ne=new ux(B,Re,dt,ke),$=new _x(B,Re,dt,ke),dt.programs=ve.programs,g.capabilities=ke,g.extensions=Re,g.properties=He,g.renderLists=b,g.shadowMap=D,g.state=_e,g.info=dt}qe();let Me=new rl(g,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=Re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(z,q,!1))},this.getSize=function(S){return S.set(z,q)},this.setSize=function(S,O,V=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,q=O,t.width=Math.floor(S*Z),t.height=Math.floor(O*Z),V===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(z*Z,q*Z).floor()},this.setDrawingBufferSize=function(S,O,V){z=S,q=O,Z=V,t.width=Math.floor(S*V),t.height=Math.floor(O*V),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(ie)},this.setViewport=function(S,O,V,W){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,O,V,W),_e.viewport(T.copy(ie).multiplyScalar(Z).floor())},this.getScissor=function(S){return S.copy(ce)},this.setScissor=function(S,O,V,W){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,O,V,W),_e.scissor(F.copy(ce).multiplyScalar(Z).floor())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(S){_e.setScissorTest(Ae=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(S=!0,O=!0,V=!0){let W=0;if(S){let H=!1;if(C!==null){let xe=C.texture.format;H=xe===kf||xe===zf||xe===Bf}if(H){let xe=C.texture.type,Ee=xe===Oi||xe===Li||xe===El||xe===cs||xe===Of||xe===Ff,Ne=Y.getClearColor(),Fe=Y.getClearAlpha(),Ke=Ne.r,Ge=Ne.g,We=Ne.b;Ee?(p[0]=Ke,p[1]=Ge,p[2]=We,p[3]=Fe,B.clearBufferuiv(B.COLOR,0,p)):(A[0]=Ke,A[1]=Ge,A[2]=We,A[3]=Fe,B.clearBufferiv(B.COLOR,0,A))}else W|=B.COLOR_BUFFER_BIT}O&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),b.dispose(),N.dispose(),He.dispose(),_.dispose(),k.dispose(),oe.dispose(),ue.dispose(),Ce.dispose(),ve.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",nn),Me.removeEventListener("sessionend",ht),Se&&(Se.dispose(),Se=null),sn.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let S=dt.autoReset,O=D.enabled,V=D.autoUpdate,W=D.needsUpdate,H=D.type;qe(),dt.autoReset=S,D.enabled=O,D.autoUpdate=V,D.needsUpdate=W,D.type=H}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function de(S){let O=S.target;O.removeEventListener("dispose",de),De(O)}function De(S){Ie(S),He.remove(S)}function Ie(S){let O=He.get(S).programs;O!==void 0&&(O.forEach(function(V){ve.releaseProgram(V)}),S.isShaderMaterial&&ve.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,V,W,H,xe){O===null&&(O=Pe);let Ee=H.isMesh&&H.matrixWorld.determinant()<0,Ne=Wp(S,O,V,W,H);_e.setMaterial(W,Ee);let Fe=V.index,Ke=1;if(W.wireframe===!0){if(Fe=te.getWireframeAttribute(V),Fe===void 0)return;Ke=2}let Ge=V.drawRange,We=V.attributes.position,Et=Ge.start*Ke,gn=(Ge.start+Ge.count)*Ke;xe!==null&&(Et=Math.max(Et,xe.start*Ke),gn=Math.min(gn,(xe.start+xe.count)*Ke)),Fe!==null?(Et=Math.max(Et,0),gn=Math.min(gn,Fe.count)):We!=null&&(Et=Math.max(Et,0),gn=Math.min(gn,We.count));let Bt=gn-Et;if(Bt<0||Bt===1/0)return;ue.setup(H,W,Ne,V,Fe);let ni,Mt=ne;if(Fe!==null&&(ni=re.get(Fe),Mt=$,Mt.setIndex(ni)),H.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*Je()),Mt.setMode(B.LINES)):Mt.setMode(B.TRIANGLES);else if(H.isLine){let je=W.linewidth;je===void 0&&(je=1),_e.setLineWidth(je*Je()),H.isLineSegments?Mt.setMode(B.LINES):H.isLineLoop?Mt.setMode(B.LINE_LOOP):Mt.setMode(B.LINE_STRIP)}else H.isPoints?Mt.setMode(B.POINTS):H.isSprite&&Mt.setMode(B.TRIANGLES);if(H.isBatchedMesh)Mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Mt.renderInstances(Et,Bt,H.count);else if(V.isInstancedBufferGeometry){let je=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,tc=Math.min(V.instanceCount,je);Mt.renderInstances(Et,Bt,tc)}else Mt.render(Et,Bt)};function ct(S,O,V){S.transparent===!0&&S.side===hn&&S.forceSinglePass===!1?(S.side=un,S.needsUpdate=!0,uo(S,O,V),S.side=Kn,S.needsUpdate=!0,uo(S,O,V),S.side=hn):uo(S,O,V)}this.compile=function(S,O,V=null){V===null&&(V=S),m=N.get(V),m.init(),v.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),S!==V&&S.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(g._useLegacyLights);let W=new Set;return S.traverse(function(H){let xe=H.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){let Ne=xe[Ee];ct(Ne,V,H),W.add(Ne)}else ct(xe,V,H),W.add(xe)}),v.pop(),m=null,W},this.compileAsync=function(S,O,V=null){let W=this.compile(S,O,V);return new Promise(H=>{function xe(){if(W.forEach(function(Ee){He.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){H(S);return}setTimeout(xe,10)}Re.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let lt=null;function Ft(S){lt&&lt(S)}function nn(){sn.stop()}function ht(){sn.start()}let sn=new Zf;sn.setAnimationLoop(Ft),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(S){lt=S,Me.setAnimationLoop(S),S===null?sn.stop():sn.start()},Me.addEventListener("sessionstart",nn),Me.addEventListener("sessionend",ht),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(O),O=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,O,C),m=N.get(S,v.length),m.init(),v.push(m),ye.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(ye),me=this.localClippingEnabled,ee=U.init(this.clippingPlanes,me),x=b.get(S,d.length),x.init(),d.push(x),Xn(S,O,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(J,j),this.info.render.frame++,ee===!0&&U.beginShadows();let V=m.state.shadowsArray;if(D.render(V,S,O),ee===!0&&U.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(x,S),m.setupLights(g._useLegacyLights),O.isArrayCamera){let W=O.cameras;for(let H=0,xe=W.length;H<xe;H++){let Ee=W[H];Oh(x,S,Ee,Ee.viewport)}}else Oh(x,S,O);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(g,S,O),ue.resetDefaultState(),G=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Xn(S,O,V,W){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){W&&ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ye);let Ee=oe.update(S),Ne=S.material;Ne.visible&&x.push(S,Ee,Ne,V,ze.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){let Ee=oe.update(S),Ne=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ze.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ze.copy(Ee.boundingSphere.center)),ze.applyMatrix4(S.matrixWorld).applyMatrix4(ye)),Array.isArray(Ne)){let Fe=Ee.groups;for(let Ke=0,Ge=Fe.length;Ke<Ge;Ke++){let We=Fe[Ke],Et=Ne[We.materialIndex];Et&&Et.visible&&x.push(S,Ee,Et,V,ze.z,We)}}else Ne.visible&&x.push(S,Ee,Ne,V,ze.z,null)}}let xe=S.children;for(let Ee=0,Ne=xe.length;Ee<Ne;Ee++)Xn(xe[Ee],O,V,W)}function Oh(S,O,V,W){let H=S.opaque,xe=S.transmissive,Ee=S.transparent;m.setupLightsView(V),ee===!0&&U.setGlobalState(g.clippingPlanes,V),xe.length>0&&Vp(H,xe,O,V),W&&_e.viewport(T.copy(W)),H.length>0&&ho(H,O,V),xe.length>0&&ho(xe,O,V),Ee.length>0&&ho(Ee,O,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Vp(S,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let xe=ke.isWebGL2;Se===null&&(Se=new pi(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Hr:Oi,minFilter:Fi,samples:xe?4:0})),g.getDrawingBufferSize(Le),xe?Se.setSize(Le.x,Le.y):Se.setSize(Jo(Le.x),Jo(Le.y));let Ee=g.getRenderTarget();g.setRenderTarget(Se),g.getClearColor(le),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();let Ne=g.toneMapping;g.toneMapping=Ui,ho(S,V,W),E.updateMultisampleRenderTarget(Se),E.updateRenderTargetMipmap(Se);let Fe=!1;for(let Ke=0,Ge=O.length;Ke<Ge;Ke++){let We=O[Ke],Et=We.object,gn=We.geometry,Bt=We.material,ni=We.group;if(Bt.side===hn&&Et.layers.test(W.layers)){let Mt=Bt.side;Bt.side=un,Bt.needsUpdate=!0,Fh(Et,V,W,gn,Bt,ni),Bt.side=Mt,Bt.needsUpdate=!0,Fe=!0}}Fe===!0&&(E.updateMultisampleRenderTarget(Se),E.updateRenderTargetMipmap(Se)),g.setRenderTarget(Ee),g.setClearColor(le,L),g.toneMapping=Ne}function ho(S,O,V){let W=O.isScene===!0?O.overrideMaterial:null;for(let H=0,xe=S.length;H<xe;H++){let Ee=S[H],Ne=Ee.object,Fe=Ee.geometry,Ke=W===null?Ee.material:W,Ge=Ee.group;Ne.layers.test(V.layers)&&Fh(Ne,O,V,Fe,Ke,Ge)}}function Fh(S,O,V,W,H,xe){S.onBeforeRender(g,O,V,W,H,xe),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(g,O,V,W,S,xe),H.transparent===!0&&H.side===hn&&H.forceSinglePass===!1?(H.side=un,H.needsUpdate=!0,g.renderBufferDirect(V,O,W,H,S,xe),H.side=Kn,H.needsUpdate=!0,g.renderBufferDirect(V,O,W,H,S,xe),H.side=hn):g.renderBufferDirect(V,O,W,H,S,xe),S.onAfterRender(g,O,V,W,H,xe)}function uo(S,O,V){O.isScene!==!0&&(O=Pe);let W=He.get(S),H=m.state.lights,xe=m.state.shadowsArray,Ee=H.state.version,Ne=ve.getParameters(S,H.state,xe,O,V),Fe=ve.getProgramCacheKey(Ne),Ke=W.programs;W.environment=S.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(S.isMeshStandardMaterial?k:_).get(S.envMap||W.environment),Ke===void 0&&(S.addEventListener("dispose",de),Ke=new Map,W.programs=Ke);let Ge=Ke.get(Fe);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Ee)return zh(S,Ne),Ge}else Ne.uniforms=ve.getUniforms(S),S.onBuild(V,Ne,g),S.onBeforeCompile(Ne,g),Ge=ve.acquireProgram(Ne,Fe),Ke.set(Fe,Ge),W.uniforms=Ne.uniforms;let We=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(We.clippingPlanes=U.uniform),zh(S,Ne),W.needsLights=qp(S),W.lightsStateVersion=Ee,W.needsLights&&(We.ambientLightColor.value=H.state.ambient,We.lightProbe.value=H.state.probe,We.directionalLights.value=H.state.directional,We.directionalLightShadows.value=H.state.directionalShadow,We.spotLights.value=H.state.spot,We.spotLightShadows.value=H.state.spotShadow,We.rectAreaLights.value=H.state.rectArea,We.ltc_1.value=H.state.rectAreaLTC1,We.ltc_2.value=H.state.rectAreaLTC2,We.pointLights.value=H.state.point,We.pointLightShadows.value=H.state.pointShadow,We.hemisphereLights.value=H.state.hemi,We.directionalShadowMap.value=H.state.directionalShadowMap,We.directionalShadowMatrix.value=H.state.directionalShadowMatrix,We.spotShadowMap.value=H.state.spotShadowMap,We.spotLightMatrix.value=H.state.spotLightMatrix,We.spotLightMap.value=H.state.spotLightMap,We.pointShadowMap.value=H.state.pointShadowMap,We.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function Bh(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=js.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function zh(S,O){let V=He.get(S);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Wp(S,O,V,W,H){O.isScene!==!0&&(O=Pe),E.resetTextureUnits();let xe=O.fog,Ee=W.isMeshStandardMaterial?O.environment:null,Ne=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pt,Fe=(W.isMeshStandardMaterial?k:_).get(W.envMap||Ee),Ke=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ge=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),We=!!V.morphAttributes.position,Et=!!V.morphAttributes.normal,gn=!!V.morphAttributes.color,Bt=Ui;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Bt=g.toneMapping);let ni=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Mt=ni!==void 0?ni.length:0,je=He.get(W),tc=m.state.lights;if(ee===!0&&(me===!0||S!==M)){let En=S===M&&W.id===G;U.setState(W,S,En)}let St=!1;W.version===je.__version?(je.needsLights&&je.lightsStateVersion!==tc.state.version||je.outputColorSpace!==Ne||H.isBatchedMesh&&je.batching===!1||!H.isBatchedMesh&&je.batching===!0||H.isInstancedMesh&&je.instancing===!1||!H.isInstancedMesh&&je.instancing===!0||H.isSkinnedMesh&&je.skinning===!1||!H.isSkinnedMesh&&je.skinning===!0||H.isInstancedMesh&&je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&je.instancingColor===!1&&H.instanceColor!==null||je.envMap!==Fe||W.fog===!0&&je.fog!==xe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==U.numPlanes||je.numIntersection!==U.numIntersection)||je.vertexAlphas!==Ke||je.vertexTangents!==Ge||je.morphTargets!==We||je.morphNormals!==Et||je.morphColors!==gn||je.toneMapping!==Bt||ke.isWebGL2===!0&&je.morphTargetsCount!==Mt)&&(St=!0):(St=!0,je.__version=W.version);let $i=je.currentProgram;St===!0&&($i=uo(W,O,H));let kh=!1,br=!1,nc=!1,Zt=$i.getUniforms(),Qi=je.uniforms;if(_e.useProgram($i.program)&&(kh=!0,br=!0,nc=!0),W.id!==G&&(G=W.id,br=!0),kh||M!==S){Zt.setValue(B,"projectionMatrix",S.projectionMatrix),Zt.setValue(B,"viewMatrix",S.matrixWorldInverse);let En=Zt.map.cameraPosition;En!==void 0&&En.setValue(B,ze.setFromMatrixPosition(S.matrixWorld)),ke.logarithmicDepthBuffer&&Zt.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Zt.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,br=!0,nc=!0)}if(H.isSkinnedMesh){Zt.setOptional(B,H,"bindMatrix"),Zt.setOptional(B,H,"bindMatrixInverse");let En=H.skeleton;En&&(ke.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Zt.setValue(B,"boneTexture",En.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Zt.setOptional(B,H,"batchingTexture"),Zt.setValue(B,"batchingTexture",H._matricesTexture,E));let ic=V.morphAttributes;if((ic.position!==void 0||ic.normal!==void 0||ic.color!==void 0&&ke.isWebGL2===!0)&&ae.update(H,V,$i),(br||je.receiveShadow!==H.receiveShadow)&&(je.receiveShadow=H.receiveShadow,Zt.setValue(B,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qi.envMap.value=Fe,Qi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),br&&(Zt.setValue(B,"toneMappingExposure",g.toneMappingExposure),je.needsLights&&Xp(Qi,nc),xe&&W.fog===!0&&pe.refreshFogUniforms(Qi,xe),pe.refreshMaterialUniforms(Qi,W,Z,q,Se),js.upload(B,Bh(je),Qi,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(js.upload(B,Bh(je),Qi,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Zt.setValue(B,"center",H.center),Zt.setValue(B,"modelViewMatrix",H.modelViewMatrix),Zt.setValue(B,"normalMatrix",H.normalMatrix),Zt.setValue(B,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let En=W.uniformsGroups;for(let sc=0,Yp=En.length;sc<Yp;sc++)if(ke.isWebGL2){let Hh=En[sc];Ce.update(Hh,$i),Ce.bind(Hh,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function Xp(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function qp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,O,V){He.get(S.texture).__webglTexture=O,He.get(S.depthTexture).__webglTexture=V;let W=He.get(S);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){let V=He.get(S);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,V=0){C=S,w=O,R=V;let W=!0,H=null,xe=!1,Ee=!1;if(S){let Fe=He.get(S);Fe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):Fe.__webglFramebuffer===void 0?E.setupRenderTarget(S):Fe.__hasExternalTextures&&E.rebindTextures(S,He.get(S.texture).__webglTexture,He.get(S.depthTexture).__webglTexture);let Ke=S.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ee=!0);let Ge=He.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?H=Ge[O][V]:H=Ge[O],xe=!0):ke.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?H=He.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[V]:H=Ge,T.copy(S.viewport),F.copy(S.scissor),K=S.scissorTest}else T.copy(ie).multiplyScalar(Z).floor(),F.copy(ce).multiplyScalar(Z).floor(),K=Ae;if(_e.bindFramebuffer(B.FRAMEBUFFER,H)&&ke.drawBuffers&&W&&_e.drawBuffers(S,H),_e.viewport(T),_e.scissor(F),_e.setScissorTest(K),xe){let Fe=He.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Fe.__webglTexture,V)}else if(Ee){let Fe=He.get(S.texture),Ke=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.__webglTexture,V||0,Ke)}G=-1},this.readRenderTargetPixels=function(S,O,V,W,H,xe,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=He.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){_e.bindFramebuffer(B.FRAMEBUFFER,Ne);try{let Fe=S.texture,Ke=Fe.format,Ge=Fe.type;if(Ke!==wn&&Q.convert(Ke)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let We=Ge===Hr&&(Re.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ge!==Oi&&Q.convert(Ge)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ui&&(ke.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-W&&V>=0&&V<=S.height-H&&B.readPixels(O,V,W,H,Q.convert(Ke),Q.convert(Ge),xe)}finally{let Fe=C!==null?He.get(C).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(S,O,V=0){let W=Math.pow(2,-V),H=Math.floor(O.image.width*W),xe=Math.floor(O.image.height*W);E.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,S.x,S.y,H,xe),_e.unbindTexture()},this.copyTextureToTexture=function(S,O,V,W=0){let H=O.image.width,xe=O.image.height,Ee=Q.convert(V.format),Ne=Q.convert(V.type);E.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,S.x,S.y,H,xe,Ee,Ne,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Ee,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,S.x,S.y,Ee,Ne,O.image),W===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(S,O,V,W,H=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xe=S.max.x-S.min.x+1,Ee=S.max.y-S.min.y+1,Ne=S.max.z-S.min.z+1,Fe=Q.convert(W.format),Ke=Q.convert(W.type),Ge;if(W.isData3DTexture)E.setTexture3D(W,0),Ge=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),Ge=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);let We=B.getParameter(B.UNPACK_ROW_LENGTH),Et=B.getParameter(B.UNPACK_IMAGE_HEIGHT),gn=B.getParameter(B.UNPACK_SKIP_PIXELS),Bt=B.getParameter(B.UNPACK_SKIP_ROWS),ni=B.getParameter(B.UNPACK_SKIP_IMAGES),Mt=V.isCompressedTexture?V.mipmaps[H]:V.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Mt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,S.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,S.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,S.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Ge,H,O.x,O.y,O.z,xe,Ee,Ne,Fe,Ke,Mt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ge,H,O.x,O.y,O.z,xe,Ee,Ne,Fe,Mt.data)):B.texSubImage3D(Ge,H,O.x,O.y,O.z,xe,Ee,Ne,Fe,Ke,Mt),B.pixelStorei(B.UNPACK_ROW_LENGTH,We),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et),B.pixelStorei(B.UNPACK_SKIP_PIXELS,gn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Bt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ni),H===0&&W.generateMipmaps&&B.generateMipmap(Ge),_e.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){w=0,R=0,C=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Tl?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Ea?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?hs:Vf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===hs?tt:Pt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ol=class extends Xr{};ol.prototype.isWebGL1Renderer=!0;ca=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new I,ds=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sr=class extends fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cr=new I,Hs=new I,Gs=new I,Vs=new Ue,Ir=new Ue,nd=new Xe,Oo=new I,Pr=new I,Fo=new I,hf=new Ue,Dc=new Ue,uf=new Ue,qr=class extends yt{constructor(e=new sr){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new Ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ir(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new ds(n,3,0,!1)),ks.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=ks,this.material=e,this.center=new Ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Gs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Bo(Oo.set(-.5,-.5,0),Gs,o,Hs,s,r),Bo(Pr.set(.5,-.5,0),Gs,o,Hs,s,r),Bo(Fo.set(.5,.5,0),Gs,o,Hs,s,r),hf.set(0,0),Dc.set(1,0),uf.set(1,1);let a=e.ray.intersectTriangle(Oo,Pr,Fo,!1,Cr);if(a===null&&(Bo(Pr.set(-.5,.5,0),Gs,o,Hs,s,r),Dc.set(0,1),a=e.ray.intersectTriangle(Oo,Fo,Pr,!1,Cr),a===null))return;let c=e.ray.origin.distanceTo(Cr);c<e.near||c>e.far||t.push({distance:c,point:Cr.clone(),uv:as.getInterpolation(Cr,Oo,Pr,Fo,hf,Dc,uf,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};ff=new I,df=new ot,pf=new ot,e_=new I,mf=new Xe,zo=new I,Nc=new _n,Af=new Xe,Uc=new fs,la=class extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kh,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zo),this.boundingBox.expandByPoint(zo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zo),this.boundingSphere.expandByPoint(zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nc.copy(this.boundingSphere),Nc.applyMatrix4(s),e.ray.intersectsSphere(Nc)!==!1&&(Af.copy(s).invert(),Uc.copy(e.ray).applyMatrix4(Af),!(this.boundingBox!==null&&Uc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;df.fromBufferAttribute(s.attributes.skinIndex,e),pf.fromBufferAttribute(s.attributes.skinWeight,e),ff.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=pf.getComponent(r);if(o!==0){let a=df.getComponent(r);mf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(e_.copy(ff).applyMatrix4(mf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Yr=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},al=class extends qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Rt,h=Rt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gf=new Xe,t_=new Xe,ha=class i{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:t_;gf.multiplyMatrices(a,t[r]),gf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new al(t,e,e,wn,ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Yr),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ps=class extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new Xe,xf=new Xe,ko=[],yf=new xt,n_=new Xe,Lr=new At,Dr=new _n,ua=class extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ps(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,n_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),yf.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(yf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Dr.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),xf.multiplyMatrices(n,Ws),Lr.matrixWorld=xf,Lr.raycast(e,ko);for(let o=0,a=ko.length;o<a;o++){let c=ko[o];c.instanceId=r,c.object=this,t.push(c)}ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ps(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Kr=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_f=new I,vf=new I,Mf=new Xe,Oc=new fs,Ho=new _n,rr=class extends yt{constructor(e=new Ht,t=new Kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)_f.fromBufferAttribute(t,s-1),vf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=_f.distanceTo(vf);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;Mf.copy(s).invert(),Oc.copy(e.ray).applyMatrix4(Mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,h=new I,u=new I,f=new I,p=this.isLineSegments?2:1,A=n.index,m=n.attributes.position;if(A!==null){let d=Math.max(0,o.start),v=Math.min(A.count,o.start+o.count);for(let g=d,y=v-1;g<y;g+=p){let w=A.getX(g),R=A.getX(g+1);if(l.fromBufferAttribute(m,w),h.fromBufferAttribute(m,R),Oc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let G=e.ray.origin.distanceTo(f);G<e.near||G>e.far||t.push({distance:G,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=d,y=v-1;g<y;g+=p){if(l.fromBufferAttribute(m,g),h.fromBufferAttribute(m,g+1),Oc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},bf=new I,Sf=new I,fa=class extends rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bf.fromBufferAttribute(t,s),Sf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bf.distanceTo(Sf);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},jr=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ef=new Xe,cl=new fs,Go=new _n,Vo=new I,pa=class extends yt{constructor(e=new Ht,t=new jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;Ef.copy(s).invert(),cl.copy(e.ray).applyMatrix4(Ef);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let A=f,x=p;A<x;A++){let m=l.getX(A);Vo.fromBufferAttribute(u,m),Tf(Vo,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let A=f,x=p;A<x;A++)Vo.fromBufferAttribute(u,A),Tf(Vo,A,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};or=class extends qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zr=class i extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,h=new Ue;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ve=class i extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],A=0,x=[],m=n/2,d=0;v(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(p,2));function v(){let y=new I,w=new I,R=0,C=(t-e)/n;for(let G=0;G<=r;G++){let M=[],T=G/r,F=T*(t-e)+e;for(let K=0;K<=s;K++){let le=K/s,L=le*c+a,z=Math.sin(L),q=Math.cos(L);w.x=F*z,w.y=-T*n+m,w.z=F*q,u.push(w.x,w.y,w.z),y.set(z,C,q).normalize(),f.push(y.x,y.y,y.z),p.push(le,1-T),M.push(A++)}x.push(M)}for(let G=0;G<s;G++)for(let M=0;M<r;M++){let T=x[M][G],F=x[M+1][G],K=x[M+1][G+1],le=x[M][G+1];h.push(T,F,le),h.push(F,K,le),R+=6}l.addGroup(d,R,0),d+=R}function g(y){let w=A,R=new Ue,C=new I,G=0,M=y===!0?e:t,T=y===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),A++;let F=A;for(let K=0;K<=s;K++){let L=K/s*c+a,z=Math.cos(L),q=Math.sin(L);C.x=M*q,C.y=m*T,C.z=M*z,u.push(C.x,C.y,C.z),f.push(0,T,0),R.x=z*.5+.5,R.y=q*.5*T+.5,p.push(R.x,R.y),A++}for(let K=0;K<s;K++){let le=w+K,L=F+K;y===!0?h.push(L,L+1,le):h.push(L+1,L,le),G+=3}l.addGroup(d,G,y===!0?1:2),d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ar=class i extends Ve{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ma=class i extends Ht{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/s,p=new I,A=new Ue;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),A.x=(p.x/t+1)/2,A.y=(p.y/t+1)/2,h.push(A.x,A.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let d=0;d<n;d++){let v=d+m,g=v,y=v+n+1,w=v+n+2,R=v+1;a.push(g,y,R),a.push(y,w,R)}}this.setIndex(a),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Nt=class i extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,f=new I,p=[],A=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],g=d/n,y=0;d===0&&o===0?y=.5/t:d===n&&c===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let R=w/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+g*a),u.y=e*Math.cos(o+g*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+g*a),A.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(R+y,1-g),v.push(l++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let g=h[d][v+1],y=h[d][v],w=h[d+1][v],R=h[d+1][v+1];(d!==0||o>0)&&p.push(g,y,R),(d!==n-1||c<Math.PI)&&p.push(y,w,R)}this.setIndex(p),this.setAttribute("position",new at(A,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},zi=class i extends Ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new I,u=new I,f=new I;for(let p=0;p<=n;p++)for(let A=0;A<=s;A++){let x=A/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(A/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let A=1;A<=s;A++){let x=(s+1)*p+A-1,m=(s+1)*(p-1)+A-1,d=(s+1)*(p-1)+A,v=(s+1)*p+A;o.push(x,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},vn=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cn=class extends vn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ll=class extends ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_u,endingEnd:_u}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vu:r=e,a=2*t-n;break;case Mu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vu:o=e,c=2*n-t;break;case Mu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,A=(n-t)/(s-t),x=A*A,m=x*A,d=-f*m+2*f*x-f*A,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*A+1,g=(-1-p)*m+(1.5+p)*x+.5*A,y=p*m-p*x;for(let w=0;w!==a;++w)r[w]=d*o[h+w]+v*o[l+w]+g*o[c+w]+y*o[u+w];return r}},hl=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},ul=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case us:t=this.InterpolantFactoryMethodLinear;break;case hc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&i_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let A=0;A!==n;++A){let x=t[u+A];if(x!==t[f+A]||x!==t[p+A]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=us;Hi=class extends In{};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Qs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;Aa=class extends In{};Aa.prototype.ValueTypeName="color";Ai=class extends In{};Ai.prototype.ValueTypeName="number";fl=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Hn.slerpFlat(r,0,o,l-a,o,l,c);return r}},jn=class extends In{InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};jn.prototype.ValueTypeName="quaternion";jn.prototype.DefaultInterpolation=us;jn.prototype.InterpolantFactoryMethodSmooth=void 0;Gi=class extends In{};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Qs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;gi=class extends In{};gi.prototype.ValueTypeName="vector";ga=class{constructor(e,t=-1,n,s=Fm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(o_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(In.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=s_(c);c=wf(c,1,h),l=wf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ai(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,A,x){if(p.length!==0){let m=[],d=[];id(p,m,d,A),m.length!==0&&x.push(new u(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},A;for(A=0;A<f.length;A++)if(f[A].morphTargets)for(let x=0;x<f[A].morphTargets.length;x++)p[f[A].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let v=0;v!==f[A].morphTargets.length;++v){let g=f[A];m.push(g.time),d.push(g.morphTarget===x?1:0)}s.push(new Ai(".morphTargetInfluence["+x+"]",m,d))}c=p.length*o}else{let p=".bones["+t[u].name+"]";n(gi,p+".position",f,"pos",s),n(jn,p+".quaternion",f,"rot",s),n(gi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},dl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],A=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return A}return null}}},a_=new dl,xi=class{constructor(e){this.manager=e!==void 0?e:a_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xi.DEFAULT_MATERIAL_NAME="__DEFAULT";ci={},pl=class extends Error{constructor(e,t){super(e),this.response=t}},Jr=class extends xi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:s});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ci[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,A=p!==0,x=0,m=new ReadableStream({start(d){v();function v(){u.read().then(({done:g,value:y})=>{if(g)d.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:A,loaded:x,total:p});for(let R=0,C=h.length;R<C;R++){let G=h[R];G.onProgress&&G.onProgress(w)}d.enqueue(y),v()}})}}});return new Response(m)}else throw new pl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(A=>p.decode(A))}}}).then(l=>{Di.add(e,l);let h=ci[e];delete ci[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=ci[e];if(h===void 0)throw this.manager.itemError(e),l;delete ci[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},ml=class extends xi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Gr("img");function c(){h(),Di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},xa=class extends xi{constructor(e){super(e)}load(e,t,n,s){let r=new qt,o=new ml(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},cr=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ya=class extends cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fc=new Xe,Rf=new I,Cf=new I,$r=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rf),Cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cf),t.updateMatrixWorld(),Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Al=class extends $r{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_a=class extends cr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Al}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},If=new Xe,Nr=new I,Bc=new I,gl=class extends $r{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nr),Bc.copy(n.position),Bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bc),n.updateMatrixWorld(),s.makeTranslation(-Nr.x,-Nr.y,-Nr.z),If.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If)}},yi=class extends cr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xl=class extends $r{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new xl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},va=class extends xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(e,c),r.manager.itemStart(e)}},Cl="\\[\\]\\.:\\/",c_=new RegExp("["+Cl+"]","g"),Il="[^"+Cl+"]",l_="[^"+Cl.replace("\\.","")+"]",h_=/((?:WC+[\/:])*)/.source.replace("WC",Il),u_=/(WCOD+)?/.source.replace("WCOD",l_),f_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),d_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),p_=new RegExp("^"+h_+u_+f_+d_+"$"),m_=["material","materials","bones","map"],yl=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(c_,"")}static parseTrackName(e){let t=p_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);m_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=yl;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Sv=new Float32Array(1),Ma=class{constructor(e,t,n=0,s=1/0){this.ray=new fs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return _l(e,this,n,t),n.sort(Pf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)_l(e[s],this,n,t);return n.sort(Pf),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl)});function Pl(i,e){if(e===Gf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Qr||e===Sa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Qr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var sd=pt(()=>{Pn()});function A_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function y_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new vn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function ms(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function __(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function v_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function M_(i){let e,t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nl(t.attributes):e=i.indices+":"+Nl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Nl(i.targets[n]);return e}function Nl(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function sh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function E_(i,e,t){let n=e.attributes,s=new xt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let h=sh(ur[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,A=f.max;if(p!==void 0&&A!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(A[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(A[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(A[2]))),f.normalized){let x=sh(ur[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new _n;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function cd(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=ih[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==Pt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),qi(i,e),E_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?__(i,e.targets,t):i})}var wa,$e,Ul,Ol,Fl,Bl,zl,kl,Hl,Gl,Vl,Wl,Xl,ql,Yl,Kl,jl,Zl,Jl,ld,eo,rd,$l,Ql,eh,th,Ra,g_,nh,Ln,ur,od,ad,Ll,ih,Xi,x_,Dl,S_,rh,hd=pt(()=>{Pn();sd();wa=class extends xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Bl(t)}),this.register(function(t){return new Yl(t)}),this.register(function(t){return new Kl(t)}),this.register(function(t){return new jl(t)}),this.register(function(t){return new kl(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new Gl(t)}),this.register(function(t){return new Vl(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Wl(t)}),this.register(function(t){return new zl(t)}),this.register(function(t){return new ql(t)}),this.register(function(t){return new Xl(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Zl(t)}),this.register(function(t){return new Jl(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Vi.extractUrlBase(e);o=Vi.resolveURL(l,this.path)}else o=Vi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Jr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ld){try{o[$e.KHR_BINARY_GLTF]=new $l(e)}catch(u){s&&s(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new rh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new Ol;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ql(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new eh;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new th;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};$e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ul=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Pt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new lr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new yi(h),l.distance=u;break;case"spot":l=new _a(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,qi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Ol=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,n){let s=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(s)}},Fl=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Bl=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(r)}},zl=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},kl=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Pt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Hl=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Gl=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],Pt),Promise.all(r)}},Vl=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Wl=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],Pt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,tt)),Promise.all(r)}},Xl=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},ql=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Yl=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Kl=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},jl=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zl=class{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Jl=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Ln.TRIANGLES&&l.mode!==Ln.TRIANGLE_STRIP&&l.mode!==Ln.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let A of u){let x=new Xe,m=new I,d=new Hn,v=new I(1,1,1),g=new ua(A.geometry,A.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),g.setMatrixAt(y,x.compose(m,d,v));for(let y in c)if(y==="_COLOR_0"){let w=c[y];g.instanceColor=new ps(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&A.geometry.setAttribute(y,c[y]);yt.prototype.copy.call(g,A),this.parser.assignFinalMaterial(g),p.push(g)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},ld="glTF",eo=12,rd={JSON:1313821514,BIN:5130562},$l=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,eo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ld)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-eo,r=new DataView(e,eo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===rd.JSON){let l=new Uint8Array(e,eo+o,a);this.content=n.decode(l)}else if(c===rd.BIN){let l=eo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ql=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=ih[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=ih[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],p=ur[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let A in p.attributes){let x=p.attributes[A],m=c[A];m!==void 0&&(x.normalized=m)}u(p)},a,l,Pt,f)})})}},eh=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},th=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},Ra=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,A=e*l,x=A-l,m=-2*p+3*f,d=p-f,v=1-m,g=d-f+u;for(let y=0;y!==a;y++){let w=o[x+y+a],R=o[x+y+c]*h,C=o[A+y+a],G=o[A+y]*h;r[y]=v*w+g*R+m*C+d*G}return r}},g_=new Hn,nh=class extends Ra{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return g_.fromArray(r).normalize().toArray(r),r}},Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},od={9728:Rt,9729:an,9984:qo,9985:Sl,9986:Ur,9987:Fi},ad={33071:kt,33648:kr,10497:di},Ll={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ih={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},x_={CUBICSPLINE:void 0,LINEAR:us,STEP:Qs},Dl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};S_=new Xe,rh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new A_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new xa(this.options.manager):this.textureLoader=new va(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ms(r,a,s),qi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Vi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Ll[s.type],a=ur[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new It(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Ll[s.type],l=ur[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,A=s.normalized===!0,x,m;if(p&&p!==u){let d=Math.floor(f/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,g=t.cache.get(v);g||(x=new l(a,d*p,s.count*p/h),g=new ir(x,p/h),t.cache.add(v,g)),m=new ds(g,c,f%p/h,A)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new It(x,c,A);if(s.sparse!==void 0){let d=Ll.SCALAR,v=ur[s.sparse.indices.componentType],g=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new v(o[1],g,s.sparse.count*d),R=new l(o[2],y,s.sparse.count*c);a!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized));for(let C=0,G=w.length;C<G;C++){let M=w[C];if(m.setX(M,R[C*c]),c>=2&&m.setY(M,R[C*c+1]),c>=3&&m.setZ(M,R[C*c+2]),c>=4&&m.setW(M,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=od[f.magFilter]||an,h.minFilter=od[f.minFilter]||Fi,h.wrapS=ad[f.wrapS]||di,h.wrapT=ad[f.wrapT]||di,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let A=f;t.isImageBitmapLoader===!0&&(A=function(x){let m=new qt(x);m.needsUpdate=!0,f(m)}),t.load(Vi.resolveURL(u,r.path),A,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||b_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new jr,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Kr,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return vn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){let u=s[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Pt),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hn);let h=r.alphaMode||Dl.OPAQUE;if(h===Dl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Dl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Yt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yt){let u=r.emissiveFactor;a.emissive=new we().setRGB(u[0],u[1],u[2],Pt)}return r.emissiveTexture!==void 0&&o!==Yt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,tt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),qi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ms(s,u,r),u})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return cd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=M_(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=cd(new Ht,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?y_(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,A=h.length;p<A;p++){let x=h[p],m=o[p],d,v=l[p];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new la(x,v):new At(x,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Ln.TRIANGLE_STRIP?d.geometry=Pl(d.geometry,Sa):m.mode===Ln.TRIANGLE_FAN&&(d.geometry=Pl(d.geometry,Qr));else if(m.mode===Ln.LINES)d=new fa(x,v);else if(m.mode===Ln.LINE_STRIP)d=new rr(x,v);else if(m.mode===Ln.LINE_LOOP)d=new da(x,v);else if(m.mode===Ln.POINTS)d=new pa(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&v_(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),qi(d,r),m.extensions&&ms(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,A=u.length;p<A;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ms(s,u[0],r),u[0];let f=new nt;r.extensions&&ms(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,A=u.length;p<A;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(qf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new nr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Xe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ha(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],A=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[A.input]:A.input,v=s.parameters!==void 0?s.parameters[A.output]:A.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",v)),l.push(A),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],A=u[2],x=u[3],m=u[4],d=[];for(let v=0,g=f.length;v<g;v++){let y=f[v],w=p[v],R=A[v],C=x[v],G=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=n._createAnimationTracks(y,w,R,C,G);if(M)for(let T=0;T<M.length;T++)d.push(M[T])}return new ga(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,S_)});for(let p=0,A=u.length;p<A;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Yr:l.length>1?h=new nt:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),qi(h,r),r.extensions&&ms(n,h,r),r.matrix!==void 0){let u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new nt;n.name&&(r.name=s.createUniqueName(n.name)),qi(r,n),n.extensions&&ms(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof fn||f instanceof qt)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Xi[r.path]===Xi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Xi[r.path]){case Xi.weights:l=Ai;break;case Xi.rotation:l=jn;break;case Xi.position:case Xi.scale:l=gi;break;default:switch(n.itemSize){case 1:l=Ai;break;case 2:case 3:default:l=gi;break}break}let h=s.interpolation!==void 0?x_[s.interpolation]:us,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let A=new l(c[f]+"."+Xi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(A),o.push(A)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=sh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof jn?nh:Ra;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function ud(i){let e=new Map,t=new Map,n=i.clone();return fd(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function fd(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)fd(i.children[n],e.children[n],t)}var dd=pt(()=>{});var pd,md=pt(()=>{pd={tvCabinet:"Z2xURgIAAAB4IAAAxAMAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjUuMSIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiVkVDMyIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyMjgsIm1heCI6WzAuODAwMDAwMDExOTIwOTI5LDAuMzEwMDAwMDAyMzg0MTg1OCwwXSwibWluIjpbMCwwLC0wLjI1XSwiYnVmZmVyVmlldyI6MCwiYnl0ZU9mZnNldCI6MH0seyJ0eXBlIjoiVkVDMyIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyMjgsImJ1ZmZlclZpZXciOjAsImJ5dGVPZmZzZXQiOjEyfSx7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTI1LCJjb3VudCI6NDYyLCJidWZmZXJWaWV3IjoxLCJieXRlT2Zmc2V0IjowfV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVPZmZzZXQiOjAsImJ5dGVMZW5ndGgiOjU0NzIsImJ5dGVTdHJpZGUiOjI0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZU9mZnNldCI6NTQ3MiwiYnl0ZUxlbmd0aCI6MTg0OCwidGFyZ2V0IjozNDk2M31dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo3MzIwfV0sIm1hdGVyaWFscyI6W3sibmFtZSI6Indvb2QiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjg5NjIyNjQsMC42MDE1NzEyLDAuMzkzMTU1OSwxXSwibWV0YWxsaWNGYWN0b3IiOjB9fV0sIm1lc2hlcyI6W3sibmFtZSI6Ik1lc2ggY2FiaW5ldFRlbGV2aXNpb24iLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjF9LCJtb2RlIjo0LCJtYXRlcmlhbCI6MCwiaW5kaWNlcyI6Mn1dfV0sIm5vZGVzIjpbeyJuYW1lIjoiY2FiaW5ldFRlbGV2aXNpb24oQ2xvbmUpIiwibWVzaCI6MH1dLCJzY2VuZXMiOlt7Im5vZGVzIjpbMF19XSwic2NlbmUiOjAsImV4dGVuc2lvbnNVc2VkIjpbIktIUl9tYXRlcmlhbHNfdW5saXQiXX0gmBwAAEJJTgAAAAAAvw4cJArXI70AAAAAAAAAAAAAgL8K1yM9vw4cJArXI70AAAAAAAAAAAAAgL8AAAAACtcjPQrXI70AAAAAAAAAAAAAgL8K1yM9CtcjPQrXI70AAAAAAAAAAAAAgL8K1yM9AAAAAAAAAIAAAIA/AAAAAAAAAIAK1yM9CtcjPQAAAIAAAIA/AAAAAAAAAIAK1yM9vw4cJArXI70AAIA/AAAAAAAAAIAK1yM9CtcjPQrXI70AAIA/AAAAAAAAAIAAAAAAvw4cJArXI70AAAAAAACAvwAAAIAAAAAAAAAAAAAAAIAAAAAAAACAvwAAAIAK1yM9vw4cJArXI70AAAAAAACAvwAAAIAK1yM9AAAAAAAAAIAAAAAAAACAvwAAAIAAAAAAIY6VJQAAgL4AAAAAAACAvwAAAIAAAAAAWRd3JT0KV74AAAAAAACAvwAAAIAK1yM9IY6VJQAAgL4AAAAAAACAvwAAAIAK1yM9WRd3JT0KV74AAAAAAACAvwAAAIAK1yM9CtcjPT0KV74AAIA/AAAAAAAAAIAK1yM9CtcjPQAAgL4AAIA/AAAAAAAAAIAK1yM9WRd3JT0KV74AAIA/AAAAAAAAAIAK1yM9IY6VJQAAgL4AAIA/AAAAAAAAAIAK1yM9cD2KPj0KV74AAAAAAACAvwAAAIAK1yM9cD2KPgAAAIAAAAAAAACAvwAAAIBcj0I/cD2KPj0KV74AAAAAAACAvwAAAIAVrsc+cD2KPs3MTL0AAAAAAACAvwAAAICG69E+cD2KPs3MTL0AAAAAAACAvwAAAICG69E+cD2KPpDC9bwAAAAAAACAvwAAAIAVrsc+cD2KPpDC9bwAAAAAAACAvwAAAIBcj0I/cD2KPgAAAIAAAAAAAACAvwAAAIAK1yM9CtejPT0KV74AAAAAAACAPwAAAIAVrsc+CtejPZDC9bwAAAAAAACAPwAAAIAK1yM9CtejPQAAAIAAAAAAAACAPwAAAIBcj0I/CtejPQAAAIAAAAAAAACAPwAAAICG69E+CtejPZDC9bwAAAAAAACAPwAAAICG69E+CtejPc3MTL0AAAAAAACAPwAAAIAVrsc+CtejPc3MTL0AAAAAAACAPwAAAIBcj0I/CtejPT0KV74AAAAAAACAPwAAAIAK1yM9WRd3JT0KV74AAAAAAAAAAAAAgD8AAAAAWRd3JT0KV74AAAAAAAAAAAAAgD8K1yM9CtcjPT0KV74AAAAAAAAAAAAAgD8AAAAACtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/SgyCJArXI70AAAAAAACAvwAAAIBcj0I/SgyCJKkT0KUAAAAAAACAvwAAAIDNzEw/SgyCJArXI70AAAAAAACAvwAAAIDNzEw/SgyCJKkT0KUAAAAAAACAvwAAAIBcj0I/SgyCJArXI70AAAAAAAAAAAAAgL/NzEw/SgyCJArXI70AAAAAAAAAAAAAgL9cj0I/CtcjPQrXI70AAAAAAAAAAAAAgL/NzEw/CtcjPQrXI70AAAAAAAAAAAAAgL9cj0I/CtcjPT0KV74AAIC/AAAAAAAAAIBcj0I/54yIJT0KV74AAIC/AAAAAAAAAIBcj0I/CtcjPQAAgL4AAIC/AAAAAAAAAIBcj0I/54yIJQAAgL4AAIC/AAAAAAAAAIDNzEw/54yIJT0KV74AAAAAAAAAAAAAgD9cj0I/54yIJT0KV74AAAAAAAAAAAAAgD/NzEw/CtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/CtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/54yIJQAAgL4AAAAAAACAvwAAAIBcj0I/54yIJT0KV74AAAAAAACAvwAAAIDNzEw/54yIJQAAgL4AAAAAAACAvwAAAIDNzEw/54yIJT0KV74AAAAAAACAvwAAAIAAAAAAUriePgAAAIAAAAAAAACAPwAAAIAAAAAAUriePgAAgL4AAAAAAACAPwAAAIDNzEw/UriePgAAAIAAAAAAAACAPwAAAIDNzEw/UriePgAAgL4AAAAAAACAPwAAAIAAAAAAUriePgAAAIAAAIC/AAAAAAAAAIAAAAAAAAAAAAAAAIAAAIC/AAAAAAAAAIAAAAAAUriePgAAgL4AAIC/AAAAAAAAAIAAAAAACtcjPQrXI70AAIC/AAAAAAAAAIAAAAAACtcjPT0KV74AAIC/AAAAAAAAAIAAAAAAWRd3JT0KV74AAIC/AAAAAAAAAIAAAAAAIY6VJQAAgL4AAIC/AAAAAAAAAIAAAAAAvw4cJArXI70AAIC/AAAAAAAAAIAAAAAAIY6VJQAAgL4AAAAAAAAAAAAAgL8K1yM9IY6VJQAAgL4AAAAAAAAAAAAAgL8AAAAAUriePgAAgL4AAAAAAAAAAAAAgL8K1yM9CtcjPQAAgL4AAAAAAAAAAAAAgL9cj0I/CtcjPQAAgL4AAAAAAAAAAAAAgL/NzEw/UriePgAAgL4AAAAAAAAAAAAAgL/NzEw/54yIJQAAgL4AAAAAAAAAAAAAgL9cj0I/54yIJQAAgL4AAAAAAAAAAAAAgL/NzEw/SgyCJKkT0KUAAIA/AAAAAAAAAIDNzEw/CtcjPQrXI70AAIA/AAAAAAAAAIDNzEw/SgyCJArXI70AAIA/AAAAAAAAAIDNzEw/UriePgAAgL4AAIA/AAAAAAAAAIDNzEw/UriePgAAAIAAAIA/AAAAAAAAAIDNzEw/CtcjPT0KV74AAIA/AAAAAAAAAIDNzEw/54yIJT0KV74AAIA/AAAAAAAAAIDNzEw/54yIJQAAgL4AAIA/AAAAAAAAAIDNzEw/SgyCJKkT0KUAAAAAAAAAAAAAgD9cj0I/SgyCJKkT0KUAAAAAAAAAAAAAgD/NzEw/UriePgAAAIAAAAAAAAAAAAAAgD9cj0I/CtcjPQAAAIAAAAAAAAAAAAAAgD9cj0I/CtejPQAAAIAAAAAAAAAAAAAAgD8K1yM9CtcjPQAAAIAAAAAAAAAAAAAAgD9cj0I/cD2KPgAAAIAAAAAAAAAAAAAAgD8K1yM9cD2KPgAAAIAAAAAAAAAAAAAAgD8K1yM9CtejPQAAAIAAAAAAAAAAAAAAgD8AAAAAUriePgAAAIAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAAIAAAAAAAAAAAAAAgD8K1yM9AAAAAAAAAIAAAAAAAAAAAAAAgD8K1yM9wvUoPj0KV74AAAAAAACAvwAAAIAK1yM9wvUoPpDC9bwAAAAAAACAvwAAAIBcj0I/wvUoPj0KV74AAAAAAACAvwAAAIAVrsc+wvUoPs3MTL0AAAAAAACAvwAAAICG69E+wvUoPs3MTL0AAAAAAACAvwAAAICG69E+wvUoPpDC9bwAAAAAAACAvwAAAIBcj0I/wvUoPpDC9bwAAAAAAACAvwAAAIAVrsc+wvUoPpDC9bwAAAAAAACAvwAAAICG69E+o3A9PpDC9bwAAAAAAACAPwAAAICG69E+o3A9Ps3MTL0AAAAAAACAPwAAAIBcj0I/o3A9PpDC9bwAAAAAAACAPwAAAIBcj0I/o3A9Pj0KV74AAAAAAACAPwAAAIAVrsc+o3A9Ps3MTL0AAAAAAACAPwAAAIAK1yM9o3A9Pj0KV74AAAAAAACAPwAAAIAVrsc+o3A9PpDC9bwAAAAAAACAPwAAAIAK1yM9o3A9PpDC9bwAAAAAAACAPwAAAIBcj0I/o3A9Pj0KV74AAAAAAAAAAAAAgD8K1yM9o3A9Pj0KV74AAAAAAAAAAAAAgD9cj0I/cD2KPj0KV74AAAAAAAAAAAAAgD8K1yM9cD2KPj0KV74AAAAAAAAAAAAAgD9cj0I/CtejPT0KV74AAAAAAAAAAAAAgD8K1yM9CtejPT0KV74AAAAAAAAAAAAAgD9cj0I/wvUoPj0KV74AAAAAAAAAAAAAgD8K1yM9wvUoPj0KV74AAAAAAAAAAAAAgD9cj0I/CtcjPT0KV74AAAAAAACAvwAAAIBcj0I/CtcjPQrXI70AAAAAAACAvwAAAIDNzEw/CtcjPT0KV74AAAAAAACAvwAAAIDNzEw/CtcjPQrXI70AAAAAAACAvwAAAIBcj0I/CtcjPQAAAIAAAAAAAACAvwAAAIBcj0I/CtcjPQAAgL4AAAAAAACAvwAAAIAK1yM9CtcjPQAAAIAAAAAAAACAvwAAAIAK1yM9CtcjPQrXI70AAAAAAACAvwAAAIAK1yM9CtcjPT0KV74AAAAAAACAvwAAAIAK1yM9CtcjPQAAgL4AAAAAAACAvwAAAIAAAAAACtcjPQrXI70AAAAAAACAvwAAAIAAAAAACtcjPT0KV74AAAAAAACAvwAAAIBcj0I/CtcjPQAAAIAAAIC/AAAAAAAAAIBcj0I/SgyCJKkT0KUAAIC/AAAAAAAAAIBcj0I/CtcjPQrXI70AAIC/AAAAAAAAAIBcj0I/SgyCJArXI70AAIC/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAAAAAAAAAAAAgL+G69E+o3A9PpDC9bwAAAAAAAAAAAAAgL8Vrsc+cD2KPpDC9bwAAAAAAAAAAAAAgL+G69E+cD2KPpDC9bwAAAAAAAAAAAAAgL9cj0I/o3A9PpDC9bwAAAAAAAAAAAAAgL8K1yM9o3A9PpDC9bwAAAAAAAAAAAAAgL9cj0I/wvUoPpDC9bwAAAAAAAAAAAAAgL+G69E+wvUoPpDC9bwAAAAAAAAAAAAAgL8Vrsc+wvUoPpDC9bwAAAAAAAAAAAAAgL8K1yM9wvUoPpDC9bwAAAAAAAAAAAAAgL8Vrsc+CtejPZDC9bwAAAAAAAAAAAAAgL+G69E+CtejPZDC9bwAAAAAAAAAAAAAgL8Vrsc+cD2KPpDC9bwAAAAAAAAAAAAAgD+G69E+o3A9PpDC9bwAAAAAAAAAAAAAgD8Vrsc+o3A9PpDC9bwAAAAAAAAAAAAAgD+G69E+cD2KPpDC9bwAAAAAAAAAAAAAgD9cj0I/o3A9PpDC9bwAAAAAAAAAAAAAgD8K1yM9o3A9PpDC9bwAAAAAAAAAAAAAgD9cj0I/wvUoPpDC9bwAAAAAAAAAAAAAgD+G69E+wvUoPpDC9bwAAAAAAAAAAAAAgD8Vrsc+wvUoPpDC9bwAAAAAAAAAAAAAgD8K1yM9wvUoPpDC9bwAAAAAAAAAAAAAgD8Vrsc+CtejPZDC9bwAAAAAAAAAAAAAgD+G69E+CtejPZDC9bwAAAAAAAAAAAAAgD8K1yM9cD2KPgAAAIAAAIA/AAAAAAAAAIAK1yM9wvUoPpDC9bwAAIA/AAAAAAAAAIAK1yM9CtejPQAAAIAAAIA/AAAAAAAAAIAK1yM9CtejPT0KV74AAIA/AAAAAAAAAIAK1yM9wvUoPj0KV74AAIA/AAAAAAAAAIAK1yM9o3A9PpDC9bwAAIA/AAAAAAAAAIAK1yM9cD2KPj0KV74AAIA/AAAAAAAAAIAK1yM9o3A9Pj0KV74AAIA/AAAAAAAAAIBcj0I/CtejPQAAAIAAAIC/AAAAAAAAAIBcj0I/o3A9PpDC9bwAAIC/AAAAAAAAAIBcj0I/cD2KPgAAAIAAAIC/AAAAAAAAAIBcj0I/cD2KPj0KV74AAIC/AAAAAAAAAIBcj0I/o3A9Pj0KV74AAIC/AAAAAAAAAIBcj0I/wvUoPpDC9bwAAIC/AAAAAAAAAIBcj0I/CtejPT0KV74AAIC/AAAAAAAAAIBcj0I/wvUoPj0KV74AAIC/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAAAAAAAAAAAAgL+G69E+o3A9Ps3MTL0AAAAAAAAAAAAAgL8Vrsc+cD2KPs3MTL0AAAAAAAAAAAAAgL+G69E+cD2KPs3MTL0AAAAAAAAAAAAAgL8Vrsc+cD2KPs3MTL0AAAAAAAAAAAAAgD+G69E+o3A9Ps3MTL0AAAAAAAAAAAAAgD8Vrsc+o3A9Ps3MTL0AAAAAAAAAAAAAgD+G69E+cD2KPs3MTL0AAAAAAAAAAAAAgD+G69E+o3A9PpDC9bwAAIA/AAAAAAAAAICG69E+cD2KPpDC9bwAAIA/AAAAAAAAAICG69E+o3A9Ps3MTL0AAIA/AAAAAAAAAICG69E+cD2KPs3MTL0AAIA/AAAAAAAAAICG69E+o3A9Ps3MTL0AAIC/AAAAAAAAAICG69E+cD2KPpDC9bwAAIC/AAAAAAAAAICG69E+o3A9PpDC9bwAAIC/AAAAAAAAAICG69E+cD2KPs3MTL0AAIC/AAAAAAAAAIAVrsc+cD2KPpDC9bwAAIC/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAIC/AAAAAAAAAIAVrsc+cD2KPs3MTL0AAIC/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAIC/AAAAAAAAAIAVrsc+cD2KPs3MTL0AAIA/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAIA/AAAAAAAAAIAVrsc+cD2KPpDC9bwAAIA/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAAAAAAAAAAAAgL+G69E+wvUoPs3MTL0AAAAAAAAAAAAAgL8Vrsc+CtejPc3MTL0AAAAAAAAAAAAAgL8Vrsc+wvUoPs3MTL0AAAAAAAAAAAAAgL8Vrsc+CtejPc3MTL0AAAAAAAAAAAAAgD+G69E+wvUoPs3MTL0AAAAAAAAAAAAAgD+G69E+CtejPc3MTL0AAAAAAAAAAAAAgD8Vrsc+wvUoPs3MTL0AAAAAAAAAAAAAgD8Vrsc+wvUoPpDC9bwAAIC/AAAAAAAAAIAVrsc+CtejPZDC9bwAAIC/AAAAAAAAAIAVrsc+wvUoPs3MTL0AAIC/AAAAAAAAAIAVrsc+CtejPc3MTL0AAIC/AAAAAAAAAIAVrsc+wvUoPs3MTL0AAIA/AAAAAAAAAIAVrsc+CtejPZDC9bwAAIA/AAAAAAAAAIAVrsc+wvUoPpDC9bwAAIA/AAAAAAAAAIAVrsc+CtejPc3MTL0AAIA/AAAAAAAAAICG69E+CtejPZDC9bwAAIA/AAAAAAAAAICG69E+wvUoPpDC9bwAAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAIA/AAAAAAAAAICG69E+wvUoPs3MTL0AAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAIC/AAAAAAAAAICG69E+wvUoPpDC9bwAAIC/AAAAAAAAAICG69E+CtejPZDC9bwAAIC/AAAAAAAAAICG69E+wvUoPs3MTL0AAIC/AAAAAAAAAIACAAAAAQAAAAAAAAABAAAAAgAAAAMAAAAGAAAABQAAAAQAAAAFAAAABgAAAAcAAAAKAAAACQAAAAgAAAAJAAAACgAAAAsAAAAOAAAADQAAAAwAAAANAAAADgAAAA8AAAASAAAAEQAAABAAAAARAAAAEgAAABMAAAAWAAAAFQAAABQAAAAVAAAAFgAAABcAAAAXAAAAFgAAABgAAAAYAAAAFgAAABkAAAAaAAAAFQAAABcAAAAVAAAAGgAAABsAAAAbAAAAGgAAABkAAAAbAAAAGQAAABYAAAAeAAAAHQAAABwAAAAdAAAAHgAAAB8AAAAdAAAAHwAAACAAAAAgAAAAHwAAACEAAAAiAAAAHAAAAB0AAAAcAAAAIgAAACMAAAAjAAAAIgAAACEAAAAjAAAAIQAAAB8AAAAmAAAAJQAAACQAAAAlAAAAJgAAACcAAAAqAAAAKQAAACgAAAApAAAAKgAAACsAAAAuAAAALQAAACwAAAAtAAAALgAAAC8AAAAyAAAAMQAAADAAAAAxAAAAMgAAADMAAAA2AAAANQAAADQAAAA1AAAANgAAADcAAAA6AAAAOQAAADgAAAA5AAAAOgAAADsAAAA+AAAAPQAAADwAAAA9AAAAPgAAAD8AAABCAAAAQQAAAEAAAABBAAAAQgAAAEMAAABDAAAAQgAAAEQAAABEAAAAQgAAAEUAAABFAAAAQgAAAEYAAABHAAAAQQAAAEMAAABKAAAASQAAAEgAAABJAAAASgAAAEsAAABLAAAASgAAAEwAAABNAAAATAAAAEoAAABOAAAATAAAAE0AAABMAAAATgAAAE8AAABSAAAAUQAAAFAAAABTAAAAUAAAAFEAAABQAAAAUwAAAFQAAABTAAAAUQAAAFUAAABTAAAAVQAAAFYAAABTAAAAVgAAAFcAAABaAAAAWQAAAFgAAABZAAAAWgAAAFsAAABbAAAAWgAAAFwAAABbAAAAXAAAAF0AAABcAAAAWgAAAF4AAABeAAAAWgAAAF8AAABgAAAAXQAAAFwAAABhAAAAXQAAAGAAAABhAAAAYAAAAF8AAABhAAAAXwAAAFoAAABiAAAAXQAAAGEAAABdAAAAYgAAAGMAAABmAAAAZQAAAGQAAABlAAAAZgAAAGcAAABnAAAAZgAAAGgAAABoAAAAZgAAAGkAAABpAAAAZgAAAGoAAABrAAAAZQAAAGcAAABuAAAAbQAAAGwAAABvAAAAbQAAAG4AAABvAAAAcAAAAG0AAABxAAAAcAAAAG8AAABxAAAAcgAAAHAAAAByAAAAcQAAAHMAAAB2AAAAdQAAAHQAAAB1AAAAdgAAAHcAAAB6AAAAeQAAAHgAAAB5AAAAegAAAHsAAAB+AAAAfQAAAHwAAAB9AAAAfgAAAH8AAACAAAAAfAAAAH0AAACAAAAAgQAAAHwAAACCAAAAgQAAAIAAAACDAAAAgQAAAIIAAACEAAAAgQAAAIMAAACBAAAAhAAAAIUAAACGAAAAhAAAAIMAAACEAAAAhgAAAIcAAACKAAAAiQAAAIgAAACJAAAAigAAAIsAAACOAAAAjQAAAIwAAACNAAAAjgAAAI8AAACQAAAAjAAAAI0AAACQAAAAkQAAAIwAAACSAAAAkQAAAJAAAACTAAAAkQAAAJIAAACUAAAAkQAAAJMAAACRAAAAlAAAAJUAAACTAAAAlgAAAJQAAACWAAAAkwAAAJcAAACaAAAAmQAAAJgAAACbAAAAmAAAAJkAAACZAAAAmgAAAJwAAACaAAAAnQAAAJwAAACcAAAAnQAAAJ4AAACeAAAAnQAAAJ8AAACfAAAAnQAAAKAAAAChAAAAoAAAAJ0AAACgAAAAogAAAJ8AAACjAAAAnwAAAKIAAACmAAAApQAAAKQAAAClAAAApgAAAKcAAAClAAAApwAAAKgAAACpAAAApAAAAKUAAACkAAAAqQAAAKoAAACqAAAAqQAAAKsAAACuAAAArQAAAKwAAACtAAAArgAAAK8AAACtAAAArwAAALAAAACxAAAArAAAAK0AAACsAAAAsQAAALIAAACyAAAAsQAAALMAAAC2AAAAtQAAALQAAAC1AAAAtgAAALcAAAC6AAAAuQAAALgAAAC7AAAAuAAAALkAAAC+AAAAvQAAALwAAAC9AAAAvgAAAL8AAADCAAAAwQAAAMAAAADDAAAAwAAAAMEAAADGAAAAxQAAAMQAAADFAAAAxgAAAMcAAADKAAAAyQAAAMgAAADLAAAAyAAAAMkAAADOAAAAzQAAAMwAAADNAAAAzgAAAM8AAADSAAAA0QAAANAAAADTAAAA0AAAANEAAADWAAAA1QAAANQAAADVAAAA1gAAANcAAADaAAAA2QAAANgAAADbAAAA2AAAANkAAADeAAAA3QAAANwAAADdAAAA3gAAAN8AAADiAAAA4QAAAOAAAADjAAAA4AAAAOEAAAA="}});function T_(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function gd(){let i=new wa;return Promise.all(Object.entries(pd).map(([e,t])=>new Promise(n=>{try{i.parse(T_(t),"",s=>{s.scene.traverse(r=>{if(r.isMesh){r.castShadow=r.receiveShadow=!0;for(let o of[].concat(r.material))o.map&&(o.map.colorSpace=tt),o.roughness=Math.max(o.roughness??1,.55),o.metalness=Math.min(o.metalness??0,.2)}}),Ad.set(e,s),n()},s=>{console.warn("model",e,s),n()})}catch(s){console.warn("model",e,s),n()}})))}function xd(i,{w:e,h:t,d:n,stretch:s=!1,turn:r=0,colors:o}={}){let a=Ad.get(i),c=new nt;if(c.name=i,!a)return c;let l=a.animations.length?ud(a.scene):a.scene.clone(!0);l.rotation.y=r,l.updateMatrixWorld(!0);let h=new xt().setFromObject(l),u=h.getSize(new I),f,p,A;if(s){let m=t?t/u.y:e?e/u.x:n/u.z;f=e?e/u.x:m,p=t?t/u.y:m,A=n?n/u.z:m}else f=p=A=t?t/u.y:e?e/u.x:n?n/u.z:1;let x=new nt;return x.add(l),x.scale.set(f,p,A),x.position.set(-(h.min.x+u.x/2)*f,-h.min.y*p,-(h.min.z+u.z/2)*A),c.add(x),o&&w_(c,o),c.userData.size=new I(u.x*f,u.y*p,u.z*A),c}function w_(i,e){let t=new Map;i.traverse(n=>{n.isMesh&&(n.material=[].concat(n.material).map(s=>{if(!(s.name in e))return s;if(!t.has(s)){let r=s.clone();r.color.set(e[s.name]),t.set(s,r)}return t.get(s)}),n.material.length===1&&(n.material=n.material[0]))})}function yd(i,e,t,n,s=0,r=0){return e.position.set(t,r,n),e.rotation.y=s,i.add(e),e}var Ad,oh=pt(()=>{Pn();hd();dd();md();Ad=new Map});function Dn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;to.copy(e),to[n]=0,to.normalize();let l=.5*o/(o+a),h=1-to.angleTo(i)/c;return Math.sign(to[t])===1?h*l:a/(o+a)+l+l*(1-h)}var to,Yi,_d=pt(()=>{Pn();to=new I;Yi=class extends dn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,c=new I,l=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,A=new I,x=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:A.set(1,0,0),f[d+0]=Dn(A,c,"z","y",r,n),f[d+1]=1-Dn(A,c,"y","z",r,t);break;case 1:A.set(-1,0,0),f[d+0]=1-Dn(A,c,"z","y",r,n),f[d+1]=1-Dn(A,c,"y","z",r,t);break;case 2:A.set(0,1,0),f[d+0]=1-Dn(A,c,"x","z",r,e),f[d+1]=Dn(A,c,"z","x",r,n);break;case 3:A.set(0,-1,0),f[d+0]=1-Dn(A,c,"x","z",r,e),f[d+1]=1-Dn(A,c,"z","x",r,n);break;case 4:A.set(0,0,1),f[d+0]=1-Dn(A,c,"x","y",r,e),f[d+1]=1-Dn(A,c,"y","x",r,t);break;case 5:A.set(0,0,-1),f[d+0]=Dn(A,c,"x","y",r,e),f[d+1]=1-Dn(A,c,"y","x",r,t);break}}}});function Zn(i=1){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function vd(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Nn(i,e=[1,1]){let t=new or(i);return t.colorSpace=tt,t.wrapS=t.wrapT=di,t.repeat.set(...e),t.anisotropy=8,t}function Md(){let[i,e]=vd(128,128);e.font='bold 110px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=12,e.strokeStyle="#1d3557",e.strokeText("Z",64,68),e.fillStyle="#fff3b0",e.fillText("Z",64,68);let t=Nn(i);return t.wrapS=t.wrapT=kt,t}var Ca,Ia=pt(()=>{Pn();Ca=class{constructor(){[this.c,this.g]=vd(256,192),this.texture=Nn(this.c),this.texture.wrapS=this.texture.wrapT=kt,this.t=0,this.flash=0}update(e){let t=this.g,n=this.t+=e,s=256,r=192;t.fillStyle="#10163a",t.fillRect(0,0,s,r),t.fillStyle="#fff";for(let l=0;l<30;l++)t.fillRect((l*53-n*8)%s+(l*53-n*8<0?s:0),l*37%110,2,2);t.fillStyle="#2f855a",t.fillRect(0,150,s,42),t.fillStyle="#8b5a2b";for(let l=-(n*60%32);l<s;l+=32)t.fillRect(l,150,30,6);let o=s-n*60%(s+40);t.fillStyle="#d69e2e",t.fillRect(o,126,24,24),t.fillStyle="#744210",t.fillRect(o+9,133,6,8);let a=o-70,c=a>0&&a<70?Math.sin(a/70*Math.PI)*52:0;t.fillStyle="#e53e3e",t.fillRect(64,122-c,20,10),t.fillStyle="#f6c89f",t.fillRect(66,132-c,16,8),t.fillStyle="#3182ce",t.fillRect(64,140-c,20,10),t.fillStyle="#f6e05e",t.font='bold 14px "Courier New", monospace',t.fillText(`SCORE ${String(Math.floor(n*10)*10).padStart(6,"0")}`,8,18),this.flash>0&&(this.flash-=e,t.fillStyle=`rgba(255,255,255,${Math.min(1,this.flash*2)})`,t.fillRect(0,0,s,r),t.fillStyle="#e53e3e",t.font='bold 48px "Courier New", monospace',t.textAlign="center",t.fillText("HI!",s/2,r/2+16),t.textAlign="left"),t.fillStyle="rgba(0,0,0,0.18)";for(let l=0;l<r;l+=3)t.fillRect(0,l,s,1);this.texture.needsUpdate=!0}}});var Pa,bd=pt(()=>{Pa={"Post 1":{x:-3.2,z:.4,ry:0,gone:!0},"Post 2":{x:.293,z:.4,ry:0},"Post 3":{x:2,z:.4,ry:0,gone:!0},"Window (west)":{x:3.309,z:-3.59,ry:0},"Window (over the hoop)":{x:-3.932,z:-3.566,ry:.0664},Clock:{x:.687,z:-3.57,ry:0},"Play mat":{x:4.395,z:-.755,ry:-1.5782},Couch:{x:1.992,z:-2.42,ry:1.5708},Armchair:{x:2.768,z:-.45,ry:2.5597},Ottoman:{x:3.319,z:-1.158,ry:-.6523},"Basketball hoop":{x:-4.93,z:-3.29,ry:.7854},"Toy house":{x:-4.914,z:-1.7,ry:1.5708},"Red ride-on toy":{x:-3.166,z:-2.017,ry:.6},"Kids' table":{x:4.88,z:2.128,ry:-1.5708},"Braided rug":{x:4.239,z:3.573,ry:.2472},"Totes + pillows":{x:2.1,z:4.64,ry:0},"Bean bag":{x:3.122,z:4.61,ry:0},Fridge:{x:1.2,z:4.36,ry:0},"Black shelves":{x:.554,z:4.434,ry:1.588},"Post 4":{x:-.661,z:3.857,ry:0},"Dining table + chairs":{x:-1.494,z:1.047,ry:-1.5738},"Water cooler":{x:-3.313,z:3.72,ry:0},"Laundry sink":{x:-8.371,z:2.083,ry:4.7146},"Paper towel rack":{x:-8.4,z:2.1,ry:1.5708,gone:!0},Furnace:{x:-5.993,z:2.245,ry:0}}});function _i(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Sd(){let[i,e]=_i(1024,512),t=Zn(4),n=256,s=128;e.fillStyle="#efeadf",e.fillRect(0,0,1024,512);for(let r=0;r<4;r++)for(let o=-1;o<5;o++){let a=o*n+r%2*n/2,c=r*s,l=236+Math.floor(t()*10);e.fillStyle=`rgb(${l},${l-4},${l-14})`,e.fillRect(a+4,c+4,n-8,s-8);for(let h=0;h<60;h++)e.fillStyle=`rgba(150,140,120,${t()*.12})`,e.fillRect(a+t()*n,c+t()*s,3,3)}e.strokeStyle="rgba(160,150,130,0.55)",e.lineWidth=6;for(let r=0;r<=4;r++)e.beginPath(),e.moveTo(0,r*s),e.lineTo(1024,r*s),e.stroke();for(let r=0;r<4;r++)for(let o=0;o<=4;o++){let a=o*n+r%2*n/2;e.beginPath(),e.moveTo(a,r*s),e.lineTo(a,r*s+s),e.stroke()}return Nn(i)}function Ed(){let[i,e]=_i(512,512),t=256;e.fillStyle="#ece6da",e.fillRect(0,0,512,512),e.strokeStyle="rgba(170,160,145,0.28)",e.lineWidth=2;for(let n=0;n<2;n++)for(let s=0;s<2;s++){let r=n*t,o=s*t;e.beginPath();for(let a=0;a<=8;a++){let c=r+a*t/8;e.lineTo(c,o+(a%2?4:-4))}e.stroke(),e.beginPath();for(let a=0;a<=8;a++){let c=o+a*t/8;e.lineTo(r+(a%2?4:-4),c)}e.stroke()}for(let n=0,s=Zn(8);n<900;n++)e.fillStyle=`rgba(120,110,95,${s()*.06})`,e.fillRect(s()*512,s()*512,2,2);return Nn(i)}function Td(){let[i,e]=_i(512,512),t=256;e.fillStyle="#5a4a3a",e.beginPath(),e.arc(t,t,t,0,7),e.fill(),e.fillStyle="#e9e1cf",e.beginPath(),e.arc(t,t,t-16,0,7),e.fill(),e.fillStyle="#2c2a2a",e.beginPath(),e.arc(t,t,110,0,7),e.fill(),e.fillStyle="#e9e1cf",e.font="bold 34px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText("OLD TOWN",t,t-12),e.font="20px Georgia, serif",e.fillText("CLOCK CO.",t,t+24);let n=["#9a4b3a","#4d6a7a","#a88b4a","#6b7a5a"];for(let s=1;s<=12;s++){let r=s/12*Math.PI*2-Math.PI/2,o=t+Math.cos(r)*180,a=t+Math.sin(r)*180;e.fillStyle=n[s%4],e.beginPath(),e.arc(o,a,40,0,7),e.fill(),e.fillStyle="#efe7d6",e.beginPath(),e.arc(o,a,31,0,7),e.fill(),e.fillStyle="#2c2a2a",e.font="bold 36px Georgia, serif",e.fillText(String(s),o,a+2)}return fr(Nn(i))}function wd(){let[i,e]=_i(1024,683),t=1024,n=683,s=Zn(5);e.fillStyle="#7cc46a",e.fillRect(0,0,t,n),e.fillStyle="#bfe6f7",e.fillRect(70,70,t-140,n*.55),["#e53e3e","#f6ad55","#f6e05e","#68d391","#4299e1","#805ad5"].forEach((l,h)=>{e.strokeStyle=l,e.lineWidth=26,e.beginPath(),e.arc(t*.55,n*.62,300-h*26,Math.PI,0),e.stroke()});for(let[l,h]of[[300,180],[760,150],[520,120]]){e.fillStyle="#fff";for(let u of[0,30,60])e.beginPath(),e.arc(l+u,h,26,0,7),e.fill()}for(let l=0;l<30;l++)e.fillStyle=["#f687b3","#f6e05e","#fff"][l%3],e.beginPath(),e.arc(80+s()*(t-160),n*.7+s()*120,9,0,7),e.fill();let r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",o=["#e53e3e","#dd6b20","#d69e2e","#38a169","#3182ce","#805ad5","#d53f8c"];e.font='bold 50px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle";let a=(l,h,u)=>{e.fillStyle=o[u%7],e.fillRect(l,h,66,66),e.fillStyle="#fff",e.fillText(r[u%26],l+33,h+36)},c=0;for(let l=0;l<t;l+=68)a(l,0,c++);for(let l=68;l<n-68;l+=68)a(t-68,l,c++);for(let l=t-68;l>=0;l-=68)a(l,n-68,c++);for(let l=n-136;l>=68;l-=68)a(0,l,c++);return fr(Nn(i))}function Rd(i){let[e,t]=_i(320,400),n=t.createLinearGradient(0,0,0,400);n.addColorStop(0,i?"#d8cfe0":"#d9d2c4"),n.addColorStop(1,i?"#b8aec8":"#a89a86"),t.fillStyle=n,t.fillRect(0,0,320,400),t.fillStyle=i?"#f3d9cf":"#f0d5c2",t.beginPath(),t.ellipse(160,215,105,120,0,0,7),t.fill(),t.fillStyle="#e8b7a8";for(let s of[95,225])t.beginPath(),t.arc(s,250,22,0,7),t.fill();t.strokeStyle="#5a4034",t.lineWidth=5,t.lineCap="round";for(let s of[118,202])t.beginPath(),t.arc(s,205,16,.2,Math.PI-.2),t.stroke();return t.beginPath(),t.arc(160,285,14,.3,Math.PI-.3),t.stroke(),i?(t.fillStyle="#9b7fc8",t.fillRect(55,110,210,34),t.beginPath(),t.ellipse(115,95,70,45,-.4,0,7),t.fill(),t.beginPath(),t.ellipse(205,95,70,45,.4,0,7),t.fill(),t.fillStyle="#7d5fb0",t.beginPath(),t.arc(160,108,26,0,7),t.fill()):(t.fillStyle="#6b5442",t.beginPath(),t.ellipse(160,110,95,30,0,Math.PI,0),t.fill()),t.fillStyle="#f4f1ea",t.fillRect(40,340,240,60),fr(Nn(e))}function Cd(){let[i,e]=_i(256,512),t=Zn(12);e.fillStyle="#f2f1ec",e.fillRect(0,0,256,512);for(let n=0;n<9;n++)e.fillStyle=["#fff","#fefcbf","#e9d8fd"][n%3],e.save(),e.translate(30+t()*190,30+t()*170),e.rotate((t()-.5)*.4),e.fillRect(-28,-34,56,68),e.strokeStyle=["#e53e3e","#3182ce","#38a169"][n%3],e.lineWidth=3,e.beginPath(),e.arc(0,-4,14,0,7),e.stroke(),e.restore();for(let n=0;n<14;n++){let s=30+t()*200,r=40+t()*300,o=["#e53e3e","#f6ad55","#38a169","#805ad5","#d53f8c","#3182ce"][n%6];e.fillStyle=o;for(let a=0;a<6;a++)e.beginPath(),e.arc(s+Math.cos(a)*11,r+Math.sin(a)*11,8,0,7),e.fill();e.fillStyle="#f6e05e",e.beginPath(),e.arc(s,r,7,0,7),e.fill()}return e.fillStyle="#c9c7c0",e.fillRect(226,120,10,160),fr(Nn(i))}function Id(){let[i,e]=_i(256,256);e.fillStyle="#f7f5f0",e.fillRect(0,0,256,256),e.fillStyle="rgba(110,110,120,0.35)";for(let t=0;t<256;t+=32)e.fillRect(0,t,256,3);return Nn(i)}function Pd(){let[i,e]=_i(256,256),t=Zn(30);e.fillStyle="#1b1f2e",e.fillRect(0,0,256,256);for(let n=10;n<250;n+=9){let s=8+Math.floor(t()*4)*10;for(;s<230&&t()>.15;){let r=10+t()*40;e.fillStyle=["#c792ea","#82aaff","#c3e88d","#f78c6c","#d6deeb"][Math.floor(t()*5)],e.fillRect(s,n,r,4),s+=r+6}}return fr(Nn(i))}function Ld(i){let[e,t]=_i(512,128);return t.fillStyle="rgba(29,53,87,0.85)",t.beginPath(),t.roundRect(4,4,504,120,28),t.fill(),t.fillStyle="#fff3b0",t.font="bold 84px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,256,68),fr(Nn(e))}var fr,Dd=pt(()=>{Pn();Ia();fr=i=>(i.wrapS=i.wrapT=kt,i)});function Nd(i){var pe;let e=(b,N={})=>new vn({color:b,roughness:.85,metalness:0,...N}),t=(b,N=2)=>new vn({color:b,emissive:b,emissiveIntensity:N});function n(b,N,U=0,D=0,Y=0,ae=i,{cast:ne=!0,receive:$=!0}={}){let Q=new At(b,N);return Q.position.set(U,D,Y),Q.castShadow=ne,Q.receiveShadow=$,ae.add(Q),Q}let s=(b,N,U,D,Y,ae,ne,$=i,Q)=>n(new dn(b,N,U),D,Y,ae,ne,$,Q),r=(b,N,U,D,Y,ae,ne,$=i,Q)=>s(b,N,U,D,Y,ae+N/2,ne,$,Q),o=Zn(21),a=[],c=[],l=(b,N,U,D,Y)=>c.push({x0:b,x1:N,z0:U,z1:D,...Y?{under:Y}:{}});function h(b,{fly:N=!0,drive:U=!0,under:D}={}){b.updateMatrixWorld(!0);let Y=new xt().setFromObject(b);return Y.isEmpty()||(N&&a.push({x0:Y.min.x,x1:Y.max.x,z0:Y.min.z,z1:Y.max.z,y1:Y.max.y,...D?{under:D}:{}}),U&&l(Y.min.x,Y.max.x,Y.min.z,Y.max.z,D),U&&D&&u(b)),b}function u(b){b.updateMatrixWorld(!0),b.traverse(N=>{if(!N.isMesh)return;let U=new xt().setFromObject(N);U.min.y<.02&&l(U.min.x,U.max.x,U.min.z,U.max.z)})}let f=[],p=new Set,A=(b,N)=>(f.push({id:f.length+1,name:b,at:N}),p.add(N),N);function x(b,N){let U=i.children.slice(N).filter(ne=>!p.has(ne)),D=new xt;for(let ne of U)D.expandByObject(ne);let Y=new nt,ae=D.isEmpty()?new I:D.getCenter(new I);Y.position.set(ae.x,0,ae.z),i.add(Y),Y.updateMatrixWorld(!0);for(let ne of U)Y.attach(ne);return A(b,Y)}let m=(b,N,U=0,D=0)=>{let Y=new nt;return Y.position.set(b,D,N),Y.rotation.y=U,i.add(Y),Y},d=gt-vt,v=cn-Mn,g=(Mn+cn)/2,y=rt+ah,w=Ed();w.repeat.set(d/1.2,v/1.2),n(new Gt(d,v).rotateX(-Math.PI/2),e(16777215,{map:w,roughness:.95}),0,0,g,i,{cast:!1});let R=Sd(),C=b=>{let N=R.clone();return N.repeat.set(b/1.6,y/.8),N.needsUpdate=!0,e(16777215,{map:N,roughness:.9,side:hn})};function G(b,N,U,D){let Y=Math.hypot(U-b,D-N),ae=n(new Gt(Y,y),C(Y),(b+U)/2,y/2,(N+D)/2,i,{cast:!1});return ae.rotation.y=Math.atan2(-(D-N),U-b),ae}G(vt,Mn,gt,Mn),G(gt,Mn,gt,cn),G(vt,dr.z0,vt,Mn),G(vt,cn,vt,dr.z1),G(gt,cn,_t,cn),G(_t,cn,_t,As.z0),G(_t,As.z0,vt,As.z0),l(vt-.05,vt+.05,Mn,dr.z0),l(vt-.05,vt+.05,dr.z1,cn),l(_t,vt+.05,Mn,As.z0);let M=e(10514495,{roughness:.8}),T=e(9068342,{roughness:.9});for(let b=_t+.2;b<gt;b+=.4)s(.045,ah,v-.02,M,b,rt+ah/2,g,i,{cast:!1});n(new Gt(gt-_t,v).rotateX(Math.PI/2),T,(gt+_t)/2,y+.004,g,i,{cast:!1});let F=e(15921386,{roughness:.6}),K=e(6120038,{roughness:.5,metalness:.3});s(gt-_t-.02,rt-Ut-.004,.2,F,(gt+_t)/2,(Ut+rt-.004)/2,ln,i,{cast:!1}),s(gt-_t-.02,.02,.22,e(3815994),(gt+_t)/2,Ut+.006,ln,i,{cast:!1});for(let[b,N]of R_.entries()){let U=i.children.length;n(new Ve(.05,.05,Ut,20),K,N,Ut/2,ln),s(.16,.012,.16,K,N,.006,ln),s(.16,.012,.16,K,N,Ut-.012,ln),l(N-.06,N+.06,ln-.06,ln+.06),x(`Post ${b+1}`,U)}let le=e(12896460,{roughness:.35,metalness:.6});n(new Ve(.09,.09,7.5,18).rotateZ(Math.PI/2),le,-.8,rt-.1,ln-.5,i,{cast:!1}),r(.4,.14,.3,le,-1.7,rt-.16,ln-.75,i,{cast:!1}),r(.36,.02,.26,e(16053488),-1.7,rt-.17,ln-.75,i,{cast:!1}),n(new Ve(.035,.035,v,12).rotateX(Math.PI/2),F,3.6,rt-.05,g,i,{cast:!1});let L=t(16054527,1.6),z=e(15921386,{roughness:.6});function q(b,N,U){let D=m(b,N,U);n(new Gt(.78,.36),L,0,2.05,.02,D,{cast:!1,receive:!1});for(let[ae,ne,$,Q]of[[.88,.05,0,2.25],[.88,.05,0,1.85],[.05,.4,-.42,2.05],[.05,.4,.42,2.05]])s(ae,ne,.06,z,$,Q,.03,D,{cast:!1});s(.9,.03,.18,z,0,1.83,.09,D,{cast:!1});let Y=new yi(14674687,2.5,5,1.6);return Y.position.set(0,1.9,.5),D.add(Y),D}A("Window (west)",q(.8,Mn+.01,0)),A("Window (over the hoop)",q(vt+.01,-2.9,Math.PI/2)),A("Window (over the washer)",q(_t+.01,3.4,Math.PI/2)),i.add(new ya(16774370,10128504,1.3));let Z=new lr(16773340,1.6);Z.position.set(1.5,8,2.5),Z.target.position.set(0,0,0),i.add(Z,Z.target),Object.assign(Z.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:16}),Z.castShadow=!0,Z.shadow.mapSize.set(2048,2048),Z.shadow.bias=-5e-4,Z.shadow.normalBias=.02;let J=e(16052712,{roughness:.4}),j=t(16773584,3);for(let[b,N]of[[-1.2,-1.6],[1.8,-1.2],[-2.2,1.3],[2.6,2.6],[-4,-1],[1.4,4.2]]){n(new Ve(.05,.06,.06,16),J,b,rt-.03,N,i,{cast:!1}),n(new Nt(.045,14,10),j,b,rt-.11,N,i,{cast:!1});let U=new yi(16767392,4,6.5,1.5);U.position.set(b,rt-.2,N),i.add(U)}for(let[b,N]of[[-6.9,1.2],[-6.9,3.7]]){r(1.2,.06,.18,e(14211282),b,rt-.08,N,i,{cast:!1}),r(1.15,.025,.12,t(16317439,2.5),b,rt-.1,N,i,{cast:!1});let U=new yi(15922943,3,6,1.4);U.position.set(b,rt-.25,N),i.add(U)}let ie=A("Clock",m(-1,Mn+.03));n(new Ve(.33,.33,.04,40).rotateX(Math.PI/2),[e(5917242),e(16777215,{map:Td(),roughness:.7}),e(5917242)],0,1.68,0,ie,{cast:!1});let ce=(b,N)=>{let U=new nt;return U.position.set(0,1.68,.03),ie.add(U),s(N,b,.008,e(1710618),0,b/2-.03,0,U,{cast:!1}),U},Ae=ce(.16,.022),X=ce(.24,.014),ee=[4.5,-2.95],me=-Math.PI/4,Se=i.children.length;h(yd(i,xd("tvCabinet",{w:1.35,h:.62,d:.55,stretch:!0,colors:{wood:5911584}}),...ee,me));let ye=new Ca,Le=m(...ee,me,.62);s(1.32,.78,.05,e(1118481,{roughness:.4}),0,.5,0,Le),n(new Gt(1.26,.72),new Yt({map:ye.texture,toneMapped:!1}),0,.5,.027,Le,{cast:!1}),s(.3,.03,.2,e(1118481),0,0,0,Le),s(.06,.12,.04,e(1118481),0,.03,-.02,Le),s(.4,.02,.12,e(15790320),.2,0,.18,Le),h(Le);let ze=new yi(11570431,2.5,4,1.8);ze.position.set(3.9,1.1,-2.35),i.add(ze),x("TV + cabinet",Se),A("Play mat",n(new Gt(2.3,1.55).rotateX(-Math.PI/2),e(16777215,{map:wd(),roughness:1}),2.6,.006,-1.65,i,{cast:!1}));let Pe=(b,N,U,D)=>{let Y=A(b?"Portrait (purple bow)":"Portrait (boy)",m(N,U,D));s(.52,.64,.025,e(16777215,{roughness:.9}),0,1.15,.0125,Y,{cast:!1}),n(new Gt(.5,.62),e(16777215,{map:Rd(b),roughness:.8}),0,1.47,.027,Y,{cast:!1})};Pe(!0,vt+.01,-1.3,Math.PI/2),Pe(!1,gt-.01,-2,-Math.PI/2);function Je(b,N,U,D,Y){let ae=m(N,U,D),ne=e(Y,{roughness:1}),$=e(new we(Y).offsetHSL(0,0,.03),{roughness:1}),Q=b*.66+.4,ue=.95,Ce=(Me,se,P,fe,de,De,Ie)=>n(new Yi(Me,se,P,3,Math.min(.06,se/2-.001)),fe,de,De+se/2,Ie,ae);Ce(Q-.3,.3,ue-.1,ne,0,.1,.02),Ce(Q-.2,.5,.24,ne,0,.3,-ue/2+.12);for(let Me of[-1,1])Ce(.22,.5,ue,ne,Me*(Q/2-.11),.1,0),n(new Ve(.13,.13,ue,16).rotateX(Math.PI/2),ne,Me*(Q/2-.1),.6,0,ae);let qe=(Q-.44)/b;for(let Me=0;Me<b;Me++){let se=-Q/2+.22+qe*(Me+.5);Ce(qe-.02,.16,ue-.3,$,se,.4,.1);let P=Ce(qe-.03,.42,.18,$,se,.52,-ue/2+.3);P.rotation.x=-.12}for(let Me of[-1,1])for(let se of[-1,1])n(new Ve(.03,.025,.1,10),e(3023904),Me*(Q/2-.12),.05,se*(ue/2-.12),ae);return h(ae,{under:.1})}A("Couch",Je(3,-1.9,-2.42,Math.PI/2,8360358)),A("Armchair",Je(1,.6,-.45,Math.PI,9083824));let B=A("Ottoman",m(.6,-1.48));n(new Yi(.82,.3,.6,3,.06),e(9083824,{roughness:1}),0,.27,0,B);for(let[b,N]of[[-.35,-.24],[.35,-.24],[-.35,.24],[.35,.24]])n(new Ve(.025,.02,.12,10),e(3023904),b,.06,N,B);r(.12,.06,.07,e(3711337,{roughness:.4}),.15,.42,-.02,B),h(B,{under:.12});{let b=A("Basketball hoop",m(-4.75,-3.15,Math.PI/4));n(new Ve(.18,.2,.08,20),e(1710618),0,.04,0,b),n(new Ve(.03,.03,1.1,12),e(2845872,{roughness:.4}),0,.6,0,b),r(.5,.36,.03,e(16053488,{roughness:.5}),0,1.05,-.02,b),n(new zi(.11,.012,8,24).rotateX(Math.PI/2),e(15023678),0,1.12,.13,b),h(b)}{let b=A("Toy house",m(-4.6,-1.7,Math.PI/2));r(.6,.35,.42,e(16179294,{roughness:.6}),0,0,0,b),n(new Ve(.01,.38,.22,4,1).rotateY(Math.PI/4),e(3244750,{roughness:.5}),0,.46,0,b).scale.set(1.15,1,.85),r(.12,.2,.02,e(15023678),0,0,.215,b),r(.12,.1,.02,e(10475775),.18,.15,.215,b),h(b)}{let b=A("Toy tote",m(-3.95,-3.2));r(.6,.32,.42,e(14674158,{transparent:!0,opacity:.55,roughness:.2}),0,0,0,b);for(let N=0;N<6;N++)r(.1+o()*.1,.1,.1,e([15023678,3711337,3244750,16179294][N%4]),(o()-.5)*.4,.02,(o()-.5)*.25,b);h(b)}{let b=A("Red ride-on toy",m(-3.6,-2.35,.6));r(.5,.2,.28,e(15023678,{roughness:.4}),0,.06,0,b),r(.18,.14,.22,e(15023678,{roughness:.4}),-.12,.26,0,b);for(let[N,U]of[[-.18,-.15],[.18,-.15],[-.18,.15],[.18,.15]])n(new Ve(.06,.06,.04,14).rotateX(Math.PI/2),e(1710618),N,.06,U,b);h(b)}{let b=A("Speaker cabinet",m(-2.75,-3.33));r(.42,.62,.4,e(2762018,{roughness:.6}),0,0,0,b),n(new Ve(.11,.11,.02,20).rotateX(Math.PI/2),e(7829367,{roughness:.4,metalness:.4}),0,.36,.205,b),r(.26,.08,.14,e(16173326,{roughness:.5}),0,.62,0,b),h(b)}{let b=A("Kids' table",m(4.72,1.1,-Math.PI/2)),N=e(7028514,{roughness:.6});r(.75,.03,.55,N,0,.5,0,b);for(let[U,D]of[[-.33,-.23],[.33,-.23],[-.33,.23],[.33,.23]])r(.04,.5,.04,N,U,0,D,b);for(let U of[-1,1]){let D=m(0,0);b.add(D),D.position.set(U*.58,0,0),D.rotation.y=U*Math.PI/2,r(.28,.03,.28,N,0,.3,0,D);for(let[Y,ae]of[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]])r(.03,.3,.03,N,Y,0,ae,D);r(.28,.3,.03,N,0,.33,.13,D)}h(b,{under:.3})}{let b=A("Standing desk",m(_t+13.05,cn-.38,Math.PI));r(1.55,.035,.72,e(14207400,{roughness:.7}),0,.93,0,b);for(let D of[-.7,.7])r(.06,.93,.06,e(1710618),D,0,0,b),r(.06,.03,.6,e(1710618),D,0,0,b);r(.55,.6,.55,e(1842206,{roughness:.5}),.4,0,.05,b),r(.5,.3,.3,e(12922954,{roughness:.4}),-.3,0,.12,b);let N=new Yt({map:Pd(),toneMapped:!1}),U=(D,Y,ae)=>{let ne=m(0,0,0);b.add(ne),ne.position.set(ae,.965,-.2),r(D,Y,.03,e(1118481,{roughness:.4}),0,.12,0,ne),n(new Gt(D-.03,Y-.03),N,0,.12+Y/2,.016,ne,{cast:!1}),r(.04,.12,.04,e(1118481),0,0,0,ne)};U(.62,.38,-.2),U(.3,.52,.35),r(.32,.015,.22,e(6974064,{metalness:.5,roughness:.4}),-.25,.965,.12,b),n(new Ve(.08,.1,.04,16),e(1710618),-.6,.985,.15,b),n(new Ve(.018,.022,.22,10),e(1710618),-.6,1.1,.15,b),h(b,{under:.93})}{let b=A("Braided rug",n(new Zr(.6,40).rotateX(-Math.PI/2),e(8028057,{roughness:1}),3.8,.005,3.9,i,{cast:!1}));b.scale.set(1.25,1,.85);for(let[N,U]of[[.45,10127994],[.3,5922682],[.15,11575440]])n(new ma(N-.06,N,40).rotateX(-Math.PI/2),e(U,{roughness:1}),0,.001,0,b,{cast:!1})}{let b=A("Totes + pillows",m(2.3,4.68));r(.75,.42,.55,e(2763306,{roughness:.5}),0,0,0,b),r(.75,.04,.57,e(16179294),0,.42,0,b),r(.72,.36,.52,e(10474928,{roughness:.4}),0,.46,0,b),r(.72,.36,.52,e(12106944,{roughness:.4}),0,.82,0,b);for(let U=0;U<3;U++)n(new Yi(.62,.1,.42,3,.04),e(16448250,{roughness:1}),0,1.24+U*.09,(o()-.5)*.05,b);h(b);let N=n(new Nt(.32,20,14),e(16052974,{roughness:1}),3,.22,4.55);N.scale.set(1,.7,1),A("Bean bag",h(N))}{let b=A("Fridge",m(1.2,4.62));n(new Yi(.75,1.72,.7,3,.03),e(15921644,{roughness:.35}),0,.86,0,b),n(new Gt(.72,1.4),e(16777215,{map:Cd(),roughness:.4}),0,.9,-.352,b,{cast:!1}).rotation.y=Math.PI,h(b)}let wt=(b,N,U,D,Y)=>{let ae=m(b,N,U),ne=e(1907997,{roughness:.5,metalness:.3}),$=Zn(Y);for(let Q of[-D/2+.02,D/2-.02])for(let ue of[-.2,.2])r(.025,1.8,.025,ne,Q,0,ue,ae);for(let Q=0;Q<5;Q++){let ue=.08+Q*.42;if(r(D,.025,.44,ne,0,ue,0,ae),Q<4)for(let Ce=-D/2+.16;Ce<D/2-.1;Ce+=.28)$()>.2&&r(.18+$()*.08,.12+$()*.18,.3,e([5231045,15023678,16179294,16777215,8411861,2829099,14510880][Math.floor($()*7)],{roughness:.5}),Ce,ue+.025,0,ae)}return h(ae)};A("Black shelves",wt(-.2,4.75,0,.9,3)),n(new Ve(.05,.05,rt,14),F,-.72,rt/2,4.92);let Re=((pe=Pa["Post 4"])==null?void 0:pe.z)??La;{let b=Re;s(gt-vt-.02,rt-Ut-.004,.2,F,(gt+vt)/2,(Ut+rt-.004)/2,b,i,{cast:!1}),s(gt-vt-.02,.02,.22,e(3815994),(gt+vt)/2,Ut+.006,b,i,{cast:!1})}A("Post 4",n(new Ve(.05,.05,Ut,20),K,.75,Ut/2,La)),l(.69,.81,La-.06,La+.06);let ke=i.children.length;{let b=e(12101260,{roughness:.8}),N=e(10133155,{roughness:.7}),U=Gn,D=U.z1-U.z0,Y=(U.z0+U.z1)/2;for(let ue=0;ue<U.n;ue++){let Ce=U.x-ue*U.run,qe=Ce-U.run,Me=(ue+1)*U.rise;r(U.run,Me,D,N,(qe+Ce)/2,0,Y),r(U.run+.01,.025,D,b,(qe+Ce)/2,Me-.025,Y,i,{cast:!1})}let ae=U.x-U.n*U.run,ne=Math.atan(U.rise/U.run),$=Math.hypot(U.n*U.run,U.n*U.rise),Q=n(new dn($,.05,.05),e(9067051),(U.x+ae)/2,.9+U.n*U.rise/2,U.z0-.03);Q.rotation.z=-ne,r(.1,1,.1,N,U.x-.05,0,U.z0+.05),n(new Gt(.55,.95).rotateX(-Math.PI/2),e(15259848,{roughness:1}),U.x+.35,.006,Y,i,{cast:!1}),l(ae,U.x,U.z0,U.z1);for(let ue=0;ue<U.n&&(ue+1)*U.rise<1;ue++)a.push({x0:U.x-(ue+1)*U.run,x1:U.x-ue*U.run,z0:U.z0,z1:U.z1,y1:(ue+1)*U.rise})}x("Stairs",ke);let _e=i.children.length;{let b={x:-2.3,z:1.35,w:1.75,d:1,h:.76},N=e(11037490,{roughness:.6}),U=m(b.x,b.z);r(b.w,.04,b.d,N,0,b.h-.04,0,U),r(b.w+.06,.012,b.d+.06,e(16250350,{roughness:1}),0,b.h,0,U,{cast:!1});for(let Y of[-.6,.6])r(.08,b.h-.04,.14,N,Y,0,0,U),r(.12,.06,.8,N,Y,0,0,U);r(1.2,.08,.06,N,0,.3,0,U),n(new Ve(.06,.05,.16,16),e(16777215,{roughness:.4}),.2,b.h+.09,.05,U);for(let Y=0;Y<7;Y++)n(new Nt(.05,10,8),e([9417696,13163248,7246792][Y%3]),.2+(o()-.5)*.16,b.h+.22+o()*.06,.05+(o()-.5)*.16,U);a.push({x0:b.x-b.w/2,x1:b.x+b.w/2,z0:b.z-b.d/2,z1:b.z+b.d/2,y1:b.h,under:b.h-.05});for(let Y of[-.6,.6])l(b.x+Y-.06,b.x+Y+.06,b.z-.4,b.z+.4);let D=(Y,ae,ne)=>{let $=m(Y,ae,ne);r(.44,.05,.44,N,0,.42,0,$),r(.4,.03,.4,e(14209732),0,.47,0,$);for(let[ue,Ce]of[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]])r(.04,.42,.04,N,ue,0,Ce,$);for(let ue of[-.19,.19])r(.045,.6,.045,N,ue,.47,-.2,$);for(let ue=-2;ue<=2;ue++)r(.035,.48,.02,N,ue*.07,.5,-.2,$);r(.44,.06,.04,N,0,1.03,-.2,$),$.updateMatrixWorld(!0);let Q=new xt().setFromObject($);a.push({x0:Q.min.x,x1:Q.max.x,z0:Q.min.z,z1:Q.max.z,y1:.5,under:.4}),l(Q.min.x+.04,Q.max.x-.04,Q.min.z+.04,Q.max.z-.04,.4),u($)};D(b.x-.4,b.z-.72,0),D(b.x+.4,b.z-.72,0),D(b.x,b.z+.75,Math.PI),D(b.x+1.15,b.z,-Math.PI/2),D(b.x-1.15,b.z,Math.PI/2)}x("Dining table + chairs",_e);{let b=A("Water cooler",m(-2.2,3.6));r(.55,.32,.4,e(2236962,{roughness:.5}),0,0,0,b),r(.55,.06,.4,e(12922928),0,.32,0,b),r(.5,.28,.38,e(16053492,{roughness:.6}),0,.38,0,b);for(let N=0;N<5;N++)n(new Nt(.09,10,8),e([16179294,12031220,16777215,9132587][N%4],{roughness:1}),(o()-.5)*.35,.72,(o()-.5)*.2,b);n(new Ve(.16,.16,.4,20),e(15895592,{roughness:.4}),0,.96,0,b),n(new Ve(.17,.17,.05,20),e(16053492),0,1.18,0,b),h(b)}let dt=i.children.length;{let b=vt+.06,N=dr.z0,U=dr.curtain,D=U-N,Y=new Gt(D,Ut,40,1),ae=Y.attributes.position;for(let $=0;$<ae.count;$++)ae.setZ($,Math.sin(ae.getX($)*22)*.04);Y.computeVertexNormals();let ne=Id();ne.repeat.set(1,Ut/.5),n(Y,e(16777215,{map:ne,roughness:1,side:hn}),b,Ut/2+.02,(N+U)/2).rotation.y=Math.PI/2,n(new Ve(.012,.012,D+.1,8).rotateX(Math.PI/2),K,b,Ut+.05,(N+U)/2,i,{cast:!1}),l(b-.05,b+.05,N,U),A("Pantry shelves 1",wt(-6.15,As.z0+.25,0,1.8,9));{let $=A("Soap table",m(-7.85,As.z0+.33)),Q=e(2829099,{roughness:.5}),ue=Zn(17);r(1.4,.04,.6,e(15262940,{roughness:.6}),0,.72,0,$);for(let[qe,Me]of[[-.65,-.25],[.65,-.25],[-.65,.25],[.65,.25]])r(.04,.72,.04,Q,qe,0,Me,$);let Ce=.76;for(let qe=-.58;qe<.6;qe+=.17+ue()*.05){let Me=ue(),se=(ue()-.5)*.3,P=[15895592,2060241,3126138,9323693,15921906,14034984][Math.floor(ue()*6)];Me<.45?(r(.14,.26,.1,e(P,{roughness:.35}),qe,Ce,se,$),r(.04,.08,.06,e(P,{roughness:.35}),qe+.05,Ce+.2,se,$),n(new Ve(.025,.025,.04,12),e(16179294,{roughness:.4}),qe-.03,Ce+.28,se,$)):Me<.8?(n(new Ve(.035,.04,.2,14),e(P,{roughness:.3}),qe,Ce+.1,se,$),n(new Ve(.012,.012,.05,8),e(16777215),qe,Ce+.225,se,$)):r(.14,.18,.08,e(16777215,{roughness:.5}),qe,Ce,se,$)}h($,{under:.72})}}x("Curtain",dt);{let b=As,N=b.x1-b.x0,U=b.z1-b.z0;n(new Gt(N,U).rotateX(-Math.PI/2),e(9342860,{roughness:.35,metalness:.1}),(b.x0+b.x1)/2,.004,(b.z0+b.z1)/2,i,{cast:!1});let D=e(15921902,{roughness:.35});for(let[ae,ne]of[[3.05,0],[3.78,1]]){let $=A(ne?"Washer":"Dryer",m(_t+.38,ae,Math.PI/2));n(new Yi(.7,.92,.7,2,.02),D,0,.46,0,$),r(.7,.14,.1,D,0,.92,-.28,$),ne||n(new Zr(.18,24),e(10133670,{roughness:.3}),0,.5,.352,$),h($)}n(new Gt(.8,1.6).rotateX(-Math.PI/2),e(7237230,{roughness:1}),_t+1.2,.008,3.4,i,{cast:!1});{let ae=A("Laundry sink",m(-7.6,cn-.3));r(.6,.35,.5,D,0,.55,0,ae);for(let[ne,$]of[[-.25,-.2],[.25,-.2],[-.25,.2],[.25,.2]])r(.04,.55,.04,e(13619151),ne,0,$,ae);h(ae,{under:.55})}A("Paper towel rack",wt(_t+.3,2.1,Math.PI/2,.6,14));let Y=e(12106944,{roughness:.3,metalness:.6});{let ae=A("Furnace",m(-6.6,2));r(.55,1.02,.72,e(9080208,{roughness:.5}),0,.13,0,ae);for(let[ne,$]of[[-.24,-.32],[.24,-.32],[-.24,.32],[.24,.32]])r(.04,.13,.04,e(3815994),ne,0,$,ae);r(.6,rt-1.155,.8,Y,0,1.15,0,ae),n(new Ve(.06,.06,rt-1,12),F,.15,1+(rt-1)/2,.45,ae),h(ae,{fly:!1,under:.13}),r(4.4,.28,.55,Y,-6.6+2.2,rt-.285,1.6,i,{cast:!1})}}let He=new nt;i.add(He);for(let[b,N,U,D]of[["WEST",(_t+gt)/2,Mn-.7,0],["EAST",(_t+gt)/2,cn+.7,0],["NORTH",gt+.85,g,-Math.PI/2],["SOUTH",_t-.85,g,Math.PI/2]])n(new Gt(1.6,.4),new Yt({map:Ld(b),transparent:!0,toneMapped:!1}),N,0,U,He,{cast:!1,receive:!1}).rotation.set(-Math.PI/2,0,D);let E=new Xe,_=new I;for(let b of f)b.at.updateMatrixWorld(!0),b.home=new xt().setFromObject(b.at).expandByScalar(.03),b.m0=b.at.matrixWorld.clone(),b.boxes=[];for(let b of[...c,...a]){let N=(b.x0+b.x1)/2,U=(b.z0+b.z1)/2,D=null,Y=1/0;for(let ae of f){let ne=ae.home,$=(ne.max.x-ne.min.x)*(ne.max.z-ne.min.z);N>=ne.min.x&&N<=ne.max.x&&U>=ne.min.z&&U<=ne.max.z&&$<Y&&(D=ae,Y=$)}D&&(E.copy(D.m0).invert(),D.boxes.push({b,corners:[[b.x0,b.z0],[b.x1,b.z0],[b.x0,b.z1],[b.x1,b.z1]].map(([ae,ne])=>_.set(ae,0,ne).applyMatrix4(E).clone())}))}function k(b){if(b.at.updateMatrixWorld(!0),b.gone){for(let{b:N}of b.boxes)N.x0=N.x1=N.z0=N.z1=-1e4;return}for(let{b:N,corners:U}of b.boxes){let D=U.map(Y=>_.copy(Y).applyMatrix4(b.at.matrixWorld).clone());N.x0=Math.min(...D.map(Y=>Y.x)),N.x1=Math.max(...D.map(Y=>Y.x)),N.z0=Math.min(...D.map(Y=>Y.z)),N.z1=Math.max(...D.map(Y=>Y.z)),N.pts=[0,1,3,2].map(Y=>[D[Y].x,D[Y].z])}}let re=b=>({x:+b.at.position.x.toFixed(3),z:+b.at.position.z.toFixed(3),ry:+b.at.rotation.y.toFixed(4),...b.gone?{gone:!0}:{}});function te(b,N){b.at.position.x=N.x,b.at.position.z=N.z,b.at.rotation.y=N.ry,b.gone=!!N.gone,b.at.visible=!b.gone,k(b)}for(let b of f)b.start=re(b),Pa[b.name]&&te(b,Pa[b.name]);function oe(b){let N=new Date,U=N.getMinutes()+N.getSeconds()/60,D=N.getHours()%12+U/60;X.rotation.z=-U/60*Math.PI*2,Ae.rotation.z=-D/12*Math.PI*2,ye.update(b),ze.intensity=2.2+Math.sin(performance.now()/90)*.3+ye.flash*5}let ve=new I(ee[0]-.3,1.1,ee[1]+.3);return{things:f,setPose:te,poseOf:re,beam2:Re,room:{x0:vt,x1:gt,z0:Mn,z1:cn,ceil:rt},whole:{x0:_t,x1:gt,z0:Mn,z1:cn},flyBoxes:a,bumpers:c,update:oe,tvGame:ye,tvAt:ve,labels:He}}var vt,gt,Mn,cn,_t,rt,ah,ln,Ut,R_,La,Gn,As,dr,ch=pt(()=>{Pn();_d();oh();Ia();bd();Dd();vt=-5.2,gt=5.2,Mn=-3.6,cn=5,_t=-8.7,rt=2.3,ah=.24,ln=.4,Ut=2.02,R_=[-3.2,-.6,2],La=3.857,Gn={x:-2.43,z0:4,z1:cn-.01,rise:.19,run:.23,n:12},As={x0:_t,x1:vt,z0:-.6,z1:cn},dr={z0:ln,z1:Gn.z0-.05,curtain:1.9}});function bn(i,e,t,n=0){if(!(e>i.x0-n&&e<i.x1+n&&t>i.z0-n&&t<i.z1+n))return!1;if(!i.pts)return!0;let s=i.pts,r=(s[0][0]+s[2][0])/2,o=(s[0][1]+s[2][1])/2;for(let a=0;a<4;a++){let[c,l]=s[a],[h,u]=s[(a+1)%4],f=h-c,p=u-l,A=Math.hypot(f,p)||1;if((Math.sign(f*(o-l)-p*(r-c))||1)*(f*(t-l)-p*(e-c))/A<-n)return!1}return!0}function Fd(i,e,t,n){let s=Un(e,i.x0+n,i.x1-n),r=Un(t,i.z0+n,i.z1-n);if(i.pts){let o=(i.pts[0][0]+i.pts[2][0])/2,a=(i.pts[0][1]+i.pts[2][1])/2;for(let c=0;c<20&&!bn(i,s,r,-n);c++)s+=(o-s)*.15,r+=(a-r)*.15}return[s,r]}function no(i,e,t,n){let s=0;for(let r of i.tops)bn(r,e,t,Oe.radius*.5)&&r.y1<=n+.03&&r.y1>s&&(s=r.y1);return s}function Da(i,e,t,n){let s=0;for(let r of i.tops)bn(r,e,t,Oe.radius)&&r.y1>n+.03&&!Ua(r,n,Oe.height)&&(s=Math.max(s,r.y1));return s}function Na(i,e,t,n){let s=i.walls,r=Oe.radius;if(e<s.x0+r||e>s.x1-r||t<s.z0+r||t>s.z1-r)return!0;if(i.tops.some(o=>bn(o,e,t,r*.5)&&o.y1>=.05&&o.y1<=n+.03))return!1;for(let o of i.blocks){if(!bn(o,e,t,r)||Ua(o,n,Oe.height))continue;let a=(i.shells||i.tops).find(c=>c.x0<=o.x0+.03&&c.x1>=o.x1-.03&&c.z0<=o.z0+.03&&c.z1>=o.z1-.03);if(!(a&&Ud(o)>Ud(a)*.4))return!0}return!1}function C_(i,e,t,n){let s=i.ceiling?i.ceiling(e,t):1/0;for(let r of i.tops)r.under!==void 0&&bn(r,e,t)&&r.under>n+.01&&(s=Math.min(s,r.under));return s-Oe.height}function I_(i,e,t,n){let s=i.blocks.filter(o=>bn(o,e,t,Oe.radius)),r=null;for(let o of i.tops)!bn(o,e,t,Oe.radius)||o.y1<=n+.03||o.under!==void 0&&n<o.under&&(o.under<.25||!s.some(c=>c.x0>=o.x0-.03&&c.x1<=o.x1+.03&&c.z0>=o.z0-.03&&c.z1<=o.z1+.03&&(c.x1-c.x0)*(c.z1-c.z0)<.05))||(!r||o.y1>r.y1)&&(r=o);return r}function Bd(i,e,t,n){let s=-Un(e.y,-1,1),r=Un(e.x,-1,1);i.cling||(i.yaw-=r*Oe.turn*t);let o=-Math.sin(i.yaw),a=-Math.cos(i.yaw),c=Math.cos(i.yaw),l=-Math.sin(i.yaw);i.runT=s>.6&&!i.air&&!i.cling?i.runT+t:0,i.run+=((i.runT>Oe.sprintAfter?1:0)-i.run)*(1-Math.exp(-t*(i.runT>Oe.sprintAfter?4:10)));let h=s*(Oe.walk+(Oe.sprint-Oe.walk)*i.run);if(i.walking=Math.abs(h)/Oe.walk,i.climbing=!1,i.cling)return P_(i,s,r,e.jump,t,n,o,a,c,l);if(e.jump&&!i.air){let A=D_(n,i);if(A){let x=A.y1-i.y+.06,m=Math.sqrt(2*Oe.gravity*x),d=m/Oe.gravity+.12;i.vy=m,i.leap={vx:(A.px-i.x)/d,vz:(A.pz-i.z)/d,t:d},i.yaw=Math.atan2(-(A.px-i.x),-(A.pz-i.z))}else i.vy=Math.sqrt(2*Oe.gravity*Oe.hop);i.air=!0,i.run=i.runT=0}let u=o*h*t,f=a*h*t;if(i.leap&&(u=i.leap.vx*t,f=i.leap.vz*t,i.leap.t-=t,i.leap.t<=0&&(i.leap=null)),u||f){let A=i.x+u,x=i.z+f;Na(n,A,x,i.y)||Da(n,A,x,i.y)>0?!i.air&&s>.2&&(i.cling={t:0},i.run=i.runT=0):(i.x=A,i.z=x)}let p=no(n,i.x,i.z,i.y);if(i.air||i.y>p+1e-4){i.vy-=Oe.gravity*t,i.y+=i.vy*t,i.air=!0;let A=no(n,i.x,i.z,i.y+.05);i.y<=A&&i.vy<=0&&(i.y=A,i.vy=0,i.air=!1,i.leap=null)}else i.y=p,i.vy=0;return io(i,n)}function P_(i,e,t,n,s,r,o,a,c,l){let h=i.x+o*.04,u=i.z+a*.04,f=Na(r,h,u,i.y)||Da(r,h,u,i.y)>0;if(!f&&e>=-.3&&!n){let x=L_(r,h,u,i.y);if(x)return Od(i,x,o,a,r)}if(!f||e<-.3||n)return i.cling=null,i.air=!0,i.vy=n?Math.sqrt(2*Oe.gravity*Oe.hop):0,n&&(i.leap={vx:-o*.5,vz:-a*.5,t:.3}),io(i,r);let p=I_(r,h,u,i.y),A=C_(r,i.x,i.z,i.y);if(e>.2&&(i.climbing=!0,i.y=Math.min(i.y+Oe.climb*e*s,p?Math.max(p.y1,A):A),p&&(i.y>=p.y1-1e-6||i.y>=A-1e-6)))return Od(i,p,o,a,r);if(t){let x=i.x+c*t*Oe.shuffle*s,m=i.z+l*t*Oe.shuffle*s;!Na(r,x,m,i.y)&&!Da(r,x,m,i.y)&&(Na(r,x+o*.04,m+a*.04,i.y)||Da(r,x+o*.04,m+a*.04,i.y))&&(i.x=x,i.z=m,i.climbing=!0)}return i.vy=0,i.air=!1,i.y<=no(r,i.x,i.z,i.y)+1e-4&&e<=.2&&(i.cling=null),io(i,r)}function L_(i,e,t,n){let s=null;for(let r of i.tops)bn(r,e,t,Oe.radius)&&r.y1>n-.03&&r.y1<=n+.03&&!Ua(r,n,Oe.height)&&(!s||r.y1>s.y1)&&(s=r);return s}function Od(i,e,t,n,s){i.y=e.y1,i.cling=null,i.air=!1,i.vy=0;for(let a of[.05,.09,.14]){let c=i.x+t*a,l=i.z+n*a;if(no(s,c,l,i.y)>=e.y1-.01)return i.x=c,i.z=l,io(i,s)}let[r,o]=Fd(e,i.x,i.z,.04);return no(s,r,o,i.y)>=e.y1-.01&&(i.x=r,i.z=o),io(i,s)}function io(i,e){for(let t of e.tops)t.under!==void 0&&bn(t,i.x,i.z)&&i.y<t.under&&i.y+Oe.height>t.under&&(i.y=Math.max(0,t.under-Oe.height),i.vy=Math.min(i.vy,0));for(let t of["x","y","z","yaw","vy","run"])Number.isFinite(i[t])||(i[t]=0);return i}function D_(i,e){let t=null,n=1/0;for(let s of i.tops){if(s.y1<=e.y+.05||s.y1-e.y>Oe.leapMax)continue;let[r,o]=Fd(s,e.x,e.z,.06),a=Math.hypot(r-e.x,o-e.z);a<Oe.leapReach&&a<n&&!(Ua(s,e.y,Oe.height)&&bn(s,e.x,e.z))&&(t={...s,px:r,pz:o},n=a)}return t}function zd(i,e,t,n){if(i.yaw-=(i.pointing?Jn.aim:Jn.turn)*Un(e.x,-1,1)*t,i.yaw-=e.lookX||0,i.pitch=Un(i.pitch-(e.lookY||0)-(i.pointing?Jn.aim*Un(e.y,-1,1)*t:0),-1.3,1.1),i.eye+=((i.crouch?Jn.crouch:Jn.eye)-i.eye)*(1-Math.exp(-t*6)),!i.pointing){let o=-Un(e.y,-1,1)*Jn.walk*(i.crouch?.5:1);i.x+=-Math.sin(i.yaw)*o*t,i.z+=-Math.cos(i.yaw)*o*t}let s=Jn.radius,r=n.walls;for(let o of n.blocks){let a=Un(i.x,o.x0,o.x1),c=Un(i.z,o.z0,o.z1),l=Math.hypot(i.x-a,i.z-c);if(!(l>=s))if(l>1e-6)i.x=a+(i.x-a)/l*s,i.z=c+(i.z-c)/l*s;else{let h=[[o.x0-s-i.x,0],[o.x1+s-i.x,0],[0,o.z0-s-i.z],[0,o.z1+s-i.z]].sort((u,f)=>Math.hypot(...u)-Math.hypot(...f))[0];i.x+=h[0],i.z+=h[1]}}return i.x=Un(i.x,r.x0+s,r.x1-s),i.z=Un(i.z,r.z0+s,r.z1-s),i}function hh(i,e,t,n=1/0,s=.16){let r=[t[0]-i[0],t[1]-i[1],t[2]-i[2]],o=r[0]*e[0]+r[1]*e[1]+r[2]*e[2];return o<=0?!1:Math.hypot(r[0]-e[0]*o,r[1]-e[1]*o,r[2]-e[2]*o)<=s+o*.02&&n>o-.18}var Oe,Jn,Un,Ua,Ud,Oa,lh,uh=pt(()=>{Oe={height:.12,radius:.035,walk:.55,sprint:1.4,sprintAfter:1,turn:2.6,climb:.9,shuffle:.3,gravity:4.5,hop:.14,leapReach:.5,leapMax:1.4},Jn={eye:1.55,crouch:.4,radius:.2,walk:1.2,turn:1.8,aim:.9},Un=(i,e,t)=>Math.max(e,Math.min(t,i));Ua=(i,e,t)=>i.under!==void 0&&e+t<i.under;Ud=i=>(i.x1-i.x0)*(i.z1-i.z0);Oa=(i,e,t=0)=>({x:i,y:0,z:e,yaw:t,vy:0,air:!1,climbing:!1,cling:null,leap:null,walking:0,run:0,runT:0});lh=(i,e,t=0)=>({x:i,z:e,yaw:t,pitch:-.15,eye:Jn.eye,crouch:!1,pointing:!1})});async function H_(){var i;if(so&&Date.now()-Wd<12*36e5)return so;try{let e=new AbortController,t=setTimeout(()=>e.abort(),5e3),n=await fetch(U_,{signal:e.signal});clearTimeout(t);let s=await n.json();if(!((i=s.iceServers)!=null&&i.length))throw new Error("no relay");so=s.iceServers.map(r=>({...r,urls:[].concat(r.urls).filter(o=>!/:53\b/.test(o))})),Wd=Date.now()}catch{return so||O_}return so}var N_,kd,Hd,U_,O_,F_,B_,z_,k_,Gd,Vd,so,Wd,Xd,fh,Fa,qd=pt(()=>{fo();N_="https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js",kd=Sr?"sb-hide-elf-lab-":"sb-hide-elf-",Hd="ABCDEFGHJKMNPQRSTUVWXYZ23456789",U_="https://dogfight-relay.sean-bostic.workers.dev",O_=[{urls:["stun:stun.cloudflare.com:3478","stun:stun.l.google.com:19302"]}],F_=2e3,B_=9e4,z_=5e3,k_=2e4,Gd=null,Vd=()=>Gd||=new Promise((i,e)=>{if(globalThis.Peer){i();return}let t=Object.assign(document.createElement("script"),{src:N_,onload:i,onerror:()=>{Gd=null,e(new Error("offline"))}});document.head.append(t)}),so=null,Wd=0;Xd=(()=>{try{let i=sessionStorage.getItem("hide-elf-net");return i||(i=Math.random().toString(36).slice(2,10),sessionStorage.setItem("hide-elf-net",i)),i}catch{return Math.random().toString(36).slice(2,10)}})(),fh=i=>String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4),Fa=class{constructor(e){this.h=e,this.role=null,this.code="",this.peer=null,this.conns=new Map,this.conn=null,this.token=Xd,this.lastHeard=0,this.status="",document.addEventListener("visibilitychange",()=>{!document.hidden&&this.role&&(this.awake(),this.watch())})}say(e){var t,n;this.status=e,(n=(t=this.h).onStatus)==null||n.call(t,e)}async host(){this.leave(),this.say("Opening a room\u2026"),await Vd();for(let e=0;e<6&&!this.peer;e++){let t=Array.from({length:4},()=>Hd[Math.floor(Math.random()*Hd.length)]).join("");try{this.peer=await this.open(kd+t),this.code=t}catch(n){if(n.type!=="unavailable-id")throw this.say(`Couldn't open a room (${n.type||n.message})`),n}}return this.role="host",this.say(""),this.peer.on("connection",e=>{var n;let t=((n=e.metadata)==null?void 0:n.token)||e.peer;e.on("open",()=>{var r,o,a,c,l;let s=this.conns.get(t);s&&s!==e&&((r=s.removeAllListeners)==null||r.call(s),s.close()),this.conns.set(t,e),(l=(c=this.h).onJoin)==null||l.call(c,t,String(((o=e.metadata)==null?void 0:o.name)||"").slice(0,12),!!((a=e.metadata)!=null&&a.watch))}),e.on("data",s=>{var r,o;this.conns.get(t)===e&&((o=(r=this.h).onMsg)==null||o.call(r,t,s))}),e.on("close",()=>{var s,r;this.conns.get(t)===e&&(this.conns.delete(t),(r=(s=this.h).onLeave)==null||r.call(s,t))}),e.on("error",()=>{})}),this.awake(),this.code}send(e,t){let n=this.conns.get(e);if(n!=null&&n.open)try{n.send(t)}catch{}}broadcast(e){for(let t of this.conns.values())if(t.open)try{t.send(e)}catch{}}kick(e){let t=this.conns.get(e);this.conns.delete(e),t==null||t.close()}async join(e){return e=fh(e),e.length!==4?(this.say("Room codes are 4 letters"),!1):(this.leave(),this.say(`Joining ${e}\u2026`),await Vd(),this.peer=await this.open(),this.role="guest",this.code=e,this.since=Date.now(),this.peer.on("error",t=>{var n,s;t.type==="peer-unavailable"&&(this.everIn?this.retry():(this.say(`No game called ${e}`),this.leave(),(s=(n=this.h).onLost)==null||s.call(n,!1)))}),this.dial(),this.awake(),this.watch(),clearTimeout(this.joinT),this.joinT=setTimeout(()=>{var t,n;if(this.role==="guest"&&!this.everIn){let s=this.code;this.leave(),this.say(`Couldn't reach room ${s}`),(n=(t=this.h).onLost)==null||n.call(t,!1,`Couldn't reach room ${s}`)}},k_),!0)}dial(){if(this.role!=="guest"||!this.peer||this.peer.destroyed)return;if(this.peer.disconnected)try{this.peer.reconnect()}catch{}let e=this.peer.connect(kd+this.code,{reliable:!0,serialization:"json",metadata:{token:Xd,name:this.name||"",watch:!!this.spectate}});this.conn=e,e.dialAt=Date.now(),this.everIn||setTimeout(()=>{this.conn===e&&!e.open&&this.role==="guest"&&(this.conn=null,e.close(),this.dial())},8e3),e.on("open",()=>{this.conn===e&&(this.everIn=!0,this.lastHeard=Date.now(),this.lostAt=0,this.say(""))}),e.on("data",t=>{var n,s,r,o;if(this.conn===e){if(this.lastHeard=Date.now(),(t==null?void 0:t.t)==="bye"){this.leave(),(s=(n=this.h).onLost)==null||s.call(n,!0,"The host ended the game");return}(o=(r=this.h).onMsg)==null||o.call(r,"host",t)}}),e.on("close",()=>{this.conn===e&&this.retry()}),e.on("error",()=>{})}toHost(e){var t;if((t=this.conn)!=null&&t.open)try{this.conn.send(e)}catch{}}retry(){var e,t;if(this.role==="guest"){if(this.lostAt||(this.lostAt=Date.now(),this.say("Reconnecting\u2026")),Date.now()-this.lostAt>B_){this.leave(),(t=(e=this.h).onLost)==null||t.call(e,!0,"Lost the host");return}this.retryT||(this.retryT=setTimeout(()=>{var n;this.retryT=null,this.role==="guest"&&!((n=this.conn)!=null&&n.open)&&this.dial()},F_))}}watch(){clearInterval(this.watchT),this.watchT=setInterval(()=>{var e,t;if(this.role!=="guest"){clearInterval(this.watchT);return}if((e=this.conn)!=null&&e.open&&Date.now()-this.lastHeard>z_){let n=this.conn;this.conn=null,n.close(),this.retry()}else if(!((t=this.conn)!=null&&t.open)&&this.lostAt){if(this.conn&&Date.now()-this.conn.dialAt>6e3){let n=this.conn;this.conn=null,n.close()}this.retry()}},1e3)}async open(e){let t={debug:0,config:{iceServers:await H_()}};return new URLSearchParams(location.search).has("relayonly")&&(t.config.iceTransportPolicy="relay"),new Promise((n,s)=>{let r=e?new Peer(e,t):new Peer(t),o=a=>{r.destroy(),s(a)};r.once("open",()=>{r.off("error",o),r.on("disconnected",()=>setTimeout(()=>{if(!r.destroyed&&r.disconnected)try{r.reconnect()}catch{}},1e3)),n(r)}),r.once("error",o)})}leave(){var t,n,s,r;this.role==="host"&&this.broadcast({t:"bye"}),clearTimeout(this.retryT),this.retryT=null,clearInterval(this.watchT),clearTimeout(this.joinT);let e=this.peer;this.peer=null,this.conn=null,this.conns.clear(),this.role=null,this.code="",this.everIn=!1,this.lostAt=0,e&&setTimeout(()=>e.destroy(),200),(r=(n=(t=this.wake)==null?void 0:t.release)==null?void 0:(s=n.call(t)).catch)==null||r.call(s,()=>{}),this.wake=null}async awake(){try{this.role&&!this.wake&&navigator.wakeLock&&(this.wake=await navigator.wakeLock.request("screen"),this.wake.addEventListener("release",()=>{this.wake=null}))}catch{}}}});function Kd(i){let e={on:!1,host:!1,players:new Map,phase:"lobby",left:0,seeker:null,round:0,firstFound:null,nextSeeker:null,times:{hide:45,seek:60}},t=new Fa({onMsg:d,onJoin:o,onLeave:a,onLost:v,onStatus:()=>i.render()});e.net=t,e.me=t.token;let n=0,s=0,r=()=>e.players.get(t.token);function o(g,y){let w=e.players.get(g);w?(clearTimeout(w.gone),w.gone=null,w.name=y||w.name):(w={id:g,name:y||`Elf ${e.players.size+1}`,role:e.phase==="lobby"?"elf":"wait",found:!1,st:null},e.players.set(g,w)),t.send(g,{t:"hello",phase:e.phase,round:e.round,seeker:e.seeker,times:e.times,order:[...e.players.keys()]}),e.phase!=="lobby"&&w.role!=="wait"&&t.send(g,h()),i.render()}function a(g){let y=e.players.get(g);y&&(clearTimeout(y.gone),y.gone=setTimeout(()=>c(g),V_*1e3))}function c(g){e.players.get(g)&&(e.players.delete(g),i.render(),e.phase!=="lobby"&&e.phase!=="results"&&g===e.seeker?p("elves"):f())}function l(g,y){let w=e.players.get(g);w&&(y.t==="me"?(w.st=y.s,w.at=performance.now()):y.t==="name"?(w.name=String(y.name||"").slice(0,12)||w.name,i.render()):y.t==="got"?u(y.id,g):y.t==="shh"?(t.broadcast({t:"shh",id:g,at:y.at}),i.onShh(g,y.at)):y.t==="leave"&&(t.kick(g),c(g)))}let h=()=>({t:"round",seeker:e.seeker,n:e.round,hide:e.times.hide,seek:e.times.seek,order:[...e.players.keys()],roles:[...e.players.values()].map(g=>[g.id,g.role])});e.startRound=()=>{if(!e.host||e.players.size<2)return!1;let g=[...e.players.keys()],y=e.nextSeeker&&e.players.has(e.nextSeeker)?e.nextSeeker:null;if(!y){let R=g.indexOf(e.seeker);y=g[(R+1)%g.length]}e.seeker=y,e.round++,e.firstFound=null,e.nextSeeker=null;for(let R of e.players.values())R.role=R.id===y?"seeker":"elf",R.found=!1;e.phase="hide",e.left=e.times.hide;let w=h();return t.broadcast(w),m(w),!0};function u(g,y){let w=e.players.get(g);if(!e.host||e.phase!=="seek"||y!==e.seeker||!w||w.role!=="elf"||w.found)return;w.found=!0;let R=!e.firstFound;R&&(e.firstFound=g),t.broadcast({t:"found",id:g,by:y,first:R}),i.onFound(g,y,R),f()}function f(){if(!e.host||e.phase!=="seek")return;let g=[...e.players.values()].filter(y=>y.role==="elf");g.length&&g.every(y=>y.found)&&p("seeker")}function p(g){e.phase="results",s=G_,e.nextSeeker=e.firstFound;let y={t:"end",winner:g,found:[...e.players.values()].filter(w=>w.found).map(w=>w.id),firstFound:e.firstFound,next:e.firstFound||null};t.broadcast(y),i.onEnd(y)}function A(g){e.phase==="hide"||e.phase==="seek"?(e.left-=g,e.left<=0&&(e.phase==="hide"?(e.phase="seek",e.left=e.times.seek,t.broadcast({t:"phase",phase:"seek"}),i.onPhase("seek")):p("elves"))):e.phase==="results"&&(s-=g)<=0&&(e.startRound()||(e.phase="lobby",t.broadcast({t:"phase",phase:"lobby"}),i.onPhase("lobby")));let y=r();y&&(y.st=i.myState(),y.at=performance.now()),!((n+=g)<Yd)&&(n=0,t.conns.size&&t.broadcast({t:"s",ph:e.phase,left:dh(e.left),P:[...e.players.values()].map(w=>[w.id,w.name,w.role,w.found?1:0,w.st])}))}function x(g){if(g.t==="hello")e.phase=g.phase,e.round=g.round,e.seeker=g.seeker,e.times=g.times,i.render();else if(g.t==="round")m(g);else if(g.t==="phase")e.phase=g.phase,i.onPhase(g.phase);else if(g.t==="found"){let y=e.players.get(g.id);y&&(y.found=!0),i.onFound(g.id,g.by,g.first)}else if(g.t==="shh")i.onShh(g.id,g.at);else if(g.t==="end")e.phase="results",i.onEnd(g);else if(g.t==="s"){e.phase=g.ph,e.left=g.left;let y=performance.now(),w=new Set;for(let[R,C,G,M,T]of g.P){w.add(R);let F=e.players.get(R);F||(F={id:R},e.players.set(R,F)),Object.assign(F,{name:C,role:G,found:!!M}),R!==t.token&&T&&(F.prev=F.cur,F.cur={st:T,at:y})}for(let R of[...e.players.keys()])w.has(R)||e.players.delete(R);i.render()}}function m(g){e.phase="hide",e.round=g.n,e.seeker=g.seeker,e.times={hide:g.hide,seek:g.seek},e.left=g.hide,e.firstFound=null;for(let[y,w]of g.roles){let R=e.players.get(y);R||(R={id:y},e.players.set(y,R)),R.role=w,R.found=!1}i.onRound({seeker:g.seeker,n:g.n,hide:g.hide,seek:g.seek,order:g.order})}function d(g,y){e.host?l(g,y):x(y)}function v(g,y){!e.on||e.host||(e.on=!1,e.players.clear(),i.onLost(y||"Lost the host"))}return e.update=g=>{if(!e.on)return;if(e.host){A(g);return}if((e.phase==="hide"||e.phase==="seek")&&(e.left-=g),(n+=g)<Yd)return;n=0;let y=i.myState();y&&t.toHost({t:"me",s:y.map(dh)})},e.others=()=>{let g=performance.now()-120,y=[];for(let w of e.players.values()){if(w.id===t.token)continue;let R=null;if(e.host)R=w.st;else if(w.cur){let C=w.prev||w.cur,G=w.cur,M=G.at>C.at?Math.max(0,Math.min(1,(g-C.at)/(G.at-C.at))):1;R=C.st&&G.st&&C.st[0]===G.st[0]?G.st.map((T,F)=>typeof T=="number"&&F>0&&F<5?C.st[F]+(T-C.st[F])*M:T):G.st}R&&y.push({id:w.id,name:w.name,role:w.role,found:w.found,st:R})}return y},e.myRole=()=>{var g;return((g=r())==null?void 0:g.role)||(e.seeker===t.token?"seeker":"elf")},e.name=g=>{var y;return((y=e.players.get(g))==null?void 0:y.name)||"An elf"},e.sendFound=g=>{e.host?u(g,t.token):t.toHost({t:"got",id:g})},e.sendShh=g=>{let y=g.map(dh);e.host?t.broadcast({t:"shh",id:t.token,at:y}):t.toHost({t:"shh",at:y})},e.setName=g=>{t.name=g;let y=r();y&&(y.name=g||y.name),e.on&&!e.host&&t.toHost({t:"name",name:g}),i.render()},e.hostGame=async(g,y)=>{e.leave(),t.name=g,e.times=y;try{await t.host()}catch{return i.render(),null}return e.on=!0,e.host=!0,e.phase="lobby",e.round=0,e.seeker=null,e.players.set(t.token,{id:t.token,name:g||"Host",role:"elf",found:!1,st:null}),i.render(),t.code},e.join=async(g,y)=>{e.leave(),t.name=y;let w=!1;try{w=await t.join(fh(g))}catch{t.say("Couldn't get online")}return w&&(e.on=!0,e.host=!1,e.phase="lobby",e.players.set(t.token,{id:t.token,name:y||"Me",role:"elf"})),i.render(),w},e.leave=()=>{e.on&&!e.host&&t.toHost({t:"leave"});for(let g of e.players.values())clearTimeout(g.gone);e.on=e.host=!1,e.players.clear(),e.phase="lobby",e.round=0,e.seeker=null,t.leave(),i.render()},e.code=()=>t.code,e.status=()=>t.status,e}var Yd,G_,V_,dh,jd=pt(()=>{qd();Yd=1/12,G_=7,V_=15,dh=i=>typeof i=="number"?Math.round(i*1e3)/1e3:i});function Zd(){let i=new nt,e=new nt;i.add(e);let t=(f,p=.7)=>new vn({color:f,roughness:p}),n=t(3100550),s=t(12653087),r=t(15976869),o=t(4860951),a=t(2236962),c=(f,p,A,x,m,d=e)=>{let v=new At(f,p);return v.position.set(A,x,m),v.castShadow=!0,d.add(v),v};for(let f of[-.1,.1])c(new Ve(.065,.06,.82,12),n,f,.43,0),c(new dn(.11,.06,.24),a,f,.03,-.04);c(new Ve(.2,.17,.6,16),s,0,1.13,0),c(new Ve(.05,.06,.08,10),r,0,1.46,0),c(new Nt(.11,18,14),r,0,1.58,0).scale.set(1,1.15,1),c(new Nt(.115,18,10,0,Math.PI*2,0,Math.PI/2),o,0,1.6,.01).scale.set(1,.9,1.05);let u=[-1,1].map(f=>{let p=new nt;return p.position.set(f*.23,1.38,0),e.add(p),c(new Ve(.045,.04,.58,10),s,0,-.29,0,p),c(new Nt(.045,10,8),r,0,-.6,0,p),{sh:p,side:f}});return i.userData={body:e,arms:u},i}function Jd(i,e,{counting:t=!1,crouch:n=!1,walking:s=0}={}){let{body:r,arms:o}=i.userData;r.position.y=n?-.55:0,r.scale.y=1;for(let{sh:a,side:c}of o)if(t)a.rotation.set(-2.55,0,-c*.55);else{let l=Math.sin(e*6)*.4*s*c;a.rotation.set(l,0,c*.08)}r.rotation.z=t?Math.sin(e*1.3)*.03:0}var $d=pt(()=>{Pn()});function ph(){let i=new nt,e=new nt;i.add(e);let t=(p,A=.6)=>new vn({color:p,roughness:A}),n=t(14034984,.5),s=t(2853438),r=t(16316922,.8),o=t(15976869,.7),a=t(1710618,.4),c=(p,A,x,m,d,v=e,g=0,y=0)=>{let w=new At(p,A);return w.position.set(x,m,d),w.rotation.set(g,0,y),w.castShadow=!0,v.add(w),w},l=Oe.height/.12,h=[-1,1].map(p=>{let A=new nt;return A.position.set(p*.009,.034,0),e.add(A),c(new Ve(.0065,.006,.03,10),s,0,-.016,0,A),c(new Nt(.0085,10,8),n,0,-.031,-.004,A).scale.set(1,.6,1.5),A});c(new Ve(.016,.019,.034,16),n,0,.05,0),c(new Ve(.0195,.0195,.005,16),a,0,.036,0),c(new dn(.008,.007,.004),t(16765503,.3),0,.036,-.019),c(new zi(.0145,.0045,8,20),r,0,.067,0,e,Math.PI/2);let u=[-1,1].map(p=>{let A=new nt;return A.position.set(p*.019,.063,0),e.add(A),c(new Ve(.005,.0055,.026,8),n,0,-.013,0,A),c(new Nt(.0055,8,6),r,0,-.027,0,A),A.rotation.z=p*.25,A});c(new Nt(.017,16,12),o,0,.083,0);for(let p of[-.006,.006])c(new Nt(.0022,8,6),a,p,.086,-.0155);for(let p of[-.009,.009])c(new Nt(.003,8,6),t(15764620),p,.079,-.013);c(new Nt(.0035,8,6),t(15247496),0,.081,-.017),c(new Ve(.0175,.0175,.005,16),r,0,.096,0);let f=c(new ar(.0165,.034,16),n,.002,.113,.002,e,.25,-.2);return c(new Nt(.0055,10,8),r,.006,.13,.006),i.scale.setScalar(l),i.userData.parts={legs:h,arms:u,body:e},i}function mh(i,e,{walking:t=0,run:n=0,climbing:s=!1,hanging:r=!1,air:o=!1,sit:a=0,asleep:c=!1,laugh:l=!1}={}){let{legs:h,arms:u,body:f}=i.userData.parts;if(f.rotation.x=0,f.position.set(0,0,0),l){h[0].rotation.x=h[1].rotation.x=0,u[0].rotation.x=u[1].rotation.x=-.7+Math.sin(e*22)*.15,f.rotation.x=.25+Math.sin(e*22)*.05,f.position.y=Math.abs(Math.sin(e*11))*.006;return}if(a>0){let d=a*a*(3-2*a),v=(g,y)=>g+(y-g)*d;h[0].rotation.x=v(h[0].rotation.x*0,1.45),h[1].rotation.x=v(0,1.45),u[0].rotation.x=u[1].rotation.x=v(0,.9),f.position.y=v(0,-.028),f.position.z=v(0,.004),f.rotation.x=c?.12+Math.sin(e*1.3)*.04:0;return}let p=14+10*n,A=.7+.35*n,x=Math.sin(e*p),m=s?Math.sin(e*12)*.6:r?.15:Math.min(t,1)*x*A;if(h[0].rotation.x=m,h[1].rotation.x=-m,s||r){let d=s?Math.sin(e*12)*.5:0;u[0].rotation.x=-2.6+d,u[1].rotation.x=-2.6-d}else o?u[0].rotation.x=u[1].rotation.x=-1.6:(u[0].rotation.x=m*(.6+.9*n),u[1].rotation.x=-m*(.6+.9*n));f.rotation.x=-.35*n,t&&!o&&!s&&!r&&(f.position.y=Math.abs(x)*(.003+.004*n))}var Qd=pt(()=>{Pn();uh()});function tp(i){let e=[...i.flyBoxes],t=new Map;for(let c of i.things){let l=c.boxes.filter(({b:f})=>i.flyBoxes.includes(f));if(c.gone||l.length!==1||c.name==="Stairs")continue;let h=l[0].b,u=W_(c.at,h.under);u.length&&t.set(h,u)}e.splice(0,e.length,...e.flatMap(c=>t.get(c)||[c]));let n=rt-.004;e.push({x0:_t,x1:gt,z0:ln-.1,z1:ln+.1,y1:n,under:Ut,name:"beam"}),e.push({x0:vt,x1:gt,z0:i.beam2-.1,z1:i.beam2+.1,y1:n,under:Ut,name:"beam"});for(let c of i.things)if(!c.gone&&/^Window/.test(c.name)){c.at.updateMatrixWorld(!0);let l=[[-.45,0],[.45,0],[-.45,.18],[.45,.18]].map(([h,u])=>new I(h,0,u).applyMatrix4(c.at.matrixWorld));e.push({x0:Math.min(...l.map(h=>h.x)),x1:Math.max(...l.map(h=>h.x)),z0:Math.min(...l.map(h=>h.z)),z1:Math.max(...l.map(h=>h.z)),y1:1.845,under:1.83,name:"sill"})}let s=i.things.find(c=>c.name==="Stairs"),r=s?s.at.position.x-s.start.x:0,o=s?s.at.position.z-s.start.z:0;if(!(s!=null&&s.gone))for(let c=0;c<Gn.n;c++)e.push({x0:Gn.x-(c+1)*Gn.run+r,x1:Gn.x-c*Gn.run+r,z0:Gn.z0+o,z1:Gn.z1+o,y1:(c+1)*Gn.rise,name:"stairs"});let a=(c,l)=>Math.abs(l-ln)<.14||Math.abs(l-i.beam2)<.14&&c>vt?Ut:rt;return{walls:i.whole,tops:e,shells:i.flyBoxes,blocks:i.bumpers,ceiling:a}}function W_(i,e){i.updateMatrixWorld(!0);let t=[];return i.traverse(n=>{if(!n.isMesh)return;for(let o=n;o;o=o.parent)if(!o.visible)return;let s=new xt().setFromObject(n,!0);if(s.isEmpty()||s.max.x-s.min.x<.03&&s.max.z-s.min.z<.03||e!==void 0&&s.min.y<e-.01)return;let r={x0:s.min.x,x1:s.max.x,z0:s.min.z,z1:s.max.z,y1:s.max.y,...e!==void 0?{under:e}:{}};if(ep.set(0,1,0).transformDirection(n.matrixWorld),ep.y>.999){n.geometry.boundingBox||n.geometry.computeBoundingBox();let o=n.geometry.boundingBox;r.pts=[[o.min.x,o.min.z],[o.max.x,o.min.z],[o.max.x,o.max.z],[o.min.x,o.max.z]].map(([a,c])=>(Ah.set(a,o.min.y,c).applyMatrix4(n.matrixWorld),[Ah.x,Ah.z]))}t.push(r)}),t}var Ah,ep,np=pt(()=>{Pn();ch();Ah=new I,ep=new I});var Ba,gh,za,ip=pt(()=>{Ba=[.09,.135],gh=[.82,1.02],za=class{constructor(e){this.img=e,this.walkT=0,this.lag=0,this.aim=0,this.kick=0,this.lastYaw=null}update(e,t,n,s,r=innerWidth/2,o=innerHeight/2){this.walkT+=e*(6+4*t)*(t>.05?1:0);let a=this.lastYaw===null?0:Math.atan2(Math.sin(n-this.lastYaw),Math.cos(n-this.lastYaw))/Math.max(e,.001);this.lastYaw=n,this.lag+=(Math.max(-2,Math.min(2,a))*.04-this.lag)*(1-Math.exp(-e*8)),this.aim+=((s?1:0)-this.aim)*(1-Math.exp(-e*9)),this.kick=Math.max(0,this.kick-e*5);let c=this.aim,l=t*(1-c*.7),h=innerWidth,u=innerHeight,f=u*(gh[0]+(gh[1]-gh[0])*c),p=f*(this.img.naturalWidth/this.img.naturalHeight||.73),A=h*.8,x=u*.7,m=r+u*.015,d=o+u*.08,v=A+(m-A)*c+Math.cos(this.walkT)*u*.012*l+this.lag*u*.25,g=x+(d-x)*c+Math.abs(Math.sin(this.walkT))*u*.02*l-this.kick*u*.03,y=-18-10*c-this.kick*9+Math.sin(this.walkT)*2*l;Object.assign(this.img.style,{width:`${p}px`,height:`${f}px`,left:`${v-p*Ba[0]}px`,top:`${g-f*Ba[1]}px`,transformOrigin:`${p*Ba[0]}px ${f*Ba[1]}px`,transform:`rotate(${y}deg)`})}show(e){this.img.style.display=e?"block":"none",e||(this.lastYaw=null)}bang(){this.kick=1}}});function sp(i,e,t){let n=Math.hypot(i,e);if(!n)return[0,0];let s=Math.min(n,t)/n/t;return[i*s,e*s]}var rp=pt(()=>{});var xh,X_,q_,ro,pr,Y_,op,K_,ka,ap=pt(()=>{xh={12:[0,-1],13:[0,1],14:[-1,0],15:[1,0]},X_=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],q_=i=>Math.abs(i)<.18?0:(i-Math.sign(i)*.18)/(1-.18),ro=i=>Math.max(-1,Math.min(1,i)),pr=i=>Number.isFinite(i)?i:0,Y_=i=>Math.abs(i)<.3?i:0,op=(i,e)=>{let t=i-e;return q_(ro(t/(t>0?1-e:1+e)))},K_=i=>Math.abs(i)>1.05?[0,0]:X_[Math.round((i+1)*3.5)&7],ka=class{constructor({extraPads:e=()=>[]}={}){this.extraPads=e,this.keys={},this.keyEvents=[],this.state=new Map,this.t=0,addEventListener("keydown",n=>{if(this.keys[n.code]=!0,n.repeat)return;let s={Space:"drop",Enter:"drop",KeyF:"toggle",KeyP:"parent",KeyM:"music",Escape:"escape"};s[n.code]&&(this.keyEvents.push({type:s[n.code],pad:-1}),n.preventDefault())}),addEventListener("keyup",n=>{this.keys[n.code]=!1}),addEventListener("blur",()=>{this.keys={}});let t=n=>{n.gamepad&&this.state.delete(n.gamepad.index)};addEventListener("gamepadconnected",t),addEventListener("gamepaddisconnected",t)}padState(e){let t=this.state.get(e.index);if(!t||t.id!==e.id){let n=[pr(e.axes[0]),pr(e.axes[1])];t={id:e.id,rest:n.map(Y_),anchor:n,still:0,hatAxis:-1,btn:[],hold:null},this.state.set(e.index,t)}return t}poll(e,{holdToggle:t,toggleButton:n=1}){this.t+=e;let s=this.keyEvents.splice(0),r=[...navigator.getGamepads?navigator.getGamepads():[],...this.extraPads()],o=[],a=new Set,c=0;for(let u of r){if(!u||!u.connected)continue;a.add(u.index);let f=this.padState(u),p=[pr(u.axes[0]),pr(u.axes[1])];Math.abs(p[0]-f.anchor[0])<.03&&Math.abs(p[1]-f.anchor[1])<.03?f.still+=e:(f.still=0,f.anchor=p),f.still>=1.5&&p.forEach((d,v)=>{Math.abs(d)<.3&&(f.rest[v]=d)}),f.hatAxis<0&&(f.hatAxis=u.axes.findIndex((d,v)=>v>=4&&Math.abs(d)>1.05));let[A,x]=f.hatAxis>=0?K_(pr(u.axes[f.hatAxis])):[0,0],m=[];u.buttons.forEach((d,v)=>{let g=!!d&&(d.pressed||d.value>.5),y=f.btn[v]||(f.btn[v]={on:!1,t:-1/0}),w=!1,R=!1;if(g!==y.on&&this.t-y.t>=.12&&(y.on=g,y.t=this.t,w=g,R=!g),y.on&&m.push(v),u.mapping==="standard"&&xh[v]){y.on&&(A+=xh[v][0],x+=xh[v][1]);return}t&&v===n?(w&&(f.hold=0),y.on&&f.hold!==null&&(f.hold+=e,c=Math.max(c,f.hold/1),f.hold>=1&&(f.hold=null,s.push({type:"toggle",pad:u.index}))),R&&f.hold!==null&&(f.hold=null,s.push({type:"drop",pad:u.index}))):w&&s.push({type:"drop",pad:u.index})}),t||(f.hold=null),o.push({index:u.index,id:u.id,pressed:m,axes:[...u.axes.slice(0,4)].map(pr),x:ro(op(p[0],f.rest[0])+A),y:ro(op(p[1],f.rest[1])+x)})}for(let u of this.state.keys())a.has(u)||this.state.delete(u);o.sort((u,f)=>u.index-f.index);let l=this.keys,h={x:ro((l.ArrowRight||l.KeyD?1:0)-(l.ArrowLeft||l.KeyA?1:0)),y:ro((l.ArrowDown?1:0)-(l.ArrowUp||l.KeyW?1:0))};return{pads:o,kb:h,events:s,holdProgress:c}}}});function cp(){addEventListener("keydown",i=>{i.code==="Escape"&&(i.preventDefault(),i.stopImmediatePropagation(),window.close(),setTimeout(()=>{let e=document.getElementById("quit-hint");e||(e=document.createElement("div"),e.id="quit-hint",e.textContent="Press \u2318Q to quit",e.style.cssText="position:fixed;left:50%;top:40%;transform:translateX(-50%);z-index:99;padding:16px 28px;background:#000c;color:#fff;font:bold 32px system-ui,sans-serif;border-radius:14px;pointer-events:none;transition:opacity .4s",document.body.appendChild(e)),e.style.opacity="1",clearTimeout(e.hideTimer),e.hideTimer=setTimeout(()=>{e.style.opacity="0"},2500)},400))},!0)}var lp=pt(()=>{});function _h(){try{if(!Ot){Ot=new(window.AudioContext||window.webkitAudioContext),it=Ot.createGain(),it.gain.value=up?1:0,it.connect(Ot.destination),yh=Ot.createBuffer(1,Ot.sampleRate,Ot.sampleRate);let i=yh.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1}Ot.state==="suspended"&&Ot.resume()}catch{Ot=null}return Ot}function ft(i,e,t,n,s,r){let o=Ot.createGain();return o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(t,i+n),o.gain.setValueAtTime(t,i+n+s),o.gain.exponentialRampToValueAtTime(1e-4,i+n+s+r),o.connect(e),o}function Kt(i,e,t,n,s){let r=Ot.createOscillator();if(r.type=i,typeof e=="number")r.frequency.setValueAtTime(e,t);else{r.frequency.setValueAtTime(e[0][1],t);for(let[o,a]of e.slice(1))r.frequency.linearRampToValueAtTime(a,t+o)}return r.connect(s),r.start(t),r.stop(t+n+.05),r}function jt(i,e,t,n=1){let s=Ot.createBiquadFilter();return s.type=i,s.frequency.value=e,s.Q.value=n,s.connect(t),s}function vi(i,e,t){let n=Ot.createBufferSource();return n.buffer=yh,n.loop=!0,n.connect(t),n.start(i,Math.random()*.5),n.stop(i+e+.05),n}function hp(i,e,t,n,s){let r=Ot.createOscillator(),o=Ot.createGain();r.frequency.value=n,o.gain.value=s,r.connect(o).connect(i.frequency),r.start(e),r.stop(e+t+.05)}function On(i){if(fp())try{j_[i](Ot.currentTime+.005)}catch{}}function vh(i=1){if(!(!fp()||i<=.02))try{let e=Ot.currentTime+.01,t=Math.min(1,i);vi(e,1,jt("bandpass",3400,ft(e,it,.5*t,.06,.62,.3),1.4)),vi(e,1,jt("highpass",6e3,ft(e,it,.12*t,.06,.62,.3)))}catch{}}var Ot,it,yh,up,fp,lM,j_,dp=pt(()=>{Ot=null,it=null,yh=null,up=!0;fp=()=>up?_h():null;lM=(()=>{let i=new Float32Array(1024);for(let e=0;e<1024;e++){let t=e/511.5-1;i[e]=Math.tanh(2.2*t)/Math.tanh(2.2)}return i})(),j_={moo(i){let e=ft(i,jt("lowpass",650,it,3),.35,.12,.6,.3),t=Kt("sawtooth",[[0,150],[.25,185],[.75,165],[1,115]],i,1.05,e);hp(t,i,1,5,3)},oink(i){for(let e of[0,.17]){let t=ft(i+e,jt("lowpass",1100,it,4),.3,.01,.06,.06);Kt("square",[[0,240],[.1,170]],i+e,.13,t),vi(i+e,.1,jt("bandpass",700,ft(i+e,it,.1,.01,.05,.04),2))}},baa(i){let e=ft(i,jt("bandpass",1300,it,1.2),.5,.05,.45,.2),t=Kt("sawtooth",[[0,470],[.5,430],[.7,380]],i,.72,e);hp(t,i,.7,9,22)},cluck(i){for(let e of[0,.11,.2,.36]){let t=ft(i+e,jt("bandpass",1400,it,2),.4,.005,.03,.04);Kt("triangle",[[0,1e3],[.06,620]],i+e,.08,t)}},swoosh(i){let e=jt("bandpass",400,ft(i,it,.25,.15,.1,.35),1.5);e.frequency.setValueAtTime(300,i),e.frequency.exponentialRampToValueAtTime(3500,i+.45),vi(i,.65,e),Kt("sine",[[0,300],[.4,900]],i,.45,ft(i,it,.08,.05,.2,.15))},chime(i){[784,988,1319,1568].forEach((e,t)=>Kt("sine",e,i+t*.07,.5,ft(i+t*.07,it,.15,.005,.05,.4)))},bell(i){for(let[e,t]of[[660,.18],[1822,.06],[2640,.03]])Kt("sine",e,i,1.4,ft(i,it,t,.003,0,1.3))},boing(i){Kt("sine",[[0,180],[.08,420],[.3,260]],i,.32,ft(i,it,.18,.005,.1,.2))},click(i){for(let e of[0,.07])vi(i+e,.04,jt("highpass",2500,ft(i+e,it,.2,.002,.01,.03)));Kt("square",300,i,.05,ft(i,jt("lowpass",800,it),.08,.002,.02,.03))},yay(i){[[523,0],[659,.12],[784,.24],[1047,.38],[784,.56],[1047,.68]].forEach(([e,t])=>{let n=ft(i+t,it,t>.5?.14:.1,.01,t>.6?.3:.06,.2);Kt("triangle",e,i+t,.6,n),Kt("square",e/2,i+t,.3,ft(i+t,jt("lowpass",900,it),.03,.01,.05,.1))})},clunk(i){Kt("square",[[0,160],[.06,90]],i,.1,ft(i,jt("lowpass",700,it),.22,.003,.03,.08)),vi(i,.06,jt("bandpass",1800,ft(i,it,.12,.002,.02,.05),2))},pop(i){Kt("sine",[[0,300],[.08,900],[.16,700]],i,.2,ft(i,it,.18,.005,.06,.12)),[1319,1568].forEach((e,t)=>Kt("sine",e,i+.1+t*.07,.3,ft(i+.1+t*.07,it,.06,.005,.03,.25)))},munch(i){for(let e of[0,.14,.3])vi(i+e,.07,jt("bandpass",900+e*1e3,ft(i+e,it,.14,.005,.03,.05),3))},splash(i){let e=jt("lowpass",2500,ft(i,it,.25,.01,.08,.4));e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.45),vi(i,.55,e),Kt("sine",[[0,500],[.15,250]],i,.18,ft(i,it,.05,.005,.05,.1))},laugh(i){[0,.14,.28,.42,.6].forEach((e,t)=>{let n=620-t*45;Kt("sawtooth",[[0,n*1.12],[.1,n]],i+e,.14,jt("bandpass",1100,ft(i+e,it,.22,.01,.06,.06),1.5)),vi(i+e,.04,jt("highpass",2e3,ft(i+e,it,.06,.003,.01,.03)))})},tick(i){Kt("triangle",[[0,900],[.05,1200]],i,.07,ft(i,it,.12,.003,.03,.04))}}});function iv(i){let e="C",t=-1;for(let[n,s]of Object.entries(tv)){let r=i.reduce((o,a)=>o+(s.includes(a.n[0])?a.beats:0),0);r>t&&(t=r,e=n)}return nv[e]}var J_,$_,Q_,ev,tv,nv,Ha,pp=pt(()=>{J_=[{name:"Jingle Bells",bpm:150,bells:!0,notes:"E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:0.5 E4:4 F4:1 F4:1 F4:1.5 F4:0.5 F4:1 E4:1 E4:1 E4:0.5 E4:0.5 E4:1 D4:1 D4:1 E4:1 D4:2 G4:2 E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:0.5 E4:4 F4:1 F4:1 F4:1.5 F4:0.5 F4:1 E4:1 E4:1 E4:0.5 E4:0.5 G4:1 G4:1 F4:1 D4:1 C4:4"},{name:"We Wish You a Merry Christmas",bpm:160,beats:3,notes:"G4:1 C5:1 C5:0.5 D5:0.5 C5:0.5 B4:0.5 A4:1 A4:1 A4:1 D5:1 D5:0.5 E5:0.5 D5:0.5 C5:0.5 B4:1 G4:1 G4:1 E5:1 E5:0.5 F5:0.5 E5:0.5 D5:0.5 C5:1 A4:1 G4:0.5 G4:0.5 A4:1 D5:1 B4:1 C5:3 -:2"},{name:"Deck the Halls",bpm:140,notes:"G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 C4:1 B3:1 C4:2 -:2 G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 C4:1 B3:1 C4:2 -:2 D4:1.5 E4:0.5 F4:1 D4:1 E4:1.5 F4:0.5 G4:1 D4:1 E4:0.5 F#4:0.5 G4:1 A4:0.5 B4:0.5 C5:1 B4:1 A4:1 G4:2 -:2 G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 A4:0.5 A4:0.5 A4:0.5 A4:0.5 G4:1.5 F4:0.5 E4:1 D4:1 C4:2 -:2"}],$_={C:0,D:2,E:4,F:5,G:7,A:9,B:11},Q_=i=>{let e=/^([A-G])(#?)(\d)$/.exec(i);return 440*2**(($_[e[1]]+(e[2]?1:0)+(+e[3]+1)*12-69)/12)},ev=i=>i.trim().split(/\s+/).map(e=>{let[t,n]=e.split(":");return{f:t==="-"?0:Q_(t),n:t,beats:+n}}),tv={C:["C","E","G"],F:["F","A","C"],G:["G","B","D"]},nv={C:130.81/2,F:174.61/2,G:196/2};Ha=class{constructor(){this.on=!0;try{this.on=localStorage.getItem("elf-music")!=="off"}catch{}this.k=1,this.song=0,this.i=0,this.t=0,this.timer=null,this.ctx=null,this.songs=J_.map(e=>({...e,notes:ev(e.notes)}))}start(e){!e||this.timer||(this.ctx=e,this.out=e.createGain(),this.out.gain.value=this.on?.55:0,this.out.connect(e.destination),this.t=e.currentTime+.1,this.barBeat=0,this.bar=[],this.timer=setInterval(()=>this.schedule(),60))}setOn(e){this.on=e;try{localStorage.setItem("elf-music",e?"on":"off")}catch{}this.out&&this.out.gain.setTargetAtTime(e?.55:0,this.ctx.currentTime,.05)}tempo(e){this.k=e}schedule(){let e=this.ctx;for(;this.t<e.currentTime+.25;){let t=this.songs[this.song],n=60/t.bpm/this.k,s=t.notes[this.i],r=t.beats||4;if(this.barBeat===0){let o=0,a=this.i,c=[];for(;o<r&&a<t.notes.length;)c.push(t.notes[a]),o+=t.notes[a].beats,a++;let l=iv(c.filter(h=>h.f));for(let h=0;h<r;h++)this.bass(this.t+h*n,h===0?l:l*1.5,n)}if(s.f&&this.bell(this.t,s.f,s.beats*n),t.bells)for(let o=0;o<s.beats;o+=.5)this.jingle(this.t+o*n,o%1?.5:1);this.t+=s.beats*n,this.barBeat=(this.barBeat+s.beats)%r,++this.i>=t.notes.length&&(this.i=0,this.barBeat=0,this.song=(this.song+1)%this.songs.length,this.t+=n*2)}}bell(e,t,n){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.22,e+.008),r.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(.35,n*1.4)),r.connect(this.out);for(let[o,a]of[[1,1],[2,.25],[3,.08]]){let c=s.createOscillator(),l=s.createGain();c.type="sine",c.frequency.value=t*o,l.gain.value=a,c.connect(l).connect(r),c.start(e),c.stop(e+Math.max(.4,n*1.5))}}bass(e,t,n){let s=this.ctx,r=s.createGain(),o=s.createOscillator();o.type="triangle",o.frequency.value=t,r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.16,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+n*.8),o.connect(r).connect(this.out),o.start(e),o.stop(e+n)}jingle(e,t){let n=this.ctx;if(!this.noise){this.noise=n.createBuffer(1,n.sampleRate*.2,n.sampleRate);let a=this.noise.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=Math.random()*2-1}let s=n.createBufferSource(),r=n.createBiquadFilter(),o=n.createGain();s.buffer=this.noise,r.type="bandpass",r.frequency.value=7500,r.Q.value=1.5,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.09*t,e+.004),o.gain.exponentialRampToValueAtTime(1e-4,e+.12),s.connect(r).connect(o).connect(this.out),s.start(e),s.stop(e+.15)}}});var Hp={};jp(Hp,{start:()=>vv});function en(i){Ga.textContent=i,Ga.classList.remove("show"),Ga.offsetWidth,Ga.classList.add("show")}function $a(i,e,t,n){ao.style.display="",Mr.style.display=n===vs&&!be.on?"":"none",Tp.textContent=i,wp.innerHTML=e,ao.textContent=t,_s.style.display="flex",bt("gear").style.display=n===vs?"flex":"none",ao.onclick=()=>{Ms(),_s.style.display="none",bt("gear").style.display="none",n()}}function Sn(i){ge=i,document.body.dataset.phase=i,bt("point").textContent=i==="pointing"?"\u{1F6B6} Walk":"\u{1F3AF} Target"}function vs(){Te=Oa(...Ih),Vn.visible=!1,mn.visible=!0,Ti.visible=!1,Wt.swing=0,Op(),Mi=0,Ph=!1,Zi=!1,pn=-1,Za(),Sn("hide"),Wt.ready=!1,en("\u{1F9DD} HIDE THE ELF!")}function qa(i=!1){if(ge==="hide"){if(Te.air){i&&(Ph=!0);return}if(!(Te.cling&&!i)){if(On("pop"),Sn("sitting"),pn=0,be.on){en(i?"\u23F0 HIDDEN!":"\u{1F92B} HIDDEN!");return}setTimeout(()=>{ge==="sitting"&&(Sn("handoff"),$a(i?"\u23F0 Time's up: he's hidden!":"\u{1F92B} He's hidden!","Hand the phone to the <b>seeker</b>.<br>No peeking!","\u{1F50E} I'm the seeker: go!",Cp))},1800)}}}function Cp(){Be=lh(...gr),Ki=0,Si=0,Zi=!1,xr=ja=0,document.body.classList.remove("tapaim"),tn.x=tn.y=null,Qa(),Sn("seek"),en("\u{1F50E} FIND THE ELF!")}function Lh(){ge==="seek"?(Sn("pointing"),Be.pointing=!0,tn.x=tn.y=null,Qa()):ge==="pointing"&&(Sn("seek"),Be.pointing=!1)}function Ya(i=tn.x,e=tn.y){if(ge!=="pointing"&&ge!=="seek")return;let t=et.getWorldPosition(new I),n=et.getWorldDirection(new I);i!=null&&n.set(i/innerWidth*2-1,1-e/innerHeight*2,.5).unproject(et).sub(t).normalize();let s=mn.position.clone();s.y+=Oe.height/2,Va.set(t,n),Va.far=30,Va.camera=et;let r=a=>{for(;a;a=a.parent)if(!a.visible)return!1;return!0},o=Va.intersectObjects(Xt.children,!0).find(a=>r(a.object)&&!Ip.has(a.object)&&!Bp.has(a.object)&&a.object!==Vn&&!a.object.isSprite);if(Si++,bh.bang(),be.on){let a=[...Ei.values()].filter(c=>c.role==="elf"&&!c.found&&c.model.visible).find(c=>{let l=c.model.position.clone();return l.y+=Oe.height/2,hh(t.toArray(),n.toArray(),l.toArray(),o?o.distance:1/0)});a?(On("yay"),be.sendFound(a.id)):(On("boing"),en(Si>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!"));return}hh(t.toArray(),n.toArray(),s.toArray(),o?o.distance:1/0)?(On("yay"),Sn("found"),en("\u{1F389} FOUND HIM!"),setTimeout(()=>$a("\u{1F389} Found him!",`In <b>${xs(Ki)}</b>, with <b>${Si}</b> ${Si===1?"guess":"guesses"}.<br>He was ${Pp()}.`,"\u{1F9DD} Hide him again",vs),1600)):(On("boing"),en(Si>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!"))}function Ka(i=!1){ge!=="seek"&&ge!=="pointing"||(Sn("reveal"),Be.pointing=!1,$n=0,Vn.visible=Ti.visible=!0,en(i?"\u23F0 TIME'S UP!":"\u{1F440} HE WAS HERE!"),i&&On("bell"),pn=-1,Za(),Te.yaw=Math.atan2(Be.x-Te.x,Be.z-Te.z)+Math.PI,setTimeout(()=>$a(i?"\u23F0 Time's up: the elf wins!":"\u{1F9DD} He was here!",`He was ${Pp()}.`,"\u{1F9DD} Hide him again",vs),Vt.has("giveup")?1e9:6e3))}function rv(i){let e=Te.x-Be.x,t=Te.z-Be.z,n=Te.y+Oe.height/2-et.position.y,s=Math.atan2(-e,-t),r=Math.max(-1.3,Math.min(1.1,Math.atan2(n,Math.hypot(e,t)))),o=1-Math.exp(-i*4),a=Math.atan2(Math.sin(s-Be.yaw),Math.cos(s-Be.yaw));Be.yaw+=a*o,Be.pitch+=(r-Be.pitch)*o}function Pp(){let i=mn.position,e=null,t=1/0,n="near";for(let s of vr.things){if(s.gone)continue;let r=new xt().setFromObject(s.at),o=i.x>r.min.x-.02&&i.x<r.max.x+.02&&i.z>r.min.z-.02&&i.z<r.max.z+.02,a=o?0:Math.hypot(Math.max(r.min.x-i.x,0,i.x-r.max.x),Math.max(r.min.z-i.z,0,i.z-r.max.z));(a<t||a===0&&t===0&&o)&&(t=a,e=s,n=o?i.y>.05?"on top of":"under":"near")}return e?`${n} the <b>${e.name.replace(/ \+.*/,"")}</b>`:"somewhere sneaky"}function Np(i,e,t,n){let s=bt(i),r=()=>{for(let o of s.children)o.classList.toggle("on",+o.dataset.s===t())};for(let o of sv){let a=document.createElement("button");a.textContent=xs(o),a.dataset.s=o,a.addEventListener("click",()=>{n(o);try{localStorage.setItem(e,o)}catch{}r()}),s.appendChild(a)}r()}function av(i,e){tn.x=i,tn.y=e,Qa(),xr=Ap+ov,ja=Ap,document.body.classList.add("tapaim")}function Qa(){let i=bt("aim");i.style.left=tn.x===null?"50%":`${tn.x}px`,i.style.top=tn.y===null?"50%":`${tn.y}px`}function lv(i,e){if(e&&(Eh-=i)<=0){Eh=.8;let t=new qr(new sr({map:cv,transparent:!0,depthWrite:!1}));t.position.set(Te.x,Te.y+Oe.height*.95,Te.z),t.userData={age:0,big:Qn.length%3===1?1.5:1,ph:Math.random()*6},Xt.add(t),Qn.push(t)}for(let t of Qn){let n=t.userData;n.age+=i,t.position.y+=i*.035,t.position.x+=Math.sin(n.age*2.5+n.ph)*i*.015;let s=(.018+n.age*.012)*n.big;t.scale.set(s,s,1),t.material.opacity=Math.min(1,n.age*3)*Math.max(0,1-n.age/2.6)}for(let t=Qn.length-1;t>=0;t--)Qn[t].userData.age>2.6&&(Xt.remove(Qn[t]),Qn[t].material.dispose(),Qn.splice(t,1))}function uv(i,e){if(e&&(Th-=i)<=0){Th=.3;let t=new qr(new sr({map:hv,transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.8})),n=ei.length%2?1:-1;t.position.set(Te.x,Te.y+Oe.height*.9,Te.z),t.userData={age:0,vx:n*(.02+Math.random()*.02),vz:(Math.random()-.5)*.03},Xt.add(t),ei.push(t)}for(let t of ei){let n=t.userData;n.age+=i,t.position.y+=i*.07,t.position.x+=n.vx*i,t.position.z+=n.vz*i;let s=.02+n.age*.03;t.scale.set(s*2,s,1),t.material.opacity=Math.min(1,n.age*5)*Math.max(0,1-n.age/1.4)}for(let t=ei.length-1;t>=0;t--)ei[t].userData.age>1.4&&(Xt.remove(ei[t]),ei[t].material.dispose(),ei.splice(t,1))}function Op(){for(let i of ei)Xt.remove(i),i.material.dispose();ei.length=0,Th=0}function Za(){for(let i of Qn)Xt.remove(i),i.material.dispose();Qn.length=0,Eh=0}function Mh(i,e,t){let n=yr.ceiling(i,e),s=t+.01<n?n:Fp;for(let r of yr.tops)r.under!==void 0&&r.under>t+.01&&i>r.x0&&i<r.x1&&e>r.z0&&e<r.z1&&(s=Math.min(s,r.under));return s}function yp(i,e=6){let t=mn.position,n=Te.yaw+Wt.swing,s=-Math.sin(n),r=-Math.cos(n),o=Math.min(Mh(t.x,t.z,t.y),Mh(t.x-s*.25,t.z-r*.25,t.y)),a=o-(t.y+Oe.height)<.3;a&&(gs.over=o),gs.t=Math.max(0,Math.min(1,gs.t+(a?i:-i)/.35));let c=gs.t*gs.t*(3-2*gs.t),l=.42+(.2-.42)*c,h=.2+(Math.max(.03,Math.min(.1,gs.over-t.y-.025))-.2)*c,u=new I;for(let A=0;A<6;A++){u.set(t.x-s*l,t.y+h,t.z-r*l);let x=vr.whole;if(!fv(u)&&u.x>x.x0+.05&&u.x<x.x1-.05&&u.z>x.z0+.05&&u.z<x.z1-.05)break;l*=.7,c<.5&&(h=Math.max(h,.1))}u.y=Math.min(u.y,Mh(u.x,u.z,t.y)-.025);let f=new I(t.x+s*.15,t.y+Oe.height*(.6-.25*c),t.z+r*.15),p=Wt.ready?1-Math.exp(-i*e):1;Wt.ready=!0,Wt.pos.lerp(u,p),Wt.look.lerp(f,p),c>0&&(Wt.pos.y=Math.min(Wt.pos.y,u.y)),et.position.copy(Wt.pos),et.up.set(0,1,0),et.lookAt(Wt.look),et.fov=66,et.updateProjectionMatrix()}function dv(){et.position.set(Be.x,Be.eye,Be.z),et.rotation.set(Be.pitch,Be.yaw,0,"YXZ");let i=ge==="pointing"?52:72;Math.abs(et.fov-i)>.1&&(et.fov+=(i-et.fov)*.2,et.updateProjectionMatrix())}function mv(){Be=lh(...gr),mn.visible=!1,Vn.visible=Ti.visible=!1,Sn("count"),Mi=0,Zi=!1,document.body.classList.add("counting"),en("\u{1F648} COUNT! NO PEEKING\u2026")}function Av(i){Be=null,vs();for(let e=0;e<16;e++){let t=(i*2.4+e*.7)%(Math.PI*2),n=gr[0]+Math.sin(t)*1.1,s=gr[1]+Math.cos(t)*1.1,r=vr.whole;if(!(n<r.x0+.2||n>r.x1-.2||s<r.z0+.2||s>r.z1-.2||yr.tops.some(o=>bn(o,n,s,.06)))){Te=Oa(n,s,Math.atan2(n-gr[0],s-gr[1]));break}}Wt.ready=!1,en("\u{1F9DD} HIDE! THE SEEKER'S COUNTING")}function gv(i){let e=new Set,t=[...be.players.keys()];for(let n of be.on?be.others():[]){let s=n.st[0]==="s"?"seeker":"elf",r=Ei.get(n.id);if(r&&r.kind!==s&&(Xt.remove(r.model),Ei.delete(n.id),r=null),!r){let a=s==="seeker"?Zd():ph();if(s==="elf"){let c=_p[Math.max(0,t.indexOf(n.id))%_p.length];a.traverse(l=>{var h;l.isMesh&&((h=l.material.color)==null?void 0:h.getHex())===14034984&&(l.material=l.material.clone(),l.material.color.setHex(c))})}a.traverse(c=>Bp.add(c)),Xt.add(a),r={model:a,kind:s},Ei.set(n.id,r)}e.add(n.id),Object.assign(r,{id:n.id,role:n.role,found:n.found});let o=n.st;s==="seeker"?(r.model.position.set(o[1],0,o[2]),r.model.rotation.y=o[3],Jd(r.model,i,{counting:!!o[6],crouch:!!o[5]})):(r.model.position.set(o[1],o[2],o[3]),r.model.rotation.y=o[4],mh(r.model,i,{walking:o[5],run:o[6],climbing:!!o[7],hanging:!!o[8],air:!!o[9],sit:o[10],asleep:!!o[11],laugh:!!o[12]})),r.model.visible=!(s==="seeker"&&be.myRole()==="seeker")}for(let[n,s]of Ei)e.has(n)||(Xt.remove(s.model),Ei.delete(n))}function xv(i){if(Xa=Math.max(0,Xa-i),!be.on||ge!=="hide"||Xa>0)return;let e=be.others().find(s=>s.role==="seeker"&&s.st[0]==="s");if(!e)return;let t=Te.x-e.st[1],n=Te.z-e.st[2];Math.hypot(t,n)>pv||(vh(1),be.sendShh([Te.x,Te.y+Oe.height,Te.z]),en("\u{1F92B} SHHHHH!"),Te.yaw=Math.atan2(-t,-n)+Math.PI,Te.run=1,Te.runT=9,wh=.7,Xa=1.5)}function lo(){if(bt("online").style.display==="none"&&be.on)return;let i=s=>String(s).replace(/[&<>"]/g,r=>`&#${r.charCodeAt(0)};`),e=[...be.players.values()].map(s=>i(s.name)).join(", "),t=`<div class="row">\u{1F3F7}\uFE0F <input id="ol-name" maxlength="12" placeholder="Your name" value="${i(Ja())}" autocomplete="off" autocorrect="off" spellcheck="false"></div>`,n=be.status()?`<div class="st">${i(be.status())}</div>`:"";Wn.innerHTML=`<div class="box"><h2>\u{1F310} Play online</h2>${t}${be.on?be.host?`<div class="code">${be.code()}</div><div>In the room: <span class="who">${e}</span></div><div class="row"><button data-ol="start" ${be.players.size<2?'disabled style="opacity:.5"':""}>\u25B6\uFE0F Start${be.players.size<2?" (waiting for a buddy)":""}</button><button class="grey" data-ol="invite">\u{1F4E4} Invite</button></div>`:`<div class="code">${be.code()}</div><div>In the room: <span class="who">${e}</span></div><div>Waiting for the host to start\u2026</div>`:`<div class="row"><button data-ol="host">\u{1F4E1} Host a game</button></div><div class="row">or <input id="ol-code" maxlength="4" size="5" placeholder="CODE" value="${i(Nh)}" autocapitalize="characters" autocomplete="off" autocorrect="off" spellcheck="false"><button data-ol="join">\u{1F517} Join</button></div>`}${n}<div class="row">${be.on?'<button class="red" data-ol="leave">\u{1F6AA} Leave</button>':""}<button class="grey" data-ol="close">\u2716 Close</button></div></div>`}function yv(){Sn("title"),_s.style.display="none",Wn.style.display="flex",lo()}function zp(){be.leave(),document.body.classList.remove("online","counting");for(let i of Ei.values())Xt.remove(i.model);Ei.clear(),Be=null,mn.visible=!0,Wn.style.display="none",Uh()}function Uh(){$a("\u{1F9DD} Hide the Elf","Player 1: you're the elf. <b>Walk into things to climb them</b>, <b>jump</b> near something tall, then press <b>\u{1F648} Hide</b>.<br>Player 2: find him!<br>Or \u{1F310} online: everyone on their own phone, one seeker, lots of elves.","\u{1F9DD} Start hiding",vs)}function oo(i,e){let t=e?{pads:[],kb:{x:0,y:0},events:[]}:Up.poll(i,{holdToggle:!1}),n=Ji.x+t.kb.x,s=Ji.y+t.kb.y,r=!1,o=!1;for(let A of t.pads){n+=A.x,s+=A.y;let x=xp.get(A.index)||[],m=A.pressed.filter(d=>!x.includes(d));m.includes(0)&&(r=!0),m.includes(2)&&(o=!0),xp.set(A.index,A.pressed)}e&&({x:n,y:s}=e),n=Math.max(-1,Math.min(1,n)),s=Math.max(-1,Math.min(1,s));let a=t.events.some(A=>A.type==="drop"&&A.pad<0);t.events.some(A=>A.type==="music")&&(Ms(),ys.setOn(!ys.on),Ch()),(Wa("KeyH")||o&&ge==="hide")&&qa(),(Wa("KeyP")||o&&(ge==="seek"||ge==="pointing"))&&Lh(),Wa("KeyC")&&Be&&(Be.crouch=!Be.crouch,bt("crouch").classList.toggle("on",Be.crouch)),Wa("KeyG")&&Ka();let c=performance.now()/1e3;if(ge==="hide"||ge==="title"){let A=ge==="hide"&&(Sh||a||r||e&&e.jump);A&&On("swoosh"),ge==="hide"&&(wh>0&&(wh-=i,n=0,s=-1),Bd(Te,{x:n,y:s,jump:A},i,yr),be.on?Mi=ti-be.left:e||(Mi+=i),Mi>=ti-10&&!Zi&&(Zi=!0,en("\u23F0 10 SECONDS!"),On("bell")),(Mi>=ti||Ph&&!Te.air)&&qa(!0)),Wt.swing+=bi.x*.8,Wt.swing*=Math.exp(-i*(co.size?0:1.5))}else if(Be&&ge!=="handoff"&&ge!=="sitting"){(ge==="seek"||ge==="pointing")&&(be.on?Ki=ji-be.left:e||(Ki+=i),Ki>=ji-10&&!Zi&&(Zi=!0,en("\u23F0 10 SECONDS!"),On("bell")),Ki>=ji&&!be.on&&Ka(!0)),ge==="count"&&(Mi=ti-be.left,ec.lastChild.textContent=String(Math.max(1,Math.min(ti,Math.floor(Mi)+1)))),ge==="pointing"&&(a||r)&&Ya(),ja>0&&(ja-=i)<=0&&Ya(),xr>0&&(xr-=i)<=0&&(document.body.classList.remove("tapaim"),ge==="seek"&&(tn.x=tn.y=null,Qa()));let A=xr>0;ge==="reveal"&&rv(i),zd(Be,(ge==="seek"||ge==="pointing")&&!A?{x:n,y:s,lookX:bi.x,lookY:bi.y}:ge==="count"?{x:0,y:0,lookX:bi.x,lookY:bi.y}:{x:0,y:0},i,yr)}Sh=!1,bi.x=bi.y=0,mn.position.set(Te.x,Te.y,Te.z),mn.rotation.y=Te.yaw,pn>=0&&(pn+=i);let l=pn>=0&&!Te.cling;if(mh(mn,c,{walking:ge==="hide"?Te.walking:0,run:Te.run,climbing:Te.climbing,hanging:!!Te.cling,air:Te.air,sit:l?Math.min(1,pn/.7):0,asleep:l&&pn>1,laugh:ge==="reveal"||ge==="out"}),lv(i,l&&pn>1),uv(i,ge==="reveal"&&$n>Ar||ge==="out"),ge==="reveal"){let A=$n;$n+=i,A<=Ar&&$n>Ar&&(Wt.pos.copy(et.position),Wt.look.copy(et.position).addScaledVector(et.getWorldDirection(new I),et.position.distanceTo(mn.position)),Wt.ready=!0,Wt.swing=Math.PI,On("laugh"));let x=et.position.distanceTo(mn.position),m=Math.abs(Math.sin($n*5)),d=Math.max(.8,Math.min(4,x/1.2))*(1+Math.sin($n*6)*.15),v=Math.max(.5,Math.min(6,x/.8));Vn.position.set(Te.x,Te.y+Oe.height/2,Te.z),Vn.scale.setScalar(d),Vn.lookAt(et.position),Vn.visible=$n<Ar+.6,Ti.quaternion.copy(et.quaternion),Ti.scale.setScalar(v),Ti.position.set(Te.x,Te.y+Oe.height,Te.z).addScaledVector(new I(0,1,0).applyQuaternion(et.quaternion),(.015+m*.03)*v)}if(ge==="reveal"&&$n>Ar)yp(i,2.2),mr=null;else if(Be&&ge!=="hide"&&ge!=="title"&&ge!=="handoff"&&ge!=="sitting"){dv();let A=mr?Math.hypot(Be.x-mr[0],Be.z-mr[1])/Math.max(i,.001)/Jn.walk:0;mr=[Be.x,Be.z],bh.update(i,Math.min(1,A),Be.yaw,ge==="pointing"||xr>0,tn.x??innerWidth/2,tn.y??innerHeight/2)}else yp(i),mr=null;bh.show(_v());let u=ge==="hide"||ge==="count"?ti-Mi:be.on?be.left:ji-Ki,f=[...be.players.values()].filter(A=>A.role==="elf"&&!A.found).length;mp.textContent=ge==="hide"?`\u{1F9DD} ${xs(Math.max(0,Math.ceil(u)))} to hide \xB7 walk into things to climb`:ge==="count"?"\u{1F648} Counting\u2026 the elves are hiding":(ge==="seek"||ge==="pointing")&&be.on?`\u{1F50E} ${xs(Math.max(0,Math.ceil(u)))} left \xB7 ${f} ${f===1?"elf":"elves"} to find`:ge==="seek"||ge==="pointing"?`\u{1F50E} ${xs(Math.max(0,Math.ceil(u)))} left \xB7 ${Si} ${Si===1?"guess":"guesses"}`:be.on&&ge==="sitting"&&be.phase==="seek"?`\u{1F92B} ${xs(Math.max(0,Math.ceil(be.left)))} \xB7 stay hidden!`:be.on&&ge==="sitting"?`\u{1F92B} hidden \xB7 ${xs(Math.max(0,Math.ceil(be.left)))} till the seeker looks`:ge==="out"?`\u{1F389} found \xB7 ${f} still hidden`:"";let p=(ge==="hide"||ge==="seek"||ge==="pointing")&&u<=10;xv(i),be.update(i),gv(c),mp.classList.toggle("hurry",p),ys.tempo(p?1.3:1),vr.update(i)}function kp(i){let e=Math.min(.05,(i-Rh)/1e3);Rh=i,oo(e),An.render(Xt,et),requestAnimationFrame(kp)}function vv(){if(Vt.get("at")&&Ih.splice(0,3,...Vt.get("at").split(",").map(Number)),Vt.has("shot")){_s.style.display="none",vs();let i=+Vt.get("sim")||0,e={x:+(Vt.get("sx")??0),y:+(Vt.get("sy")??0)};for(let t=0;t<i;t+=1/60)oo(1/60,e);if(Vt.has("seek")&&(pn=2,Cp(),Vt.has("point")&&Lh(),Vt.has("giveup"))){Ka();for(let t=0;t<(+Vt.get("giveup")||1.5)*60;t++)oo(1/60,{x:0,y:0})}window.__test={elfOnScreen:()=>{let t=mn.position.clone();return t.y+=Oe.height/2,t.project(et),[(t.x+1)/2*innerWidth,(1-t.y)/2*innerHeight]},guesses:()=>Si,phase:()=>ge},oo(1/60,{x:0,y:0}),oo(1/60,{x:0,y:0}),An.render(Xt,et)}else Uh();Vt.has("debug")&&(window.__elf={onl:be,mirrors:Ei,seeker:()=>Be,elf:()=>Te,camera:et,fire:(i,e)=>Ya(i,e),phase:()=>ge}),Vt.get("join")&&(Wn.style.display="flex",Nh=Vt.get("join"),be.join(Vt.get("join"),Ja()).then(i=>{i&&document.body.classList.add("online"),lo()})),requestAnimationFrame(i=>{Rh=i,kp(i)})}var ys,Ms,Ch,Vt,Sp,Ep,An,Xt,et,vr,yr,Ih,gr,mn,bh,mr,Te,Vn,Ti,bt,_s,Tp,wp,ao,Ga,mp,sv,Rp,ti,ji,pn,ge,Be,Ki,Si,$n,Mi,Ph,Zi,xs,Va,Ip,tn,Ar,_r,Lp,Ji,Dp,Sh,bs,bi,co,Dh,xr,ja,Ap,ov,Up,gp,Wa,xp,cv,Qn,Eh,hv,ei,Th,Wt,fv,Fp,gs,pv,Ei,Bp,_p,vp,wh,Xa,Mp,bp,be,Wn,ec,Ja,Nh,Mr,_v,Rh,Gp=pt(()=>{Pn();fo();ch();uh();jd();$d();Qd();Ia();np();ip();rp();ap();lp();dp();pp();cp();ys=new Ha,Ms=()=>{let i=_h();return ys.start(i),i},Ch=()=>{let i=document.getElementById("music");i&&(i.textContent=ys.on?"\u{1F3B5}":"\u{1F507}")},Vt=new URLSearchParams(location.search),Ep=!!((Sp=globalThis.matchMedia)!=null&&Sp.call(globalThis,"(pointer: coarse)").matches);Ep&&document.body.classList.add("touch");An=new Xr({antialias:!0,preserveDrawingBuffer:Vt.has("shot")});An.setPixelRatio(Math.min(devicePixelRatio,1.5));An.setSize(innerWidth,innerHeight);An.shadowMap.enabled=!0;An.shadowMap.type=Ml;An.toneMapping=bl;document.body.appendChild(An.domElement);Xt=new ca;Xt.background=new we(2762016);et=new Ct(66,innerWidth/innerHeight,.01,40);addEventListener("resize",()=>{An.setSize(innerWidth,innerHeight),et.aspect=innerWidth/innerHeight,et.updateProjectionMatrix()});vr=Nd(Xt);vr.labels.visible=!1;yr=tp(vr),Ih=[2.6,1,0],gr=[2.6,1,0],mn=ph();Xt.add(mn);bh=new za(document.getElementById("gun")),mr=null,Te=Oa(...Ih),Vn=new At(new zi(.12,.018,8,32),new Yt({color:16765503,depthTest:!1,transparent:!0}));Vn.renderOrder=10;Vn.visible=!1;Xt.add(Vn);Ti=new nt;{let i=new Yt({color:15087942,depthTest:!1,transparent:!0}),e=new At(new ar(.035,.05,16),i);e.rotation.x=Math.PI,e.position.y=.025;let t=new At(new Ve(.013,.013,.05,12),i);t.position.y=.075;for(let n of[e,t])n.renderOrder=11,Ti.add(n)}Ti.visible=!1;Xt.add(Ti);bt=i=>document.getElementById(i),_s=bt("screen"),Tp=bt("screen-title"),wp=bt("screen-text"),ao=bt("screen-go"),Ga=bt("banner"),mp=bt("hud"),sv=[30,45,60,90,120],Rp=i=>{try{return+localStorage.getItem(i)||0}catch{return 0}},ti=+Vt.get("hidetime")||Rp("hide-elf.hidetime")||45,ji=+Vt.get("seektime")||Rp("hide-elf.seektime")||60,pn=-1,ge="title",Be=null,Ki=0,Si=0,$n=0,Mi=0,Ph=!1,Zi=!1;xs=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,Va=new Ma,Ip=new Set;mn.traverse(i=>Ip.add(i));tn={x:null,y:null};Ar=1;_r=bt("stick"),Lp=bt("knob"),Ji={x:0,y:0},Dp=i=>{let e=_r.getBoundingClientRect();[Ji.x,Ji.y]=sp(i.clientX-(e.left+e.width/2),i.clientY-(e.top+e.height/2),e.width/2),Lp.style.transform=`translate(${Ji.x*e.width/2}px, ${Ji.y*e.width/2}px)`};_r.addEventListener("pointerdown",i=>{i.preventDefault(),_r.setPointerCapture(i.pointerId),Dp(i)});_r.addEventListener("pointermove",i=>{_r.hasPointerCapture(i.pointerId)&&Dp(i)});for(let i of["pointerup","pointercancel","lostpointercapture"])_r.addEventListener(i,()=>{Ji.x=Ji.y=0,Lp.style.transform=""});Sh=!1,bs=(i,e)=>bt(i).addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),Ms(),e()});bs("jump",()=>{Sh=!0});bs("hide",qa);bs("point",Lh);bs("fire",()=>Ya());bs("crouch",()=>{Be&&(Be.crouch=!Be.crouch,bt("crouch").classList.toggle("on",Be.crouch))});bs("giveup",Ka);bs("music",()=>{ys.setOn(!ys.on),Ch()});Ch();Np("hide-times","hide-elf.hidetime",()=>ti,i=>{ti=i});Np("seek-times","hide-elf.seektime",()=>ji,i=>{ji=i});bt("gear").addEventListener("click",()=>{bt("settings").style.display="flex"});bt("settings-done").addEventListener("click",()=>{bt("settings").style.display="none"});bi={x:0,y:0},co=new Map,Dh=new Map;An.domElement.addEventListener("pointerdown",i=>{Ms(),co.set(i.pointerId,[i.clientX,i.clientY]),Dh.set(i.pointerId,[i.clientX,i.clientY,performance.now()]),An.domElement.setPointerCapture(i.pointerId)});An.domElement.addEventListener("pointermove",i=>{let e=co.get(i.pointerId);if(!e)return;let t=(ge==="pointing"?.0022:.005)*(Ep?1:.8);bi.x+=(i.clientX-e[0])*t,bi.y+=(i.clientY-e[1])*t,co.set(i.pointerId,[i.clientX,i.clientY])});An.domElement.addEventListener("pointerup",i=>{let e=Dh.get(i.pointerId);e&&(ge==="pointing"||ge==="seek")&&Math.hypot(i.clientX-e[0],i.clientY-e[1])<14&&performance.now()-e[2]<450&&av(i.clientX,i.clientY)});for(let i of["pointerup","pointercancel"])An.domElement.addEventListener(i,e=>{co.delete(e.pointerId),Dh.delete(e.pointerId)});xr=0,ja=0,Ap=.28,ov=.9;addEventListener("touchend",()=>Ms());Up=new ka,gp={},Wa=i=>{let e=!!Up.keys[i],t=e&&!gp[i];return gp[i]=e,t},xp=new Map,cv=Md(),Qn=[],Eh=0;hv=(()=>{let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.font='bold 100px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=12,e.strokeStyle="#9d0208",e.strokeText("HA!",128,68),e.fillStyle="#ffd23f",e.fillText("HA!",128,68);let t=new or(i);return t.colorSpace=tt,t})(),ei=[],Th=0;Wt={pos:new I,look:new I,ready:!1,swing:0},fv=i=>yr.tops.some(e=>i.x>e.x0&&i.x<e.x1&&i.z>e.z0&&i.z<e.z1&&i.y<e.y1&&!(e.under!==void 0&&i.y<e.under-.01)),Fp=rt+.24;gs={t:0,over:Fp};pv=.55,Ei=new Map,Bp=new Set,_p=[14034984,1667522,2853438,15764480,7358696,15092096,820633],vp=!1,wh=0,Xa=0,Mp=0,bp=0,be=Kd({myState:()=>{if(be.myRole()==="seeker")return Be?["s",Be.x,Be.z,Be.yaw,Be.pitch,Be.crouch?1:0,ge==="count"?1:0]:null;if(!["hide","sitting","seek","out"].includes(ge)&&ge!=="pointing")return null;let i=pn>=0&&!Te.cling;return["e",Te.x,Te.y,Te.z,Te.yaw,ge==="hide"?Te.walking:0,Te.run,Te.climbing?1:0,Te.cling?1:0,Te.air?1:0,i?Math.min(1,pn/.7):0,i&&pn>1?1:0,ge==="out"?1:0]},onRound({seeker:i,hide:e,seek:t,order:n}){bt("online").style.display="none",_s.style.display="none",ao.style.display="",ti=e,ji=t,vp=!1,Mp=0,Op(),Za(),bp=Math.max(0,n.indexOf(be.me)),i===be.me?mv():Av(bp)},onPhase(i){i==="seek"?be.myRole()==="seeker"?(Sn("seek"),document.body.classList.remove("counting"),Ki=0,Zi=!1,en("\u{1F440} READY OR NOT! FIND THE ELVES!")):ge==="hide"&&qa(!0):i==="lobby"&&yv()},onFound(i,e,t){i===be.me?(vp=!0,Sn("out"),Mp=0,pn=-1,Za(),en(t?"\u{1F389} FOUND! YOU SEEK NEXT ROUND":"\u{1F389} FOUND!"),On("boing")):en(`\u{1F389} ${be.name(i).toUpperCase()} FOUND!${t?" (SEEKS NEXT)":""}`)},onShh(i,e){i!==be.me&&vh(1-et.position.distanceTo(new I(...e))/4)},onEnd(i){let e=i.next?be.name(i.next):null;Sn("results"),document.body.classList.remove("counting"),Tp.textContent=i.winner==="seeker"?"\u{1F50E} Found every elf!":"\u{1F9DD} The elves win!",wp.innerHTML=`${i.found.length?`Found: <b>${i.found.map(t=>be.name(t)).join(", ")}</b>.<br>`:""}${e?`<b>${e}</b> was found first: they seek next.`:"Nobody was found: the next player seeks."}<br>Next round in a few seconds\u2026`,ao.style.display="none",_s.style.display="flex",bt("gear").style.display="none"},onLost(i){zp(),en(`\u{1F310} ${i.toUpperCase()}`)},render:()=>lo()});Wn=document.createElement("div");Wn.id="online";document.body.appendChild(Wn);{let i=document.createElement("style");i.textContent=`
  #online { position: fixed; inset: 0; z-index: 25; display: none; align-items: center; justify-content: center; background: rgba(20,16,12,0.86); color: #fff; font: 500 max(15px, 3.2vmin) system-ui; }
  #online .box { display: flex; flex-direction: column; gap: 2.2vmin; align-items: center; max-width: 90vw; text-align: center; }
  #online h2 { margin: 0; font: 900 7vmin system-ui; color: #fff3b0; text-shadow: 0 0.06em 0 #9d0208; }
  #online .row { display: flex; gap: 1.6vmin; flex-wrap: wrap; justify-content: center; align-items: center; }
  #online button { padding: 1.8vmin 3.6vmin; border: 0; border-radius: 2.4vmin; background: #2b8a3e; color: #fff; font: 800 max(15px, 3.4vmin) system-ui; cursor: pointer; }
  #online button.red { background: #d62828; } #online button.grey { background: #495057; }
  #online input { padding: 1.6vmin 2vmin; border: 0.5vmin solid #ffd23f; border-radius: 2vmin; background: #1b1712; color: #fff; font: 800 max(16px, 3.4vmin) system-ui; text-align: center; }
  #online .code { font: 900 9vmin system-ui; letter-spacing: 1vmin; color: #ffd23f; }
  #online .who { color: #ffd23f; } #online .st { color: #ffb4a2; }
  body.online #giveup, body.online #gear { display: none !important; }
  #lids { position: fixed; inset: 0; pointer-events: none; z-index: 5; display: none; }
  body.counting #lids { display: block; }
  #lids div { position: absolute; left: -5%; right: -5%; height: 50%; background: radial-gradient(ellipse at 50% 100%, rgba(10,6,4,0.55), #050302 70%); animation: lid 2.6s ease-in-out infinite; }
  #lids .top { top: 0; transform-origin: top; border-radius: 0 0 50% 50% / 0 0 22% 22%; }
  #lids .bot { bottom: 0; background: radial-gradient(ellipse at 50% 0%, rgba(10,6,4,0.55), #050302 70%); border-radius: 50% 50% 0 0 / 22% 22% 0 0; }
  @keyframes lid { 0%, 100% { height: 46%; } 40% { height: 43%; } 70% { height: 47.5%; } }
  #lids .count { position: absolute; left: 0; right: 0; top: 40%; text-align: center; font: 900 14vmin system-ui; color: rgba(255,243,176,0.85); }
  body.counting canvas { filter: blur(2.5px) brightness(0.75); }`,document.head.appendChild(i)}ec=document.createElement("div");ec.id="lids";ec.innerHTML='<div class="top"></div><div class="bot"></div><span class="count"></span>';document.body.appendChild(ec);Ja=()=>{try{return localStorage.getItem("hide-elf.name")||""}catch{return""}},Nh="";Wn.addEventListener("input",i=>{if(i.target.id==="ol-code"&&(Nh=i.target.value),i.target.id==="ol-name"){let e=i.target.value.trim().slice(0,12);try{localStorage.setItem("hide-elf.name",e)}catch{}be.setName(e)}});Wn.addEventListener("click",async i=>{var n;let e=i.target.closest("[data-ol]");if(!e)return;Ms();let t=e.dataset.ol;if(t==="host")await be.hostGame(Ja(),{hide:ti,seek:ji}),document.body.classList.add("online");else if(t==="join")await be.join(Wn.querySelector("#ol-code").value,Ja())&&document.body.classList.add("online");else if(t==="start")be.startRound();else if(t==="invite"){let s=`${Sr?location.origin+location.pathname.replace(/index\.html$/,""):"https://sean-bostic.github.io/play/hide-elf/"}?join=${be.code()}`;navigator.share?navigator.share({title:"Hide the Elf",text:`Hide the Elf! Room ${be.code()}`,url:s}).catch(()=>{}):(n=navigator.clipboard)==null||n.writeText(s)}else t==="leave"?zp():t==="close"&&(Wn.style.display="none",be.on||Uh());lo()});Mr=document.createElement("button");Mr.id="screen-online";Mr.textContent="\u{1F310} Play online";_s.appendChild(Mr);Mr.style.cssText="padding:1.8vmin 4vmin;border:0;border-radius:3vmin;background:#1971c2;color:#fff;font:800 max(16px,3.6vmin) system-ui;cursor:pointer";Mr.addEventListener("click",()=>{Ms(),Wn.style.display="flex",lo()});_v=()=>!!Be&&["seek","pointing","found","reveal"].includes(ge)&&!(ge==="reveal"&&$n>Ar),Rh=performance.now()});fo();oh();gd().then(()=>Promise.resolve().then(()=>(Gp(),Hp))).then(i=>i.start());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
