(()=>{var sp=Object.defineProperty;var bt=(i,e)=>()=>(i&&(e=i(i=0)),e);var rp=(i,e)=>{for(var t in e)sp(i,t,{get:e[t],enumerable:!0})};function Ln(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function al(i,e){return(i%e+e)%e}function sm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rm(i,e,t){return i!==e?(t-i)/(e-i):0}function Mr(i,e,t){return(1-t)*i+t*e}function om(i,e,t,n){return Mr(i,e,1-Math.exp(-t*n))}function am(i,e=1){return e-Math.abs(al(i,e*2)-e)}function cm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function um(i,e){return i+Math.random()*(e-i)}function fm(i){return i*(.5-Math.random())}function dm(i){i!==void 0&&(eu=i);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pm(i){return i*vr}function mm(i){return i*Vs}function Ec(i){return(i&i-1)===0&&i!==0}function Am(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),A=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*A,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*A,a*l);break;case"ZYZ":i.set(c*A,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Mf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xm(){let i=wr("canvas");return i.style.display="block",i}function br(i){i in tu||(tu[i]=!0,console.warn(i))}function Os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function ja(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),c=e.dot(Gi),l=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Lm(i,e,t,n,s,r,o,a){let c;if(e.side===an?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===kn,a),c===null)return null;go.copy(a),go.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(go);return l<t.near||l>t.far?null:{distance:l,point:go.clone(),object:i}}function xo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ms),i.getVertexPosition(c,bs),i.getVertexPosition(l,Ss);let h=Lm(i,e,t,n,Ms,bs,Ss,Ao);if(h){s&&(fo.fromBufferAttribute(s,a),po.fromBufferAttribute(s,c),mo.fromBufferAttribute(s,l),h.uv=ji.getInterpolation(Ao,Ms,bs,Ss,fo,po,mo,new De)),r&&(fo.fromBufferAttribute(r,a),po.fromBufferAttribute(r,c),mo.fromBufferAttribute(r,l),h.uv1=ji.getInterpolation(Ao,Ms,bs,Ss,fo,po,mo,new De),h.uv2=h.uv1),o&&(pu.fromBufferAttribute(o,a),mu.fromBufferAttribute(o,c),Au.fromBufferAttribute(o,l),h.normal=ji.getInterpolation(Ao,Ms,bs,Ss,pu,mu,Au,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new R,materialIndex:0};ji.getNormal(Ms,bs,Ss,u.normal),h.face=u}return h}function Gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $t(i){let e={};for(let t=0;t<i.length;t++){let n=Gs(i[t]);for(let s in n)e[s]=n[s]}return e}function Dm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sf(i){return i.getRenderTarget()===null?i.outputColorSpace:Qe.workingColorSpace}function Ef(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zm(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,p=u.byteLength,A=i.createBuffer();i.bindBuffer(h,A),i.bufferData(h,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:A,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let f=h.array,p=h._updateRange,A=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&A.length===0&&i.bufferSubData(u,0,f),A.length!==0){for(let g=0,m=A.length;g<m;g++){let d=A[g];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}function _g(i,e,t,n,s,r,o){let a=new Se(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function A(m,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,c):x&&x.isColor&&(g(x,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===la)?(h===void 0&&(h=new yt(new vn(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Gs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(x.colorSpace)!==ut,(u!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new yt(new zt(2,2),new li({name:"BackgroundMaterial",uniforms:Gs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){m.getRGB(yo,Sf(i)),n.buffers.color.setClear(yo.r,yo.g,yo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:A}}function yg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(L,B,q,Z,J){let j=!1;if(o){let ie=g(Z,q,B);l!==ie&&(l=ie,p(l.object)),j=d(L,Z,q,J),j&&y(L,Z,q,J)}else{let ie=B.wireframe===!0;(l.geometry!==Z.id||l.program!==q.id||l.wireframe!==ie)&&(l.geometry=Z.id,l.program=q.id,l.wireframe=ie,j=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,W(L,B,q,Z),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function A(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,B,q){let Z=q.wireframe===!0,J=a[L.id];J===void 0&&(J={},a[L.id]=J);let j=J[B.id];j===void 0&&(j={},J[B.id]=j);let ie=j[Z];return ie===void 0&&(ie=m(f()),j[Z]=ie),ie}function m(L){let B=[],q=[],Z=[];for(let J=0;J<s;J++)B[J]=0,q[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:Z,object:L,attributes:{},index:null}}function d(L,B,q,Z){let J=l.attributes,j=B.attributes,ie=0,ce=q.getAttributes();for(let Ae in ce)if(ce[Ae].location>=0){let ee=J[Ae],me=j[Ae];if(me===void 0&&(Ae==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),Ae==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),ee===void 0||ee.attribute!==me||me&&ee.data!==me.data)return!0;ie++}return l.attributesNum!==ie||l.index!==Z}function y(L,B,q,Z){let J={},j=B.attributes,ie=0,ce=q.getAttributes();for(let Ae in ce)if(ce[Ae].location>=0){let ee=j[Ae];ee===void 0&&(Ae==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),Ae==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));let me={};me.attribute=ee,ee&&ee.data&&(me.data=ee.data),J[Ae]=me,ie++}l.attributes=J,l.attributesNum=ie,l.index=Z}function x(){let L=l.newAttributes;for(let B=0,q=L.length;B<q;B++)L[B]=0}function E(L){P(L,0)}function P(L,B){let q=l.newAttributes,Z=l.enabledAttributes,J=l.attributeDivisors;q[L]=1,Z[L]===0&&(i.enableVertexAttribArray(L),Z[L]=1),J[L]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),J[L]=B)}function w(){let L=l.newAttributes,B=l.enabledAttributes;for(let q=0,Z=B.length;q<Z;q++)B[q]!==L[q]&&(i.disableVertexAttribArray(q),B[q]=0)}function C(L,B,q,Z,J,j,ie){ie===!0?i.vertexAttribIPointer(L,B,q,J,j):i.vertexAttribPointer(L,B,q,Z,J,j)}function W(L,B,q,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let J=Z.attributes,j=q.getAttributes(),ie=B.defaultAttributeValues;for(let ce in j){let Ae=j[ce];if(Ae.location>=0){let X=J[ce];if(X===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let ee=X.normalized,me=X.itemSize,Me=t.get(X);if(Me===void 0)continue;let xe=Me.buffer,Ie=Me.type,Ue=Me.bytesPerElement,Re=n.isWebGL2===!0&&(Ie===i.INT||Ie===i.UNSIGNED_INT||X.gpuType===hf);if(X.isInterleavedBufferAttribute){let Ke=X.data,F=Ke.stride,Tt=X.offset;if(Ke.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Ae.locationSize;Ee++)P(Ae.location+Ee,Ke.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let Ee=0;Ee<Ae.locationSize;Ee++)E(Ae.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Ee=0;Ee<Ae.locationSize;Ee++)C(Ae.location+Ee,me/Ae.locationSize,Ie,ee,F*Ue,(Tt+me/Ae.locationSize*Ee)*Ue,Re)}else{if(X.isInstancedBufferAttribute){for(let Ke=0;Ke<Ae.locationSize;Ke++)P(Ae.location+Ke,X.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ke=0;Ke<Ae.locationSize;Ke++)E(Ae.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Ke=0;Ke<Ae.locationSize;Ke++)C(Ae.location+Ke,me/Ae.locationSize,Ie,ee,me*Ue,me/Ae.locationSize*Ke*Ue,Re)}}else if(ie!==void 0){let ee=ie[ce];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(Ae.location,ee);break;case 3:i.vertexAttrib3fv(Ae.location,ee);break;case 4:i.vertexAttrib4fv(Ae.location,ee);break;default:i.vertexAttrib1fv(Ae.location,ee)}}}}w()}function v(){K();for(let L in a){let B=a[L];for(let q in B){let Z=B[q];for(let J in Z)A(Z[J].object),delete Z[J];delete B[q]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;let B=a[L.id];for(let q in B){let Z=B[q];for(let J in Z)A(Z[J].object),delete Z[J];delete B[q]}delete a[L.id]}function V(L){for(let B in a){let q=a[B];if(q[L.id]===void 0)continue;let Z=q[L.id];for(let J in Z)A(Z[J].object),delete Z[J];delete q[L.id]}}function K(){le(),h=!0,l!==c&&(l=c,p(l.object))}function le(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:K,resetDefaultState:le,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:E,disableUnusedAttributes:w}}function vg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,A;if(s)p=i,A="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[A](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let A=0;A<f;A++)this.render(h[A],u[A]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let A=0;for(let g=0;g<f;g++)A+=u[g];t.update(A,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Mg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=o||e.has("OES_texture_float"),P=x&&E,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:A,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:w}}function bg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new si,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let A=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||A===null||A.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,x=y*4,E=d.clippingState||null;c.value=E,E=h(A,f,x,p);for(let P=0;P!==x;++P)E[P]=t[P];d.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,A){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=c.value,A!==!0||m===null){let d=p+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,E=p;x!==g;++x,E+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Sg(i){let e=new WeakMap;function t(o,a){return a===vc?o.mapping=Bs:a===Mc&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===vc||a===Mc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Cc(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function Eg(i){let e=[],t=[],n=[],s=i,r=i-Ds+1+gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ds?c=gu[o-i+Ds-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,A=6,g=3,m=2,d=1,y=new Float32Array(g*A*p),x=new Float32Array(m*A*p),E=new Float32Array(d*A*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,W=w>2?0:-1,v=[C,W,0,C+2/3,W,0,C+2/3,W+1,0,C,W,0,C+2/3,W+1,0,C,W+1,0];y.set(v,g*A*w),x.set(f,m*A*w);let T=[w,w,w,w,w,w];E.set(T,d*A*w)}let P=new Bt;P.setAttribute("position",new Ct(y,g)),P.setAttribute("uv",new Ct(x,m)),P.setAttribute("faceIndex",new Ct(E,d)),e.push(P),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yu(i,e,t){let n=new ci(i,e,t);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tg(i,e,t){let n=new Float32Array(Ki),s=new R(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function vu(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Mu(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function wg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===vc||c===Mc,h=c===Bs||c===zs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new qo(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new qo(i));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Rg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cg(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let A in f.attributes)e.remove(f.attributes[A]);for(let A in f.morphAttributes){let g=f.morphAttributes[A];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let A in f)e.update(f[A],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let A in p){let g=p[A];for(let m=0,d=g.length;m<d;m++)e.update(g[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,A=u.attributes.position,g=0;if(p!==null){let y=p.array;g=p.version;for(let x=0,E=y.length;x<E;x+=3){let P=y[x+0],w=y[x+1],C=y[x+2];f.push(P,w,w,C,C,P)}}else if(A!==void 0){let y=A.array;g=A.version;for(let x=0,E=y.length/3-1;x<E;x+=3){let P=x+0,w=x+1,C=x+2;f.push(P,w,w,C,C,P)}}else return;let m=new(Mf(f)?Go:Vo)(f,1);m.version=g;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ig(i,e,t,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,A){i.drawElements(r,A,a,p*c),t.update(A,r,1)}function u(p,A,g){if(g===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,A,a,p*c,g),t.update(A,r,g)}function f(p,A,g){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<g;d++)this.render(p[d]/c,A[d]);else{m.multiDrawElementsWEBGL(r,A,0,a,p,0,g);let d=0;for(let y=0;y<g;y++)d+=A[y];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Pg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lg(i,e){return i[0]-e[0]}function Dg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ng(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new it,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,A=p!==void 0?p.length:0,g=r.get(h);if(g===void 0||g.count!==A){let L=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],W=0;y===!0&&(W=1),x===!0&&(W=2),E===!0&&(W=3);let v=h.attributes.position.count*W,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let V=new Float32Array(v*T*4*A),K=new ko(V,v,T,A);K.type=ri,K.needsUpdate=!0;let le=W*4;for(let B=0;B<A;B++){let q=P[B],Z=w[B],J=C[B],j=v*T*4*B;for(let ie=0;ie<q.count;ie++){let ce=ie*le;y===!0&&(o.fromBufferAttribute(q,ie),V[j+ce+0]=o.x,V[j+ce+1]=o.y,V[j+ce+2]=o.z,V[j+ce+3]=0),x===!0&&(o.fromBufferAttribute(Z,ie),V[j+ce+4]=o.x,V[j+ce+5]=o.y,V[j+ce+6]=o.z,V[j+ce+7]=0),E===!0&&(o.fromBufferAttribute(J,ie),V[j+ce+8]=o.x,V[j+ce+9]=o.y,V[j+ce+10]=o.z,V[j+ce+11]=J.itemSize===4?o.w:1)}}g={count:A,texture:K,size:new De(v,T)},r.set(h,g),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let p=f===void 0?0:f.length,A=n[h.id];if(A===void 0||A.length!==p){A=[];for(let x=0;x<p;x++)A[x]=[x,0];n[h.id]=A}for(let x=0;x<p;x++){let E=A[x];E[0]=x,E[1]=f[x]}A.sort(Dg);for(let x=0;x<8;x++)x<p&&A[x][1]?(a[x][0]=A[x][0],a[x][1]=A[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Lg);let g=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let E=a[x],P=E[0],w=E[1];P!==Number.MAX_SAFE_INTEGER&&w?(g&&h.getAttribute("morphTarget"+x)!==g[P]&&h.setAttribute("morphTarget"+x,g[P]),m&&h.getAttribute("morphNormal"+x)!==m[P]&&h.setAttribute("morphNormal"+x,m[P]),s[x]=w,d+=w):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Ug(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}function Qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bu[s];if(r===void 0&&(r=new Float32Array(s),bu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fa(i,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function kg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;wu.set(n),i.uniformMatrix2fv(this.addr,!1,wu),Lt(t,n)}}function Hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),Lt(t,n)}}function Vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Eu.set(n),i.uniformMatrix4fv(this.addr,!1,Eu),Lt(t,n)}}function Gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Yg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Jg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?wf:Tf;t.setTexture2D(e||r,s)}function Qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cf,s)}function $g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||If,s)}function ex(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rf,s)}function tx(i){switch(i){case 5126:return Og;case 35664:return Fg;case 35665:return Bg;case 35666:return zg;case 35674:return kg;case 35675:return Hg;case 35676:return Vg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Kg;case 36295:return jg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return ex}}function nx(i,e){i.uniform1fv(this.addr,e)}function ix(i,e){let t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function sx(i,e){let t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function rx(i,e){let t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function ox(i,e){let t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ax(i,e){let t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cx(i,e){let t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lx(i,e){i.uniform1iv(this.addr,e)}function hx(i,e){i.uniform2iv(this.addr,e)}function ux(i,e){i.uniform3iv(this.addr,e)}function fx(i,e){i.uniform4iv(this.addr,e)}function dx(i,e){i.uniform1uiv(this.addr,e)}function px(i,e){i.uniform2uiv(this.addr,e)}function mx(i,e){i.uniform3uiv(this.addr,e)}function Ax(i,e){i.uniform4uiv(this.addr,e)}function gx(i,e,t){let n=this.cache,s=e.length,r=fa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Tf,r[o])}function xx(i,e,t){let n=this.cache,s=e.length,r=fa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cf,r[o])}function _x(i,e,t){let n=this.cache,s=e.length,r=fa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||If,r[o])}function yx(i,e,t){let n=this.cache,s=e.length,r=fa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rf,r[o])}function vx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ox;case 35675:return ax;case 35676:return cx;case 5124:case 35670:return lx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return fx;case 5125:return dx;case 36294:return px;case 36295:return mx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return yx}}function Ru(i,e){i.seq.push(e),i.map[e.id]=e}function Mx(i,e,t){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),o=fc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ru(t,l===void 0?new Ic(a,i,e):new Pc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Lc(a),Ru(t,u)),t=u}}}function Cu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Ex(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Tx(i){let e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(i),n;switch(e===t?n="":e===Uo&&t===No?n="LinearDisplayP3ToLinearSRGB":e===No&&t===Uo&&(n="LinearSRGBToLinearDisplayP3"),i){case It:case ua:return[n,"LinearTransferOETF"];case $e:case ol:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Iu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ex(i.getShaderSource(e),o)}else return s}function wx(i,e){let t=Tx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rx(i,e){let t;switch(e){case Dp:t="Linear";break;case Np:t="Reinhard";break;case Up:t="OptimizedCineon";break;case il:t="ACESFilmic";break;case Fp:t="AgX";break;case Op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function Ix(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function Px(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ns(i){return i!==""}function Pu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Dc(i){return i.replace(Dx,Ux)}function Ux(i,e){let t=Ge[e];if(t===void 0){let n=Nx.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}function Du(i){return i.replace(Ox,Fx)}function Fx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===af?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function zx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Hx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cf:e="ENVMAP_BLENDING_MULTIPLY";break;case Pp:e="ENVMAP_BLENDING_MIX";break;case Lp:e="ENVMAP_BLENDING_ADD";break}return e}function Vx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Bx(t),l=zx(t),h=kx(t),u=Hx(t),f=Vx(t),p=t.isWebGL2?"":Cx(t),A=Ix(t),g=Px(r),m=s.createProgram(),d,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),d.length>0&&(d+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),y.length>0&&(y+=`
`)):(d=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),y=[p,Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Si?Rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,wx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=Dc(o),o=Pu(o,t),o=Lu(o,t),a=Dc(a),a=Pu(a,t),a=Lu(a,t),o=Du(o),a=Du(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let E=x+d+o,P=x+y+a,w=Cu(s,s.VERTEX_SHADER,E),C=Cu(s,s.FRAGMENT_SHADER,P);s.attachShader(m,w),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function W(K){if(i.debug.checkShaderErrors){let le=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(w).trim(),B=s.getShaderInfoLog(C).trim(),q=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,C);else{let J=Iu(s,w,"vertex"),j=Iu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+J+`
`+j)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(L===""||B==="")&&(Z=!1);Z&&(K.diagnostics={runnable:q,programLog:le,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:y}})}s.deleteShader(w),s.deleteShader(C),v=new Fs(s,m),T=Lx(s,m)}let v;this.getUniforms=function(){return v===void 0&&W(this),v};let T;this.getAttributes=function(){return T===void 0&&W(this),T};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(m,bx)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=C,this}function Xx(i,e,t,n,s,r,o){let a=new Rr,c=new Nc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===0?"uv":`uv${v}`}function m(v,T,V,K,le){let L=K.fog,B=le.geometry,q=v.isMeshStandardMaterial?K.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),J=Z&&Z.mapping===la?Z.image.height:null,j=A[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ce=ie!==void 0?ie.length:0,Ae=0;B.morphAttributes.position!==void 0&&(Ae=1),B.morphAttributes.normal!==void 0&&(Ae=2),B.morphAttributes.color!==void 0&&(Ae=3);let X,ee,me,Me;if(j){let Zt=Bn[j];X=Zt.vertexShader,ee=Zt.fragmentShader}else X=v.vertexShader,ee=v.fragmentShader,c.update(v),me=c.getVertexShaderID(v),Me=c.getFragmentShaderID(v);let xe=i.getRenderTarget(),Ie=le.isInstancedMesh===!0,Ue=le.isBatchedMesh===!0,Re=!!v.map,Ke=!!v.matcap,F=!!Z,Tt=!!v.aoMap,Ee=!!v.lightMap,Oe=!!v.bumpMap,_e=!!v.normalMap,ht=!!v.displacementMap,Fe=!!v.emissiveMap,S=!!v.metalnessMap,_=!!v.roughnessMap,z=v.anisotropy>0,re=v.clearcoat>0,te=v.iridescence>0,oe=v.sheen>0,ye=v.transmission>0,pe=z&&!!v.anisotropyMap,M=re&&!!v.clearcoatMap,N=re&&!!v.clearcoatNormalMap,U=re&&!!v.clearcoatRoughnessMap,D=te&&!!v.iridescenceMap,Y=te&&!!v.iridescenceThicknessMap,ae=oe&&!!v.sheenColorMap,ne=oe&&!!v.sheenRoughnessMap,Q=!!v.specularMap,$=!!v.specularColorMap,ue=!!v.specularIntensityMap,Te=ye&&!!v.transmissionMap,Ve=ye&&!!v.thicknessMap,ve=!!v.gradientMap,se=!!v.alphaMap,I=v.alphaTest>0,fe=!!v.alphaHash,de=!!v.extensions,Pe=!!B.attributes.uv1,we=!!B.attributes.uv2,ot=!!B.attributes.uv3,at=Si;return v.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(at=i.toneMapping),{isWebGL2:h,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:ee,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ue,instancing:Ie,instancingColor:Ie&&le.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:It,map:Re,matcap:Ke,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:J,aoMap:Tt,lightMap:Ee,bumpMap:Oe,normalMap:_e,displacementMap:f&&ht,emissiveMap:Fe,normalMapObjectSpace:_e&&v.normalMapType===Zp,normalMapTangentSpace:_e&&v.normalMapType===_f,metalnessMap:S,roughnessMap:_,anisotropy:z,anisotropyMap:pe,clearcoat:re,clearcoatMap:M,clearcoatNormalMap:N,clearcoatRoughnessMap:U,iridescence:te,iridescenceMap:D,iridescenceThicknessMap:Y,sheen:oe,sheenColorMap:ae,sheenRoughnessMap:ne,specularMap:Q,specularColorMap:$,specularIntensityMap:ue,transmission:ye,transmissionMap:Te,thicknessMap:Ve,gradientMap:ve,opaque:v.transparent===!1&&v.blending===Us,alphaMap:se,alphaTest:I,alphaHash:fe,combine:v.combine,mapUv:Re&&g(v.map.channel),aoMapUv:Tt&&g(v.aoMap.channel),lightMapUv:Ee&&g(v.lightMap.channel),bumpMapUv:Oe&&g(v.bumpMap.channel),normalMapUv:_e&&g(v.normalMap.channel),displacementMapUv:ht&&g(v.displacementMap.channel),emissiveMapUv:Fe&&g(v.emissiveMap.channel),metalnessMapUv:S&&g(v.metalnessMap.channel),roughnessMapUv:_&&g(v.roughnessMap.channel),anisotropyMapUv:pe&&g(v.anisotropyMap.channel),clearcoatMapUv:M&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:N&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ne&&g(v.sheenRoughnessMap.channel),specularMapUv:Q&&g(v.specularMap.channel),specularColorMapUv:$&&g(v.specularColorMap.channel),specularIntensityMapUv:ue&&g(v.specularIntensityMap.channel),transmissionMapUv:Te&&g(v.transmissionMap.channel),thicknessMapUv:Ve&&g(v.thicknessMap.channel),alphaMapUv:se&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(_e||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:we,vertexUv3s:ot,pointsUvs:le.isPoints===!0&&!!B.attributes.uv&&(Re||se),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:le.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&Qe.getTransfer(v.map.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===an,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:de&&v.extensions.derivatives===!0,extensionFragDepth:de&&v.extensions.fragDepth===!0,extensionDrawBuffers:de&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let V in v.defines)T.push(V),T.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(y(T,v),x(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function y(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function E(v){let T=A[v.type],V;if(T){let K=Bn[T];V=Nm.clone(K.uniforms)}else V=v.uniforms;return V}function P(v,T){let V;for(let K=0,le=l.length;K<le;K++){let L=l[K];if(L.cacheKey===T){V=L,++V.usedTimes;break}}return V===void 0&&(V=new Gx(i,T,v,r),l.push(V)),V}function w(v){if(--v.usedTimes===0){let T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function C(v){c.remove(v)}function W(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:P,releaseProgram:w,releaseShaderCache:C,programs:l,dispose:W}}function qx(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Yx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Uu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ou(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,A,g,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:A,renderOrder:u.renderOrder,z:g,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=A,d.renderOrder=u.renderOrder,d.z=g,d.group=m),e++,d}function a(u,f,p,A,g,m){let d=o(u,f,p,A,g,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,A,g,m){let d=o(u,f,p,A,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||Yx),n.length>1&&n.sort(f||Uu),s.length>1&&s.sort(f||Uu)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Kx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ou,i.set(n,[o])):s>=r.length?(o=new Ou,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Se};break;case"SpotLight":t={position:new R,direction:new R,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Zx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Qx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $x(i,e){let t=new jx,n=Zx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new He,a=new He;function c(h,u){let f=0,p=0,A=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let g=0,m=0,d=0,y=0,x=0,E=0,P=0,w=0,C=0,W=0,v=0;h.sort(Qx);let T=u===!0?Math.PI:1;for(let K=0,le=h.length;K<le;K++){let L=h[K],B=L.color,q=L.intensity,Z=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=B.r*q*T,p+=B.g*q*T,A+=B.b*q*T;else if(L.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(L.sh.coefficients[j],q);v++}else if(L.isDirectionalLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){let ie=L.shadow,ce=n.get(L);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,s.directionalShadow[g]=ce,s.directionalShadowMap[g]=J,s.directionalShadowMatrix[g]=L.shadow.matrix,E++}s.directional[g]=j,g++}else if(L.isSpotLight){let j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(B).multiplyScalar(q*T),j.distance=Z,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,s.spot[d]=j;let ie=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,ie.updateMatrices(L),L.castShadow&&W++),s.spotLightMatrix[d]=ie.matrix,L.castShadow){let ce=n.get(L);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,s.spotShadow[d]=ce,s.spotShadowMap[d]=J,w++}d++}else if(L.isRectAreaLight){let j=t.get(L);j.color.copy(B).multiplyScalar(q),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=j,y++}else if(L.isPointLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*T),j.distance=L.distance,j.decay=L.decay,L.castShadow){let ie=L.shadow,ce=n.get(L);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,ce.shadowCameraNear=ie.camera.near,ce.shadowCameraFar=ie.camera.far,s.pointShadow[m]=ce,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,P++}s.point[m]=j,m++}else if(L.isHemisphereLight){let j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(q*T),j.groundColor.copy(L.groundColor).multiplyScalar(q*T),s.hemi[x]=j,x++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=A;let V=s.hash;(V.directionalLength!==g||V.pointLength!==m||V.spotLength!==d||V.rectAreaLength!==y||V.hemiLength!==x||V.numDirectionalShadows!==E||V.numPointShadows!==P||V.numSpotShadows!==w||V.numSpotMaps!==C||V.numLightProbes!==v)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=w+C-W,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=v,V.directionalLength=g,V.pointLength=m,V.spotLength=d,V.rectAreaLength=y,V.hemiLength=x,V.numDirectionalShadows=E,V.numPointShadows=P,V.numSpotShadows=w,V.numSpotMaps=C,V.numLightProbes=v,s.version=Jx++)}function l(h,u){let f=0,p=0,A=0,g=0,m=0,d=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let E=h[y];if(E.isDirectionalLight){let P=s.directional[f];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(E.isSpotLight){let P=s.spot[A];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),A++}else if(E.isRectAreaLight){let P=s.rectArea[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let P=s.point[p];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function Fu(i,e){let t=new $x(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function e_(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Fu(i,e),t.set(r,[c])):o>=a.length?(c=new Fu(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}function i_(i,e,t){let n=new Cr,s=new De,r=new De,o=new it,a=new Oc({depthPacking:jp}),c=new Fc,l={},h=t.maxTextureSize,u={[kn]:an,[an]:kn,[on]:on},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:t_,fragmentShader:n_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let A=new Bt;A.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new yt(A,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let d=this.type;this.render=function(w,C,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let v=i.getRenderTarget(),T=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),K=i.state;K.setBlending(bi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let le=d!==ii&&this.type===ii,L=d===ii&&this.type!==ii;for(let B=0,q=w.length;B<q;B++){let Z=w[B],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let j=J.getFrameExtents();if(s.multiply(j),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,J.mapSize.y=r.y)),J.map===null||le===!0||L===!0){let ce=this.type!==ii?{minFilter:wt,magFilter:wt}:{};J.map!==null&&J.map.dispose(),J.map=new ci(s.x,s.y,ce),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let ie=J.getViewportCount();for(let ce=0;ce<ie;ce++){let Ae=J.getViewport(ce);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),K.viewport(o),J.updateMatrices(Z,ce),n=J.getFrustum(),E(C,W,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===ii&&y(J,W),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(v,T,V)};function y(w,C){let W=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ci(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,W,f,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,W,p,g,null)}function x(w,C,W,v){let T=null,V=W.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(V!==void 0)T=V;else if(T=W.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let K=T.uuid,le=C.uuid,L=l[K];L===void 0&&(L={},l[K]=L);let B=L[le];B===void 0&&(B=T.clone(),L[le]=B,C.addEventListener("dispose",P)),T=B}if(T.visible=C.visible,T.wireframe=C.wireframe,v===ii?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,W.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let K=i.properties.get(T);K.light=W}return T}function E(w,C,W,v,T){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===ii)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld);let le=e.update(w),L=w.material;if(Array.isArray(L)){let B=le.groups;for(let q=0,Z=B.length;q<Z;q++){let J=B[q],j=L[J.materialIndex];if(j&&j.visible){let ie=x(w,j,v,T);w.onBeforeShadow(i,w,C,W,le,ie,J),i.renderBufferDirect(W,null,le,ie,w,J),w.onAfterShadow(i,w,C,W,le,ie,J)}}}else if(L.visible){let B=x(w,L,v,T);w.onBeforeShadow(i,w,C,W,le,B,null),i.renderBufferDirect(W,null,le,B,w,null),w.onAfterShadow(i,w,C,W,le,B,null)}}let K=w.children;for(let le=0,L=K.length;le<L;le++)E(K[le],C,W,v,T)}function P(w){w.target.removeEventListener("dispose",P);for(let W in l){let v=l[W],T=w.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}function s_(i,e,t){let n=t.isWebGL2;function s(){let I=!1,fe=new it,de=null,Pe=new it(0,0,0,0);return{setMask:function(we){de!==we&&!I&&(i.colorMask(we,we,we,we),de=we)},setLocked:function(we){I=we},setClear:function(we,ot,at,Nt,Zt){Zt===!0&&(we*=Nt,ot*=Nt,at*=Nt),fe.set(we,ot,at,Nt),Pe.equals(fe)===!1&&(i.clearColor(we,ot,at,Nt),Pe.copy(fe))},reset:function(){I=!1,de=null,Pe.set(-1,0,0,0)}}}function r(){let I=!1,fe=null,de=null,Pe=null;return{setTest:function(we){we?Ue(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(we){fe!==we&&!I&&(i.depthMask(we),fe=we)},setFunc:function(we){if(de!==we){switch(we){case Sp:i.depthFunc(i.NEVER);break;case Ep:i.depthFunc(i.ALWAYS);break;case Tp:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case wp:i.depthFunc(i.EQUAL);break;case Rp:i.depthFunc(i.GEQUAL);break;case Cp:i.depthFunc(i.GREATER);break;case Ip:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=we}},setLocked:function(we){I=we},setClear:function(we){Pe!==we&&(i.clearDepth(we),Pe=we)},reset:function(){I=!1,fe=null,de=null,Pe=null}}}function o(){let I=!1,fe=null,de=null,Pe=null,we=null,ot=null,at=null,Nt=null,Zt=null;return{setTest:function(ct){I||(ct?Ue(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(ct){fe!==ct&&!I&&(i.stencilMask(ct),fe=ct)},setFunc:function(ct,Jt,Fn){(de!==ct||Pe!==Jt||we!==Fn)&&(i.stencilFunc(ct,Jt,Fn),de=ct,Pe=Jt,we=Fn)},setOp:function(ct,Jt,Fn){(ot!==ct||at!==Jt||Nt!==Fn)&&(i.stencilOp(ct,Jt,Fn),ot=ct,at=Jt,Nt=Fn)},setLocked:function(ct){I=ct},setClear:function(ct){Zt!==ct&&(i.clearStencil(ct),Zt=ct)},reset:function(){I=!1,fe=null,de=null,Pe=null,we=null,ot=null,at=null,Nt=null,Zt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},p={},A=new WeakMap,g=[],m=null,d=!1,y=null,x=null,E=null,P=null,w=null,C=null,W=null,v=new Se(0,0,0),T=0,V=!1,K=null,le=null,L=null,B=null,q=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,j=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=j>=1):ie.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=j>=2);let ce=null,Ae={},X=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),me=new it().fromArray(X),Me=new it().fromArray(ee);function xe(I,fe,de,Pe){let we=new Uint8Array(4),ot=i.createTexture();i.bindTexture(I,ot),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<de;at++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(fe,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(fe+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return ot}let Ie={};Ie[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ue(i.DEPTH_TEST),c.setFunc(Po),Fe(!1),S(gh),Ue(i.CULL_FACE),_e(bi);function Ue(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function Re(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function Ke(I,fe){return p[I]!==fe?(i.bindFramebuffer(I,fe),p[I]=fe,n&&(I===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=fe),I===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=fe)),!0):!1}function F(I,fe){let de=g,Pe=!1;if(I)if(de=A.get(fe),de===void 0&&(de=[],A.set(fe,de)),I.isWebGLMultipleRenderTargets){let we=I.texture;if(de.length!==we.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,at=we.length;ot<at;ot++)de[ot]=i.COLOR_ATTACHMENT0+ot;de.length=we.length,Pe=!0}}else de[0]!==i.COLOR_ATTACHMENT0&&(de[0]=i.COLOR_ATTACHMENT0,Pe=!0);else de[0]!==i.BACK&&(de[0]=i.BACK,Pe=!0);Pe&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Tt(I){return m!==I?(i.useProgram(I),m=I,!0):!1}let Ee={[Yi]:i.FUNC_ADD,[lp]:i.FUNC_SUBTRACT,[hp]:i.FUNC_REVERSE_SUBTRACT};if(n)Ee[vh]=i.MIN,Ee[Mh]=i.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(Ee[vh]=I.MIN_EXT,Ee[Mh]=I.MAX_EXT)}let Oe={[up]:i.ZERO,[fp]:i.ONE,[dp]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[_p]:i.SRC_ALPHA_SATURATE,[gp]:i.DST_COLOR,[mp]:i.DST_ALPHA,[pp]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[xp]:i.ONE_MINUS_DST_COLOR,[Ap]:i.ONE_MINUS_DST_ALPHA,[yp]:i.CONSTANT_COLOR,[vp]:i.ONE_MINUS_CONSTANT_COLOR,[Mp]:i.CONSTANT_ALPHA,[bp]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(I,fe,de,Pe,we,ot,at,Nt,Zt,ct){if(I===bi){d===!0&&(Re(i.BLEND),d=!1);return}if(d===!1&&(Ue(i.BLEND),d=!0),I!==cp){if(I!==y||ct!==V){if((x!==Yi||w!==Yi)&&(i.blendEquation(i.FUNC_ADD),x=Yi,w=Yi),ct)switch(I){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.ONE,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,P=null,C=null,W=null,v.set(0,0,0),T=0,y=I,V=ct}return}we=we||fe,ot=ot||de,at=at||Pe,(fe!==x||we!==w)&&(i.blendEquationSeparate(Ee[fe],Ee[we]),x=fe,w=we),(de!==E||Pe!==P||ot!==C||at!==W)&&(i.blendFuncSeparate(Oe[de],Oe[Pe],Oe[ot],Oe[at]),E=de,P=Pe,C=ot,W=at),(Nt.equals(v)===!1||Zt!==T)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Zt),v.copy(Nt),T=Zt),y=I,V=!1}function ht(I,fe){I.side===on?Re(i.CULL_FACE):Ue(i.CULL_FACE);let de=I.side===an;fe&&(de=!de),Fe(de),I.blending===Us&&I.transparent===!1?_e(bi):_e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let Pe=I.stencilWrite;l.setTest(Pe),Pe&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),z(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){K!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),K=I)}function S(I){I!==op?(Ue(i.CULL_FACE),I!==le&&(I===gh?i.cullFace(i.BACK):I===ap?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),le=I}function _(I){I!==L&&(J&&i.lineWidth(I),L=I)}function z(I,fe,de){I?(Ue(i.POLYGON_OFFSET_FILL),(B!==fe||q!==de)&&(i.polygonOffset(fe,de),B=fe,q=de)):Re(i.POLYGON_OFFSET_FILL)}function re(I){I?Ue(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function te(I){I===void 0&&(I=i.TEXTURE0+Z-1),ce!==I&&(i.activeTexture(I),ce=I)}function oe(I,fe,de){de===void 0&&(ce===null?de=i.TEXTURE0+Z-1:de=ce);let Pe=Ae[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},Ae[de]=Pe),(Pe.type!==I||Pe.texture!==fe)&&(ce!==de&&(i.activeTexture(de),ce=de),i.bindTexture(I,fe||Ie[I]),Pe.type=I,Pe.texture=fe)}function ye(){let I=Ae[ce];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function M(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function U(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){me.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),me.copy(I))}function Te(I){Me.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Me.copy(I))}function Ve(I,fe){let de=u.get(fe);de===void 0&&(de=new WeakMap,u.set(fe,de));let Pe=de.get(I);Pe===void 0&&(Pe=i.getUniformBlockIndex(fe,I.name),de.set(I,Pe))}function ve(I,fe){let Pe=u.get(fe).get(I);h.get(fe)!==Pe&&(i.uniformBlockBinding(fe,Pe,I.__bindingPointIndex),h.set(fe,Pe))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ce=null,Ae={},p={},A=new WeakMap,g=[],m=null,d=!1,y=null,x=null,E=null,P=null,w=null,C=null,W=null,v=new Se(0,0,0),T=0,V=!1,K=null,le=null,L=null,B=null,q=null,me.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ue,disable:Re,bindFramebuffer:Ke,drawBuffers:F,useProgram:Tt,setBlending:_e,setMaterial:ht,setFlipSided:Fe,setCullFace:S,setLineWidth:_,setPolygonOffset:z,setScissorTest:re,activeTexture:te,bindTexture:oe,unbindTexture:ye,compressedTexImage2D:pe,compressedTexImage3D:M,texImage2D:Q,texImage3D:$,updateUBOMapping:Ve,uniformBlockBinding:ve,texStorage2D:ae,texStorage3D:ne,texSubImage2D:N,texSubImage3D:U,compressedTexSubImage2D:D,compressedTexSubImage3D:Y,scissor:ue,viewport:Te,reset:se}}function r_(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,_){return p?new OffscreenCanvas(S,_):wr("canvas")}function g(S,_,z,re){let te=1;if((S.width>re||S.height>re)&&(te=re/Math.max(S.width,S.height)),te<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let oe=_?Fo:Math.floor,ye=oe(te*S.width),pe=oe(te*S.height);u===void 0&&(u=A(ye,pe));let M=z?A(ye,pe):u;return M.width=ye,M.height=pe,M.getContext("2d").drawImage(S,0,0,ye,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ye+"x"+pe+")."),M}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Ec(S.width)&&Ec(S.height)}function d(S){return a?!1:S.wrapS!==Ft||S.wrapT!==Ft||S.minFilter!==wt&&S.minFilter!==en}function y(S,_){return S.generateMipmaps&&_&&S.minFilter!==wt&&S.minFilter!==en}function x(S){i.generateMipmap(S)}function E(S,_,z,re,te=!1){if(a===!1)return _;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let oe=_;if(_===i.RED&&(z===i.FLOAT&&(oe=i.R32F),z===i.HALF_FLOAT&&(oe=i.R16F),z===i.UNSIGNED_BYTE&&(oe=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(oe=i.R8UI),z===i.UNSIGNED_SHORT&&(oe=i.R16UI),z===i.UNSIGNED_INT&&(oe=i.R32UI),z===i.BYTE&&(oe=i.R8I),z===i.SHORT&&(oe=i.R16I),z===i.INT&&(oe=i.R32I)),_===i.RG&&(z===i.FLOAT&&(oe=i.RG32F),z===i.HALF_FLOAT&&(oe=i.RG16F),z===i.UNSIGNED_BYTE&&(oe=i.RG8)),_===i.RGBA){let ye=te?Do:Qe.getTransfer(re);z===i.FLOAT&&(oe=i.RGBA32F),z===i.HALF_FLOAT&&(oe=i.RGBA16F),z===i.UNSIGNED_BYTE&&(oe=ye===ut?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function P(S,_,z){return y(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==wt&&S.minFilter!==en?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function w(S){return S===wt||S===Lo||S===yr?i.NEAREST:i.LINEAR}function C(S){let _=S.target;_.removeEventListener("dispose",C),v(_),_.isVideoTexture&&h.delete(_)}function W(S){let _=S.target;_.removeEventListener("dispose",W),V(_)}function v(S){let _=n.get(S);if(_.__webglInit===void 0)return;let z=S.source,re=f.get(z);if(re){let te=re[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(S),Object.keys(re).length===0&&f.delete(z)}n.remove(S)}function T(S){let _=n.get(S);i.deleteTexture(_.__webglTexture);let z=S.source,re=f.get(z);delete re[_.__cacheKey],o.memory.textures--}function V(S){let _=S.texture,z=n.get(S),re=n.get(_);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let oe=0;oe<z.__webglFramebuffer[te].length;oe++)i.deleteFramebuffer(z.__webglFramebuffer[te][oe]);else i.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)i.deleteFramebuffer(z.__webglFramebuffer[te]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let te=0,oe=_.length;te<oe;te++){let ye=n.get(_[te]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(_[te])}n.remove(_),n.remove(S)}let K=0;function le(){K=0}function L(){let S=K;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),K+=1,S}function B(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function q(S,_){let z=n.get(S);if(S.isVideoTexture&&ht(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){let re=S.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(z,S,_);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function Z(S,_){let z=n.get(S);if(S.version>0&&z.__version!==S.version){me(z,S,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function J(S,_){let z=n.get(S);if(S.version>0&&z.__version!==S.version){me(z,S,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function j(S,_){let z=n.get(S);if(S.version>0&&z.__version!==S.version){Me(z,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let ie={[ai]:i.REPEAT,[Ft]:i.CLAMP_TO_EDGE,[Er]:i.MIRRORED_REPEAT},ce={[wt]:i.NEAREST,[Lo]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[sl]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},Ae={[Jp]:i.NEVER,[im]:i.ALWAYS,[Qp]:i.LESS,[yf]:i.LEQUAL,[$p]:i.EQUAL,[nm]:i.GEQUAL,[em]:i.GREATER,[tm]:i.NOTEQUAL};function X(S,_,z){if(z?(i.texParameteri(S,i.TEXTURE_WRAP_S,ie[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ie[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ie[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ce[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ce[_.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==Ft||_.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,w(_.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,w(_.minFilter)),_.minFilter!==wt&&_.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let re=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===wt||_.minFilter!==yr&&_.minFilter!==Ti||_.type===ri&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Tr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(S,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function ee(S,_){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",C));let re=_.source,te=f.get(re);te===void 0&&(te={},f.set(re,te));let oe=B(_);if(oe!==S.__cacheKey){te[oe]===void 0&&(te[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[oe].usedTimes++;let ye=te[S.__cacheKey];ye!==void 0&&(te[S.__cacheKey].usedTimes--,ye.usedTimes===0&&T(_)),S.__cacheKey=oe,S.__webglTexture=te[oe].texture}return z}function me(S,_,z){let re=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(re=i.TEXTURE_3D);let te=ee(S,_),oe=_.source;t.bindTexture(re,S.__webglTexture,i.TEXTURE0+z);let ye=n.get(oe);if(oe.version!==ye.__version||te===!0){t.activeTexture(i.TEXTURE0+z);let pe=Qe.getPrimaries(Qe.workingColorSpace),M=_.colorSpace===yn?null:Qe.getPrimaries(_.colorSpace),N=_.colorSpace===yn||pe===M?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);let U=d(_)&&m(_.image)===!1,D=g(_.image,U,!1,s.maxTextureSize);D=Fe(_,D);let Y=m(D)||a,ae=r.convert(_.format,_.colorSpace),ne=r.convert(_.type),Q=E(_.internalFormat,ae,ne,_.colorSpace,_.isVideoTexture);X(re,_,Y);let $,ue=_.mipmaps,Te=a&&_.isVideoTexture!==!0&&Q!==Af,Ve=ye.__version===void 0||te===!0,ve=P(_,D,Y);if(_.isDepthTexture)Q=i.DEPTH_COMPONENT,a?_.type===ri?Q=i.DEPTH_COMPONENT32F:_.type===vi?Q=i.DEPTH_COMPONENT24:_.type===Zi?Q=i.DEPTH24_STENCIL8:Q=i.DEPTH_COMPONENT16:_.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ji&&Q===i.DEPTH_COMPONENT&&_.type!==rl&&_.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=vi,ne=r.convert(_.type)),_.format===ks&&Q===i.DEPTH_COMPONENT&&(Q=i.DEPTH_STENCIL,_.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Zi,ne=r.convert(_.type))),Ve&&(Te?t.texStorage2D(i.TEXTURE_2D,1,Q,D.width,D.height):t.texImage2D(i.TEXTURE_2D,0,Q,D.width,D.height,0,ae,ne,null));else if(_.isDataTexture)if(ue.length>0&&Y){Te&&Ve&&t.texStorage2D(i.TEXTURE_2D,ve,Q,ue[0].width,ue[0].height);for(let se=0,I=ue.length;se<I;se++)$=ue[se],Te?t.texSubImage2D(i.TEXTURE_2D,se,0,0,$.width,$.height,ae,ne,$.data):t.texImage2D(i.TEXTURE_2D,se,Q,$.width,$.height,0,ae,ne,$.data);_.generateMipmaps=!1}else Te?(Ve&&t.texStorage2D(i.TEXTURE_2D,ve,Q,D.width,D.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,D.width,D.height,ae,ne,D.data)):t.texImage2D(i.TEXTURE_2D,0,Q,D.width,D.height,0,ae,ne,D.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Te&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Q,ue[0].width,ue[0].height,D.depth);for(let se=0,I=ue.length;se<I;se++)$=ue[se],_.format!==_n?ae!==null?Te?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,$.width,$.height,D.depth,ae,$.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Q,$.width,$.height,D.depth,0,$.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,$.width,$.height,D.depth,ae,ne,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Q,$.width,$.height,D.depth,0,ae,ne,$.data)}else{Te&&Ve&&t.texStorage2D(i.TEXTURE_2D,ve,Q,ue[0].width,ue[0].height);for(let se=0,I=ue.length;se<I;se++)$=ue[se],_.format!==_n?ae!==null?Te?t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,$.width,$.height,ae,$.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Q,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage2D(i.TEXTURE_2D,se,0,0,$.width,$.height,ae,ne,$.data):t.texImage2D(i.TEXTURE_2D,se,Q,$.width,$.height,0,ae,ne,$.data)}else if(_.isDataArrayTexture)Te?(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Q,D.width,D.height,D.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,ae,ne,D.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,D.width,D.height,D.depth,0,ae,ne,D.data);else if(_.isData3DTexture)Te?(Ve&&t.texStorage3D(i.TEXTURE_3D,ve,Q,D.width,D.height,D.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,ae,ne,D.data)):t.texImage3D(i.TEXTURE_3D,0,Q,D.width,D.height,D.depth,0,ae,ne,D.data);else if(_.isFramebufferTexture){if(Ve)if(Te)t.texStorage2D(i.TEXTURE_2D,ve,Q,D.width,D.height);else{let se=D.width,I=D.height;for(let fe=0;fe<ve;fe++)t.texImage2D(i.TEXTURE_2D,fe,Q,se,I,0,ae,ne,null),se>>=1,I>>=1}}else if(ue.length>0&&Y){Te&&Ve&&t.texStorage2D(i.TEXTURE_2D,ve,Q,ue[0].width,ue[0].height);for(let se=0,I=ue.length;se<I;se++)$=ue[se],Te?t.texSubImage2D(i.TEXTURE_2D,se,0,0,ae,ne,$):t.texImage2D(i.TEXTURE_2D,se,Q,ae,ne,$);_.generateMipmaps=!1}else Te?(Ve&&t.texStorage2D(i.TEXTURE_2D,ve,Q,D.width,D.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ne,D)):t.texImage2D(i.TEXTURE_2D,0,Q,ae,ne,D);y(_,Y)&&x(re),ye.__version=oe.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Me(S,_,z){if(_.image.length!==6)return;let re=ee(S,_),te=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+z);let oe=n.get(te);if(te.version!==oe.__version||re===!0){t.activeTexture(i.TEXTURE0+z);let ye=Qe.getPrimaries(Qe.workingColorSpace),pe=_.colorSpace===yn?null:Qe.getPrimaries(_.colorSpace),M=_.colorSpace===yn||ye===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,M);let N=_.isCompressedTexture||_.image[0].isCompressedTexture,U=_.image[0]&&_.image[0].isDataTexture,D=[];for(let se=0;se<6;se++)!N&&!U?D[se]=g(_.image[se],!1,!0,s.maxCubemapSize):D[se]=U?_.image[se].image:_.image[se],D[se]=Fe(_,D[se]);let Y=D[0],ae=m(Y)||a,ne=r.convert(_.format,_.colorSpace),Q=r.convert(_.type),$=E(_.internalFormat,ne,Q,_.colorSpace),ue=a&&_.isVideoTexture!==!0,Te=oe.__version===void 0||re===!0,Ve=P(_,Y,ae);X(i.TEXTURE_CUBE_MAP,_,ae);let ve;if(N){ue&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,$,Y.width,Y.height);for(let se=0;se<6;se++){ve=D[se].mipmaps;for(let I=0;I<ve.length;I++){let fe=ve[I];_.format!==_n?ne!==null?ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,fe.width,fe.height,ne,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,$,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,fe.width,fe.height,ne,Q,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,$,fe.width,fe.height,0,ne,Q,fe.data)}}}else{ve=_.mipmaps,ue&&Te&&(ve.length>0&&Ve++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,$,D[0].width,D[0].height));for(let se=0;se<6;se++)if(U){ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,D[se].width,D[se].height,ne,Q,D[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$,D[se].width,D[se].height,0,ne,Q,D[se].data);for(let I=0;I<ve.length;I++){let de=ve[I].image[se].image;ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,de.width,de.height,ne,Q,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,$,de.width,de.height,0,ne,Q,de.data)}}else{ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne,Q,D[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$,ne,Q,D[se]);for(let I=0;I<ve.length;I++){let fe=ve[I];ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,ne,Q,fe.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,$,ne,Q,fe.image[se])}}}y(_,ae)&&x(i.TEXTURE_CUBE_MAP),oe.__version=te.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function xe(S,_,z,re,te,oe){let ye=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),M=E(z.internalFormat,ye,pe,z.colorSpace);if(!n.get(_).__hasExternalTextures){let U=Math.max(1,_.width>>oe),D=Math.max(1,_.height>>oe);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,oe,M,U,D,_.depth,0,ye,pe,null):t.texImage2D(te,oe,M,U,D,0,ye,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),_e(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,te,n.get(z).__webglTexture,0,Oe(_)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,te,n.get(z).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(S,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let re=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||_e(_)){let te=_.depthTexture;te&&te.isDepthTexture&&(te.type===ri?re=i.DEPTH_COMPONENT32F:te.type===vi&&(re=i.DEPTH_COMPONENT24));let oe=Oe(_);_e(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,re,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,re,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){let re=Oe(_);z&&_e(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,_.width,_.height):_e(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let re=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let te=0;te<re.length;te++){let oe=re[te],ye=r.convert(oe.format,oe.colorSpace),pe=r.convert(oe.type),M=E(oe.internalFormat,ye,pe,oe.colorSpace),N=Oe(_);z&&_e(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,M,_.width,_.height):_e(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,M,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,M,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let re=n.get(_.depthTexture).__webglTexture,te=Oe(_);if(_.depthTexture.format===Ji)_e(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(_.depthTexture.format===ks)_e(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Re(S){let _=n.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ue(_.__webglFramebuffer,S)}else if(z){_.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[re]),_.__webglDepthbuffer[re]=i.createRenderbuffer(),Ie(_.__webglDepthbuffer[re],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Ie(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(S,_,z){let re=n.get(S);_!==void 0&&xe(re.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Re(S)}function F(S){let _=S.texture,z=n.get(S),re=n.get(_);S.addEventListener("dispose",W),S.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=_.version,o.memory.textures++);let te=S.isWebGLCubeRenderTarget===!0,oe=S.isWebGLMultipleRenderTargets===!0,ye=m(S)||a;if(te){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let M=0;M<_.mipmaps.length;M++)z.__webglFramebuffer[pe][M]=i.createFramebuffer()}else z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)z.__webglFramebuffer[pe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(oe)if(s.drawBuffers){let pe=S.texture;for(let M=0,N=pe.length;M<N;M++){let U=n.get(pe[M]);U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&_e(S)===!1){let pe=oe?_:[_];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let M=0;M<pe.length;M++){let N=pe[M];z.__webglColorRenderbuffer[M]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[M]);let U=r.convert(N.format,N.colorSpace),D=r.convert(N.type),Y=E(N.internalFormat,U,D,N.colorSpace,S.isXRRenderTarget===!0),ae=Oe(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+M,i.RENDERBUFFER,z.__webglColorRenderbuffer[M])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(z.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),X(i.TEXTURE_CUBE_MAP,_,ye);for(let pe=0;pe<6;pe++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let M=0;M<_.mipmaps.length;M++)xe(z.__webglFramebuffer[pe][M],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,M);else xe(z.__webglFramebuffer[pe],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(_,ye)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let pe=S.texture;for(let M=0,N=pe.length;M<N;M++){let U=pe[M],D=n.get(U);t.bindTexture(i.TEXTURE_2D,D.__webglTexture),X(i.TEXTURE_2D,U,ye),xe(z.__webglFramebuffer,S,U,i.COLOR_ATTACHMENT0+M,i.TEXTURE_2D,0),y(U,ye)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?pe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,re.__webglTexture),X(pe,_,ye),a&&_.mipmaps&&_.mipmaps.length>0)for(let M=0;M<_.mipmaps.length;M++)xe(z.__webglFramebuffer[M],S,_,i.COLOR_ATTACHMENT0,pe,M);else xe(z.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,pe,0);y(_,ye)&&x(pe),t.unbindTexture()}S.depthBuffer&&Re(S)}function Tt(S){let _=m(S)||a,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let re=0,te=z.length;re<te;re++){let oe=z[re];if(y(oe,_)){let ye=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(oe).__webglTexture;t.bindTexture(ye,pe),x(ye),t.unbindTexture()}}}function Ee(S){if(a&&S.samples>0&&_e(S)===!1){let _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,re=S.height,te=i.COLOR_BUFFER_BIT,oe=[],ye=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(S),M=S.isWebGLMultipleRenderTargets===!0;if(M)for(let N=0;N<_.length;N++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let N=0;N<_.length;N++){oe.push(i.COLOR_ATTACHMENT0+N),S.depthBuffer&&oe.push(ye);let U=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(U===!1&&(S.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),M&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[N]),U===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ye])),M){let D=n.get(_[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,z,re,0,0,z,re,te,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),M)for(let N=0;N<_.length;N++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,pe.__webglColorRenderbuffer[N]);let U=n.get(_[N]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Oe(S){return Math.min(s.maxSamples,S.samples)}function _e(S){let _=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ht(S){let _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Fe(S,_){let z=S.colorSpace,re=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Sc||z!==It&&z!==yn&&(Qe.getTransfer(z)===ut?a===!1?e.has("EXT_sRGB")===!0&&re===_n?(S.format=Sc,S.minFilter=en,S.generateMipmaps=!1):_=Bo.sRGBToLinear(_):(re!==_n||te!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}this.allocateTextureUnit=L,this.resetTextureUnits=le,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=Ke,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=_e}function o_(i,e,t){let n=t.isWebGL2;function s(r,o=yn){let a,c=Qe.getTransfer(o);if(r===Ei)return i.UNSIGNED_BYTE;if(r===uf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ff)return i.UNSIGNED_SHORT_5_5_5_1;if(r===zp)return i.BYTE;if(r===kp)return i.SHORT;if(r===rl)return i.UNSIGNED_SHORT;if(r===hf)return i.INT;if(r===vi)return i.UNSIGNED_INT;if(r===ri)return i.FLOAT;if(r===Tr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Hp)return i.ALPHA;if(r===_n)return i.RGBA;if(r===Vp)return i.LUMINANCE;if(r===Gp)return i.LUMINANCE_ALPHA;if(r===Ji)return i.DEPTH_COMPONENT;if(r===ks)return i.DEPTH_STENCIL;if(r===Sc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Wp)return i.RED;if(r===df)return i.RED_INTEGER;if(r===Xp)return i.RG;if(r===pf)return i.RG_INTEGER;if(r===mf)return i.RGBA_INTEGER;if(r===za||r===ka||r===Ha||r===Va)if(c===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===za)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===za)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Va)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sh||r===Eh||r===Th||r===wh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Sh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Eh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Af)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rh||r===Ch)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Rh)return c===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ch)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Ph||r===Lh||r===Dh||r===Nh||r===Uh||r===Oh||r===Fh||r===Bh||r===zh||r===kh||r===Hh||r===Vh||r===Gh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ih)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ph)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ga||r===Wh||r===Xh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ga)return c===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qp||r===qh||r===Yh||r===Kh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ga)return a.COMPRESSED_RED_RGTC1_EXT;if(r===qh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function c_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Sf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),A(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===an&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===an&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function A(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l_(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let E=x.program;n.uniformBlockBinding(y,E)}function l(y,x){let E=s[y.id];E===void 0&&(A(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",m));let P=x.program;n.updateUBOMapping(y,P);let w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function h(y){let x=u();y.__bindingPointIndex=x;let E=i.createBuffer(),P=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],E=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,C=E.length;w<C;w++){let W=Array.isArray(E[w])?E[w]:[E[w]];for(let v=0,T=W.length;v<T;v++){let V=W[v];if(p(V,w,v,P)===!0){let K=V.__offset,le=Array.isArray(V.value)?V.value:[V.value],L=0;for(let B=0;B<le.length;B++){let q=le[B],Z=g(q);typeof q=="number"||typeof q=="boolean"?(V.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,K+L,V.__data)):q.isMatrix3?(V.__data[0]=q.elements[0],V.__data[1]=q.elements[1],V.__data[2]=q.elements[2],V.__data[3]=0,V.__data[4]=q.elements[3],V.__data[5]=q.elements[4],V.__data[6]=q.elements[5],V.__data[7]=0,V.__data[8]=q.elements[6],V.__data[9]=q.elements[7],V.__data[10]=q.elements[8],V.__data[11]=0):(q.toArray(V.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,E,P){let w=y.value,C=x+"_"+E;if(P[C]===void 0)return typeof w=="number"||typeof w=="boolean"?P[C]=w:P[C]=w.clone(),!0;{let W=P[C];if(typeof w=="number"||typeof w=="boolean"){if(W!==w)return P[C]=w,!0}else if(W.equals(w)===!1)return W.copy(w),!0}return!1}function A(y){let x=y.uniforms,E=0,P=16;for(let C=0,W=x.length;C<W;C++){let v=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,V=v.length;T<V;T++){let K=v[T],le=Array.isArray(K.value)?K.value:[K.value];for(let L=0,B=le.length;L<B;L++){let q=le[L],Z=g(q),J=E%P;J!==0&&P-J<Z.boundary&&(E+=P-J),K.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=Z.storage}}}let w=E%P;return w>0&&(E+=P-w),y.__size=E,y.__cache={},this}function g(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}function So(i,e,t,n,s,r){Ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(mr.x=r*Ps.x-s*Ps.y,mr.y=s*Ps.x+r*Ps.y):mr.copy(Ps),i.copy(e),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(Pf)}function ef(i,e,t,n,s,r,o){let a=Vc.distanceSqToPoint(i);if(a<t){let c=new R;Vc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function Io(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function d_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function p_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function tf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Lf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function m_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hi;case"vector":case"vector2":case"vector3":case"vector4":return ui;case"color":return na;case"quaternion":return Hn;case"bool":case"boolean":return Ii;case"string":return Pi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function A_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=m_(i.type);if(i.times===void 0){let t=[],n=[];Lf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function of(i,e){return i.distance-e.distance}function el(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)el(s[r],e,t,!0)}}var tl,op,gh,ap,af,nl,ii,kn,an,on,bi,Us,xh,_h,yh,cp,Yi,lp,hp,vh,Mh,up,fp,dp,pp,_c,yc,mp,Ap,gp,xp,_p,yp,vp,Mp,bp,Sp,Ep,Tp,Po,wp,Rp,Cp,Ip,cf,Pp,Lp,Si,Dp,Np,Up,il,Op,Fp,bh,Bp,lf,Bs,zs,vc,Mc,la,ai,Ft,Er,wt,Lo,yr,en,sl,Ti,Ei,zp,kp,rl,hf,vi,ri,Tr,uf,ff,Zi,Hp,_n,Vp,Gp,Ji,ks,Wp,df,Xp,pf,mf,za,ka,Ha,Va,Sh,Eh,Th,wh,Af,Rh,Ch,Ih,Ph,Lh,Dh,Nh,Uh,Oh,Fh,Bh,zh,kh,Hh,Vh,Gh,Ga,Wh,Xh,qp,qh,Yh,Kh,Hs,$i,Wa,jh,Zh,Jh,Yp,gf,ha,Br,xf,Qi,Kp,jp,_f,Zp,yn,$e,It,ol,ua,Do,ut,No,Uo,fs,Qh,Jp,Qp,$p,yf,em,tm,nm,im,bc,$h,Sc,oi,Oo,wi,qt,eu,vr,Vs,vf,De,qe,Xa,tu,nu,iu,$r,_m,Qe,ds,Bo,ym,zo,vm,Ht,it,Tc,ci,ko,wc,Dn,R,Ka,su,pt,Jn,Cn,eo,ps,ms,As,Ai,gi,Vi,hr,to,no,Gi,Mm,ur,Za,mn,Qn,Ja,io,xi,Qa,so,$a,es,He,gs,In,bm,Sm,_i,ro,dn,ru,ou,Ho,Rr,Em,au,xs,$n,oo,fr,Tm,wm,cu,lu,hu,Rm,Cm,mt,Pn,ei,ec,ti,_s,ys,uu,tc,nc,ic,ao,ji,bf,yi,co,Se,Yt,Im,cn,Vt,St,lo,Ct,Vo,Go,st,Pm,xn,rc,vs,pn,dr,Ot,Bt,fu,Wi,ho,du,Ms,bs,Ss,oc,uo,fo,po,mo,pu,mu,Au,Ao,go,yt,vn,Nm,Um,Om,li,Wo,Rt,Es,Ts,Rc,Xo,Cc,ac,Fm,Bm,si,Xi,_o,Cr,zt,km,Hm,Vm,Gm,Wm,Xm,qm,Ym,Km,jm,Zm,Jm,Qm,$m,e0,t0,n0,i0,s0,r0,o0,a0,c0,l0,h0,u0,f0,d0,p0,m0,A0,g0,x0,_0,y0,v0,M0,b0,S0,E0,T0,w0,R0,C0,I0,P0,L0,D0,N0,U0,O0,F0,B0,z0,k0,H0,V0,G0,W0,X0,q0,Y0,K0,j0,Z0,J0,Q0,$0,eA,tA,nA,iA,sA,rA,oA,aA,cA,lA,hA,uA,fA,dA,pA,mA,AA,gA,xA,_A,yA,vA,MA,bA,SA,EA,TA,wA,RA,CA,IA,PA,LA,DA,NA,UA,OA,FA,BA,zA,kA,HA,VA,GA,WA,XA,qA,YA,KA,jA,ZA,JA,QA,$A,eg,tg,ng,ig,sg,rg,og,ag,cg,lg,hg,ug,fg,dg,pg,mg,Ag,gg,xg,Ge,he,Bn,yo,Ws,Ds,gu,Ki,cc,xu,lc,hc,uc,qi,ws,_u,qo,Yo,Tf,wf,Rf,Cf,If,bu,Su,Eu,Tu,wu,Ic,Pc,Lc,fc,Fs,bx,Sx,Dx,Nx,Ox,Wx,Nc,Uc,Jx,Oc,Fc,t_,n_,Bc,ft,a_,Sr,zc,Ir,kc,Ko,Xs,Qt,ts,qs,Rs,pr,Cs,Is,Ps,mr,Pf,Mo,Ar,bo,Bu,dc,zu,Pr,ku,Hu,Vu,h_,Gu,Eo,pc,Wu,mc,jo,Lr,Hc,Xu,u_,Zo,ns,Ls,qu,To,Yu,f_,gr,xr,Jo,Dr,Ku,ju,Zu,Ac,wo,Ys,Ju,Qu,Qo,$o,Nr,$u,Vc,Ro,Co,ea,Ks,Ur,Ye,js,ta,tn,Ri,Nn,Mn,Ci,Gc,Wc,Xc,bn,Ii,na,hi,qc,Hn,Pi,ui,ia,Mi,Yc,g_,fi,ni,Kc,Or,jc,sa,Zs,ra,gc,nf,sf,Fr,Zc,oa,rf,_r,xc,Jc,di,Qc,Js,Li,aa,ll,x_,hl,__,y_,v_,M_,b_,S_,E_,$c,lt,My,ca,Un=bt(()=>{tl="160",op=0,gh=1,ap=2,af=1,nl=2,ii=3,kn=0,an=1,on=2,bi=0,Us=1,xh=2,_h=3,yh=4,cp=5,Yi=100,lp=101,hp=102,vh=103,Mh=104,up=200,fp=201,dp=202,pp=203,_c=204,yc=205,mp=206,Ap=207,gp=208,xp=209,_p=210,yp=211,vp=212,Mp=213,bp=214,Sp=0,Ep=1,Tp=2,Po=3,wp=4,Rp=5,Cp=6,Ip=7,cf=0,Pp=1,Lp=2,Si=0,Dp=1,Np=2,Up=3,il=4,Op=5,Fp=6,bh="attached",Bp="detached",lf=300,Bs=301,zs=302,vc=303,Mc=304,la=306,ai=1e3,Ft=1001,Er=1002,wt=1003,Lo=1004,yr=1005,en=1006,sl=1007,Ti=1008,Ei=1009,zp=1010,kp=1011,rl=1012,hf=1013,vi=1014,ri=1015,Tr=1016,uf=1017,ff=1018,Zi=1020,Hp=1021,_n=1023,Vp=1024,Gp=1025,Ji=1026,ks=1027,Wp=1028,df=1029,Xp=1030,pf=1031,mf=1033,za=33776,ka=33777,Ha=33778,Va=33779,Sh=35840,Eh=35841,Th=35842,wh=35843,Af=36196,Rh=37492,Ch=37496,Ih=37808,Ph=37809,Lh=37810,Dh=37811,Nh=37812,Uh=37813,Oh=37814,Fh=37815,Bh=37816,zh=37817,kh=37818,Hh=37819,Vh=37820,Gh=37821,Ga=36492,Wh=36494,Xh=36495,qp=36283,qh=36284,Yh=36285,Kh=36286,Hs=2300,$i=2301,Wa=2302,jh=2400,Zh=2401,Jh=2402,Yp=2500,gf=0,ha=1,Br=2,xf=3e3,Qi=3001,Kp=3200,jp=3201,_f=0,Zp=1,yn="",$e="srgb",It="srgb-linear",ol="display-p3",ua="display-p3-linear",Do="linear",ut="srgb",No="rec709",Uo="p3",fs=7680,Qh=519,Jp=512,Qp=513,$p=514,yf=515,em=516,tm=517,nm=518,im=519,bc=35044,$h="300 es",Sc=1035,oi=2e3,Oo=2001,wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=1234567,vr=Math.PI/180,Vs=180/Math.PI;vf={DEG2RAD:vr,RAD2DEG:Vs,generateUUID:Ln,clamp:Kt,euclideanModulo:al,mapLinear:sm,inverseLerp:rm,lerp:Mr,damp:om,pingpong:am,smoothstep:cm,smootherstep:lm,randInt:hm,randFloat:um,randFloatSpread:fm,seededRandom:dm,degToRad:pm,radToDeg:mm,isPowerOfTwo:Ec,ceilPowerOfTwo:Am,floorPowerOfTwo:Fo,setQuaternionFromProperEuler:gm,normalize:tt,denormalize:zn},De=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],A=n[8],g=s[0],m=s[3],d=s[6],y=s[1],x=s[4],E=s[7],P=s[2],w=s[5],C=s[8];return r[0]=o*g+a*y+c*P,r[3]=o*m+a*x+c*w,r[6]=o*d+a*E+c*C,r[1]=l*g+h*y+u*P,r[4]=l*m+h*x+u*w,r[7]=l*d+h*E+u*C,r[2]=f*g+p*y+A*P,r[5]=f*m+p*x+A*w,r[8]=f*d+p*E+A*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,A=t*u+n*f+s*p;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/A;return e[0]=u*g,e[1]=(s*l-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=f*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-a*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xa=new qe;tu={};nu=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),iu=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[It]:{transfer:Do,primaries:No,toReference:i=>i,fromReference:i=>i},[$e]:{transfer:ut,primaries:No,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ua]:{transfer:Do,primaries:Uo,toReference:i=>i.applyMatrix3(iu),fromReference:i=>i.applyMatrix3(nu)},[ol]:{transfer:ut,primaries:Uo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(iu),fromReference:i=>i.applyMatrix3(nu).convertLinearToSRGB()}},_m=new Set([It,ua]),Qe={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_m.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=$r[e].toReference,s=$r[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return $r[i].primaries},getTransfer:function(i){return i===yn?Do:$r[i].transfer}};Bo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=wr("canvas")),ds.width=e.width,ds.height=e.height;let n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Os(t[n]/255)*255):t[n]=Os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ym=0,zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Ln(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ya(s[o].image)):r.push(Ya(s[o]))}else r=Ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}};vm=0,Ht=class i extends wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ft,s=Ft,r=en,o=Ti,a=_n,c=Ei,l=i.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Ln(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Qi?$e:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ai:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ai:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?Qi:xf}set encoding(e){br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qi?$e:yn}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=lf;Ht.DEFAULT_ANISOTROPY=1;it=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],A=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(A-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(A+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,E=(p+1)/2,P=(d+1)/2,w=(h+f)/4,C=(u+g)/4,W=(A+m)/4;return x>E&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=C/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=W/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=W/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-A)*(m-A)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-A)/y,this.y=(u-g)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qi?$e:yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ht(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ko=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wc=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],A=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=A,e[t+3]=g;return}if(u!==g||c!==f||l!==p||h!==A){let m=1-a,d=c*f+l*p+h*A+u*g,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let P=Math.sqrt(x),w=Math.atan2(P,d*y);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}let E=a*y;if(c=c*m+f*E,l=l*m+p*E,h=h*m+A*E,u=u*m+g*E,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],A=r[o+3];return e[t]=a*A+h*u+c*p-l*f,e[t+1]=c*A+h*f+l*u-a*p,e[t+2]=l*A+h*p+a*f-c*u,e[t+3]=h*A-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),A=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*A,this._y=l*p*u-f*h*A,this._z=l*h*A+f*p*u,this._w=l*h*u-f*p*A;break;case"YXZ":this._x=f*h*u+l*p*A,this._y=l*p*u-f*h*A,this._z=l*h*A-f*p*u,this._w=l*h*u+f*p*A;break;case"ZXY":this._x=f*h*u-l*p*A,this._y=l*p*u+f*h*A,this._z=l*h*A+f*p*u,this._w=l*h*u-f*p*A;break;case"ZYX":this._x=f*h*u-l*p*A,this._y=l*p*u+f*h*A,this._z=l*h*A-f*p*u,this._w=l*h*u+f*p*A;break;case"YZX":this._x=f*h*u+l*p*A,this._y=l*p*u+f*h*A,this._z=l*h*A-f*p*u,this._w=l*h*u-f*p*A;break;case"XZY":this._x=f*h*u-l*p*A,this._y=l*p*u-f*h*A,this._z=l*h*A+f*p*u,this._w=l*h*u+f*p*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(su.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ka=new R,su=new Dn,pt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),to.subVectors(this.max,hr),ps.subVectors(e.a,hr),ms.subVectors(e.b,hr),As.subVectors(e.c,hr),Ai.subVectors(ms,ps),gi.subVectors(As,ms),Vi.subVectors(ps,As);let t=[0,-Ai.z,Ai.y,0,-gi.z,gi.y,0,-Vi.z,Vi.y,Ai.z,0,-Ai.x,gi.z,0,-gi.x,Vi.z,0,-Vi.x,-Ai.y,Ai.x,0,-gi.y,gi.x,0,-Vi.y,Vi.x,0];return!ja(t,ps,ms,As,to)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,ps,ms,As,to))?!1:(no.crossVectors(Ai,gi),t=[no.x,no.y,no.z],ja(t,ps,ms,As,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Jn=[new R,new R,new R,new R,new R,new R,new R,new R],Cn=new R,eo=new pt,ps=new R,ms=new R,As=new R,Ai=new R,gi=new R,Vi=new R,hr=new R,to=new R,no=new R,Gi=new R;Mm=new pt,ur=new R,Za=new R,mn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Za)),this.expandByPoint(ur.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new R,Ja=new R,io=new R,xi=new R,Qa=new R,so=new R,$a=new R,es=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ja.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Ja);let r=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=xi.dot(this.direction),c=-xi.dot(io),l=xi.lengthSq(),h=Math.abs(1-o*o),u,f,p,A;if(h>0)if(u=o*c-a,f=o*a-c,A=r*h,u>=0)if(f>=-A)if(f<=A){let g=1/h;u*=g,f*=g,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-A?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=A?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ja).addScaledVector(io,f),p}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){Qa.subVectors(t,e),so.subVectors(n,e),$a.crossVectors(Qa,so);let o=this.direction.dot($a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);let c=a*this.direction.dot(so.crossVectors(xi,so));if(c<0)return null;let l=a*this.direction.dot(Qa.cross(xi));if(l<0||c+l>o)return null;let h=-a*xi.dot($a);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,p,A,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,p,A,g,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,p,A,g,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=A,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,A=a*h,g=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+A*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=A+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,A=l*h,g=l*u;t[0]=f+g*a,t[4]=A*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-A,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,A=l*h,g=l*u;t[0]=f-g*a,t[4]=-o*u,t[8]=A+p*a,t[1]=p+A*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,A=a*h,g=a*u;t[0]=c*h,t[4]=A*l-p,t[8]=f*l+g,t[1]=c*u,t[5]=g*l+f,t[9]=p*l-A,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,A=a*c,g=a*l;t[0]=c*h,t[4]=g-f*u,t[8]=A*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+A,t[10]=f-g*u}else if(e.order==="XZY"){let f=o*c,p=o*l,A=a*c,g=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+g,t[5]=o*h,t[9]=p*u-A,t[2]=A*u-p,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bm,e,Sm)}lookAt(e,t,n){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),_i.crossVectors(n,dn),_i.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),_i.crossVectors(n,dn)),_i.normalize(),ro.crossVectors(dn,_i),s[0]=_i.x,s[4]=ro.x,s[8]=dn.x,s[1]=_i.y,s[5]=ro.y,s[9]=dn.y,s[2]=_i.z,s[6]=ro.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],A=n[2],g=n[6],m=n[10],d=n[14],y=n[3],x=n[7],E=n[11],P=n[15],w=s[0],C=s[4],W=s[8],v=s[12],T=s[1],V=s[5],K=s[9],le=s[13],L=s[2],B=s[6],q=s[10],Z=s[14],J=s[3],j=s[7],ie=s[11],ce=s[15];return r[0]=o*w+a*T+c*L+l*J,r[4]=o*C+a*V+c*B+l*j,r[8]=o*W+a*K+c*q+l*ie,r[12]=o*v+a*le+c*Z+l*ce,r[1]=h*w+u*T+f*L+p*J,r[5]=h*C+u*V+f*B+p*j,r[9]=h*W+u*K+f*q+p*ie,r[13]=h*v+u*le+f*Z+p*ce,r[2]=A*w+g*T+m*L+d*J,r[6]=A*C+g*V+m*B+d*j,r[10]=A*W+g*K+m*q+d*ie,r[14]=A*v+g*le+m*Z+d*ce,r[3]=y*w+x*T+E*L+P*J,r[7]=y*C+x*V+E*B+P*j,r[11]=y*W+x*K+E*q+P*ie,r[15]=y*v+x*le+E*Z+P*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],A=e[3],g=e[7],m=e[11],d=e[15];return A*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+g*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],A=e[12],g=e[13],m=e[14],d=e[15],y=u*m*l-g*f*l+g*c*p-a*m*p-u*c*d+a*f*d,x=A*f*l-h*m*l-A*c*p+o*m*p+h*c*d-o*f*d,E=h*g*l-A*u*l+A*a*p-o*g*p-h*a*d+o*u*d,P=A*u*c-h*g*c-A*a*f+o*g*f+h*a*m-o*u*m,w=t*y+n*x+s*E+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=y*C,e[1]=(g*f*r-u*m*r-g*s*p+n*m*p+u*s*d-n*f*d)*C,e[2]=(a*m*r-g*c*r+g*s*l-n*m*l-a*s*d+n*c*d)*C,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*C,e[4]=x*C,e[5]=(h*m*r-A*f*r+A*s*p-t*m*p-h*s*d+t*f*d)*C,e[6]=(A*c*r-o*m*r-A*s*l+t*m*l+o*s*d-t*c*d)*C,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*C,e[8]=E*C,e[9]=(A*u*r-h*g*r-A*n*p+t*g*p+h*n*d-t*u*d)*C,e[10]=(o*g*r-A*a*r+A*n*l-t*g*l-o*n*d+t*a*d)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*C,e[12]=P*C,e[13]=(h*g*s-A*u*s+A*n*f-t*g*f-h*n*m+t*u*m)*C,e[14]=(A*a*s-o*g*s-A*n*c+t*g*c+o*n*m-t*a*m)*C,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,A=r*u,g=o*h,m=o*u,d=a*u,y=c*l,x=c*h,E=c*u,P=n.x,w=n.y,C=n.z;return s[0]=(1-(g+d))*P,s[1]=(p+E)*P,s[2]=(A-x)*P,s[3]=0,s[4]=(p-E)*w,s[5]=(1-(f+d))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(A+x)*C,s[9]=(m-y)*C,s[10]=(1-(f+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);let l=1/r,h=1/o,u=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=oi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,A;if(a===oi)p=-(o+r)/(o-r),A=-2*o*r/(o-r);else if(a===Oo)p=-o/(o-r),A=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=oi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,p=(n+s)*h,A,g;if(a===oi)A=(o+r)*u,g=-2*u;else if(a===Oo)A=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gs=new R,In=new He,bm=new R(0,0,0),Sm=new R(1,1,1),_i=new R,ro=new R,dn=new R,ru=new He,ou=new Dn,Ho=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ho.DEFAULT_ORDER="XYZ";Rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Em=0,au=new R,xs=new Dn,$n=new He,oo=new R,fr=new R,Tm=new R,wm=new Dn,cu=new R(1,0,0),lu=new R(0,1,0),hu=new R(0,0,1),Rm={type:"added"},Cm={type:"removed"},mt=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Ho,n=new Dn,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new qe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(fr,oo,this.up):$n.lookAt(oo,fr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),xs.setFromRotationMatrix($n),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Tm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),A=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),A.length>0&&(n.nodes=A)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};mt.DEFAULT_UP=new R(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Pn=new R,ei=new R,ec=new R,ti=new R,_s=new R,ys=new R,uu=new R,tc=new R,nc=new R,ic=new R,ao=!1,ji=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),ei.subVectors(n,t),ec.subVectors(e,t);let o=Pn.dot(Pn),a=Pn.dot(ei),c=Pn.dot(ec),l=ei.dot(ei),h=ei.dot(ec),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,A=(o*h-a*c)*f;return r.set(1-p-A,A,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,s,r,o,a,c){return ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ao=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),ei.subVectors(e,t),Pn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ao=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;_s.subVectors(s,n),ys.subVectors(r,n),tc.subVectors(e,n);let c=_s.dot(tc),l=ys.dot(tc);if(c<=0&&l<=0)return t.copy(n);nc.subVectors(e,s);let h=_s.dot(nc),u=ys.dot(nc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(_s,o);ic.subVectors(e,r);let p=_s.dot(ic),A=ys.dot(ic);if(A>=0&&p<=A)return t.copy(r);let g=p*l-c*A;if(g<=0&&l>=0&&A<=0)return a=l/(l-A),t.copy(n).addScaledVector(ys,a);let m=h*A-p*u;if(m<=0&&u-h>=0&&p-A>=0)return uu.subVectors(r,s),a=(u-h)/(u-h+(p-A)),t.copy(s).addScaledVector(uu,a);let d=1/(m+g+f);return o=g*d,a=f*d,t.copy(n).addScaledVector(_s,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},co={h:0,s:0,l:0};Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=al(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=sc(o,r,e+1/3),this.g=sc(o,r,e),this.b=sc(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){let n=bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return Qe.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Kt(Yt.r*255,0,255))*65536+Math.round(Kt(Yt.g*255,0,255))*256+Math.round(Kt(Yt.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=$e){Qe.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(co);let n=Mr(yi.h,co.h,t),s=Mr(yi.s,co.s,t),r=Mr(yi.l,co.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Se;Se.NAMES=bf;Im=0,cn=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Us,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=yc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==yc&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vt=class extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},St=new R,lo=new De,Ct=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}},Vo=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Go=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}},st=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pm=0,xn=new He,rc=new mt,vs=new R,pn=new pt,dr=new pt,Ot=new R,Bt=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?Go:Vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(pn.min,dr.min),pn.expandByPoint(Ot),Ot.addVectors(pn.max,dr.max),pn.expandByPoint(Ot)):(pn.expandByPoint(dr.min),pn.expandByPoint(dr.max))}pn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ot.fromBufferAttribute(a,l),c&&(vs.fromBufferAttribute(e,l),Ot.add(vs)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new R,h[T]=new R;let u=new R,f=new R,p=new R,A=new De,g=new De,m=new De,d=new R,y=new R;function x(T,V,K){u.fromArray(s,T*3),f.fromArray(s,V*3),p.fromArray(s,K*3),A.fromArray(o,T*2),g.fromArray(o,V*2),m.fromArray(o,K*2),f.sub(u),p.sub(u),g.sub(A),m.sub(A);let le=1/(g.x*m.y-m.x*g.y);isFinite(le)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(le),y.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(le),l[T].add(d),l[V].add(d),l[K].add(d),h[T].add(y),h[V].add(y),h[K].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let T=0,V=E.length;T<V;++T){let K=E[T],le=K.start,L=K.count;for(let B=le,q=le+L;B<q;B+=3)x(n[B+0],n[B+1],n[B+2])}let P=new R,w=new R,C=new R,W=new R;function v(T){C.fromArray(r,T*3),W.copy(C);let V=l[T];P.copy(V),P.sub(C.multiplyScalar(C.dot(V))).normalize(),w.crossVectors(W,V);let le=w.dot(h[T])<0?-1:1;c[T*4]=P.x,c[T*4+1]=P.y,c[T*4+2]=P.z,c[T*4+3]=le}for(let T=0,V=E.length;T<V;++T){let K=E[T],le=K.start,L=K.count;for(let B=le,q=le+L;B<q;B+=3)v(n[B+0]),v(n[B+1]),v(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){let A=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,A),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(A,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,A=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let d=0;d<h;d++)f[A++]=l[p++]}return new Ct(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new He,Wi=new es,ho=new mn,du=new R,Ms=new R,bs=new R,Ss=new R,oc=new R,uo=new R,fo=new De,po=new De,mo=new De,pu=new R,mu=new R,Au=new R,Ao=new R,go=new R,yt=class extends mt{constructor(e=new Bt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(oc.fromBufferAttribute(u,e),o?uo.addScaledVector(oc,h):uo.addScaledVector(oc.sub(t),h))}t.add(uo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(ho.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ho,du)===null||Wi.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(fu.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let A=0,g=f.length;A<g;A++){let m=f[A],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,P=x;E<P;E+=3){let w=a.getX(E),C=a.getX(E+1),W=a.getX(E+2);s=xo(this,d,e,n,l,h,u,w,C,W),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let A=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=A,d=g;m<d;m+=3){let y=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);s=xo(this,o,e,n,l,h,u,y,x,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let A=0,g=f.length;A<g;A++){let m=f[A],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,P=x;E<P;E+=3){let w=E,C=E+1,W=E+2;s=xo(this,d,e,n,l,h,u,w,C,W),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let A=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=A,d=g;m<d;m+=3){let y=m,x=m+1,E=m+2;s=xo(this,o,e,n,l,h,u,y,x,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};vn=class i extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;A("z","y","x",-1,-1,n,t,e,o,r,0),A("z","y","x",1,-1,n,t,-e,o,r,1),A("x","z","y",1,1,e,n,t,s,o,2),A("x","z","y",1,-1,e,n,-t,s,o,3),A("x","y","z",1,-1,e,t,n,s,r,4),A("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function A(g,m,d,y,x,E,P,w,C,W,v){let T=E/C,V=P/W,K=E/2,le=P/2,L=w/2,B=C+1,q=W+1,Z=0,J=0,j=new R;for(let ie=0;ie<q;ie++){let ce=ie*V-le;for(let Ae=0;Ae<B;Ae++){let X=Ae*T-K;j[g]=X*y,j[m]=ce*x,j[d]=L,l.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[d]=w>0?1:-1,h.push(j.x,j.y,j.z),u.push(Ae/C),u.push(1-ie/W),Z+=1}}for(let ie=0;ie<W;ie++)for(let ce=0;ce<C;ce++){let Ae=f+ce+B*ie,X=f+ce+B*(ie+1),ee=f+(ce+1)+B*(ie+1),me=f+(ce+1)+B*ie;c.push(Ae,X,me),c.push(X,ee,me),J+=6}a.addGroup(p,J,v),p+=J,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Nm={clone:Gs,merge:$t},Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=Om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wo=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rt=class extends Wo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Es=-90,Ts=1,Rc=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(Es,Ts,e,t);s.layers=this.layers,this.add(s);let r=new Rt(Es,Ts,e,t);r.layers=this.layers,this.add(r);let o=new Rt(Es,Ts,e,t);o.layers=this.layers,this.add(o);let a=new Rt(Es,Ts,e,t);a.layers=this.layers,this.add(a);let c=new Rt(Es,Ts,e,t);c.layers=this.layers,this.add(c);let l=new Rt(Es,Ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}},Xo=class extends Ht{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cc=class extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qi?$e:yn),this.texture=new Xo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:bi});r.uniforms.tEquirect.value=t;let o=new yt(s,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=en),new Rc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ac=new R,Fm=new R,Bm=new qe,si=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ac.subVectors(n,t).cross(Fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ac),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bm.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new mn,_o=new R,Cr=class{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,o=new si){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],A=s[9],g=s[10],m=s[11],d=s[12],y=s[13],x=s[14],E=s[15];if(n[0].setComponents(c-r,f-l,m-p,E-d).normalize(),n[1].setComponents(c+r,f+l,m+p,E+d).normalize(),n[2].setComponents(c+o,f+h,m+A,E+y).normalize(),n[3].setComponents(c-o,f-h,m-A,E-y).normalize(),n[4].setComponents(c-a,f-u,m-g,E-x).normalize(),t===oi)n[5].setComponents(c+a,f+u,m+g,E+x).normalize();else if(t===Oo)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(_o.x=s.normal.x>0?e.max.x:e.min.x,_o.y=s.normal.y>0?e.max.y:e.min.y,_o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};zt=class i extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],A=[],g=[],m=[];for(let d=0;d<h;d++){let y=d*f-o;for(let x=0;x<l;x++){let E=x*u-r;A.push(E,-y,0),g.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){let x=y+l*d,E=y+l*(d+1),P=y+1+l*(d+1),w=y+1+l*d;p.push(x,E,w),p.push(E,P,w)}this.setIndex(p),this.setAttribute("position",new st(A,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hm=`#ifdef USE_ALPHAHASH
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
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
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
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,l0=`#define PI 3.141592653589793
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
} // validated`,h0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u0=`vec3 transformedNormal = objectNormal;
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
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`
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
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
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
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
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
#endif`,z0=`struct PhysicalMaterial {
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
}`,k0=`
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eA=`#ifdef USE_MORPHNORMALS
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
#endif`,tA=`#ifdef USE_MORPHTARGETS
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
#endif`,nA=`#ifdef USE_MORPHTARGETS
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
#endif`,iA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cA=`#ifdef USE_NORMALMAP
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
#endif`,lA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_A=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SA=`float getShadowMask() {
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
}`,EA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TA=`#ifdef USE_SKINNING
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
#endif`,wA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RA=`#ifdef USE_SKINNING
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
#endif`,CA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DA=`#ifdef USE_TRANSMISSION
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
#endif`,NA=`#ifdef USE_TRANSMISSION
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
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kA=`uniform sampler2D t2D;
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
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`#include <common>
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
}`,qA=`#if DEPTH_PACKING == 3200
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
}`,YA=`#define DISTANCE
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
}`,KA=`#define DISTANCE
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
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`uniform float scale;
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
}`,QA=`uniform vec3 diffuse;
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
}`,$A=`#include <common>
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#define LAMBERT
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define MATCAP
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
}`,sg=`#define MATCAP
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
}`,rg=`#define NORMAL
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
}`,og=`#define NORMAL
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
}`,ag=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,lg=`#define STANDARD
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
}`,hg=`#define STANDARD
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
}`,ug=`#define TOON
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
}`,fg=`#define TOON
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
}`,dg=`uniform float size;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:km,alphahash_pars_fragment:Hm,alphamap_fragment:Vm,alphamap_pars_fragment:Gm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:qm,aomap_pars_fragment:Ym,batching_pars_vertex:Km,batching_vertex:jm,begin_vertex:Zm,beginnormal_vertex:Jm,bsdfs:Qm,iridescence_fragment:$m,bumpmap_pars_fragment:e0,clipping_planes_fragment:t0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:s0,color_fragment:r0,color_pars_fragment:o0,color_pars_vertex:a0,color_vertex:c0,common:l0,cube_uv_reflection_fragment:h0,defaultnormal_vertex:u0,displacementmap_pars_vertex:f0,displacementmap_vertex:d0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:A0,colorspace_pars_fragment:g0,envmap_fragment:x0,envmap_common_pars_fragment:_0,envmap_pars_fragment:y0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:D0,envmap_vertex:M0,fog_vertex:b0,fog_pars_vertex:S0,fog_fragment:E0,fog_pars_fragment:T0,gradientmap_pars_fragment:w0,lightmap_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:P0,lights_pars_begin:L0,lights_toon_fragment:N0,lights_toon_pars_fragment:U0,lights_phong_fragment:O0,lights_phong_pars_fragment:F0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:k0,lights_fragment_maps:H0,lights_fragment_end:V0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:q0,map_fragment:Y0,map_pars_fragment:K0,map_particle_fragment:j0,map_particle_pars_fragment:Z0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:Q0,morphcolor_vertex:$0,morphnormal_vertex:eA,morphtarget_pars_vertex:tA,morphtarget_vertex:nA,normal_fragment_begin:iA,normal_fragment_maps:sA,normal_pars_fragment:rA,normal_pars_vertex:oA,normal_vertex:aA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:lA,clearcoat_normal_fragment_maps:hA,clearcoat_pars_fragment:uA,iridescence_pars_fragment:fA,opaque_fragment:dA,packing:pA,premultiplied_alpha_fragment:mA,project_vertex:AA,dithering_fragment:gA,dithering_pars_fragment:xA,roughnessmap_fragment:_A,roughnessmap_pars_fragment:yA,shadowmap_pars_fragment:vA,shadowmap_pars_vertex:MA,shadowmap_vertex:bA,shadowmask_pars_fragment:SA,skinbase_vertex:EA,skinning_pars_vertex:TA,skinning_vertex:wA,skinnormal_vertex:RA,specularmap_fragment:CA,specularmap_pars_fragment:IA,tonemapping_fragment:PA,tonemapping_pars_fragment:LA,transmission_fragment:DA,transmission_pars_fragment:NA,uv_pars_fragment:UA,uv_pars_vertex:OA,uv_vertex:FA,worldpos_vertex:BA,background_vert:zA,background_frag:kA,backgroundCube_vert:HA,backgroundCube_frag:VA,cube_vert:GA,cube_frag:WA,depth_vert:XA,depth_frag:qA,distanceRGBA_vert:YA,distanceRGBA_frag:KA,equirect_vert:jA,equirect_frag:ZA,linedashed_vert:JA,linedashed_frag:QA,meshbasic_vert:$A,meshbasic_frag:eg,meshlambert_vert:tg,meshlambert_frag:ng,meshmatcap_vert:ig,meshmatcap_frag:sg,meshnormal_vert:rg,meshnormal_frag:og,meshphong_vert:ag,meshphong_frag:cg,meshphysical_vert:lg,meshphysical_frag:hg,meshtoon_vert:ug,meshtoon_frag:fg,points_vert:dg,points_frag:pg,shadow_vert:mg,shadow_frag:Ag,sprite_vert:gg,sprite_frag:xg},he={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Bn={basic:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:$t([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:$t([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:$t([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:$t([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:$t([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:$t([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:$t([he.common,he.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:$t([he.lights,he.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Bn.physical={uniforms:$t([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};yo={r:0,b:0,g:0};Ws=class extends Wo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ds=4,gu=[.125,.215,.35,.446,.526,.582],Ki=20,cc=new Ws,xu=new Se,lc=null,hc=0,uc=0,qi=(1+Math.sqrt(5))/2,ws=1/qi,_u=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,qi,ws),new R(0,qi,-ws),new R(ws,0,qi),new R(-ws,0,qi),new R(qi,ws,0),new R(-qi,ws,0)],qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){lc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,hc,uc),e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Tr,format:_n,colorSpace:It,depthBuffer:!1},s=yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=Tg(r,e,t)}return s}_compileMaterial(e){let t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,cc)}_sceneToCubeUV(e,t,n,s){let a=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(xu),h.toneMapping=Si,h.autoClear=!1;let p=new Vt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),A=new yt(new vn,p),g=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(xu),g=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):y===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let x=this._cubeSize;vo(s,y*x,d>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(A,a),h.render(e,a)}A.geometry.dispose(),A.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Bs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;vo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,cc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_u[(s-1)%_u.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new yt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,A=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),g=r/A,m=isFinite(r)?1+Math.floor(h*g):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let d=[],y=0;for(let C=0;C<Ki;++C){let W=C/g,v=Math.exp(-W*W/2);d.push(v),C===0?y+=v:C<m&&(y+=2*v)}for(let C=0;C<d.length;C++)d[C]=d[C]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=A,f.mipInt.value=x-n;let E=this._sizeLods[s],P=3*E*(s>x-Ds?s-x+Ds:0),w=4*(this._cubeSize-E);vo(t,P,w,3*E,2*E),c.setRenderTarget(t),c.render(u,cc)}};Yo=class extends Ht{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ji,h!==Ji&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=vi),n===void 0&&h===ks&&(n=Zi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=c!==void 0?c:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tf=new Ht,wf=new Yo(1,1);wf.compareFunction=yf;Rf=new ko,Cf=new wc,If=new Xo,bu=[],Su=[],Eu=new Float32Array(16),Tu=new Float32Array(9),wu=new Float32Array(4);Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tx(t.type)}},Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vx(t.type)}},Lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;Fs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Mx(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};bx=37297,Sx=0;Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;Nx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Wx=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uc(e),t.set(e,n)),n}},Uc=class{constructor(e){this.id=Wx++,this.code=e,this.usedTimes=0}};Jx=0;Oc=class extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fc=class extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},t_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
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
}`;Bc=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ft=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},a_={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,A=.005;l.inputState.pinching&&f>p+A?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-A&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zc=class extends wi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,A=null,g=t.getContextAttributes(),m=null,d=null,y=[],x=[],E=new De,P=null,w=new Rt;w.layers.enable(1),w.viewport=new it;let C=new Rt;C.layers.enable(2),C.viewport=new it;let W=[w,C],v=new Bc;v.layers.enable(1),v.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=y[X];return ee===void 0&&(ee=new Sr,y[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=y[X];return ee===void 0&&(ee=new Sr,y[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=y[X];return ee===void 0&&(ee=new Sr,y[X]=ee),ee.getHandSpace()};function K(X){let ee=x.indexOf(X.inputSource);if(ee===-1)return;let me=y[ee];me!==void 0&&(me.update(X.inputSource,X.frame,l||o),me.dispatchEvent({type:X.type,data:X.inputSource}))}function le(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",L);for(let X=0;X<y.length;X++){let ee=x[X];ee!==null&&(x[X]=null,y[X].disconnect(ee))}T=null,V=null,e.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",le),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new ci(p.framebufferWidth,p.framebufferHeight,{format:_n,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,me=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?ks:Ji,me=g.stencil?Zi:vi);let xe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new ci(f.textureWidth,f.textureHeight,{format:_n,type:Ei,depthTexture:new Yo(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let Ie=e.properties.get(d);Ie.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(X){for(let ee=0;ee<X.removed.length;ee++){let me=X.removed[ee],Me=x.indexOf(me);Me>=0&&(x[Me]=null,y[Me].disconnect(me))}for(let ee=0;ee<X.added.length;ee++){let me=X.added[ee],Me=x.indexOf(me);if(Me===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=x.length){x.push(me),Me=Ie;break}else if(x[Ie]===null){x[Ie]=me,Me=Ie;break}if(Me===-1)break}let xe=y[Me];xe&&xe.connect(me)}}let B=new R,q=new R;function Z(X,ee,me){B.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(me.matrixWorld);let Me=B.distanceTo(q),xe=ee.projectionMatrix.elements,Ie=me.projectionMatrix.elements,Ue=xe[14]/(xe[10]-1),Re=xe[14]/(xe[10]+1),Ke=(xe[9]+1)/xe[5],F=(xe[9]-1)/xe[5],Tt=(xe[8]-1)/xe[0],Ee=(Ie[8]+1)/Ie[0],Oe=Ue*Tt,_e=Ue*Ee,ht=Me/(-Tt+Ee),Fe=ht*-Tt;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Fe),X.translateZ(ht),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let S=Ue+ht,_=Re+ht,z=Oe-Fe,re=_e+(Me-Fe),te=Ke*Re/_*S,oe=F*Re/_*S;X.projectionMatrix.makePerspective(z,re,te,oe,S,_),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;v.near=C.near=w.near=X.near,v.far=C.far=w.far=X.far,(T!==v.near||V!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,V=v.far);let ee=X.parent,me=v.cameras;J(v,ee);for(let Me=0;Me<me.length;Me++)J(me[Me],ee);me.length===2?Z(v,w,C):v.projectionMatrix.copy(w.projectionMatrix),j(X,v,ee)};function j(X,ee,me){me===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let ie=null;function ce(X,ee){if(h=ee.getViewerPose(l||o),A=ee,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Me=!1;me.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let xe=0;xe<me.length;xe++){let Ie=me[xe],Ue=null;if(p!==null)Ue=p.getViewport(Ie);else{let Ke=u.getViewSubImage(f,Ie);Ue=Ke.viewport,xe===0&&(e.setRenderTargetTextures(d,Ke.colorTexture,f.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(d))}let Re=W[xe];Re===void 0&&(Re=new Rt,Re.layers.enable(xe),Re.viewport=new it,W[xe]=Re),Re.matrix.fromArray(Ie.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ie.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),xe===0&&(v.matrix.copy(Re.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(Re)}}for(let me=0;me<y.length;me++){let Me=x[me],xe=y[me];Me!==null&&xe!==void 0&&xe.update(Me,ee,l||o)}ie&&ie(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),A=null}let Ae=new Ef;Ae.setAnimationLoop(ce),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}};Ir=class{constructor(e={}){let{canvas:t=xm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),A=new Int32Array(4),g=null,m=null,d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=Si,this.toneMappingExposure=1;let x=this,E=!1,P=0,w=0,C=null,W=-1,v=null,T=new it,V=new it,K=null,le=new Se(0),L=0,B=t.width,q=t.height,Z=1,J=null,j=null,ie=new it(0,0,B,q),ce=new it(0,0,B,q),Ae=!1,X=new Cr,ee=!1,me=!1,Me=null,xe=new He,Ie=new De,Ue=new R,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return C===null?Z:1}let F=n;function Tt(b,O){for(let H=0;H<b.length;H++){let G=b[H],k=t.getContext(G,O);if(k!==null)return k}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",fe,!1),F===null){let O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),F=Tt(O,b),F===null)throw Tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ee,Oe,_e,ht,Fe,S,_,z,re,te,oe,ye,pe,M,N,U,D,Y,ae,ne,Q,$,ue,Te;function Ve(){Ee=new Rg(F),Oe=new Mg(F,Ee,e),Ee.init(Oe),$=new o_(F,Ee,Oe),_e=new s_(F,Ee,Oe),ht=new Pg(F),Fe=new qx,S=new r_(F,Ee,_e,Fe,Oe,$,ht),_=new Sg(x),z=new wg(x),re=new zm(F,Oe),ue=new yg(F,Ee,re,Oe),te=new Cg(F,re,ht,ue),oe=new Ug(F,te,re,ht),ae=new Ng(F,Oe,S),U=new bg(Fe),ye=new Xx(x,_,z,Ee,Oe,ue,U),pe=new c_(x,Fe),M=new Kx,N=new e_(Ee,Oe),Y=new _g(x,_,z,_e,oe,f,c),D=new i_(x,oe,Oe),Te=new l_(F,ht,Oe,_e),ne=new vg(F,Ee,ht,Oe),Q=new Ig(F,Ee,ht,Oe),ht.programs=ye.programs,x.capabilities=Oe,x.extensions=Ee,x.properties=Fe,x.renderLists=M,x.shadowMap=D,x.state=_e,x.info=ht}Ve();let ve=new zc(x,F);this.xr=ve,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(B,q,!1))},this.getSize=function(b){return b.set(B,q)},this.setSize=function(b,O,H=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,q=O,t.width=Math.floor(b*Z),t.height=Math.floor(O*Z),H===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(B*Z,q*Z).floor()},this.setDrawingBufferSize=function(b,O,H){B=b,q=O,Z=H,t.width=Math.floor(b*H),t.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,O,H,G){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,O,H,G),_e.viewport(T.copy(ie).multiplyScalar(Z).floor())},this.getScissor=function(b){return b.copy(ce)},this.setScissor=function(b,O,H,G){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,O,H,G),_e.scissor(V.copy(ce).multiplyScalar(Z).floor())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(b){_e.setScissorTest(Ae=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(b=!0,O=!0,H=!0){let G=0;if(b){let k=!1;if(C!==null){let ge=C.texture.format;k=ge===mf||ge===pf||ge===df}if(k){let ge=C.texture.type,be=ge===Ei||ge===vi||ge===rl||ge===Zi||ge===uf||ge===ff,Le=Y.getClearColor(),Ne=Y.getClearAlpha(),We=Le.r,Be=Le.g,ke=Le.b;be?(p[0]=We,p[1]=Be,p[2]=ke,p[3]=Ne,F.clearBufferuiv(F.COLOR,0,p)):(A[0]=We,A[1]=Be,A[2]=ke,A[3]=Ne,F.clearBufferiv(F.COLOR,0,A))}else G|=F.COLOR_BUFFER_BIT}O&&(G|=F.DEPTH_BUFFER_BIT),H&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),M.dispose(),N.dispose(),Fe.dispose(),_.dispose(),z.dispose(),oe.dispose(),ue.dispose(),Te.dispose(),ye.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Zt),ve.removeEventListener("sessionend",ct),Me&&(Me.dispose(),Me=null),Jt.stop()};function se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=ht.autoReset,O=D.enabled,H=D.autoUpdate,G=D.needsUpdate,k=D.type;Ve(),ht.autoReset=b,D.enabled=O,D.autoUpdate=H,D.needsUpdate=G,D.type=k}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function de(b){let O=b.target;O.removeEventListener("dispose",de),Pe(O)}function Pe(b){we(b),Fe.remove(b)}function we(b){let O=Fe.get(b).programs;O!==void 0&&(O.forEach(function(H){ye.releaseProgram(H)}),b.isShaderMaterial&&ye.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,G,k,ge){O===null&&(O=Re);let be=k.isMesh&&k.matrixWorld.determinant()<0,Le=ep(b,O,H,G,k);_e.setMaterial(G,be);let Ne=H.index,We=1;if(G.wireframe===!0){if(Ne=te.getWireframeAttribute(H),Ne===void 0)return;We=2}let Be=H.drawRange,ke=H.attributes.position,Mt=Be.start*We,fn=(Be.start+Be.count)*We;ge!==null&&(Mt=Math.max(Mt,ge.start*We),fn=Math.min(fn,(ge.start+ge.count)*We)),Ne!==null?(Mt=Math.max(Mt,0),fn=Math.min(fn,Ne.count)):ke!=null&&(Mt=Math.max(Mt,0),fn=Math.min(fn,ke.count));let Ut=fn-Mt;if(Ut<0||Ut===1/0)return;ue.setup(k,G,Le,H,Ne);let Zn,_t=ne;if(Ne!==null&&(Zn=re.get(Ne),_t=Q,_t.setIndex(Zn)),k.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Ke()),_t.setMode(F.LINES)):_t.setMode(F.TRIANGLES);else if(k.isLine){let Xe=G.linewidth;Xe===void 0&&(Xe=1),_e.setLineWidth(Xe*Ke()),k.isLineSegments?_t.setMode(F.LINES):k.isLineLoop?_t.setMode(F.LINE_LOOP):_t.setMode(F.LINE_STRIP)}else k.isPoints?_t.setMode(F.POINTS):k.isSprite&&_t.setMode(F.TRIANGLES);if(k.isBatchedMesh)_t.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)_t.renderInstances(Mt,Ut,k.count);else if(H.isInstancedBufferGeometry){let Xe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ua=Math.min(H.instanceCount,Xe);_t.renderInstances(Mt,Ut,Ua)}else _t.render(Mt,Ut)};function ot(b,O,H){b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=an,b.needsUpdate=!0,Qr(b,O,H),b.side=kn,b.needsUpdate=!0,Qr(b,O,H),b.side=on):Qr(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),m=N.get(H),m.init(),y.push(m),H.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),b!==H&&b.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);let G=new Set;return b.traverse(function(k){let ge=k.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let Le=ge[be];ot(Le,H,k),G.add(Le)}else ot(ge,H,k),G.add(ge)}),y.pop(),m=null,G},this.compileAsync=function(b,O,H=null){let G=this.compile(b,O,H);return new Promise(k=>{function ge(){if(G.forEach(function(be){Fe.get(be).currentProgram.isReady()&&G.delete(be)}),G.size===0){k(b);return}setTimeout(ge,10)}Ee.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let at=null;function Nt(b){at&&at(b)}function Zt(){Jt.stop()}function ct(){Jt.start()}let Jt=new Ef;Jt.setAnimationLoop(Nt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(b){at=b,ve.setAnimationLoop(b),b===null?Jt.stop():Jt.start()},ve.addEventListener("sessionstart",Zt),ve.addEventListener("sessionend",ct),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,C),m=N.get(b,y.length),m.init(),y.push(m),xe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(xe),me=this.localClippingEnabled,ee=U.init(this.clippingPlanes,me),g=M.get(b,d.length),g.init(),d.push(g),Fn(b,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(J,j),this.info.render.frame++,ee===!0&&U.beginShadows();let H=m.state.shadowsArray;if(D.render(H,b,O),ee===!0&&U.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(g,b),m.setupLights(x._useLegacyLights),O.isArrayCamera){let G=O.cameras;for(let k=0,ge=G.length;k<ge;k++){let be=G[k];uh(g,b,be,be.viewport)}}else uh(g,b,O);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,O),ue.resetDefaultState(),W=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Fn(b,O,H,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){G&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);let be=oe.update(b),Le=b.material;Le.visible&&g.push(b,be,Le,H,Ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){let be=oe.update(b),Le=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(Le)){let Ne=be.groups;for(let We=0,Be=Ne.length;We<Be;We++){let ke=Ne[We],Mt=Le[ke.materialIndex];Mt&&Mt.visible&&g.push(b,be,Mt,H,Ue.z,ke)}}else Le.visible&&g.push(b,be,Le,H,Ue.z,null)}}let ge=b.children;for(let be=0,Le=ge.length;be<Le;be++)Fn(ge[be],O,H,G)}function uh(b,O,H,G){let k=b.opaque,ge=b.transmissive,be=b.transparent;m.setupLightsView(H),ee===!0&&U.setGlobalState(x.clippingPlanes,H),ge.length>0&&$d(k,ge,O,H),G&&_e.viewport(T.copy(G)),k.length>0&&Jr(k,O,H),ge.length>0&&Jr(ge,O,H),be.length>0&&Jr(be,O,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function $d(b,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ge=Oe.isWebGL2;Me===null&&(Me=new ci(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Tr:Ei,minFilter:Ti,samples:ge?4:0})),x.getDrawingBufferSize(Ie),ge?Me.setSize(Ie.x,Ie.y):Me.setSize(Fo(Ie.x),Fo(Ie.y));let be=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(le),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Le=x.toneMapping;x.toneMapping=Si,Jr(b,H,G),S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me);let Ne=!1;for(let We=0,Be=O.length;We<Be;We++){let ke=O[We],Mt=ke.object,fn=ke.geometry,Ut=ke.material,Zn=ke.group;if(Ut.side===on&&Mt.layers.test(G.layers)){let _t=Ut.side;Ut.side=an,Ut.needsUpdate=!0,fh(Mt,H,G,fn,Ut,Zn),Ut.side=_t,Ut.needsUpdate=!0,Ne=!0}}Ne===!0&&(S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me)),x.setRenderTarget(be),x.setClearColor(le,L),x.toneMapping=Le}function Jr(b,O,H){let G=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ge=b.length;k<ge;k++){let be=b[k],Le=be.object,Ne=be.geometry,We=G===null?be.material:G,Be=be.group;Le.layers.test(H.layers)&&fh(Le,O,H,Ne,We,Be)}}function fh(b,O,H,G,k,ge){b.onBeforeRender(x,O,H,G,k,ge),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(x,O,H,G,b,ge),k.transparent===!0&&k.side===on&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,x.renderBufferDirect(H,O,G,k,b,ge),k.side=kn,k.needsUpdate=!0,x.renderBufferDirect(H,O,G,k,b,ge),k.side=on):x.renderBufferDirect(H,O,G,k,b,ge),b.onAfterRender(x,O,H,G,k,ge)}function Qr(b,O,H){O.isScene!==!0&&(O=Re);let G=Fe.get(b),k=m.state.lights,ge=m.state.shadowsArray,be=k.state.version,Le=ye.getParameters(b,k.state,ge,O,H),Ne=ye.getProgramCacheKey(Le),We=G.programs;G.environment=b.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(b.isMeshStandardMaterial?z:_).get(b.envMap||G.environment),We===void 0&&(b.addEventListener("dispose",de),We=new Map,G.programs=We);let Be=We.get(Ne);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===be)return ph(b,Le),Be}else Le.uniforms=ye.getUniforms(b),b.onBuild(H,Le,x),b.onBeforeCompile(Le,x),Be=ye.acquireProgram(Le,Ne),We.set(Ne,Be),G.uniforms=Le.uniforms;let ke=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=U.uniform),ph(b,Le),G.needsLights=np(b),G.lightsStateVersion=be,G.needsLights&&(ke.ambientLightColor.value=k.state.ambient,ke.lightProbe.value=k.state.probe,ke.directionalLights.value=k.state.directional,ke.directionalLightShadows.value=k.state.directionalShadow,ke.spotLights.value=k.state.spot,ke.spotLightShadows.value=k.state.spotShadow,ke.rectAreaLights.value=k.state.rectArea,ke.ltc_1.value=k.state.rectAreaLTC1,ke.ltc_2.value=k.state.rectAreaLTC2,ke.pointLights.value=k.state.point,ke.pointLightShadows.value=k.state.pointShadow,ke.hemisphereLights.value=k.state.hemi,ke.directionalShadowMap.value=k.state.directionalShadowMap,ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ke.spotShadowMap.value=k.state.spotShadowMap,ke.spotLightMatrix.value=k.state.spotLightMatrix,ke.spotLightMap.value=k.state.spotLightMap,ke.pointShadowMap.value=k.state.pointShadowMap,ke.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function dh(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Fs.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function ph(b,O){let H=Fe.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function ep(b,O,H,G,k){O.isScene!==!0&&(O=Re),S.resetTextureUnits();let ge=O.fog,be=G.isMeshStandardMaterial?O.environment:null,Le=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:It,Ne=(G.isMeshStandardMaterial?z:_).get(G.envMap||be),We=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Be=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!H.morphAttributes.position,Mt=!!H.morphAttributes.normal,fn=!!H.morphAttributes.color,Ut=Si;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ut=x.toneMapping);let Zn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_t=Zn!==void 0?Zn.length:0,Xe=Fe.get(G),Ua=m.state.lights;if(ee===!0&&(me===!0||b!==v)){let gn=b===v&&G.id===W;U.setState(G,b,gn)}let vt=!1;G.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ua.state.version||Xe.outputColorSpace!==Le||k.isBatchedMesh&&Xe.batching===!1||!k.isBatchedMesh&&Xe.batching===!0||k.isInstancedMesh&&Xe.instancing===!1||!k.isInstancedMesh&&Xe.instancing===!0||k.isSkinnedMesh&&Xe.skinning===!1||!k.isSkinnedMesh&&Xe.skinning===!0||k.isInstancedMesh&&Xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Xe.instancingColor===!1&&k.instanceColor!==null||Xe.envMap!==Ne||G.fog===!0&&Xe.fog!==ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==U.numPlanes||Xe.numIntersection!==U.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Be||Xe.morphTargets!==ke||Xe.morphNormals!==Mt||Xe.morphColors!==fn||Xe.toneMapping!==Ut||Oe.isWebGL2===!0&&Xe.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Xe.__version=G.version);let ki=Xe.currentProgram;vt===!0&&(ki=Qr(G,O,k));let mh=!1,lr=!1,Oa=!1,Xt=ki.getUniforms(),Hi=Xe.uniforms;if(_e.useProgram(ki.program)&&(mh=!0,lr=!0,Oa=!0),G.id!==W&&(W=G.id,lr=!0),mh||v!==b){Xt.setValue(F,"projectionMatrix",b.projectionMatrix),Xt.setValue(F,"viewMatrix",b.matrixWorldInverse);let gn=Xt.map.cameraPosition;gn!==void 0&&gn.setValue(F,Ue.setFromMatrixPosition(b.matrixWorld)),Oe.logarithmicDepthBuffer&&Xt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Xt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,lr=!0,Oa=!0)}if(k.isSkinnedMesh){Xt.setOptional(F,k,"bindMatrix"),Xt.setOptional(F,k,"bindMatrixInverse");let gn=k.skeleton;gn&&(Oe.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Xt.setValue(F,"boneTexture",gn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Xt.setOptional(F,k,"batchingTexture"),Xt.setValue(F,"batchingTexture",k._matricesTexture,S));let Fa=H.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0&&Oe.isWebGL2===!0)&&ae.update(k,H,ki),(lr||Xe.receiveShadow!==k.receiveShadow)&&(Xe.receiveShadow=k.receiveShadow,Xt.setValue(F,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Hi.envMap.value=Ne,Hi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),lr&&(Xt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&tp(Hi,Oa),ge&&G.fog===!0&&pe.refreshFogUniforms(Hi,ge),pe.refreshMaterialUniforms(Hi,G,Z,q,Me),Fs.upload(F,dh(Xe),Hi,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fs.upload(F,dh(Xe),Hi,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Xt.setValue(F,"center",k.center),Xt.setValue(F,"modelViewMatrix",k.modelViewMatrix),Xt.setValue(F,"normalMatrix",k.normalMatrix),Xt.setValue(F,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let gn=G.uniformsGroups;for(let Ba=0,ip=gn.length;Ba<ip;Ba++)if(Oe.isWebGL2){let Ah=gn[Ba];Te.update(Ah,ki),Te.bind(Ah,ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ki}function tp(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function np(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,O,H){Fe.get(b.texture).__webglTexture=O,Fe.get(b.depthTexture).__webglTexture=H;let G=Fe.get(b);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){let H=Fe.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,H=0){C=b,P=O,w=H;let G=!0,k=null,ge=!1,be=!1;if(b){let Ne=Fe.get(b);Ne.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):Ne.__webglFramebuffer===void 0?S.setupRenderTarget(b):Ne.__hasExternalTextures&&S.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);let We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(be=!0);let Be=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?k=Be[O][H]:k=Be[O],ge=!0):Oe.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?k=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[H]:k=Be,T.copy(b.viewport),V.copy(b.scissor),K=b.scissorTest}else T.copy(ie).multiplyScalar(Z).floor(),V.copy(ce).multiplyScalar(Z).floor(),K=Ae;if(_e.bindFramebuffer(F.FRAMEBUFFER,k)&&Oe.drawBuffers&&G&&_e.drawBuffers(b,k),_e.viewport(T),_e.scissor(V),_e.setScissorTest(K),ge){let Ne=Fe.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,H)}else if(be){let Ne=Fe.get(b.texture),We=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.__webglTexture,H||0,We)}W=-1},this.readRenderTargetPixels=function(b,O,H,G,k,ge,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Le=Le[be]),Le){_e.bindFramebuffer(F.FRAMEBUFFER,Le);try{let Ne=b.texture,We=Ne.format,Be=Ne.type;if(We!==_n&&$.convert(We)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ke=Be===Tr&&(Ee.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Be!==Ei&&$.convert(Be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===ri&&(Oe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&H>=0&&H<=b.height-k&&F.readPixels(O,H,G,k,$.convert(We),$.convert(Be),ge)}finally{let Ne=C!==null?Fe.get(C).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(b,O,H=0){let G=Math.pow(2,-H),k=Math.floor(O.image.width*G),ge=Math.floor(O.image.height*G);S.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,b.x,b.y,k,ge),_e.unbindTexture()},this.copyTextureToTexture=function(b,O,H,G=0){let k=O.image.width,ge=O.image.height,be=$.convert(H.format),Le=$.convert(H.type);S.setTexture2D(H,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,b.x,b.y,k,ge,be,Le,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,be,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,b.x,b.y,be,Le,O.image),G===0&&H.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(b,O,H,G,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=b.max.x-b.min.x+1,be=b.max.y-b.min.y+1,Le=b.max.z-b.min.z+1,Ne=$.convert(G.format),We=$.convert(G.type),Be;if(G.isData3DTexture)S.setTexture3D(G,0),Be=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)S.setTexture2DArray(G,0),Be=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);let ke=F.getParameter(F.UNPACK_ROW_LENGTH),Mt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ut=F.getParameter(F.UNPACK_SKIP_ROWS),Zn=F.getParameter(F.UNPACK_SKIP_IMAGES),_t=H.isCompressedTexture?H.mipmaps[k]:H.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?F.texSubImage3D(Be,k,O.x,O.y,O.z,ge,be,Le,Ne,We,_t.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Be,k,O.x,O.y,O.z,ge,be,Le,Ne,_t.data)):F.texSubImage3D(Be,k,O.x,O.y,O.z,ge,be,Le,Ne,We,_t),F.pixelStorei(F.UNPACK_ROW_LENGTH,ke),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ut),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zn),k===0&&G.generateMipmaps&&F.generateMipmap(Be),_e.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){P=0,w=0,C=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ol?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===ua?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?Qi:xf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qi?$e:It}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},kc=class extends Ir{};kc.prototype.isWebGL1Renderer=!0;Ko=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qt=new R,ts=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qs=class extends cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pr=new R,Cs=new R,Is=new R,Ps=new De,mr=new De,Pf=new He,Mo=new R,Ar=new R,bo=new R,Bu=new De,dc=new De,zu=new De,Pr=class extends mt{constructor(e=new qs){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xs(t,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new ts(n,3,0,!1)),Rs.setAttribute("uv",new ts(n,2,3,!1))}this.geometry=Rs,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),Pf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;So(Mo.set(-.5,-.5,0),Is,o,Cs,s,r),So(Ar.set(.5,-.5,0),Is,o,Cs,s,r),So(bo.set(.5,.5,0),Is,o,Cs,s,r),Bu.set(0,0),dc.set(1,0),zu.set(1,1);let a=e.ray.intersectTriangle(Mo,Ar,bo,!1,pr);if(a===null&&(So(Ar.set(-.5,.5,0),Is,o,Cs,s,r),dc.set(0,1),a=e.ray.intersectTriangle(Mo,bo,Ar,!1,pr),a===null))return;let c=e.ray.origin.distanceTo(pr);c<e.near||c>e.far||t.push({distance:c,point:pr.clone(),uv:ji.getInterpolation(pr,Mo,Ar,bo,Bu,dc,zu,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};ku=new R,Hu=new it,Vu=new it,h_=new R,Gu=new He,Eo=new R,pc=new mn,Wu=new He,mc=new es,jo=class extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bh,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingSphere.expandByPoint(Eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pc.copy(this.boundingSphere),pc.applyMatrix4(s),e.ray.intersectsSphere(pc)!==!1&&(Wu.copy(s).invert(),mc.copy(e.ray).applyMatrix4(Wu),!(this.boundingBox!==null&&mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Hu.fromBufferAttribute(s.attributes.skinIndex,e),Vu.fromBufferAttribute(s.attributes.skinWeight,e),ku.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Vu.getComponent(r);if(o!==0){let a=Hu.getComponent(r);Gu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(h_.copy(ku).applyMatrix4(Gu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Lr=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hc=class extends Ht{constructor(e=null,t=1,n=1,s,r,o,a,c,l=wt,h=wt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xu=new He,u_=new He,Zo=class i{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:u_;Xu.multiplyMatrices(a,t[r]),Xu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hc(t,e,e,_n,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Lr),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ns=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new He,qu=new He,To=[],Yu=new pt,f_=new He,gr=new yt,xr=new mn,Jo=class extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,f_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Yu.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Yu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),xr.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),e.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),qu.multiplyMatrices(n,Ls),gr.matrixWorld=qu,gr.raycast(e,To);for(let o=0,a=To.length;o<a;o++){let c=To[o];c.instanceId=r,c.object=this,t.push(c)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Dr=class extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ku=new R,ju=new R,Zu=new He,Ac=new es,wo=new mn,Ys=class extends mt{constructor(e=new Bt,t=new Dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ku.fromBufferAttribute(t,s-1),ju.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ku.distanceTo(ju);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;Zu.copy(s).invert(),Ac.copy(e.ray).applyMatrix4(Zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,u=new R,f=new R,p=this.isLineSegments?2:1,A=n.index,m=n.attributes.position;if(A!==null){let d=Math.max(0,o.start),y=Math.min(A.count,o.start+o.count);for(let x=d,E=y-1;x<E;x+=p){let P=A.getX(x),w=A.getX(x+1);if(l.fromBufferAttribute(m,P),h.fromBufferAttribute(m,w),Ac.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let W=e.ray.origin.distanceTo(f);W<e.near||W>e.far||t.push({distance:W,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=d,E=y-1;x<E;x+=p){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Ac.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Ju=new R,Qu=new R,Qo=class extends Ys{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ju.fromBufferAttribute(t,s),Qu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ju.distanceTo(Qu);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$o=class extends Ys{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Nr=class extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$u=new He,Vc=new es,Ro=new mn,Co=new R,ea=class extends mt{constructor(e=new Bt,t=new Nr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;$u.copy(s).invert(),Vc.copy(e.ray).applyMatrix4($u);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let A=f,g=p;A<g;A++){let m=l.getX(A);Co.fromBufferAttribute(u,m),ef(Co,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let A=f,g=p;A<g;A++)Co.fromBufferAttribute(u,A),ef(Co,A,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Ks=class extends Ht{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ur=class i extends Bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new R,h=new De;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ye=class i extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],A=0,g=[],m=n/2,d=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(p,2));function y(){let E=new R,P=new R,w=0,C=(t-e)/n;for(let W=0;W<=r;W++){let v=[],T=W/r,V=T*(t-e)+e;for(let K=0;K<=s;K++){let le=K/s,L=le*c+a,B=Math.sin(L),q=Math.cos(L);P.x=V*B,P.y=-T*n+m,P.z=V*q,u.push(P.x,P.y,P.z),E.set(B,C,q).normalize(),f.push(E.x,E.y,E.z),p.push(le,1-T),v.push(A++)}g.push(v)}for(let W=0;W<s;W++)for(let v=0;v<r;v++){let T=g[v][W],V=g[v+1][W],K=g[v+1][W+1],le=g[v][W+1];h.push(T,V,le),h.push(V,K,le),w+=6}l.addGroup(d,w,0),d+=w}function x(E){let P=A,w=new De,C=new R,W=0,v=E===!0?e:t,T=E===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),A++;let V=A;for(let K=0;K<=s;K++){let L=K/s*c+a,B=Math.cos(L),q=Math.sin(L);C.x=v*q,C.y=m*T,C.z=v*B,u.push(C.x,C.y,C.z),f.push(0,T,0),w.x=B*.5+.5,w.y=q*.5*T+.5,p.push(w.x,w.y),A++}for(let K=0;K<s;K++){let le=P+K,L=V+K;E===!0?h.push(L,L+1,le):h.push(L+1,L,le),W+=3}l.addGroup(d,W,E===!0?1:2),d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},js=class i extends Ye{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class i extends Bt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/s,p=new R,A=new De;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),A.x=(p.x/t+1)/2,A.y=(p.y/t+1)/2,h.push(A.x,A.y)}u+=f}for(let g=0;g<s;g++){let m=g*(n+1);for(let d=0;d<n;d++){let y=d+m,x=y,E=y+n+1,P=y+n+2,w=y+1;a.push(x,E,w),a.push(E,P,w)}}this.setIndex(a),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},tn=class i extends Bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,f=new R,p=[],A=[],g=[],m=[];for(let d=0;d<=n;d++){let y=[],x=d/n,E=0;d===0&&o===0?E=.5/t:d===n&&c===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){let w=P/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+x*a),A.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(w+E,1-x),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let x=h[d][y+1],E=h[d][y],P=h[d+1][y],w=h[d+1][y+1];(d!==0||o>0)&&p.push(x,E,w),(d!==n-1||c<Math.PI)&&p.push(E,P,w)}this.setIndex(p),this.setAttribute("position",new st(A,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ri=class i extends Bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let p=0;p<=n;p++)for(let A=0;A<=s;A++){let g=A/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(A/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let A=1;A<=s;A++){let g=(s+1)*p+A-1,m=(s+1)*(p-1)+A-1,d=(s+1)*(p-1)+A,y=(s+1)*p+A;o.push(g,m,y),o.push(m,d,y)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Nn=class extends cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mn=class extends Nn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gc=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jh,endingEnd:jh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zh:r=e,a=2*t-n;break;case Jh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zh:o=e,c=2*n-t;break;case Jh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,A=(n-t)/(s-t),g=A*A,m=g*A,d=-f*m+2*f*g-f*A,y=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*A+1,x=(-1-p)*m+(1.5+p)*g+.5*A,E=p*m-p*g;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+y*o[l+P]+x*o[c+P]+E*o[u+P];return r}},Wc=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Xc=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case $i:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return $i;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&d_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let A=0;A!==n;++A){let g=t[u+A];if(g!==t[f+A]||g!==t[p+A]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=$i;Ii=class extends bn{};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Hs;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;na=class extends bn{};na.prototype.ValueTypeName="color";hi=class extends bn{};hi.prototype.ValueTypeName="number";qc=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Dn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Hn=class extends bn{InterpolantFactoryMethodLinear(e){return new qc(this.times,this.values,this.getValueSize(),e)}};Hn.prototype.ValueTypeName="quaternion";Hn.prototype.DefaultInterpolation=$i;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;Pi=class extends bn{};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Hs;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;ui=class extends bn{};ui.prototype.ValueTypeName="vector";ia=class{constructor(e,t=-1,n,s=Yp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(A_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=p_(c);c=tf(c,1,h),l=tf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new hi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,A,g){if(p.length!==0){let m=[],d=[];Lf(p,m,d,A),m.length!==0&&g.push(new u(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},A;for(A=0;A<f.length;A++)if(f[A].morphTargets)for(let g=0;g<f[A].morphTargets.length;g++)p[f[A].morphTargets[g]]=-1;for(let g in p){let m=[],d=[];for(let y=0;y!==f[A].morphTargets.length;++y){let x=f[A];m.push(x.time),d.push(x.morphTarget===g?1:0)}s.push(new hi(".morphTargetInfluence["+g+"]",m,d))}c=p.length*o}else{let p=".bones["+t[u].name+"]";n(ui,p+".position",f,"pos",s),n(Hn,p+".quaternion",f,"rot",s),n(ui,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Mi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Yc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],A=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return A}return null}}},g_=new Yc,fi=class{constructor(e){this.manager=e!==void 0?e:g_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";ni={},Kc=class extends Error{constructor(e,t){super(e),this.response=t}},Or=class extends fi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Mi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:s});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ni[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,A=p!==0,g=0,m=new ReadableStream({start(d){y();function y(){u.read().then(({done:x,value:E})=>{if(x)d.close();else{g+=E.byteLength;let P=new ProgressEvent("progress",{lengthComputable:A,loaded:g,total:p});for(let w=0,C=h.length;w<C;w++){let W=h[w];W.onProgress&&W.onProgress(P)}d.enqueue(E),y()}})}}});return new Response(m)}else throw new Kc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(A=>p.decode(A))}}}).then(l=>{Mi.add(e,l);let h=ni[e];delete ni[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=ni[e];if(h===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},jc=class extends fi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Mi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=wr("img");function c(){h(),Mi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},sa=class extends fi{constructor(e){super(e)}load(e,t,n,s){let r=new Ht,o=new jc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Zs=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ra=class extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gc=new He,nf=new R,sf=new R,Fr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zc=class extends Fr{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},oa=class extends Zs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},rf=new He,_r=new R,xc=new R,Jc=class extends Fr{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),xc.copy(n.position),xc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xc),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),rf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rf)}},di=class extends Zs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Qc=class extends Fr{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Li=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},aa=class extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Mi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Mi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Mi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Mi.add(e,c),r.manager.itemStart(e)}},ll="\\[\\]\\.:\\/",x_=new RegExp("["+ll+"]","g"),hl="[^"+ll+"]",__="[^"+ll.replace("\\.","")+"]",y_=/((?:WC+[\/:])*)/.source.replace("WC",hl),v_=/(WCOD+)?/.source.replace("WCOD",__),M_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hl),b_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hl),S_=new RegExp("^"+y_+v_+M_+b_+"$"),E_=["material","materials","bones","map"],$c=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x_,"")}static parseTrackName(e){let t=S_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);E_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=$c;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];My=new Float32Array(1),ca=class{constructor(e,t,n=0,s=1/0){this.ray=new es(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(of),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)el(e[s],this,n,t);return n.sort(of),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl)});function ul(i,e){if(e===gf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Br||e===ha){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Br)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Df=bt(()=>{Un()});function T_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function C_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Nn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),i.DefaultMaterial}function ss(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function I_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function P_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function L_(i){let e,t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pl(t.attributes):e=i.indices+":"+pl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+pl(i.targets[n]);return e}function pl(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function D_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function U_(i,e,t){let n=e.attributes,s=new pt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){let h=Bl($s[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,A=f.max;if(p!==void 0&&A!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(A[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(A[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(A[2]))),f.normalized){let g=Bl($s[f.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new mn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Ff(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Fl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Ni(i,e),U_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?I_(i,e.targets,t):i})}var da,je,ml,Al,gl,xl,_l,yl,vl,Ml,bl,Sl,El,Tl,wl,Rl,Cl,Il,Pl,Bf,zr,Nf,Ll,Dl,Nl,Ul,pa,w_,Ol,Sn,$s,Uf,Of,fl,Fl,Di,R_,dl,N_,zl,zf=bt(()=>{Un();Df();da=class extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xl(t)}),this.register(function(t){return new wl(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new yl(t)}),this.register(function(t){return new vl(t)}),this.register(function(t){return new Ml(t)}),this.register(function(t){return new bl(t)}),this.register(function(t){return new gl(t)}),this.register(function(t){return new Sl(t)}),this.register(function(t){return new _l(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new El(t)}),this.register(function(t){return new ml(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Pl(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Li.extractUrlBase(e);o=Li.resolveURL(l,this.path)}else o=Li.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Or(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Bf){try{o[je.KHR_BINARY_GLTF]=new Ll(e)}catch(u){s&&s(u);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new zl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:o[u]=new Al;break;case je.KHR_DRACO_MESH_COMPRESSION:o[u]=new Dl(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[u]=new Nl;break;case je.KHR_MESH_QUANTIZATION:o[u]=new Ul;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ml=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Se(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],It);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Js(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new di(h),l.distance=u;break;case"spot":l=new oa(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Al=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Vt}extendParams(e,t,n){let s=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],It),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,$e))}return Promise.all(s)}},gl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},xl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(a,a)}return Promise.all(r)}},_l=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},yl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$e)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},vl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ml=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(a[0],a[1],a[2],It),Promise.all(r)}},bl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Sl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(a[0],a[1],a[2],It),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,$e)),Promise.all(r)}},El=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Tl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},wl=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Rl=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Cl=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Il=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Pl=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Sn.TRIANGLES&&l.mode!==Sn.TRIANGLE_STRIP&&l.mode!==Sn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let A of u){let g=new He,m=new R,d=new Dn,y=new R(1,1,1),x=new Jo(A.geometry,A.material,f);for(let E=0;E<f;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,E),c.SCALE&&y.fromBufferAttribute(c.SCALE,E),x.setMatrixAt(E,g.compose(m,d,y));for(let E in c)if(E==="_COLOR_0"){let P=c[E];x.instanceColor=new ns(P.array,P.itemSize,P.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&A.geometry.setAttribute(E,c[E]);mt.prototype.copy.call(x,A),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Bf="glTF",zr=12,Nf={JSON:1313821514,BIN:5130562},Ll=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-zr,r=new DataView(e,zr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Nf.JSON){let l=new Uint8Array(e,zr+o,a);this.content=n.decode(l)}else if(c===Nf.BIN){let l=zr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Dl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Fl[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Fl[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],p=$s[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let A in p.attributes){let g=p.attributes[A],m=c[A];m!==void 0&&(g.normalized=m)}u(p)},a,l,It,f)})})}},Nl=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ul=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},pa=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,A=e*l,g=A-l,m=-2*p+3*f,d=p-f,y=1-m,x=d-f+u;for(let E=0;E!==a;E++){let P=o[g+E+a],w=o[g+E+c]*h,C=o[A+E+a],W=o[A+E]*h;r[E]=y*P+x*w+m*C+d*W}return r}},w_=new Dn,Ol=class extends pa{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return w_.fromArray(r).normalize().toArray(r),r}},Sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uf={9728:wt,9729:en,9984:Lo,9985:sl,9986:yr,9987:Ti},Of={33071:Ft,33648:Er,10497:ai},fl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},R_={CUBICSPLINE:void 0,LINEAR:$i,STEP:Hs},dl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};N_=new He,zl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new T_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new sa(this.options.manager):this.textureLoader=new aa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ss(r,a,s),Ni(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Li.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=fl[s.type],a=$s[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ct(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=fl[s.type],l=$s[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,A=s.normalized===!0,g,m;if(p&&p!==u){let d=Math.floor(f/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,x=t.cache.get(y);x||(g=new l(a,d*p,s.count*p/h),x=new Xs(g,p/h),t.cache.add(y,x)),m=new ts(x,c,f%p/h,A)}else a===null?g=new l(s.count*c):g=new l(a,f,s.count*c),m=new Ct(g,c,A);if(s.sparse!==void 0){let d=fl.SCALAR,y=$s[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,P=new y(o[1],x,s.sparse.count*d),w=new l(o[2],E,s.sparse.count*c);a!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized));for(let C=0,W=P.length;C<W;C++){let v=P[C];if(m.setX(v,w[C*c]),c>=2&&m.setY(v,w[C*c+1]),c>=3&&m.setZ(v,w[C*c+2]),c>=4&&m.setW(v,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Uf[f.magFilter]||en,h.minFilter=Uf[f.minFilter]||Ti,h.wrapS=Of[f.wrapS]||ai,h.wrapT=Of[f.wrapT]||ai,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let A=f;t.isImageBitmapLoader===!0&&(A=function(g){let m=new Ht(g);m.needsUpdate=!0,f(m)}),t.load(Li.resolveURL(u,r.path),A,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||D_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Nr,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Dr,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Nn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let u=s[je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],It),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,$e)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=on);let h=r.alphaMode||dl.OPAQUE;if(h===dl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===dl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Vt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Vt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Vt){let u=r.emissiveFactor;a.emissive=new Se().setRGB(u[0],u[1],u[2],It)}return r.emissiveTexture!==void 0&&o!==Vt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,$e)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&ss(s,u,r),u})}createUniqueName(e){let t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ff(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=L_(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Ff(new Bt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?C_(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,A=h.length;p<A;p++){let g=h[p],m=o[p],d,y=l[p];if(m.mode===Sn.TRIANGLES||m.mode===Sn.TRIANGLE_STRIP||m.mode===Sn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new jo(g,y):new yt(g,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Sn.TRIANGLE_STRIP?d.geometry=ul(d.geometry,ha):m.mode===Sn.TRIANGLE_FAN&&(d.geometry=ul(d.geometry,Br));else if(m.mode===Sn.LINES)d=new Qo(g,y);else if(m.mode===Sn.LINE_STRIP)d=new Ys(g,y);else if(m.mode===Sn.LINE_LOOP)d=new $o(g,y);else if(m.mode===Sn.POINTS)d=new ea(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&P_(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Ni(d,r),m.extensions&&ss(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,A=u.length;p<A;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ss(s,u[0],r),u[0];let f=new ft;r.extensions&&ss(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,A=u.length;p<A;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(vf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ws(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new He;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Zo(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],A=s.samplers[p.sampler],g=p.target,m=g.node,d=s.parameters!==void 0?s.parameters[A.input]:A.input,y=s.parameters!==void 0?s.parameters[A.output]:A.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",y)),l.push(A),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],A=u[2],g=u[3],m=u[4],d=[];for(let y=0,x=f.length;y<x;y++){let E=f[y],P=p[y],w=A[y],C=g[y],W=m[y];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let v=n._createAnimationTracks(E,P,w,C,W);if(v)for(let T=0;T<v.length;T++)d.push(v[T])}return new ia(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,N_)});for(let p=0,A=u.length;p<A;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Lr:l.length>1?h=new ft:l.length===1?h=l[0]:h=new mt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ni(h,r),r.extensions&&ss(n,h,r),r.matrix!==void 0){let u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),Ni(r,n),n.extensions&&ss(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof cn||f instanceof Ht)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Di[r.path]===Di.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Di[r.path]){case Di.weights:l=hi;break;case Di.rotation:l=Hn;break;case Di.position:case Di.scale:l=ui;break;default:switch(n.itemSize){case 1:l=hi;break;case 2:case 3:default:l=ui;break}break}let h=s.interpolation!==void 0?R_[s.interpolation]:$i,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let A=new l(c[f]+"."+Di[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(A),o.push(A)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Bl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Hn?Ol:pa;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function kf(i){let e=new Map,t=new Map,n=i.clone();return Hf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Hf(i.children[n],e.children[n],t)}var Vf=bt(()=>{});var Gf,Wf=bt(()=>{Gf={tvCabinet:"Z2xURgIAAAB4IAAAxAMAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjUuMSIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiVkVDMyIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyMjgsIm1heCI6WzAuODAwMDAwMDExOTIwOTI5LDAuMzEwMDAwMDAyMzg0MTg1OCwwXSwibWluIjpbMCwwLC0wLjI1XSwiYnVmZmVyVmlldyI6MCwiYnl0ZU9mZnNldCI6MH0seyJ0eXBlIjoiVkVDMyIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyMjgsImJ1ZmZlclZpZXciOjAsImJ5dGVPZmZzZXQiOjEyfSx7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTI1LCJjb3VudCI6NDYyLCJidWZmZXJWaWV3IjoxLCJieXRlT2Zmc2V0IjowfV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVPZmZzZXQiOjAsImJ5dGVMZW5ndGgiOjU0NzIsImJ5dGVTdHJpZGUiOjI0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZU9mZnNldCI6NTQ3MiwiYnl0ZUxlbmd0aCI6MTg0OCwidGFyZ2V0IjozNDk2M31dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo3MzIwfV0sIm1hdGVyaWFscyI6W3sibmFtZSI6Indvb2QiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjg5NjIyNjQsMC42MDE1NzEyLDAuMzkzMTU1OSwxXSwibWV0YWxsaWNGYWN0b3IiOjB9fV0sIm1lc2hlcyI6W3sibmFtZSI6Ik1lc2ggY2FiaW5ldFRlbGV2aXNpb24iLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjF9LCJtb2RlIjo0LCJtYXRlcmlhbCI6MCwiaW5kaWNlcyI6Mn1dfV0sIm5vZGVzIjpbeyJuYW1lIjoiY2FiaW5ldFRlbGV2aXNpb24oQ2xvbmUpIiwibWVzaCI6MH1dLCJzY2VuZXMiOlt7Im5vZGVzIjpbMF19XSwic2NlbmUiOjAsImV4dGVuc2lvbnNVc2VkIjpbIktIUl9tYXRlcmlhbHNfdW5saXQiXX0gmBwAAEJJTgAAAAAAvw4cJArXI70AAAAAAAAAAAAAgL8K1yM9vw4cJArXI70AAAAAAAAAAAAAgL8AAAAACtcjPQrXI70AAAAAAAAAAAAAgL8K1yM9CtcjPQrXI70AAAAAAAAAAAAAgL8K1yM9AAAAAAAAAIAAAIA/AAAAAAAAAIAK1yM9CtcjPQAAAIAAAIA/AAAAAAAAAIAK1yM9vw4cJArXI70AAIA/AAAAAAAAAIAK1yM9CtcjPQrXI70AAIA/AAAAAAAAAIAAAAAAvw4cJArXI70AAAAAAACAvwAAAIAAAAAAAAAAAAAAAIAAAAAAAACAvwAAAIAK1yM9vw4cJArXI70AAAAAAACAvwAAAIAK1yM9AAAAAAAAAIAAAAAAAACAvwAAAIAAAAAAIY6VJQAAgL4AAAAAAACAvwAAAIAAAAAAWRd3JT0KV74AAAAAAACAvwAAAIAK1yM9IY6VJQAAgL4AAAAAAACAvwAAAIAK1yM9WRd3JT0KV74AAAAAAACAvwAAAIAK1yM9CtcjPT0KV74AAIA/AAAAAAAAAIAK1yM9CtcjPQAAgL4AAIA/AAAAAAAAAIAK1yM9WRd3JT0KV74AAIA/AAAAAAAAAIAK1yM9IY6VJQAAgL4AAIA/AAAAAAAAAIAK1yM9cD2KPj0KV74AAAAAAACAvwAAAIAK1yM9cD2KPgAAAIAAAAAAAACAvwAAAIBcj0I/cD2KPj0KV74AAAAAAACAvwAAAIAVrsc+cD2KPs3MTL0AAAAAAACAvwAAAICG69E+cD2KPs3MTL0AAAAAAACAvwAAAICG69E+cD2KPpDC9bwAAAAAAACAvwAAAIAVrsc+cD2KPpDC9bwAAAAAAACAvwAAAIBcj0I/cD2KPgAAAIAAAAAAAACAvwAAAIAK1yM9CtejPT0KV74AAAAAAACAPwAAAIAVrsc+CtejPZDC9bwAAAAAAACAPwAAAIAK1yM9CtejPQAAAIAAAAAAAACAPwAAAIBcj0I/CtejPQAAAIAAAAAAAACAPwAAAICG69E+CtejPZDC9bwAAAAAAACAPwAAAICG69E+CtejPc3MTL0AAAAAAACAPwAAAIAVrsc+CtejPc3MTL0AAAAAAACAPwAAAIBcj0I/CtejPT0KV74AAAAAAACAPwAAAIAK1yM9WRd3JT0KV74AAAAAAAAAAAAAgD8AAAAAWRd3JT0KV74AAAAAAAAAAAAAgD8K1yM9CtcjPT0KV74AAAAAAAAAAAAAgD8AAAAACtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/SgyCJArXI70AAAAAAACAvwAAAIBcj0I/SgyCJKkT0KUAAAAAAACAvwAAAIDNzEw/SgyCJArXI70AAAAAAACAvwAAAIDNzEw/SgyCJKkT0KUAAAAAAACAvwAAAIBcj0I/SgyCJArXI70AAAAAAAAAAAAAgL/NzEw/SgyCJArXI70AAAAAAAAAAAAAgL9cj0I/CtcjPQrXI70AAAAAAAAAAAAAgL/NzEw/CtcjPQrXI70AAAAAAAAAAAAAgL9cj0I/CtcjPT0KV74AAIC/AAAAAAAAAIBcj0I/54yIJT0KV74AAIC/AAAAAAAAAIBcj0I/CtcjPQAAgL4AAIC/AAAAAAAAAIBcj0I/54yIJQAAgL4AAIC/AAAAAAAAAIDNzEw/54yIJT0KV74AAAAAAAAAAAAAgD9cj0I/54yIJT0KV74AAAAAAAAAAAAAgD/NzEw/CtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/CtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/54yIJQAAgL4AAAAAAACAvwAAAIBcj0I/54yIJT0KV74AAAAAAACAvwAAAIDNzEw/54yIJQAAgL4AAAAAAACAvwAAAIDNzEw/54yIJT0KV74AAAAAAACAvwAAAIAAAAAAUriePgAAAIAAAAAAAACAPwAAAIAAAAAAUriePgAAgL4AAAAAAACAPwAAAIDNzEw/UriePgAAAIAAAAAAAACAPwAAAIDNzEw/UriePgAAgL4AAAAAAACAPwAAAIAAAAAAUriePgAAAIAAAIC/AAAAAAAAAIAAAAAAAAAAAAAAAIAAAIC/AAAAAAAAAIAAAAAAUriePgAAgL4AAIC/AAAAAAAAAIAAAAAACtcjPQrXI70AAIC/AAAAAAAAAIAAAAAACtcjPT0KV74AAIC/AAAAAAAAAIAAAAAAWRd3JT0KV74AAIC/AAAAAAAAAIAAAAAAIY6VJQAAgL4AAIC/AAAAAAAAAIAAAAAAvw4cJArXI70AAIC/AAAAAAAAAIAAAAAAIY6VJQAAgL4AAAAAAAAAAAAAgL8K1yM9IY6VJQAAgL4AAAAAAAAAAAAAgL8AAAAAUriePgAAgL4AAAAAAAAAAAAAgL8K1yM9CtcjPQAAgL4AAAAAAAAAAAAAgL9cj0I/CtcjPQAAgL4AAAAAAAAAAAAAgL/NzEw/UriePgAAgL4AAAAAAAAAAAAAgL/NzEw/54yIJQAAgL4AAAAAAAAAAAAAgL9cj0I/54yIJQAAgL4AAAAAAAAAAAAAgL/NzEw/SgyCJKkT0KUAAIA/AAAAAAAAAIDNzEw/CtcjPQrXI70AAIA/AAAAAAAAAIDNzEw/SgyCJArXI70AAIA/AAAAAAAAAIDNzEw/UriePgAAgL4AAIA/AAAAAAAAAIDNzEw/UriePgAAAIAAAIA/AAAAAAAAAIDNzEw/CtcjPT0KV74AAIA/AAAAAAAAAIDNzEw/54yIJT0KV74AAIA/AAAAAAAAAIDNzEw/54yIJQAAgL4AAIA/AAAAAAAAAIDNzEw/SgyCJKkT0KUAAAAAAAAAAAAAgD9cj0I/SgyCJKkT0KUAAAAAAAAAAAAAgD/NzEw/UriePgAAAIAAAAAAAAAAAAAAgD9cj0I/CtcjPQAAAIAAAAAAAAAAAAAAgD9cj0I/CtejPQAAAIAAAAAAAAAAAAAAgD8K1yM9CtcjPQAAAIAAAAAAAAAAAAAAgD9cj0I/cD2KPgAAAIAAAAAAAAAAAAAAgD8K1yM9cD2KPgAAAIAAAAAAAAAAAAAAgD8K1yM9CtejPQAAAIAAAAAAAAAAAAAAgD8AAAAAUriePgAAAIAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAAIAAAAAAAAAAAAAAgD8K1yM9AAAAAAAAAIAAAAAAAAAAAAAAgD8K1yM9wvUoPj0KV74AAAAAAACAvwAAAIAK1yM9wvUoPpDC9bwAAAAAAACAvwAAAIBcj0I/wvUoPj0KV74AAAAAAACAvwAAAIAVrsc+wvUoPs3MTL0AAAAAAACAvwAAAICG69E+wvUoPs3MTL0AAAAAAACAvwAAAICG69E+wvUoPpDC9bwAAAAAAACAvwAAAIBcj0I/wvUoPpDC9bwAAAAAAACAvwAAAIAVrsc+wvUoPpDC9bwAAAAAAACAvwAAAICG69E+o3A9PpDC9bwAAAAAAACAPwAAAICG69E+o3A9Ps3MTL0AAAAAAACAPwAAAIBcj0I/o3A9PpDC9bwAAAAAAACAPwAAAIBcj0I/o3A9Pj0KV74AAAAAAACAPwAAAIAVrsc+o3A9Ps3MTL0AAAAAAACAPwAAAIAK1yM9o3A9Pj0KV74AAAAAAACAPwAAAIAVrsc+o3A9PpDC9bwAAAAAAACAPwAAAIAK1yM9o3A9PpDC9bwAAAAAAACAPwAAAIBcj0I/o3A9Pj0KV74AAAAAAAAAAAAAgD8K1yM9o3A9Pj0KV74AAAAAAAAAAAAAgD9cj0I/cD2KPj0KV74AAAAAAAAAAAAAgD8K1yM9cD2KPj0KV74AAAAAAAAAAAAAgD9cj0I/CtejPT0KV74AAAAAAAAAAAAAgD8K1yM9CtejPT0KV74AAAAAAAAAAAAAgD9cj0I/wvUoPj0KV74AAAAAAAAAAAAAgD8K1yM9wvUoPj0KV74AAAAAAAAAAAAAgD9cj0I/CtcjPT0KV74AAAAAAACAvwAAAIBcj0I/CtcjPQrXI70AAAAAAACAvwAAAIDNzEw/CtcjPT0KV74AAAAAAACAvwAAAIDNzEw/CtcjPQrXI70AAAAAAACAvwAAAIBcj0I/CtcjPQAAAIAAAAAAAACAvwAAAIBcj0I/CtcjPQAAgL4AAAAAAACAvwAAAIAK1yM9CtcjPQAAAIAAAAAAAACAvwAAAIAK1yM9CtcjPQrXI70AAAAAAACAvwAAAIAK1yM9CtcjPT0KV74AAAAAAACAvwAAAIAK1yM9CtcjPQAAgL4AAAAAAACAvwAAAIAAAAAACtcjPQrXI70AAAAAAACAvwAAAIAAAAAACtcjPT0KV74AAAAAAACAvwAAAIBcj0I/CtcjPQAAAIAAAIC/AAAAAAAAAIBcj0I/SgyCJKkT0KUAAIC/AAAAAAAAAIBcj0I/CtcjPQrXI70AAIC/AAAAAAAAAIBcj0I/SgyCJArXI70AAIC/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAAAAAAAAAAAAgL+G69E+o3A9PpDC9bwAAAAAAAAAAAAAgL8Vrsc+cD2KPpDC9bwAAAAAAAAAAAAAgL+G69E+cD2KPpDC9bwAAAAAAAAAAAAAgL9cj0I/o3A9PpDC9bwAAAAAAAAAAAAAgL8K1yM9o3A9PpDC9bwAAAAAAAAAAAAAgL9cj0I/wvUoPpDC9bwAAAAAAAAAAAAAgL+G69E+wvUoPpDC9bwAAAAAAAAAAAAAgL8Vrsc+wvUoPpDC9bwAAAAAAAAAAAAAgL8K1yM9wvUoPpDC9bwAAAAAAAAAAAAAgL8Vrsc+CtejPZDC9bwAAAAAAAAAAAAAgL+G69E+CtejPZDC9bwAAAAAAAAAAAAAgL8Vrsc+cD2KPpDC9bwAAAAAAAAAAAAAgD+G69E+o3A9PpDC9bwAAAAAAAAAAAAAgD8Vrsc+o3A9PpDC9bwAAAAAAAAAAAAAgD+G69E+cD2KPpDC9bwAAAAAAAAAAAAAgD9cj0I/o3A9PpDC9bwAAAAAAAAAAAAAgD8K1yM9o3A9PpDC9bwAAAAAAAAAAAAAgD9cj0I/wvUoPpDC9bwAAAAAAAAAAAAAgD+G69E+wvUoPpDC9bwAAAAAAAAAAAAAgD8Vrsc+wvUoPpDC9bwAAAAAAAAAAAAAgD8K1yM9wvUoPpDC9bwAAAAAAAAAAAAAgD8Vrsc+CtejPZDC9bwAAAAAAAAAAAAAgD+G69E+CtejPZDC9bwAAAAAAAAAAAAAgD8K1yM9cD2KPgAAAIAAAIA/AAAAAAAAAIAK1yM9wvUoPpDC9bwAAIA/AAAAAAAAAIAK1yM9CtejPQAAAIAAAIA/AAAAAAAAAIAK1yM9CtejPT0KV74AAIA/AAAAAAAAAIAK1yM9wvUoPj0KV74AAIA/AAAAAAAAAIAK1yM9o3A9PpDC9bwAAIA/AAAAAAAAAIAK1yM9cD2KPj0KV74AAIA/AAAAAAAAAIAK1yM9o3A9Pj0KV74AAIA/AAAAAAAAAIBcj0I/CtejPQAAAIAAAIC/AAAAAAAAAIBcj0I/o3A9PpDC9bwAAIC/AAAAAAAAAIBcj0I/cD2KPgAAAIAAAIC/AAAAAAAAAIBcj0I/cD2KPj0KV74AAIC/AAAAAAAAAIBcj0I/o3A9Pj0KV74AAIC/AAAAAAAAAIBcj0I/wvUoPpDC9bwAAIC/AAAAAAAAAIBcj0I/CtejPT0KV74AAIC/AAAAAAAAAIBcj0I/wvUoPj0KV74AAIC/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAAAAAAAAAAAAgL+G69E+o3A9Ps3MTL0AAAAAAAAAAAAAgL8Vrsc+cD2KPs3MTL0AAAAAAAAAAAAAgL+G69E+cD2KPs3MTL0AAAAAAAAAAAAAgL8Vrsc+cD2KPs3MTL0AAAAAAAAAAAAAgD+G69E+o3A9Ps3MTL0AAAAAAAAAAAAAgD8Vrsc+o3A9Ps3MTL0AAAAAAAAAAAAAgD+G69E+cD2KPs3MTL0AAAAAAAAAAAAAgD+G69E+o3A9PpDC9bwAAIA/AAAAAAAAAICG69E+cD2KPpDC9bwAAIA/AAAAAAAAAICG69E+o3A9Ps3MTL0AAIA/AAAAAAAAAICG69E+cD2KPs3MTL0AAIA/AAAAAAAAAICG69E+o3A9Ps3MTL0AAIC/AAAAAAAAAICG69E+cD2KPpDC9bwAAIC/AAAAAAAAAICG69E+o3A9PpDC9bwAAIC/AAAAAAAAAICG69E+cD2KPs3MTL0AAIC/AAAAAAAAAIAVrsc+cD2KPpDC9bwAAIC/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAIC/AAAAAAAAAIAVrsc+cD2KPs3MTL0AAIC/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAIC/AAAAAAAAAIAVrsc+cD2KPs3MTL0AAIA/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAIA/AAAAAAAAAIAVrsc+cD2KPpDC9bwAAIA/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAAAAAAAAAAAAgL+G69E+wvUoPs3MTL0AAAAAAAAAAAAAgL8Vrsc+CtejPc3MTL0AAAAAAAAAAAAAgL8Vrsc+wvUoPs3MTL0AAAAAAAAAAAAAgL8Vrsc+CtejPc3MTL0AAAAAAAAAAAAAgD+G69E+wvUoPs3MTL0AAAAAAAAAAAAAgD+G69E+CtejPc3MTL0AAAAAAAAAAAAAgD8Vrsc+wvUoPs3MTL0AAAAAAAAAAAAAgD8Vrsc+wvUoPpDC9bwAAIC/AAAAAAAAAIAVrsc+CtejPZDC9bwAAIC/AAAAAAAAAIAVrsc+wvUoPs3MTL0AAIC/AAAAAAAAAIAVrsc+CtejPc3MTL0AAIC/AAAAAAAAAIAVrsc+wvUoPs3MTL0AAIA/AAAAAAAAAIAVrsc+CtejPZDC9bwAAIA/AAAAAAAAAIAVrsc+wvUoPpDC9bwAAIA/AAAAAAAAAIAVrsc+CtejPc3MTL0AAIA/AAAAAAAAAICG69E+CtejPZDC9bwAAIA/AAAAAAAAAICG69E+wvUoPpDC9bwAAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAIA/AAAAAAAAAICG69E+wvUoPs3MTL0AAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAIC/AAAAAAAAAICG69E+wvUoPpDC9bwAAIC/AAAAAAAAAICG69E+CtejPZDC9bwAAIC/AAAAAAAAAICG69E+wvUoPs3MTL0AAIC/AAAAAAAAAIACAAAAAQAAAAAAAAABAAAAAgAAAAMAAAAGAAAABQAAAAQAAAAFAAAABgAAAAcAAAAKAAAACQAAAAgAAAAJAAAACgAAAAsAAAAOAAAADQAAAAwAAAANAAAADgAAAA8AAAASAAAAEQAAABAAAAARAAAAEgAAABMAAAAWAAAAFQAAABQAAAAVAAAAFgAAABcAAAAXAAAAFgAAABgAAAAYAAAAFgAAABkAAAAaAAAAFQAAABcAAAAVAAAAGgAAABsAAAAbAAAAGgAAABkAAAAbAAAAGQAAABYAAAAeAAAAHQAAABwAAAAdAAAAHgAAAB8AAAAdAAAAHwAAACAAAAAgAAAAHwAAACEAAAAiAAAAHAAAAB0AAAAcAAAAIgAAACMAAAAjAAAAIgAAACEAAAAjAAAAIQAAAB8AAAAmAAAAJQAAACQAAAAlAAAAJgAAACcAAAAqAAAAKQAAACgAAAApAAAAKgAAACsAAAAuAAAALQAAACwAAAAtAAAALgAAAC8AAAAyAAAAMQAAADAAAAAxAAAAMgAAADMAAAA2AAAANQAAADQAAAA1AAAANgAAADcAAAA6AAAAOQAAADgAAAA5AAAAOgAAADsAAAA+AAAAPQAAADwAAAA9AAAAPgAAAD8AAABCAAAAQQAAAEAAAABBAAAAQgAAAEMAAABDAAAAQgAAAEQAAABEAAAAQgAAAEUAAABFAAAAQgAAAEYAAABHAAAAQQAAAEMAAABKAAAASQAAAEgAAABJAAAASgAAAEsAAABLAAAASgAAAEwAAABNAAAATAAAAEoAAABOAAAATAAAAE0AAABMAAAATgAAAE8AAABSAAAAUQAAAFAAAABTAAAAUAAAAFEAAABQAAAAUwAAAFQAAABTAAAAUQAAAFUAAABTAAAAVQAAAFYAAABTAAAAVgAAAFcAAABaAAAAWQAAAFgAAABZAAAAWgAAAFsAAABbAAAAWgAAAFwAAABbAAAAXAAAAF0AAABcAAAAWgAAAF4AAABeAAAAWgAAAF8AAABgAAAAXQAAAFwAAABhAAAAXQAAAGAAAABhAAAAYAAAAF8AAABhAAAAXwAAAFoAAABiAAAAXQAAAGEAAABdAAAAYgAAAGMAAABmAAAAZQAAAGQAAABlAAAAZgAAAGcAAABnAAAAZgAAAGgAAABoAAAAZgAAAGkAAABpAAAAZgAAAGoAAABrAAAAZQAAAGcAAABuAAAAbQAAAGwAAABvAAAAbQAAAG4AAABvAAAAcAAAAG0AAABxAAAAcAAAAG8AAABxAAAAcgAAAHAAAAByAAAAcQAAAHMAAAB2AAAAdQAAAHQAAAB1AAAAdgAAAHcAAAB6AAAAeQAAAHgAAAB5AAAAegAAAHsAAAB+AAAAfQAAAHwAAAB9AAAAfgAAAH8AAACAAAAAfAAAAH0AAACAAAAAgQAAAHwAAACCAAAAgQAAAIAAAACDAAAAgQAAAIIAAACEAAAAgQAAAIMAAACBAAAAhAAAAIUAAACGAAAAhAAAAIMAAACEAAAAhgAAAIcAAACKAAAAiQAAAIgAAACJAAAAigAAAIsAAACOAAAAjQAAAIwAAACNAAAAjgAAAI8AAACQAAAAjAAAAI0AAACQAAAAkQAAAIwAAACSAAAAkQAAAJAAAACTAAAAkQAAAJIAAACUAAAAkQAAAJMAAACRAAAAlAAAAJUAAACTAAAAlgAAAJQAAACWAAAAkwAAAJcAAACaAAAAmQAAAJgAAACbAAAAmAAAAJkAAACZAAAAmgAAAJwAAACaAAAAnQAAAJwAAACcAAAAnQAAAJ4AAACeAAAAnQAAAJ8AAACfAAAAnQAAAKAAAAChAAAAoAAAAJ0AAACgAAAAogAAAJ8AAACjAAAAnwAAAKIAAACmAAAApQAAAKQAAAClAAAApgAAAKcAAAClAAAApwAAAKgAAACpAAAApAAAAKUAAACkAAAAqQAAAKoAAACqAAAAqQAAAKsAAACuAAAArQAAAKwAAACtAAAArgAAAK8AAACtAAAArwAAALAAAACxAAAArAAAAK0AAACsAAAAsQAAALIAAACyAAAAsQAAALMAAAC2AAAAtQAAALQAAAC1AAAAtgAAALcAAAC6AAAAuQAAALgAAAC7AAAAuAAAALkAAAC+AAAAvQAAALwAAAC9AAAAvgAAAL8AAADCAAAAwQAAAMAAAADDAAAAwAAAAMEAAADGAAAAxQAAAMQAAADFAAAAxgAAAMcAAADKAAAAyQAAAMgAAADLAAAAyAAAAMkAAADOAAAAzQAAAMwAAADNAAAAzgAAAM8AAADSAAAA0QAAANAAAADTAAAA0AAAANEAAADWAAAA1QAAANQAAADVAAAA1gAAANcAAADaAAAA2QAAANgAAADbAAAA2AAAANkAAADeAAAA3QAAANwAAADdAAAA3gAAAN8AAADiAAAA4QAAAOAAAADjAAAA4AAAAOEAAAA="}});function O_(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function qf(){let i=new da;return Promise.all(Object.entries(Gf).map(([e,t])=>new Promise(n=>{try{i.parse(O_(t),"",s=>{s.scene.traverse(r=>{if(r.isMesh){r.castShadow=r.receiveShadow=!0;for(let o of[].concat(r.material))o.map&&(o.map.colorSpace=$e),o.roughness=Math.max(o.roughness??1,.55),o.metalness=Math.min(o.metalness??0,.2)}}),Xf.set(e,s),n()},s=>{console.warn("model",e,s),n()})}catch(s){console.warn("model",e,s),n()}})))}function Yf(i,{w:e,h:t,d:n,stretch:s=!1,turn:r=0,colors:o}={}){let a=Xf.get(i),c=new ft;if(c.name=i,!a)return c;let l=a.animations.length?kf(a.scene):a.scene.clone(!0);l.rotation.y=r,l.updateMatrixWorld(!0);let h=new pt().setFromObject(l),u=h.getSize(new R),f,p,A;if(s){let m=t?t/u.y:e?e/u.x:n/u.z;f=e?e/u.x:m,p=t?t/u.y:m,A=n?n/u.z:m}else f=p=A=t?t/u.y:e?e/u.x:n?n/u.z:1;let g=new ft;return g.add(l),g.scale.set(f,p,A),g.position.set(-(h.min.x+u.x/2)*f,-h.min.y*p,-(h.min.z+u.z/2)*A),c.add(g),o&&F_(c,o),c.userData.size=new R(u.x*f,u.y*p,u.z*A),c}function F_(i,e){let t=new Map;i.traverse(n=>{n.isMesh&&(n.material=[].concat(n.material).map(s=>{if(!(s.name in e))return s;if(!t.has(s)){let r=s.clone();r.color.set(e[s.name]),t.set(s,r)}return t.get(s)}),n.material.length===1&&(n.material=n.material[0]))})}function Kf(i,e,t,n,s=0,r=0){return e.position.set(t,r,n),e.rotation.y=s,i.add(e),e}var Xf,kl=bt(()=>{Un();zf();Vf();Wf();Xf=new Map});function En(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;kr.copy(e),kr[n]=0,kr.normalize();let l=.5*o/(o+a),h=1-kr.angleTo(i)/c;return Math.sign(kr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var kr,Ui,jf=bt(()=>{Un();kr=new R;Ui=class extends vn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,c=new R,l=new R(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,A=new R,g=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:A.set(1,0,0),f[d+0]=En(A,c,"z","y",r,n),f[d+1]=1-En(A,c,"y","z",r,t);break;case 1:A.set(-1,0,0),f[d+0]=1-En(A,c,"z","y",r,n),f[d+1]=1-En(A,c,"y","z",r,t);break;case 2:A.set(0,1,0),f[d+0]=1-En(A,c,"x","z",r,e),f[d+1]=En(A,c,"z","x",r,n);break;case 3:A.set(0,-1,0),f[d+0]=1-En(A,c,"x","z",r,e),f[d+1]=1-En(A,c,"z","x",r,n);break;case 4:A.set(0,0,1),f[d+0]=1-En(A,c,"x","y",r,e),f[d+1]=1-En(A,c,"y","x",r,t);break;case 5:A.set(0,0,-1),f[d+0]=En(A,c,"x","y",r,e),f[d+1]=1-En(A,c,"y","x",r,t);break}}}});function Vn(i=1){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Zf(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Tn(i,e=[1,1]){let t=new Ks(i);return t.colorSpace=$e,t.wrapS=t.wrapT=ai,t.repeat.set(...e),t.anisotropy=8,t}function Jf(){let[i,e]=Zf(128,128);e.font='bold 110px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=12,e.strokeStyle="#1d3557",e.strokeText("Z",64,68),e.fillStyle="#fff3b0",e.fillText("Z",64,68);let t=Tn(i);return t.wrapS=t.wrapT=Ft,t}var ma,Aa=bt(()=>{Un();ma=class{constructor(){[this.c,this.g]=Zf(256,192),this.texture=Tn(this.c),this.texture.wrapS=this.texture.wrapT=Ft,this.t=0,this.flash=0}update(e){let t=this.g,n=this.t+=e,s=256,r=192;t.fillStyle="#10163a",t.fillRect(0,0,s,r),t.fillStyle="#fff";for(let l=0;l<30;l++)t.fillRect((l*53-n*8)%s+(l*53-n*8<0?s:0),l*37%110,2,2);t.fillStyle="#2f855a",t.fillRect(0,150,s,42),t.fillStyle="#8b5a2b";for(let l=-(n*60%32);l<s;l+=32)t.fillRect(l,150,30,6);let o=s-n*60%(s+40);t.fillStyle="#d69e2e",t.fillRect(o,126,24,24),t.fillStyle="#744210",t.fillRect(o+9,133,6,8);let a=o-70,c=a>0&&a<70?Math.sin(a/70*Math.PI)*52:0;t.fillStyle="#e53e3e",t.fillRect(64,122-c,20,10),t.fillStyle="#f6c89f",t.fillRect(66,132-c,16,8),t.fillStyle="#3182ce",t.fillRect(64,140-c,20,10),t.fillStyle="#f6e05e",t.font='bold 14px "Courier New", monospace',t.fillText(`SCORE ${String(Math.floor(n*10)*10).padStart(6,"0")}`,8,18),this.flash>0&&(this.flash-=e,t.fillStyle=`rgba(255,255,255,${Math.min(1,this.flash*2)})`,t.fillRect(0,0,s,r),t.fillStyle="#e53e3e",t.font='bold 48px "Courier New", monospace',t.textAlign="center",t.fillText("HI!",s/2,r/2+16),t.textAlign="left"),t.fillStyle="rgba(0,0,0,0.18)";for(let l=0;l<r;l+=3)t.fillRect(0,l,s,1);this.texture.needsUpdate=!0}}});var ga,Qf=bt(()=>{ga={"Post 1":{x:-3.2,z:.4,ry:0,gone:!0},"Post 2":{x:.293,z:.4,ry:0},"Post 3":{x:2,z:.4,ry:0,gone:!0},"Window (west)":{x:3.309,z:-3.59,ry:0},"Window (over the hoop)":{x:-3.932,z:-3.566,ry:.0664},Clock:{x:.687,z:-3.57,ry:0},"Play mat":{x:4.395,z:-.755,ry:-1.5782},Couch:{x:1.992,z:-2.42,ry:1.5708},Armchair:{x:2.768,z:-.45,ry:2.5597},Ottoman:{x:3.319,z:-1.158,ry:-.6523},"Basketball hoop":{x:-4.93,z:-3.29,ry:.7854},"Toy house":{x:-4.914,z:-1.7,ry:1.5708},"Red ride-on toy":{x:-3.166,z:-2.017,ry:.6},"Kids' table":{x:4.88,z:2.128,ry:-1.5708},"Braided rug":{x:4.239,z:3.573,ry:.2472},"Totes + pillows":{x:2.1,z:4.64,ry:0},"Bean bag":{x:3.122,z:4.61,ry:0},Fridge:{x:1.2,z:4.36,ry:0},"Black shelves":{x:.554,z:4.434,ry:1.588},"Post 4":{x:-.661,z:3.857,ry:0},"Dining table + chairs":{x:-1.494,z:1.047,ry:-1.5738},"Water cooler":{x:-3.313,z:3.72,ry:0},"Laundry sink":{x:-8.371,z:2.083,ry:4.7146},"Paper towel rack":{x:-8.4,z:2.1,ry:1.5708,gone:!0},Furnace:{x:-5.993,z:2.245,ry:0}}});function pi(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function $f(){let[i,e]=pi(1024,512),t=Vn(4),n=256,s=128;e.fillStyle="#efeadf",e.fillRect(0,0,1024,512);for(let r=0;r<4;r++)for(let o=-1;o<5;o++){let a=o*n+r%2*n/2,c=r*s,l=236+Math.floor(t()*10);e.fillStyle=`rgb(${l},${l-4},${l-14})`,e.fillRect(a+4,c+4,n-8,s-8);for(let h=0;h<60;h++)e.fillStyle=`rgba(150,140,120,${t()*.12})`,e.fillRect(a+t()*n,c+t()*s,3,3)}e.strokeStyle="rgba(160,150,130,0.55)",e.lineWidth=6;for(let r=0;r<=4;r++)e.beginPath(),e.moveTo(0,r*s),e.lineTo(1024,r*s),e.stroke();for(let r=0;r<4;r++)for(let o=0;o<=4;o++){let a=o*n+r%2*n/2;e.beginPath(),e.moveTo(a,r*s),e.lineTo(a,r*s+s),e.stroke()}return Tn(i)}function ed(){let[i,e]=pi(512,512),t=256;e.fillStyle="#ece6da",e.fillRect(0,0,512,512),e.strokeStyle="rgba(170,160,145,0.28)",e.lineWidth=2;for(let n=0;n<2;n++)for(let s=0;s<2;s++){let r=n*t,o=s*t;e.beginPath();for(let a=0;a<=8;a++){let c=r+a*t/8;e.lineTo(c,o+(a%2?4:-4))}e.stroke(),e.beginPath();for(let a=0;a<=8;a++){let c=o+a*t/8;e.lineTo(r+(a%2?4:-4),c)}e.stroke()}for(let n=0,s=Vn(8);n<900;n++)e.fillStyle=`rgba(120,110,95,${s()*.06})`,e.fillRect(s()*512,s()*512,2,2);return Tn(i)}function td(){let[i,e]=pi(512,512),t=256;e.fillStyle="#5a4a3a",e.beginPath(),e.arc(t,t,t,0,7),e.fill(),e.fillStyle="#e9e1cf",e.beginPath(),e.arc(t,t,t-16,0,7),e.fill(),e.fillStyle="#2c2a2a",e.beginPath(),e.arc(t,t,110,0,7),e.fill(),e.fillStyle="#e9e1cf",e.font="bold 34px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText("OLD TOWN",t,t-12),e.font="20px Georgia, serif",e.fillText("CLOCK CO.",t,t+24);let n=["#9a4b3a","#4d6a7a","#a88b4a","#6b7a5a"];for(let s=1;s<=12;s++){let r=s/12*Math.PI*2-Math.PI/2,o=t+Math.cos(r)*180,a=t+Math.sin(r)*180;e.fillStyle=n[s%4],e.beginPath(),e.arc(o,a,40,0,7),e.fill(),e.fillStyle="#efe7d6",e.beginPath(),e.arc(o,a,31,0,7),e.fill(),e.fillStyle="#2c2a2a",e.font="bold 36px Georgia, serif",e.fillText(String(s),o,a+2)}return er(Tn(i))}function nd(){let[i,e]=pi(1024,683),t=1024,n=683,s=Vn(5);e.fillStyle="#7cc46a",e.fillRect(0,0,t,n),e.fillStyle="#bfe6f7",e.fillRect(70,70,t-140,n*.55),["#e53e3e","#f6ad55","#f6e05e","#68d391","#4299e1","#805ad5"].forEach((l,h)=>{e.strokeStyle=l,e.lineWidth=26,e.beginPath(),e.arc(t*.55,n*.62,300-h*26,Math.PI,0),e.stroke()});for(let[l,h]of[[300,180],[760,150],[520,120]]){e.fillStyle="#fff";for(let u of[0,30,60])e.beginPath(),e.arc(l+u,h,26,0,7),e.fill()}for(let l=0;l<30;l++)e.fillStyle=["#f687b3","#f6e05e","#fff"][l%3],e.beginPath(),e.arc(80+s()*(t-160),n*.7+s()*120,9,0,7),e.fill();let r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",o=["#e53e3e","#dd6b20","#d69e2e","#38a169","#3182ce","#805ad5","#d53f8c"];e.font='bold 50px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle";let a=(l,h,u)=>{e.fillStyle=o[u%7],e.fillRect(l,h,66,66),e.fillStyle="#fff",e.fillText(r[u%26],l+33,h+36)},c=0;for(let l=0;l<t;l+=68)a(l,0,c++);for(let l=68;l<n-68;l+=68)a(t-68,l,c++);for(let l=t-68;l>=0;l-=68)a(l,n-68,c++);for(let l=n-136;l>=68;l-=68)a(0,l,c++);return er(Tn(i))}function id(i){let[e,t]=pi(320,400),n=t.createLinearGradient(0,0,0,400);n.addColorStop(0,i?"#d8cfe0":"#d9d2c4"),n.addColorStop(1,i?"#b8aec8":"#a89a86"),t.fillStyle=n,t.fillRect(0,0,320,400),t.fillStyle=i?"#f3d9cf":"#f0d5c2",t.beginPath(),t.ellipse(160,215,105,120,0,0,7),t.fill(),t.fillStyle="#e8b7a8";for(let s of[95,225])t.beginPath(),t.arc(s,250,22,0,7),t.fill();t.strokeStyle="#5a4034",t.lineWidth=5,t.lineCap="round";for(let s of[118,202])t.beginPath(),t.arc(s,205,16,.2,Math.PI-.2),t.stroke();return t.beginPath(),t.arc(160,285,14,.3,Math.PI-.3),t.stroke(),i?(t.fillStyle="#9b7fc8",t.fillRect(55,110,210,34),t.beginPath(),t.ellipse(115,95,70,45,-.4,0,7),t.fill(),t.beginPath(),t.ellipse(205,95,70,45,.4,0,7),t.fill(),t.fillStyle="#7d5fb0",t.beginPath(),t.arc(160,108,26,0,7),t.fill()):(t.fillStyle="#6b5442",t.beginPath(),t.ellipse(160,110,95,30,0,Math.PI,0),t.fill()),t.fillStyle="#f4f1ea",t.fillRect(40,340,240,60),er(Tn(e))}function sd(){let[i,e]=pi(256,512),t=Vn(12);e.fillStyle="#f2f1ec",e.fillRect(0,0,256,512);for(let n=0;n<9;n++)e.fillStyle=["#fff","#fefcbf","#e9d8fd"][n%3],e.save(),e.translate(30+t()*190,30+t()*170),e.rotate((t()-.5)*.4),e.fillRect(-28,-34,56,68),e.strokeStyle=["#e53e3e","#3182ce","#38a169"][n%3],e.lineWidth=3,e.beginPath(),e.arc(0,-4,14,0,7),e.stroke(),e.restore();for(let n=0;n<14;n++){let s=30+t()*200,r=40+t()*300,o=["#e53e3e","#f6ad55","#38a169","#805ad5","#d53f8c","#3182ce"][n%6];e.fillStyle=o;for(let a=0;a<6;a++)e.beginPath(),e.arc(s+Math.cos(a)*11,r+Math.sin(a)*11,8,0,7),e.fill();e.fillStyle="#f6e05e",e.beginPath(),e.arc(s,r,7,0,7),e.fill()}return e.fillStyle="#c9c7c0",e.fillRect(226,120,10,160),er(Tn(i))}function rd(){let[i,e]=pi(256,256);e.fillStyle="#f7f5f0",e.fillRect(0,0,256,256),e.fillStyle="rgba(110,110,120,0.35)";for(let t=0;t<256;t+=32)e.fillRect(0,t,256,3);return Tn(i)}function od(){let[i,e]=pi(256,256),t=Vn(30);e.fillStyle="#1b1f2e",e.fillRect(0,0,256,256);for(let n=10;n<250;n+=9){let s=8+Math.floor(t()*4)*10;for(;s<230&&t()>.15;){let r=10+t()*40;e.fillStyle=["#c792ea","#82aaff","#c3e88d","#f78c6c","#d6deeb"][Math.floor(t()*5)],e.fillRect(s,n,r,4),s+=r+6}}return er(Tn(i))}function ad(i){let[e,t]=pi(512,128);return t.fillStyle="rgba(29,53,87,0.85)",t.beginPath(),t.roundRect(4,4,504,120,28),t.fill(),t.fillStyle="#fff3b0",t.font="bold 84px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,256,68),er(Tn(e))}var er,cd=bt(()=>{Un();Aa();er=i=>(i.wrapS=i.wrapT=Ft,i)});function ld(i){var pe;let e=(M,N={})=>new Nn({color:M,roughness:.85,metalness:0,...N}),t=(M,N=2)=>new Nn({color:M,emissive:M,emissiveIntensity:N});function n(M,N,U=0,D=0,Y=0,ae=i,{cast:ne=!0,receive:Q=!0}={}){let $=new yt(M,N);return $.position.set(U,D,Y),$.castShadow=ne,$.receiveShadow=Q,ae.add($),$}let s=(M,N,U,D,Y,ae,ne,Q=i,$)=>n(new vn(M,N,U),D,Y,ae,ne,Q,$),r=(M,N,U,D,Y,ae,ne,Q=i,$)=>s(M,N,U,D,Y,ae+N/2,ne,Q,$),o=Vn(21),a=[],c=[],l=(M,N,U,D,Y)=>c.push({x0:M,x1:N,z0:U,z1:D,...Y?{under:Y}:{}});function h(M,{fly:N=!0,drive:U=!0,under:D}={}){M.updateMatrixWorld(!0);let Y=new pt().setFromObject(M);return Y.isEmpty()||(N&&a.push({x0:Y.min.x,x1:Y.max.x,z0:Y.min.z,z1:Y.max.z,y1:Y.max.y,...D?{under:D}:{}}),U&&l(Y.min.x,Y.max.x,Y.min.z,Y.max.z,D),U&&D&&u(M)),M}function u(M){M.updateMatrixWorld(!0),M.traverse(N=>{if(!N.isMesh)return;let U=new pt().setFromObject(N);U.min.y<.02&&l(U.min.x,U.max.x,U.min.z,U.max.z)})}let f=[],p=new Set,A=(M,N)=>(f.push({id:f.length+1,name:M,at:N}),p.add(N),N);function g(M,N){let U=i.children.slice(N).filter(ne=>!p.has(ne)),D=new pt;for(let ne of U)D.expandByObject(ne);let Y=new ft,ae=D.isEmpty()?new R:D.getCenter(new R);Y.position.set(ae.x,0,ae.z),i.add(Y),Y.updateMatrixWorld(!0);for(let ne of U)Y.attach(ne);return A(M,Y)}let m=(M,N,U=0,D=0)=>{let Y=new ft;return Y.position.set(M,D,N),Y.rotation.y=U,i.add(Y),Y},d=dt-gt,y=nn-An,x=(An+nn)/2,E=nt+Hl,P=ed();P.repeat.set(d/1.2,y/1.2),n(new zt(d,y).rotateX(-Math.PI/2),e(16777215,{map:P,roughness:.95}),0,0,x,i,{cast:!1});let w=$f(),C=M=>{let N=w.clone();return N.repeat.set(M/1.6,E/.8),N.needsUpdate=!0,e(16777215,{map:N,roughness:.9,side:on})};function W(M,N,U,D){let Y=Math.hypot(U-M,D-N),ae=n(new zt(Y,E),C(Y),(M+U)/2,E/2,(N+D)/2,i,{cast:!1});return ae.rotation.y=Math.atan2(-(D-N),U-M),ae}W(gt,An,dt,An),W(dt,An,dt,nn),W(gt,tr.z0,gt,An),W(gt,nn,gt,tr.z1),W(dt,nn,At,nn),W(At,nn,At,rs.z0),W(At,rs.z0,gt,rs.z0),l(gt-.05,gt+.05,An,tr.z0),l(gt-.05,gt+.05,tr.z1,nn),l(At,gt+.05,An,rs.z0);let v=e(10514495,{roughness:.8}),T=e(9068342,{roughness:.9});for(let M=At+.2;M<dt;M+=.4)s(.045,Hl,y-.02,v,M,nt+Hl/2,x,i,{cast:!1});n(new zt(dt-At,y).rotateX(Math.PI/2),T,(dt+At)/2,E+.004,x,i,{cast:!1});let V=e(15921386,{roughness:.6}),K=e(6120038,{roughness:.5,metalness:.3});s(dt-At-.02,nt-Dt-.004,.2,V,(dt+At)/2,(Dt+nt-.004)/2,sn,i,{cast:!1}),s(dt-At-.02,.02,.22,e(3815994),(dt+At)/2,Dt+.006,sn,i,{cast:!1});for(let[M,N]of B_.entries()){let U=i.children.length;n(new Ye(.05,.05,Dt,20),K,N,Dt/2,sn),s(.16,.012,.16,K,N,.006,sn),s(.16,.012,.16,K,N,Dt-.012,sn),l(N-.06,N+.06,sn-.06,sn+.06),g(`Post ${M+1}`,U)}let le=e(12896460,{roughness:.35,metalness:.6});n(new Ye(.09,.09,7.5,18).rotateZ(Math.PI/2),le,-.8,nt-.1,sn-.5,i,{cast:!1}),r(.4,.14,.3,le,-1.7,nt-.16,sn-.75,i,{cast:!1}),r(.36,.02,.26,e(16053488),-1.7,nt-.17,sn-.75,i,{cast:!1}),n(new Ye(.035,.035,y,12).rotateX(Math.PI/2),V,3.6,nt-.05,x,i,{cast:!1});let L=t(16054527,1.6),B=e(15921386,{roughness:.6});function q(M,N,U){let D=m(M,N,U);n(new zt(.78,.36),L,0,2.05,.02,D,{cast:!1,receive:!1});for(let[ae,ne,Q,$]of[[.88,.05,0,2.25],[.88,.05,0,1.85],[.05,.4,-.42,2.05],[.05,.4,.42,2.05]])s(ae,ne,.06,B,Q,$,.03,D,{cast:!1});s(.9,.03,.18,B,0,1.83,.09,D,{cast:!1});let Y=new di(14674687,2.5,5,1.6);return Y.position.set(0,1.9,.5),D.add(Y),D}A("Window (west)",q(.8,An+.01,0)),A("Window (over the hoop)",q(gt+.01,-2.9,Math.PI/2)),A("Window (over the washer)",q(At+.01,3.4,Math.PI/2)),i.add(new ra(16774370,10128504,1.3));let Z=new Js(16773340,1.6);Z.position.set(1.5,8,2.5),Z.target.position.set(0,0,0),i.add(Z,Z.target),Object.assign(Z.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:16}),Z.castShadow=!0,Z.shadow.mapSize.set(2048,2048),Z.shadow.bias=-5e-4,Z.shadow.normalBias=.02;let J=e(16052712,{roughness:.4}),j=t(16773584,3);for(let[M,N]of[[-1.2,-1.6],[1.8,-1.2],[-2.2,1.3],[2.6,2.6],[-4,-1],[1.4,4.2]]){n(new Ye(.05,.06,.06,16),J,M,nt-.03,N,i,{cast:!1}),n(new tn(.045,14,10),j,M,nt-.11,N,i,{cast:!1});let U=new di(16767392,4,6.5,1.5);U.position.set(M,nt-.2,N),i.add(U)}for(let[M,N]of[[-6.9,1.2],[-6.9,3.7]]){r(1.2,.06,.18,e(14211282),M,nt-.08,N,i,{cast:!1}),r(1.15,.025,.12,t(16317439,2.5),M,nt-.1,N,i,{cast:!1});let U=new di(15922943,3,6,1.4);U.position.set(M,nt-.25,N),i.add(U)}let ie=A("Clock",m(-1,An+.03));n(new Ye(.33,.33,.04,40).rotateX(Math.PI/2),[e(5917242),e(16777215,{map:td(),roughness:.7}),e(5917242)],0,1.68,0,ie,{cast:!1});let ce=(M,N)=>{let U=new ft;return U.position.set(0,1.68,.03),ie.add(U),s(N,M,.008,e(1710618),0,M/2-.03,0,U,{cast:!1}),U},Ae=ce(.16,.022),X=ce(.24,.014),ee=[4.5,-2.95],me=-Math.PI/4,Me=i.children.length;h(Kf(i,Yf("tvCabinet",{w:1.35,h:.62,d:.55,stretch:!0,colors:{wood:5911584}}),...ee,me));let xe=new ma,Ie=m(...ee,me,.62);s(1.32,.78,.05,e(1118481,{roughness:.4}),0,.5,0,Ie),n(new zt(1.26,.72),new Vt({map:xe.texture,toneMapped:!1}),0,.5,.027,Ie,{cast:!1}),s(.3,.03,.2,e(1118481),0,0,0,Ie),s(.06,.12,.04,e(1118481),0,.03,-.02,Ie),s(.4,.02,.12,e(15790320),.2,0,.18,Ie),h(Ie);let Ue=new di(11570431,2.5,4,1.8);Ue.position.set(3.9,1.1,-2.35),i.add(Ue),g("TV + cabinet",Me),A("Play mat",n(new zt(2.3,1.55).rotateX(-Math.PI/2),e(16777215,{map:nd(),roughness:1}),2.6,.006,-1.65,i,{cast:!1}));let Re=(M,N,U,D)=>{let Y=A(M?"Portrait (purple bow)":"Portrait (boy)",m(N,U,D));s(.52,.64,.025,e(16777215,{roughness:.9}),0,1.15,.0125,Y,{cast:!1}),n(new zt(.5,.62),e(16777215,{map:id(M),roughness:.8}),0,1.47,.027,Y,{cast:!1})};Re(!0,gt+.01,-1.3,Math.PI/2),Re(!1,dt-.01,-2,-Math.PI/2);function Ke(M,N,U,D,Y){let ae=m(N,U,D),ne=e(Y,{roughness:1}),Q=e(new Se(Y).offsetHSL(0,0,.03),{roughness:1}),$=M*.66+.4,ue=.95,Te=(ve,se,I,fe,de,Pe,we)=>n(new Ui(ve,se,I,3,Math.min(.06,se/2-.001)),fe,de,Pe+se/2,we,ae);Te($-.3,.3,ue-.1,ne,0,.1,.02),Te($-.2,.5,.24,ne,0,.3,-ue/2+.12);for(let ve of[-1,1])Te(.22,.5,ue,ne,ve*($/2-.11),.1,0),n(new Ye(.13,.13,ue,16).rotateX(Math.PI/2),ne,ve*($/2-.1),.6,0,ae);let Ve=($-.44)/M;for(let ve=0;ve<M;ve++){let se=-$/2+.22+Ve*(ve+.5);Te(Ve-.02,.16,ue-.3,Q,se,.4,.1);let I=Te(Ve-.03,.42,.18,Q,se,.52,-ue/2+.3);I.rotation.x=-.12}for(let ve of[-1,1])for(let se of[-1,1])n(new Ye(.03,.025,.1,10),e(3023904),ve*($/2-.12),.05,se*(ue/2-.12),ae);return h(ae,{under:.1})}A("Couch",Ke(3,-1.9,-2.42,Math.PI/2,8360358)),A("Armchair",Ke(1,.6,-.45,Math.PI,9083824));let F=A("Ottoman",m(.6,-1.48));n(new Ui(.82,.3,.6,3,.06),e(9083824,{roughness:1}),0,.27,0,F);for(let[M,N]of[[-.35,-.24],[.35,-.24],[-.35,.24],[.35,.24]])n(new Ye(.025,.02,.12,10),e(3023904),M,.06,N,F);r(.12,.06,.07,e(3711337,{roughness:.4}),.15,.42,-.02,F),h(F,{under:.12});{let M=A("Basketball hoop",m(-4.75,-3.15,Math.PI/4));n(new Ye(.18,.2,.08,20),e(1710618),0,.04,0,M),n(new Ye(.03,.03,1.1,12),e(2845872,{roughness:.4}),0,.6,0,M),r(.5,.36,.03,e(16053488,{roughness:.5}),0,1.05,-.02,M),n(new Ri(.11,.012,8,24).rotateX(Math.PI/2),e(15023678),0,1.12,.13,M),h(M)}{let M=A("Toy house",m(-4.6,-1.7,Math.PI/2));r(.6,.35,.42,e(16179294,{roughness:.6}),0,0,0,M),n(new Ye(.01,.38,.22,4,1).rotateY(Math.PI/4),e(3244750,{roughness:.5}),0,.46,0,M).scale.set(1.15,1,.85),r(.12,.2,.02,e(15023678),0,0,.215,M),r(.12,.1,.02,e(10475775),.18,.15,.215,M),h(M)}{let M=A("Toy tote",m(-3.95,-3.2));r(.6,.32,.42,e(14674158,{transparent:!0,opacity:.55,roughness:.2}),0,0,0,M);for(let N=0;N<6;N++)r(.1+o()*.1,.1,.1,e([15023678,3711337,3244750,16179294][N%4]),(o()-.5)*.4,.02,(o()-.5)*.25,M);h(M)}{let M=A("Red ride-on toy",m(-3.6,-2.35,.6));r(.5,.2,.28,e(15023678,{roughness:.4}),0,.06,0,M),r(.18,.14,.22,e(15023678,{roughness:.4}),-.12,.26,0,M);for(let[N,U]of[[-.18,-.15],[.18,-.15],[-.18,.15],[.18,.15]])n(new Ye(.06,.06,.04,14).rotateX(Math.PI/2),e(1710618),N,.06,U,M);h(M)}{let M=A("Speaker cabinet",m(-2.75,-3.33));r(.42,.62,.4,e(2762018,{roughness:.6}),0,0,0,M),n(new Ye(.11,.11,.02,20).rotateX(Math.PI/2),e(7829367,{roughness:.4,metalness:.4}),0,.36,.205,M),r(.26,.08,.14,e(16173326,{roughness:.5}),0,.62,0,M),h(M)}{let M=A("Kids' table",m(4.72,1.1,-Math.PI/2)),N=e(7028514,{roughness:.6});r(.75,.03,.55,N,0,.5,0,M);for(let[U,D]of[[-.33,-.23],[.33,-.23],[-.33,.23],[.33,.23]])r(.04,.5,.04,N,U,0,D,M);for(let U of[-1,1]){let D=m(0,0);M.add(D),D.position.set(U*.58,0,0),D.rotation.y=U*Math.PI/2,r(.28,.03,.28,N,0,.3,0,D);for(let[Y,ae]of[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]])r(.03,.3,.03,N,Y,0,ae,D);r(.28,.3,.03,N,0,.33,.13,D)}h(M,{under:.3})}{let M=A("Standing desk",m(At+13.05,nn-.38,Math.PI));r(1.55,.035,.72,e(14207400,{roughness:.7}),0,.93,0,M);for(let D of[-.7,.7])r(.06,.93,.06,e(1710618),D,0,0,M),r(.06,.03,.6,e(1710618),D,0,0,M);r(.55,.6,.55,e(1842206,{roughness:.5}),.4,0,.05,M),r(.5,.3,.3,e(12922954,{roughness:.4}),-.3,0,.12,M);let N=new Vt({map:od(),toneMapped:!1}),U=(D,Y,ae)=>{let ne=m(0,0,0);M.add(ne),ne.position.set(ae,.965,-.2),r(D,Y,.03,e(1118481,{roughness:.4}),0,.12,0,ne),n(new zt(D-.03,Y-.03),N,0,.12+Y/2,.016,ne,{cast:!1}),r(.04,.12,.04,e(1118481),0,0,0,ne)};U(.62,.38,-.2),U(.3,.52,.35),r(.32,.015,.22,e(6974064,{metalness:.5,roughness:.4}),-.25,.965,.12,M),n(new Ye(.08,.1,.04,16),e(1710618),-.6,.985,.15,M),n(new Ye(.018,.022,.22,10),e(1710618),-.6,1.1,.15,M),h(M,{under:.93})}{let M=A("Braided rug",n(new Ur(.6,40).rotateX(-Math.PI/2),e(8028057,{roughness:1}),3.8,.005,3.9,i,{cast:!1}));M.scale.set(1.25,1,.85);for(let[N,U]of[[.45,10127994],[.3,5922682],[.15,11575440]])n(new ta(N-.06,N,40).rotateX(-Math.PI/2),e(U,{roughness:1}),0,.001,0,M,{cast:!1})}{let M=A("Totes + pillows",m(2.3,4.68));r(.75,.42,.55,e(2763306,{roughness:.5}),0,0,0,M),r(.75,.04,.57,e(16179294),0,.42,0,M),r(.72,.36,.52,e(10474928,{roughness:.4}),0,.46,0,M),r(.72,.36,.52,e(12106944,{roughness:.4}),0,.82,0,M);for(let U=0;U<3;U++)n(new Ui(.62,.1,.42,3,.04),e(16448250,{roughness:1}),0,1.24+U*.09,(o()-.5)*.05,M);h(M);let N=n(new tn(.32,20,14),e(16052974,{roughness:1}),3,.22,4.55);N.scale.set(1,.7,1),A("Bean bag",h(N))}{let M=A("Fridge",m(1.2,4.62));n(new Ui(.75,1.72,.7,3,.03),e(15921644,{roughness:.35}),0,.86,0,M),n(new zt(.72,1.4),e(16777215,{map:sd(),roughness:.4}),0,.9,-.352,M,{cast:!1}).rotation.y=Math.PI,h(M)}let Tt=(M,N,U,D,Y)=>{let ae=m(M,N,U),ne=e(1907997,{roughness:.5,metalness:.3}),Q=Vn(Y);for(let $ of[-D/2+.02,D/2-.02])for(let ue of[-.2,.2])r(.025,1.8,.025,ne,$,0,ue,ae);for(let $=0;$<5;$++){let ue=.08+$*.42;if(r(D,.025,.44,ne,0,ue,0,ae),$<4)for(let Te=-D/2+.16;Te<D/2-.1;Te+=.28)Q()>.2&&r(.18+Q()*.08,.12+Q()*.18,.3,e([5231045,15023678,16179294,16777215,8411861,2829099,14510880][Math.floor(Q()*7)],{roughness:.5}),Te,ue+.025,0,ae)}return h(ae)};A("Black shelves",Tt(-.2,4.75,0,.9,3)),n(new Ye(.05,.05,nt,14),V,-.72,nt/2,4.92);let Ee=((pe=ga["Post 4"])==null?void 0:pe.z)??xa;{let M=Ee;s(dt-gt-.02,nt-Dt-.004,.2,V,(dt+gt)/2,(Dt+nt-.004)/2,M,i,{cast:!1}),s(dt-gt-.02,.02,.22,e(3815994),(dt+gt)/2,Dt+.006,M,i,{cast:!1})}A("Post 4",n(new Ye(.05,.05,Dt,20),K,.75,Dt/2,xa)),l(.69,.81,xa-.06,xa+.06);let Oe=i.children.length;{let M=e(12101260,{roughness:.8}),N=e(10133155,{roughness:.7}),U=On,D=U.z1-U.z0,Y=(U.z0+U.z1)/2;for(let ue=0;ue<U.n;ue++){let Te=U.x-ue*U.run,Ve=Te-U.run,ve=(ue+1)*U.rise;r(U.run,ve,D,N,(Ve+Te)/2,0,Y),r(U.run+.01,.025,D,M,(Ve+Te)/2,ve-.025,Y,i,{cast:!1})}let ae=U.x-U.n*U.run,ne=Math.atan(U.rise/U.run),Q=Math.hypot(U.n*U.run,U.n*U.rise),$=n(new vn(Q,.05,.05),e(9067051),(U.x+ae)/2,.9+U.n*U.rise/2,U.z0-.03);$.rotation.z=-ne,r(.1,1,.1,N,U.x-.05,0,U.z0+.05),n(new zt(.55,.95).rotateX(-Math.PI/2),e(15259848,{roughness:1}),U.x+.35,.006,Y,i,{cast:!1}),l(ae,U.x,U.z0,U.z1);for(let ue=0;ue<U.n&&(ue+1)*U.rise<1;ue++)a.push({x0:U.x-(ue+1)*U.run,x1:U.x-ue*U.run,z0:U.z0,z1:U.z1,y1:(ue+1)*U.rise})}g("Stairs",Oe);let _e=i.children.length;{let M={x:-2.3,z:1.35,w:1.75,d:1,h:.76},N=e(11037490,{roughness:.6}),U=m(M.x,M.z);r(M.w,.04,M.d,N,0,M.h-.04,0,U),r(M.w+.06,.012,M.d+.06,e(16250350,{roughness:1}),0,M.h,0,U,{cast:!1});for(let Y of[-.6,.6])r(.08,M.h-.04,.14,N,Y,0,0,U),r(.12,.06,.8,N,Y,0,0,U);r(1.2,.08,.06,N,0,.3,0,U),n(new Ye(.06,.05,.16,16),e(16777215,{roughness:.4}),.2,M.h+.09,.05,U);for(let Y=0;Y<7;Y++)n(new tn(.05,10,8),e([9417696,13163248,7246792][Y%3]),.2+(o()-.5)*.16,M.h+.22+o()*.06,.05+(o()-.5)*.16,U);a.push({x0:M.x-M.w/2,x1:M.x+M.w/2,z0:M.z-M.d/2,z1:M.z+M.d/2,y1:M.h,under:M.h-.05});for(let Y of[-.6,.6])l(M.x+Y-.06,M.x+Y+.06,M.z-.4,M.z+.4);let D=(Y,ae,ne)=>{let Q=m(Y,ae,ne);r(.44,.05,.44,N,0,.42,0,Q),r(.4,.03,.4,e(14209732),0,.47,0,Q);for(let[ue,Te]of[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]])r(.04,.42,.04,N,ue,0,Te,Q);for(let ue of[-.19,.19])r(.045,.6,.045,N,ue,.47,-.2,Q);for(let ue=-2;ue<=2;ue++)r(.035,.48,.02,N,ue*.07,.5,-.2,Q);r(.44,.06,.04,N,0,1.03,-.2,Q),Q.updateMatrixWorld(!0);let $=new pt().setFromObject(Q);a.push({x0:$.min.x,x1:$.max.x,z0:$.min.z,z1:$.max.z,y1:.5,under:.4}),l($.min.x+.04,$.max.x-.04,$.min.z+.04,$.max.z-.04,.4),u(Q)};D(M.x-.4,M.z-.72,0),D(M.x+.4,M.z-.72,0),D(M.x,M.z+.75,Math.PI),D(M.x+1.15,M.z,-Math.PI/2),D(M.x-1.15,M.z,Math.PI/2)}g("Dining table + chairs",_e);{let M=A("Water cooler",m(-2.2,3.6));r(.55,.32,.4,e(2236962,{roughness:.5}),0,0,0,M),r(.55,.06,.4,e(12922928),0,.32,0,M),r(.5,.28,.38,e(16053492,{roughness:.6}),0,.38,0,M);for(let N=0;N<5;N++)n(new tn(.09,10,8),e([16179294,12031220,16777215,9132587][N%4],{roughness:1}),(o()-.5)*.35,.72,(o()-.5)*.2,M);n(new Ye(.16,.16,.4,20),e(15895592,{roughness:.4}),0,.96,0,M),n(new Ye(.17,.17,.05,20),e(16053492),0,1.18,0,M),h(M)}let ht=i.children.length;{let M=gt+.06,N=tr.z0,U=tr.curtain,D=U-N,Y=new zt(D,Dt,40,1),ae=Y.attributes.position;for(let Q=0;Q<ae.count;Q++)ae.setZ(Q,Math.sin(ae.getX(Q)*22)*.04);Y.computeVertexNormals();let ne=rd();ne.repeat.set(1,Dt/.5),n(Y,e(16777215,{map:ne,roughness:1,side:on}),M,Dt/2+.02,(N+U)/2).rotation.y=Math.PI/2,n(new Ye(.012,.012,D+.1,8).rotateX(Math.PI/2),K,M,Dt+.05,(N+U)/2,i,{cast:!1}),l(M-.05,M+.05,N,U),A("Pantry shelves 1",Tt(-6.15,rs.z0+.25,0,1.8,9));{let Q=A("Soap table",m(-7.85,rs.z0+.33)),$=e(2829099,{roughness:.5}),ue=Vn(17);r(1.4,.04,.6,e(15262940,{roughness:.6}),0,.72,0,Q);for(let[Ve,ve]of[[-.65,-.25],[.65,-.25],[-.65,.25],[.65,.25]])r(.04,.72,.04,$,Ve,0,ve,Q);let Te=.76;for(let Ve=-.58;Ve<.6;Ve+=.17+ue()*.05){let ve=ue(),se=(ue()-.5)*.3,I=[15895592,2060241,3126138,9323693,15921906,14034984][Math.floor(ue()*6)];ve<.45?(r(.14,.26,.1,e(I,{roughness:.35}),Ve,Te,se,Q),r(.04,.08,.06,e(I,{roughness:.35}),Ve+.05,Te+.2,se,Q),n(new Ye(.025,.025,.04,12),e(16179294,{roughness:.4}),Ve-.03,Te+.28,se,Q)):ve<.8?(n(new Ye(.035,.04,.2,14),e(I,{roughness:.3}),Ve,Te+.1,se,Q),n(new Ye(.012,.012,.05,8),e(16777215),Ve,Te+.225,se,Q)):r(.14,.18,.08,e(16777215,{roughness:.5}),Ve,Te,se,Q)}h(Q,{under:.72})}}g("Curtain",ht);{let M=rs,N=M.x1-M.x0,U=M.z1-M.z0;n(new zt(N,U).rotateX(-Math.PI/2),e(9342860,{roughness:.35,metalness:.1}),(M.x0+M.x1)/2,.004,(M.z0+M.z1)/2,i,{cast:!1});let D=e(15921902,{roughness:.35});for(let[ae,ne]of[[3.05,0],[3.78,1]]){let Q=A(ne?"Washer":"Dryer",m(At+.38,ae,Math.PI/2));n(new Ui(.7,.92,.7,2,.02),D,0,.46,0,Q),r(.7,.14,.1,D,0,.92,-.28,Q),ne||n(new Ur(.18,24),e(10133670,{roughness:.3}),0,.5,.352,Q),h(Q)}n(new zt(.8,1.6).rotateX(-Math.PI/2),e(7237230,{roughness:1}),At+1.2,.008,3.4,i,{cast:!1});{let ae=A("Laundry sink",m(-7.6,nn-.3));r(.6,.35,.5,D,0,.55,0,ae);for(let[ne,Q]of[[-.25,-.2],[.25,-.2],[-.25,.2],[.25,.2]])r(.04,.55,.04,e(13619151),ne,0,Q,ae);h(ae,{under:.55})}A("Paper towel rack",Tt(At+.3,2.1,Math.PI/2,.6,14));let Y=e(12106944,{roughness:.3,metalness:.6});{let ae=A("Furnace",m(-6.6,2));r(.55,1.02,.72,e(9080208,{roughness:.5}),0,.13,0,ae);for(let[ne,Q]of[[-.24,-.32],[.24,-.32],[-.24,.32],[.24,.32]])r(.04,.13,.04,e(3815994),ne,0,Q,ae);r(.6,nt-1.155,.8,Y,0,1.15,0,ae),n(new Ye(.06,.06,nt-1,12),V,.15,1+(nt-1)/2,.45,ae),h(ae,{fly:!1,under:.13}),r(4.4,.28,.55,Y,-6.6+2.2,nt-.285,1.6,i,{cast:!1})}}let Fe=new ft;i.add(Fe);for(let[M,N,U,D]of[["WEST",(At+dt)/2,An-.7,0],["EAST",(At+dt)/2,nn+.7,0],["NORTH",dt+.85,x,-Math.PI/2],["SOUTH",At-.85,x,Math.PI/2]])n(new zt(1.6,.4),new Vt({map:ad(M),transparent:!0,toneMapped:!1}),N,0,U,Fe,{cast:!1,receive:!1}).rotation.set(-Math.PI/2,0,D);let S=new He,_=new R;for(let M of f)M.at.updateMatrixWorld(!0),M.home=new pt().setFromObject(M.at).expandByScalar(.03),M.m0=M.at.matrixWorld.clone(),M.boxes=[];for(let M of[...c,...a]){let N=(M.x0+M.x1)/2,U=(M.z0+M.z1)/2,D=null,Y=1/0;for(let ae of f){let ne=ae.home,Q=(ne.max.x-ne.min.x)*(ne.max.z-ne.min.z);N>=ne.min.x&&N<=ne.max.x&&U>=ne.min.z&&U<=ne.max.z&&Q<Y&&(D=ae,Y=Q)}D&&(S.copy(D.m0).invert(),D.boxes.push({b:M,corners:[[M.x0,M.z0],[M.x1,M.z0],[M.x0,M.z1],[M.x1,M.z1]].map(([ae,ne])=>_.set(ae,0,ne).applyMatrix4(S).clone())}))}function z(M){if(M.at.updateMatrixWorld(!0),M.gone){for(let{b:N}of M.boxes)N.x0=N.x1=N.z0=N.z1=-1e4;return}for(let{b:N,corners:U}of M.boxes){let D=U.map(Y=>_.copy(Y).applyMatrix4(M.at.matrixWorld).clone());N.x0=Math.min(...D.map(Y=>Y.x)),N.x1=Math.max(...D.map(Y=>Y.x)),N.z0=Math.min(...D.map(Y=>Y.z)),N.z1=Math.max(...D.map(Y=>Y.z)),N.pts=[0,1,3,2].map(Y=>[D[Y].x,D[Y].z])}}let re=M=>({x:+M.at.position.x.toFixed(3),z:+M.at.position.z.toFixed(3),ry:+M.at.rotation.y.toFixed(4),...M.gone?{gone:!0}:{}});function te(M,N){M.at.position.x=N.x,M.at.position.z=N.z,M.at.rotation.y=N.ry,M.gone=!!N.gone,M.at.visible=!M.gone,z(M)}for(let M of f)M.start=re(M),ga[M.name]&&te(M,ga[M.name]);function oe(M){let N=new Date,U=N.getMinutes()+N.getSeconds()/60,D=N.getHours()%12+U/60;X.rotation.z=-U/60*Math.PI*2,Ae.rotation.z=-D/12*Math.PI*2,xe.update(M),Ue.intensity=2.2+Math.sin(performance.now()/90)*.3+xe.flash*5}let ye=new R(ee[0]-.3,1.1,ee[1]+.3);return{things:f,setPose:te,poseOf:re,beam2:Ee,room:{x0:gt,x1:dt,z0:An,z1:nn,ceil:nt},whole:{x0:At,x1:dt,z0:An,z1:nn},flyBoxes:a,bumpers:c,update:oe,tvGame:xe,tvAt:ye,labels:Fe}}var gt,dt,An,nn,At,nt,Hl,sn,Dt,B_,xa,On,rs,tr,Vl=bt(()=>{Un();jf();kl();Aa();Qf();cd();gt=-5.2,dt=5.2,An=-3.6,nn=5,At=-8.7,nt=2.3,Hl=.24,sn=.4,Dt=2.02,B_=[-3.2,-.6,2],xa=3.857,On={x:-2.43,z0:4,z1:nn-.01,rise:.19,run:.23,n:12},rs={x0:At,x1:gt,z0:-.6,z1:nn},tr={z0:sn,z1:On.z0-.05,curtain:1.9}});function Wn(i,e,t,n=0){if(!(e>i.x0-n&&e<i.x1+n&&t>i.z0-n&&t<i.z1+n))return!1;if(!i.pts)return!0;let s=i.pts,r=(s[0][0]+s[2][0])/2,o=(s[0][1]+s[2][1])/2;for(let a=0;a<4;a++){let[c,l]=s[a],[h,u]=s[(a+1)%4],f=h-c,p=u-l,A=Math.hypot(f,p)||1;if((Math.sign(f*(o-l)-p*(r-c))||1)*(f*(t-l)-p*(e-c))/A<-n)return!1}return!0}function z_(i,e,t,n){let s=wn(e,i.x0+n,i.x1-n),r=wn(t,i.z0+n,i.z1-n);if(i.pts){let o=(i.pts[0][0]+i.pts[2][0])/2,a=(i.pts[0][1]+i.pts[2][1])/2;for(let c=0;c<20&&!Wn(i,s,r,-n);c++)s+=(o-s)*.15,r+=(a-r)*.15}return[s,r]}function Ma(i,e,t,n){let s=0;for(let r of i.tops)Wn(r,e,t,ze.radius*.5)&&r.y1<=n+.03&&r.y1>s&&(s=r.y1);return s}function _a(i,e,t,n){let s=0;for(let r of i.tops)Wn(r,e,t,ze.radius)&&r.y1>n+.03&&!Gl(r,n,ze.height)&&(s=Math.max(s,r.y1));return s}function ya(i,e,t,n){let s=i.walls,r=ze.radius;if(e<s.x0+r||e>s.x1-r||t<s.z0+r||t>s.z1-r)return!0;if(i.tops.some(o=>Wn(o,e,t,r*.5)&&o.y1>=.05&&o.y1<=n+.03))return!1;for(let o of i.blocks){if(!Wn(o,e,t,r)||Gl(o,n,ze.height))continue;let a=(i.shells||i.tops).find(c=>c.x0<=o.x0+.03&&c.x1>=o.x1-.03&&c.z0<=o.z0+.03&&c.z1>=o.z1-.03);if(!(a&&hd(o)>hd(a)*.4))return!0}return!1}function k_(i,e,t,n){let s=i.ceiling?i.ceiling(e,t):1/0;for(let r of i.tops)r.under!==void 0&&Wn(r,e,t)&&r.under>n+.01&&(s=Math.min(s,r.under));return s-ze.height}function H_(i,e,t,n){let s=i.blocks.filter(o=>Wn(o,e,t,ze.radius)),r=null;for(let o of i.tops)!Wn(o,e,t,ze.radius)||o.y1<=n+.03||o.under!==void 0&&n<o.under&&(o.under<.25||!s.some(c=>c.x0>=o.x0-.03&&c.x1<=o.x1+.03&&c.z0>=o.z0-.03&&c.z1<=o.z1+.03&&(c.x1-c.x0)*(c.z1-c.z0)<.05))||(!r||o.y1>r.y1)&&(r=o);return r}function ud(i,e,t,n){let s=-wn(e.y,-1,1),r=wn(e.x,-1,1);i.cling||(i.yaw-=r*ze.turn*t);let o=-Math.sin(i.yaw),a=-Math.cos(i.yaw),c=Math.cos(i.yaw),l=-Math.sin(i.yaw);i.runT=s>.6&&!i.air&&!i.cling?i.runT+t:0,i.run+=((i.runT>ze.sprintAfter?1:0)-i.run)*(1-Math.exp(-t*(i.runT>ze.sprintAfter?4:10)));let h=s*(ze.walk+(ze.sprint-ze.walk)*i.run);if(i.walking=Math.abs(h)/ze.walk,i.climbing=!1,i.cling)return V_(i,s,r,e.jump,t,n,o,a,c,l);if(e.jump&&!i.air){let A=G_(n,i);if(A){let g=A.y1-i.y+.06,m=Math.sqrt(2*ze.gravity*g),d=m/ze.gravity+.12;i.vy=m,i.leap={vx:(A.px-i.x)/d,vz:(A.pz-i.z)/d,t:d},i.yaw=Math.atan2(-(A.px-i.x),-(A.pz-i.z))}else i.vy=Math.sqrt(2*ze.gravity*ze.hop);i.air=!0,i.run=i.runT=0}let u=o*h*t,f=a*h*t;if(i.leap&&(u=i.leap.vx*t,f=i.leap.vz*t,i.leap.t-=t,i.leap.t<=0&&(i.leap=null)),u||f){let A=i.x+u,g=i.z+f;ya(n,A,g,i.y)||_a(n,A,g,i.y)>0?!i.air&&s>.2&&(i.cling={t:0},i.run=i.runT=0):(i.x=A,i.z=g)}let p=Ma(n,i.x,i.z,i.y);if(i.air||i.y>p+1e-4){i.vy-=ze.gravity*t,i.y+=i.vy*t,i.air=!0;let A=Ma(n,i.x,i.z,i.y+.05);i.y<=A&&i.vy<=0&&(i.y=A,i.vy=0,i.air=!1,i.leap=null)}else i.y=p,i.vy=0;return va(i,n)}function V_(i,e,t,n,s,r,o,a,c,l){let h=i.x+o*.04,u=i.z+a*.04;if(!(ya(r,h,u,i.y)||_a(r,h,u,i.y)>0)||e<-.3||n)return i.cling=null,i.air=!0,i.vy=n?Math.sqrt(2*ze.gravity*ze.hop):0,n&&(i.leap={vx:-o*.5,vz:-a*.5,t:.3}),va(i,r);let p=H_(r,h,u,i.y),A=k_(r,i.x,i.z,i.y);if(e>.2&&(i.climbing=!0,i.y=Math.min(i.y+ze.climb*e*s,p?Math.max(p.y1,A):A),p&&(i.y>=p.y1-1e-6||i.y>=A-1e-6))){i.y=p.y1,i.cling=null,i.air=!1,i.vy=0;for(let g of[.05,.09,.14]){let m=i.x+o*g,d=i.z+a*g;if(Ma(r,m,d,i.y)>=p.y1-.01){i.x=m,i.z=d;break}}return va(i,r)}if(t){let g=i.x+c*t*ze.shuffle*s,m=i.z+l*t*ze.shuffle*s;!ya(r,g,m,i.y)&&!_a(r,g,m,i.y)&&(ya(r,g+o*.04,m+a*.04,i.y)||_a(r,g+o*.04,m+a*.04,i.y))&&(i.x=g,i.z=m,i.climbing=!0)}return i.vy=0,i.air=!1,i.y<=Ma(r,i.x,i.z,i.y)+1e-4&&e<=.2&&(i.cling=null),va(i,r)}function va(i,e){for(let t of e.tops)t.under!==void 0&&Wn(t,i.x,i.z)&&i.y<t.under&&i.y+ze.height>t.under&&(i.y=Math.max(0,t.under-ze.height),i.vy=Math.min(i.vy,0));for(let t of["x","y","z","yaw","vy","run"])Number.isFinite(i[t])||(i[t]=0);return i}function G_(i,e){let t=null,n=1/0;for(let s of i.tops){if(s.y1<=e.y+.05||s.y1-e.y>ze.leapMax)continue;let[r,o]=z_(s,e.x,e.z,.06),a=Math.hypot(r-e.x,o-e.z);a<ze.leapReach&&a<n&&!(Gl(s,e.y,ze.height)&&Wn(s,e.x,e.z))&&(t={...s,px:r,pz:o},n=a)}return t}function dd(i,e,t,n){if(i.yaw-=(i.pointing?Gn.aim:Gn.turn)*wn(e.x,-1,1)*t,i.yaw-=e.lookX||0,i.pitch=wn(i.pitch-(e.lookY||0)-(i.pointing?Gn.aim*wn(e.y,-1,1)*t:0),-1.3,1.1),i.eye+=((i.crouch?Gn.crouch:Gn.eye)-i.eye)*(1-Math.exp(-t*6)),!i.pointing){let o=-wn(e.y,-1,1)*Gn.walk*(i.crouch?.5:1);i.x+=-Math.sin(i.yaw)*o*t,i.z+=-Math.cos(i.yaw)*o*t}let s=Gn.radius,r=n.walls;for(let o of n.blocks){let a=wn(i.x,o.x0,o.x1),c=wn(i.z,o.z0,o.z1),l=Math.hypot(i.x-a,i.z-c);if(!(l>=s))if(l>1e-6)i.x=a+(i.x-a)/l*s,i.z=c+(i.z-c)/l*s;else{let h=[[o.x0-s-i.x,0],[o.x1+s-i.x,0],[0,o.z0-s-i.z],[0,o.z1+s-i.z]].sort((u,f)=>Math.hypot(...u)-Math.hypot(...f))[0];i.x+=h[0],i.z+=h[1]}}return i.x=wn(i.x,r.x0+s,r.x1-s),i.z=wn(i.z,r.z0+s,r.z1-s),i}function pd(i,e,t,n=1/0,s=.16){let r=[t[0]-i[0],t[1]-i[1],t[2]-i[2]],o=r[0]*e[0]+r[1]*e[1]+r[2]*e[2];return o<=0?!1:Math.hypot(r[0]-e[0]*o,r[1]-e[1]*o,r[2]-e[2]*o)<=s+o*.02&&n>o-.18}var ze,Gn,wn,Gl,hd,Wl,fd,Xl=bt(()=>{ze={height:.12,radius:.035,walk:.55,sprint:1.4,sprintAfter:1,turn:2.6,climb:.9,shuffle:.3,gravity:4.5,hop:.14,leapReach:.5,leapMax:1.4},Gn={eye:1.55,crouch:.4,radius:.2,walk:1.2,turn:1.8,aim:.9},wn=(i,e,t)=>Math.max(e,Math.min(t,i));Gl=(i,e,t)=>i.under!==void 0&&e+t<i.under;hd=i=>(i.x1-i.x0)*(i.z1-i.z0);Wl=(i,e,t=0)=>({x:i,y:0,z:e,yaw:t,vy:0,air:!1,climbing:!1,cling:null,leap:null,walking:0,run:0,runT:0});fd=(i,e,t=0)=>({x:i,z:e,yaw:t,pitch:-.15,eye:Gn.eye,crouch:!1,pointing:!1})});function md(){let i=new ft,e=new ft;i.add(e);let t=(p,A=.6)=>new Nn({color:p,roughness:A}),n=t(14034984,.5),s=t(2853438),r=t(16316922,.8),o=t(15976869,.7),a=t(1710618,.4),c=(p,A,g,m,d,y=e,x=0,E=0)=>{let P=new yt(p,A);return P.position.set(g,m,d),P.rotation.set(x,0,E),P.castShadow=!0,y.add(P),P},l=ze.height/.12,h=[-1,1].map(p=>{let A=new ft;return A.position.set(p*.009,.034,0),e.add(A),c(new Ye(.0065,.006,.03,10),s,0,-.016,0,A),c(new tn(.0085,10,8),n,0,-.031,-.004,A).scale.set(1,.6,1.5),A});c(new Ye(.016,.019,.034,16),n,0,.05,0),c(new Ye(.0195,.0195,.005,16),a,0,.036,0),c(new vn(.008,.007,.004),t(16765503,.3),0,.036,-.019),c(new Ri(.0145,.0045,8,20),r,0,.067,0,e,Math.PI/2);let u=[-1,1].map(p=>{let A=new ft;return A.position.set(p*.019,.063,0),e.add(A),c(new Ye(.005,.0055,.026,8),n,0,-.013,0,A),c(new tn(.0055,8,6),r,0,-.027,0,A),A.rotation.z=p*.25,A});c(new tn(.017,16,12),o,0,.083,0);for(let p of[-.006,.006])c(new tn(.0022,8,6),a,p,.086,-.0155);for(let p of[-.009,.009])c(new tn(.003,8,6),t(15764620),p,.079,-.013);c(new tn(.0035,8,6),t(15247496),0,.081,-.017),c(new Ye(.0175,.0175,.005,16),r,0,.096,0);let f=c(new js(.0165,.034,16),n,.002,.113,.002,e,.25,-.2);return c(new tn(.0055,10,8),r,.006,.13,.006),i.scale.setScalar(l),i.userData.parts={legs:h,arms:u,body:e},i}function Ad(i,e,{walking:t=0,run:n=0,climbing:s=!1,hanging:r=!1,air:o=!1,sit:a=0,asleep:c=!1,laugh:l=!1}={}){let{legs:h,arms:u,body:f}=i.userData.parts;if(f.rotation.x=0,f.position.set(0,0,0),l){h[0].rotation.x=h[1].rotation.x=0,u[0].rotation.x=u[1].rotation.x=-.7+Math.sin(e*22)*.15,f.rotation.x=.25+Math.sin(e*22)*.05,f.position.y=Math.abs(Math.sin(e*11))*.006;return}if(a>0){let d=a*a*(3-2*a),y=(x,E)=>x+(E-x)*d;h[0].rotation.x=y(h[0].rotation.x*0,1.45),h[1].rotation.x=y(0,1.45),u[0].rotation.x=u[1].rotation.x=y(0,.9),f.position.y=y(0,-.028),f.position.z=y(0,.004),f.rotation.x=c?.12+Math.sin(e*1.3)*.04:0;return}let p=14+10*n,A=.7+.35*n,g=Math.sin(e*p),m=s?Math.sin(e*12)*.6:r?.15:Math.min(t,1)*g*A;if(h[0].rotation.x=m,h[1].rotation.x=-m,s||r){let d=s?Math.sin(e*12)*.5:0;u[0].rotation.x=-2.6+d,u[1].rotation.x=-2.6-d}else o?u[0].rotation.x=u[1].rotation.x=-1.6:(u[0].rotation.x=m*(.6+.9*n),u[1].rotation.x=-m*(.6+.9*n));f.rotation.x=-.35*n,t&&!o&&!s&&!r&&(f.position.y=Math.abs(g)*(.003+.004*n))}var gd=bt(()=>{Un();Xl()});function _d(i){let e=[...i.flyBoxes],t=new Map;for(let c of i.things){let l=c.boxes.filter(({b:f})=>i.flyBoxes.includes(f));if(c.gone||l.length!==1||c.name==="Stairs")continue;let h=l[0].b,u=W_(c.at,h.under);u.length&&t.set(h,u)}e.splice(0,e.length,...e.flatMap(c=>t.get(c)||[c]));let n=nt-.004;e.push({x0:At,x1:dt,z0:sn-.1,z1:sn+.1,y1:n,under:Dt,name:"beam"}),e.push({x0:gt,x1:dt,z0:i.beam2-.1,z1:i.beam2+.1,y1:n,under:Dt,name:"beam"});for(let c of i.things)if(!c.gone&&/^Window/.test(c.name)){c.at.updateMatrixWorld(!0);let l=[[-.45,0],[.45,0],[-.45,.18],[.45,.18]].map(([h,u])=>new R(h,0,u).applyMatrix4(c.at.matrixWorld));e.push({x0:Math.min(...l.map(h=>h.x)),x1:Math.max(...l.map(h=>h.x)),z0:Math.min(...l.map(h=>h.z)),z1:Math.max(...l.map(h=>h.z)),y1:1.845,under:1.83,name:"sill"})}let s=i.things.find(c=>c.name==="Stairs"),r=s?s.at.position.x-s.start.x:0,o=s?s.at.position.z-s.start.z:0;if(!(s!=null&&s.gone))for(let c=0;c<On.n;c++)e.push({x0:On.x-(c+1)*On.run+r,x1:On.x-c*On.run+r,z0:On.z0+o,z1:On.z1+o,y1:(c+1)*On.rise,name:"stairs"});let a=(c,l)=>Math.abs(l-sn)<.14||Math.abs(l-i.beam2)<.14&&c>gt?Dt:nt;return{walls:i.whole,tops:e,shells:i.flyBoxes,blocks:i.bumpers,ceiling:a}}function W_(i,e){i.updateMatrixWorld(!0);let t=[];return i.traverse(n=>{if(!n.isMesh)return;for(let o=n;o;o=o.parent)if(!o.visible)return;let s=new pt().setFromObject(n,!0);if(s.isEmpty()||s.max.x-s.min.x<.03&&s.max.z-s.min.z<.03||e!==void 0&&s.min.y<e-.01)return;let r={x0:s.min.x,x1:s.max.x,z0:s.min.z,z1:s.max.z,y1:s.max.y,...e!==void 0?{under:e}:{}};if(xd.set(0,1,0).transformDirection(n.matrixWorld),xd.y>.999){n.geometry.boundingBox||n.geometry.computeBoundingBox();let o=n.geometry.boundingBox;r.pts=[[o.min.x,o.min.z],[o.max.x,o.min.z],[o.max.x,o.max.z],[o.min.x,o.max.z]].map(([a,c])=>(ql.set(a,o.min.y,c).applyMatrix4(n.matrixWorld),[ql.x,ql.z]))}t.push(r)}),t}var ql,xd,yd=bt(()=>{Un();Vl();ql=new R,xd=new R});var ba,Yl,Sa,vd=bt(()=>{ba=[.09,.135],Yl=[.82,1.02],Sa=class{constructor(e){this.img=e,this.walkT=0,this.lag=0,this.aim=0,this.kick=0,this.lastYaw=null}update(e,t,n,s,r=innerWidth/2,o=innerHeight/2){this.walkT+=e*(6+4*t)*(t>.05?1:0);let a=this.lastYaw===null?0:Math.atan2(Math.sin(n-this.lastYaw),Math.cos(n-this.lastYaw))/Math.max(e,.001);this.lastYaw=n,this.lag+=(Math.max(-2,Math.min(2,a))*.04-this.lag)*(1-Math.exp(-e*8)),this.aim+=((s?1:0)-this.aim)*(1-Math.exp(-e*9)),this.kick=Math.max(0,this.kick-e*5);let c=this.aim,l=t*(1-c*.7),h=innerWidth,u=innerHeight,f=u*(Yl[0]+(Yl[1]-Yl[0])*c),p=f*(this.img.naturalWidth/this.img.naturalHeight||.73),A=h*.8,g=u*.7,m=r+u*.015,d=o+u*.08,y=A+(m-A)*c+Math.cos(this.walkT)*u*.012*l+this.lag*u*.25,x=g+(d-g)*c+Math.abs(Math.sin(this.walkT))*u*.02*l-this.kick*u*.03,E=-18-10*c-this.kick*9+Math.sin(this.walkT)*2*l;Object.assign(this.img.style,{width:`${p}px`,height:`${f}px`,left:`${y-p*ba[0]}px`,top:`${x-f*ba[1]}px`,transformOrigin:`${p*ba[0]}px ${f*ba[1]}px`,transform:`rotate(${E}deg)`})}show(e){this.img.style.display=e?"block":"none",e||(this.lastYaw=null)}bang(){this.kick=1}}});function Md(i,e,t){let n=Math.hypot(i,e);if(!n)return[0,0];let s=Math.min(n,t)/n/t;return[i*s,e*s]}var bd=bt(()=>{});var Kl,X_,q_,Hr,nr,Y_,Sd,K_,Ea,Ed=bt(()=>{Kl={12:[0,-1],13:[0,1],14:[-1,0],15:[1,0]},X_=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],q_=i=>Math.abs(i)<.18?0:(i-Math.sign(i)*.18)/(1-.18),Hr=i=>Math.max(-1,Math.min(1,i)),nr=i=>Number.isFinite(i)?i:0,Y_=i=>Math.abs(i)<.3?i:0,Sd=(i,e)=>{let t=i-e;return q_(Hr(t/(t>0?1-e:1+e)))},K_=i=>Math.abs(i)>1.05?[0,0]:X_[Math.round((i+1)*3.5)&7],Ea=class{constructor({extraPads:e=()=>[]}={}){this.extraPads=e,this.keys={},this.keyEvents=[],this.state=new Map,this.t=0,addEventListener("keydown",n=>{if(this.keys[n.code]=!0,n.repeat)return;let s={Space:"drop",Enter:"drop",KeyF:"toggle",KeyP:"parent",KeyM:"music",Escape:"escape"};s[n.code]&&(this.keyEvents.push({type:s[n.code],pad:-1}),n.preventDefault())}),addEventListener("keyup",n=>{this.keys[n.code]=!1}),addEventListener("blur",()=>{this.keys={}});let t=n=>{n.gamepad&&this.state.delete(n.gamepad.index)};addEventListener("gamepadconnected",t),addEventListener("gamepaddisconnected",t)}padState(e){let t=this.state.get(e.index);if(!t||t.id!==e.id){let n=[nr(e.axes[0]),nr(e.axes[1])];t={id:e.id,rest:n.map(Y_),anchor:n,still:0,hatAxis:-1,btn:[],hold:null},this.state.set(e.index,t)}return t}poll(e,{holdToggle:t,toggleButton:n=1}){this.t+=e;let s=this.keyEvents.splice(0),r=[...navigator.getGamepads?navigator.getGamepads():[],...this.extraPads()],o=[],a=new Set,c=0;for(let u of r){if(!u||!u.connected)continue;a.add(u.index);let f=this.padState(u),p=[nr(u.axes[0]),nr(u.axes[1])];Math.abs(p[0]-f.anchor[0])<.03&&Math.abs(p[1]-f.anchor[1])<.03?f.still+=e:(f.still=0,f.anchor=p),f.still>=1.5&&p.forEach((d,y)=>{Math.abs(d)<.3&&(f.rest[y]=d)}),f.hatAxis<0&&(f.hatAxis=u.axes.findIndex((d,y)=>y>=4&&Math.abs(d)>1.05));let[A,g]=f.hatAxis>=0?K_(nr(u.axes[f.hatAxis])):[0,0],m=[];u.buttons.forEach((d,y)=>{let x=!!d&&(d.pressed||d.value>.5),E=f.btn[y]||(f.btn[y]={on:!1,t:-1/0}),P=!1,w=!1;if(x!==E.on&&this.t-E.t>=.12&&(E.on=x,E.t=this.t,P=x,w=!x),E.on&&m.push(y),u.mapping==="standard"&&Kl[y]){E.on&&(A+=Kl[y][0],g+=Kl[y][1]);return}t&&y===n?(P&&(f.hold=0),E.on&&f.hold!==null&&(f.hold+=e,c=Math.max(c,f.hold/1),f.hold>=1&&(f.hold=null,s.push({type:"toggle",pad:u.index}))),w&&f.hold!==null&&(f.hold=null,s.push({type:"drop",pad:u.index}))):P&&s.push({type:"drop",pad:u.index})}),t||(f.hold=null),o.push({index:u.index,id:u.id,pressed:m,axes:[...u.axes.slice(0,4)].map(nr),x:Hr(Sd(p[0],f.rest[0])+A),y:Hr(Sd(p[1],f.rest[1])+g)})}for(let u of this.state.keys())a.has(u)||this.state.delete(u);o.sort((u,f)=>u.index-f.index);let l=this.keys,h={x:Hr((l.ArrowRight||l.KeyD?1:0)-(l.ArrowLeft||l.KeyA?1:0)),y:Hr((l.ArrowDown?1:0)-(l.ArrowUp||l.KeyW?1:0))};return{pads:o,kb:h,events:s,holdProgress:c}}}});function Td(){addEventListener("keydown",i=>{i.code==="Escape"&&(i.preventDefault(),i.stopImmediatePropagation(),window.close(),setTimeout(()=>{let e=document.getElementById("quit-hint");e||(e=document.createElement("div"),e.id="quit-hint",e.textContent="Press \u2318Q to quit",e.style.cssText="position:fixed;left:50%;top:40%;transform:translateX(-50%);z-index:99;padding:16px 28px;background:#000c;color:#fff;font:bold 32px system-ui,sans-serif;border-radius:14px;pointer-events:none;transition:opacity .4s",document.body.appendChild(e)),e.style.opacity="1",clearTimeout(e.hideTimer),e.hideTimer=setTimeout(()=>{e.style.opacity="0"},2500)},400))},!0)}var wd=bt(()=>{});function Zl(){try{if(!kt){kt=new(window.AudioContext||window.webkitAudioContext),rt=kt.createGain(),rt.gain.value=Cd?1:0,rt.connect(kt.destination),jl=kt.createBuffer(1,kt.sampleRate,kt.sampleRate);let i=jl.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1}kt.state==="suspended"&&kt.resume()}catch{kt=null}return kt}function xt(i,e,t,n,s,r){let o=kt.createGain();return o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(t,i+n),o.gain.setValueAtTime(t,i+n+s),o.gain.exponentialRampToValueAtTime(1e-4,i+n+s+r),o.connect(e),o}function Gt(i,e,t,n,s){let r=kt.createOscillator();if(r.type=i,typeof e=="number")r.frequency.setValueAtTime(e,t);else{r.frequency.setValueAtTime(e[0][1],t);for(let[o,a]of e.slice(1))r.frequency.linearRampToValueAtTime(a,t+o)}return r.connect(s),r.start(t),r.stop(t+n+.05),r}function rn(i,e,t,n=1){let s=kt.createBiquadFilter();return s.type=i,s.frequency.value=e,s.Q.value=n,s.connect(t),s}function os(i,e,t){let n=kt.createBufferSource();return n.buffer=jl,n.loop=!0,n.connect(t),n.start(i,Math.random()*.5),n.stop(i+e+.05),n}function Rd(i,e,t,n,s){let r=kt.createOscillator(),o=kt.createGain();r.frequency.value=n,o.gain.value=s,r.connect(o).connect(i.frequency),r.start(e),r.stop(e+t+.05)}function mi(i){if(j_())try{Z_[i](kt.currentTime+.005)}catch{}}var kt,rt,jl,Cd,j_,nv,Z_,Id=bt(()=>{kt=null,rt=null,jl=null,Cd=!0;j_=()=>Cd?Zl():null;nv=(()=>{let i=new Float32Array(1024);for(let e=0;e<1024;e++){let t=e/511.5-1;i[e]=Math.tanh(2.2*t)/Math.tanh(2.2)}return i})(),Z_={moo(i){let e=xt(i,rn("lowpass",650,rt,3),.35,.12,.6,.3),t=Gt("sawtooth",[[0,150],[.25,185],[.75,165],[1,115]],i,1.05,e);Rd(t,i,1,5,3)},oink(i){for(let e of[0,.17]){let t=xt(i+e,rn("lowpass",1100,rt,4),.3,.01,.06,.06);Gt("square",[[0,240],[.1,170]],i+e,.13,t),os(i+e,.1,rn("bandpass",700,xt(i+e,rt,.1,.01,.05,.04),2))}},baa(i){let e=xt(i,rn("bandpass",1300,rt,1.2),.5,.05,.45,.2),t=Gt("sawtooth",[[0,470],[.5,430],[.7,380]],i,.72,e);Rd(t,i,.7,9,22)},cluck(i){for(let e of[0,.11,.2,.36]){let t=xt(i+e,rn("bandpass",1400,rt,2),.4,.005,.03,.04);Gt("triangle",[[0,1e3],[.06,620]],i+e,.08,t)}},swoosh(i){let e=rn("bandpass",400,xt(i,rt,.25,.15,.1,.35),1.5);e.frequency.setValueAtTime(300,i),e.frequency.exponentialRampToValueAtTime(3500,i+.45),os(i,.65,e),Gt("sine",[[0,300],[.4,900]],i,.45,xt(i,rt,.08,.05,.2,.15))},chime(i){[784,988,1319,1568].forEach((e,t)=>Gt("sine",e,i+t*.07,.5,xt(i+t*.07,rt,.15,.005,.05,.4)))},bell(i){for(let[e,t]of[[660,.18],[1822,.06],[2640,.03]])Gt("sine",e,i,1.4,xt(i,rt,t,.003,0,1.3))},boing(i){Gt("sine",[[0,180],[.08,420],[.3,260]],i,.32,xt(i,rt,.18,.005,.1,.2))},click(i){for(let e of[0,.07])os(i+e,.04,rn("highpass",2500,xt(i+e,rt,.2,.002,.01,.03)));Gt("square",300,i,.05,xt(i,rn("lowpass",800,rt),.08,.002,.02,.03))},yay(i){[[523,0],[659,.12],[784,.24],[1047,.38],[784,.56],[1047,.68]].forEach(([e,t])=>{let n=xt(i+t,rt,t>.5?.14:.1,.01,t>.6?.3:.06,.2);Gt("triangle",e,i+t,.6,n),Gt("square",e/2,i+t,.3,xt(i+t,rn("lowpass",900,rt),.03,.01,.05,.1))})},clunk(i){Gt("square",[[0,160],[.06,90]],i,.1,xt(i,rn("lowpass",700,rt),.22,.003,.03,.08)),os(i,.06,rn("bandpass",1800,xt(i,rt,.12,.002,.02,.05),2))},pop(i){Gt("sine",[[0,300],[.08,900],[.16,700]],i,.2,xt(i,rt,.18,.005,.06,.12)),[1319,1568].forEach((e,t)=>Gt("sine",e,i+.1+t*.07,.3,xt(i+.1+t*.07,rt,.06,.005,.03,.25)))},munch(i){for(let e of[0,.14,.3])os(i+e,.07,rn("bandpass",900+e*1e3,xt(i+e,rt,.14,.005,.03,.05),3))},splash(i){let e=rn("lowpass",2500,xt(i,rt,.25,.01,.08,.4));e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.45),os(i,.55,e),Gt("sine",[[0,500],[.15,250]],i,.18,xt(i,rt,.05,.005,.05,.1))},laugh(i){[0,.14,.28,.42,.6].forEach((e,t)=>{let n=620-t*45;Gt("sawtooth",[[0,n*1.12],[.1,n]],i+e,.14,rn("bandpass",1100,xt(i+e,rt,.22,.01,.06,.06),1.5)),os(i+e,.04,rn("highpass",2e3,xt(i+e,rt,.06,.003,.01,.03)))})},tick(i){Gt("triangle",[[0,900],[.05,1200]],i,.07,xt(i,rt,.12,.003,.03,.04))}}});function sy(i){let e="C",t=-1;for(let[n,s]of Object.entries(ny)){let r=i.reduce((o,a)=>o+(s.includes(a.n[0])?a.beats:0),0);r>t&&(t=r,e=n)}return iy[e]}var Q_,$_,ey,ty,ny,iy,Ta,Pd=bt(()=>{Q_=[{name:"Jingle Bells",bpm:150,bells:!0,notes:"E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:0.5 E4:4 F4:1 F4:1 F4:1.5 F4:0.5 F4:1 E4:1 E4:1 E4:0.5 E4:0.5 E4:1 D4:1 D4:1 E4:1 D4:2 G4:2 E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:0.5 E4:4 F4:1 F4:1 F4:1.5 F4:0.5 F4:1 E4:1 E4:1 E4:0.5 E4:0.5 G4:1 G4:1 F4:1 D4:1 C4:4"},{name:"We Wish You a Merry Christmas",bpm:160,beats:3,notes:"G4:1 C5:1 C5:0.5 D5:0.5 C5:0.5 B4:0.5 A4:1 A4:1 A4:1 D5:1 D5:0.5 E5:0.5 D5:0.5 C5:0.5 B4:1 G4:1 G4:1 E5:1 E5:0.5 F5:0.5 E5:0.5 D5:0.5 C5:1 A4:1 G4:0.5 G4:0.5 A4:1 D5:1 B4:1 C5:3 -:2"},{name:"Deck the Halls",bpm:140,notes:"G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 C4:1 B3:1 C4:2 -:2 G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 C4:1 B3:1 C4:2 -:2 D4:1.5 E4:0.5 F4:1 D4:1 E4:1.5 F4:0.5 G4:1 D4:1 E4:0.5 F#4:0.5 G4:1 A4:0.5 B4:0.5 C5:1 B4:1 A4:1 G4:2 -:2 G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 A4:0.5 A4:0.5 A4:0.5 A4:0.5 G4:1.5 F4:0.5 E4:1 D4:1 C4:2 -:2"}],$_={C:0,D:2,E:4,F:5,G:7,A:9,B:11},ey=i=>{let e=/^([A-G])(#?)(\d)$/.exec(i);return 440*2**(($_[e[1]]+(e[2]?1:0)+(+e[3]+1)*12-69)/12)},ty=i=>i.trim().split(/\s+/).map(e=>{let[t,n]=e.split(":");return{f:t==="-"?0:ey(t),n:t,beats:+n}}),ny={C:["C","E","G"],F:["F","A","C"],G:["G","B","D"]},iy={C:130.81/2,F:174.61/2,G:196/2};Ta=class{constructor(){this.on=!0;try{this.on=localStorage.getItem("elf-music")!=="off"}catch{}this.k=1,this.song=0,this.i=0,this.t=0,this.timer=null,this.ctx=null,this.songs=Q_.map(e=>({...e,notes:ty(e.notes)}))}start(e){!e||this.timer||(this.ctx=e,this.out=e.createGain(),this.out.gain.value=this.on?.55:0,this.out.connect(e.destination),this.t=e.currentTime+.1,this.barBeat=0,this.bar=[],this.timer=setInterval(()=>this.schedule(),60))}setOn(e){this.on=e;try{localStorage.setItem("elf-music",e?"on":"off")}catch{}this.out&&this.out.gain.setTargetAtTime(e?.55:0,this.ctx.currentTime,.05)}tempo(e){this.k=e}schedule(){let e=this.ctx;for(;this.t<e.currentTime+.25;){let t=this.songs[this.song],n=60/t.bpm/this.k,s=t.notes[this.i],r=t.beats||4;if(this.barBeat===0){let o=0,a=this.i,c=[];for(;o<r&&a<t.notes.length;)c.push(t.notes[a]),o+=t.notes[a].beats,a++;let l=sy(c.filter(h=>h.f));for(let h=0;h<r;h++)this.bass(this.t+h*n,h===0?l:l*1.5,n)}if(s.f&&this.bell(this.t,s.f,s.beats*n),t.bells)for(let o=0;o<s.beats;o+=.5)this.jingle(this.t+o*n,o%1?.5:1);this.t+=s.beats*n,this.barBeat=(this.barBeat+s.beats)%r,++this.i>=t.notes.length&&(this.i=0,this.barBeat=0,this.song=(this.song+1)%this.songs.length,this.t+=n*2)}}bell(e,t,n){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.22,e+.008),r.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(.35,n*1.4)),r.connect(this.out);for(let[o,a]of[[1,1],[2,.25],[3,.08]]){let c=s.createOscillator(),l=s.createGain();c.type="sine",c.frequency.value=t*o,l.gain.value=a,c.connect(l).connect(r),c.start(e),c.stop(e+Math.max(.4,n*1.5))}}bass(e,t,n){let s=this.ctx,r=s.createGain(),o=s.createOscillator();o.type="triangle",o.frequency.value=t,r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.16,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+n*.8),o.connect(r).connect(this.out),o.start(e),o.stop(e+n)}jingle(e,t){let n=this.ctx;if(!this.noise){this.noise=n.createBuffer(1,n.sampleRate*.2,n.sampleRate);let a=this.noise.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=Math.random()*2-1}let s=n.createBufferSource(),r=n.createBiquadFilter(),o=n.createGain();s.buffer=this.noise,r.type="bandpass",r.frequency.value=7500,r.Q.value=1.5,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.09*t,e+.004),o.gain.exponentialRampToValueAtTime(1e-4,e+.12),s.connect(r).connect(o).connect(this.out),s.start(e),s.stop(e+.15)}}});var Jd={};rp(Jd,{start:()=>yy});function hs(i){wa.textContent=i,wa.classList.remove("show"),wa.offsetWidth,wa.classList.add("show")}function Da(i,e,t,n){oy.textContent=i,ay.innerHTML=e,Ld.textContent=t,$l.style.display="flex",Et("gear").style.display=n===Yr?"flex":"none",Ld.onclick=()=>{jr(),$l.style.display="none",Et("gear").style.display="none",n()}}function zi(i){Ce=i,document.body.dataset.phase=i,Et("point").textContent=i==="pointing"?"\u{1F6B6} Walk":"\u{1F3AF} Target"}function Yr(){Je=Wl(...ah),jn.visible=!1,Rn.visible=!0,Bi.visible=!1,Wt.swing=0,Ay(),Vr=0,ch=!1,or=!1,Kn=-1,Kd(),zi("hide"),Wt.ready=!1,hs("\u{1F9DD} HIDE THE ELF!")}function eh(i=!1){if(Ce==="hide"){if(Je.air){i&&(ch=!0);return}Je.cling&&!i||(mi("pop"),zi("sitting"),Kn=0,setTimeout(()=>{Ce==="sitting"&&(zi("handoff"),Da(i?"\u23F0 Time's up: he's hidden!":"\u{1F92B} He's hidden!","Hand the phone to the <b>seeker</b>.<br>No peeking!","\u{1F50E} I'm the seeker: go!",Hd))},1800))}}function Hd(){Ze=fd(...ry),rr=0,Oi=0,or=!1,ar=La=0,document.body.classList.remove("tapaim"),jt.x=jt.y=null,Na(),zi("seek"),hs("\u{1F50E} FIND THE ELF!")}function lh(){Ce==="seek"?(zi("pointing"),Ze.pointing=!0,jt.x=jt.y=null,Na()):Ce==="pointing"&&(zi("seek"),Ze.pointing=!1)}function th(i=jt.x,e=jt.y){if(Ce!=="pointing"&&Ce!=="seek")return;let t=et.getWorldPosition(new R),n=et.getWorldDirection(new R);i!=null&&n.set(i/innerWidth*2-1,1-e/innerHeight*2,.5).unproject(et).sub(t).normalize();let s=Rn.position.clone();s.y+=ze.height/2,Ra.set(t,n),Ra.far=30,Ra.camera=et;let r=a=>{for(;a;a=a.parent)if(!a.visible)return!1;return!0},o=Ra.intersectObjects(un.children,!0).find(a=>r(a.object)&&!Vd.has(a.object)&&a.object!==jn&&!a.object.isSprite);Oi++,Ql.bang(),pd(t.toArray(),n.toArray(),s.toArray(),o?o.distance:1/0)?(mi("yay"),zi("found"),hs("\u{1F389} FOUND HIM!"),setTimeout(()=>Da("\u{1F389} Found him!",`In <b>${Ia(rr)}</b>, with <b>${Oi}</b> ${Oi===1?"guess":"guesses"}.<br>He was ${Gd()}.`,"\u{1F9DD} Hide him again",Yr),1600)):(mi("boing"),hs(Oi>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!"))}function Pa(i=!1){Ce!=="seek"&&Ce!=="pointing"||(zi("reveal"),Ze.pointing=!1,Xn=0,jn.visible=Bi.visible=!0,hs(i?"\u23F0 TIME'S UP!":"\u{1F440} HE WAS HERE!"),i&&mi("bell"),Kn=-1,Kd(),Je.yaw=Math.atan2(Ze.x-Je.x,Ze.z-Je.z)+Math.PI,setTimeout(()=>Da(i?"\u23F0 Time's up: the elf wins!":"\u{1F9DD} He was here!",`He was ${Gd()}.`,"\u{1F9DD} Hide him again",Yr),ln.has("giveup")?1e9:6e3))}function ly(i){let e=Je.x-Ze.x,t=Je.z-Ze.z,n=Je.y+ze.height/2-et.position.y,s=Math.atan2(-e,-t),r=Math.max(-1.3,Math.min(1.1,Math.atan2(n,Math.hypot(e,t)))),o=1-Math.exp(-i*4),a=Math.atan2(Math.sin(s-Ze.yaw),Math.cos(s-Ze.yaw));Ze.yaw+=a*o,Ze.pitch+=(r-Ze.pitch)*o}function Gd(){let i=Rn.position,e=null,t=1/0,n="near";for(let s of Zr.things){if(s.gone)continue;let r=new pt().setFromObject(s.at),o=i.x>r.min.x-.02&&i.x<r.max.x+.02&&i.z>r.min.z-.02&&i.z<r.max.z+.02,a=o?0:Math.hypot(Math.max(r.min.x-i.x,0,i.x-r.max.x),Math.max(r.min.z-i.z,0,i.z-r.max.z));(a<t||a===0&&t===0&&o)&&(t=a,e=s,n=o?i.y>.05?"on top of":"under":"near")}return e?`${n} the <b>${e.name.replace(/ \+.*/,"")}</b>`:"somewhere sneaky"}function qd(i,e,t,n){let s=Et(i),r=()=>{for(let o of s.children)o.classList.toggle("on",+o.dataset.s===t())};for(let o of cy){let a=document.createElement("button");a.textContent=Ia(o),a.dataset.s=o,a.addEventListener("click",()=>{n(o);try{localStorage.setItem(e,o)}catch{}r()}),s.appendChild(a)}r()}function uy(i,e){jt.x=i,jt.y=e,Na(),ar=Nd+hy,La=Nd,document.body.classList.add("tapaim")}function Na(){let i=Et("aim");i.style.left=jt.x===null?"50%":`${jt.x}px`,i.style.top=jt.y===null?"50%":`${jt.y}px`}function dy(i,e){if(e&&(ih-=i)<=0){ih=.8;let t=new Pr(new qs({map:fy,transparent:!0,depthWrite:!1}));t.position.set(Je.x,Je.y+ze.height*.95,Je.z),t.userData={age:0,big:qn.length%3===1?1.5:1,ph:Math.random()*6},un.add(t),qn.push(t)}for(let t of qn){let n=t.userData;n.age+=i,t.position.y+=i*.035,t.position.x+=Math.sin(n.age*2.5+n.ph)*i*.015;let s=(.018+n.age*.012)*n.big;t.scale.set(s,s,1),t.material.opacity=Math.min(1,n.age*3)*Math.max(0,1-n.age/2.6)}for(let t=qn.length-1;t>=0;t--)qn[t].userData.age>2.6&&(un.remove(qn[t]),qn[t].material.dispose(),qn.splice(t,1))}function my(i,e){if(e&&(sh-=i)<=0){sh=.3;let t=new Pr(new qs({map:py,transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.8})),n=Yn.length%2?1:-1;t.position.set(Je.x,Je.y+ze.height*.9,Je.z),t.userData={age:0,vx:n*(.02+Math.random()*.02),vz:(Math.random()-.5)*.03},un.add(t),Yn.push(t)}for(let t of Yn){let n=t.userData;n.age+=i,t.position.y+=i*.07,t.position.x+=n.vx*i,t.position.z+=n.vz*i;let s=.02+n.age*.03;t.scale.set(s*2,s,1),t.material.opacity=Math.min(1,n.age*5)*Math.max(0,1-n.age/1.4)}for(let t=Yn.length-1;t>=0;t--)Yn[t].userData.age>1.4&&(un.remove(Yn[t]),Yn[t].material.dispose(),Yn.splice(t,1))}function Ay(){for(let i of Yn)un.remove(i),i.material.dispose();Yn.length=0,sh=0}function Kd(){for(let i of qn)un.remove(i),i.material.dispose();qn.length=0,ih=0}function Jl(i,e,t){let n=qr.ceiling(i,e),s=t+.01<n?n:jd;for(let r of qr.tops)r.under!==void 0&&r.under>t+.01&&i>r.x0&&i<r.x1&&e>r.z0&&e<r.z1&&(s=Math.min(s,r.under));return s}function Fd(i,e=6){let t=Rn.position,n=Je.yaw+Wt.swing,s=-Math.sin(n),r=-Math.cos(n),o=Math.min(Jl(t.x,t.z,t.y),Jl(t.x-s*.25,t.z-r*.25,t.y)),a=o-(t.y+ze.height)<.3;a&&(as.over=o),as.t=Math.max(0,Math.min(1,as.t+(a?i:-i)/.35));let c=as.t*as.t*(3-2*as.t),l=.42+(.2-.42)*c,h=.2+(Math.max(.03,Math.min(.1,as.over-t.y-.025))-.2)*c,u=new R;for(let A=0;A<6;A++){u.set(t.x-s*l,t.y+h,t.z-r*l);let g=Zr.whole;if(!gy(u)&&u.x>g.x0+.05&&u.x<g.x1-.05&&u.z>g.z0+.05&&u.z<g.z1-.05)break;l*=.7,c<.5&&(h=Math.max(h,.1))}u.y=Math.min(u.y,Jl(u.x,u.z,t.y)-.025);let f=new R(t.x+s*.15,t.y+ze.height*(.6-.25*c),t.z+r*.15),p=Wt.ready?1-Math.exp(-i*e):1;Wt.ready=!0,Wt.pos.lerp(u,p),Wt.look.lerp(f,p),c>0&&(Wt.pos.y=Math.min(Wt.pos.y,u.y)),et.position.copy(Wt.pos),et.up.set(0,1,0),et.lookAt(Wt.look),et.fov=66,et.updateProjectionMatrix()}function xy(){et.position.set(Ze.x,Ze.eye,Ze.z),et.rotation.set(Ze.pitch,Ze.yaw,0,"YXZ");let i=Ce==="pointing"?52:72;Math.abs(et.fov-i)>.1&&(et.fov+=(i-et.fov)*.2,et.updateProjectionMatrix())}function Gr(i,e){let t=e?{pads:[],kb:{x:0,y:0},events:[]}:Yd.poll(i,{holdToggle:!1}),n=Fi.x+t.kb.x,s=Fi.y+t.kb.y,r=!1,o=!1;for(let p of t.pads){n+=p.x,s+=p.y;let A=Od.get(p.index)||[],g=p.pressed.filter(m=>!A.includes(m));g.includes(0)&&(r=!0),g.includes(2)&&(o=!0),Od.set(p.index,p.pressed)}e&&({x:n,y:s}=e),n=Math.max(-1,Math.min(1,n)),s=Math.max(-1,Math.min(1,s));let a=t.events.some(p=>p.type==="drop"&&p.pad<0);t.events.some(p=>p.type==="music")&&(jr(),ls.setOn(!ls.on),oh()),(Ca("KeyH")||o&&Ce==="hide")&&eh(),(Ca("KeyP")||o&&(Ce==="seek"||Ce==="pointing"))&&lh(),Ca("KeyC")&&Ze&&(Ze.crouch=!Ze.crouch,Et("crouch").classList.toggle("on",Ze.crouch)),Ca("KeyG")&&Pa();let c=performance.now()/1e3;if(Ce==="hide"||Ce==="title"){let p=Ce==="hide"&&(nh||a||r||e&&e.jump);p&&mi("swoosh"),Ce==="hide"&&(ud(Je,{x:n,y:s,jump:p},i,qr),e||(Vr+=i),Vr>=Wr-10&&!or&&(or=!0,hs("\u23F0 10 SECONDS!"),mi("bell")),(Vr>=Wr||ch&&!Je.air)&&eh(!0)),Wt.swing+=cs.x*.8,Wt.swing*=Math.exp(-i*(Kr.size?0:1.5))}else if(Ze&&Ce!=="handoff"&&Ce!=="sitting"){(Ce==="seek"||Ce==="pointing")&&(e||(rr+=i),rr>=Xr-10&&!or&&(or=!0,hs("\u23F0 10 SECONDS!"),mi("bell")),rr>=Xr&&Pa(!0)),Ce==="pointing"&&(a||r)&&th(),La>0&&(La-=i)<=0&&th(),ar>0&&(ar-=i)<=0&&(document.body.classList.remove("tapaim"),Ce==="seek"&&(jt.x=jt.y=null,Na()));let p=ar>0;Ce==="reveal"&&ly(i),dd(Ze,(Ce==="seek"||Ce==="pointing")&&!p?{x:n,y:s,lookX:cs.x,lookY:cs.y}:{x:0,y:0},i,qr)}nh=!1,cs.x=cs.y=0,Rn.position.set(Je.x,Je.y,Je.z),Rn.rotation.y=Je.yaw,Kn>=0&&(Kn+=i);let l=Kn>=0&&!Je.cling;if(Ad(Rn,c,{walking:Ce==="hide"?Je.walking:0,run:Je.run,climbing:Je.climbing,hanging:!!Je.cling,air:Je.air,sit:l?Math.min(1,Kn/.7):0,asleep:l&&Kn>1,laugh:Ce==="reveal"}),dy(i,l&&Kn>1),my(i,Ce==="reveal"&&Xn>sr),Ce==="reveal"){let p=Xn;Xn+=i,p<=sr&&Xn>sr&&(Wt.pos.copy(et.position),Wt.look.copy(et.position).addScaledVector(et.getWorldDirection(new R),et.position.distanceTo(Rn.position)),Wt.ready=!0,Wt.swing=Math.PI,mi("laugh"));let A=et.position.distanceTo(Rn.position),g=Math.abs(Math.sin(Xn*5)),m=Math.max(.8,Math.min(4,A/1.2))*(1+Math.sin(Xn*6)*.15),d=Math.max(.5,Math.min(6,A/.8));jn.position.set(Je.x,Je.y+ze.height/2,Je.z),jn.scale.setScalar(m),jn.lookAt(et.position),jn.visible=Xn<sr+.6,Bi.quaternion.copy(et.quaternion),Bi.scale.setScalar(d),Bi.position.set(Je.x,Je.y+ze.height,Je.z).addScaledVector(new R(0,1,0).applyQuaternion(et.quaternion),(.015+g*.03)*d)}if(Ce==="reveal"&&Xn>sr)Fd(i,2.2),ir=null;else if(Ze&&Ce!=="hide"&&Ce!=="title"&&Ce!=="handoff"&&Ce!=="sitting"){xy();let p=ir?Math.hypot(Ze.x-ir[0],Ze.z-ir[1])/Math.max(i,.001)/Gn.walk:0;ir=[Ze.x,Ze.z],Ql.update(i,Math.min(1,p),Ze.yaw,Ce==="pointing"||ar>0,jt.x??innerWidth/2,jt.y??innerHeight/2)}else Fd(i),ir=null;Ql.show(_y());let u=Ce==="hide"?Wr-Vr:Xr-rr;Dd.textContent=Ce==="hide"?`\u{1F9DD} ${Ia(Math.max(0,Math.ceil(u)))} to hide \xB7 walk into things to climb`:Ce==="seek"||Ce==="pointing"?`\u{1F50E} ${Ia(Math.max(0,Math.ceil(u)))} left \xB7 ${Oi} ${Oi===1?"guess":"guesses"}`:"";let f=(Ce==="hide"||Ce==="seek"||Ce==="pointing")&&u<=10;Dd.classList.toggle("hurry",f),ls.tempo(f?1.3:1),Zr.update(i)}function Zd(i){let e=Math.min(.05,(i-rh)/1e3);rh=i,Gr(e),hn.render(un,et),requestAnimationFrame(Zd)}function yy(){if(ln.get("at")&&ah.splice(0,3,...ln.get("at").split(",").map(Number)),ln.has("shot")){$l.style.display="none",Yr();let i=+ln.get("sim")||0,e={x:+(ln.get("sx")??0),y:+(ln.get("sy")??0)};for(let t=0;t<i;t+=1/60)Gr(1/60,e);if(ln.has("seek")&&(Kn=2,Hd(),ln.has("point")&&lh(),ln.has("giveup"))){Pa();for(let t=0;t<(+ln.get("giveup")||1.5)*60;t++)Gr(1/60,{x:0,y:0})}window.__test={elfOnScreen:()=>{let t=Rn.position.clone();return t.y+=ze.height/2,t.project(et),[(t.x+1)/2*innerWidth,(1-t.y)/2*innerHeight]},guesses:()=>Oi,phase:()=>Ce},Gr(1/60,{x:0,y:0}),Gr(1/60,{x:0,y:0}),hn.render(un,et)}else Da("\u{1F9DD} Hide the Elf","Player 1: you're the elf. <b>Walk into things to climb them</b>, <b>jump</b> near something tall, then press <b>\u{1F648} Hide</b>.<br>Player 2: find him!","\u{1F9DD} Start hiding",Yr);requestAnimationFrame(i=>{rh=i,Zd(i)})}var ls,jr,oh,ln,Bd,zd,hn,un,et,Zr,qr,ah,ry,Rn,Ql,ir,Je,jn,Bi,Et,$l,oy,ay,Ld,wa,Dd,cy,kd,Wr,Xr,Kn,Ce,Ze,rr,Oi,Xn,Vr,ch,or,Ia,Ra,Vd,jt,sr,cr,Wd,Fi,Xd,nh,us,cs,Kr,hh,ar,La,Nd,hy,Yd,Ud,Ca,Od,fy,qn,ih,py,Yn,sh,Wt,gy,jd,as,_y,rh,Qd=bt(()=>{Un();Vl();Xl();gd();Aa();yd();vd();bd();Ed();wd();Id();Pd();Td();ls=new Ta,jr=()=>{let i=Zl();return ls.start(i),i},oh=()=>{let i=document.getElementById("music");i&&(i.textContent=ls.on?"\u{1F3B5}":"\u{1F507}")},ln=new URLSearchParams(location.search),zd=!!((Bd=globalThis.matchMedia)!=null&&Bd.call(globalThis,"(pointer: coarse)").matches);zd&&document.body.classList.add("touch");hn=new Ir({antialias:!0,preserveDrawingBuffer:ln.has("shot")});hn.setPixelRatio(Math.min(devicePixelRatio,1.5));hn.setSize(innerWidth,innerHeight);hn.shadowMap.enabled=!0;hn.shadowMap.type=nl;hn.toneMapping=il;document.body.appendChild(hn.domElement);un=new Ko;un.background=new Se(2762016);et=new Rt(66,innerWidth/innerHeight,.01,40);addEventListener("resize",()=>{hn.setSize(innerWidth,innerHeight),et.aspect=innerWidth/innerHeight,et.updateProjectionMatrix()});Zr=ld(un);Zr.labels.visible=!1;qr=_d(Zr),ah=[2.6,1,0],ry=[2.6,1,0],Rn=md();un.add(Rn);Ql=new Sa(document.getElementById("gun")),ir=null,Je=Wl(...ah),jn=new yt(new Ri(.12,.018,8,32),new Vt({color:16765503,depthTest:!1,transparent:!0}));jn.renderOrder=10;jn.visible=!1;un.add(jn);Bi=new ft;{let i=new Vt({color:15087942,depthTest:!1,transparent:!0}),e=new yt(new js(.035,.05,16),i);e.rotation.x=Math.PI,e.position.y=.025;let t=new yt(new Ye(.013,.013,.05,12),i);t.position.y=.075;for(let n of[e,t])n.renderOrder=11,Bi.add(n)}Bi.visible=!1;un.add(Bi);Et=i=>document.getElementById(i),$l=Et("screen"),oy=Et("screen-title"),ay=Et("screen-text"),Ld=Et("screen-go"),wa=Et("banner"),Dd=Et("hud"),cy=[30,45,60,90,120],kd=i=>{try{return+localStorage.getItem(i)||0}catch{return 0}},Wr=+ln.get("hidetime")||kd("hide-elf.hidetime")||45,Xr=+ln.get("seektime")||kd("hide-elf.seektime")||60,Kn=-1,Ce="title",Ze=null,rr=0,Oi=0,Xn=0,Vr=0,ch=!1,or=!1;Ia=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,Ra=new ca,Vd=new Set;Rn.traverse(i=>Vd.add(i));jt={x:null,y:null};sr=1;cr=Et("stick"),Wd=Et("knob"),Fi={x:0,y:0},Xd=i=>{let e=cr.getBoundingClientRect();[Fi.x,Fi.y]=Md(i.clientX-(e.left+e.width/2),i.clientY-(e.top+e.height/2),e.width/2),Wd.style.transform=`translate(${Fi.x*e.width/2}px, ${Fi.y*e.width/2}px)`};cr.addEventListener("pointerdown",i=>{i.preventDefault(),cr.setPointerCapture(i.pointerId),Xd(i)});cr.addEventListener("pointermove",i=>{cr.hasPointerCapture(i.pointerId)&&Xd(i)});for(let i of["pointerup","pointercancel","lostpointercapture"])cr.addEventListener(i,()=>{Fi.x=Fi.y=0,Wd.style.transform=""});nh=!1,us=(i,e)=>Et(i).addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),jr(),e()});us("jump",()=>{nh=!0});us("hide",eh);us("point",lh);us("fire",()=>th());us("crouch",()=>{Ze&&(Ze.crouch=!Ze.crouch,Et("crouch").classList.toggle("on",Ze.crouch))});us("giveup",Pa);us("music",()=>{ls.setOn(!ls.on),oh()});oh();qd("hide-times","hide-elf.hidetime",()=>Wr,i=>{Wr=i});qd("seek-times","hide-elf.seektime",()=>Xr,i=>{Xr=i});Et("gear").addEventListener("click",()=>{Et("settings").style.display="flex"});Et("settings-done").addEventListener("click",()=>{Et("settings").style.display="none"});cs={x:0,y:0},Kr=new Map,hh=new Map;hn.domElement.addEventListener("pointerdown",i=>{jr(),Kr.set(i.pointerId,[i.clientX,i.clientY]),hh.set(i.pointerId,[i.clientX,i.clientY,performance.now()]),hn.domElement.setPointerCapture(i.pointerId)});hn.domElement.addEventListener("pointermove",i=>{let e=Kr.get(i.pointerId);if(!e)return;let t=(Ce==="pointing"?.0022:.005)*(zd?1:.8);cs.x+=(i.clientX-e[0])*t,cs.y+=(i.clientY-e[1])*t,Kr.set(i.pointerId,[i.clientX,i.clientY])});hn.domElement.addEventListener("pointerup",i=>{let e=hh.get(i.pointerId);e&&(Ce==="pointing"||Ce==="seek")&&Math.hypot(i.clientX-e[0],i.clientY-e[1])<14&&performance.now()-e[2]<450&&uy(i.clientX,i.clientY)});for(let i of["pointerup","pointercancel"])hn.domElement.addEventListener(i,e=>{Kr.delete(e.pointerId),hh.delete(e.pointerId)});ar=0,La=0,Nd=.28,hy=.9;addEventListener("touchend",()=>jr());Yd=new Ea,Ud={},Ca=i=>{let e=!!Yd.keys[i],t=e&&!Ud[i];return Ud[i]=e,t},Od=new Map,fy=Jf(),qn=[],ih=0;py=(()=>{let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.font='bold 100px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=12,e.strokeStyle="#9d0208",e.strokeText("HA!",128,68),e.fillStyle="#ffd23f",e.fillText("HA!",128,68);let t=new Ks(i);return t.colorSpace=$e,t})(),Yn=[],sh=0;Wt={pos:new R,look:new R,ready:!1,swing:0},gy=i=>qr.tops.some(e=>i.x>e.x0&&i.x<e.x1&&i.z>e.z0&&i.z<e.z1&&i.y<e.y1&&!(e.under!==void 0&&i.y<e.under-.01)),jd=nt+.24;as={t:0,over:jd};_y=()=>!!Ze&&["seek","pointing","found","reveal"].includes(Ce)&&!(Ce==="reveal"&&Xn>sr),rh=performance.now()});kl();qf().then(()=>Promise.resolve().then(()=>(Qd(),Jd))).then(i=>i.start());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
