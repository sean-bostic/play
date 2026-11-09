(()=>{var Sm=Object.defineProperty;var Tt=(i,e)=>()=>(i&&(e=i(i=0)),e);var Tm=(i,e)=>{for(var t in e)Sm(i,t,{get:e[t],enumerable:!0})};var mo,oa=Tt(()=>{mo=/\/[^/]+-lab\//.test(location.pathname);if(mo)for(let i of["getItem","setItem","removeItem"]){let e=Storage.prototype[i];Storage.prototype[i]=function(t,...n){return e.call(this,`lab:${t}`,...n)}}});function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function sn(i,e,t){return Math.max(e,Math.min(t,i))}function kh(i,e){return(i%e+e)%e}function EA(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function SA(i,e,t){return i!==e?(t-i)/(e-i):0}function Ro(i,e,t){return(1-t)*i+t*e}function TA(i,e,t,n){return Ro(i,e,1-Math.exp(-t*n))}function wA(i,e=1){return e-Math.abs(kh(i,e*2)-e)}function RA(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function CA(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function IA(i,e){return i+Math.floor(Math.random()*(e-i+1))}function PA(i,e){return i+Math.random()*(e-i)}function LA(i){return i*(.5-Math.random())}function DA(i){i!==void 0&&(Gf=i);let e=Gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function NA(i){return i*wo}function UA(i){return i*Br}function Jl(i){return(i&i-1)===0&&i!==0}function OA(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function FA(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),A=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*A,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*A,a*l);break;case"ZYZ":i.set(c*A,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function up(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function No(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function BA(){let i=No("canvas");return i.style.display="block",i}function Co(i){i in Wf||(Wf[i]=!0,console.warn(i))}function Lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ml(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function xl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ls.fromArray(i,r);let a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),c=e.dot(Ls),l=t.dot(Ls),h=n.dot(Ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function wl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function $A(i,e,t,n,s,r,o,a){let c;if(e.side===En?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Si,a),c===null)return null;Ea.copy(a),Ea.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ea);return l<t.near||l>t.far?null:{distance:l,point:Ea.clone(),object:i}}function Sa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,xr),i.getVertexPosition(c,yr),i.getVertexPosition(l,_r);let h=$A(i,e,t,n,xr,yr,_r,ba);if(h){s&&(_a.fromBufferAttribute(s,a),va.fromBufferAttribute(s,c),Ma.fromBufferAttribute(s,l),h.uv=Bs.getInterpolation(ba,xr,yr,_r,_a,va,Ma,new fe)),r&&(_a.fromBufferAttribute(r,a),va.fromBufferAttribute(r,c),Ma.fromBufferAttribute(r,l),h.uv1=Bs.getInterpolation(ba,xr,yr,_r,_a,va,Ma,new fe),h.uv2=h.uv1),o&&(id.fromBufferAttribute(o,a),sd.fromBufferAttribute(o,c),rd.fromBufferAttribute(o,l),h.normal=Bs.getInterpolation(ba,xr,yr,_r,id,sd,rd,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new w,materialIndex:0};Bs.getNormal(xr,yr,_r,u.normal),h.face=u}return h}function zr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=zr(i[t]);for(let s in n)e[s]=n[s]}return e}function QA(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dp(i){return i.getRenderTarget()===null?i.outputColorSpace:At.workingColorSpace}function pp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rg(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,p=u.byteLength,A=i.createBuffer();i.bindBuffer(h,A),i.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:A,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let f=h.array,p=h._updateRange,A=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&A.length===0&&i.bufferSubData(u,0,f),A.length!==0){for(let x=0,m=A.length;x<m;x++){let d=A[x];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}function zy(i,e,t,n,s,r,o){let a=new Ie(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function A(m,d){let y=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?t:e).get(g)),g===null?x(a,c):g&&g.isColor&&(x(g,1),y=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Mc)?(h===void 0&&(h=new xt(new Zn(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:zr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=At.getTransfer(g.colorSpace)!==Nt,(u!==g||f!==g.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,f=g.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new xt(new $t(2,2),new di({name:"BackgroundMaterial",uniforms:zr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=At.getTransfer(g.colorSpace)!==Nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=g,f=g.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,d){m.getRGB(wa,dp(i)),n.buffers.color.setClear(wa.r,wa.g,wa.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:A}}function ky(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(P,B,Y,Q,J){let $=!1;if(o){let te=x(Q,Y,B);l!==te&&(l=te,p(l.object)),$=d(P,Q,Y,J),$&&y(P,Q,Y,J)}else{let te=B.wireframe===!0;(l.geometry!==Q.id||l.program!==Y.id||l.wireframe!==te)&&(l.geometry=Q.id,l.program=Y.id,l.wireframe=te,$=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,N(P,B,Y,Q),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function A(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,B,Y){let Q=Y.wireframe===!0,J=a[P.id];J===void 0&&(J={},a[P.id]=J);let $=J[B.id];$===void 0&&($={},J[B.id]=$);let te=$[Q];return te===void 0&&(te=m(f()),$[Q]=te),te}function m(P){let B=[],Y=[],Q=[];for(let J=0;J<s;J++)B[J]=0,Y[J]=0,Q[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:Q,object:P,attributes:{},index:null}}function d(P,B,Y,Q){let J=l.attributes,$=B.attributes,te=0,re=Y.getAttributes();for(let _e in re)if(re[_e].location>=0){let ne=J[_e],ge=$[_e];if(ge===void 0&&(_e==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),_e==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor)),ne===void 0||ne.attribute!==ge||ge&&ne.data!==ge.data)return!0;te++}return l.attributesNum!==te||l.index!==Q}function y(P,B,Y,Q){let J={},$=B.attributes,te=0,re=Y.getAttributes();for(let _e in re)if(re[_e].location>=0){let ne=$[_e];ne===void 0&&(_e==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),_e==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));let ge={};ge.attribute=ne,ne&&ne.data&&(ge.data=ne.data),J[_e]=ge,te++}l.attributes=J,l.attributesNum=te,l.index=Q}function g(){let P=l.newAttributes;for(let B=0,Y=P.length;B<Y;B++)P[B]=0}function _(P){T(P,0)}function T(P,B){let Y=l.newAttributes,Q=l.enabledAttributes,J=l.attributeDivisors;Y[P]=1,Q[P]===0&&(i.enableVertexAttribArray(P),Q[P]=1),J[P]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,B),J[P]=B)}function E(){let P=l.newAttributes,B=l.enabledAttributes;for(let Y=0,Q=B.length;Y<Q;Y++)B[Y]!==P[Y]&&(i.disableVertexAttribArray(Y),B[Y]=0)}function I(P,B,Y,Q,J,$,te){te===!0?i.vertexAttribIPointer(P,B,Y,J,$):i.vertexAttribPointer(P,B,Y,Q,J,$)}function N(P,B,Y,Q){if(n.isWebGL2===!1&&(P.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let J=Q.attributes,$=Y.getAttributes(),te=B.defaultAttributeValues;for(let re in $){let _e=$[re];if(_e.location>=0){let K=J[re];if(K===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let ne=K.normalized,ge=K.itemSize,we=t.get(K);if(we===void 0)continue;let Re=we.buffer,Ge=we.type,Ve=we.bytesPerElement,Fe=n.isWebGL2===!0&&(Ge===i.INT||Ge===i.UNSIGNED_INT||K.gpuType===ep);if(K.isInterleavedBufferAttribute){let ht=K.data,G=ht.stride,jt=K.offset;if(ht.isInstancedInterleavedBuffer){for(let Le=0;Le<_e.locationSize;Le++)T(_e.location+Le,ht.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Le=0;Le<_e.locationSize;Le++)_(_e.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Le=0;Le<_e.locationSize;Le++)I(_e.location+Le,ge/_e.locationSize,Ge,ne,G*Ve,(jt+ge/_e.locationSize*Le)*Ve,Fe)}else{if(K.isInstancedBufferAttribute){for(let ht=0;ht<_e.locationSize;ht++)T(_e.location+ht,K.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ht=0;ht<_e.locationSize;ht++)_(_e.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ht=0;ht<_e.locationSize;ht++)I(_e.location+ht,ge/_e.locationSize,Ge,ne,ge*Ve,ge/_e.locationSize*ht*Ve,Fe)}}else if(te!==void 0){let ne=te[re];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(_e.location,ne);break;case 3:i.vertexAttrib3fv(_e.location,ne);break;case 4:i.vertexAttrib4fv(_e.location,ne);break;default:i.vertexAttrib1fv(_e.location,ne)}}}}E()}function v(){F();for(let P in a){let B=a[P];for(let Y in B){let Q=B[Y];for(let J in Q)A(Q[J].object),delete Q[J];delete B[Y]}delete a[P]}}function R(P){if(a[P.id]===void 0)return;let B=a[P.id];for(let Y in B){let Q=B[Y];for(let J in Q)A(Q[J].object),delete Q[J];delete B[Y]}delete a[P.id]}function z(P){for(let B in a){let Y=a[B];if(Y[P.id]===void 0)continue;let Q=Y[P.id];for(let J in Q)A(Q[J].object),delete Q[J];delete Y[P.id]}}function F(){Z(),h=!0,l!==c&&(l=c,p(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:F,resetDefaultState:Z,dispose:v,releaseStatesOfGeometry:R,releaseStatesOfProgram:z,initAttributes:g,enableAttribute:_,disableUnusedAttributes:E}}function Hy(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,A;if(s)p=i,A="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[A](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let A=0;A<f;A++)this.render(h[A],u[A]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let A=0;for(let x=0;x<f;x++)A+=u[x];t.update(A,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Vy(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,_=o||e.has("OES_texture_float"),T=g&&_,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:A,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:T,maxSamples:E}}function Gy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Xi,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let A=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||A===null||A.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,g=y*4,_=d.clippingState||null;c.value=_,_=h(A,f,g,p);for(let T=0;T!==g;++T)_[T]=t[T];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,A){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,A!==!0||m===null){let d=p+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,_=p;g!==x;++g,_+=4)o.copy(u[g]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Wy(i){let e=new WeakMap;function t(o,a){return a===Yl?o.mapping=Nr:a===Kl&&(o.mapping=Ur),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Yl||a===Kl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new th(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function Xy(i){let e=[],t=[],n=[],s=i,r=i-Cr+1+od.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Cr?c=od[o-i+Cr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,A=6,x=3,m=2,d=1,y=new Float32Array(x*A*p),g=new Float32Array(m*A*p),_=new Float32Array(d*A*p);for(let E=0;E<p;E++){let I=E%3*2/3-1,N=E>2?0:-1,v=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];y.set(v,x*A*E),g.set(f,m*A*E);let R=[E,E,E,E,E,E];_.set(R,d*A*E)}let T=new Wt;T.setAttribute("position",new rn(y,x)),T.setAttribute("uv",new rn(g,m)),T.setAttribute("faceIndex",new rn(_,d)),e.push(T),s>Cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ld(i,e,t){let n=new fi(i,e,t);return n.texture.mapping=Mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qy(i,e,t){let n=new Float32Array(Fs),s=new w(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function hd(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function ud(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function Yy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Yl||c===Kl,h=c===Nr||c===Ur;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ec(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ec(i));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ky(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jy(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let A in f.attributes)e.remove(f.attributes[A]);for(let A in f.morphAttributes){let x=f.morphAttributes[A];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let A in f)e.update(f[A],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let A in p){let x=p[A];for(let m=0,d=x.length;m<d;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,A=u.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let g=0,_=y.length;g<_;g+=3){let T=y[g+0],E=y[g+1],I=y[g+2];f.push(T,E,E,I,I,T)}}else if(A!==void 0){let y=A.array;x=A.version;for(let g=0,_=y.length/3-1;g<_;g+=3){let T=g+0,E=g+1,I=g+2;f.push(T,E,E,I,I,T)}}else return;let m=new(up(f)?Ja:Za)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Zy(i,e,t,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,A){i.drawElements(r,A,a,p*c),t.update(A,r,1)}function u(p,A,x){if(x===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,A,a,p*c,x),t.update(A,r,x)}function f(p,A,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/c,A[d]);else{m.multiDrawElementsWEBGL(r,A,0,a,p,0,x);let d=0;for(let y=0;y<x;y++)d+=A[y];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Jy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $y(i,e){return i[0]-e[0]}function Qy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function e_(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new wt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,A=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==A){let P=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],N=0;y===!0&&(N=1),g===!0&&(N=2),_===!0&&(N=3);let v=h.attributes.position.count*N,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let z=new Float32Array(v*R*4*A),F=new Ka(z,v,R,A);F.type=qi,F.needsUpdate=!0;let Z=N*4;for(let B=0;B<A;B++){let Y=T[B],Q=E[B],J=I[B],$=v*R*4*B;for(let te=0;te<Y.count;te++){let re=te*Z;y===!0&&(o.fromBufferAttribute(Y,te),z[$+re+0]=o.x,z[$+re+1]=o.y,z[$+re+2]=o.z,z[$+re+3]=0),g===!0&&(o.fromBufferAttribute(Q,te),z[$+re+4]=o.x,z[$+re+5]=o.y,z[$+re+6]=o.z,z[$+re+7]=0),_===!0&&(o.fromBufferAttribute(J,te),z[$+re+8]=o.x,z[$+re+9]=o.y,z[$+re+10]=o.z,z[$+re+11]=J.itemSize===4?o.w:1)}}x={count:A,texture:F,size:new fe(v,R)},r.set(h,x),h.addEventListener("dispose",P)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=f===void 0?0:f.length,A=n[h.id];if(A===void 0||A.length!==p){A=[];for(let g=0;g<p;g++)A[g]=[g,0];n[h.id]=A}for(let g=0;g<p;g++){let _=A[g];_[0]=g,_[1]=f[g]}A.sort(Qy);for(let g=0;g<8;g++)g<p&&A[g][1]?(a[g][0]=A[g][0],a[g][1]=A[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort($y);let x=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let g=0;g<8;g++){let _=a[g],T=_[0],E=_[1];T!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+g)!==x[T]&&h.setAttribute("morphTarget"+g,x[T]),m&&h.getAttribute("morphNormal"+g)!==m[T]&&h.setAttribute("morphNormal"+g,m[T]),s[g]=E,d+=E):(x&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),m&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),s[g]=0)}let y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function t_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}function Yr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sc(i,e){let t=dd[e];t===void 0&&(t=new Int32Array(e),dd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function o_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Ad.set(n),i.uniformMatrix2fv(this.addr,!1,Ad),ln(t,n)}}function a_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;md.set(n),i.uniformMatrix3fv(this.addr,!1,md),ln(t,n)}}function c_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;pd.set(n),i.uniformMatrix4fv(this.addr,!1,pd),ln(t,n)}}function l_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function d_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function g_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Ap:mp;t.setTexture2D(e||r,s)}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xp,s)}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yp,s)}function __(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gp,s)}function v_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return c_;case 5124:case 35670:return l_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return f_;case 5125:return d_;case 36294:return p_;case 36295:return m_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return __}}function M_(i,e){i.uniform1fv(this.addr,e)}function b_(i,e){let t=Yr(e,this.size,2);i.uniform2fv(this.addr,t)}function E_(i,e){let t=Yr(e,this.size,3);i.uniform3fv(this.addr,t)}function S_(i,e){let t=Yr(e,this.size,4);i.uniform4fv(this.addr,t)}function T_(i,e){let t=Yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function w_(i,e){let t=Yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function R_(i,e){let t=Yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C_(i,e){i.uniform1iv(this.addr,e)}function I_(i,e){i.uniform2iv(this.addr,e)}function P_(i,e){i.uniform3iv(this.addr,e)}function L_(i,e){i.uniform4iv(this.addr,e)}function D_(i,e){i.uniform1uiv(this.addr,e)}function N_(i,e){i.uniform2uiv(this.addr,e)}function U_(i,e){i.uniform3uiv(this.addr,e)}function O_(i,e){i.uniform4uiv(this.addr,e)}function F_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||mp,r[o])}function B_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xp,r[o])}function z_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yp,r[o])}function k_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gp,r[o])}function H_(i){switch(i){case 5126:return M_;case 35664:return b_;case 35665:return E_;case 35666:return S_;case 35674:return T_;case 35675:return w_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return I_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return N_;case 36295:return U_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return k_}}function gd(i,e){i.seq.push(e),i.map[e.id]=e}function V_(i,e,t){let n=i.name,s=n.length;for(Ul.lastIndex=0;;){let r=Ul.exec(n),o=Ul.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){gd(t,l===void 0?new nh(a,i,e):new ih(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new sh(a),gd(t,u)),t=u}}}function xd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function X_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function q_(i){let e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(i),n;switch(e===t?n="":e===Ga&&t===Va?n="LinearDisplayP3ToLinearSRGB":e===Va&&t===Ga&&(n="LinearSRGBToLinearDisplayP3"),i){case on:case Ec:return[n,"LinearTransferOETF"];case gt:case zh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+X_(i.getShaderSource(e),o)}else return s}function Y_(i,e){let t=q_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function K_(i,e){let t;switch(e){case eA:t="Linear";break;case tA:t="Reinhard";break;case nA:t="OptimizedCineon";break;case Uh:t="ACESFilmic";break;case sA:t="AgX";break;case iA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function j_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function Z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ir).join(`
`)}function J_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ir(i){return i!==""}function _d(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function rh(i){return i.replace(Q_,tv)}function tv(i,e){let t=rt[e];if(t===void 0){let n=ev.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rh(t)}function Md(i){return i.replace(nv,iv)}function iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function rv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Nr:case Ur:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ov(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function av(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $d:e="ENVMAP_BLENDING_MULTIPLY";break;case $m:e="ENVMAP_BLENDING_MIX";break;case Qm:e="ENVMAP_BLENDING_ADD";break}return e}function cv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=sv(t),l=rv(t),h=ov(t),u=av(t),f=cv(t),p=t.isWebGL2?"":j_(t),A=Z_(t),x=J_(r),m=s.createProgram(),d,y,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ir).join(`
`),d.length>0&&(d+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ir).join(`
`),y.length>0&&(y+=`
`)):(d=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),y=[p,bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==us?"#define TONE_MAPPING":"",t.toneMapping!==us?rt.tonemapping_pars_fragment:"",t.toneMapping!==us?K_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Y_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=rh(o),o=_d(o,t),o=vd(o,t),a=rh(a),a=_d(a,t),a=vd(a,t),o=Md(o),a=Md(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let _=g+d+o,T=g+y+a,E=xd(s,s.VERTEX_SHADER,_),I=xd(s,s.FRAGMENT_SHADER,T);s.attachShader(m,E),s.attachShader(m,I),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(F){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(E).trim(),B=s.getShaderInfoLog(I).trim(),Y=!0,Q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,I);else{let J=yd(s,E,"vertex"),$=yd(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+J+`
`+$)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(P===""||B==="")&&(Q=!1);Q&&(F.diagnostics={runnable:Y,programLog:Z,vertexShader:{log:P,prefix:d},fragmentShader:{log:B,prefix:y}})}s.deleteShader(E),s.deleteShader(I),v=new Dr(s,m),R=$_(s,m)}let v;this.getUniforms=function(){return v===void 0&&N(this),v};let R;this.getAttributes=function(){return R===void 0&&N(this),R};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(m,G_)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=I,this}function uv(i,e,t,n,s,r,o){let a=new Uo,c=new oh,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function m(v,R,z,F,Z){let P=F.fog,B=Z.geometry,Y=v.isMeshStandardMaterial?F.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),J=Q&&Q.mapping===Mc?Q.image.height:null,$=A[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=te!==void 0?te.length:0,_e=0;B.morphAttributes.position!==void 0&&(_e=1),B.morphAttributes.normal!==void 0&&(_e=2),B.morphAttributes.color!==void 0&&(_e=3);let K,ne,ge,we;if($){let U=bi[$];K=U.vertexShader,ne=U.fragmentShader}else K=v.vertexShader,ne=v.fragmentShader,c.update(v),ge=c.getVertexShaderID(v),we=c.getFragmentShaderID(v);let Re=i.getRenderTarget(),Ge=Z.isInstancedMesh===!0,Ve=Z.isBatchedMesh===!0,Fe=!!v.map,ht=!!v.matcap,G=!!Q,jt=!!v.aoMap,Le=!!v.lightMap,Be=!!v.bumpMap,Ee=!!v.normalMap,Lt=!!v.displacementMap,tt=!!v.emissiveMap,C=!!v.metalnessMap,M=!!v.roughnessMap,W=v.anisotropy>0,ae=v.clearcoat>0,oe=v.iridescence>0,ce=v.sheen>0,Me=v.transmission>0,xe=W&&!!v.anisotropyMap,be=ae&&!!v.clearcoatMap,Ce=ae&&!!v.clearcoatNormalMap,Ye=ae&&!!v.clearcoatRoughnessMap,se=oe&&!!v.iridescenceMap,mt=oe&&!!v.iridescenceThicknessMap,nt=ce&&!!v.sheenColorMap,He=ce&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,ve=!!v.specularColorMap,Xe=!!v.specularIntensityMap,dt=Me&&!!v.transmissionMap,Dt=Me&&!!v.thicknessMap,Ke=!!v.gradientMap,ue=!!v.alphaMap,L=v.alphaTest>0,Ae=!!v.alphaHash,me=!!v.extensions,ke=!!B.attributes.uv1,Oe=!!B.attributes.uv2,bt=!!B.attributes.uv3,vt=us;return v.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(vt=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:ne,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:we,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ve,instancing:Ge,instancingColor:Ge&&Z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:on,map:Fe,matcap:ht,envMap:G,envMapMode:G&&Q.mapping,envMapCubeUVHeight:J,aoMap:jt,lightMap:Le,bumpMap:Be,normalMap:Ee,displacementMap:f&&Lt,emissiveMap:tt,normalMapObjectSpace:Ee&&v.normalMapType===AA,normalMapTangentSpace:Ee&&v.normalMapType===Bh,metalnessMap:C,roughnessMap:M,anisotropy:W,anisotropyMap:xe,clearcoat:ae,clearcoatMap:be,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,iridescence:oe,iridescenceMap:se,iridescenceThicknessMap:mt,sheen:ce,sheenColorMap:nt,sheenRoughnessMap:He,specularMap:Pe,specularColorMap:ve,specularIntensityMap:Xe,transmission:Me,transmissionMap:dt,thicknessMap:Dt,gradientMap:Ke,opaque:v.transparent===!1&&v.blending===Pr,alphaMap:ue,alphaTest:L,alphaHash:Ae,combine:v.combine,mapUv:Fe&&x(v.map.channel),aoMapUv:jt&&x(v.aoMap.channel),lightMapUv:Le&&x(v.lightMap.channel),bumpMapUv:Be&&x(v.bumpMap.channel),normalMapUv:Ee&&x(v.normalMap.channel),displacementMapUv:Lt&&x(v.displacementMap.channel),emissiveMapUv:tt&&x(v.emissiveMap.channel),metalnessMapUv:C&&x(v.metalnessMap.channel),roughnessMapUv:M&&x(v.roughnessMap.channel),anisotropyMapUv:xe&&x(v.anisotropyMap.channel),clearcoatMapUv:be&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:He&&x(v.sheenRoughnessMap.channel),specularMapUv:Pe&&x(v.specularMap.channel),specularColorMapUv:ve&&x(v.specularColorMap.channel),specularIntensityMapUv:Xe&&x(v.specularIntensityMap.channel),transmissionMapUv:dt&&x(v.transmissionMap.channel),thicknessMapUv:Dt&&x(v.thicknessMap.channel),alphaMapUv:ue&&x(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ee||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Oe,vertexUv3s:bt,pointsUvs:Z.isPoints===!0&&!!B.attributes.uv&&(Fe||ue),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:_e,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Fe&&v.map.isVideoTexture===!0&&At.getTransfer(v.map.colorSpace)===Nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fn,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:me&&v.extensions.derivatives===!0,extensionFragDepth:me&&v.extensions.fragDepth===!0,extensionDrawBuffers:me&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(let z in v.defines)R.push(z),R.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(y(R,v),g(R,v),R.push(i.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function y(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function g(v,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function _(v){let R=A[v.type],z;if(R){let F=bi[R];z=eg.clone(F.uniforms)}else z=v.uniforms;return z}function T(v,R){let z;for(let F=0,Z=l.length;F<Z;F++){let P=l[F];if(P.cacheKey===R){z=P,++z.usedTimes;break}}return z===void 0&&(z=new lv(i,R,v,r),l.push(z)),z}function E(v){if(--v.usedTimes===0){let R=l.indexOf(v);l[R]=l[l.length-1],l.pop(),v.destroy()}}function I(v){c.remove(v)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:I,programs:l,dispose:N}}function fv(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function dv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,A,x,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:A,renderOrder:u.renderOrder,z:x,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=A,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,f,p,A,x,m){let d=o(u,f,p,A,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,A,x,m){let d=o(u,f,p,A,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||dv),n.length>1&&n.sort(f||Ed),s.length>1&&s.sort(f||Ed)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function pv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Sd,i.set(n,[o])):s>=r.length?(o=new Sd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Ie};break;case"SpotLight":t={position:new w,direction:new w,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function Av(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function xv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yv(i,e){let t=new mv,n=Av(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new w);let r=new w,o=new Je,a=new Je;function c(h,u){let f=0,p=0,A=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let x=0,m=0,d=0,y=0,g=0,_=0,T=0,E=0,I=0,N=0,v=0;h.sort(xv);let R=u===!0?Math.PI:1;for(let F=0,Z=h.length;F<Z;F++){let P=h[F],B=P.color,Y=P.intensity,Q=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=B.r*Y*R,p+=B.g*Y*R,A+=B.b*Y*R;else if(P.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(P.sh.coefficients[$],Y);v++}else if(P.isDirectionalLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){let te=P.shadow,re=n.get(P);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,s.directionalShadow[x]=re,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=P.shadow.matrix,_++}s.directional[x]=$,x++}else if(P.isSpotLight){let $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(B).multiplyScalar(Y*R),$.distance=Q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,s.spot[d]=$;let te=P.shadow;if(P.map&&(s.spotLightMap[I]=P.map,I++,te.updateMatrices(P),P.castShadow&&N++),s.spotLightMatrix[d]=te.matrix,P.castShadow){let re=n.get(P);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,s.spotShadow[d]=re,s.spotShadowMap[d]=J,E++}d++}else if(P.isRectAreaLight){let $=t.get(P);$.color.copy(B).multiplyScalar(Y),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=$,y++}else if(P.isPointLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*R),$.distance=P.distance,$.decay=P.decay,P.castShadow){let te=P.shadow,re=n.get(P);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,re.shadowCameraNear=te.camera.near,re.shadowCameraFar=te.camera.far,s.pointShadow[m]=re,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=P.shadow.matrix,T++}s.point[m]=$,m++}else if(P.isHemisphereLight){let $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(Y*R),$.groundColor.copy(P.groundColor).multiplyScalar(Y*R),s.hemi[g]=$,g++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=A;let z=s.hash;(z.directionalLength!==x||z.pointLength!==m||z.spotLength!==d||z.rectAreaLength!==y||z.hemiLength!==g||z.numDirectionalShadows!==_||z.numPointShadows!==T||z.numSpotShadows!==E||z.numSpotMaps!==I||z.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=y,s.point.length=m,s.hemi.length=g,s.directionalShadow.length=_,s.directionalShadowMap.length=_,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=_,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=E+I-N,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=v,z.directionalLength=x,z.pointLength=m,z.spotLength=d,z.rectAreaLength=y,z.hemiLength=g,z.numDirectionalShadows=_,z.numPointShadows=T,z.numSpotShadows=E,z.numSpotMaps=I,z.numLightProbes=v,s.version=gv++)}function l(h,u){let f=0,p=0,A=0,x=0,m=0,d=u.matrixWorldInverse;for(let y=0,g=h.length;y<g;y++){let _=h[y];if(_.isDirectionalLight){let T=s.directional[f];T.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),f++}else if(_.isSpotLight){let T=s.spot[A];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),A++}else if(_.isRectAreaLight){let T=s.rectArea[x];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(_.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let T=s.point[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let T=s.hemi[m];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function Td(i,e){let t=new yv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function _v(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Td(i,e),t.set(r,[c])):o>=a.length?(c=new Td(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}function bv(i,e,t){let n=new Oo,s=new fe,r=new fe,o=new wt,a=new ch({depthPacking:mA}),c=new lh,l={},h=t.maxTextureSize,u={[Si]:En,[En]:Si,[Fn]:Fn},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:vv,fragmentShader:Mv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let A=new Wt;A.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xt(A,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jd;let d=this.type;this.render=function(E,I,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let v=i.getRenderTarget(),R=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),F=i.state;F.setBlending(hs),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Z=d!==Wi&&this.type===Wi,P=d===Wi&&this.type!==Wi;for(let B=0,Y=E.length;B<Y;B++){let Q=E[B],J=Q.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let $=J.getFrameExtents();if(s.multiply($),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,J.mapSize.y=r.y)),J.map===null||Z===!0||P===!0){let re=this.type!==Wi?{minFilter:Ht,magFilter:Ht}:{};J.map!==null&&J.map.dispose(),J.map=new fi(s.x,s.y,re),J.map.texture.name=Q.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let te=J.getViewportCount();for(let re=0;re<te;re++){let _e=J.getViewport(re);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),F.viewport(o),J.updateMatrices(Q,re),n=J.getFrustum(),_(I,N,J.camera,Q,this.type)}J.isPointLightShadow!==!0&&this.type===Wi&&y(J,N),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(v,R,z)};function y(E,I){let N=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new fi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,N,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,N,p,x,null)}function g(E,I,N,v){let R=null,z=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(z!==void 0)R=z;else if(R=N.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let F=R.uuid,Z=I.uuid,P=l[F];P===void 0&&(P={},l[F]=P);let B=P[Z];B===void 0&&(B=R.clone(),P[Z]=B,I.addEventListener("dispose",T)),R=B}if(R.visible=I.visible,R.wireframe=I.wireframe,v===Wi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:u[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,N.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=N}return R}function _(E,I,N,v,R){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Wi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);let Z=e.update(E),P=E.material;if(Array.isArray(P)){let B=Z.groups;for(let Y=0,Q=B.length;Y<Q;Y++){let J=B[Y],$=P[J.materialIndex];if($&&$.visible){let te=g(E,$,v,R);E.onBeforeShadow(i,E,I,N,Z,te,J),i.renderBufferDirect(N,null,Z,te,E,J),E.onAfterShadow(i,E,I,N,Z,te,J)}}}else if(P.visible){let B=g(E,P,v,R);E.onBeforeShadow(i,E,I,N,Z,B,null),i.renderBufferDirect(N,null,Z,B,E,null),E.onAfterShadow(i,E,I,N,Z,B,null)}}let F=E.children;for(let Z=0,P=F.length;Z<P;Z++)_(F[Z],I,N,v,R)}function T(E){E.target.removeEventListener("dispose",T);for(let N in l){let v=l[N],R=E.target.uuid;R in v&&(v[R].dispose(),delete v[R])}}}function Ev(i,e,t){let n=t.isWebGL2;function s(){let L=!1,Ae=new wt,me=null,ke=new wt(0,0,0,0);return{setMask:function(Oe){me!==Oe&&!L&&(i.colorMask(Oe,Oe,Oe,Oe),me=Oe)},setLocked:function(Oe){L=Oe},setClear:function(Oe,bt,vt,S,U){U===!0&&(Oe*=S,bt*=S,vt*=S),Ae.set(Oe,bt,vt,S),ke.equals(Ae)===!1&&(i.clearColor(Oe,bt,vt,S),ke.copy(Ae))},reset:function(){L=!1,me=null,ke.set(-1,0,0,0)}}}function r(){let L=!1,Ae=null,me=null,ke=null;return{setTest:function(Oe){Oe?Ve(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(Oe){Ae!==Oe&&!L&&(i.depthMask(Oe),Ae=Oe)},setFunc:function(Oe){if(me!==Oe){switch(Oe){case Xm:i.depthFunc(i.NEVER);break;case qm:i.depthFunc(i.ALWAYS);break;case Ym:i.depthFunc(i.LESS);break;case za:i.depthFunc(i.LEQUAL);break;case Km:i.depthFunc(i.EQUAL);break;case jm:i.depthFunc(i.GEQUAL);break;case Zm:i.depthFunc(i.GREATER);break;case Jm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Oe}},setLocked:function(Oe){L=Oe},setClear:function(Oe){ke!==Oe&&(i.clearDepth(Oe),ke=Oe)},reset:function(){L=!1,Ae=null,me=null,ke=null}}}function o(){let L=!1,Ae=null,me=null,ke=null,Oe=null,bt=null,vt=null,S=null,U=null;return{setTest:function(D){L||(D?Ve(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(D){Ae!==D&&!L&&(i.stencilMask(D),Ae=D)},setFunc:function(D,q,k){(me!==D||ke!==q||Oe!==k)&&(i.stencilFunc(D,q,k),me=D,ke=q,Oe=k)},setOp:function(D,q,k){(bt!==D||vt!==q||S!==k)&&(i.stencilOp(D,q,k),bt=D,vt=q,S=k)},setLocked:function(D){L=D},setClear:function(D){U!==D&&(i.clearStencil(D),U=D)},reset:function(){L=!1,Ae=null,me=null,ke=null,Oe=null,bt=null,vt=null,S=null,U=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},p={},A=new WeakMap,x=[],m=null,d=!1,y=null,g=null,_=null,T=null,E=null,I=null,N=null,v=new Ie(0,0,0),R=0,z=!1,F=null,Z=null,P=null,B=null,Y=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,$=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(te)[1]),J=$>=1):te.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),J=$>=2);let re=null,_e={},K=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ge=new wt().fromArray(K),we=new wt().fromArray(ne);function Re(L,Ae,me,ke){let Oe=new Uint8Array(4),bt=i.createTexture();i.bindTexture(L,bt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<me;vt++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ae,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Ae+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return bt}let Ge={};Ge[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),Ge[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ge[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ge[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ve(i.DEPTH_TEST),c.setFunc(za),tt(!1),C(of),Ve(i.CULL_FACE),Ee(hs);function Ve(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Fe(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function ht(L,Ae){return p[L]!==Ae?(i.bindFramebuffer(L,Ae),p[L]=Ae,n&&(L===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ae),L===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function G(L,Ae){let me=x,ke=!1;if(L)if(me=A.get(Ae),me===void 0&&(me=[],A.set(Ae,me)),L.isWebGLMultipleRenderTargets){let Oe=L.texture;if(me.length!==Oe.length||me[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,vt=Oe.length;bt<vt;bt++)me[bt]=i.COLOR_ATTACHMENT0+bt;me.length=Oe.length,ke=!0}}else me[0]!==i.COLOR_ATTACHMENT0&&(me[0]=i.COLOR_ATTACHMENT0,ke=!0);else me[0]!==i.BACK&&(me[0]=i.BACK,ke=!0);ke&&(t.isWebGL2?i.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function jt(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let Le={[Os]:i.FUNC_ADD,[Im]:i.FUNC_SUBTRACT,[Pm]:i.FUNC_REVERSE_SUBTRACT};if(n)Le[hf]=i.MIN,Le[uf]=i.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(Le[hf]=L.MIN_EXT,Le[uf]=L.MAX_EXT)}let Be={[Lm]:i.ZERO,[Dm]:i.ONE,[Nm]:i.SRC_COLOR,[Xl]:i.SRC_ALPHA,[km]:i.SRC_ALPHA_SATURATE,[Bm]:i.DST_COLOR,[Om]:i.DST_ALPHA,[Um]:i.ONE_MINUS_SRC_COLOR,[ql]:i.ONE_MINUS_SRC_ALPHA,[zm]:i.ONE_MINUS_DST_COLOR,[Fm]:i.ONE_MINUS_DST_ALPHA,[Hm]:i.CONSTANT_COLOR,[Vm]:i.ONE_MINUS_CONSTANT_COLOR,[Gm]:i.CONSTANT_ALPHA,[Wm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(L,Ae,me,ke,Oe,bt,vt,S,U,D){if(L===hs){d===!0&&(Fe(i.BLEND),d=!1);return}if(d===!1&&(Ve(i.BLEND),d=!0),L!==Cm){if(L!==y||D!==z){if((g!==Os||E!==Os)&&(i.blendEquation(i.FUNC_ADD),g=Os,E=Os),D)switch(L){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case af:i.blendFunc(i.ONE,i.ONE);break;case cf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case af:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,T=null,I=null,N=null,v.set(0,0,0),R=0,y=L,z=D}return}Oe=Oe||Ae,bt=bt||me,vt=vt||ke,(Ae!==g||Oe!==E)&&(i.blendEquationSeparate(Le[Ae],Le[Oe]),g=Ae,E=Oe),(me!==_||ke!==T||bt!==I||vt!==N)&&(i.blendFuncSeparate(Be[me],Be[ke],Be[bt],Be[vt]),_=me,T=ke,I=bt,N=vt),(S.equals(v)===!1||U!==R)&&(i.blendColor(S.r,S.g,S.b,U),v.copy(S),R=U),y=L,z=!1}function Lt(L,Ae){L.side===Fn?Fe(i.CULL_FACE):Ve(i.CULL_FACE);let me=L.side===En;Ae&&(me=!me),tt(me),L.blending===Pr&&L.transparent===!1?Ee(hs):Ee(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let ke=L.stencilWrite;l.setTest(ke),ke&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),W(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ve(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(L){F!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),F=L)}function C(L){L!==wm?(Ve(i.CULL_FACE),L!==Z&&(L===of?i.cullFace(i.BACK):L===Rm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),Z=L}function M(L){L!==P&&(J&&i.lineWidth(L),P=L)}function W(L,Ae,me){L?(Ve(i.POLYGON_OFFSET_FILL),(B!==Ae||Y!==me)&&(i.polygonOffset(Ae,me),B=Ae,Y=me)):Fe(i.POLYGON_OFFSET_FILL)}function ae(L){L?Ve(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function oe(L){L===void 0&&(L=i.TEXTURE0+Q-1),re!==L&&(i.activeTexture(L),re=L)}function ce(L,Ae,me){me===void 0&&(re===null?me=i.TEXTURE0+Q-1:me=re);let ke=_e[me];ke===void 0&&(ke={type:void 0,texture:void 0},_e[me]=ke),(ke.type!==L||ke.texture!==Ae)&&(re!==me&&(i.activeTexture(me),re=me),i.bindTexture(L,Ae||Ge[L]),ke.type=L,ke.texture=Ae)}function Me(){let L=_e[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ye(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(L){ge.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ge.copy(L))}function dt(L){we.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),we.copy(L))}function Dt(L,Ae){let me=u.get(Ae);me===void 0&&(me=new WeakMap,u.set(Ae,me));let ke=me.get(L);ke===void 0&&(ke=i.getUniformBlockIndex(Ae,L.name),me.set(L,ke))}function Ke(L,Ae){let ke=u.get(Ae).get(L);h.get(Ae)!==ke&&(i.uniformBlockBinding(Ae,ke,L.__bindingPointIndex),h.set(Ae,ke))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},re=null,_e={},p={},A=new WeakMap,x=[],m=null,d=!1,y=null,g=null,_=null,T=null,E=null,I=null,N=null,v=new Ie(0,0,0),R=0,z=!1,F=null,Z=null,P=null,B=null,Y=null,ge.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ve,disable:Fe,bindFramebuffer:ht,drawBuffers:G,useProgram:jt,setBlending:Ee,setMaterial:Lt,setFlipSided:tt,setCullFace:C,setLineWidth:M,setPolygonOffset:W,setScissorTest:ae,activeTexture:oe,bindTexture:ce,unbindTexture:Me,compressedTexImage2D:xe,compressedTexImage3D:be,texImage2D:Pe,texImage3D:ve,updateUBOMapping:Dt,uniformBlockBinding:Ke,texStorage2D:nt,texStorage3D:He,texSubImage2D:Ce,texSubImage3D:Ye,compressedTexSubImage2D:se,compressedTexSubImage3D:mt,scissor:Xe,viewport:dt,reset:ue}}function Sv(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(C,M){return p?new OffscreenCanvas(C,M):No("canvas")}function x(C,M,W,ae){let oe=1;if((C.width>ae||C.height>ae)&&(oe=ae/Math.max(C.width,C.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let ce=M?Xa:Math.floor,Me=ce(oe*C.width),xe=ce(oe*C.height);u===void 0&&(u=A(Me,xe));let be=W?A(Me,xe):u;return be.width=Me,be.height=xe,be.getContext("2d").drawImage(C,0,0,Me,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+xe+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Jl(C.width)&&Jl(C.height)}function d(C){return a?!1:C.wrapS!==An||C.wrapT!==An||C.minFilter!==Ht&&C.minFilter!==Pn}function y(C,M){return C.generateMipmaps&&M&&C.minFilter!==Ht&&C.minFilter!==Pn}function g(C){i.generateMipmap(C)}function _(C,M,W,ae,oe=!1){if(a===!1)return M;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce=M;if(M===i.RED&&(W===i.FLOAT&&(ce=i.R32F),W===i.HALF_FLOAT&&(ce=i.R16F),W===i.UNSIGNED_BYTE&&(ce=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ce=i.R8UI),W===i.UNSIGNED_SHORT&&(ce=i.R16UI),W===i.UNSIGNED_INT&&(ce=i.R32UI),W===i.BYTE&&(ce=i.R8I),W===i.SHORT&&(ce=i.R16I),W===i.INT&&(ce=i.R32I)),M===i.RG&&(W===i.FLOAT&&(ce=i.RG32F),W===i.HALF_FLOAT&&(ce=i.RG16F),W===i.UNSIGNED_BYTE&&(ce=i.RG8)),M===i.RGBA){let Me=oe?Ha:At.getTransfer(ae);W===i.FLOAT&&(ce=i.RGBA32F),W===i.HALF_FLOAT&&(ce=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ce=Me===Nt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function T(C,M,W){return y(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){return C===Ht||C===ka||C===To?i.NEAREST:i.LINEAR}function I(C){let M=C.target;M.removeEventListener("dispose",I),v(M),M.isVideoTexture&&h.delete(M)}function N(C){let M=C.target;M.removeEventListener("dispose",N),z(M)}function v(C){let M=n.get(C);if(M.__webglInit===void 0)return;let W=C.source,ae=f.get(W);if(ae){let oe=ae[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(C),Object.keys(ae).length===0&&f.delete(W)}n.remove(C)}function R(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let W=C.source,ae=f.get(W);delete ae[M.__cacheKey],o.memory.textures--}function z(C){let M=C.texture,W=n.get(C),ae=n.get(M);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(W.__webglFramebuffer[oe]))for(let ce=0;ce<W.__webglFramebuffer[oe].length;ce++)i.deleteFramebuffer(W.__webglFramebuffer[oe][ce]);else i.deleteFramebuffer(W.__webglFramebuffer[oe]);W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[oe])}else{if(Array.isArray(W.__webglFramebuffer))for(let oe=0;oe<W.__webglFramebuffer.length;oe++)i.deleteFramebuffer(W.__webglFramebuffer[oe]);else i.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let oe=0;oe<W.__webglColorRenderbuffer.length;oe++)W.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[oe]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,ce=M.length;oe<ce;oe++){let Me=n.get(M[oe]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(M[oe])}n.remove(M),n.remove(C)}let F=0;function Z(){F=0}function P(){let C=F;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function B(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){let W=n.get(C);if(C.isVideoTexture&&Lt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){let ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(W,C,M);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function Q(C,M){let W=n.get(C);if(C.version>0&&W.__version!==C.version){ge(W,C,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function J(C,M){let W=n.get(C);if(C.version>0&&W.__version!==C.version){ge(W,C,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function $(C,M){let W=n.get(C);if(C.version>0&&W.__version!==C.version){we(W,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}let te={[ui]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[Do]:i.MIRRORED_REPEAT},re={[Ht]:i.NEAREST,[ka]:i.NEAREST_MIPMAP_NEAREST,[To]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Oh]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},_e={[gA]:i.NEVER,[bA]:i.ALWAYS,[xA]:i.LESS,[lp]:i.LEQUAL,[yA]:i.EQUAL,[MA]:i.GEQUAL,[_A]:i.GREATER,[vA]:i.NOTEQUAL};function K(C,M,W){if(W?(i.texParameteri(C,i.TEXTURE_WRAP_S,te[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,te[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,te[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,re[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,re[M.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==An||M.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,E(M.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==Ht&&M.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ht||M.minFilter!==To&&M.minFilter!==ds||M.type===qi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Vs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ne(C,M){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));let ae=M.source,oe=f.get(ae);oe===void 0&&(oe={},f.set(ae,oe));let ce=B(M);if(ce!==C.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),oe[ce].usedTimes++;let Me=oe[C.__cacheKey];Me!==void 0&&(oe[C.__cacheKey].usedTimes--,Me.usedTimes===0&&R(M)),C.__cacheKey=ce,C.__webglTexture=oe[ce].texture}return W}function ge(C,M,W){let ae=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=i.TEXTURE_3D);let oe=ne(C,M),ce=M.source;t.bindTexture(ae,C.__webglTexture,i.TEXTURE0+W);let Me=n.get(ce);if(ce.version!==Me.__version||oe===!0){t.activeTexture(i.TEXTURE0+W);let xe=At.getPrimaries(At.workingColorSpace),be=M.colorSpace===jn?null:At.getPrimaries(M.colorSpace),Ce=M.colorSpace===jn||xe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Ye=d(M)&&m(M.image)===!1,se=x(M.image,Ye,!1,s.maxTextureSize);se=tt(M,se);let mt=m(se)||a,nt=r.convert(M.format,M.colorSpace),He=r.convert(M.type),Pe=_(M.internalFormat,nt,He,M.colorSpace,M.isVideoTexture);K(ae,M,mt);let ve,Xe=M.mipmaps,dt=a&&M.isVideoTexture!==!0&&Pe!==op,Dt=Me.__version===void 0||oe===!0,Ke=T(M,se,mt);if(M.isDepthTexture)Pe=i.DEPTH_COMPONENT,a?M.type===qi?Pe=i.DEPTH_COMPONENT32F:M.type===cs?Pe=i.DEPTH_COMPONENT24:M.type===zs?Pe=i.DEPTH24_STENCIL8:Pe=i.DEPTH_COMPONENT16:M.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ks&&Pe===i.DEPTH_COMPONENT&&M.type!==Fh&&M.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=cs,He=r.convert(M.type)),M.format===Or&&Pe===i.DEPTH_COMPONENT&&(Pe=i.DEPTH_STENCIL,M.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=zs,He=r.convert(M.type))),Dt&&(dt?t.texStorage2D(i.TEXTURE_2D,1,Pe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Pe,se.width,se.height,0,nt,He,null));else if(M.isDataTexture)if(Xe.length>0&&mt){dt&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ke,Pe,Xe[0].width,Xe[0].height);for(let ue=0,L=Xe.length;ue<L;ue++)ve=Xe[ue],dt?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,nt,He,ve.data):t.texImage2D(i.TEXTURE_2D,ue,Pe,ve.width,ve.height,0,nt,He,ve.data);M.generateMipmaps=!1}else dt?(Dt&&t.texStorage2D(i.TEXTURE_2D,Ke,Pe,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,nt,He,se.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,se.width,se.height,0,nt,He,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){dt&&Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Pe,Xe[0].width,Xe[0].height,se.depth);for(let ue=0,L=Xe.length;ue<L;ue++)ve=Xe[ue],M.format!==Kn?nt!==null?dt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ve.width,ve.height,se.depth,nt,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Pe,ve.width,ve.height,se.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ve.width,ve.height,se.depth,nt,He,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Pe,ve.width,ve.height,se.depth,0,nt,He,ve.data)}else{dt&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ke,Pe,Xe[0].width,Xe[0].height);for(let ue=0,L=Xe.length;ue<L;ue++)ve=Xe[ue],M.format!==Kn?nt!==null?dt?t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,nt,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,nt,He,ve.data):t.texImage2D(i.TEXTURE_2D,ue,Pe,ve.width,ve.height,0,nt,He,ve.data)}else if(M.isDataArrayTexture)dt?(Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Pe,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,nt,He,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,nt,He,se.data);else if(M.isData3DTexture)dt?(Dt&&t.texStorage3D(i.TEXTURE_3D,Ke,Pe,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,nt,He,se.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,nt,He,se.data);else if(M.isFramebufferTexture){if(Dt)if(dt)t.texStorage2D(i.TEXTURE_2D,Ke,Pe,se.width,se.height);else{let ue=se.width,L=se.height;for(let Ae=0;Ae<Ke;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Pe,ue,L,0,nt,He,null),ue>>=1,L>>=1}}else if(Xe.length>0&&mt){dt&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ke,Pe,Xe[0].width,Xe[0].height);for(let ue=0,L=Xe.length;ue<L;ue++)ve=Xe[ue],dt?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,nt,He,ve):t.texImage2D(i.TEXTURE_2D,ue,Pe,nt,He,ve);M.generateMipmaps=!1}else dt?(Dt&&t.texStorage2D(i.TEXTURE_2D,Ke,Pe,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,nt,He,se)):t.texImage2D(i.TEXTURE_2D,0,Pe,nt,He,se);y(M,mt)&&g(ae),Me.__version=ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function we(C,M,W){if(M.image.length!==6)return;let ae=ne(C,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);let ce=n.get(oe);if(oe.version!==ce.__version||ae===!0){t.activeTexture(i.TEXTURE0+W);let Me=At.getPrimaries(At.workingColorSpace),xe=M.colorSpace===jn?null:At.getPrimaries(M.colorSpace),be=M.colorSpace===jn||Me===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Ye=M.image[0]&&M.image[0].isDataTexture,se=[];for(let ue=0;ue<6;ue++)!Ce&&!Ye?se[ue]=x(M.image[ue],!1,!0,s.maxCubemapSize):se[ue]=Ye?M.image[ue].image:M.image[ue],se[ue]=tt(M,se[ue]);let mt=se[0],nt=m(mt)||a,He=r.convert(M.format,M.colorSpace),Pe=r.convert(M.type),ve=_(M.internalFormat,He,Pe,M.colorSpace),Xe=a&&M.isVideoTexture!==!0,dt=ce.__version===void 0||ae===!0,Dt=T(M,mt,nt);K(i.TEXTURE_CUBE_MAP,M,nt);let Ke;if(Ce){Xe&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ve,mt.width,mt.height);for(let ue=0;ue<6;ue++){Ke=se[ue].mipmaps;for(let L=0;L<Ke.length;L++){let Ae=Ke[L];M.format!==Kn?He!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,Ae.width,Ae.height,He,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,ve,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,Ae.width,Ae.height,He,Pe,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,ve,Ae.width,Ae.height,0,He,Pe,Ae.data)}}}else{Ke=M.mipmaps,Xe&&dt&&(Ke.length>0&&Dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ve,se[0].width,se[0].height));for(let ue=0;ue<6;ue++)if(Ye){Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,se[ue].width,se[ue].height,He,Pe,se[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ve,se[ue].width,se[ue].height,0,He,Pe,se[ue].data);for(let L=0;L<Ke.length;L++){let me=Ke[L].image[ue].image;Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,me.width,me.height,He,Pe,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,ve,me.width,me.height,0,He,Pe,me.data)}}else{Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,He,Pe,se[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ve,He,Pe,se[ue]);for(let L=0;L<Ke.length;L++){let Ae=Ke[L];Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,He,Pe,Ae.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,ve,He,Pe,Ae.image[ue])}}}y(M,nt)&&g(i.TEXTURE_CUBE_MAP),ce.__version=oe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Re(C,M,W,ae,oe,ce){let Me=r.convert(W.format,W.colorSpace),xe=r.convert(W.type),be=_(W.internalFormat,Me,xe,W.colorSpace);if(!n.get(M).__hasExternalTextures){let Ye=Math.max(1,M.width>>ce),se=Math.max(1,M.height>>ce);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ce,be,Ye,se,M.depth,0,Me,xe,null):t.texImage2D(oe,ce,be,Ye,se,0,Me,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ee(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,oe,n.get(W).__webglTexture,0,Be(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,oe,n.get(W).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(C,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ae=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||Ee(M)){let oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===qi?ae=i.DEPTH_COMPONENT32F:oe.type===cs&&(ae=i.DEPTH_COMPONENT24));let ce=Be(M);Ee(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ae,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ae,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){let ae=Be(M);W&&Ee(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,M.width,M.height):Ee(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<ae.length;oe++){let ce=ae[oe],Me=r.convert(ce.format,ce.colorSpace),xe=r.convert(ce.type),be=_(ce.internalFormat,Me,xe,ce.colorSpace),Ce=Be(M);W&&Ee(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,be,M.width,M.height):Ee(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,be,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,be,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let ae=n.get(M.depthTexture).__webglTexture,oe=Be(M);if(M.depthTexture.format===ks)Ee(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(M.depthTexture.format===Or)Ee(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Fe(C){let M=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ve(M.__webglFramebuffer,C)}else if(W){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=i.createRenderbuffer(),Ge(M.__webglDepthbuffer[ae],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Ge(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,M,W){let ae=n.get(C);M!==void 0&&Re(ae.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Fe(C)}function G(C){let M=C.texture,W=n.get(C),ae=n.get(M);C.addEventListener("dispose",N),C.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=M.version,o.memory.textures++);let oe=C.isWebGLCubeRenderTarget===!0,ce=C.isWebGLMultipleRenderTargets===!0,Me=m(C)||a;if(oe){W.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[xe]=[];for(let be=0;be<M.mipmaps.length;be++)W.__webglFramebuffer[xe][be]=i.createFramebuffer()}else W.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)W.__webglFramebuffer[xe]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){let xe=C.texture;for(let be=0,Ce=xe.length;be<Ce;be++){let Ye=n.get(xe[be]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ee(C)===!1){let xe=ce?M:[M];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){let Ce=xe[be];W.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[be]);let Ye=r.convert(Ce.format,Ce.colorSpace),se=r.convert(Ce.type),mt=_(Ce.internalFormat,Ye,se,Ce.colorSpace,C.isXRRenderTarget===!0),nt=Be(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,W.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),K(i.TEXTURE_CUBE_MAP,M,Me);for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Re(W.__webglFramebuffer[xe][be],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,be);else Re(W.__webglFramebuffer[xe],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);y(M,Me)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let xe=C.texture;for(let be=0,Ce=xe.length;be<Ce;be++){let Ye=xe[be],se=n.get(Ye);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),K(i.TEXTURE_2D,Ye,Me),Re(W.__webglFramebuffer,C,Ye,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),y(Ye,Me)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?xe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ae.__webglTexture),K(xe,M,Me),a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Re(W.__webglFramebuffer[be],C,M,i.COLOR_ATTACHMENT0,xe,be);else Re(W.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,xe,0);y(M,Me)&&g(xe),t.unbindTexture()}C.depthBuffer&&Fe(C)}function jt(C){let M=m(C)||a,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0,oe=W.length;ae<oe;ae++){let ce=W[ae];if(y(ce,M)){let Me=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(ce).__webglTexture;t.bindTexture(Me,xe),g(Me),t.unbindTexture()}}}function Le(C){if(a&&C.samples>0&&Ee(C)===!1){let M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,ae=C.height,oe=i.COLOR_BUFFER_BIT,ce=[],Me=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(C),be=C.isWebGLMultipleRenderTargets===!0;if(be)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){ce.push(i.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&ce.push(Me);let Ye=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Ye===!1&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ce]),Ye===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),be){let se=n.get(M[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,W,ae,0,0,W,ae,oe,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ce]);let Ye=n.get(M[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Be(C){return Math.min(s.maxSamples,C.samples)}function Ee(C){let M=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Lt(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function tt(C,M){let W=C.colorSpace,ae=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Zl||W!==on&&W!==jn&&(At.getTransfer(W)===Nt?a===!1?e.has("EXT_sRGB")===!0&&ae===Kn?(C.format=Zl,C.minFilter=Pn,C.generateMipmaps=!1):M=qa.sRGBToLinear(M):(ae!==Kn||oe!==fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}this.allocateTextureUnit=P,this.resetTextureUnits=Z,this.setTexture2D=Y,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=ht,this.setupRenderTarget=G,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ee}function Tv(i,e,t){let n=t.isWebGL2;function s(r,o=jn){let a,c=At.getTransfer(o);if(r===fs)return i.UNSIGNED_BYTE;if(r===tp)return i.UNSIGNED_SHORT_4_4_4_4;if(r===np)return i.UNSIGNED_SHORT_5_5_5_1;if(r===oA)return i.BYTE;if(r===aA)return i.SHORT;if(r===Fh)return i.UNSIGNED_SHORT;if(r===ep)return i.INT;if(r===cs)return i.UNSIGNED_INT;if(r===qi)return i.FLOAT;if(r===Vs)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===cA)return i.ALPHA;if(r===Kn)return i.RGBA;if(r===lA)return i.LUMINANCE;if(r===hA)return i.LUMINANCE_ALPHA;if(r===ks)return i.DEPTH_COMPONENT;if(r===Or)return i.DEPTH_STENCIL;if(r===Zl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Wo)return i.RED;if(r===ip)return i.RED_INTEGER;if(r===uA)return i.RG;if(r===sp)return i.RG_INTEGER;if(r===rp)return i.RGBA_INTEGER;if(r===cl||r===ll||r===hl||r===ul)if(c===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===cl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===cl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ll)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ul)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===df||r===pf||r===mf||r===Af)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===df)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Af)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===op)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gf||r===xf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===gf)return c===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===xf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yf||r===_f||r===vf||r===Mf||r===bf||r===Ef||r===Sf||r===Tf||r===wf||r===Rf||r===Cf||r===If||r===Pf||r===Lf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===yf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_f)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ef)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===If)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fl||r===Df||r===Nf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fl)return c===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Df)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fA||r===Uf||r===Of||r===Ff)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===fl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Uf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Of)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ff)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function Rv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,dp(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,g,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),A(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,g):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===En&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===En&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let g=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*g,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=g*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function A(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cv(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,g){let _=g.program;n.uniformBlockBinding(y,_)}function l(y,g){let _=s[y.id];_===void 0&&(A(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));let T=g.program;n.updateUBOMapping(y,T);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){let g=u();y.__bindingPointIndex=g;let _=i.createBuffer(),T=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let g=s[y.id],_=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let E=0,I=_.length;E<I;E++){let N=Array.isArray(_[E])?_[E]:[_[E]];for(let v=0,R=N.length;v<R;v++){let z=N[v];if(p(z,E,v,T)===!0){let F=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value],P=0;for(let B=0;B<Z.length;B++){let Y=Z[B],Q=x(Y);typeof Y=="number"||typeof Y=="boolean"?(z.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,F+P,z.__data)):Y.isMatrix3?(z.__data[0]=Y.elements[0],z.__data[1]=Y.elements[1],z.__data[2]=Y.elements[2],z.__data[3]=0,z.__data[4]=Y.elements[3],z.__data[5]=Y.elements[4],z.__data[6]=Y.elements[5],z.__data[7]=0,z.__data[8]=Y.elements[6],z.__data[9]=Y.elements[7],z.__data[10]=Y.elements[8],z.__data[11]=0):(Y.toArray(z.__data,P),P+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,g,_,T){let E=y.value,I=g+"_"+_;if(T[I]===void 0)return typeof E=="number"||typeof E=="boolean"?T[I]=E:T[I]=E.clone(),!0;{let N=T[I];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return T[I]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function A(y){let g=y.uniforms,_=0,T=16;for(let I=0,N=g.length;I<N;I++){let v=Array.isArray(g[I])?g[I]:[g[I]];for(let R=0,z=v.length;R<z;R++){let F=v[R],Z=Array.isArray(F.value)?F.value:[F.value];for(let P=0,B=Z.length;P<B;P++){let Y=Z[P],Q=x(Y),J=_%T;J!==0&&T-J<Q.boundary&&(_+=T-J),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=Q.storage}}}let E=_%T;return E>0&&(_+=T-E),y.__size=_,y.__cache={},this}function x(y){let g={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function m(y){let g=y.target;g.removeEventListener("dispose",m);let _=o.indexOf(g.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}function Pa(i,e,t,n,s,r){wr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(vo.x=r*wr.x-s*wr.y,vo.y=s*wr.x+r*wr.y):vo.copy(wr),i.copy(e),i.x+=vo.x,i.y+=vo.y,i.applyMatrix4(_p)}function Gd(i,e,t,n,s,r,o){let a=dh.distanceSqToPoint(i);if(a<t){let c=new w;dh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function Vh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function Wd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Dv(i,e){let t=1-i;return t*t*e}function Nv(i,e){return 2*(1-i)*i*e}function Uv(i,e){return i*i*e}function Po(i,e,t,n){return Dv(i,e)+Nv(i,t)+Uv(i,n)}function Ov(i,e){let t=1-i;return t*t*t*e}function Fv(i,e){let t=1-i;return 3*t*t*i*e}function Bv(i,e){return 3*(1-i)*i*i*e}function zv(i,e){return i*i*i*e}function Lo(i,e,t,n,s){return Ov(i,e)+Fv(i,t)+Bv(i,n)+zv(i,s)}function Ba(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function qd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function vp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function Vv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ji;case"vector":case"vector2":case"vector3":case"vector4":return Zi;case"color":return pc;case"quaternion":return Ri;case"bool":case"boolean":return xs;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Gv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Vv(i.type);if(i.times===void 0){let t=[],n=[];vp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function Zd(i,e){return i.distance-e.distance}function Lh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Lh(s[r],e,t,!0)}}var Dh,wm,of,Rm,Jd,Nh,Wi,Si,En,Fn,hs,Pr,af,cf,lf,Cm,Os,Im,Pm,hf,uf,Lm,Dm,Nm,Um,Xl,ql,Om,Fm,Bm,zm,km,Hm,Vm,Gm,Wm,Xm,qm,Ym,za,Km,jm,Zm,Jm,$d,$m,Qm,us,eA,tA,nA,Uh,iA,sA,ff,rA,Qd,Nr,Ur,Yl,Kl,Mc,ui,An,Do,Ht,ka,To,Pn,Oh,ds,fs,oA,aA,Fh,ep,cs,qi,Vs,tp,np,zs,cA,Kn,lA,hA,ks,Or,Wo,ip,uA,sp,rp,cl,ll,hl,ul,df,pf,mf,Af,op,gf,xf,yf,_f,vf,Mf,bf,Ef,Sf,Tf,wf,Rf,Cf,If,Pf,Lf,fl,Df,Nf,fA,Uf,Of,Ff,Fr,Gs,dl,Bf,zf,kf,dA,ap,bc,Xo,cp,Hs,pA,mA,Bh,AA,jn,gt,on,zh,Ec,Ha,Nt,Va,Ga,cr,Hf,gA,xA,yA,lp,_A,vA,MA,bA,jl,Vf,Zl,Yi,Wa,ps,Mn,Gf,wo,Br,hp,fe,lt,pl,Wf,Xf,qf,aa,zA,At,lr,qa,kA,Ya,HA,_n,wt,$l,fi,Ka,Ql,an,w,gl,Yf,Ct,Bi,ai,ca,hr,ur,fr,is,ss,Ps,Ao,la,ha,Ls,VA,go,yl,Gn,zi,_l,ua,rs,vl,fa,Ml,Ws,Je,dr,ci,GA,WA,os,da,Hn,Kf,jf,ja,Uo,XA,Zf,pr,ki,pa,xo,qA,YA,Jf,$f,Qf,KA,jA,It,li,Hi,bl,Vi,mr,Ar,ed,El,Sl,Tl,ma,Bs,fp,as,Aa,Ie,bn,ZA,Ln,Jt,Zt,ga,rn,Za,Ja,pt,JA,Yn,Rl,gr,Vn,yo,mn,Wt,td,Ds,xa,nd,xr,yr,_r,Cl,ya,_a,va,Ma,id,sd,rd,ba,Ea,xt,Zn,eg,tg,ng,di,$a,Yt,vr,Mr,eh,Qa,th,Il,ig,sg,Xi,Ns,Ta,Oo,$t,og,ag,cg,lg,hg,ug,fg,dg,pg,mg,Ag,gg,xg,yg,_g,vg,Mg,bg,Eg,Sg,Tg,wg,Rg,Cg,Ig,Pg,Lg,Dg,Ng,Ug,Og,Fg,Bg,zg,kg,Hg,Vg,Gg,Wg,Xg,qg,Yg,Kg,jg,Zg,Jg,$g,Qg,ex,tx,nx,ix,sx,rx,ox,ax,cx,lx,hx,ux,fx,dx,px,mx,Ax,gx,xx,yx,_x,vx,Mx,bx,Ex,Sx,Tx,wx,Rx,Cx,Ix,Px,Lx,Dx,Nx,Ux,Ox,Fx,Bx,zx,kx,Hx,Vx,Gx,Wx,Xx,qx,Yx,Kx,jx,Zx,Jx,$x,Qx,ey,ty,ny,iy,sy,ry,oy,ay,cy,ly,hy,uy,fy,dy,py,my,Ay,gy,xy,yy,_y,vy,My,by,Ey,Sy,Ty,wy,Ry,Cy,Iy,Py,Ly,Dy,Ny,Uy,Oy,Fy,By,rt,de,bi,wa,Ti,Cr,od,Fs,Pl,ad,Ll,Dl,Nl,Us,br,cd,ec,tc,mp,Ap,gp,xp,yp,fd,dd,pd,md,Ad,nh,ih,sh,Ul,Dr,G_,W_,Q_,ev,nv,hv,oh,ah,gv,ch,lh,vv,Mv,hh,Ze,wv,Io,uh,Xs,fh,ms,kr,Cn,qs,Hr,Er,_o,Sr,Tr,wr,vo,_p,Ca,Mo,Ia,wd,Ol,Rd,Fo,Cd,Id,Pd,Iv,Ld,La,Fl,Dd,Bl,nc,Bo,Ys,Nd,Pv,ic,Ks,Rr,Ud,Da,Od,Lv,bo,Eo,Vr,js,Fd,Bd,zd,zl,Na,Gr,kd,Hd,Wr,sc,zo,Vd,dh,Ua,Oa,rc,As,Jn,ko,ph,Fa,kl,Hl,Vl,mh,oc,Ah,ac,gh,cc,xh,lc,Xd,yh,_h,Ho,Ki,Xr,st,wi,hc,uc,fc,dc,Pt,hn,pi,$n,qr,gs,vh,Mh,bh,Qn,xs,pc,ji,Eh,Ri,ys,Zi,mc,ls,Sh,Wv,Ji,Gi,Th,Vo,wh,Ac,Zs,gc,Gl,Yd,Kd,Go,Rh,xc,jd,So,Wl,Ch,Ci,Ih,_s,yc,vs,_c,Gh,Xv,Wh,qv,Yv,Kv,jv,Zv,Jv,$v,Ph,Rt,vM,vc,Bn=Tt(()=>{Dh="160",wm=0,of=1,Rm=2,Jd=1,Nh=2,Wi=3,Si=0,En=1,Fn=2,hs=0,Pr=1,af=2,cf=3,lf=4,Cm=5,Os=100,Im=101,Pm=102,hf=103,uf=104,Lm=200,Dm=201,Nm=202,Um=203,Xl=204,ql=205,Om=206,Fm=207,Bm=208,zm=209,km=210,Hm=211,Vm=212,Gm=213,Wm=214,Xm=0,qm=1,Ym=2,za=3,Km=4,jm=5,Zm=6,Jm=7,$d=0,$m=1,Qm=2,us=0,eA=1,tA=2,nA=3,Uh=4,iA=5,sA=6,ff="attached",rA="detached",Qd=300,Nr=301,Ur=302,Yl=303,Kl=304,Mc=306,ui=1e3,An=1001,Do=1002,Ht=1003,ka=1004,To=1005,Pn=1006,Oh=1007,ds=1008,fs=1009,oA=1010,aA=1011,Fh=1012,ep=1013,cs=1014,qi=1015,Vs=1016,tp=1017,np=1018,zs=1020,cA=1021,Kn=1023,lA=1024,hA=1025,ks=1026,Or=1027,Wo=1028,ip=1029,uA=1030,sp=1031,rp=1033,cl=33776,ll=33777,hl=33778,ul=33779,df=35840,pf=35841,mf=35842,Af=35843,op=36196,gf=37492,xf=37496,yf=37808,_f=37809,vf=37810,Mf=37811,bf=37812,Ef=37813,Sf=37814,Tf=37815,wf=37816,Rf=37817,Cf=37818,If=37819,Pf=37820,Lf=37821,fl=36492,Df=36494,Nf=36495,fA=36283,Uf=36284,Of=36285,Ff=36286,Fr=2300,Gs=2301,dl=2302,Bf=2400,zf=2401,kf=2402,dA=2500,ap=0,bc=1,Xo=2,cp=3e3,Hs=3001,pA=3200,mA=3201,Bh=0,AA=1,jn="",gt="srgb",on="srgb-linear",zh="display-p3",Ec="display-p3-linear",Ha="linear",Nt="srgb",Va="rec709",Ga="p3",cr=7680,Hf=519,gA=512,xA=513,yA=514,lp=515,_A=516,vA=517,MA=518,bA=519,jl=35044,Vf="300 es",Zl=1035,Yi=2e3,Wa=2001,ps=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=1234567,wo=Math.PI/180,Br=180/Math.PI;hp={DEG2RAD:wo,RAD2DEG:Br,generateUUID:hi,clamp:sn,euclideanModulo:kh,mapLinear:EA,inverseLerp:SA,lerp:Ro,damp:TA,pingpong:wA,smoothstep:RA,smootherstep:CA,randInt:IA,randFloat:PA,randFloatSpread:LA,seededRandom:DA,degToRad:NA,radToDeg:UA,isPowerOfTwo:Jl,ceilPowerOfTwo:OA,floorPowerOfTwo:Xa,setQuaternionFromProperEuler:FA,normalize:Et,denormalize:Ei},fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],A=n[8],x=s[0],m=s[3],d=s[6],y=s[1],g=s[4],_=s[7],T=s[2],E=s[5],I=s[8];return r[0]=o*x+a*y+c*T,r[3]=o*m+a*g+c*E,r[6]=o*d+a*_+c*I,r[1]=l*x+h*y+u*T,r[4]=l*m+h*g+u*E,r[7]=l*d+h*_+u*I,r[2]=f*x+p*y+A*T,r[5]=f*m+p*g+A*E,r[8]=f*d+p*_+A*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,A=t*u+n*f+s*p;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/A;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pl.makeScale(e,t)),this}rotate(e){return this.premultiply(pl.makeRotation(-e)),this}translate(e,t){return this.premultiply(pl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pl=new lt;Wf={};Xf=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qf=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),aa={[on]:{transfer:Ha,primaries:Va,toReference:i=>i,fromReference:i=>i},[gt]:{transfer:Nt,primaries:Va,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ec]:{transfer:Ha,primaries:Ga,toReference:i=>i.applyMatrix3(qf),fromReference:i=>i.applyMatrix3(Xf)},[zh]:{transfer:Nt,primaries:Ga,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qf),fromReference:i=>i.applyMatrix3(Xf).convertLinearToSRGB()}},zA=new Set([on,Ec]),At={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!zA.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=aa[e].toReference,s=aa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return aa[i].primaries},getTransfer:function(i){return i===jn?Ha:aa[i].transfer}};qa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=No("canvas")),lr.width=e.width,lr.height=e.height;let n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=No("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Lr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Lr(t[n]/255)*255):t[n]=Lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kA=0,Ya=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=hi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Al(s[o].image)):r.push(Al(s[o]))}else r=Al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};HA=0,_n=class i extends ps{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=An,s=An,r=Pn,o=ds,a=Kn,c=fs,l=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=hi(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hs?gt:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ui:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ui:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Hs:cp}set encoding(e){Co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hs?gt:jn}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Qd;_n.DEFAULT_ANISOTROPY=1;wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],A=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(A-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(A+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(l+1)/2,_=(p+1)/2,T=(d+1)/2,E=(h+f)/4,I=(u+x)/4,N=(A+m)/4;return g>_&&g>T?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=E/n,r=I/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=N/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=I/r,s=N/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-A)*(m-A)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-A)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$l=class extends ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Co("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hs?gt:jn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new _n(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends $l{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ka=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ql=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},an=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],A=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=A,e[t+3]=x;return}if(u!==x||c!==f||l!==p||h!==A){let m=1-a,d=c*f+l*p+h*A+u*x,y=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){let T=Math.sqrt(g),E=Math.atan2(T,d*y);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}let _=a*y;if(c=c*m+f*_,l=l*m+p*_,h=h*m+A*_,u=u*m+x*_,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],A=r[o+3];return e[t]=a*A+h*u+c*p-l*f,e[t+1]=c*A+h*f+l*u-a*p,e[t+2]=l*A+h*p+a*f-c*u,e[t+3]=h*A-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),A=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*A,this._y=l*p*u-f*h*A,this._z=l*h*A+f*p*u,this._w=l*h*u-f*p*A;break;case"YXZ":this._x=f*h*u+l*p*A,this._y=l*p*u-f*h*A,this._z=l*h*A-f*p*u,this._w=l*h*u+f*p*A;break;case"ZXY":this._x=f*h*u-l*p*A,this._y=l*p*u+f*h*A,this._z=l*h*A+f*p*u,this._w=l*h*u-f*p*A;break;case"ZYX":this._x=f*h*u-l*p*A,this._y=l*p*u+f*h*A,this._z=l*h*A-f*p*u,this._w=l*h*u+f*p*A;break;case"YZX":this._x=f*h*u+l*p*A,this._y=l*p*u+f*h*A,this._z=l*h*A-f*p*u,this._w=l*h*u-f*p*A;break;case"XZY":this._x=f*h*u-l*p*A,this._y=l*p*u-f*h*A,this._z=l*h*A+f*p*u,this._w=l*h*u+f*p*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gl=new w,Yf=new an,Ct=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),la.subVectors(this.max,Ao),hr.subVectors(e.a,Ao),ur.subVectors(e.b,Ao),fr.subVectors(e.c,Ao),is.subVectors(ur,hr),ss.subVectors(fr,ur),Ps.subVectors(hr,fr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ps.z,Ps.y,is.z,0,-is.x,ss.z,0,-ss.x,Ps.z,0,-Ps.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ps.y,Ps.x,0];return!xl(t,hr,ur,fr,la)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,hr,ur,fr,la))?!1:(ha.crossVectors(is,ss),t=[ha.x,ha.y,ha.z],xl(t,hr,ur,fr,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new w,new w,new w,new w,new w,new w,new w,new w],ai=new w,ca=new Ct,hr=new w,ur=new w,fr=new w,is=new w,ss=new w,Ps=new w,Ao=new w,la=new w,ha=new w,Ls=new w;VA=new Ct,go=new w,yl=new w,Gn=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):VA.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);let t=go.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(go,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(yl)),this.expandByPoint(go.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new w,_l=new w,ua=new w,rs=new w,vl=new w,fa=new w,Ml=new w,Ws=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_l.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(_l);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ua),a=rs.dot(this.direction),c=-rs.dot(ua),l=rs.lengthSq(),h=Math.abs(1-o*o),u,f,p,A;if(h>0)if(u=o*c-a,f=o*a-c,A=r*h,u>=0)if(f>=-A)if(f<=A){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-A?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=A?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_l).addScaledVector(ua,f),p}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){vl.subVectors(t,e),fa.subVectors(n,e),Ml.crossVectors(vl,fa);let o=this.direction.dot(Ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);let c=a*this.direction.dot(fa.crossVectors(rs,fa));if(c<0)return null;let l=a*this.direction.dot(vl.cross(rs));if(l<0||c+l>o)return null;let h=-a*rs.dot(Ml);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,p,A,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,p,A,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,p,A,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=A,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,A=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+A*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=A+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,A=l*h,x=l*u;t[0]=f+x*a,t[4]=A*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-A,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,A=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=A+p*a,t[1]=p+A*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,A=a*h,x=a*u;t[0]=c*h,t[4]=A*l-p,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=p*l-A,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,A=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=A*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+A,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,p=o*l,A=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-A,t[2]=A*u-p,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GA,e,WA)}lookAt(e,t,n){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),os.crossVectors(n,Hn),os.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),os.crossVectors(n,Hn)),os.normalize(),da.crossVectors(Hn,os),s[0]=os.x,s[4]=da.x,s[8]=Hn.x,s[1]=os.y,s[5]=da.y,s[9]=Hn.y,s[2]=os.z,s[6]=da.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],A=n[2],x=n[6],m=n[10],d=n[14],y=n[3],g=n[7],_=n[11],T=n[15],E=s[0],I=s[4],N=s[8],v=s[12],R=s[1],z=s[5],F=s[9],Z=s[13],P=s[2],B=s[6],Y=s[10],Q=s[14],J=s[3],$=s[7],te=s[11],re=s[15];return r[0]=o*E+a*R+c*P+l*J,r[4]=o*I+a*z+c*B+l*$,r[8]=o*N+a*F+c*Y+l*te,r[12]=o*v+a*Z+c*Q+l*re,r[1]=h*E+u*R+f*P+p*J,r[5]=h*I+u*z+f*B+p*$,r[9]=h*N+u*F+f*Y+p*te,r[13]=h*v+u*Z+f*Q+p*re,r[2]=A*E+x*R+m*P+d*J,r[6]=A*I+x*z+m*B+d*$,r[10]=A*N+x*F+m*Y+d*te,r[14]=A*v+x*Z+m*Q+d*re,r[3]=y*E+g*R+_*P+T*J,r[7]=y*I+g*z+_*B+T*$,r[11]=y*N+g*F+_*Y+T*te,r[15]=y*v+g*Z+_*Q+T*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],A=e[3],x=e[7],m=e[11],d=e[15];return A*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],A=e[12],x=e[13],m=e[14],d=e[15],y=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,g=A*f*l-h*m*l-A*c*p+o*m*p+h*c*d-o*f*d,_=h*x*l-A*u*l+A*a*p-o*x*p-h*a*d+o*u*d,T=A*u*c-h*x*c-A*a*f+o*x*f+h*a*m-o*u*m,E=t*y+n*g+s*_+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=y*I,e[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*I,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*d+n*c*d)*I,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*I,e[4]=g*I,e[5]=(h*m*r-A*f*r+A*s*p-t*m*p-h*s*d+t*f*d)*I,e[6]=(A*c*r-o*m*r-A*s*l+t*m*l+o*s*d-t*c*d)*I,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*I,e[8]=_*I,e[9]=(A*u*r-h*x*r-A*n*p+t*x*p+h*n*d-t*u*d)*I,e[10]=(o*x*r-A*a*r+A*n*l-t*x*l-o*n*d+t*a*d)*I,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*I,e[12]=T*I,e[13]=(h*x*s-A*u*s+A*n*f-t*x*f-h*n*m+t*u*m)*I,e[14]=(A*a*s-o*x*s-A*n*c+t*x*c+o*n*m-t*a*m)*I,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,A=r*u,x=o*h,m=o*u,d=a*u,y=c*l,g=c*h,_=c*u,T=n.x,E=n.y,I=n.z;return s[0]=(1-(x+d))*T,s[1]=(p+_)*T,s[2]=(A-g)*T,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(A+g)*I,s[9]=(m-y)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),a=dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ci.copy(this);let l=1/r,h=1/o,u=1/a;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Yi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,A;if(a===Yi)p=-(o+r)/(o-r),A=-2*o*r/(o-r);else if(a===Wa)p=-o/(o-r),A=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Yi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,p=(n+s)*h,A,x;if(a===Yi)A=(o+r)*u,x=-2*u;else if(a===Wa)A=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dr=new w,ci=new Je,GA=new w(0,0,0),WA=new w(1,1,1),os=new w,da=new w,Hn=new w,Kf=new Je,jf=new an,ja=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ja.DEFAULT_ORDER="XYZ";Uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},XA=0,Zf=new w,pr=new an,ki=new Je,pa=new w,xo=new w,qA=new w,YA=new an,Jf=new w(1,0,0),$f=new w(0,1,0),Qf=new w(0,0,1),KA={type:"added"},jA={type:"removed"},It=class i extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XA++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new ja,n=new an,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new lt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Jf,e)}rotateY(e){return this.rotateOnAxis($f,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,t){return Zf.copy(e).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jf,e)}translateY(e){return this.translateOnAxis($f,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pa.copy(e):pa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(xo,pa,this.up):ki.lookAt(pa,xo,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(ki),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(KA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jA)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,qA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,YA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),A=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),A.length>0&&(n.nodes=A)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};It.DEFAULT_UP=new w(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;li=new w,Hi=new w,bl=new w,Vi=new w,mr=new w,Ar=new w,ed=new w,El=new w,Sl=new w,Tl=new w,ma=!1,Bs=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){li.subVectors(s,t),Hi.subVectors(n,t),bl.subVectors(e,t);let o=li.dot(li),a=li.dot(Hi),c=li.dot(bl),l=Hi.dot(Hi),h=Hi.dot(bl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,A=(o*h-a*c)*f;return r.set(1-p-A,A,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getUV(e,t,n,s,r,o,a,c){return ma===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ma=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(o,Vi.y),c.addScaledVector(a,Vi.z),c)}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),Hi.subVectors(e,t),li.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),li.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ma===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ma=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;mr.subVectors(s,n),Ar.subVectors(r,n),El.subVectors(e,n);let c=mr.dot(El),l=Ar.dot(El);if(c<=0&&l<=0)return t.copy(n);Sl.subVectors(e,s);let h=mr.dot(Sl),u=Ar.dot(Sl);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(mr,o);Tl.subVectors(e,r);let p=mr.dot(Tl),A=Ar.dot(Tl);if(A>=0&&p<=A)return t.copy(r);let x=p*l-c*A;if(x<=0&&l>=0&&A<=0)return a=l/(l-A),t.copy(n).addScaledVector(Ar,a);let m=h*A-p*u;if(m<=0&&u-h>=0&&p-A>=0)return ed.subVectors(r,s),a=(u-h)/(u-h+(p-A)),t.copy(s).addScaledVector(ed,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(mr,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Aa={h:0,s:0,l:0};Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=kh(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wl(o,r,e+1/3),this.g=wl(o,r,e),this.b=wl(o,r,e-1/3)}return At.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=fp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=ml(e.r),this.g=ml(e.g),this.b=ml(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return At.fromWorkingColorSpace(bn.copy(this),e),Math.round(sn(bn.r*255,0,255))*65536+Math.round(sn(bn.g*255,0,255))*256+Math.round(sn(bn.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(bn.copy(this),t);let n=bn.r,s=bn.g,r=bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=gt){At.fromWorkingColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,s=bn.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Aa);let n=Ro(as.h,Aa.h,t),s=Ro(as.s,Aa.s,t),r=Ro(as.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Ie;Ie.NAMES=fp;ZA=0,Ln=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Pr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xl&&(n.blendSrc=this.blendSrc),this.blendDst!==ql&&(n.blendDst=this.blendDst),this.blendEquation!==Os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jt=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zt=new w,ga=new fe,rn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ga.fromBufferAttribute(this,t),ga.applyMatrix3(e),this.setXY(t,ga.x,ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),e}},Za=class extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ja=class extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},pt=class extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}},JA=0,Yn=new Je,Rl=new It,gr=new w,Vn=new Ct,yo=new Ct,mn=new w,Wt=class i extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?Ja:Za)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Rl.lookAt(e),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Vn.min,yo.min),Vn.expandByPoint(mn),mn.addVectors(Vn.max,yo.max),Vn.expandByPoint(mn)):(Vn.expandByPoint(yo.min),Vn.expandByPoint(yo.max))}Vn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)mn.fromBufferAttribute(a,l),c&&(gr.fromBufferAttribute(e,l),mn.add(gr)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<a;R++)l[R]=new w,h[R]=new w;let u=new w,f=new w,p=new w,A=new fe,x=new fe,m=new fe,d=new w,y=new w;function g(R,z,F){u.fromArray(s,R*3),f.fromArray(s,z*3),p.fromArray(s,F*3),A.fromArray(o,R*2),x.fromArray(o,z*2),m.fromArray(o,F*2),f.sub(u),p.sub(u),x.sub(A),m.sub(A);let Z=1/(x.x*m.y-m.x*x.y);isFinite(Z)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(Z),y.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(Z),l[R].add(d),l[z].add(d),l[F].add(d),h[R].add(y),h[z].add(y),h[F].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let R=0,z=_.length;R<z;++R){let F=_[R],Z=F.start,P=F.count;for(let B=Z,Y=Z+P;B<Y;B+=3)g(n[B+0],n[B+1],n[B+2])}let T=new w,E=new w,I=new w,N=new w;function v(R){I.fromArray(r,R*3),N.copy(I);let z=l[R];T.copy(z),T.sub(I.multiplyScalar(I.dot(z))).normalize(),E.crossVectors(N,z);let Z=E.dot(h[R])<0?-1:1;c[R*4]=T.x,c[R*4+1]=T.y,c[R*4+2]=T.z,c[R*4+3]=Z}for(let R=0,z=_.length;R<z;++R){let F=_[R],Z=F.start,P=F.count;for(let B=Z,Y=Z+P;B<Y;B+=3)v(n[B+0]),v(n[B+1]),v(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let f=0,p=e.count;f<p;f+=3){let A=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,A),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,A),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(A,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,A=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[A++]=l[p++]}return new rn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},td=new Je,Ds=new Ws,xa=new Gn,nd=new w,xr=new w,yr=new w,_r=new w,Cl=new w,ya=new w,_a=new fe,va=new fe,Ma=new fe,id=new w,sd=new w,rd=new w,ba=new w,Ea=new w,xt=class extends It{constructor(e=new Wt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Cl.fromBufferAttribute(u,e),o?ya.addScaledVector(Cl,h):ya.addScaledVector(Cl.sub(t),h))}t.add(ya)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(xa.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(xa,nd)===null||Ds.origin.distanceToSquared(nd)>(e.far-e.near)**2))&&(td.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(td),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let A=0,x=f.length;A<x;A++){let m=f[A],d=o[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,T=g;_<T;_+=3){let E=a.getX(_),I=a.getX(_+1),N=a.getX(_+2);s=Sa(this,d,e,n,l,h,u,E,I,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let A=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=A,d=x;m<d;m+=3){let y=a.getX(m),g=a.getX(m+1),_=a.getX(m+2);s=Sa(this,o,e,n,l,h,u,y,g,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let A=0,x=f.length;A<x;A++){let m=f[A],d=o[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,T=g;_<T;_+=3){let E=_,I=_+1,N=_+2;s=Sa(this,d,e,n,l,h,u,E,I,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let A=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=A,d=x;m<d;m+=3){let y=m,g=m+1,_=m+2;s=Sa(this,o,e,n,l,h,u,y,g,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Zn=class i extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;A("z","y","x",-1,-1,n,t,e,o,r,0),A("z","y","x",1,-1,n,t,-e,o,r,1),A("x","z","y",1,1,e,n,t,s,o,2),A("x","z","y",1,-1,e,n,-t,s,o,3),A("x","y","z",1,-1,e,t,n,s,r,4),A("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function A(x,m,d,y,g,_,T,E,I,N,v){let R=_/I,z=T/N,F=_/2,Z=T/2,P=E/2,B=I+1,Y=N+1,Q=0,J=0,$=new w;for(let te=0;te<Y;te++){let re=te*z-Z;for(let _e=0;_e<B;_e++){let K=_e*R-F;$[x]=K*y,$[m]=re*g,$[d]=P,l.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[d]=E>0?1:-1,h.push($.x,$.y,$.z),u.push(_e/I),u.push(1-te/N),Q+=1}}for(let te=0;te<N;te++)for(let re=0;re<I;re++){let _e=f+re+B*te,K=f+re+B*(te+1),ne=f+(re+1)+B*(te+1),ge=f+(re+1)+B*te;c.push(_e,K,ge),c.push(K,ne,ge),J+=6}a.addGroup(p,J,v),p+=J,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};eg={clone:zr,merge:In},tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=QA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$a=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yt=class extends $a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vr=-90,Mr=1,eh=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(vr,Mr,e,t);s.layers=this.layers,this.add(s);let r=new Yt(vr,Mr,e,t);r.layers=this.layers,this.add(r);let o=new Yt(vr,Mr,e,t);o.layers=this.layers,this.add(o);let a=new Yt(vr,Mr,e,t);a.layers=this.layers,this.add(a);let c=new Yt(vr,Mr,e,t);c.layers=this.layers,this.add(c);let l=new Yt(vr,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}},Qa=class extends _n{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Nr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},th=class extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Co("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hs?gt:jn),this.texture=new Qa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zn(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:hs});r.uniforms.tEquirect.value=t;let o=new xt(s,r),a=t.minFilter;return t.minFilter===ds&&(t.minFilter=Pn),new eh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Il=new w,ig=new w,sg=new lt,Xi=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Il.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Il),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sg.getNormalMatrix(e),s=this.coplanarPoint(Il).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ns=new Gn,Ta=new w,Oo=class{constructor(e=new Xi,t=new Xi,n=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],A=s[9],x=s[10],m=s[11],d=s[12],y=s[13],g=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-p,_-d).normalize(),n[1].setComponents(c+r,f+l,m+p,_+d).normalize(),n[2].setComponents(c+o,f+h,m+A,_+y).normalize(),n[3].setComponents(c-o,f-h,m-A,_-y).normalize(),n[4].setComponents(c-a,f-u,m-x,_-g).normalize(),t===Yi)n[5].setComponents(c+a,f+u,m+x,_+g).normalize();else if(t===Wa)n[5].setComponents(a,u,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ta.x=s.normal.x>0?e.max.x:e.min.x,Ta.y=s.normal.y>0?e.max.y:e.min.y,Ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};$t=class i extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],A=[],x=[],m=[];for(let d=0;d<h;d++){let y=d*f-o;for(let g=0;g<l;g++){let _=g*u-r;A.push(_,-y,0),x.push(0,0,1),m.push(g/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){let g=y+l*d,_=y+l*(d+1),T=y+1+l*(d+1),E=y+1+l*d;p.push(g,_,E),p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new pt(A,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
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
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
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
#endif`,dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
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
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yg=`#ifdef USE_IRIDESCENCE
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
#endif`,_g=`#ifdef USE_BUMPMAP
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
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cg=`#define PI 3.141592653589793
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
} // validated`,Ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pg=`vec3 transformedNormal = objectNormal;
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
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`
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
}`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
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
}`,Kg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
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
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
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
#endif`,rx=`struct PhysicalMaterial {
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
}`,ox=`
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ax=`#if defined( USE_POINTS_UV )
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
#endif`,gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
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
#endif`,vx=`#ifdef USE_MORPHTARGETS
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
#endif`,Mx=`#ifdef USE_MORPHTARGETS
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
#endif`,bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wx=`float getShadowMask() {
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
}`,Xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#ifdef USE_TRANSMISSION
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oy=`uniform sampler2D t2D;
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
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
}`,fy=`#if DEPTH_PACKING == 3200
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
}`,dy=`#define DISTANCE
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
}`,py=`#define DISTANCE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`uniform float scale;
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
}`,xy=`uniform vec3 diffuse;
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
}`,yy=`#include <common>
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
}`,_y=`uniform vec3 diffuse;
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
}`,vy=`#define LAMBERT
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
}`,My=`#define LAMBERT
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
}`,by=`#define MATCAP
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
}`,Ey=`#define MATCAP
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
}`,Sy=`#define NORMAL
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
}`,Ty=`#define NORMAL
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
}`,wy=`#define PHONG
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
}`,Ry=`#define PHONG
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
}`,Cy=`#define STANDARD
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
}`,Iy=`#define STANDARD
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
}`,Py=`#define TOON
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
}`,Ly=`#define TOON
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
}`,Dy=`uniform float size;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Oy=`uniform vec3 color;
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
}`,Fy=`uniform float rotation;
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
}`,By=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:cg,alphamap_pars_fragment:lg,alphatest_fragment:hg,alphatest_pars_fragment:ug,aomap_fragment:fg,aomap_pars_fragment:dg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:Ag,beginnormal_vertex:gg,bsdfs:xg,iridescence_fragment:yg,bumpmap_pars_fragment:_g,clipping_planes_fragment:vg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Eg,color_fragment:Sg,color_pars_fragment:Tg,color_pars_vertex:wg,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Ig,defaultnormal_vertex:Pg,displacementmap_pars_vertex:Lg,displacementmap_vertex:Dg,emissivemap_fragment:Ng,emissivemap_pars_fragment:Ug,colorspace_fragment:Og,colorspace_pars_fragment:Fg,envmap_fragment:Bg,envmap_common_pars_fragment:zg,envmap_pars_fragment:kg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Qg,envmap_vertex:Vg,fog_vertex:Gg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:Yg,lightmap_fragment:Kg,lightmap_pars_fragment:jg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:$g,lights_toon_fragment:ex,lights_toon_pars_fragment:tx,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:sx,lights_physical_pars_fragment:rx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:cx,logdepthbuf_fragment:lx,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:fx,map_fragment:dx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:Ax,metalnessmap_fragment:gx,metalnessmap_pars_fragment:xx,morphcolor_vertex:yx,morphnormal_vertex:_x,morphtarget_pars_vertex:vx,morphtarget_vertex:Mx,normal_fragment_begin:bx,normal_fragment_maps:Ex,normal_pars_fragment:Sx,normal_pars_vertex:Tx,normal_vertex:wx,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Px,iridescence_pars_fragment:Lx,opaque_fragment:Dx,packing:Nx,premultiplied_alpha_fragment:Ux,project_vertex:Ox,dithering_fragment:Fx,dithering_pars_fragment:Bx,roughnessmap_fragment:zx,roughnessmap_pars_fragment:kx,shadowmap_pars_fragment:Hx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Wx,skinbase_vertex:Xx,skinning_pars_vertex:qx,skinning_vertex:Yx,skinnormal_vertex:Kx,specularmap_fragment:jx,specularmap_pars_fragment:Zx,tonemapping_fragment:Jx,tonemapping_pars_fragment:$x,transmission_fragment:Qx,transmission_pars_fragment:ey,uv_pars_fragment:ty,uv_pars_vertex:ny,uv_vertex:iy,worldpos_vertex:sy,background_vert:ry,background_frag:oy,backgroundCube_vert:ay,backgroundCube_frag:cy,cube_vert:ly,cube_frag:hy,depth_vert:uy,depth_frag:fy,distanceRGBA_vert:dy,distanceRGBA_frag:py,equirect_vert:my,equirect_frag:Ay,linedashed_vert:gy,linedashed_frag:xy,meshbasic_vert:yy,meshbasic_frag:_y,meshlambert_vert:vy,meshlambert_frag:My,meshmatcap_vert:by,meshmatcap_frag:Ey,meshnormal_vert:Sy,meshnormal_frag:Ty,meshphong_vert:wy,meshphong_frag:Ry,meshphysical_vert:Cy,meshphysical_frag:Iy,meshtoon_vert:Py,meshtoon_frag:Ly,points_vert:Dy,points_frag:Ny,shadow_vert:Uy,shadow_frag:Oy,sprite_vert:Fy,sprite_frag:By},de={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},bi={basic:{uniforms:In([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:In([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ie(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:In([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:In([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:In([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ie(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:In([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:In([de.points,de.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:In([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:In([de.common,de.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:In([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:In([de.sprite,de.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:In([de.common,de.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:In([de.lights,de.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};bi.physical={uniforms:In([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};wa={r:0,b:0,g:0};Ti=class extends $a{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cr=4,od=[.125,.215,.35,.446,.526,.582],Fs=20,Pl=new Ti,ad=new Ie,Ll=null,Dl=0,Nl=0,Us=(1+Math.sqrt(5))/2,br=1/Us,cd=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Us,br),new w(0,Us,-br),new w(br,0,Us),new w(-br,0,Us),new w(Us,br,0),new w(-Us,br,0)],ec=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ll=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll,Dl,Nl),e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Vs,format:Kn,colorSpace:on,depthBuffer:!1},s=ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xy(r)),this._blurMaterial=qy(r,e,t)}return s}_compileMaterial(e){let t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Pl)}_sceneToCubeUV(e,t,n,s){let a=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ad),h.toneMapping=us,h.autoClear=!1;let p=new Jt({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),A=new xt(new Zn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(ad),x=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):y===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let g=this._cubeSize;Ra(s,y*g,d>2?g:0,g,g),h.setRenderTarget(s),x&&h.render(A,a),h.render(e,a)}A.geometry.dispose(),A.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Nr||e.mapping===Ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ra(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Pl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cd[(s-1)%cd.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,A=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fs-1),x=r/A,m=isFinite(r)?1+Math.floor(h*x):Fs;m>Fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fs}`);let d=[],y=0;for(let I=0;I<Fs;++I){let N=I/x,v=Math.exp(-N*N/2);d.push(v),I===0?y+=v:I<m&&(y+=2*v)}for(let I=0;I<d.length;I++)d[I]=d[I]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:g}=this;f.dTheta.value=A,f.mipInt.value=g-n;let _=this._sizeLods[s],T=3*_*(s>g-Cr?s-g+Cr:0),E=4*(this._cubeSize-_);Ra(t,T,E,3*_,2*_),c.setRenderTarget(t),c.render(u,Pl)}};tc=class extends _n{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:ks,h!==ks&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ks&&(n=cs),n===void 0&&h===Or&&(n=zs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mp=new _n,Ap=new tc(1,1);Ap.compareFunction=lp;gp=new Ka,xp=new Ql,yp=new Qa,fd=[],dd=[],pd=new Float32Array(16),md=new Float32Array(9),Ad=new Float32Array(4);nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v_(t.type)}},ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H_(t.type)}},sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ul=/(\w+)(\])?(\[|\.)?/g;Dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);V_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};G_=37297,W_=0;Q_=/^[ \t]*#include +<([\w\d./]+)>/gm;ev=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;hv=0,oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ah(e),t.set(e,n)),n}},ah=class{constructor(e){this.id=hv++,this.code=e,this.usedTimes=0}};gv=0;ch=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lh=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
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
}`;hh=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ze=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},wv={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,A=.005;l.inputState.pinching&&f>p+A?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-A&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},uh=class extends ps{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,A=null,x=t.getContextAttributes(),m=null,d=null,y=[],g=[],_=new fe,T=null,E=new Yt;E.layers.enable(1),E.viewport=new wt;let I=new Yt;I.layers.enable(2),I.viewport=new wt;let N=[E,I],v=new hh;v.layers.enable(1),v.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=y[K];return ne===void 0&&(ne=new Io,y[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=y[K];return ne===void 0&&(ne=new Io,y[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=y[K];return ne===void 0&&(ne=new Io,y[K]=ne),ne.getHandSpace()};function F(K){let ne=g.indexOf(K.inputSource);if(ne===-1)return;let ge=y[ne];ge!==void 0&&(ge.update(K.inputSource,K.frame,l||o),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function Z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",P);for(let K=0;K<y.length;K++){let ne=g[K];ne!==null&&(g[K]=null,y[K].disconnect(ne))}R=null,z=null,e.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new fi(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:fs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ne=null,ge=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=x.stencil?Or:ks,ge=x.stencil?zs:cs);let Re={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new fi(f.textureWidth,f.textureHeight,{format:Kn,type:fs,depthTexture:new tc(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ge=e.properties.get(d);Ge.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(K){for(let ne=0;ne<K.removed.length;ne++){let ge=K.removed[ne],we=g.indexOf(ge);we>=0&&(g[we]=null,y[we].disconnect(ge))}for(let ne=0;ne<K.added.length;ne++){let ge=K.added[ne],we=g.indexOf(ge);if(we===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=g.length){g.push(ge),we=Ge;break}else if(g[Ge]===null){g[Ge]=ge,we=Ge;break}if(we===-1)break}let Re=y[we];Re&&Re.connect(ge)}}let B=new w,Y=new w;function Q(K,ne,ge){B.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(ge.matrixWorld);let we=B.distanceTo(Y),Re=ne.projectionMatrix.elements,Ge=ge.projectionMatrix.elements,Ve=Re[14]/(Re[10]-1),Fe=Re[14]/(Re[10]+1),ht=(Re[9]+1)/Re[5],G=(Re[9]-1)/Re[5],jt=(Re[8]-1)/Re[0],Le=(Ge[8]+1)/Ge[0],Be=Ve*jt,Ee=Ve*Le,Lt=we/(-jt+Le),tt=Lt*-jt;ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(tt),K.translateZ(Lt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let C=Ve+Lt,M=Fe+Lt,W=Be-tt,ae=Ee+(we-tt),oe=ht*Fe/M*C,ce=G*Fe/M*C;K.projectionMatrix.makePerspective(W,ae,oe,ce,C,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function J(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;v.near=I.near=E.near=K.near,v.far=I.far=E.far=K.far,(R!==v.near||z!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,z=v.far);let ne=K.parent,ge=v.cameras;J(v,ne);for(let we=0;we<ge.length;we++)J(ge[we],ne);ge.length===2?Q(v,E,I):v.projectionMatrix.copy(E.projectionMatrix),$(K,v,ne)};function $(K,ne,ge){ge===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Br*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)};let te=null;function re(K,ne){if(h=ne.getViewerPose(l||o),A=ne,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let we=!1;ge.length!==v.cameras.length&&(v.cameras.length=0,we=!0);for(let Re=0;Re<ge.length;Re++){let Ge=ge[Re],Ve=null;if(p!==null)Ve=p.getViewport(Ge);else{let ht=u.getViewSubImage(f,Ge);Ve=ht.viewport,Re===0&&(e.setRenderTargetTextures(d,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(d))}let Fe=N[Re];Fe===void 0&&(Fe=new Yt,Fe.layers.enable(Re),Fe.viewport=new wt,N[Re]=Fe),Fe.matrix.fromArray(Ge.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ge.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Re===0&&(v.matrix.copy(Fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),we===!0&&v.cameras.push(Fe)}}for(let ge=0;ge<y.length;ge++){let we=g[ge],Re=y[ge];we!==null&&Re!==void 0&&Re.update(we,ne,l||o)}te&&te(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),A=null}let _e=new pp;_e.setAnimationLoop(re),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}};Xs=class{constructor(e={}){let{canvas:t=BA(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),A=new Int32Array(4),x=null,m=null,d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=us,this.toneMappingExposure=1;let g=this,_=!1,T=0,E=0,I=null,N=-1,v=null,R=new wt,z=new wt,F=null,Z=new Ie(0),P=0,B=t.width,Y=t.height,Q=1,J=null,$=null,te=new wt(0,0,B,Y),re=new wt(0,0,B,Y),_e=!1,K=new Oo,ne=!1,ge=!1,we=null,Re=new Je,Ge=new fe,Ve=new w,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return I===null?Q:1}let G=n;function jt(b,O){for(let H=0;H<b.length;H++){let X=b[H],V=t.getContext(X,O);if(V!==null)return V}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),G===null){let O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),G=jt(O,b),G===null)throw jt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Le,Be,Ee,Lt,tt,C,M,W,ae,oe,ce,Me,xe,be,Ce,Ye,se,mt,nt,He,Pe,ve,Xe,dt;function Dt(){Le=new Ky(G),Be=new Vy(G,Le,e),Le.init(Be),ve=new Tv(G,Le,Be),Ee=new Ev(G,Le,Be),Lt=new Jy(G),tt=new fv,C=new Sv(G,Le,Ee,tt,Be,ve,Lt),M=new Wy(g),W=new Yy(g),ae=new rg(G,Be),Xe=new ky(G,Le,ae,Be),oe=new jy(G,ae,Lt,Xe),ce=new t_(G,oe,ae,Lt),nt=new e_(G,Be,C),Ye=new Gy(tt),Me=new uv(g,M,W,Le,Be,Xe,Ye),xe=new Rv(g,tt),be=new pv,Ce=new _v(Le,Be),mt=new zy(g,M,W,Ee,ce,f,c),se=new bv(g,ce,Be),dt=new Cv(G,Lt,Be,Ee),He=new Hy(G,Le,Lt,Be),Pe=new Zy(G,Le,Lt,Be),Lt.programs=Me.programs,g.capabilities=Be,g.extensions=Le,g.properties=tt,g.renderLists=be,g.shadowMap=se,g.state=Ee,g.info=Lt}Dt();let Ke=new uh(g,G);this.xr=Ke,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let b=Le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(B,Y,!1))},this.getSize=function(b){return b.set(B,Y)},this.setSize=function(b,O,H=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,Y=O,t.width=Math.floor(b*Q),t.height=Math.floor(O*Q),H===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(B*Q,Y*Q).floor()},this.setDrawingBufferSize=function(b,O,H){B=b,Y=O,Q=H,t.width=Math.floor(b*H),t.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,O,H,X){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,O,H,X),Ee.viewport(R.copy(te).multiplyScalar(Q).floor())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,O,H,X){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,O,H,X),Ee.scissor(z.copy(re).multiplyScalar(Q).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(b){Ee.setScissorTest(_e=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(b=!0,O=!0,H=!0){let X=0;if(b){let V=!1;if(I!==null){let ye=I.texture.format;V=ye===rp||ye===sp||ye===ip}if(V){let ye=I.texture.type,Se=ye===fs||ye===cs||ye===Fh||ye===zs||ye===tp||ye===np,De=mt.getClearColor(),qe=mt.getClearAlpha(),ot=De.r,je=De.g,it=De.b;Se?(p[0]=ot,p[1]=je,p[2]=it,p[3]=qe,G.clearBufferuiv(G.COLOR,0,p)):(A[0]=ot,A[1]=je,A[2]=it,A[3]=qe,G.clearBufferiv(G.COLOR,0,A))}else X|=G.COLOR_BUFFER_BIT}O&&(X|=G.DEPTH_BUFFER_BIT),H&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),be.dispose(),Ce.dispose(),tt.dispose(),M.dispose(),W.dispose(),ce.dispose(),Xe.dispose(),dt.dispose(),Me.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",U),Ke.removeEventListener("sessionend",D),we&&(we.dispose(),we=null),q.stop()};function ue(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let b=Lt.autoReset,O=se.enabled,H=se.autoUpdate,X=se.needsUpdate,V=se.type;Dt(),Lt.autoReset=b,se.enabled=O,se.autoUpdate=H,se.needsUpdate=X,se.type=V}function Ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function me(b){let O=b.target;O.removeEventListener("dispose",me),ke(O)}function ke(b){Oe(b),tt.remove(b)}function Oe(b){let O=tt.get(b).programs;O!==void 0&&(O.forEach(function(H){Me.releaseProgram(H)}),b.isShaderMaterial&&Me.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,X,V,ye){O===null&&(O=Fe);let Se=V.isMesh&&V.matrixWorld.determinant()<0,De=_t(b,O,H,X,V);Ee.setMaterial(X,Se);let qe=H.index,ot=1;if(X.wireframe===!0){if(qe=oe.getWireframeAttribute(H),qe===void 0)return;ot=2}let je=H.drawRange,it=H.attributes.position,qt=je.start*ot,kn=(je.start+je.count)*ot;ye!==null&&(qt=Math.max(qt,ye.start*ot),kn=Math.min(kn,(ye.start+ye.count)*ot)),qe!==null?(qt=Math.max(qt,0),kn=Math.min(kn,qe.count)):it!=null&&(qt=Math.max(qt,0),kn=Math.min(kn,it.count));let pn=kn-qt;if(pn<0||pn===1/0)return;Xe.setup(V,X,De,H,qe);let Fi,kt=He;if(qe!==null&&(Fi=ae.get(qe),kt=Pe,kt.setIndex(Fi)),V.isMesh)X.wireframe===!0?(Ee.setLineWidth(X.wireframeLinewidth*ht()),kt.setMode(G.LINES)):kt.setMode(G.TRIANGLES);else if(V.isLine){let ct=X.linewidth;ct===void 0&&(ct=1),Ee.setLineWidth(ct*ht()),V.isLineSegments?kt.setMode(G.LINES):V.isLineLoop?kt.setMode(G.LINE_LOOP):kt.setMode(G.LINE_STRIP)}else V.isPoints?kt.setMode(G.POINTS):V.isSprite&&kt.setMode(G.TRIANGLES);if(V.isBatchedMesh)kt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)kt.renderInstances(qt,pn,V.count);else if(H.isInstancedBufferGeometry){let ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,sl=Math.min(H.instanceCount,ct);kt.renderInstances(qt,pn,sl)}else kt.render(qt,pn)};function bt(b,O,H){b.transparent===!0&&b.side===Fn&&b.forceSinglePass===!1?(b.side=En,b.needsUpdate=!0,he(b,O,H),b.side=Si,b.needsUpdate=!0,he(b,O,H),b.side=Fn):he(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),m=Ce.get(H),m.init(),y.push(m),H.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),b!==H&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(g._useLegacyLights);let X=new Set;return b.traverse(function(V){let ye=V.material;if(ye)if(Array.isArray(ye))for(let Se=0;Se<ye.length;Se++){let De=ye[Se];bt(De,H,V),X.add(De)}else bt(ye,H,V),X.add(ye)}),y.pop(),m=null,X},this.compileAsync=function(b,O,H=null){let X=this.compile(b,O,H);return new Promise(V=>{function ye(){if(X.forEach(function(Se){tt.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){V(b);return}setTimeout(ye,10)}Le.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let vt=null;function S(b){vt&&vt(b)}function U(){q.stop()}function D(){q.start()}let q=new pp;q.setAnimationLoop(S),typeof self<"u"&&q.setContext(self),this.setAnimationLoop=function(b){vt=b,Ke.setAnimationLoop(b),b===null?q.stop():q.start()},Ke.addEventListener("sessionstart",U),Ke.addEventListener("sessionend",D),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(O),O=Ke.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,O,I),m=Ce.get(b,y.length),m.init(),y.push(m),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(Re),ge=this.localClippingEnabled,ne=Ye.init(this.clippingPlanes,ge),x=be.get(b,d.length),x.init(),d.push(x),k(b,O,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(J,$),this.info.render.frame++,ne===!0&&Ye.beginShadows();let H=m.state.shadowsArray;if(se.render(H,b,O),ne===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),mt.render(x,b),m.setupLights(g._useLegacyLights),O.isArrayCamera){let X=O.cameras;for(let V=0,ye=X.length;V<ye;V++){let Se=X[V];ie(x,b,Se,Se.viewport)}}else ie(x,b,O);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(g,b,O),Xe.resetDefaultState(),N=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function k(b,O,H,X){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){X&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Re);let Se=ce.update(b),De=b.material;De.visible&&x.push(b,Se,De,H,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){let Se=ce.update(b),De=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ve.copy(Se.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Re)),Array.isArray(De)){let qe=Se.groups;for(let ot=0,je=qe.length;ot<je;ot++){let it=qe[ot],qt=De[it.materialIndex];qt&&qt.visible&&x.push(b,Se,qt,H,Ve.z,it)}}else De.visible&&x.push(b,Se,De,H,Ve.z,null)}}let ye=b.children;for(let Se=0,De=ye.length;Se<De;Se++)k(ye[Se],O,H,X)}function ie(b,O,H,X){let V=b.opaque,ye=b.transmissive,Se=b.transparent;m.setupLightsView(H),ne===!0&&Ye.setGlobalState(g.clippingPlanes,H),ye.length>0&&ee(V,ye,O,H),X&&Ee.viewport(R.copy(X)),V.length>0&&j(V,O,H),ye.length>0&&j(ye,O,H),Se.length>0&&j(Se,O,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ee(b,O,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ye=Be.isWebGL2;we===null&&(we=new fi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Vs:fs,minFilter:ds,samples:ye?4:0})),g.getDrawingBufferSize(Ge),ye?we.setSize(Ge.x,Ge.y):we.setSize(Xa(Ge.x),Xa(Ge.y));let Se=g.getRenderTarget();g.setRenderTarget(we),g.getClearColor(Z),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();let De=g.toneMapping;g.toneMapping=us,j(b,H,X),C.updateMultisampleRenderTarget(we),C.updateRenderTargetMipmap(we);let qe=!1;for(let ot=0,je=O.length;ot<je;ot++){let it=O[ot],qt=it.object,kn=it.geometry,pn=it.material,Fi=it.group;if(pn.side===Fn&&qt.layers.test(X.layers)){let kt=pn.side;pn.side=En,pn.needsUpdate=!0,le(qt,H,X,kn,pn,Fi),pn.side=kt,pn.needsUpdate=!0,qe=!0}}qe===!0&&(C.updateMultisampleRenderTarget(we),C.updateRenderTargetMipmap(we)),g.setRenderTarget(Se),g.setClearColor(Z,P),g.toneMapping=De}function j(b,O,H){let X=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ye=b.length;V<ye;V++){let Se=b[V],De=Se.object,qe=Se.geometry,ot=X===null?Se.material:X,je=Se.group;De.layers.test(H.layers)&&le(De,O,H,qe,ot,je)}}function le(b,O,H,X,V,ye){b.onBeforeRender(g,O,H,X,V,ye),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(g,O,H,X,b,ye),V.transparent===!0&&V.side===Fn&&V.forceSinglePass===!1?(V.side=En,V.needsUpdate=!0,g.renderBufferDirect(H,O,X,V,b,ye),V.side=Si,V.needsUpdate=!0,g.renderBufferDirect(H,O,X,V,b,ye),V.side=Fn):g.renderBufferDirect(H,O,X,V,b,ye),b.onAfterRender(g,O,H,X,V,ye)}function he(b,O,H){O.isScene!==!0&&(O=Fe);let X=tt.get(b),V=m.state.lights,ye=m.state.shadowsArray,Se=V.state.version,De=Me.getParameters(b,V.state,ye,O,H),qe=Me.getProgramCacheKey(De),ot=X.programs;X.environment=b.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(b.isMeshStandardMaterial?W:M).get(b.envMap||X.environment),ot===void 0&&(b.addEventListener("dispose",me),ot=new Map,X.programs=ot);let je=ot.get(qe);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===Se)return at(b,De),je}else De.uniforms=Me.getUniforms(b),b.onBuild(H,De,g),b.onBeforeCompile(De,g),je=Me.acquireProgram(De,qe),ot.set(qe,je),X.uniforms=De.uniforms;let it=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(it.clippingPlanes=Ye.uniform),at(b,De),X.needsLights=nn(b),X.lightsStateVersion=Se,X.needsLights&&(it.ambientLightColor.value=V.state.ambient,it.lightProbe.value=V.state.probe,it.directionalLights.value=V.state.directional,it.directionalLightShadows.value=V.state.directionalShadow,it.spotLights.value=V.state.spot,it.spotLightShadows.value=V.state.spotShadow,it.rectAreaLights.value=V.state.rectArea,it.ltc_1.value=V.state.rectAreaLTC1,it.ltc_2.value=V.state.rectAreaLTC2,it.pointLights.value=V.state.point,it.pointLightShadows.value=V.state.pointShadow,it.hemisphereLights.value=V.state.hemi,it.directionalShadowMap.value=V.state.directionalShadowMap,it.directionalShadowMatrix.value=V.state.directionalShadowMatrix,it.spotShadowMap.value=V.state.spotShadowMap,it.spotLightMatrix.value=V.state.spotLightMatrix,it.spotLightMap.value=V.state.spotLightMap,it.pointShadowMap.value=V.state.pointShadowMap,it.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=je,X.uniformsList=null,je}function We(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Dr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function at(b,O){let H=tt.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function _t(b,O,H,X,V){O.isScene!==!0&&(O=Fe),C.resetTextureUnits();let ye=O.fog,Se=X.isMeshStandardMaterial?O.environment:null,De=I===null?g.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:on,qe=(X.isMeshStandardMaterial?W:M).get(X.envMap||Se),ot=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,je=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),it=!!H.morphAttributes.position,qt=!!H.morphAttributes.normal,kn=!!H.morphAttributes.color,pn=us;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pn=g.toneMapping);let Fi=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,kt=Fi!==void 0?Fi.length:0,ct=tt.get(X),sl=m.state.lights;if(ne===!0&&(ge===!0||b!==v)){let qn=b===v&&X.id===N;Ye.setState(X,b,qn)}let Gt=!1;X.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==sl.state.version||ct.outputColorSpace!==De||V.isBatchedMesh&&ct.batching===!1||!V.isBatchedMesh&&ct.batching===!0||V.isInstancedMesh&&ct.instancing===!1||!V.isInstancedMesh&&ct.instancing===!0||V.isSkinnedMesh&&ct.skinning===!1||!V.isSkinnedMesh&&ct.skinning===!0||V.isInstancedMesh&&ct.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ct.instancingColor===!1&&V.instanceColor!==null||ct.envMap!==qe||X.fog===!0&&ct.fog!==ye||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Ye.numPlanes||ct.numIntersection!==Ye.numIntersection)||ct.vertexAlphas!==ot||ct.vertexTangents!==je||ct.morphTargets!==it||ct.morphNormals!==qt||ct.morphColors!==kn||ct.toneMapping!==pn||Be.isWebGL2===!0&&ct.morphTargetsCount!==kt)&&(Gt=!0):(Gt=!0,ct.__version=X.version);let Cs=ct.currentProgram;Gt===!0&&(Cs=he(X,O,V));let sf=!1,po=!1,rl=!1,vn=Cs.getUniforms(),Is=ct.uniforms;if(Ee.useProgram(Cs.program)&&(sf=!0,po=!0,rl=!0),X.id!==N&&(N=X.id,po=!0),sf||v!==b){vn.setValue(G,"projectionMatrix",b.projectionMatrix),vn.setValue(G,"viewMatrix",b.matrixWorldInverse);let qn=vn.map.cameraPosition;qn!==void 0&&qn.setValue(G,Ve.setFromMatrixPosition(b.matrixWorld)),Be.logarithmicDepthBuffer&&vn.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vn.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,po=!0,rl=!0)}if(V.isSkinnedMesh){vn.setOptional(G,V,"bindMatrix"),vn.setOptional(G,V,"bindMatrixInverse");let qn=V.skeleton;qn&&(Be.floatVertexTextures?(qn.boneTexture===null&&qn.computeBoneTexture(),vn.setValue(G,"boneTexture",qn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(vn.setOptional(G,V,"batchingTexture"),vn.setValue(G,"batchingTexture",V._matricesTexture,C));let ol=H.morphAttributes;if((ol.position!==void 0||ol.normal!==void 0||ol.color!==void 0&&Be.isWebGL2===!0)&&nt.update(V,H,Cs),(po||ct.receiveShadow!==V.receiveShadow)&&(ct.receiveShadow=V.receiveShadow,vn.setValue(G,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Is.envMap.value=qe,Is.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),po&&(vn.setValue(G,"toneMappingExposure",g.toneMappingExposure),ct.needsLights&&Ot(Is,rl),ye&&X.fog===!0&&xe.refreshFogUniforms(Is,ye),xe.refreshMaterialUniforms(Is,X,Q,Y,we),Dr.upload(G,We(ct),Is,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Dr.upload(G,We(ct),Is,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vn.setValue(G,"center",V.center),vn.setValue(G,"modelViewMatrix",V.modelViewMatrix),vn.setValue(G,"normalMatrix",V.normalMatrix),vn.setValue(G,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let qn=X.uniformsGroups;for(let al=0,Em=qn.length;al<Em;al++)if(Be.isWebGL2){let rf=qn[al];dt.update(rf,Cs),dt.bind(rf,Cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cs}function Ot(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function nn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,O,H){tt.get(b.texture).__webglTexture=O,tt.get(b.depthTexture).__webglTexture=H;let X=tt.get(b);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){let H=tt.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,H=0){I=b,T=O,E=H;let X=!0,V=null,ye=!1,Se=!1;if(b){let qe=tt.get(b);qe.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(G.FRAMEBUFFER,null),X=!1):qe.__webglFramebuffer===void 0?C.setupRenderTarget(b):qe.__hasExternalTextures&&C.rebindTextures(b,tt.get(b.texture).__webglTexture,tt.get(b.depthTexture).__webglTexture);let ot=b.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Se=!0);let je=tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(je[O])?V=je[O][H]:V=je[O],ye=!0):Be.isWebGL2&&b.samples>0&&C.useMultisampledRTT(b)===!1?V=tt.get(b).__webglMultisampledFramebuffer:Array.isArray(je)?V=je[H]:V=je,R.copy(b.viewport),z.copy(b.scissor),F=b.scissorTest}else R.copy(te).multiplyScalar(Q).floor(),z.copy(re).multiplyScalar(Q).floor(),F=_e;if(Ee.bindFramebuffer(G.FRAMEBUFFER,V)&&Be.drawBuffers&&X&&Ee.drawBuffers(b,V),Ee.viewport(R),Ee.scissor(z),Ee.setScissorTest(F),ye){let qe=tt.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,qe.__webglTexture,H)}else if(Se){let qe=tt.get(b.texture),ot=O||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,qe.__webglTexture,H||0,ot)}N=-1},this.readRenderTargetPixels=function(b,O,H,X,V,ye,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(De=De[Se]),De){Ee.bindFramebuffer(G.FRAMEBUFFER,De);try{let qe=b.texture,ot=qe.format,je=qe.type;if(ot!==Kn&&ve.convert(ot)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let it=je===Vs&&(Le.has("EXT_color_buffer_half_float")||Be.isWebGL2&&Le.has("EXT_color_buffer_float"));if(je!==fs&&ve.convert(je)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===qi&&(Be.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-X&&H>=0&&H<=b.height-V&&G.readPixels(O,H,X,V,ve.convert(ot),ve.convert(je),ye)}finally{let qe=I!==null?tt.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(b,O,H=0){let X=Math.pow(2,-H),V=Math.floor(O.image.width*X),ye=Math.floor(O.image.height*X);C.setTexture2D(O,0),G.copyTexSubImage2D(G.TEXTURE_2D,H,0,0,b.x,b.y,V,ye),Ee.unbindTexture()},this.copyTextureToTexture=function(b,O,H,X=0){let V=O.image.width,ye=O.image.height,Se=ve.convert(H.format),De=ve.convert(H.type);C.setTexture2D(H,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,X,b.x,b.y,V,ye,Se,De,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,X,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Se,O.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,X,b.x,b.y,Se,De,O.image),X===0&&H.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(b,O,H,X,V=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ye=b.max.x-b.min.x+1,Se=b.max.y-b.min.y+1,De=b.max.z-b.min.z+1,qe=ve.convert(X.format),ot=ve.convert(X.type),je;if(X.isData3DTexture)C.setTexture3D(X,0),je=G.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)C.setTexture2DArray(X,0),je=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);let it=G.getParameter(G.UNPACK_ROW_LENGTH),qt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),kn=G.getParameter(G.UNPACK_SKIP_PIXELS),pn=G.getParameter(G.UNPACK_SKIP_ROWS),Fi=G.getParameter(G.UNPACK_SKIP_IMAGES),kt=H.isCompressedTexture?H.mipmaps[V]:H.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,kt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,kt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,b.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,b.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?G.texSubImage3D(je,V,O.x,O.y,O.z,ye,Se,De,qe,ot,kt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(je,V,O.x,O.y,O.z,ye,Se,De,qe,kt.data)):G.texSubImage3D(je,V,O.x,O.y,O.z,ye,Se,De,qe,ot,kt),G.pixelStorei(G.UNPACK_ROW_LENGTH,it),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kn),G.pixelStorei(G.UNPACK_SKIP_ROWS,pn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Fi),V===0&&X.generateMipmaps&&G.generateMipmap(je),Ee.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){T=0,E=0,I=null,Ee.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===zh?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===Ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Hs:cp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hs?gt:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},fh=class extends Xs{};fh.prototype.isWebGL1Renderer=!0;ms=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},kr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Cn=new w,qs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hr=class extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_o=new w,Sr=new w,Tr=new w,wr=new fe,vo=new fe,_p=new Je,Ca=new w,Mo=new w,Ia=new w,wd=new fe,Ol=new fe,Rd=new fe,Fo=class extends It{constructor(e=new Hr){if(super(),this.isSprite=!0,this.type="Sprite",Er===void 0){Er=new Wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kr(t,5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute("position",new qs(n,3,0,!1)),Er.setAttribute("uv",new qs(n,2,3,!1))}this.geometry=Er,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),_p.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-Tr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Pa(Ca.set(-.5,-.5,0),Tr,o,Sr,s,r),Pa(Mo.set(.5,-.5,0),Tr,o,Sr,s,r),Pa(Ia.set(.5,.5,0),Tr,o,Sr,s,r),wd.set(0,0),Ol.set(1,0),Rd.set(1,1);let a=e.ray.intersectTriangle(Ca,Mo,Ia,!1,_o);if(a===null&&(Pa(Mo.set(-.5,.5,0),Tr,o,Sr,s,r),Ol.set(0,1),a=e.ray.intersectTriangle(Ca,Ia,Mo,!1,_o),a===null))return;let c=e.ray.origin.distanceTo(_o);c<e.near||c>e.far||t.push({distance:c,point:_o.clone(),uv:Bs.getInterpolation(_o,Ca,Mo,Ia,wd,Ol,Rd,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Cd=new w,Id=new wt,Pd=new wt,Iv=new w,Ld=new Je,La=new w,Fl=new Gn,Dd=new Je,Bl=new Ws,nc=class extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ff,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ct),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(s),e.ray.intersectsSphere(Fl)!==!1&&(Dd.copy(s).invert(),Bl.copy(e.ray).applyMatrix4(Dd),!(this.boundingBox!==null&&Bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ff?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rA?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Id.fromBufferAttribute(s.attributes.skinIndex,e),Pd.fromBufferAttribute(s.attributes.skinWeight,e),Cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Pd.getComponent(r);if(o!==0){let a=Id.getComponent(r);Ld.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Iv.copy(Cd).applyMatrix4(Ld),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Bo=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ys=class extends _n{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Ht,h=Ht,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nd=new Je,Pv=new Je,ic=class i{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Pv;Nd.multiplyMatrices(a,t[r]),Nd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ys(t,e,e,Kn,qi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Bo),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ks=class extends rn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rr=new Je,Ud=new Je,Da=[],Od=new Ct,Lv=new Je,bo=new xt,Eo=new Gn,Vr=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ks(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),Od.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(Od)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),Eo.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(Eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(n),e.ray.intersectsSphere(Eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rr),Ud.multiplyMatrices(n,Rr),bo.matrixWorld=Ud,bo.raycast(e,Da);for(let o=0,a=Da.length;o<a;o++){let c=Da[o];c.instanceId=r,c.object=this,t.push(c)}Da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ks(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},js=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fd=new w,Bd=new w,zd=new Je,zl=new Ws,Na=new Gn,Gr=class extends It{constructor(e=new Wt,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fd.fromBufferAttribute(t,s-1),Bd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fd.distanceTo(Bd);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;zd.copy(s).invert(),zl.copy(e.ray).applyMatrix4(zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,h=new w,u=new w,f=new w,p=this.isLineSegments?2:1,A=n.index,m=n.attributes.position;if(A!==null){let d=Math.max(0,o.start),y=Math.min(A.count,o.start+o.count);for(let g=d,_=y-1;g<_;g+=p){let T=A.getX(g),E=A.getX(g+1);if(l.fromBufferAttribute(m,T),h.fromBufferAttribute(m,E),zl.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let g=d,_=y-1;g<_;g+=p){if(l.fromBufferAttribute(m,g),h.fromBufferAttribute(m,g+1),zl.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},kd=new w,Hd=new w,Wr=class extends Gr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)kd.fromBufferAttribute(t,s),Hd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kd.distanceTo(Hd);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sc=class extends Gr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},zo=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vd=new Je,dh=new Ws,Ua=new Gn,Oa=new w,rc=class extends It{constructor(e=new Wt,t=new zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;Vd.copy(s).invert(),dh.copy(e.ray).applyMatrix4(Vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let A=f,x=p;A<x;A++){let m=l.getX(A);Oa.fromBufferAttribute(u,m),Gd(Oa,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let A=f,x=p;A<x;A++)Oa.fromBufferAttribute(u,A),Gd(Oa,A,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};As=class extends _n{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new fe:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,s=[],r=[],o=[],a=new w,c=new Je;for(let p=0;p<=e;p++){let A=p/e;s[p]=this.getTangentAt(A,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let A=Math.acos(sn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,A))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(sn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let A=1;A<=e;A++)r[A].applyMatrix4(c.makeRotationAxis(s[A],p*A)),o[A].crossVectors(s[A],r[A])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ko=class extends Jn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new fe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ph=class extends ko{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Fa=new w,kl=new Vh,Hl=new Vh,Vl=new Vh,mh=class extends Jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new w){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Fa.subVectors(s[0],s[1]).add(s[0]),l=Fa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,A=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),A<1e-4&&(A=x),m<1e-4&&(m=x),kl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,A,x,m),Hl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,A,x,m),Vl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,A,x,m)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Hl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Vl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(kl.calc(c),Hl.calc(c),Vl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};oc=class extends Jn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lo(e,s.x,r.x,o.x,a.x),Lo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ah=class extends Jn{constructor(e=new w,t=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lo(e,s.x,r.x,o.x,a.x),Lo(e,s.y,r.y,o.y,a.y),Lo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends Jn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gh=class extends Jn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends Jn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xh=class extends Jn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y),Po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Wd(a,c.x,l.x,h.x,u.x),Wd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Xd=Object.freeze({__proto__:null,ArcCurve:ph,CatmullRomCurve3:mh,CubicBezierCurve:oc,CubicBezierCurve3:Ah,EllipseCurve:ko,LineCurve:ac,LineCurve3:gh,QuadraticBezierCurve:cc,QuadraticBezierCurve3:xh,SplineCurve:lc}),yh=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xd[s.type]().fromJSON(s))}return this}},_h=class extends yh{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ac(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new cc(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new oc(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new lc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new ko(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ho=class i extends Wt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=sn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new w,f=new fe,p=new w,A=new w,x=new w,m=0,d=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,p.x=d*1,p.y=-m,p.z=d*0,A.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(A)}for(let y=0;y<=t;y++){let g=n+y*h*s,_=Math.sin(g),T=Math.cos(g);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*T,o.push(u.x,u.y,u.z),f.x=y/t,f.y=E/(e.length-1),a.push(f.x,f.y);let I=c[3*E+0]*_,N=c[3*E+1],v=c[3*E+0]*T;l.push(I,N,v)}}for(let y=0;y<t;y++)for(let g=0;g<e.length-1;g++){let _=g+y*e.length,T=_,E=_+e.length,I=_+e.length+1,N=_+1;r.push(T,E,N),r.push(I,N,E)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ki=class i extends Ho{constructor(e=1,t=1,n=4,s=8){let r=new _h;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Xr=class i extends Wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new w,h=new fe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},st=class i extends Wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],A=0,x=[],m=n/2,d=0;y(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(p,2));function y(){let _=new w,T=new w,E=0,I=(t-e)/n;for(let N=0;N<=r;N++){let v=[],R=N/r,z=R*(t-e)+e;for(let F=0;F<=s;F++){let Z=F/s,P=Z*c+a,B=Math.sin(P),Y=Math.cos(P);T.x=z*B,T.y=-R*n+m,T.z=z*Y,u.push(T.x,T.y,T.z),_.set(B,I,Y).normalize(),f.push(_.x,_.y,_.z),p.push(Z,1-R),v.push(A++)}x.push(v)}for(let N=0;N<s;N++)for(let v=0;v<r;v++){let R=x[v][N],z=x[v+1][N],F=x[v+1][N+1],Z=x[v][N+1];h.push(R,z,Z),h.push(z,F,Z),E+=6}l.addGroup(d,E,0),d+=E}function g(_){let T=A,E=new fe,I=new w,N=0,v=_===!0?e:t,R=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*R,0),f.push(0,R,0),p.push(.5,.5),A++;let z=A;for(let F=0;F<=s;F++){let P=F/s*c+a,B=Math.cos(P),Y=Math.sin(P);I.x=v*Y,I.y=m*R,I.z=v*B,u.push(I.x,I.y,I.z),f.push(0,R,0),E.x=B*.5+.5,E.y=Y*.5*R+.5,p.push(E.x,E.y),A++}for(let F=0;F<s;F++){let Z=T+F,P=z+F;_===!0?h.push(P,P+1,Z):h.push(P+1,P,Z),N+=3}l.addGroup(d,N,_===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wi=class i extends st{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hc=class i extends Wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let g=new w,_=new w,T=new w;for(let E=0;E<t.length;E+=3)p(t[E+0],g),p(t[E+1],_),p(t[E+2],T),c(g,_,T,y)}function c(y,g,_,T){let E=T+1,I=[];for(let N=0;N<=E;N++){I[N]=[];let v=y.clone().lerp(_,N/E),R=g.clone().lerp(_,N/E),z=E-N;for(let F=0;F<=z;F++)F===0&&N===E?I[N][F]=v:I[N][F]=v.clone().lerp(R,F/z)}for(let N=0;N<E;N++)for(let v=0;v<2*(E-N)-1;v++){let R=Math.floor(v/2);v%2===0?(f(I[N][R+1]),f(I[N+1][R]),f(I[N][R])):(f(I[N][R+1]),f(I[N+1][R+1]),f(I[N+1][R]))}}function l(y){let g=new w;for(let _=0;_<r.length;_+=3)g.x=r[_+0],g.y=r[_+1],g.z=r[_+2],g.normalize().multiplyScalar(y),r[_+0]=g.x,r[_+1]=g.y,r[_+2]=g.z}function h(){let y=new w;for(let g=0;g<r.length;g+=3){y.x=r[g+0],y.y=r[g+1],y.z=r[g+2];let _=m(y)/2/Math.PI+.5,T=d(y)/Math.PI+.5;o.push(_,1-T)}A(),u()}function u(){for(let y=0;y<o.length;y+=6){let g=o[y+0],_=o[y+2],T=o[y+4],E=Math.max(g,_,T),I=Math.min(g,_,T);E>.9&&I<.1&&(g<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,g){let _=y*3;g.x=e[_+0],g.y=e[_+1],g.z=e[_+2]}function A(){let y=new w,g=new w,_=new w,T=new w,E=new fe,I=new fe,N=new fe;for(let v=0,R=0;v<r.length;v+=9,R+=6){y.set(r[v+0],r[v+1],r[v+2]),g.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),E.set(o[R+0],o[R+1]),I.set(o[R+2],o[R+3]),N.set(o[R+4],o[R+5]),T.copy(y).add(g).add(_).divideScalar(3);let z=m(T);x(E,R+0,y,z),x(I,R+2,g,z),x(N,R+4,_,z)}}function x(y,g,_,T){T<0&&y.x===1&&(o[g]=y.x-1),_.x===0&&_.z===0&&(o[g]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},uc=class i extends hc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},fc=class i extends hc{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},dc=class i extends Wt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/s,p=new w,A=new fe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),A.x=(p.x/t+1)/2,A.y=(p.y/t+1)/2,h.push(A.x,A.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let d=0;d<n;d++){let y=d+m,g=y,_=y+n+1,T=y+n+2,E=y+1;a.push(g,_,E),a.push(_,T,E)}}this.setIndex(a),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Pt=class i extends Wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new w,f=new w,p=[],A=[],x=[],m=[];for(let d=0;d<=n;d++){let y=[],g=d/n,_=0;d===0&&o===0?_=.5/t:d===n&&c===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+g*a),u.y=e*Math.cos(o+g*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+g*a),A.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+_,1-g),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let g=h[d][y+1],_=h[d][y],T=h[d+1][y],E=h[d+1][y+1];(d!==0||o>0)&&p.push(g,_,E),(d!==n-1||c<Math.PI)&&p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new pt(A,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},hn=class i extends Wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new w,u=new w,f=new w;for(let p=0;p<=n;p++)for(let A=0;A<=s;A++){let x=A/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(A/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let A=1;A<=s;A++){let x=(s+1)*p+A-1,m=(s+1)*(p-1)+A-1,d=(s+1)*(p-1)+A,y=(s+1)*p+A;o.push(x,m,y),o.push(m,d,y)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},pi=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$n=class extends pi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},qr=class extends Ln{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vh=class extends gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bf,endingEnd:Bf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zf:r=e,a=2*t-n;break;case kf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zf:o=e,c=2*n-t;break;case kf:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,A=(n-t)/(s-t),x=A*A,m=x*A,d=-f*m+2*f*x-f*A,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*A+1,g=(-1-p)*m+(1.5+p)*x+.5*A,_=p*m-p*x;for(let T=0;T!==a;++T)r[T]=d*o[h+T]+y*o[l+T]+g*o[c+T]+_*o[u+T];return r}},Mh=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},bh=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&kv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let A=0;A!==n;++A){let x=t[u+A];if(x!==t[f+A]||x!==t[p+A]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Gs;xs=class extends Qn{};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Fr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;pc=class extends Qn{};pc.prototype.ValueTypeName="color";ji=class extends Qn{};ji.prototype.ValueTypeName="number";Eh=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ri=class extends Qn{InterpolantFactoryMethodLinear(e){return new Eh(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.DefaultInterpolation=Gs;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;ys=class extends Qn{};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Fr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;Zi=class extends Qn{};Zi.prototype.ValueTypeName="vector";mc=class{constructor(e,t=-1,n,s=dA){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Gv(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Qn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Hv(c);c=qd(c,1,h),l=qd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ji(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,A,x){if(p.length!==0){let m=[],d=[];vp(p,m,d,A),m.length!==0&&x.push(new u(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},A;for(A=0;A<f.length;A++)if(f[A].morphTargets)for(let x=0;x<f[A].morphTargets.length;x++)p[f[A].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let y=0;y!==f[A].morphTargets.length;++y){let g=f[A];m.push(g.time),d.push(g.morphTarget===x?1:0)}s.push(new ji(".morphTargetInfluence["+x+"]",m,d))}c=p.length*o}else{let p=".bones["+t[u].name+"]";n(Zi,p+".position",f,"pos",s),n(Ri,p+".quaternion",f,"rot",s),n(Zi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};ls={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Sh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],A=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return A}return null}}},Wv=new Sh,Ji=class{constructor(e){this.manager=e!==void 0?e:Wv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";Gi={},Th=class extends Error{constructor(e,t){super(e),this.response=t}},Vo=class extends Ji{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ls.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Gi[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,A=p!==0,x=0,m=new ReadableStream({start(d){y();function y(){u.read().then(({done:g,value:_})=>{if(g)d.close();else{x+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:A,loaded:x,total:p});for(let E=0,I=h.length;E<I;E++){let N=h[E];N.onProgress&&N.onProgress(T)}d.enqueue(_),y()}})}}});return new Response(m)}else throw new Th(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(A=>p.decode(A))}}}).then(l=>{ls.add(e,l);let h=Gi[e];delete Gi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Gi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Gi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},wh=class extends Ji{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ls.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=No("img");function c(){h(),ls.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},Ac=class extends Ji{constructor(e){super(e)}load(e,t,n,s){let r=new _n,o=new wh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Zs=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},gc=class extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gl=new Je,Yd=new w,Kd=new w,Go=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yd),Kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kd),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rh=class extends Go{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Br*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xc=class extends Zs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jd=new Je,So=new w,Wl=new w,Ch=class extends Go{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),So.setFromMatrixPosition(e.matrixWorld),n.position.copy(So),Wl.copy(n.position),Wl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wl),n.updateMatrixWorld(),s.makeTranslation(-So.x,-So.y,-So.z),jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd)}},Ci=class extends Zs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ih=class extends Go{constructor(){super(new Ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Ih}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},yc=class extends Zs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},vs=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},_c=class extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ls.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ls.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ls.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ls.add(e,c),r.manager.itemStart(e)}},Gh="\\[\\]\\.:\\/",Xv=new RegExp("["+Gh+"]","g"),Wh="[^"+Gh+"]",qv="[^"+Gh.replace("\\.","")+"]",Yv=/((?:WC+[\/:])*)/.source.replace("WC",Wh),Kv=/(WCOD+)?/.source.replace("WCOD",qv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),Zv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),Jv=new RegExp("^"+Yv+Kv+jv+Zv+"$"),$v=["material","materials","bones","map"],Ph=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xv,"")}static parseTrackName(e){let t=Jv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$v.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Ph;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];vM=new Float32Array(1),vc=class{constructor(e,t,n=0,s=1/0){this.ray=new Ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Lh(e,this,n,t),n.sort(Zd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Lh(e[s],this,n,t);return n.sort(Zd),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh)});function Xh(i,e){if(e===ap)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Xo||e===bc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Xo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Mp=Tt(()=>{Bn()});function Qv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function n1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new pi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),i.DefaultMaterial}function Js(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bs(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function i1(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function s1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function r1(i){let e,t=i.extensions&&i.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kh(t.attributes):e=i.indices+":"+Kh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Kh(i.targets[n]);return e}function Kh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function xu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function o1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function c1(i,e,t){let n=e.attributes,s=new Ct;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){let h=xu(Kr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new w,c=new w;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,A=f.max;if(p!==void 0&&A!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(A[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(A[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(A[2]))),f.normalized){let x=xu(Kr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Gn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Tp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=gu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return At.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${At.workingColorSpace}" not supported.`),bs(i,e),c1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?i1(i,e.targets,t):i})}var Tc,ut,jh,Zh,Jh,$h,Qh,eu,tu,nu,iu,su,ru,ou,au,cu,lu,hu,uu,wp,qo,bp,fu,du,pu,mu,wc,e1,Au,ei,Kr,Ep,Sp,qh,gu,Ms,t1,Yh,a1,yu,Rp=Tt(()=>{Bn();Mp();Tc=class extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $h(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=vs.extractUrlBase(e);o=vs.resolveURL(l,this.path)}else o=vs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Vo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wp){try{o[ut.KHR_BINARY_GLTF]=new fu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ut.KHR_MATERIALS_UNLIT:o[u]=new Zh;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[u]=new du(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[u]=new pu;break;case ut.KHR_MESH_QUANTIZATION:o[u]=new mu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},jh=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ie(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],on);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new _s(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ci(h),l.distance=u;break;case"spot":l=new xc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,bs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Zh=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(s)}},Jh=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(a,a)}return Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],on),Promise.all(r)}},iu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gt)),Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},ou=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},cu=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},lu=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},hu=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},uu=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ei.TRIANGLES&&l.mode!==ei.TRIANGLE_STRIP&&l.mode!==ei.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let A of u){let x=new Je,m=new w,d=new an,y=new w(1,1,1),g=new Vr(A.geometry,A.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),g.setMatrixAt(_,x.compose(m,d,y));for(let _ in c)if(_==="_COLOR_0"){let T=c[_];g.instanceColor=new Ks(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&A.geometry.setAttribute(_,c[_]);It.prototype.copy.call(g,A),this.parser.assignFinalMaterial(g),p.push(g)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},wp="glTF",qo=12,bp={JSON:1313821514,BIN:5130562},fu=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,qo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-qo,r=new DataView(e,qo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===bp.JSON){let l=new Uint8Array(e,qo+o,a);this.content=n.decode(l)}else if(c===bp.BIN){let l=qo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},du=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=gu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=gu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],p=Kr[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let A in p.attributes){let x=p.attributes[A],m=c[A];m!==void 0&&(x.normalized=m)}u(p)},a,l,on,f)})})}},pu=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},mu=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},wc=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,A=e*l,x=A-l,m=-2*p+3*f,d=p-f,y=1-m,g=d-f+u;for(let _=0;_!==a;_++){let T=o[x+_+a],E=o[x+_+c]*h,I=o[A+_+a],N=o[A+_]*h;r[_]=y*T+g*E+m*I+d*N}return r}},e1=new an,Au=class extends wc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return e1.fromArray(r).normalize().toArray(r),r}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ep={9728:Ht,9729:Pn,9984:ka,9985:Oh,9986:To,9987:ds},Sp={33071:An,33648:Do,10497:ui},qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},t1={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Fr},Yh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};a1=new Je,yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Ac(this.options.manager):this.textureLoader=new _c(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Js(r,a,s),bs(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(vs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=qh[s.type],a=Kr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new rn(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=qh[s.type],l=Kr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,A=s.normalized===!0,x,m;if(p&&p!==u){let d=Math.floor(f/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,g=t.cache.get(y);g||(x=new l(a,d*p,s.count*p/h),g=new kr(x,p/h),t.cache.add(y,g)),m=new qs(g,c,f%p/h,A)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new rn(x,c,A);if(s.sparse!==void 0){let d=qh.SCALAR,y=Kr[s.sparse.indices.componentType],g=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,T=new y(o[1],g,s.sparse.count*d),E=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new rn(m.array.slice(),m.itemSize,m.normalized));for(let I=0,N=T.length;I<N;I++){let v=T[I];if(m.setX(v,E[I*c]),c>=2&&m.setY(v,E[I*c+1]),c>=3&&m.setZ(v,E[I*c+2]),c>=4&&m.setW(v,E[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ep[f.magFilter]||Pn,h.minFilter=Ep[f.minFilter]||ds,h.wrapS=Sp[f.wrapS]||ui,h.wrapT=Sp[f.wrapT]||ui,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let A=f;t.isImageBitmapLoader===!0&&(A=function(x){let m=new _n(x);m.needsUpdate=!0,f(m)}),t.load(vs.resolveURL(u,r.path),A,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||o1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new zo,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new js,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return pi}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ut.KHR_MATERIALS_UNLIT]){let u=s[ut.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],on),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Fn);let h=r.alphaMode||Yh.OPAQUE;if(h===Yh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Yh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Jt){let u=r.emissiveFactor;a.emissive=new Ie().setRGB(u[0],u[1],u[2],on)}return r.emissiveTexture!==void 0&&o!==Jt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),bs(u,r),t.associations.set(u,{materials:e}),r.extensions&&Js(s,u,r),u})}createUniqueName(e){let t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Tp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=r1(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Tp(new Wt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?n1(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,A=h.length;p<A;p++){let x=h[p],m=o[p],d,y=l[p];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new nc(x,y):new xt(x,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===ei.TRIANGLE_STRIP?d.geometry=Xh(d.geometry,bc):m.mode===ei.TRIANGLE_FAN&&(d.geometry=Xh(d.geometry,Xo));else if(m.mode===ei.LINES)d=new Wr(x,y);else if(m.mode===ei.LINE_STRIP)d=new Gr(x,y);else if(m.mode===ei.LINE_LOOP)d=new sc(x,y);else if(m.mode===ei.POINTS)d=new rc(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&s1(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),bs(d,r),m.extensions&&Js(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,A=u.length;p<A;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Js(s,u[0],r),u[0];let f=new Ze;r.extensions&&Js(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,A=u.length;p<A;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(hp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Je;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ic(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],A=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[A.input]:A.input,y=s.parameters!==void 0?s.parameters[A.output]:A.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",y)),l.push(A),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],A=u[2],x=u[3],m=u[4],d=[];for(let y=0,g=f.length;y<g;y++){let _=f[y],T=p[y],E=A[y],I=x[y],N=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let v=n._createAnimationTracks(_,T,E,I,N);if(v)for(let R=0;R<v.length;R++)d.push(v[R])}return new mc(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,a1)});for(let p=0,A=u.length;p<A;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Bo:l.length>1?h=new Ze:l.length===1?h=l[0]:h=new It,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),bs(h,r),r.extensions&&Js(n,h,r),r.matrix!==void 0){let u=new Je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ze;n.name&&(r.name=s.createUniqueName(n.name)),bs(r,n),n.extensions&&Js(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof Ln||f instanceof _n)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Ms[r.path]===Ms.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Ms[r.path]){case Ms.weights:l=ji;break;case Ms.rotation:l=Ri;break;case Ms.position:case Ms.scale:l=Zi;break;default:switch(n.itemSize){case 1:l=ji;break;case 2:case 3:default:l=Zi;break}break}let h=s.interpolation!==void 0?t1[s.interpolation]:Gs,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let A=new l(c[f]+"."+Ms[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(A),o.push(A)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=xu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ri?Au:wc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function Cp(i){let e=new Map,t=new Map,n=i.clone();return Ip(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ip(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ip(i.children[n],e.children[n],t)}var Pp=Tt(()=>{});var Lp,Dp=Tt(()=>{Lp={tvCabinet:"Z2xURgIAAAB4IAAAxAMAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjUuMSIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiVkVDMyIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyMjgsIm1heCI6WzAuODAwMDAwMDExOTIwOTI5LDAuMzEwMDAwMDAyMzg0MTg1OCwwXSwibWluIjpbMCwwLC0wLjI1XSwiYnVmZmVyVmlldyI6MCwiYnl0ZU9mZnNldCI6MH0seyJ0eXBlIjoiVkVDMyIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyMjgsImJ1ZmZlclZpZXciOjAsImJ5dGVPZmZzZXQiOjEyfSx7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTI1LCJjb3VudCI6NDYyLCJidWZmZXJWaWV3IjoxLCJieXRlT2Zmc2V0IjowfV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVPZmZzZXQiOjAsImJ5dGVMZW5ndGgiOjU0NzIsImJ5dGVTdHJpZGUiOjI0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZU9mZnNldCI6NTQ3MiwiYnl0ZUxlbmd0aCI6MTg0OCwidGFyZ2V0IjozNDk2M31dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo3MzIwfV0sIm1hdGVyaWFscyI6W3sibmFtZSI6Indvb2QiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjg5NjIyNjQsMC42MDE1NzEyLDAuMzkzMTU1OSwxXSwibWV0YWxsaWNGYWN0b3IiOjB9fV0sIm1lc2hlcyI6W3sibmFtZSI6Ik1lc2ggY2FiaW5ldFRlbGV2aXNpb24iLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjF9LCJtb2RlIjo0LCJtYXRlcmlhbCI6MCwiaW5kaWNlcyI6Mn1dfV0sIm5vZGVzIjpbeyJuYW1lIjoiY2FiaW5ldFRlbGV2aXNpb24oQ2xvbmUpIiwibWVzaCI6MH1dLCJzY2VuZXMiOlt7Im5vZGVzIjpbMF19XSwic2NlbmUiOjAsImV4dGVuc2lvbnNVc2VkIjpbIktIUl9tYXRlcmlhbHNfdW5saXQiXX0gmBwAAEJJTgAAAAAAvw4cJArXI70AAAAAAAAAAAAAgL8K1yM9vw4cJArXI70AAAAAAAAAAAAAgL8AAAAACtcjPQrXI70AAAAAAAAAAAAAgL8K1yM9CtcjPQrXI70AAAAAAAAAAAAAgL8K1yM9AAAAAAAAAIAAAIA/AAAAAAAAAIAK1yM9CtcjPQAAAIAAAIA/AAAAAAAAAIAK1yM9vw4cJArXI70AAIA/AAAAAAAAAIAK1yM9CtcjPQrXI70AAIA/AAAAAAAAAIAAAAAAvw4cJArXI70AAAAAAACAvwAAAIAAAAAAAAAAAAAAAIAAAAAAAACAvwAAAIAK1yM9vw4cJArXI70AAAAAAACAvwAAAIAK1yM9AAAAAAAAAIAAAAAAAACAvwAAAIAAAAAAIY6VJQAAgL4AAAAAAACAvwAAAIAAAAAAWRd3JT0KV74AAAAAAACAvwAAAIAK1yM9IY6VJQAAgL4AAAAAAACAvwAAAIAK1yM9WRd3JT0KV74AAAAAAACAvwAAAIAK1yM9CtcjPT0KV74AAIA/AAAAAAAAAIAK1yM9CtcjPQAAgL4AAIA/AAAAAAAAAIAK1yM9WRd3JT0KV74AAIA/AAAAAAAAAIAK1yM9IY6VJQAAgL4AAIA/AAAAAAAAAIAK1yM9cD2KPj0KV74AAAAAAACAvwAAAIAK1yM9cD2KPgAAAIAAAAAAAACAvwAAAIBcj0I/cD2KPj0KV74AAAAAAACAvwAAAIAVrsc+cD2KPs3MTL0AAAAAAACAvwAAAICG69E+cD2KPs3MTL0AAAAAAACAvwAAAICG69E+cD2KPpDC9bwAAAAAAACAvwAAAIAVrsc+cD2KPpDC9bwAAAAAAACAvwAAAIBcj0I/cD2KPgAAAIAAAAAAAACAvwAAAIAK1yM9CtejPT0KV74AAAAAAACAPwAAAIAVrsc+CtejPZDC9bwAAAAAAACAPwAAAIAK1yM9CtejPQAAAIAAAAAAAACAPwAAAIBcj0I/CtejPQAAAIAAAAAAAACAPwAAAICG69E+CtejPZDC9bwAAAAAAACAPwAAAICG69E+CtejPc3MTL0AAAAAAACAPwAAAIAVrsc+CtejPc3MTL0AAAAAAACAPwAAAIBcj0I/CtejPT0KV74AAAAAAACAPwAAAIAK1yM9WRd3JT0KV74AAAAAAAAAAAAAgD8AAAAAWRd3JT0KV74AAAAAAAAAAAAAgD8K1yM9CtcjPT0KV74AAAAAAAAAAAAAgD8AAAAACtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/SgyCJArXI70AAAAAAACAvwAAAIBcj0I/SgyCJKkT0KUAAAAAAACAvwAAAIDNzEw/SgyCJArXI70AAAAAAACAvwAAAIDNzEw/SgyCJKkT0KUAAAAAAACAvwAAAIBcj0I/SgyCJArXI70AAAAAAAAAAAAAgL/NzEw/SgyCJArXI70AAAAAAAAAAAAAgL9cj0I/CtcjPQrXI70AAAAAAAAAAAAAgL/NzEw/CtcjPQrXI70AAAAAAAAAAAAAgL9cj0I/CtcjPT0KV74AAIC/AAAAAAAAAIBcj0I/54yIJT0KV74AAIC/AAAAAAAAAIBcj0I/CtcjPQAAgL4AAIC/AAAAAAAAAIBcj0I/54yIJQAAgL4AAIC/AAAAAAAAAIDNzEw/54yIJT0KV74AAAAAAAAAAAAAgD9cj0I/54yIJT0KV74AAAAAAAAAAAAAgD/NzEw/CtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/CtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/54yIJQAAgL4AAAAAAACAvwAAAIBcj0I/54yIJT0KV74AAAAAAACAvwAAAIDNzEw/54yIJQAAgL4AAAAAAACAvwAAAIDNzEw/54yIJT0KV74AAAAAAACAvwAAAIAAAAAAUriePgAAAIAAAAAAAACAPwAAAIAAAAAAUriePgAAgL4AAAAAAACAPwAAAIDNzEw/UriePgAAAIAAAAAAAACAPwAAAIDNzEw/UriePgAAgL4AAAAAAACAPwAAAIAAAAAAUriePgAAAIAAAIC/AAAAAAAAAIAAAAAAAAAAAAAAAIAAAIC/AAAAAAAAAIAAAAAAUriePgAAgL4AAIC/AAAAAAAAAIAAAAAACtcjPQrXI70AAIC/AAAAAAAAAIAAAAAACtcjPT0KV74AAIC/AAAAAAAAAIAAAAAAWRd3JT0KV74AAIC/AAAAAAAAAIAAAAAAIY6VJQAAgL4AAIC/AAAAAAAAAIAAAAAAvw4cJArXI70AAIC/AAAAAAAAAIAAAAAAIY6VJQAAgL4AAAAAAAAAAAAAgL8K1yM9IY6VJQAAgL4AAAAAAAAAAAAAgL8AAAAAUriePgAAgL4AAAAAAAAAAAAAgL8K1yM9CtcjPQAAgL4AAAAAAAAAAAAAgL9cj0I/CtcjPQAAgL4AAAAAAAAAAAAAgL/NzEw/UriePgAAgL4AAAAAAAAAAAAAgL/NzEw/54yIJQAAgL4AAAAAAAAAAAAAgL9cj0I/54yIJQAAgL4AAAAAAAAAAAAAgL/NzEw/SgyCJKkT0KUAAIA/AAAAAAAAAIDNzEw/CtcjPQrXI70AAIA/AAAAAAAAAIDNzEw/SgyCJArXI70AAIA/AAAAAAAAAIDNzEw/UriePgAAgL4AAIA/AAAAAAAAAIDNzEw/UriePgAAAIAAAIA/AAAAAAAAAIDNzEw/CtcjPT0KV74AAIA/AAAAAAAAAIDNzEw/54yIJT0KV74AAIA/AAAAAAAAAIDNzEw/54yIJQAAgL4AAIA/AAAAAAAAAIDNzEw/SgyCJKkT0KUAAAAAAAAAAAAAgD9cj0I/SgyCJKkT0KUAAAAAAAAAAAAAgD/NzEw/UriePgAAAIAAAAAAAAAAAAAAgD9cj0I/CtcjPQAAAIAAAAAAAAAAAAAAgD9cj0I/CtejPQAAAIAAAAAAAAAAAAAAgD8K1yM9CtcjPQAAAIAAAAAAAAAAAAAAgD9cj0I/cD2KPgAAAIAAAAAAAAAAAAAAgD8K1yM9cD2KPgAAAIAAAAAAAAAAAAAAgD8K1yM9CtejPQAAAIAAAAAAAAAAAAAAgD8AAAAAUriePgAAAIAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAAIAAAAAAAAAAAAAAgD8K1yM9AAAAAAAAAIAAAAAAAAAAAAAAgD8K1yM9wvUoPj0KV74AAAAAAACAvwAAAIAK1yM9wvUoPpDC9bwAAAAAAACAvwAAAIBcj0I/wvUoPj0KV74AAAAAAACAvwAAAIAVrsc+wvUoPs3MTL0AAAAAAACAvwAAAICG69E+wvUoPs3MTL0AAAAAAACAvwAAAICG69E+wvUoPpDC9bwAAAAAAACAvwAAAIBcj0I/wvUoPpDC9bwAAAAAAACAvwAAAIAVrsc+wvUoPpDC9bwAAAAAAACAvwAAAICG69E+o3A9PpDC9bwAAAAAAACAPwAAAICG69E+o3A9Ps3MTL0AAAAAAACAPwAAAIBcj0I/o3A9PpDC9bwAAAAAAACAPwAAAIBcj0I/o3A9Pj0KV74AAAAAAACAPwAAAIAVrsc+o3A9Ps3MTL0AAAAAAACAPwAAAIAK1yM9o3A9Pj0KV74AAAAAAACAPwAAAIAVrsc+o3A9PpDC9bwAAAAAAACAPwAAAIAK1yM9o3A9PpDC9bwAAAAAAACAPwAAAIBcj0I/o3A9Pj0KV74AAAAAAAAAAAAAgD8K1yM9o3A9Pj0KV74AAAAAAAAAAAAAgD9cj0I/cD2KPj0KV74AAAAAAAAAAAAAgD8K1yM9cD2KPj0KV74AAAAAAAAAAAAAgD9cj0I/CtejPT0KV74AAAAAAAAAAAAAgD8K1yM9CtejPT0KV74AAAAAAAAAAAAAgD9cj0I/wvUoPj0KV74AAAAAAAAAAAAAgD8K1yM9wvUoPj0KV74AAAAAAAAAAAAAgD9cj0I/CtcjPT0KV74AAAAAAACAvwAAAIBcj0I/CtcjPQrXI70AAAAAAACAvwAAAIDNzEw/CtcjPT0KV74AAAAAAACAvwAAAIDNzEw/CtcjPQrXI70AAAAAAACAvwAAAIBcj0I/CtcjPQAAAIAAAAAAAACAvwAAAIBcj0I/CtcjPQAAgL4AAAAAAACAvwAAAIAK1yM9CtcjPQAAAIAAAAAAAACAvwAAAIAK1yM9CtcjPQrXI70AAAAAAACAvwAAAIAK1yM9CtcjPT0KV74AAAAAAACAvwAAAIAK1yM9CtcjPQAAgL4AAAAAAACAvwAAAIAAAAAACtcjPQrXI70AAAAAAACAvwAAAIAAAAAACtcjPT0KV74AAAAAAACAvwAAAIBcj0I/CtcjPQAAAIAAAIC/AAAAAAAAAIBcj0I/SgyCJKkT0KUAAIC/AAAAAAAAAIBcj0I/CtcjPQrXI70AAIC/AAAAAAAAAIBcj0I/SgyCJArXI70AAIC/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAAAAAAAAAAAAgL+G69E+o3A9PpDC9bwAAAAAAAAAAAAAgL8Vrsc+cD2KPpDC9bwAAAAAAAAAAAAAgL+G69E+cD2KPpDC9bwAAAAAAAAAAAAAgL9cj0I/o3A9PpDC9bwAAAAAAAAAAAAAgL8K1yM9o3A9PpDC9bwAAAAAAAAAAAAAgL9cj0I/wvUoPpDC9bwAAAAAAAAAAAAAgL+G69E+wvUoPpDC9bwAAAAAAAAAAAAAgL8Vrsc+wvUoPpDC9bwAAAAAAAAAAAAAgL8K1yM9wvUoPpDC9bwAAAAAAAAAAAAAgL8Vrsc+CtejPZDC9bwAAAAAAAAAAAAAgL+G69E+CtejPZDC9bwAAAAAAAAAAAAAgL8Vrsc+cD2KPpDC9bwAAAAAAAAAAAAAgD+G69E+o3A9PpDC9bwAAAAAAAAAAAAAgD8Vrsc+o3A9PpDC9bwAAAAAAAAAAAAAgD+G69E+cD2KPpDC9bwAAAAAAAAAAAAAgD9cj0I/o3A9PpDC9bwAAAAAAAAAAAAAgD8K1yM9o3A9PpDC9bwAAAAAAAAAAAAAgD9cj0I/wvUoPpDC9bwAAAAAAAAAAAAAgD+G69E+wvUoPpDC9bwAAAAAAAAAAAAAgD8Vrsc+wvUoPpDC9bwAAAAAAAAAAAAAgD8K1yM9wvUoPpDC9bwAAAAAAAAAAAAAgD8Vrsc+CtejPZDC9bwAAAAAAAAAAAAAgD+G69E+CtejPZDC9bwAAAAAAAAAAAAAgD8K1yM9cD2KPgAAAIAAAIA/AAAAAAAAAIAK1yM9wvUoPpDC9bwAAIA/AAAAAAAAAIAK1yM9CtejPQAAAIAAAIA/AAAAAAAAAIAK1yM9CtejPT0KV74AAIA/AAAAAAAAAIAK1yM9wvUoPj0KV74AAIA/AAAAAAAAAIAK1yM9o3A9PpDC9bwAAIA/AAAAAAAAAIAK1yM9cD2KPj0KV74AAIA/AAAAAAAAAIAK1yM9o3A9Pj0KV74AAIA/AAAAAAAAAIBcj0I/CtejPQAAAIAAAIC/AAAAAAAAAIBcj0I/o3A9PpDC9bwAAIC/AAAAAAAAAIBcj0I/cD2KPgAAAIAAAIC/AAAAAAAAAIBcj0I/cD2KPj0KV74AAIC/AAAAAAAAAIBcj0I/o3A9Pj0KV74AAIC/AAAAAAAAAIBcj0I/wvUoPpDC9bwAAIC/AAAAAAAAAIBcj0I/CtejPT0KV74AAIC/AAAAAAAAAIBcj0I/wvUoPj0KV74AAIC/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAAAAAAAAAAAAgL+G69E+o3A9Ps3MTL0AAAAAAAAAAAAAgL8Vrsc+cD2KPs3MTL0AAAAAAAAAAAAAgL+G69E+cD2KPs3MTL0AAAAAAAAAAAAAgL8Vrsc+cD2KPs3MTL0AAAAAAAAAAAAAgD+G69E+o3A9Ps3MTL0AAAAAAAAAAAAAgD8Vrsc+o3A9Ps3MTL0AAAAAAAAAAAAAgD+G69E+cD2KPs3MTL0AAAAAAAAAAAAAgD+G69E+o3A9PpDC9bwAAIA/AAAAAAAAAICG69E+cD2KPpDC9bwAAIA/AAAAAAAAAICG69E+o3A9Ps3MTL0AAIA/AAAAAAAAAICG69E+cD2KPs3MTL0AAIA/AAAAAAAAAICG69E+o3A9Ps3MTL0AAIC/AAAAAAAAAICG69E+cD2KPpDC9bwAAIC/AAAAAAAAAICG69E+o3A9PpDC9bwAAIC/AAAAAAAAAICG69E+cD2KPs3MTL0AAIC/AAAAAAAAAIAVrsc+cD2KPpDC9bwAAIC/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAIC/AAAAAAAAAIAVrsc+cD2KPs3MTL0AAIC/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAIC/AAAAAAAAAIAVrsc+cD2KPs3MTL0AAIA/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAIA/AAAAAAAAAIAVrsc+cD2KPpDC9bwAAIA/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAAAAAAAAAAAAgL+G69E+wvUoPs3MTL0AAAAAAAAAAAAAgL8Vrsc+CtejPc3MTL0AAAAAAAAAAAAAgL8Vrsc+wvUoPs3MTL0AAAAAAAAAAAAAgL8Vrsc+CtejPc3MTL0AAAAAAAAAAAAAgD+G69E+wvUoPs3MTL0AAAAAAAAAAAAAgD+G69E+CtejPc3MTL0AAAAAAAAAAAAAgD8Vrsc+wvUoPs3MTL0AAAAAAAAAAAAAgD8Vrsc+wvUoPpDC9bwAAIC/AAAAAAAAAIAVrsc+CtejPZDC9bwAAIC/AAAAAAAAAIAVrsc+wvUoPs3MTL0AAIC/AAAAAAAAAIAVrsc+CtejPc3MTL0AAIC/AAAAAAAAAIAVrsc+wvUoPs3MTL0AAIA/AAAAAAAAAIAVrsc+CtejPZDC9bwAAIA/AAAAAAAAAIAVrsc+wvUoPpDC9bwAAIA/AAAAAAAAAIAVrsc+CtejPc3MTL0AAIA/AAAAAAAAAICG69E+CtejPZDC9bwAAIA/AAAAAAAAAICG69E+wvUoPpDC9bwAAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAIA/AAAAAAAAAICG69E+wvUoPs3MTL0AAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAIC/AAAAAAAAAICG69E+wvUoPpDC9bwAAIC/AAAAAAAAAICG69E+CtejPZDC9bwAAIC/AAAAAAAAAICG69E+wvUoPs3MTL0AAIC/AAAAAAAAAIACAAAAAQAAAAAAAAABAAAAAgAAAAMAAAAGAAAABQAAAAQAAAAFAAAABgAAAAcAAAAKAAAACQAAAAgAAAAJAAAACgAAAAsAAAAOAAAADQAAAAwAAAANAAAADgAAAA8AAAASAAAAEQAAABAAAAARAAAAEgAAABMAAAAWAAAAFQAAABQAAAAVAAAAFgAAABcAAAAXAAAAFgAAABgAAAAYAAAAFgAAABkAAAAaAAAAFQAAABcAAAAVAAAAGgAAABsAAAAbAAAAGgAAABkAAAAbAAAAGQAAABYAAAAeAAAAHQAAABwAAAAdAAAAHgAAAB8AAAAdAAAAHwAAACAAAAAgAAAAHwAAACEAAAAiAAAAHAAAAB0AAAAcAAAAIgAAACMAAAAjAAAAIgAAACEAAAAjAAAAIQAAAB8AAAAmAAAAJQAAACQAAAAlAAAAJgAAACcAAAAqAAAAKQAAACgAAAApAAAAKgAAACsAAAAuAAAALQAAACwAAAAtAAAALgAAAC8AAAAyAAAAMQAAADAAAAAxAAAAMgAAADMAAAA2AAAANQAAADQAAAA1AAAANgAAADcAAAA6AAAAOQAAADgAAAA5AAAAOgAAADsAAAA+AAAAPQAAADwAAAA9AAAAPgAAAD8AAABCAAAAQQAAAEAAAABBAAAAQgAAAEMAAABDAAAAQgAAAEQAAABEAAAAQgAAAEUAAABFAAAAQgAAAEYAAABHAAAAQQAAAEMAAABKAAAASQAAAEgAAABJAAAASgAAAEsAAABLAAAASgAAAEwAAABNAAAATAAAAEoAAABOAAAATAAAAE0AAABMAAAATgAAAE8AAABSAAAAUQAAAFAAAABTAAAAUAAAAFEAAABQAAAAUwAAAFQAAABTAAAAUQAAAFUAAABTAAAAVQAAAFYAAABTAAAAVgAAAFcAAABaAAAAWQAAAFgAAABZAAAAWgAAAFsAAABbAAAAWgAAAFwAAABbAAAAXAAAAF0AAABcAAAAWgAAAF4AAABeAAAAWgAAAF8AAABgAAAAXQAAAFwAAABhAAAAXQAAAGAAAABhAAAAYAAAAF8AAABhAAAAXwAAAFoAAABiAAAAXQAAAGEAAABdAAAAYgAAAGMAAABmAAAAZQAAAGQAAABlAAAAZgAAAGcAAABnAAAAZgAAAGgAAABoAAAAZgAAAGkAAABpAAAAZgAAAGoAAABrAAAAZQAAAGcAAABuAAAAbQAAAGwAAABvAAAAbQAAAG4AAABvAAAAcAAAAG0AAABxAAAAcAAAAG8AAABxAAAAcgAAAHAAAAByAAAAcQAAAHMAAAB2AAAAdQAAAHQAAAB1AAAAdgAAAHcAAAB6AAAAeQAAAHgAAAB5AAAAegAAAHsAAAB+AAAAfQAAAHwAAAB9AAAAfgAAAH8AAACAAAAAfAAAAH0AAACAAAAAgQAAAHwAAACCAAAAgQAAAIAAAACDAAAAgQAAAIIAAACEAAAAgQAAAIMAAACBAAAAhAAAAIUAAACGAAAAhAAAAIMAAACEAAAAhgAAAIcAAACKAAAAiQAAAIgAAACJAAAAigAAAIsAAACOAAAAjQAAAIwAAACNAAAAjgAAAI8AAACQAAAAjAAAAI0AAACQAAAAkQAAAIwAAACSAAAAkQAAAJAAAACTAAAAkQAAAJIAAACUAAAAkQAAAJMAAACRAAAAlAAAAJUAAACTAAAAlgAAAJQAAACWAAAAkwAAAJcAAACaAAAAmQAAAJgAAACbAAAAmAAAAJkAAACZAAAAmgAAAJwAAACaAAAAnQAAAJwAAACcAAAAnQAAAJ4AAACeAAAAnQAAAJ8AAACfAAAAnQAAAKAAAAChAAAAoAAAAJ0AAACgAAAAogAAAJ8AAACjAAAAnwAAAKIAAACmAAAApQAAAKQAAAClAAAApgAAAKcAAAClAAAApwAAAKgAAACpAAAApAAAAKUAAACkAAAAqQAAAKoAAACqAAAAqQAAAKsAAACuAAAArQAAAKwAAACtAAAArgAAAK8AAACtAAAArwAAALAAAACxAAAArAAAAK0AAACsAAAAsQAAALIAAACyAAAAsQAAALMAAAC2AAAAtQAAALQAAAC1AAAAtgAAALcAAAC6AAAAuQAAALgAAAC7AAAAuAAAALkAAAC+AAAAvQAAALwAAAC9AAAAvgAAAL8AAADCAAAAwQAAAMAAAADDAAAAwAAAAMEAAADGAAAAxQAAAMQAAADFAAAAxgAAAMcAAADKAAAAyQAAAMgAAADLAAAAyAAAAMkAAADOAAAAzQAAAMwAAADNAAAAzgAAAM8AAADSAAAA0QAAANAAAADTAAAA0AAAANEAAADWAAAA1QAAANQAAADVAAAA1gAAANcAAADaAAAA2QAAANgAAADbAAAA2AAAANkAAADeAAAA3QAAANwAAADdAAAA3gAAAN8AAADiAAAA4QAAAOAAAADjAAAA4AAAAOEAAAA="}});function l1(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function Up(){let i=new Tc;return Promise.all(Object.entries(Lp).map(([e,t])=>new Promise(n=>{try{i.parse(l1(t),"",s=>{s.scene.traverse(r=>{if(r.isMesh){r.castShadow=r.receiveShadow=!0;for(let o of[].concat(r.material))o.map&&(o.map.colorSpace=gt),o.roughness=Math.max(o.roughness??1,.55),o.metalness=Math.min(o.metalness??0,.2)}}),Np.set(e,s),n()},s=>{console.warn("model",e,s),n()})}catch(s){console.warn("model",e,s),n()}})))}function Op(i,{w:e,h:t,d:n,stretch:s=!1,turn:r=0,colors:o}={}){let a=Np.get(i),c=new Ze;if(c.name=i,!a)return c;let l=a.animations.length?Cp(a.scene):a.scene.clone(!0);l.rotation.y=r,l.updateMatrixWorld(!0);let h=new Ct().setFromObject(l),u=h.getSize(new w),f,p,A;if(s){let m=t?t/u.y:e?e/u.x:n/u.z;f=e?e/u.x:m,p=t?t/u.y:m,A=n?n/u.z:m}else f=p=A=t?t/u.y:e?e/u.x:n?n/u.z:1;let x=new Ze;return x.add(l),x.scale.set(f,p,A),x.position.set(-(h.min.x+u.x/2)*f,-h.min.y*p,-(h.min.z+u.z/2)*A),c.add(x),o&&h1(c,o),c.userData.size=new w(u.x*f,u.y*p,u.z*A),c}function h1(i,e){let t=new Map;i.traverse(n=>{n.isMesh&&(n.material=[].concat(n.material).map(s=>{if(!(s.name in e))return s;if(!t.has(s)){let r=s.clone();r.color.set(e[s.name]),t.set(s,r)}return t.get(s)}),n.material.length===1&&(n.material=n.material[0]))})}function Fp(i,e,t,n,s=0,r=0){return e.position.set(t,r,n),e.rotation.y=s,i.add(e),e}var Np,_u=Tt(()=>{Bn();Rp();Pp();Dp();Np=new Map});function ti(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Yo.copy(e),Yo[n]=0,Yo.normalize();let l=.5*o/(o+a),h=1-Yo.angleTo(i)/c;return Math.sign(Yo[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Yo,Pi,Bp=Tt(()=>{Bn();Yo=new w;Pi=class extends Zn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new w,c=new w,l=new w(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,A=new w,x=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:A.set(1,0,0),f[d+0]=ti(A,c,"z","y",r,n),f[d+1]=1-ti(A,c,"y","z",r,t);break;case 1:A.set(-1,0,0),f[d+0]=1-ti(A,c,"z","y",r,n),f[d+1]=1-ti(A,c,"y","z",r,t);break;case 2:A.set(0,1,0),f[d+0]=1-ti(A,c,"x","z",r,e),f[d+1]=ti(A,c,"z","x",r,n);break;case 3:A.set(0,-1,0),f[d+0]=1-ti(A,c,"x","z",r,e),f[d+1]=1-ti(A,c,"z","x",r,n);break;case 4:A.set(0,0,1),f[d+0]=1-ti(A,c,"x","y",r,e),f[d+1]=1-ti(A,c,"y","x",r,t);break;case 5:A.set(0,0,-1),f[d+0]=ti(A,c,"x","y",r,e),f[d+1]=1-ti(A,c,"y","x",r,t);break}}}});function mi(i=1){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function zp(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function ni(i,e=[1,1]){let t=new As(i);return t.colorSpace=gt,t.wrapS=t.wrapT=ui,t.repeat.set(...e),t.anisotropy=8,t}function kp(){let[i,e]=zp(128,128);e.font='bold 110px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=12,e.strokeStyle="#1d3557",e.strokeText("Z",64,68),e.fillStyle="#fff3b0",e.fillText("Z",64,68);let t=ni(i);return t.wrapS=t.wrapT=An,t}var Rc,Cc=Tt(()=>{Bn();Rc=class{constructor(){[this.c,this.g]=zp(256,192),this.texture=ni(this.c),this.texture.wrapS=this.texture.wrapT=An,this.t=0,this.flash=0}update(e){let t=this.g,n=this.t+=e,s=256,r=192;t.fillStyle="#10163a",t.fillRect(0,0,s,r),t.fillStyle="#fff";for(let l=0;l<30;l++)t.fillRect((l*53-n*8)%s+(l*53-n*8<0?s:0),l*37%110,2,2);t.fillStyle="#2f855a",t.fillRect(0,150,s,42),t.fillStyle="#8b5a2b";for(let l=-(n*60%32);l<s;l+=32)t.fillRect(l,150,30,6);let o=s-n*60%(s+40);t.fillStyle="#d69e2e",t.fillRect(o,126,24,24),t.fillStyle="#744210",t.fillRect(o+9,133,6,8);let a=o-70,c=a>0&&a<70?Math.sin(a/70*Math.PI)*52:0;t.fillStyle="#e53e3e",t.fillRect(64,122-c,20,10),t.fillStyle="#f6c89f",t.fillRect(66,132-c,16,8),t.fillStyle="#3182ce",t.fillRect(64,140-c,20,10),t.fillStyle="#f6e05e",t.font='bold 14px "Courier New", monospace',t.fillText(`SCORE ${String(Math.floor(n*10)*10).padStart(6,"0")}`,8,18),this.flash>0&&(this.flash-=e,t.fillStyle=`rgba(255,255,255,${Math.min(1,this.flash*2)})`,t.fillRect(0,0,s,r),t.fillStyle="#e53e3e",t.font='bold 48px "Courier New", monospace',t.textAlign="center",t.fillText("HI!",s/2,r/2+16),t.textAlign="left"),t.fillStyle="rgba(0,0,0,0.18)";for(let l=0;l<r;l+=3)t.fillRect(0,l,s,1);this.texture.needsUpdate=!0}}});var Ic,Hp=Tt(()=>{Ic={"Post 1":{x:-3.2,z:.4,ry:0,gone:!0},"Post 2":{x:.293,z:.4,ry:0},"Post 3":{x:2,z:.4,ry:0,gone:!0},"Window (west)":{x:3.309,z:-3.59,ry:0},"Window (over the hoop)":{x:-3.932,z:-3.566,ry:.0664},Clock:{x:.687,z:-3.57,ry:0},"Play mat":{x:4.395,z:-.755,ry:-1.5782},Couch:{x:1.992,z:-2.42,ry:1.5708},Armchair:{x:2.768,z:-.45,ry:2.5597},Ottoman:{x:3.319,z:-1.158,ry:-.6523},"Basketball hoop":{x:-4.93,z:-3.29,ry:.7854},"Toy house":{x:-4.914,z:-1.7,ry:1.5708},"Red ride-on toy":{x:-3.166,z:-2.017,ry:.6},"Kids' table":{x:4.88,z:2.128,ry:-1.5708},"Braided rug":{x:4.239,z:3.573,ry:.2472},"Totes + pillows":{x:2.1,z:4.64,ry:0},"Bean bag":{x:3.122,z:4.61,ry:0},Fridge:{x:1.2,z:4.36,ry:0},"Black shelves":{x:.554,z:4.434,ry:1.588},"Post 4":{x:-.661,z:3.857,ry:0},"Dining table + chairs":{x:-1.494,z:1.047,ry:-1.5738},"Water cooler":{x:-3.313,z:3.72,ry:0},"Laundry sink":{x:-8.371,z:2.083,ry:4.7146},"Paper towel rack":{x:-8.4,z:2.1,ry:1.5708,gone:!0},Furnace:{x:-5.993,z:2.245,ry:0}}});function $i(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Vp(){let[i,e]=$i(1024,512),t=mi(4),n=256,s=128;e.fillStyle="#efeadf",e.fillRect(0,0,1024,512);for(let r=0;r<4;r++)for(let o=-1;o<5;o++){let a=o*n+r%2*n/2,c=r*s,l=236+Math.floor(t()*10);e.fillStyle=`rgb(${l},${l-4},${l-14})`,e.fillRect(a+4,c+4,n-8,s-8);for(let h=0;h<60;h++)e.fillStyle=`rgba(150,140,120,${t()*.12})`,e.fillRect(a+t()*n,c+t()*s,3,3)}e.strokeStyle="rgba(160,150,130,0.55)",e.lineWidth=6;for(let r=0;r<=4;r++)e.beginPath(),e.moveTo(0,r*s),e.lineTo(1024,r*s),e.stroke();for(let r=0;r<4;r++)for(let o=0;o<=4;o++){let a=o*n+r%2*n/2;e.beginPath(),e.moveTo(a,r*s),e.lineTo(a,r*s+s),e.stroke()}return ni(i)}function Gp(){let[i,e]=$i(512,512),t=256;e.fillStyle="#ece6da",e.fillRect(0,0,512,512),e.strokeStyle="rgba(170,160,145,0.28)",e.lineWidth=2;for(let n=0;n<2;n++)for(let s=0;s<2;s++){let r=n*t,o=s*t;e.beginPath();for(let a=0;a<=8;a++){let c=r+a*t/8;e.lineTo(c,o+(a%2?4:-4))}e.stroke(),e.beginPath();for(let a=0;a<=8;a++){let c=o+a*t/8;e.lineTo(r+(a%2?4:-4),c)}e.stroke()}for(let n=0,s=mi(8);n<900;n++)e.fillStyle=`rgba(120,110,95,${s()*.06})`,e.fillRect(s()*512,s()*512,2,2);return ni(i)}function Wp(){let[i,e]=$i(512,512),t=256;e.fillStyle="#5a4a3a",e.beginPath(),e.arc(t,t,t,0,7),e.fill(),e.fillStyle="#e9e1cf",e.beginPath(),e.arc(t,t,t-16,0,7),e.fill(),e.fillStyle="#2c2a2a",e.beginPath(),e.arc(t,t,110,0,7),e.fill(),e.fillStyle="#e9e1cf",e.font="bold 34px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText("OLD TOWN",t,t-12),e.font="20px Georgia, serif",e.fillText("CLOCK CO.",t,t+24);let n=["#9a4b3a","#4d6a7a","#a88b4a","#6b7a5a"];for(let s=1;s<=12;s++){let r=s/12*Math.PI*2-Math.PI/2,o=t+Math.cos(r)*180,a=t+Math.sin(r)*180;e.fillStyle=n[s%4],e.beginPath(),e.arc(o,a,40,0,7),e.fill(),e.fillStyle="#efe7d6",e.beginPath(),e.arc(o,a,31,0,7),e.fill(),e.fillStyle="#2c2a2a",e.font="bold 36px Georgia, serif",e.fillText(String(s),o,a+2)}return jr(ni(i))}function Xp(){let[i,e]=$i(1024,683),t=1024,n=683,s=mi(5);e.fillStyle="#7cc46a",e.fillRect(0,0,t,n),e.fillStyle="#bfe6f7",e.fillRect(70,70,t-140,n*.55),["#e53e3e","#f6ad55","#f6e05e","#68d391","#4299e1","#805ad5"].forEach((l,h)=>{e.strokeStyle=l,e.lineWidth=26,e.beginPath(),e.arc(t*.55,n*.62,300-h*26,Math.PI,0),e.stroke()});for(let[l,h]of[[300,180],[760,150],[520,120]]){e.fillStyle="#fff";for(let u of[0,30,60])e.beginPath(),e.arc(l+u,h,26,0,7),e.fill()}for(let l=0;l<30;l++)e.fillStyle=["#f687b3","#f6e05e","#fff"][l%3],e.beginPath(),e.arc(80+s()*(t-160),n*.7+s()*120,9,0,7),e.fill();let r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",o=["#e53e3e","#dd6b20","#d69e2e","#38a169","#3182ce","#805ad5","#d53f8c"];e.font='bold 50px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle";let a=(l,h,u)=>{e.fillStyle=o[u%7],e.fillRect(l,h,66,66),e.fillStyle="#fff",e.fillText(r[u%26],l+33,h+36)},c=0;for(let l=0;l<t;l+=68)a(l,0,c++);for(let l=68;l<n-68;l+=68)a(t-68,l,c++);for(let l=t-68;l>=0;l-=68)a(l,n-68,c++);for(let l=n-136;l>=68;l-=68)a(0,l,c++);return jr(ni(i))}function qp(i){let[e,t]=$i(320,400),n=t.createLinearGradient(0,0,0,400);n.addColorStop(0,i?"#d8cfe0":"#d9d2c4"),n.addColorStop(1,i?"#b8aec8":"#a89a86"),t.fillStyle=n,t.fillRect(0,0,320,400),t.fillStyle=i?"#f3d9cf":"#f0d5c2",t.beginPath(),t.ellipse(160,215,105,120,0,0,7),t.fill(),t.fillStyle="#e8b7a8";for(let s of[95,225])t.beginPath(),t.arc(s,250,22,0,7),t.fill();t.strokeStyle="#5a4034",t.lineWidth=5,t.lineCap="round";for(let s of[118,202])t.beginPath(),t.arc(s,205,16,.2,Math.PI-.2),t.stroke();return t.beginPath(),t.arc(160,285,14,.3,Math.PI-.3),t.stroke(),i?(t.fillStyle="#9b7fc8",t.fillRect(55,110,210,34),t.beginPath(),t.ellipse(115,95,70,45,-.4,0,7),t.fill(),t.beginPath(),t.ellipse(205,95,70,45,.4,0,7),t.fill(),t.fillStyle="#7d5fb0",t.beginPath(),t.arc(160,108,26,0,7),t.fill()):(t.fillStyle="#6b5442",t.beginPath(),t.ellipse(160,110,95,30,0,Math.PI,0),t.fill()),t.fillStyle="#f4f1ea",t.fillRect(40,340,240,60),jr(ni(e))}function Yp(){let[i,e]=$i(256,512),t=mi(12);e.fillStyle="#f2f1ec",e.fillRect(0,0,256,512);for(let n=0;n<9;n++)e.fillStyle=["#fff","#fefcbf","#e9d8fd"][n%3],e.save(),e.translate(30+t()*190,30+t()*170),e.rotate((t()-.5)*.4),e.fillRect(-28,-34,56,68),e.strokeStyle=["#e53e3e","#3182ce","#38a169"][n%3],e.lineWidth=3,e.beginPath(),e.arc(0,-4,14,0,7),e.stroke(),e.restore();for(let n=0;n<14;n++){let s=30+t()*200,r=40+t()*300,o=["#e53e3e","#f6ad55","#38a169","#805ad5","#d53f8c","#3182ce"][n%6];e.fillStyle=o;for(let a=0;a<6;a++)e.beginPath(),e.arc(s+Math.cos(a)*11,r+Math.sin(a)*11,8,0,7),e.fill();e.fillStyle="#f6e05e",e.beginPath(),e.arc(s,r,7,0,7),e.fill()}return e.fillStyle="#c9c7c0",e.fillRect(226,120,10,160),jr(ni(i))}function Kp(){let[i,e]=$i(256,256);e.fillStyle="#f7f5f0",e.fillRect(0,0,256,256),e.fillStyle="rgba(110,110,120,0.35)";for(let t=0;t<256;t+=32)e.fillRect(0,t,256,3);return ni(i)}function jp(){let[i,e]=$i(256,256),t=mi(30);e.fillStyle="#1b1f2e",e.fillRect(0,0,256,256);for(let n=10;n<250;n+=9){let s=8+Math.floor(t()*4)*10;for(;s<230&&t()>.15;){let r=10+t()*40;e.fillStyle=["#c792ea","#82aaff","#c3e88d","#f78c6c","#d6deeb"][Math.floor(t()*5)],e.fillRect(s,n,r,4),s+=r+6}}return jr(ni(i))}function Zp(i){let[e,t]=$i(512,128);return t.fillStyle="rgba(29,53,87,0.85)",t.beginPath(),t.roundRect(4,4,504,120,28),t.fill(),t.fillStyle="#fff3b0",t.font="bold 84px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,256,68),jr(ni(e))}var jr,Jp=Tt(()=>{Bn();Cc();jr=i=>(i.wrapS=i.wrapT=An,i)});function $p(i){var vt;let e=(S,U={})=>new pi({color:S,roughness:.85,metalness:0,...U}),t=(S,U=2)=>new pi({color:S,emissive:S,emissiveIntensity:U});function n(S,U,D=0,q=0,k=0,ie=i,{cast:ee=!0,receive:j=!0}={}){let le=new xt(S,U);return le.position.set(D,q,k),le.castShadow=ee,le.receiveShadow=j,ie.add(le),le}let s=(S,U,D,q,k,ie,ee,j=i,le)=>n(new Zn(S,U,D),q,k,ie,ee,j,le),r=(S,U,D,q,k,ie,ee,j=i,le)=>s(S,U,D,q,k,ie+U/2,ee,j,le),o=mi(21),a=[],c=[],l=(S,U,D,q,k)=>c.push({x0:S,x1:U,z0:D,z1:q,...k?{under:k}:{}});function h(S,{fly:U=!0,drive:D=!0,under:q}={}){S.updateMatrixWorld(!0);let k=new Ct().setFromObject(S);return k.isEmpty()||(U&&a.push({x0:k.min.x,x1:k.max.x,z0:k.min.z,z1:k.max.z,y1:k.max.y,...q?{under:q}:{}}),D&&l(k.min.x,k.max.x,k.min.z,k.max.z,q),D&&q&&u(S)),S}function u(S){S.updateMatrixWorld(!0),S.traverse(U=>{if(!U.isMesh)return;let D=new Ct().setFromObject(U);D.min.y<.02&&l(D.min.x,D.max.x,D.min.z,D.max.z)})}let f=[],p=new Set,A=(S,U)=>(f.push({id:f.length+1,name:S,at:U}),p.add(U),U);function x(S,U){let D=i.children.slice(U).filter(ee=>!p.has(ee)),q=new Ct;for(let ee of D)q.expandByObject(ee);let k=new Ze,ie=q.isEmpty()?new w:q.getCenter(new w);k.position.set(ie.x,0,ie.z),i.add(k),k.updateMatrixWorld(!0);for(let ee of D)k.attach(ee);return A(S,k)}let m=(S,U,D=0,q=0)=>{let k=new Ze;return k.position.set(S,q,U),k.rotation.y=D,i.add(k),k},d=$e-St,y=xn-gn,g=(gn+xn)/2,_=Mt+vu,T=Gp();T.repeat.set(d/1.2,y/1.2),n(new $t(d,y).rotateX(-Math.PI/2),e(16777215,{map:T,roughness:.95}),0,0,g,i,{cast:!1});let E=Vp(),I=S=>{let U=E.clone();return U.repeat.set(S/1.6,_/.8),U.needsUpdate=!0,e(16777215,{map:U,roughness:.9,side:Fn})};function N(S,U,D,q){let k=Math.hypot(D-S,q-U),ie=n(new $t(k,_),I(k),(S+D)/2,_/2,(U+q)/2,i,{cast:!1});return ie.rotation.y=Math.atan2(-(q-U),D-S),ie}N(St,gn,$e,gn),N($e,gn,$e,xn),N(St,Zr.z0,St,gn),N(St,xn,St,Zr.z1),N($e,xn,Ft,xn),N(Ft,xn,Ft,$s.z0),N(Ft,$s.z0,St,$s.z0),l(St-.05,St+.05,gn,Zr.z0),l(St-.05,St+.05,Zr.z1,xn),l(Ft,St+.05,gn,$s.z0);let v=e(10514495,{roughness:.8}),R=e(9068342,{roughness:.9});for(let S=Ft+.2;S<$e;S+=.4)s(.045,vu,y-.02,v,S,Mt+vu/2,g,i,{cast:!1});n(new $t($e-Ft,y).rotateX(Math.PI/2),R,($e+Ft)/2,_+.004,g,i,{cast:!1});let z=e(15921386,{roughness:.6}),F=e(6120038,{roughness:.5,metalness:.3});s($e-Ft-.02,Mt-Kt-.004,.2,z,($e+Ft)/2,(Kt+Mt-.004)/2,Qt,i,{cast:!1}),s($e-Ft-.02,.02,.22,e(3815994),($e+Ft)/2,Kt+.006,Qt,i,{cast:!1});for(let[S,U]of u1.entries()){let D=i.children.length;n(new st(.05,.05,Kt,20),F,U,Kt/2,Qt),s(.16,.012,.16,F,U,.006,Qt),s(.16,.012,.16,F,U,Kt-.012,Qt),l(U-.06,U+.06,Qt-.06,Qt+.06),x(`Post ${S+1}`,D)}let Z=e(12896460,{roughness:.35,metalness:.6});n(new st(.09,.09,7.5,18).rotateZ(Math.PI/2),Z,-.8,Mt-.1,Qt-.5,i,{cast:!1}),r(.4,.14,.3,Z,-1.7,Mt-.16,Qt-.75,i,{cast:!1}),r(.36,.02,.26,e(16053488),-1.7,Mt-.17,Qt-.75,i,{cast:!1}),n(new st(.035,.035,y,12).rotateX(Math.PI/2),z,3.6,Mt-.05,g,i,{cast:!1});let P=t(16054527,1.6),B=e(15921386,{roughness:.6});function Y(S,U,D){let q=m(S,U,D);n(new $t(.78,.36),P,0,2.05,.02,q,{cast:!1,receive:!1});for(let[ie,ee,j,le]of[[.88,.05,0,2.25],[.88,.05,0,1.85],[.05,.4,-.42,2.05],[.05,.4,.42,2.05]])s(ie,ee,.06,B,j,le,.03,q,{cast:!1});s(.9,.03,.18,B,0,1.83,.09,q,{cast:!1});let k=new Ci(14674687,2.5,5,1.6);return k.position.set(0,1.9,.5),q.add(k),q}A("Window (west)",Y(.8,gn+.01,0)),A("Window (over the hoop)",Y(St+.01,-2.9,Math.PI/2)),A("Window (over the washer)",Y(Ft+.01,3.4,Math.PI/2)),i.add(new gc(16774370,10128504,1.3));let Q=new _s(16773340,1.6);Q.position.set(1.5,8,2.5),Q.target.position.set(0,0,0),i.add(Q,Q.target),Object.assign(Q.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:16}),Q.castShadow=!0,Q.shadow.mapSize.set(2048,2048),Q.shadow.bias=-5e-4,Q.shadow.normalBias=.02;let J=e(16052712,{roughness:.4}),$=t(16773584,3);for(let[S,U]of[[-1.2,-1.6],[1.8,-1.2],[-2.2,1.3],[2.6,2.6],[-4,-1],[1.4,4.2]]){n(new st(.05,.06,.06,16),J,S,Mt-.03,U,i,{cast:!1}),n(new Pt(.045,14,10),$,S,Mt-.11,U,i,{cast:!1});let D=new Ci(16767392,4,6.5,1.5);D.position.set(S,Mt-.2,U),i.add(D)}for(let[S,U]of[[-6.9,1.2],[-6.9,3.7]]){r(1.2,.06,.18,e(14211282),S,Mt-.08,U,i,{cast:!1}),r(1.15,.025,.12,t(16317439,2.5),S,Mt-.1,U,i,{cast:!1});let D=new Ci(15922943,3,6,1.4);D.position.set(S,Mt-.25,U),i.add(D)}let te=A("Clock",m(-1,gn+.03));n(new st(.33,.33,.04,40).rotateY(Math.PI/2).rotateX(Math.PI/2),[e(5917242),e(16777215,{map:Wp(),roughness:.7}),e(5917242)],0,1.68,0,te,{cast:!1});let re=(S,U)=>{let D=new Ze;return D.position.set(0,1.68,.03),te.add(D),s(U,S,.008,e(1710618),0,S/2-.03,0,D,{cast:!1}),D},_e=re(.16,.022),K=re(.24,.014),ne;{let S=A("Christmas tree",m(-.9,gn+.62)),U=e(2055994,{roughness:.9});n(new Xr(.6,32).rotateX(-Math.PI/2),e(11739178,{roughness:1}),0,.004,0,S,{cast:!1}),n(new st(.06,.07,.42,12),e(5913122),0,.21,0,S);let D=[[.58,.55,.3],[.47,.5,.65],[.36,.45,.98],[.24,.42,1.28]];for(let[j,le,he]of D)n(new wi(j,le,18),U,0,he+le/2,0,S);let q=[15023678,16173326,3244750,13975436,15921386],k=[];for(let[j,[le,he,We]]of D.entries())for(let at=0;at<9-j*2;at++){let _t=at/(9-j*2)*Math.PI*2+j,Ot=.25+o()*.15,nn=le*(1-Ot)+.02;n(new Pt(.035,10,8),e(q[(at+j)%q.length],{roughness:.25,metalness:.3}),Math.sin(_t)*nn,We+he*Ot,Math.cos(_t)*nn,S,{cast:!1});let b=Math.sin(_t+.5)*(nn-.04),O=Math.cos(_t+.5)*(nn-.04);k.push(n(new Pt(.014,6,4),t([16765803,16734810,8315009,7059711][at%4],3),b,We+he*(Ot+.18),O,S,{cast:!1}))}n(new fc(.08),t(16767050,2.5),0,1.74,0,S,{cast:!1}).scale.set(1,1.3,.4);let ee=new Ci(16763255,1.6,2.5,1.6);ee.position.set(0,1.1,.55),S.add(ee),ne={bulbs:k,l:ee},h(S,{under:.3})}let ge=[4.5,-2.95],we=-Math.PI/4,Re=i.children.length;h(Fp(i,Op("tvCabinet",{w:1.35,h:.62,d:.55,stretch:!0,colors:{wood:5911584}}),...ge,we));let Ge=new Rc,Ve=m(...ge,we,.62);s(1.32,.78,.05,e(1118481,{roughness:.4}),0,.5,0,Ve),n(new $t(1.26,.72),new Jt({map:Ge.texture,toneMapped:!1}),0,.5,.027,Ve,{cast:!1}),s(.3,.03,.2,e(1118481),0,0,0,Ve),s(.06,.12,.04,e(1118481),0,.03,-.02,Ve),s(.4,.02,.12,e(15790320),.2,0,.18,Ve),h(Ve);let Fe=new Ci(11570431,2.5,4,1.8);Fe.position.set(3.9,1.1,-2.35),i.add(Fe),x("TV + cabinet",Re),A("Play mat",n(new $t(2.3,1.55).rotateX(-Math.PI/2),e(16777215,{map:Xp(),roughness:1}),2.6,.006,-1.65,i,{cast:!1}));let ht=(S,U,D,q)=>{let k=A(S?"Portrait (purple bow)":"Portrait (boy)",m(U,D,q));s(.52,.64,.025,e(16777215,{roughness:.9}),0,1.15,.0125,k,{cast:!1}),n(new $t(.5,.62),e(16777215,{map:qp(S),roughness:.8}),0,1.47,.027,k,{cast:!1})};ht(!0,St+.01,-1.3,Math.PI/2),ht(!1,$e-.01,-2,-Math.PI/2);function G(S,U,D,q,k){let ie=m(U,D,q),ee=e(k,{roughness:1}),j=e(new Ie(k).offsetHSL(0,0,.03),{roughness:1}),le=S*.66+.4,he=.95,We=(_t,Ot,nn,b,O,H,X)=>n(new Pi(_t,Ot,nn,3,Math.min(.06,Ot/2-.001)),b,O,H+Ot/2,X,ie);We(le-.3,.3,he-.1,ee,0,.1,.02),We(le-.2,.5,.24,ee,0,.3,-he/2+.12);for(let _t of[-1,1])We(.22,.5,he,ee,_t*(le/2-.11),.1,0),n(new st(.13,.13,he,16).rotateX(Math.PI/2),ee,_t*(le/2-.1),.6,0,ie);let at=(le-.44)/S;for(let _t=0;_t<S;_t++){let Ot=-le/2+.22+at*(_t+.5);We(at-.02,.16,he-.3,j,Ot,.4,.1);let nn=We(at-.03,.42,.18,j,Ot,.52,-he/2+.3);nn.rotation.x=-.12}for(let _t of[-1,1])for(let Ot of[-1,1])n(new st(.03,.025,.1,10),e(3023904),_t*(le/2-.12),.05,Ot*(he/2-.12),ie);return h(ie,{under:.1})}A("Couch",G(3,-1.9,-2.42,Math.PI/2,8360358)),A("Armchair",G(1,.6,-.45,Math.PI,9083824));let jt=A("Ottoman",m(.6,-1.48));n(new Pi(.82,.3,.6,3,.06),e(9083824,{roughness:1}),0,.27,0,jt);for(let[S,U]of[[-.35,-.24],[.35,-.24],[-.35,.24],[.35,.24]])n(new st(.025,.02,.12,10),e(3023904),S,.06,U,jt);r(.12,.06,.07,e(3711337,{roughness:.4}),.15,.42,-.02,jt),h(jt,{under:.12});{let S=A("Basketball hoop",m(-4.75,-3.15,Math.PI/4));n(new st(.18,.2,.08,20),e(1710618),0,.04,0,S),n(new st(.03,.03,1.1,12),e(2845872,{roughness:.4}),0,.6,0,S),r(.5,.36,.03,e(16053488,{roughness:.5}),0,1.05,-.02,S),n(new hn(.11,.012,8,24).rotateX(Math.PI/2),e(15023678),0,1.12,.13,S),h(S)}{let S=A("Toy house",m(-4.6,-1.7,Math.PI/2));r(.6,.35,.42,e(16179294,{roughness:.6}),0,0,0,S),n(new st(.01,.38,.22,4,1).rotateY(Math.PI/4),e(3244750,{roughness:.5}),0,.46,0,S).scale.set(1.15,1,.85),r(.12,.2,.02,e(15023678),0,0,.215,S),r(.12,.1,.02,e(10475775),.18,.15,.215,S),h(S)}{let S=A("Toy tote",m(-3.95,-3.2));r(.6,.32,.42,e(14674158,{transparent:!0,opacity:.55,roughness:.2}),0,0,0,S);for(let U=0;U<6;U++)r(.1+o()*.1,.1,.1,e([15023678,3711337,3244750,16179294][U%4]),(o()-.5)*.4,.02,(o()-.5)*.25,S);h(S)}{let S=A("Red ride-on toy",m(-3.6,-2.35,.6));r(.5,.2,.28,e(15023678,{roughness:.4}),0,.06,0,S),r(.18,.14,.22,e(15023678,{roughness:.4}),-.12,.26,0,S);for(let[U,D]of[[-.18,-.15],[.18,-.15],[-.18,.15],[.18,.15]])n(new st(.06,.06,.04,14).rotateX(Math.PI/2),e(1710618),U,.06,D,S);h(S)}{let S=A("Speaker cabinet",m(-2.75,-3.33));r(.42,.62,.4,e(2762018,{roughness:.6}),0,0,0,S),n(new st(.11,.11,.02,20).rotateX(Math.PI/2),e(7829367,{roughness:.4,metalness:.4}),0,.36,.205,S),r(.26,.08,.14,e(16173326,{roughness:.5}),0,.62,0,S),h(S)}{let S=A("Kids' table",m(4.72,1.1,-Math.PI/2)),U=e(7028514,{roughness:.6});r(.75,.03,.55,U,0,.5,0,S);for(let[D,q]of[[-.33,-.23],[.33,-.23],[-.33,.23],[.33,.23]])r(.04,.5,.04,U,D,0,q,S);for(let D of[-1,1]){let q=m(0,0);S.add(q),q.position.set(D*.58,0,0),q.rotation.y=D*Math.PI/2,r(.28,.03,.28,U,0,.3,0,q);for(let[k,ie]of[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]])r(.03,.3,.03,U,k,0,ie,q);r(.28,.3,.03,U,0,.33,.13,q)}h(S,{under:.3})}{let S=A("Standing desk",m(Ft+13.05,xn-.38,Math.PI));r(1.55,.035,.72,e(14207400,{roughness:.7}),0,.93,0,S);for(let q of[-.7,.7])r(.06,.93,.06,e(1710618),q,0,0,S),r(.06,.03,.6,e(1710618),q,0,0,S);r(.55,.6,.55,e(1842206,{roughness:.5}),.4,0,.05,S),r(.5,.3,.3,e(12922954,{roughness:.4}),-.3,0,.12,S);let U=new Jt({map:jp(),toneMapped:!1}),D=(q,k,ie)=>{let ee=m(0,0,0);S.add(ee),ee.position.set(ie,.965,-.2),r(q,k,.03,e(1118481,{roughness:.4}),0,.12,0,ee),n(new $t(q-.03,k-.03),U,0,.12+k/2,.016,ee,{cast:!1}),r(.04,.12,.04,e(1118481),0,0,0,ee)};D(.62,.38,-.2),D(.3,.52,.35),r(.32,.015,.22,e(6974064,{metalness:.5,roughness:.4}),-.25,.965,.12,S),n(new st(.08,.1,.04,16),e(1710618),-.6,.985,.15,S),n(new st(.018,.022,.22,10),e(1710618),-.6,1.1,.15,S),h(S,{under:.93})}{let S=A("Braided rug",n(new Xr(.6,40).rotateX(-Math.PI/2),e(8028057,{roughness:1}),3.8,.005,3.9,i,{cast:!1}));S.scale.set(1.25,1,.85);for(let[U,D]of[[.45,10127994],[.3,5922682],[.15,11575440]])n(new dc(U-.06,U,40).rotateX(-Math.PI/2),e(D,{roughness:1}),0,.001,0,S,{cast:!1})}{let S=A("Totes + pillows",m(2.3,4.68));r(.75,.42,.55,e(2763306,{roughness:.5}),0,0,0,S),r(.75,.04,.57,e(16179294),0,.42,0,S),r(.72,.36,.52,e(10474928,{roughness:.4}),0,.46,0,S),r(.72,.36,.52,e(12106944,{roughness:.4}),0,.82,0,S);for(let D=0;D<3;D++)n(new Pi(.62,.1,.42,3,.04),e(16448250,{roughness:1}),0,1.24+D*.09,(o()-.5)*.05,S);h(S);let U=n(new Pt(.32,20,14),e(16052974,{roughness:1}),3,.22,4.55);U.scale.set(1,.7,1),A("Bean bag",h(U))}{let S=A("Fridge",m(1.2,4.62));n(new Pi(.75,1.72,.7,3,.03),e(15921644,{roughness:.35}),0,.86,0,S),n(new $t(.72,1.4),e(16777215,{map:Yp(),roughness:.4}),0,.9,-.352,S,{cast:!1}).rotation.y=Math.PI,h(S)}let Le=(S,U,D,q,k)=>{let ie=m(S,U,D),ee=e(1907997,{roughness:.5,metalness:.3}),j=mi(k);for(let le of[-q/2+.02,q/2-.02])for(let he of[-.2,.2])r(.025,1.8,.025,ee,le,0,he,ie);for(let le=0;le<5;le++){let he=.08+le*.42;if(r(q,.025,.44,ee,0,he,0,ie),le<4)for(let We=-q/2+.16;We<q/2-.1;We+=.28)j()>.2&&r(.18+j()*.08,.12+j()*.18,.3,e([5231045,15023678,16179294,16777215,8411861,2829099,14510880][Math.floor(j()*7)],{roughness:.5}),We,he+.025,0,ie)}return h(ie)};A("Black shelves",Le(-.2,4.75,0,.9,3)),n(new st(.05,.05,Mt,14),z,-.72,Mt/2,4.92);let Be=((vt=Ic["Post 4"])==null?void 0:vt.z)??Pc;{let S=Be;s($e-St-.02,Mt-Kt-.004,.2,z,($e+St)/2,(Kt+Mt-.004)/2,S,i,{cast:!1}),s($e-St-.02,.02,.22,e(3815994),($e+St)/2,Kt+.006,S,i,{cast:!1})}A("Post 4",n(new st(.05,.05,Kt,20),F,.75,Kt/2,Pc)),l(.69,.81,Pc-.06,Pc+.06);let Ee=i.children.length;{let S=e(12101260,{roughness:.8}),U=e(10133155,{roughness:.7}),D=ii,q=D.z1-D.z0,k=(D.z0+D.z1)/2;for(let he=0;he<D.n;he++){let We=D.x-he*D.run,at=We-D.run,_t=(he+1)*D.rise;r(D.run,_t,q,U,(at+We)/2,0,k),r(D.run+.01,.025,q,S,(at+We)/2,_t-.025,k,i,{cast:!1})}let ie=D.x-D.n*D.run,ee=Math.atan(D.rise/D.run),j=Math.hypot(D.n*D.run,D.n*D.rise),le=n(new Zn(j,.05,.05),e(9067051),(D.x+ie)/2,.9+D.n*D.rise/2,D.z0-.03);le.rotation.z=-ee,r(.1,1,.1,U,D.x-.05,0,D.z0+.05),n(new $t(.55,.95).rotateX(-Math.PI/2),e(15259848,{roughness:1}),D.x+.35,.006,k,i,{cast:!1}),l(ie,D.x,D.z0,D.z1);for(let he=0;he<D.n&&(he+1)*D.rise<1;he++)a.push({x0:D.x-(he+1)*D.run,x1:D.x-he*D.run,z0:D.z0,z1:D.z1,y1:(he+1)*D.rise})}x("Stairs",Ee);let Lt=i.children.length;{let S={x:-2.3,z:1.35,w:1.75,d:1,h:.76},U=e(11037490,{roughness:.6}),D=m(S.x,S.z);r(S.w,.04,S.d,U,0,S.h-.04,0,D),r(S.w+.06,.012,S.d+.06,e(16250350,{roughness:1}),0,S.h,0,D,{cast:!1});for(let k of[-.6,.6])r(.08,S.h-.04,.14,U,k,0,0,D),r(.12,.06,.8,U,k,0,0,D);r(1.2,.08,.06,U,0,.3,0,D),n(new st(.06,.05,.16,16),e(16777215,{roughness:.4}),.2,S.h+.09,.05,D);for(let k=0;k<7;k++)n(new Pt(.05,10,8),e([9417696,13163248,7246792][k%3]),.2+(o()-.5)*.16,S.h+.22+o()*.06,.05+(o()-.5)*.16,D);a.push({x0:S.x-S.w/2,x1:S.x+S.w/2,z0:S.z-S.d/2,z1:S.z+S.d/2,y1:S.h,under:S.h-.05});for(let k of[-.6,.6])l(S.x+k-.06,S.x+k+.06,S.z-.4,S.z+.4);let q=(k,ie,ee)=>{let j=m(k,ie,ee);r(.44,.05,.44,U,0,.42,0,j),r(.4,.03,.4,e(14209732),0,.47,0,j);for(let[he,We]of[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]])r(.04,.42,.04,U,he,0,We,j);for(let he of[-.19,.19])r(.045,.6,.045,U,he,.47,-.2,j);for(let he=-2;he<=2;he++)r(.035,.48,.02,U,he*.07,.5,-.2,j);r(.44,.06,.04,U,0,1.03,-.2,j),j.updateMatrixWorld(!0);let le=new Ct().setFromObject(j);a.push({x0:le.min.x,x1:le.max.x,z0:le.min.z,z1:le.max.z,y1:.5,under:.4}),l(le.min.x+.04,le.max.x-.04,le.min.z+.04,le.max.z-.04,.4),u(j)};q(S.x-.4,S.z-.72,0),q(S.x+.4,S.z-.72,0),q(S.x,S.z+.75,Math.PI),q(S.x+1.15,S.z,-Math.PI/2),q(S.x-1.15,S.z,Math.PI/2)}x("Dining table + chairs",Lt);{let S=A("Water cooler",m(-2.2,3.6));r(.55,.32,.4,e(2236962,{roughness:.5}),0,0,0,S),r(.55,.06,.4,e(12922928),0,.32,0,S),r(.5,.28,.38,e(16053492,{roughness:.6}),0,.38,0,S);for(let U=0;U<5;U++)n(new Pt(.09,10,8),e([16179294,12031220,16777215,9132587][U%4],{roughness:1}),(o()-.5)*.35,.72,(o()-.5)*.2,S);n(new st(.16,.16,.4,20),e(15895592,{roughness:.4}),0,.96,0,S),n(new st(.17,.17,.05,20),e(16053492),0,1.18,0,S),h(S)}let tt=i.children.length;{let S=St+.06,U=Zr.z0,D=Zr.curtain,q=D-U,k=new $t(q,Kt,40,1),ie=k.attributes.position;for(let j=0;j<ie.count;j++)ie.setZ(j,Math.sin(ie.getX(j)*22)*.04);k.computeVertexNormals();let ee=Kp();ee.repeat.set(1,Kt/.5),n(k,e(16777215,{map:ee,roughness:1,side:Fn}),S,Kt/2+.02,(U+D)/2).rotation.y=Math.PI/2,n(new st(.012,.012,q+.1,8).rotateX(Math.PI/2),F,S,Kt+.05,(U+D)/2,i,{cast:!1}),l(S-.05,S+.05,U,D),A("Pantry shelves 1",Le(-6.15,$s.z0+.25,0,1.8,9));{let j=A("Soap table",m(-7.85,$s.z0+.33)),le=e(2829099,{roughness:.5}),he=mi(17);r(1.4,.04,.6,e(15262940,{roughness:.6}),0,.72,0,j);for(let[at,_t]of[[-.65,-.25],[.65,-.25],[-.65,.25],[.65,.25]])r(.04,.72,.04,le,at,0,_t,j);let We=.76;for(let at=-.58;at<.6;at+=.17+he()*.05){let _t=he(),Ot=(he()-.5)*.3,nn=[15895592,2060241,3126138,9323693,15921906,14034984][Math.floor(he()*6)];_t<.45?(r(.14,.26,.1,e(nn,{roughness:.35}),at,We,Ot,j),r(.04,.08,.06,e(nn,{roughness:.35}),at+.05,We+.2,Ot,j),n(new st(.025,.025,.04,12),e(16179294,{roughness:.4}),at-.03,We+.28,Ot,j)):_t<.8?(n(new st(.035,.04,.2,14),e(nn,{roughness:.3}),at,We+.1,Ot,j),n(new st(.012,.012,.05,8),e(16777215),at,We+.225,Ot,j)):r(.14,.18,.08,e(16777215,{roughness:.5}),at,We,Ot,j)}h(j,{under:.72})}}x("Curtain",tt);{let S=$s,U=S.x1-S.x0,D=S.z1-S.z0;n(new $t(U,D).rotateX(-Math.PI/2),e(9342860,{roughness:.35,metalness:.1}),(S.x0+S.x1)/2,.004,(S.z0+S.z1)/2,i,{cast:!1});let q=e(15921902,{roughness:.35});for(let[ie,ee]of[[3.05,0],[3.78,1]]){let j=A(ee?"Washer":"Dryer",m(Ft+.38,ie,Math.PI/2));n(new Pi(.7,.92,.7,2,.02),q,0,.46,0,j),r(.7,.14,.1,q,0,.92,-.28,j),ee||n(new Xr(.18,24),e(10133670,{roughness:.3}),0,.5,.352,j),h(j)}n(new $t(.8,1.6).rotateX(-Math.PI/2),e(7237230,{roughness:1}),Ft+1.2,.008,3.4,i,{cast:!1});{let ie=A("Laundry sink",m(-7.6,xn-.3));r(.6,.35,.5,q,0,.55,0,ie);for(let[ee,j]of[[-.25,-.2],[.25,-.2],[-.25,.2],[.25,.2]])r(.04,.55,.04,e(13619151),ee,0,j,ie);h(ie,{under:.55})}A("Paper towel rack",Le(Ft+.3,2.1,Math.PI/2,.6,14));let k=e(12106944,{roughness:.3,metalness:.6});{let ie=A("Furnace",m(-6.6,2));r(.55,1.02,.72,e(9080208,{roughness:.5}),0,.13,0,ie);for(let[ee,j]of[[-.24,-.32],[.24,-.32],[-.24,.32],[.24,.32]])r(.04,.13,.04,e(3815994),ee,0,j,ie);r(.6,Mt-1.155,.8,k,0,1.15,0,ie),n(new st(.06,.06,Mt-1,12),z,.15,1+(Mt-1)/2,.45,ie),h(ie,{fly:!1,under:.13}),r(4.4,.28,.55,k,-6.6+2.2,Mt-.285,1.6,i,{cast:!1})}}let C=[],M=new Pt(.016,6,4).scale(1,1.4,1),W=new Jt({toneMapped:!1}),ae=[16765803,16734810,8315009,7059711,16748504].map(S=>new Ie(S)),oe=new uc(.04,0),ce=e(2055994,{roughness:.9,flatShading:!0}),Me=mi(25),xe=new Pt(.016,6,4),be=new hn(.03,.011,6,12),Ce=e(13114922,{roughness:.55}),Ye=e(3114330,{roughness:.6}),se=e(2845872,{roughness:.6}),mt=S=>(S.raycast=()=>{},S);function nt(S,U,D,q,k=()=>{}){let ie=D.reduce((le,he)=>le.add(he),new w).divideScalar(D.length),ee=new Vr(S,U,D.length),j=new It;return D.forEach((le,he)=>{j.position.copy(le).sub(ie),j.rotation.set(0,0,0),j.scale.setScalar(1),k(j,he),j.updateMatrix(),ee.setMatrixAt(he,j.matrix)}),ee.position.copy(ie),ee.castShadow=ee.receiveShadow=!1,q.add(ee),ee}let He=(S,U=i)=>{let D=mt(nt(M,W,S,U));return S.forEach((q,k)=>D.setColorAt(k,ae[k%ae.length])),C.push({im:D,base:D.instanceColor.array.slice()}),D},Pe=(S,U,D=i)=>nt(oe,ce,S,D,q=>{q.rotation.set(Me()*6,Me()*6,Me()*6),q.scale.setScalar(U/.04*(.8+Me()*.4))});function ve(S,U,D,q,k=1,ie=Ce,ee=0){let j=new Ze;j.position.set(U,D,q),j.rotation.y=ee,j.scale.setScalar(k),S.add(j);for(let le of[-1,1]){let he=n(be,ie,le*.032,.006,0,j,{cast:!1});he.scale.set(1,.7,.6),he.rotation.z=le*.35,s(.022,.07,.008,ie,le*.02,-.04,0,j,{cast:!1}).rotation.z=le*.3}return s(.026,.026,.024,ie,0,0,0,j,{cast:!1}),j}{let S=i.children.length,U=e(14065198,{roughness:.4,metalness:.3}),D=e(16052714,{roughness:.6}),q={gold:e(16173326,{roughness:.35,metalness:.4}),red:Ce,silver:e(14015459,{roughness:.3,metalness:.5}),green:e(3711337,{roughness:.4})};for(let[k,ie,ee,j,le,he,We]of[[.36,.27,.3,-.82,-2.17,Ce,"gold"],[.24,.16,.24,-1.22,-2.2,Ye,"red"],[.18,.12,.18,-.47,-2.21,se,"silver"],[.22,.38,.22,-.13,-3.3,U,"red"],[.28,.2,.24,-.12,-2.84,D,"green"]])r(k,ie,ee,he,j,0,le),r(k+.006,ie+.004,.035,q[We],j,0,le,i,{cast:!1}),r(.035,ie+.004,ee+.006,q[We],j,0,le,i,{cast:!1}),ve(i,j,ie+.024,le,.8+k,q[We],Me()*3),a.push({x0:j-k/2,x1:j+k/2,z0:le-ee/2,z1:le+ee/2,y1:ie}),l(j-k/2,j+k/2,le-ee/2,le+ee/2);x("Presents",S)}let Xe=[-1.4,-.95,-.5,-.05],dt=1.3;{let S=e(16250352,{roughness:1}),U=e(3805204,{roughness:1}),D=.8,q=1.1,k=D+.12;for(let[ie,ee]of Xe.entries()){let j=A(`Stocking ${ie+1}`,m($e-.005,ee,-Math.PI/2)),le=[Ce,Ye,Ce,se][ie];n(new Pi(.255,k-D+.05,.12,2,.03),le,.0425,(D+k+.05)/2,.075,j),n(new Pi(.17,q-k,.12,2,.02),le,0,(k+q)/2,.075,j),r(.15,.004,.1,U,0,q,.08,j,{cast:!1});for(let[he,We,at,_t]of[[.21,.025,0,.0125],[.21,.025,0,.1475],[.025,.11,-.0925,.08],[.025,.11,.0925,.08]])r(he,.1,We,S,at,q-.03,_t,j);r(.012,dt-q-.07,.006,S,-.08,q+.07,.012,j,{cast:!1}),h(j,{drive:!1,under:k}),l($e-.14,$e-.02,ee-.085,ee+.085,k)}}{let S=i.children.length,U=[-1.62,...Xe.map(k=>k-.08),.17],D=[],q=[];for(let k=0;k<U.length-1;k++)for(let ie=U[k];ie<U[k+1];ie+=.03){let ee=(ie-U[k])/(U[k+1]-U[k]),j=dt-.06*4*ee*(1-ee);D.push(new w($e-.04,j,ie)),D.length%4===0&&q.push(new w($e-.075,j+(Me()-.5)*.04,ie))}Pe(D,.034),He(q);for(let k of[U[0],U[U.length-1]])ve(i,$e-.08,dt-.02,k,1.5,Ce,-Math.PI/2);x("Stocking garland",S)}function Dt(S,U,D,q,k){let ie=A(S,m(U,D,q)),ee=[],j=[],le=[];for(let he=0;he<28;he++){let We=he/28*Math.PI*2,at=he%2?.15:.19;ee.push(new w(Math.cos(We)*at,k+Math.sin(We)*at,.065))}for(let he=0;he<9;he++){let We=he/9*Math.PI*2+.3,at=.13+Me()*.08;j.push(new w(Math.cos(We)*at,k+Math.sin(We)*at,.11))}for(let he=0;he<10;he++){let We=he/10*Math.PI*2+.6;le.push(new w(Math.cos(We)*.17,k+Math.sin(We)*.17,.115))}return Pe(ee,.055,ie),nt(xe,Ce,j,ie),He(le,ie),ve(ie,0,k-.185,.12,1.7),ie}Dt("Wreath (north)",$e-.005,(Xe[0]+Xe[3])/2,-Math.PI/2,1.72),Dt("Wreath (west)",-2.75,gn+.005,0,1.5);{let S=ii,U=S.rise/S.run,D=S.z0-.03,q=[],k=[],ie=new Ze;i.add(ie);for(let ee=.03;.9+ee*U<1.95;ee+=.03){let j=S.x-ee,le=.9+ee*U;if(q.push(new w(j,le+(Me()-.5)*.02,D+(Me()-.5)*.03)),q.length%2===0){let he=ee*22;k.push(new w(j-Math.sin(he)*.04,le+Math.cos(he)*.05,D+Math.sin(he)*.05))}}Pe(q,.04,ie),He(k,ie),ve(ie,S.x-.05,.86,S.z0-.006,1.8,Ce,Math.PI),f.find(ee=>ee.name==="Stairs").at.attach(ie)}let Ke=new Ze;i.add(Ke);for(let[S,U,D,q]of[["WEST",(Ft+$e)/2,gn-.7,0],["EAST",(Ft+$e)/2,xn+.7,0],["NORTH",$e+.85,g,-Math.PI/2],["SOUTH",Ft-.85,g,Math.PI/2]])n(new $t(1.6,.4),new Jt({map:Zp(S),transparent:!0,toneMapped:!1}),U,0,D,Ke,{cast:!1,receive:!1}).rotation.set(-Math.PI/2,0,q);let ue=new Je,L=new w;for(let S of f)S.at.updateMatrixWorld(!0),S.home=new Ct().setFromObject(S.at).expandByScalar(.03),S.m0=S.at.matrixWorld.clone(),S.boxes=[];for(let S of[...c,...a]){let U=(S.x0+S.x1)/2,D=(S.z0+S.z1)/2,q=null,k=1/0;for(let ie of f){let ee=ie.home,j=(ee.max.x-ee.min.x)*(ee.max.z-ee.min.z);U>=ee.min.x&&U<=ee.max.x&&D>=ee.min.z&&D<=ee.max.z&&j<k&&(q=ie,k=j)}q&&(ue.copy(q.m0).invert(),q.boxes.push({b:S,corners:[[S.x0,S.z0],[S.x1,S.z0],[S.x0,S.z1],[S.x1,S.z1]].map(([ie,ee])=>L.set(ie,0,ee).applyMatrix4(ue).clone())}))}function Ae(S){if(S.at.updateMatrixWorld(!0),S.gone){for(let{b:U}of S.boxes)U.x0=U.x1=U.z0=U.z1=-1e4;return}for(let{b:U,corners:D}of S.boxes){let q=D.map(k=>L.copy(k).applyMatrix4(S.at.matrixWorld).clone());U.x0=Math.min(...q.map(k=>k.x)),U.x1=Math.max(...q.map(k=>k.x)),U.z0=Math.min(...q.map(k=>k.z)),U.z1=Math.max(...q.map(k=>k.z)),U.pts=[0,1,3,2].map(k=>[q[k].x,q[k].z])}}let me=S=>({x:+S.at.position.x.toFixed(3),z:+S.at.position.z.toFixed(3),ry:+S.at.rotation.y.toFixed(4),...S.gone?{gone:!0}:{}});function ke(S,U){S.at.position.x=U.x,S.at.position.z=U.z,S.at.rotation.y=U.ry,S.gone=!!U.gone,S.at.visible=!S.gone,Ae(S)}for(let S of f)S.start=me(S),Ic[S.name]&&ke(S,Ic[S.name]);{let S=Mt-.09,U=f.filter(j=>/^Window/.test(j.name)&&!j.gone).map(j=>new Ct().setFromObject(j.at).expandByScalar(.1));for(let j of[Qt,Be])U.push(new Ct(new w($e-.25,0,j-.17),new w($e+1,_,j+.17)));let D=[[St+.15,gn+.035,$e-.15,gn+.035],[$e-.035,gn+.15,$e-.035,xn-.15],[-2.25,xn-.035,$e-.15,xn-.035],[St+.25,Qt-.13,$e-.2,Qt-.13],[St+.25,Qt+.13,$e-.2,Qt+.13],[St+.25,Be-.13,$e-.2,Be-.13],[-2.2,Be+.13,$e-.2,Be+.13]],q=[],k=[],ie=new w,ee=.05;for(let[j,le,he,We]of D){let at=Math.hypot(he-j,We-le),_t=(b,O)=>new w(j+(he-j)*b/at,O,le+(We-le)*b/at),Ot=[],nn=null;for(let b=0;b*ee<=at;b++)U.some(O=>O.containsPoint(ie.copy(_t(b*ee,S))))?nn=null:(nn||Ot.push(nn=[]),nn.push(b*ee));for(let b of Ot){let O=b[0],H=b[b.length-1]-O,X=Math.max(1,Math.round(H/.8));if(H<.4)continue;let V=null;for(let ye=0;O+ye*ee<=O+H+1e-6;ye++){let Se=ye*ee/H*X%1,De=_t(O+ye*ee,S-.07*4*Se*(1-Se));V&&q.push(V,De),ye%4===2&&k.push(De.clone().setY(De.y-.028)),V=De}}}i.add(mt(new Wr(new Wt().setFromPoints(q),new js({color:1784356})))),He(k)}function Oe(S){let U=new Date,D=U.getMinutes()+U.getSeconds()/60,q=U.getHours()%12+D/60;K.rotation.z=-D/60*Math.PI*2,_e.rotation.z=-q/12*Math.PI*2,Ge.update(S);let k=performance.now()/1e3;ne.bulbs.forEach((ie,ee)=>{ie.material.emissiveIntensity=1.5+2*Math.max(0,Math.sin(k*2.2+ee*1.7))}),ne.l.intensity=1.5+Math.sin(k*1.3)*.2;for(let{im:ie,base:ee}of C){let j=ie.instanceColor.array;for(let le=0;le<ee.length;le+=3){let he=.4+.6*Math.max(0,Math.sin(k*2.2+le*.57));j[le]=ee[le]*he,j[le+1]=ee[le+1]*he,j[le+2]=ee[le+2]*he}ie.instanceColor.needsUpdate=!0}Fe.intensity=2.2+Math.sin(performance.now()/90)*.3+Ge.flash*5}let bt=new w(ge[0]-.3,1.1,ge[1]+.3);return{things:f,setPose:ke,poseOf:me,beam2:Be,room:{x0:St,x1:$e,z0:gn,z1:xn,ceil:Mt},whole:{x0:Ft,x1:$e,z0:gn,z1:xn},flyBoxes:a,bumpers:c,update:Oe,tvGame:Ge,tvAt:bt,labels:Ke}}var St,$e,gn,xn,Ft,Mt,vu,Qt,Kt,u1,Pc,ii,$s,Zr,Mu=Tt(()=>{Bn();Bp();_u();Cc();Hp();Jp();St=-5.2,$e=5.2,gn=-3.6,xn=5,Ft=-8.7,Mt=2.3,vu=.24,Qt=.4,Kt=2.02,u1=[-3.2,-.6,2],Pc=3.857,ii={x:-2.43,z0:4,z1:xn-.01,rise:.19,run:.23,n:12},$s={x0:Ft,x1:St,z0:-.6,z1:xn},Zr={z0:Qt,z1:ii.z0-.05,curtain:1.9}});function Dn(i,e,t,n=0){if(!(e>i.x0-n&&e<i.x1+n&&t>i.z0-n&&t<i.z1+n))return!1;if(!i.pts)return!0;let s=i.pts,r=(s[0][0]+s[2][0])/2,o=(s[0][1]+s[2][1])/2;for(let a=0;a<4;a++){let[c,l]=s[a],[h,u]=s[(a+1)%4],f=h-c,p=u-l,A=Math.hypot(f,p)||1;if((Math.sign(f*(o-l)-p*(r-c))||1)*(f*(t-l)-p*(e-c))/A<-n)return!1}return!0}function t0(i,e,t,n){let s=si(e,i.x0+n,i.x1-n),r=si(t,i.z0+n,i.z1-n);if(i.pts){let o=(i.pts[0][0]+i.pts[2][0])/2,a=(i.pts[0][1]+i.pts[2][1])/2;for(let c=0;c<20&&!Dn(i,s,r,-n);c++)s+=(o-s)*.15,r+=(a-r)*.15}return[s,r]}function Qi(i,e,t,n){let s=0;for(let r of i.tops)Dn(r,e,t,Ne.radius*.5)&&r.y1<=n+.03&&r.y1>s&&(s=r.y1);return s}function Lc(i,e,t,n){let s=0;for(let r of i.tops)Dn(r,e,t,Ne.radius)&&r.y1>n+.03&&!Nc(r,n,Ne.height)&&(s=Math.max(s,r.y1));return s}function Dc(i,e,t,n){let s=i.walls,r=Ne.radius;if(e<s.x0+r||e>s.x1-r||t<s.z0+r||t>s.z1-r)return!0;if(i.tops.some(o=>Dn(o,e,t,r*.5)&&o.y1>=.05&&o.y1<=n+.03))return!1;for(let o of i.blocks){if(!Dn(o,e,t,r)||Nc(o,n,Ne.height))continue;let a=(i.shells||i.tops).find(c=>c.x0<=o.x0+.03&&c.x1>=o.x1-.03&&c.z0<=o.z0+.03&&c.z1>=o.z1-.03);if(!(a&&Qp(o)>Qp(a)*.4))return!0}return!1}function f1(i,e,t,n){let s=i.ceiling?i.ceiling(e,t):1/0;for(let r of i.tops)r.under!==void 0&&Dn(r,e,t)&&r.under>n+.01&&(s=Math.min(s,r.under));return s-Ne.height}function d1(i,e,t,n){let s=i.blocks.filter(o=>Dn(o,e,t,Ne.radius)),r=null;for(let o of i.tops)!Dn(o,e,t,Ne.radius)||o.y1<=n+.03||o.under!==void 0&&n<o.under&&(o.under<.25||!s.some(c=>c.x0>=o.x0-.03&&c.x1<=o.x1+.03&&c.z0>=o.z0-.03&&c.z1<=o.z1+.03&&(c.x1-c.x0)*(c.z1-c.z0)<.05))||(!r||o.y1>r.y1)&&(r=o);return r}function Uc(i,e,t,n){let s=-si(e.y,-1,1),r=si(e.x,-1,1);i.cling||(i.yaw-=r*Ne.turn*t);let o=-Math.sin(i.yaw),a=-Math.cos(i.yaw),c=Math.cos(i.yaw),l=-Math.sin(i.yaw);i.runT=s>.6&&!i.air&&!i.cling?i.runT+t:0,i.run+=((i.runT>Ne.sprintAfter?1:0)-i.run)*(1-Math.exp(-t*(i.runT>Ne.sprintAfter?4:10)));let h=s*(Ne.walk+(Ne.sprint-Ne.walk)*i.run);if(i.walking=Math.abs(h)/Ne.walk,i.climbing=!1,i.cling)return p1(i,s,r,e.jump,t,n,o,a,c,l);if(e.jump&&!i.air){let A=A1(n,i);if(A){let x=A.y1-i.y+.06,m=Math.sqrt(2*Ne.gravity*x),d=m/Ne.gravity+.12;i.vy=m,i.leap={vx:(A.px-i.x)/d,vz:(A.pz-i.z)/d,t:d},i.yaw=Math.atan2(-(A.px-i.x),-(A.pz-i.z))}else i.vy=Math.sqrt(2*Ne.gravity*Ne.hop);i.air=!0,i.run=i.runT=0}let u=o*h*t,f=a*h*t;if(i.leap&&(u=i.leap.vx*t,f=i.leap.vz*t,i.leap.t-=t,i.leap.t<=0&&(i.leap=null)),u||f){let A=i.x+u,x=i.z+f;Dc(n,A,x,i.y)||Lc(n,A,x,i.y)>0?!i.air&&s>.2&&(i.cling={t:0},i.run=i.runT=0):(i.x=A,i.z=x)}let p=Qi(n,i.x,i.z,i.y);if(i.air||i.y>p+1e-4){i.vy-=Ne.gravity*t,i.y+=i.vy*t,i.air=!0;let A=Qi(n,i.x,i.z,i.y+.05);i.y<=A&&i.vy<=0&&(i.y=A,i.vy=0,i.air=!1,i.leap=null)}else i.y=p,i.vy=0;return Ko(i,n)}function p1(i,e,t,n,s,r,o,a,c,l){let h=i.x+o*.04,u=i.z+a*.04,f=Dc(r,h,u,i.y)||Lc(r,h,u,i.y)>0;if(!f&&e>=-.3&&!n){let x=m1(r,h,u,i.y);if(x)return e0(i,x,o,a,r)}if(!f||e<-.3||n)return i.cling=null,i.air=!0,i.vy=n?Math.sqrt(2*Ne.gravity*Ne.hop):0,n&&(i.leap={vx:-o*.5,vz:-a*.5,t:.3}),Ko(i,r);let p=d1(r,h,u,i.y),A=f1(r,i.x,i.z,i.y);if(e>.2&&(i.climbing=!0,i.y=Math.min(i.y+Ne.climb*e*s,p?Math.max(p.y1,A):A),p&&(i.y>=p.y1-1e-6||i.y>=A-1e-6)))return e0(i,p,o,a,r);if(t){let x=i.x+c*t*Ne.shuffle*s,m=i.z+l*t*Ne.shuffle*s;!Dc(r,x,m,i.y)&&!Lc(r,x,m,i.y)&&(Dc(r,x+o*.04,m+a*.04,i.y)||Lc(r,x+o*.04,m+a*.04,i.y))&&(i.x=x,i.z=m,i.climbing=!0)}return i.vy=0,i.air=!1,i.y<=Qi(r,i.x,i.z,i.y)+1e-4&&e<=.2&&(i.cling=null),Ko(i,r)}function m1(i,e,t,n){let s=null;for(let r of i.tops)Dn(r,e,t,Ne.radius)&&r.y1>n-.03&&r.y1<=n+.03&&!Nc(r,n,Ne.height)&&(!s||r.y1>s.y1)&&(s=r);return s}function e0(i,e,t,n,s){i.y=e.y1,i.cling=null,i.air=!1,i.vy=0;for(let a of[.05,.09,.14]){let c=i.x+t*a,l=i.z+n*a;if(Qi(s,c,l,i.y)>=e.y1-.01)return i.x=c,i.z=l,Ko(i,s)}let[r,o]=t0(e,i.x,i.z,.04);return Qi(s,r,o,i.y)>=e.y1-.01&&(i.x=r,i.z=o),Ko(i,s)}function Ko(i,e){for(let t of e.tops)t.under!==void 0&&Dn(t,i.x,i.z)&&i.y<t.under&&i.y+Ne.height>t.under&&(i.y=Math.max(0,t.under-Ne.height),i.vy=Math.min(i.vy,0));for(let t of["x","y","z","yaw","vy","run"])Number.isFinite(i[t])||(i[t]=0);return i}function A1(i,e){let t=null,n=1/0;for(let s of i.tops){if(s.y1<=e.y+.05||s.y1-e.y>Ne.leapMax)continue;let[r,o]=t0(s,e.x,e.z,.06),a=Math.hypot(r-e.x,o-e.z);a<Ne.leapReach&&a<n&&!(Nc(s,e.y,Ne.height)&&Dn(s,e.x,e.z))&&(t={...s,px:r,pz:o},n=a)}return t}function n0(i,e,t,n){if(i.yaw-=(i.pointing?Sn.aim:Sn.turn)*si(e.x,-1,1)*t,i.yaw-=e.lookX||0,i.pitch=si(i.pitch-(e.lookY||0)-(i.pointing?Sn.aim*si(e.y,-1,1)*t:0),-1.3,1.1),i.eye+=((i.crouch?Sn.crouch:Sn.eye)-i.eye)*(1-Math.exp(-t*6)),!i.pointing){let o=-si(e.y,-1,1)*Sn.walk*(i.crouch?.5:1);i.x+=-Math.sin(i.yaw)*o*t,i.z+=-Math.cos(i.yaw)*o*t}let s=Sn.radius,r=n.walls;for(let o of n.blocks){let a=si(i.x,o.x0,o.x1),c=si(i.z,o.z0,o.z1),l=Math.hypot(i.x-a,i.z-c);if(!(l>=s))if(l>1e-6)i.x=a+(i.x-a)/l*s,i.z=c+(i.z-c)/l*s;else{let h=[[o.x0-s-i.x,0],[o.x1+s-i.x,0],[0,o.z0-s-i.z],[0,o.z1+s-i.z]].sort((u,f)=>Math.hypot(...u)-Math.hypot(...f))[0];i.x+=h[0],i.z+=h[1]}}return i.x=si(i.x,r.x0+s,r.x1-s),i.z=si(i.z,r.z0+s,r.z1-s),i}function Fc(i,e,t,n=1/0,s=.16){let r=[t[0]-i[0],t[1]-i[1],t[2]-i[2]],o=r[0]*e[0]+r[1]*e[1]+r[2]*e[2];return o<=0?!1:Math.hypot(r[0]-e[0]*o,r[1]-e[1]*o,r[2]-e[2]*o)<=s+o*.02&&n>o-.18}function bu(i){let e=Ai[i.kind];return i.on?(i0(i,Math.max(1,e.rest*(1-i.left/e.lasts))),"off"):i.wait>0?"wait":(i.on=!0,i.left=e.lasts,"on")}function s0(i,e){return i.on?(i.left-=e,i.left<=0?(i0(i,Ai[i.kind].rest),"empty"):null):i.wait>0&&(i.wait-=e)<=0?(i.wait=0,"ready"):null}var Ne,Sn,si,Nc,Qp,Jr,Oc,Ai,Bc,i0,r0,$r=Tt(()=>{Ne={height:.12,radius:.035,walk:.55,sprint:1.4,sprintAfter:1,turn:2.6,climb:.9,shuffle:.3,gravity:4.5,hop:.14,leapReach:.5,leapMax:1.4},Sn={eye:1.55,crouch:.4,radius:.2,walk:1.2,turn:1.8,aim:.9},si=(i,e,t)=>Math.max(e,Math.min(t,i));Nc=(i,e,t)=>i.under!==void 0&&e+t<i.under;Qp=i=>(i.x1-i.x0)*(i.z1-i.z0);Jr=(i,e,t=0)=>({x:i,y:0,z:e,yaw:t,vy:0,air:!1,climbing:!1,cling:null,leap:null,walking:0,run:0,runT:0});Oc=(i,e,t=0)=>({x:i,z:e,yaw:t,pitch:-.15,eye:Sn.eye,crouch:!1,pointing:!1});Ai={binoculars:{zoom:4,lasts:6,rest:8,turn:.25},magnifier:{zoom:3,lasts:8,rest:6}},Bc=i=>({kind:i,on:!1,left:Ai[i].lasts,wait:0,waitOf:1}),i0=(i,e)=>{i.on=!1,i.wait=i.waitOf=e,i.left=Ai[i.kind].lasts};r0=i=>i.on?i.left/Ai[i.kind].lasts:i.wait>0?1-i.wait/i.waitOf:1});async function E1(){var i;if(jo&&Date.now()-h0<12*36e5)return jo;try{let e=new AbortController,t=setTimeout(()=>e.abort(),5e3),n=await fetch(x1,{signal:e.signal});clearTimeout(t);let s=await n.json();if(!((i=s.iceServers)!=null&&i.length))throw new Error("no relay");jo=s.iceServers.map(r=>({...r,urls:[].concat(r.urls).filter(o=>!/:53\b/.test(o))})),h0=Date.now()}catch{return jo||y1}return jo}var g1,o0,a0,x1,y1,_1,v1,M1,b1,c0,l0,jo,h0,u0,Eu,zc,f0=Tt(()=>{oa();g1="https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js",o0=mo?"sb-hide-elf-lab-":"sb-hide-elf-",a0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",x1="https://dogfight-relay.sean-bostic.workers.dev",y1=[{urls:["stun:stun.cloudflare.com:3478","stun:stun.l.google.com:19302"]}],_1=2e3,v1=9e4,M1=5e3,b1=2e4,c0=null,l0=()=>c0||=new Promise((i,e)=>{if(globalThis.Peer){i();return}let t=Object.assign(document.createElement("script"),{src:g1,onload:i,onerror:()=>{c0=null,e(new Error("offline"))}});document.head.append(t)}),jo=null,h0=0;u0=(()=>{try{let i=sessionStorage.getItem("hide-elf-net");return i||(i=Math.random().toString(36).slice(2,10),sessionStorage.setItem("hide-elf-net",i)),i}catch{return Math.random().toString(36).slice(2,10)}})(),Eu=i=>String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4),zc=class{constructor(e){this.h=e,this.role=null,this.code="",this.peer=null,this.conns=new Map,this.conn=null,this.token=u0,this.lastHeard=0,this.status="",document.addEventListener("visibilitychange",()=>{!document.hidden&&this.role&&(this.awake(),this.watch())})}say(e){var t,n;this.status=e,(n=(t=this.h).onStatus)==null||n.call(t,e)}async host(){this.leave(),this.say("Opening a room\u2026"),await l0();for(let e=0;e<6&&!this.peer;e++){let t=Array.from({length:4},()=>a0[Math.floor(Math.random()*a0.length)]).join("");try{this.peer=await this.open(o0+t),this.code=t}catch(n){if(n.type!=="unavailable-id")throw this.say(`Couldn't open a room (${n.type||n.message})`),n}}return this.role="host",this.say(""),this.peer.on("connection",e=>{var n;let t=((n=e.metadata)==null?void 0:n.token)||e.peer;e.on("open",()=>{var r,o,a,c,l;let s=this.conns.get(t);s&&s!==e&&((r=s.removeAllListeners)==null||r.call(s),s.close()),this.conns.set(t,e),(l=(c=this.h).onJoin)==null||l.call(c,t,String(((o=e.metadata)==null?void 0:o.name)||"").slice(0,12),!!((a=e.metadata)!=null&&a.watch))}),e.on("data",s=>{var r,o;this.conns.get(t)===e&&((o=(r=this.h).onMsg)==null||o.call(r,t,s))}),e.on("close",()=>{var s,r;this.conns.get(t)===e&&(this.conns.delete(t),(r=(s=this.h).onLeave)==null||r.call(s,t))}),e.on("error",()=>{})}),this.awake(),this.code}send(e,t){let n=this.conns.get(e);if(n!=null&&n.open)try{n.send(t)}catch{}}broadcast(e){for(let t of this.conns.values())if(t.open)try{t.send(e)}catch{}}kick(e){let t=this.conns.get(e);this.conns.delete(e),t==null||t.close()}async join(e){return e=Eu(e),e.length!==4?(this.say("Room codes are 4 letters"),!1):(this.leave(),this.say(`Joining ${e}\u2026`),await l0(),this.peer=await this.open(),this.role="guest",this.code=e,this.since=Date.now(),this.peer.on("error",t=>{var n,s;t.type==="peer-unavailable"&&(this.everIn?this.retry():(this.say(`No game called ${e}`),this.leave(),(s=(n=this.h).onLost)==null||s.call(n,!1)))}),this.dial(),this.awake(),this.watch(),clearTimeout(this.joinT),this.joinT=setTimeout(()=>{var t,n;if(this.role==="guest"&&!this.everIn){let s=this.code;this.leave(),this.say(`Couldn't reach room ${s}`),(n=(t=this.h).onLost)==null||n.call(t,!1,`Couldn't reach room ${s}`)}},b1),!0)}dial(){if(this.role!=="guest"||!this.peer||this.peer.destroyed)return;if(this.peer.disconnected)try{this.peer.reconnect()}catch{}let e=this.peer.connect(o0+this.code,{reliable:!0,serialization:"json",metadata:{token:u0,name:this.name||"",watch:!!this.spectate}});this.conn=e,e.dialAt=Date.now(),this.everIn||setTimeout(()=>{this.conn===e&&!e.open&&this.role==="guest"&&(this.conn=null,e.close(),this.dial())},8e3),e.on("open",()=>{this.conn===e&&(this.everIn=!0,this.lastHeard=Date.now(),this.lostAt=0,this.say(""))}),e.on("data",t=>{var n,s,r,o;if(this.conn===e){if(this.lastHeard=Date.now(),(t==null?void 0:t.t)==="bye"){this.leave(),(s=(n=this.h).onLost)==null||s.call(n,!0,"The host ended the game");return}(o=(r=this.h).onMsg)==null||o.call(r,"host",t)}}),e.on("close",()=>{this.conn===e&&this.retry()}),e.on("error",()=>{})}toHost(e){var t;if((t=this.conn)!=null&&t.open)try{this.conn.send(e)}catch{}}retry(){var e,t;if(this.role==="guest"){if(this.lostAt||(this.lostAt=Date.now(),this.say("Reconnecting\u2026")),Date.now()-this.lostAt>v1){this.leave(),(t=(e=this.h).onLost)==null||t.call(e,!0,"Lost the host");return}this.retryT||(this.retryT=setTimeout(()=>{var n;this.retryT=null,this.role==="guest"&&!((n=this.conn)!=null&&n.open)&&this.dial()},_1))}}watch(){clearInterval(this.watchT),this.watchT=setInterval(()=>{var e,t;if(this.role!=="guest"){clearInterval(this.watchT);return}if((e=this.conn)!=null&&e.open&&Date.now()-this.lastHeard>M1){let n=this.conn;this.conn=null,n.close(),this.retry()}else if(!((t=this.conn)!=null&&t.open)&&this.lostAt){if(this.conn&&Date.now()-this.conn.dialAt>6e3){let n=this.conn;this.conn=null,n.close()}this.retry()}},1e3)}async open(e){let t={debug:0,config:{iceServers:await E1()}};return new URLSearchParams(location.search).has("relayonly")&&(t.config.iceTransportPolicy="relay"),new Promise((n,s)=>{let r=e?new Peer(e,t):new Peer(t),o=a=>{r.destroy(),s(a)};r.once("open",()=>{r.off("error",o),r.on("disconnected",()=>setTimeout(()=>{if(!r.destroyed&&r.disconnected)try{r.reconnect()}catch{}},1e3)),n(r)}),r.once("error",o)})}leave(){var t,n,s,r;this.role==="host"&&this.broadcast({t:"bye"}),clearTimeout(this.retryT),this.retryT=null,clearInterval(this.watchT),clearTimeout(this.joinT);let e=this.peer;this.peer=null,this.conn=null,this.conns.clear(),this.role=null,this.code="",this.everIn=!1,this.lostAt=0,e&&setTimeout(()=>e.destroy(),200),(r=(n=(t=this.wake)==null?void 0:t.release)==null?void 0:(s=n.call(t)).catch)==null||r.call(s,()=>{}),this.wake=null}async awake(){try{this.role&&!this.wake&&navigator.wakeLock&&(this.wake=await navigator.wakeLock.request("screen"),this.wake.addEventListener("release",()=>{this.wake=null}))}catch{}}}});function p0(i){let e={on:!1,host:!1,players:new Map,phase:"lobby",left:0,seeker:null,round:0,firstFound:null,nextSeeker:null,times:{hide:45,seek:60}},t=new zc({onMsg:d,onJoin:o,onLeave:a,onLost:y,onStatus:()=>i.render()});e.net=t,e.me=t.token;let n=0,s=0,r=()=>e.players.get(t.token);function o(g,_){let T=e.players.get(g);T?(clearTimeout(T.gone),T.gone=null,T.name=_||T.name):(T={id:g,name:_||`Elf ${e.players.size+1}`,role:e.phase==="lobby"?"elf":"wait",found:!1,st:null},e.players.set(g,T)),t.send(g,{t:"hello",phase:e.phase,round:e.round,seeker:e.seeker,times:e.times,order:[...e.players.keys()]}),e.phase!=="lobby"&&T.role!=="wait"&&t.send(g,h()),i.render()}function a(g){let _=e.players.get(g);_&&(clearTimeout(_.gone),_.gone=setTimeout(()=>c(g),T1*1e3))}function c(g){e.players.get(g)&&(e.players.delete(g),i.render(),e.phase!=="lobby"&&e.phase!=="results"&&g===e.seeker?p("elves"):f())}function l(g,_){let T=e.players.get(g);T&&(_.t==="me"?(T.st=_.s,T.at=performance.now()):_.t==="name"?(T.name=String(_.name||"").slice(0,12)||T.name,i.render()):_.t==="got"?u(_.id,g):_.t==="shh"?(t.broadcast({t:"shh",id:g,at:_.at}),i.onShh(g,_.at)):_.t==="leave"&&(t.kick(g),c(g)))}let h=()=>({t:"round",seeker:e.seeker,n:e.round,hide:e.times.hide,seek:e.times.seek,order:[...e.players.keys()],roles:[...e.players.values()].map(g=>[g.id,g.role])});e.startRound=()=>{if(!e.host||e.players.size<2)return!1;let g=[...e.players.keys()],_=e.nextSeeker&&e.players.has(e.nextSeeker)?e.nextSeeker:null;if(!_){let E=g.indexOf(e.seeker);_=E<0?g[Math.floor(Math.random()*g.length)]:g[(E+1)%g.length]}e.seeker=_,e.round++,e.firstFound=null,e.nextSeeker=null;for(let E of e.players.values())E.role=E.id===_?"seeker":"elf",E.found=!1;e.phase="hide",e.left=e.times.hide;let T=h();return t.broadcast(T),m(T),!0};function u(g,_){let T=e.players.get(g);if(!e.host||e.phase!=="seek"||_!==e.seeker||!T||T.role!=="elf"||T.found)return;T.found=!0;let E=!e.firstFound;E&&(e.firstFound=g),t.broadcast({t:"found",id:g,by:_,first:E}),i.onFound(g,_,E),f()}function f(){if(!e.host||e.phase!=="seek")return;let g=[...e.players.values()].filter(_=>_.role==="elf");g.length&&g.every(_=>_.found)&&p("seeker")}function p(g){e.phase="results",s=S1,e.nextSeeker=e.firstFound;let _={t:"end",winner:g,found:[...e.players.values()].filter(T=>T.found).map(T=>T.id),firstFound:e.firstFound,next:e.firstFound||null};t.broadcast(_),i.onEnd(_)}function A(g){e.phase==="hide"||e.phase==="seek"?(e.left-=g,e.left<=0&&(e.phase==="hide"?(e.phase="seek",e.left=e.times.seek,t.broadcast({t:"phase",phase:"seek"}),i.onPhase("seek")):p("elves"))):e.phase==="results"&&(s-=g)<=0&&(e.startRound()||(e.phase="lobby",t.broadcast({t:"phase",phase:"lobby"}),i.onPhase("lobby")));let _=r();_&&(_.st=i.myState(),_.at=performance.now()),!((n+=g)<d0)&&(n=0,t.conns.size&&t.broadcast({t:"s",ph:e.phase,left:Su(e.left),P:[...e.players.values()].map(T=>[T.id,T.name,T.role,T.found?1:0,T.st])}))}function x(g){if(g.t==="hello")e.phase=g.phase,e.round=g.round,e.seeker=g.seeker,e.times=g.times,i.render();else if(g.t==="round")m(g);else if(g.t==="phase")e.phase=g.phase,i.onPhase(g.phase);else if(g.t==="found"){let _=e.players.get(g.id);_&&(_.found=!0),i.onFound(g.id,g.by,g.first)}else if(g.t==="shh")i.onShh(g.id,g.at);else if(g.t==="end")e.phase="results",i.onEnd(g);else if(g.t==="s"){e.phase=g.ph,e.left=g.left;let _=performance.now(),T=new Set;for(let[E,I,N,v,R]of g.P){T.add(E);let z=e.players.get(E);z||(z={id:E},e.players.set(E,z)),Object.assign(z,{name:I,role:N,found:!!v}),E!==t.token&&R&&(z.prev=z.cur,z.cur={st:R,at:_})}for(let E of[...e.players.keys()])T.has(E)||e.players.delete(E);i.render()}}function m(g){e.phase="hide",e.round=g.n,e.seeker=g.seeker,e.times={hide:g.hide,seek:g.seek},e.left=g.hide,e.firstFound=null;for(let[_,T]of g.roles){let E=e.players.get(_);E||(E={id:_},e.players.set(_,E)),E.role=T,E.found=!1}i.onRound({seeker:g.seeker,n:g.n,hide:g.hide,seek:g.seek,order:g.order})}function d(g,_){e.host?l(g,_):x(_)}function y(g,_){!e.on||e.host||(e.on=!1,e.players.clear(),i.onLost(_||"Lost the host"))}return e.update=g=>{if(!e.on)return;if(e.host){A(g);return}if((e.phase==="hide"||e.phase==="seek")&&(e.left-=g),(n+=g)<d0)return;n=0;let _=i.myState();_&&t.toHost({t:"me",s:_.map(Su)})},e.others=()=>{let g=performance.now()-120,_=[];for(let T of e.players.values()){if(T.id===t.token)continue;let E=null;if(e.host)E=T.st;else if(T.cur){let I=T.prev||T.cur,N=T.cur,v=N.at>I.at?Math.max(0,Math.min(1,(g-I.at)/(N.at-I.at))):1;E=I.st&&N.st&&I.st[0]===N.st[0]?N.st.map((R,z)=>typeof R=="number"&&z>0&&z<5?I.st[z]+(R-I.st[z])*v:R):N.st}E&&_.push({id:T.id,name:T.name,role:T.role,found:T.found,st:E})}return _},e.myRole=()=>{var g;return((g=r())==null?void 0:g.role)||(e.seeker===t.token?"seeker":"elf")},e.name=g=>{var _;return((_=e.players.get(g))==null?void 0:_.name)||"An elf"},e.sendFound=g=>{e.host?u(g,t.token):t.toHost({t:"got",id:g})},e.sendShh=g=>{let _=g.map(Su);e.host?t.broadcast({t:"shh",id:t.token,at:_}):t.toHost({t:"shh",at:_})},e.setName=g=>{t.name=g;let _=r();_&&(_.name=g||_.name),e.on&&!e.host&&t.toHost({t:"name",name:g}),i.render()},e.hostGame=async(g,_)=>{e.leave(),t.name=g,e.times=_;try{await t.host()}catch{return i.render(),null}return e.on=!0,e.host=!0,e.phase="lobby",e.round=0,e.seeker=null,e.players.set(t.token,{id:t.token,name:g||"Host",role:"elf",found:!1,st:null}),i.render(),t.code},e.join=async(g,_)=>{e.leave(),t.name=_;let T=!1;try{T=await t.join(Eu(g))}catch{t.say("Couldn't get online")}return T&&(e.on=!0,e.host=!1,e.phase="lobby",e.players.set(t.token,{id:t.token,name:_||"Me",role:"elf"})),i.render(),T},e.leave=()=>{e.on&&!e.host&&t.toHost({t:"leave"});for(let g of e.players.values())clearTimeout(g.gone);e.on=e.host=!1,e.players.clear(),e.phase="lobby",e.round=0,e.seeker=null,t.leave(),i.render()},e.code=()=>t.code,e.status=()=>t.status,e}var d0,S1,T1,Su,m0=Tt(()=>{f0();d0=1/12,S1=7,T1=15,Su=i=>typeof i=="number"?Math.round(i*1e3)/1e3:i});function R1(i){let e=[];for(let n of i.tops){if(n.name==="sill"||n.x1-n.x0<.08||n.z1-n.z0<.08)continue;let[s,r]=n.pts?[(n.pts[0][0]+n.pts[2][0])/2,(n.pts[0][1]+n.pts[2][1])/2]:[(n.x0+n.x1)/2,(n.z0+n.z1)/2];if(n.name==="beam")for(let o=.2;o<1;o+=.2)e.push({x:n.x0+(n.x1-n.x0)*o,z:r,y:n.y1,how:"up"});else n.y1>.25&&e.push({x:s,z:r,y:n.y1,how:"up"});n.under!==void 0&&n.under>Ne.height+.03&&n.under<.8&&e.push({x:s,z:r,y:0,how:"under"})}let t=i.walls;for(let n=.05;n<1;n+=.1)for(let[s,r]of[[t.x0+.08,t.z0+(t.z1-t.z0)*n],[t.x1-.08,t.z0+(t.z1-t.z0)*n],[t.x0+(t.x1-t.x0)*n,t.z0+.08],[t.x0+(t.x1-t.x0)*n,t.z1-.08]])Qi(i,s,r,0)<.01&&e.push({x:s,z:r,y:0,how:"behind"});return e.filter(n=>Math.abs(Qi(i,n.x,n.z,n.y+.01)-n.y)<.02)}function C1(i,e,t,n){let s=e.x-i.x,r=e.z-i.z,o=Math.hypot(s,r);if(t.stuck=Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)<.15*n?t.stuck+n:0,t.x=i.x,t.y=i.y,t.z=i.z,t.round>0)return t.round-=n,{x:t.side*.9,y:-.8};if(t.stuck>.5)return t.stuck=0,t.round=.6+t.rand()*.6,t.side=t.rand()<.5?-1:1,{x:0,y:i.cling?1:0};if(i.cling)return{x:0,y:-1};let a=w1(Math.atan2(-s,-r)-i.yaw);return{x:Math.max(-1,Math.min(1,-a*3)),y:o<.04?0:-(Math.abs(a)>1.2?.2:o<.25?.5:1)}}function P1(i,e,t,n,s,r){let o=Jr(t,n,Math.atan2(-(e.x-t),-(e.z-n))),a={x:t,y:0,z:n,stuck:0,round:0,side:1,rand:r},c=[];for(let l=0;l<s;l+=Qr)if(Uc(o,C1(o,e,a,Qr),Qr,i),c.push([o.x,o.y,o.z,o.yaw,o.walking,o.run,o.climbing?1:0,o.cling?1:0,o.air?1:0]),I1(o,e))return c;return null}function A0(i,e,{sx:t,sz:n,time:s,hidden:r,rand:o=Math.random}){let a=R1(i).map(h=>{let u=Math.hypot(h.x-t,h.z-n),f=(r(h.x,h.y+Ne.height/2,h.z)?2:0)+(h.how==="under"?1.5:h.how==="up"?Math.min(1.5,h.y):.5)+Math.min(1,u/3);return{...h,score:f+o()*1.5}}).filter(h=>Math.hypot(h.x-t,h.z-n)>1).sort((h,u)=>u.score-h.score),c=[],l=[...a].sort((h,u)=>Math.hypot(h.x-t,h.z-n)-Math.hypot(u.x-t,u.z-n));for(let h=0;h<e;h++){let u=0;for(let f of[...a.slice(0,30),...l]){if(c.some(y=>Math.hypot(y.spot.x-f.x,y.spot.z-f.z)<1.2))continue;if(++u>50)break;let p=Math.atan2(t-f.x,n-f.z)+(h%2?.5:-.5),A=t+Math.sin(p)*.75,x=n+Math.cos(p)*.75;if(Qi(i,A,x,0)>.01||i.blocks.some(y=>Dn(y,A,x,Ne.radius)))continue;let m=h*2,d=P1(i,f,A,x,s-m,o);if(d){c.push({run:d,spot:f,wait:m});break}}}return c}function g0(i,e){if(e-=i.wait||0,e<0){let o=i.run[0];return{x:o[0],y:o[1],z:o[2],yaw:o[3],walking:0,run:0,climbing:!1,hanging:!1,air:!1,sit:0,asleep:!1,moving:!0}}let t=Math.min(i.run.length-1,Math.floor(e/Qr)),n=i.run[t],s=e/Qr>=i.run.length,r=s?e-i.run.length*Qr:-1;return{x:n[0],y:n[1],z:n[2],yaw:n[3],walking:s?0:n[4],run:s?0:n[5],climbing:!s&&!!n[6],hanging:!s&&!!n[7],air:!s&&!!n[8],sit:r<0?0:Math.min(1,r/.7),asleep:r>1,moving:!s}}var Qr,w1,I1,x0=Tt(()=>{$r();Qr=1/30,w1=i=>Math.atan2(Math.sin(i),Math.cos(i));I1=(i,e)=>!i.air&&!i.cling&&Math.hypot(e.x-i.x,e.z-i.z)<.08&&Math.abs(i.y-e.y)<.03});function Wn(i,e){return eo||(eo=new Ys(new Uint8Array([90,170,255]),3,1,Wo),eo.minFilter=eo.magFilter=Ht,eo.needsUpdate=!0),new qr({color:i,gradientMap:eo,...e?{map:e}:{}})}function N1(i,e){let t=document.createElement("canvas");t.width=512,t.height=256;let n=t.getContext("2d"),s=512,r=256;n.fillStyle=i,n.fillRect(0,0,s,r),n.fillStyle="rgba(0,0,0,0.18)";for(let u=0;u<s;u+=8)n.fillRect(u,r-34,4,34);n.fillRect(0,0,s,10);let o=e==="him"?["#c92a2a","#fff"]:["#f8f9fa","#2b8a3e"],a=70,c=56;n.fillStyle=o[0],n.fillRect(0,a,s,c),n.fillStyle=o[1],n.strokeStyle=o[1],n.lineWidth=7;for(let u=0;u<s;u+=32)e==="him"?(n.beginPath(),n.moveTo(u+16,a+8),n.lineTo(u+28,a+c/2),n.lineTo(u+16,a+c-8),n.lineTo(u+4,a+c/2),n.closePath(),n.fill()):(n.beginPath(),n.moveTo(u,a+c-14),n.lineTo(u+16,a+14),n.lineTo(u+32,a+c-14),n.stroke());n.fillStyle=o[e==="him"?1:0],n.fillRect(0,a-8,s,5),n.fillRect(0,a+c+3,s,5);let l=(u,f,p)=>{n.strokeStyle="#fff",n.lineWidth=4;for(let A=0;A<3;A++){let x=Math.sin(A*Math.PI/3)*p,m=Math.cos(A*Math.PI/3)*p;n.beginPath(),n.moveTo(u-m,f-x),n.lineTo(u+m,f+x),n.stroke()}};for(let u=0;u<s;u+=64)for(let[f,p]of[[160,0],[200,32]])e==="her"?l(u+p+16,f,11):(n.fillStyle="#fff",n.beginPath(),n.arc(u+p+16,f,5,0,Math.PI*2),n.fill());let h=new As(t);return h.colorSpace=gt,h.wrapS=ui,h.anisotropy=4,h}function U1(i,e,t){let n=Tu.subVectors(e,i),s=Math.min(n.length(),Es+kc-.001);n.normalize();let r=(Es*Es-kc*kc+s*s)/(2*s),o=Math.sqrt(Math.max(0,Es*Es-r*r)),a=t.clone().addScaledVector(n,-t.dot(n)).normalize(),c=i.clone().addScaledVector(n,r).addScaledVector(a,o),l=new an().setFromUnitVectors(_0,y0.subVectors(c,i).normalize()),h=y0.subVectors(e,c).normalize().applyQuaternion(l.clone().invert());return{sh:l,el:new an().setFromUnitVectors(_0,h.clone())}}function v0(i=so[0]){let e=i==="her",t=e?{jumper:"#c0392b",sleeve:12597547,legs:3878730,boot:13148794,cuff:16446440,hair:14394698,skin:16175022}:{jumper:"#2f8f46",sleeve:3116870,legs:3366041,boot:5978660,cuff:3116870,hair:4007444,skin:15713180},n=Wn(t.skin),s=Wn(t.hair),r=Wn(16447214),o=Wn(1907226),a=Wn(t.sleeve),c=Wn(t.legs),l=Wn(t.boot),h=Wn(t.cuff),u=Wn(15895692),f=Wn(13644077),p=new Ze,A=new Ze,x=new Ze;p.add(A),A.add(x),x.position.y=to;let m=new Pt(1,20,14),d=(F,Z,P,B,Y,Q,J=1,$=J,te=J)=>{let re=new xt(F,Z);return re.position.set(B,Y,Q),re.scale.set(J,$,te),re.castShadow=!0,P.add(re),re},y=(F,Z,P,B,Y,Q,J=Q,$=Q)=>d(m,F,Z,P,B,Y,Q,J,$),g=F=>F-to,_=[-1,1].map(F=>{let Z=new Ze;Z.position.set(F*.1,to,0),A.add(Z),d(new Ki(.078,no-.08,4,12),c,Z,0,-no/2,0);let P=new Ze;P.position.y=-no,Z.add(P),d(new Ki(.066,io-.06,4,12),e?l:c,P,0,-io/2,0);let B=new Ze;return B.position.y=-io,P.add(B),y(l,B,0,-.022,-.045,.078,.06,.135),e&&(d(new hn(.07,.024,8,18),h,P,0,-.1,0).rotation.x=Math.PI/2),{hip:Z,knee:P,ankle:B}}),T=e?[[.2,.74],[.215,.8],[.19,.9],[.165,1],[.175,1.1],[.185,1.2],[.175,1.28],[.15,1.35],[.09,1.39],[.05,1.41]]:[[.185,.76],[.205,.82],[.215,.92],[.22,1.02],[.22,1.12],[.215,1.22],[.195,1.3],[.155,1.37],[.09,1.41],[.05,1.42]],E=new Ho(T.map(([F,Z])=>new fe(F,g(Z))),28);d(E,Wn(16777215,N1(t.jumper,i)),x,0,0,0),y(c,x,0,g(.79),0,e?.19:.18,.1,.14),d(new hn(e?.19:.205,.025,8,28),Wn(t.sleeve),x,0,g(e?.75:.77),0).rotation.x=Math.PI/2,d(new st(.055,.06,.08,12),n,x,0,g(1.43),0),d(new hn(.065,.022,8,18),a,x,0,g(1.405),0).rotation.x=Math.PI/2;let I=new Ze;I.position.y=g(Nn.y),x.add(I),y(n,I,0,0,0,Nn.r,Nn.r*1.02,Nn.r*.97);let N=(F,Z,P=0)=>-(Math.sqrt(Math.max(0,Nn.r*Nn.r-F*F-Z*Z))*.97+P),v=Sn.eye-Nn.y;for(let F of[-1,1])y(o,I,F*.048,v,N(F*.048,v),.019,.026,.012),y(r,I,F*.048+.006,v+.009,N(F*.048,v,.009),.006),y(u,I,F*.082,v-.05,N(F*.082,v-.05,-.004),.026,.018,.012),y(o,I,F*.05,v+.046,N(F*.05,v+.046,.004),e?.022:.028,e?.006:.009,.008).rotation.z=F*(e?-.25:-.12),e||y(n,I,F*Nn.r*.98,-.01,.005,.026,.038,.022);if(y(Wn(e?15775894:15051394),I,0,v-.032,N(0,v-.032,.012),.024,.02,.02),d(new hn(.036,.0075,6,16,Math.PI),e?f:o,I,0,v-.075,N(0,v-.075,-.004)).rotation.set(-.35,0,Math.PI),e){let F=d(new Pt(Nn.r*1.07,22,14,0,Math.PI*2,0,Math.PI*.55),s,I,0,.004,.006);F.rotation.x=.42,y(s,I,0,-.1,.05,.155,.2,.105);for(let Z of[-1,1])y(s,I,Z*.118,-.075,-.005,.045,.13,.075);y(s,I,0,.088,N(0,.088,.004),.1,.045,.04).rotation.x=-.4,d(new hn(Nn.r*1.14,.013,8,24,Math.PI),f,I,0,-.005,.005);for(let Z of[-1,1])y(r,I,Z*Nn.r*1.08,-.01,.004,.035,.052,.05)}else{let F=d(new Pt(Nn.r*1.05,22,14,0,Math.PI*2,0,Math.PI*.62),s,I,0,0,.004);F.rotation.x=.62;for(let B of[-1,1])y(s,I,B*Nn.r*.96,0,-.04,.018,.045,.03);let Z=new Ze;Z.position.set(0,.075,.012),Z.rotation.set(.22,0,0),I.add(Z),d(new hn(Nn.r*.95,.034,10,28),r,Z,0,0,0).rotation.x=Math.PI/2,d(new st(.075,Nn.r*.97,.13,22),f,Z,0,.065,0),d(new wi(.078,.2,18),f,Z,.035,.2,.03).rotation.set(.35,0,-.55),y(r,Z,.12,.265,.085,.04)}let z=[-1,1].map(F=>{let Z=new Ze;Z.position.set(F*(e?.2:.225),g(D1),0),x.add(Z),y(a,Z,0,-.01,0,.066),d(new Ki(.064,Es-.06,4,12),a,Z,0,-Es/2,0);let P=new Ze;P.position.y=-Es,Z.add(P),d(new Ki(.058,.2,4,12),a,P,0,-.12,0),d(new hn(.052,.018,8,16),e?r:a,P,0,-.245,0).rotation.x=Math.PI/2;let B=new Ze;B.position.y=-kc,P.add(B),y(n,B,0,0,0,.05,.062,.03),y(n,B,F*.044,-.008,0,.018,.032,.018).rotation.z=F*-.5;let Y=new an().setFromAxisAngle(Tu.set(0,1,0),F*Math.PI/2),Q=new w(F*.05,g(Sn.eye)+.005,N(F*.05,v,.035)),J=U1(Z.position,Q,new w(F*.8,-1.4,-.2)),$=new an().setFromAxisAngle(Tu.set(0,0,1),-F*.2),te=J.sh.clone().multiply(J.el).invert().multiply($);return{sh:Z,el:P,hand:B,side:F,rest:Y,count:{sh:J.sh,el:J.el,hand:te}}});return p.userData={look:i,lift:A,body:x,head:I,arms:z,legs:_},p}function M0(i,e,{counting:t=!1,crouch:n=!1}={}){let s=i.userData,{lift:r,body:o,head:a,arms:c,legs:l}=s,h=s.t===void 0?0:Math.min(.25,e-s.t),u=s.x===void 0?0:Math.hypot(i.position.x-s.x,i.position.z-s.z);s.t=e,s.x=i.position.x,s.z=i.position.z,s.walk=(s.walk||0)+((h>0?Math.min(1,u/h/Sn.walk):0)-(s.walk||0))*Math.min(1,h*8),s.step=(s.step||0)+u*5.5;let f=t?0:s.walk*(n?.4:1),p=Math.sin(s.step)*.5*f,A=n?1.3:0,x=n?-2:0;l.forEach(({hip:y,knee:g,ankle:_},T)=>{let E=T?-p:p;y.rotation.x=A+E,g.rotation.x=x-Math.max(0,-E)*.9,_.rotation.x=-(y.rotation.x+g.rotation.x)});let m=A,d=A+x;r.position.set(0,n?-(to-no*Math.cos(m)-io*Math.cos(d)-(to-no-io)):Math.abs(p)*.03,n?no*Math.sin(m)+io*Math.sin(d):0),o.rotation.set(n?-.45:-.05*f,0,t?Math.sin(e*1.3)*.03:0),o.position.y=to+(t||f>.1?0:Math.sin(e*2.1)*.004),a.rotation.x=n?.35:0;for(let{sh:y,el:g,hand:_,side:T,rest:E,count:I}of c){if(t){y.quaternion.copy(I.sh),g.quaternion.copy(I.el),_.quaternion.copy(I.hand);continue}y.rotation.set(n?.7:T*p,0,T*.16,"XYZ"),g.rotation.set(n?.6:.15+.35*f,0,0),_.quaternion.copy(E)}}var so,L1,Nn,to,no,io,D1,Es,kc,Tu,y0,_0,eo,b0=Tt(()=>{Bn();$r();so=["him","her"],L1=Sn.eye/.93,Nn={y:L1-.135,r:.135},to=.8,no=.38,io=.34,D1=1.34,Es=.28,kc=.31,Tu=new w,y0=new w,_0=new w(0,-1,0),eo=null});function Hc(){let i=new Ze,e=new Ze;i.add(e);let t=(p,A=.6)=>new pi({color:p,roughness:A}),n=t(14034984,.5),s=t(2853438),r=t(16316922,.8),o=t(15976869,.7),a=t(1710618,.4),c=(p,A,x,m,d,y=e,g=0,_=0)=>{let T=new xt(p,A);return T.position.set(x,m,d),T.rotation.set(g,0,_),T.castShadow=!0,y.add(T),T},l=Ne.height/.12,h=[-1,1].map(p=>{let A=new Ze;return A.position.set(p*.009,.034,0),e.add(A),c(new st(.0065,.006,.03,10),s,0,-.016,0,A),c(new Pt(.0085,10,8),n,0,-.031,-.004,A).scale.set(1,.6,1.5),A});c(new st(.016,.019,.034,16),n,0,.05,0),c(new st(.0195,.0195,.005,16),a,0,.036,0),c(new Zn(.008,.007,.004),t(16765503,.3),0,.036,-.019),c(new hn(.0145,.0045,8,20),r,0,.067,0,e,Math.PI/2);let u=[-1,1].map(p=>{let A=new Ze;return A.position.set(p*.019,.063,0),e.add(A),c(new st(.005,.0055,.026,8),n,0,-.013,0,A),c(new Pt(.0055,8,6),r,0,-.027,0,A),A.rotation.z=p*.25,A});c(new Pt(.017,16,12),o,0,.083,0);for(let p of[-.006,.006])c(new Pt(.0022,8,6),a,p,.086,-.0155);for(let p of[-.009,.009])c(new Pt(.003,8,6),t(15764620),p,.079,-.013);c(new Pt(.0035,8,6),t(15247496),0,.081,-.017),c(new st(.0175,.0175,.005,16),r,0,.096,0);let f=c(new wi(.0165,.034,16),n,.002,.113,.002,e,.25,-.2);return c(new Pt(.0055,10,8),r,.006,.13,.006),i.scale.setScalar(l),i.userData.parts={legs:h,arms:u,body:e},i}function Vc(i,e,{walking:t=0,run:n=0,climbing:s=!1,hanging:r=!1,air:o=!1,sit:a=0,asleep:c=!1,laugh:l=!1}={}){let{legs:h,arms:u,body:f}=i.userData.parts;if(f.rotation.x=0,f.position.set(0,0,0),l){h[0].rotation.x=h[1].rotation.x=0,u[0].rotation.x=u[1].rotation.x=-.7+Math.sin(e*22)*.15,f.rotation.x=.25+Math.sin(e*22)*.05,f.position.y=Math.abs(Math.sin(e*11))*.006;return}if(a>0){let d=a*a*(3-2*a),y=(g,_)=>g+(_-g)*d;h[0].rotation.x=y(h[0].rotation.x*0,1.45),h[1].rotation.x=y(0,1.45),u[0].rotation.x=u[1].rotation.x=y(0,.9),f.position.y=y(0,-.028),f.position.z=y(0,.004),f.rotation.x=c?.12+Math.sin(e*1.3)*.04:0;return}let p=14+10*n,A=.7+.35*n,x=Math.sin(e*p),m=s?Math.sin(e*12)*.6:r?.15:Math.min(t,1)*x*A;if(h[0].rotation.x=m,h[1].rotation.x=-m,s||r){let d=s?Math.sin(e*12)*.5:0;u[0].rotation.x=-2.6+d,u[1].rotation.x=-2.6-d}else o?u[0].rotation.x=u[1].rotation.x=-1.6:(u[0].rotation.x=m*(.6+.9*n),u[1].rotation.x=-m*(.6+.9*n));f.rotation.x=-.35*n,t&&!o&&!s&&!r&&(f.position.y=Math.abs(x)*(.003+.004*n))}var E0=Tt(()=>{Bn();$r()});function T0(i){let e=[...i.flyBoxes],t=new Map;for(let c of i.things){let l=c.boxes.filter(({b:f})=>i.flyBoxes.includes(f));if(c.gone||l.length!==1||c.name==="Stairs")continue;let h=l[0].b,u=O1(c.at,h.under);u.length&&t.set(h,u)}e.splice(0,e.length,...e.flatMap(c=>t.get(c)||[c]));let n=Mt-.004;e.push({x0:Ft,x1:$e,z0:Qt-.1,z1:Qt+.1,y1:n,under:Kt,name:"beam"}),e.push({x0:St,x1:$e,z0:i.beam2-.1,z1:i.beam2+.1,y1:n,under:Kt,name:"beam"});for(let c of i.things)if(!c.gone&&/^Window/.test(c.name)){c.at.updateMatrixWorld(!0);let l=[[-.45,0],[.45,0],[-.45,.18],[.45,.18]].map(([h,u])=>new w(h,0,u).applyMatrix4(c.at.matrixWorld));e.push({x0:Math.min(...l.map(h=>h.x)),x1:Math.max(...l.map(h=>h.x)),z0:Math.min(...l.map(h=>h.z)),z1:Math.max(...l.map(h=>h.z)),y1:1.845,under:1.83,name:"sill"})}let s=i.things.find(c=>c.name==="Stairs"),r=s?s.at.position.x-s.start.x:0,o=s?s.at.position.z-s.start.z:0;if(!(s!=null&&s.gone))for(let c=0;c<ii.n;c++)e.push({x0:ii.x-(c+1)*ii.run+r,x1:ii.x-c*ii.run+r,z0:ii.z0+o,z1:ii.z1+o,y1:(c+1)*ii.rise,name:"stairs"});let a=(c,l)=>Math.abs(l-Qt)<.14||Math.abs(l-i.beam2)<.14&&c>St?Kt:Mt;return{walls:i.whole,tops:e,shells:i.flyBoxes,blocks:i.bumpers,ceiling:a}}function O1(i,e){i.updateMatrixWorld(!0);let t=[];return i.traverse(n=>{if(!n.isMesh)return;for(let o=n;o;o=o.parent)if(!o.visible)return;let s=new Ct().setFromObject(n,!0);if(s.isEmpty()||s.max.x-s.min.x<.03&&s.max.z-s.min.z<.03||e!==void 0&&s.min.y<e-.01)return;let r={x0:s.min.x,x1:s.max.x,z0:s.min.z,z1:s.max.z,y1:s.max.y,...e!==void 0?{under:e}:{}};if(S0.set(0,1,0).transformDirection(n.matrixWorld),S0.y>.999){n.geometry.boundingBox||n.geometry.computeBoundingBox();let o=n.geometry.boundingBox;r.pts=[[o.min.x,o.min.z],[o.max.x,o.min.z],[o.max.x,o.max.z],[o.min.x,o.max.z]].map(([a,c])=>(wu.set(a,o.min.y,c).applyMatrix4(n.matrixWorld),[wu.x,wu.z]))}t.push(r)}),t}var wu,S0,w0=Tt(()=>{Bn();Mu();wu=new w,S0=new w});function Cu(i,e,t,n,s,r,o){for(let a of[new xt(e,t),new xt(e,n)])s&&a.position.copy(s),r&&a.quaternion.copy(r),o&&a.scale.copy(o),i.add(a)}function Qs(i,e,t,n,s,r){let o=new w(...e),a=new w(...t),c=a.clone().sub(o),l=c.length();Cu(i,new Ki(n,Math.max(.001,l),8,20),s,r,o.clone().add(a).multiplyScalar(.5),new an().setFromUnitVectors(new w(0,1,0),c.normalize()))}function C0(i,e,t,n,s,r){let o=new w(...e),a=new w(...t).sub(o).normalize();Qs(i,o.clone().addScaledVector(a,n*.75).toArray(),t,n,s.sleeve,r),Qs(i,o.clone().addScaledVector(a,-n*.9).toArray(),o.clone().addScaledVector(a,n*.6).toArray(),n*.72,s.skin,r);let c=new an().setFromUnitVectors(new w(0,0,1),a);Cu(i,new hn(n*1.02,n*.38,14,36),s.cuff,r,o.clone().addScaledVector(a,n*.35),c);let l=new w(0,0,1).cross(a).normalize();Iu(i,o.clone().addScaledVector(a,n*.35).addScaledVector(new w(0,0,1),n*1.35).addScaledVector(l,n*.2).toArray(),[n*.32,n*.32,n*.32],s.bell,r)}function I0(i,e,t,n,s,r,o){let a=new ms;a.add(i),a.add(new yc(16777215,1.1));let c=new _s(16777215,2.2);c.position.set(-1,1.6,2.2),a.add(c);let l=n*e/t,h=new Ti(s-l/2,s+l/2,r+n/2,r-n/2,-10,10);h.position.z=5;let u="",f=null;try{let p=document.createElement("canvas"),A=new Xs({canvas:p,alpha:!0,antialias:!0,preserveDrawingBuffer:!0});A.setPixelRatio(1),A.setSize(e,t,!1),A.setClearColor(0,0),A.render(a,h),u=p.toDataURL("image/png"),A.dispose(),A.forceContextLoss()}catch(p){console.warn("cartoon hand:",p)}if(o){i.updateMatrixWorld(!0);let p=new w(...o).applyMatrix4(i.matrixWorld).project(h);f=[(p.x+1)/2,(1-p.y)/2]}return i.traverse(p=>{p.geometry&&p.geometry.dispose()}),{url:u,at:f}}function G1(){let i=P0(),e=R0(.009),t=new Ze;Iu(t,[.24,.5,0],[.135,.16,.11],i.skin,e),Qs(t,[.17,.58,.02],[.13,.86,.02],.048,i.skin,e),Qs(t,[.3,.55,.06],[.42,.62,.07],.062,i.skin,e);for(let s=0;s<3;s++){let r=.53-s*.075;Qs(t,[.24,r,.06],[.12+s*.012,r-.01,.07],.042-s*.003,i.skin,e)}C0(t,[.37,.29,-.02],[.82,-.3,-.07],.12,i,e),t.rotation.y=-.35,t.rotation.x=.12;let n=I0(t,584,800,1.1,.33,.45,[.13,.86+.048,.02]);return{url:n.url,tip:n.at||[.2,.1],aspect:584/800}}function L0(){if(Gc!==void 0)return Gc;let i=P0(),e=R0(.012),t=new Ze;Iu(t,[.78,.44,0],[.24,.21,.09],i.skin,e);let n=new xt(new Pt(1,32,20),i.palm);return n.position.set(.8,.42,.055),n.scale.set(.15,.12,.04),t.add(n),[.42,.47,.44,.34].forEach((s,r)=>{let o=.55-r*.08;Qs(t,[.66,o,0],[.66-s,o+.01,.01],.058-r*.004,i.skin,e)}),Qs(t,[.86,.56,.01],[.74,.86,.03],.064,i.skin,e),C0(t,[1.06,.27,-.03],[1.5,-.1,-.1],.15,i,e),t.rotation.y=.15,Gc=I0(t,1200,1016,1,.67,.5).url,Gc}var Ru,F1,B1,z1,k1,H1,V1,ro,Zo,R0,Iu,P0,Gc,Wc,D0=Tt(()=>{Bn();Ru=[.82,1.02],F1=16762778,B1=16757898,z1=14034984,k1=16775920,H1=4858902,V1=16172101,Zo=i=>(ro||(ro=new Ys(new Uint8Array([90,170,255]),3,1,Wo),ro.minFilter=ro.magFilter=Ht,ro.needsUpdate=!0),new qr({color:i,gradientMap:ro})),R0=i=>{let e=new Jt({color:H1,side:En});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * ${i.toFixed(4)};`)},e};Iu=(i,e,t,n,s)=>Cu(i,new Pt(1,32,20),n,s,new w(...e),null,new w(...t));P0=()=>({skin:Zo(F1),palm:Zo(B1),sleeve:Zo(z1),cuff:Zo(k1),bell:Zo(V1)});Wc=class{constructor(e){this.img=e;let t=G1();this.tip=t.tip,this.aspect=t.aspect,t.url&&(e.src=t.url),this.walkT=0,this.lag=0,this.aim=0,this.kick=0,this.lastYaw=null}update(e,t,n,s,r=innerWidth/2,o=innerHeight/2){this.walkT+=e*(6+4*t)*(t>.05?1:0);let a=this.lastYaw===null?0:Math.atan2(Math.sin(n-this.lastYaw),Math.cos(n-this.lastYaw))/Math.max(e,.001);this.lastYaw=n,this.lag+=(Math.max(-2,Math.min(2,a))*.04-this.lag)*(1-Math.exp(-e*8)),this.aim+=((s?1:0)-this.aim)*(1-Math.exp(-e*9)),this.kick=Math.max(0,this.kick-e*5);let c=this.aim,l=t*(1-c*.7),h=this.tip,u=innerWidth,f=innerHeight,p=f*(Ru[0]+(Ru[1]-Ru[0])*c),A=p*this.aspect,x=u*.8,m=f*.7,d=r+f*.015,y=o+f*.08,g=x+(d-x)*c+Math.cos(this.walkT)*f*.012*l+this.lag*f*.25,_=m+(y-m)*c+Math.abs(Math.sin(this.walkT))*f*.02*l-this.kick*f*.03,T=-18-10*c-this.kick*9+Math.sin(this.walkT)*2*l;Object.assign(this.img.style,{width:`${A}px`,height:`${p}px`,left:`${g-A*h[0]}px`,top:`${_-p*h[1]}px`,transformOrigin:`${A*h[0]}px ${p*h[1]}px`,transform:`rotate(${T}deg)`})}show(e){this.img.style.display=e?"block":"none",e||(this.lastYaw=null)}bang(){this.kick=1}}});function N0(i,e,t){let n=Math.hypot(i,e);if(!n)return[0,0];let s=Math.min(n,t)/n/t;return[i*s,e*s]}var U0=Tt(()=>{});function Lu(){try{if(!un){un=new(window.AudioContext||window.webkitAudioContext),ft=un.createGain(),ft.gain.value=F0?1:0,ft.connect(un.destination),Pu=un.createBuffer(1,un.sampleRate,un.sampleRate);let i=Pu.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1}un.state==="suspended"&&un.resume()}catch{un=null}return un}function yt(i,e,t,n,s,r){let o=un.createGain();return o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(t,i+n),o.gain.setValueAtTime(t,i+n+s),o.gain.exponentialRampToValueAtTime(1e-4,i+n+s+r),o.connect(e),o}function en(i,e,t,n,s){let r=un.createOscillator();if(r.type=i,typeof e=="number")r.frequency.setValueAtTime(e,t);else{r.frequency.setValueAtTime(e[0][1],t);for(let[o,a]of e.slice(1))r.frequency.linearRampToValueAtTime(a,t+o)}return r.connect(s),r.start(t),r.stop(t+n+.05),r}function tn(i,e,t,n=1){let s=un.createBiquadFilter();return s.type=i,s.frequency.value=e,s.Q.value=n,s.connect(t),s}function gi(i,e,t){let n=un.createBufferSource();return n.buffer=Pu,n.loop=!0,n.connect(t),n.start(i,Math.random()*.5),n.stop(i+e+.05),n}function O0(i,e,t,n,s){let r=un.createOscillator(),o=un.createGain();r.frequency.value=n,o.gain.value=s,r.connect(o).connect(i.frequency),r.start(e),r.stop(e+t+.05)}function Vt(i){if(B0())try{W1[i](un.currentTime+.005)}catch{}}function Xc(i=1){if(!(!B0()||i<=.02))try{let e=un.currentTime+.01,t=Math.min(1,i);gi(e,1,tn("bandpass",3400,yt(e,ft,.5*t,.06,.62,.3),1.4)),gi(e,1,tn("highpass",6e3,yt(e,ft,.12*t,.06,.62,.3)))}catch{}}var un,ft,Pu,F0,B0,ab,W1,Du=Tt(()=>{un=null,ft=null,Pu=null,F0=!0;B0=()=>F0?Lu():null;ab=(()=>{let i=new Float32Array(1024);for(let e=0;e<1024;e++){let t=e/511.5-1;i[e]=Math.tanh(2.2*t)/Math.tanh(2.2)}return i})(),W1={moo(i){let e=yt(i,tn("lowpass",650,ft,3),.35,.12,.6,.3),t=en("sawtooth",[[0,150],[.25,185],[.75,165],[1,115]],i,1.05,e);O0(t,i,1,5,3)},oink(i){for(let e of[0,.17]){let t=yt(i+e,tn("lowpass",1100,ft,4),.3,.01,.06,.06);en("square",[[0,240],[.1,170]],i+e,.13,t),gi(i+e,.1,tn("bandpass",700,yt(i+e,ft,.1,.01,.05,.04),2))}},baa(i){let e=yt(i,tn("bandpass",1300,ft,1.2),.5,.05,.45,.2),t=en("sawtooth",[[0,470],[.5,430],[.7,380]],i,.72,e);O0(t,i,.7,9,22)},cluck(i){for(let e of[0,.11,.2,.36]){let t=yt(i+e,tn("bandpass",1400,ft,2),.4,.005,.03,.04);en("triangle",[[0,1e3],[.06,620]],i+e,.08,t)}},swoosh(i){let e=tn("bandpass",400,yt(i,ft,.25,.15,.1,.35),1.5);e.frequency.setValueAtTime(300,i),e.frequency.exponentialRampToValueAtTime(3500,i+.45),gi(i,.65,e),en("sine",[[0,300],[.4,900]],i,.45,yt(i,ft,.08,.05,.2,.15))},chime(i){[784,988,1319,1568].forEach((e,t)=>en("sine",e,i+t*.07,.5,yt(i+t*.07,ft,.15,.005,.05,.4)))},bell(i){for(let[e,t]of[[660,.18],[1822,.06],[2640,.03]])en("sine",e,i,1.4,yt(i,ft,t,.003,0,1.3))},boing(i){en("sine",[[0,180],[.08,420],[.3,260]],i,.32,yt(i,ft,.18,.005,.1,.2))},click(i){for(let e of[0,.07])gi(i+e,.04,tn("highpass",2500,yt(i+e,ft,.2,.002,.01,.03)));en("square",300,i,.05,yt(i,tn("lowpass",800,ft),.08,.002,.02,.03))},yay(i){[[523,0],[659,.12],[784,.24],[1047,.38],[784,.56],[1047,.68]].forEach(([e,t])=>{let n=yt(i+t,ft,t>.5?.14:.1,.01,t>.6?.3:.06,.2);en("triangle",e,i+t,.6,n),en("square",e/2,i+t,.3,yt(i+t,tn("lowpass",900,ft),.03,.01,.05,.1))})},clunk(i){en("square",[[0,160],[.06,90]],i,.1,yt(i,tn("lowpass",700,ft),.22,.003,.03,.08)),gi(i,.06,tn("bandpass",1800,yt(i,ft,.12,.002,.02,.05),2))},pop(i){en("sine",[[0,300],[.08,900],[.16,700]],i,.2,yt(i,ft,.18,.005,.06,.12)),[1319,1568].forEach((e,t)=>en("sine",e,i+.1+t*.07,.3,yt(i+.1+t*.07,ft,.06,.005,.03,.25)))},munch(i){for(let e of[0,.14,.3])gi(i+e,.07,tn("bandpass",900+e*1e3,yt(i+e,ft,.14,.005,.03,.05),3))},splash(i){let e=tn("lowpass",2500,yt(i,ft,.25,.01,.08,.4));e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.45),gi(i,.55,e),en("sine",[[0,500],[.15,250]],i,.18,yt(i,ft,.05,.005,.05,.1))},laugh(i){[0,.14,.28,.42,.6].forEach((e,t)=>{let n=620-t*45;en("sawtooth",[[0,n*1.12],[.1,n]],i+e,.14,tn("bandpass",1100,yt(i+e,ft,.22,.01,.06,.06),1.5)),gi(i+e,.04,tn("highpass",2e3,yt(i+e,ft,.06,.003,.01,.03)))})},zoom(i){en("triangle",[[0,260],[.22,620]],i,.24,tn("lowpass",1400,yt(i,ft,.09,.02,.15,.06)));for(let e=0;e<6;e++)gi(i+e*.035,.02,tn("highpass",3e3,yt(i+e*.035,ft,.05,.002,.005,.012)));gi(i+.25,.03,tn("bandpass",2200,yt(i+.25,ft,.16,.002,.01,.03),3))},ting(i){for(let[e,t]of[[2093,.09],[3136,.05],[4186,.025]])en("sine",e,i,.7,yt(i,ft,t,.002,0,.65))},nope(i){for(let e of[0,.13])en("sine",[[0,300],[.09,220]],i+e,.1,yt(i+e,ft,.12,.005,.03,.06))},tick(i){en("triangle",[[0,900],[.05,1200]],i,.07,yt(i,ft,.12,.003,.03,.04))}}});function k0({canUse:i}){let e={binoculars:Bc("binoculars"),magnifier:Bc("magnifier")},t=e.binoculars,n=e.magnifier,s=document.createElement("style");s.textContent=`
  .seektool { right: calc(env(safe-area-inset-right) + 6vmin); width: 14vmin; height: 14vmin; border-radius: 50%; padding: 0; box-sizing: border-box;
              border-color: rgba(255,243,176,0.8); background: conic-gradient(var(--fill, #ffd23f) calc(var(--c, 1) * 360deg), rgba(20,24,36,0.55) 0); }
  .seektool span { position: absolute; inset: 1.2vmin; border-radius: 50%; background: rgba(29,53,87,0.92); display: flex; align-items: center; justify-content: center; font-size: 7vmin; }
  .seektool b { position: absolute; right: -0.6vmin; bottom: -0.6vmin; display: none; padding: 0.2vmin 1vmin; border-radius: 1vmin; background: #fff3b0; color: #1d3557; font: 900 max(11px, 2.2vmin) system-ui; }
  body:not(.touch) .seektool b { display: block; } /* (a keyboard: its key) */
  .seektool.resting { --fill: #8ecae6; filter: saturate(0.5) brightness(0.8); }
  .seektool.resting span { opacity: 0.6; }
  .seektool.on { --fill: #ffd23f; box-shadow: 0 0 3vmin #ffd23f; }
  .seektool.nope { animation: nope 0.35s ease-in-out; } .seektool.ready { animation: ready 0.5s ease-out; }
  @keyframes nope { 25% { transform: translateX(-1.2vmin); } 75% { transform: translateX(1.2vmin); } }
  @keyframes ready { 40% { transform: scale(1.25); } }
  #tool-binoculars { bottom: calc(env(safe-area-inset-bottom) + 50vmin); } #tool-magnifier { bottom: calc(env(safe-area-inset-bottom) + 33vmin); }
  body[data-phase=seek] .seektool, body[data-phase=pointing] .seektool { display: block; }
  #binox { position: fixed; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 3; opacity: 0; transition: opacity 0.25s; }
  body.binox #binox { opacity: 1; }
  body.binox #hud { z-index: 7; } /* (the HUD over the black) */
  #lens { position: fixed; left: 50%; top: 50%; width: ${oo*100}vmin; height: ${oo*100}vmin; margin: -${oo*50}vmin 0 0 -${oo*50}vmin; border-radius: 50%; pointer-events: none; z-index: 3; display: none;
          box-shadow: 0 0 0 0.5vmin #3d1f08, 0 0 0 1.8vmin #d4a017, 0 0 0 2.4vmin #7a4a0a, 0 1.5vmin 3vmin 2.4vmin rgba(0,0,0,0.45); }
  body.magnify #lens { display: block; }
  #lens::before { content: ''; position: absolute; inset: 8%; border-radius: 50%; border-top: 1.2vmin solid rgba(255,255,255,0.35); transform: rotate(-35deg); filter: blur(0.3vmin); } /* a glint */
  #lens::after { content: ''; position: absolute; left: 50%; top: 50%; width: 5.5vmin; height: 24vmin; margin-left: -2.75vmin; border-radius: 2.5vmin;
                 background: linear-gradient(90deg, #5a2d0c, #9c5a1f 45%, #5a2d0c); border-top: 3vmin solid #d4a017;
                 transform: rotate(45deg) translateY(${oo*50+2}vmin); transform-origin: 50% 0; } /* the handle, down and left */`,document.head.appendChild(s);let r={};for(let[m,d,y]of[["binoculars","\u{1F52D}","B"],["magnifier","\u{1F50D}","L"]]){let g=document.createElement("div");g.id=`tool-${m}`,g.className="ctl seektool",g.innerHTML=`<span>${d}</span><b>${y}</b>`,g.addEventListener("pointerdown",_=>{_.preventDefault(),_.stopPropagation(),c(m)}),g.addEventListener("animationend",()=>g.classList.remove("nope","ready")),document.body.appendChild(g),r[m]=g}let o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.id="binox",o.setAttribute("viewBox","0 0 160 100"),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.innerHTML=`<defs><filter id="binox-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.6"/></filter>
    <mask id="binox-eyes" maskUnits="userSpaceOnUse" x="-2000" y="-2000" width="4160" height="4100"><rect x="-2000" y="-2000" width="4160" height="4100" fill="#fff"/>
    <g filter="url(#binox-soft)" fill="#000"><circle cx="57" cy="50" r="40"/><circle cx="103" cy="50" r="40"/></g></mask></defs>
    <rect x="-2000" y="-2000" width="4160" height="4100" fill="#050505" mask="url(#binox-eyes)"/>`,document.body.appendChild(o);let a=document.createElement("div");a.id="lens",document.body.appendChild(a),addEventListener("keydown",m=>{m.repeat||(m.code==="KeyB"?c("binoculars"):m.code==="KeyL"&&c("magnifier"))});function c(m){if(!i())return;let d=e[m],y=e[m==="binoculars"?"magnifier":"binoculars"],g=bu(d);g==="on"?(y.on&&bu(y),Vt(m==="binoculars"?"zoom":"ting")):g==="off"?Vt("click"):(Vt("nope"),r[m].classList.remove("nope"),r[m].offsetWidth,r[m].classList.add("nope")),l()}function l(){for(let[m,d]of Object.entries(e)){let y=r[m];y.style.setProperty("--c",r0(d).toFixed(3)),y.classList.toggle("on",d.on),y.classList.toggle("resting",d.wait>0)}document.body.classList.toggle("binox",t.on),document.body.classList.toggle("magnify",n.on)}let h=new fi(16,16,{type:Vs,samples:4}),u=new Yt(20,1,.01,40),f=new xt(new $t(2,2),new di({uniforms:{map:{value:h.texture},lensHalf:{value:new fe(.5,.5)}},vertexShader:"uniform vec2 lensHalf; varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy * lensHalf, 0.0, 1.0); }",fragmentShader:`uniform sampler2D map; varying vec2 vUv;
      void main() {
        vec2 p = vUv - 0.5; float r = length(p) * 2.0; if (r > 1.0) discard;
        gl_FragColor = texture2D(map, vUv);
        gl_FragColor.rgb *= 1.0 - 0.3 * smoothstep(0.7, 1.0, r); // (a touch darker toward the rim: it looks like glass)
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1}));f.frustumCulled=!1;let p=new ms;p.add(f);let A=new Ti(-1,1,1,-1,0,1),x=()=>Math.min(innerWidth,innerHeight)*oo;return{press:c,binoculars:()=>t.on,update(m){if(!i()){for(let d of Object.values(e))Object.assign(d,Bc(d.kind));l();return}for(let[d,y]of Object.entries(e)){let g=s0(y,m);g==="empty"&&Vt("click"),g==="ready"&&(Vt("tick"),r[d].classList.remove("ready"),r[d].offsetWidth,r[d].classList.add("ready"))}l()},steer(m,d){if(!t.on)return m;let y=Ai.binoculars.turn;return{x:(m.x||0)*y,y:0,lookX:(m.lookX||0)*y,lookY:(m.lookY||0)*y+(m.y||0)*.5*d}},fov(m){return t.on?2*Math.atan(Math.tan(m*Math.PI/360)/Ai.binoculars.zoom)*180/Math.PI:m},unzoom(m,d){let y=innerWidth/2,g=innerHeight/2;return!n.on||Math.hypot(m-y,d-g)>x()/2?[m,d]:[y+(m-y)/Ai.magnifier.zoom,g+(d-g)/Ai.magnifier.zoom]},render(m,d,y,g=!0){if(!n.on||!g)return;let _=x(),T=innerHeight,E=Math.round(_*m.getPixelRatio());h.width!==E&&h.setSize(E,E),u.position.copy(y.position),u.quaternion.copy(y.quaternion),u.fov=2*Math.atan(Math.tan(y.fov*Math.PI/360)*_/(T*Ai.magnifier.zoom))*180/Math.PI,u.updateProjectionMatrix();let I=m.shadowMap.autoUpdate;m.shadowMap.autoUpdate=!1,m.setRenderTarget(h),m.render(d,u),m.setRenderTarget(null),m.shadowMap.autoUpdate=I,f.material.uniforms.lensHalf.value.set(_/innerWidth,_/T);let N=m.autoClear;m.autoClear=!1,m.render(p,A),m.autoClear=N}}}var oo,H0=Tt(()=>{Bn();$r();Du();oo=.5});var Nu,X1,q1,Jo,ao,Y1,V0,K1,qc,G0=Tt(()=>{Nu={12:[0,-1],13:[0,1],14:[-1,0],15:[1,0]},X1=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],q1=i=>Math.abs(i)<.18?0:(i-Math.sign(i)*.18)/(1-.18),Jo=i=>Math.max(-1,Math.min(1,i)),ao=i=>Number.isFinite(i)?i:0,Y1=i=>Math.abs(i)<.3?i:0,V0=(i,e)=>{let t=i-e;return q1(Jo(t/(t>0?1-e:1+e)))},K1=i=>Math.abs(i)>1.05?[0,0]:X1[Math.round((i+1)*3.5)&7],qc=class{constructor({extraPads:e=()=>[]}={}){this.extraPads=e,this.keys={},this.keyEvents=[],this.state=new Map,this.t=0,addEventListener("keydown",n=>{if(this.keys[n.code]=!0,n.repeat)return;let s={Space:"drop",Enter:"drop",KeyF:"toggle",KeyP:"parent",KeyM:"music",Escape:"escape"};s[n.code]&&(this.keyEvents.push({type:s[n.code],pad:-1}),n.preventDefault())}),addEventListener("keyup",n=>{this.keys[n.code]=!1}),addEventListener("blur",()=>{this.keys={}});let t=n=>{n.gamepad&&this.state.delete(n.gamepad.index)};addEventListener("gamepadconnected",t),addEventListener("gamepaddisconnected",t)}padState(e){let t=this.state.get(e.index);if(!t||t.id!==e.id){let n=[ao(e.axes[0]),ao(e.axes[1])];t={id:e.id,rest:n.map(Y1),anchor:n,still:0,hatAxis:-1,btn:[],hold:null},this.state.set(e.index,t)}return t}poll(e,{holdToggle:t,toggleButton:n=1}){this.t+=e;let s=this.keyEvents.splice(0),r=[...navigator.getGamepads?navigator.getGamepads():[],...this.extraPads()],o=[],a=new Set,c=0;for(let u of r){if(!u||!u.connected)continue;a.add(u.index);let f=this.padState(u),p=[ao(u.axes[0]),ao(u.axes[1])];Math.abs(p[0]-f.anchor[0])<.03&&Math.abs(p[1]-f.anchor[1])<.03?f.still+=e:(f.still=0,f.anchor=p),f.still>=1.5&&p.forEach((d,y)=>{Math.abs(d)<.3&&(f.rest[y]=d)}),f.hatAxis<0&&(f.hatAxis=u.axes.findIndex((d,y)=>y>=4&&Math.abs(d)>1.05));let[A,x]=f.hatAxis>=0?K1(ao(u.axes[f.hatAxis])):[0,0],m=[];u.buttons.forEach((d,y)=>{let g=!!d&&(d.pressed||d.value>.5),_=f.btn[y]||(f.btn[y]={on:!1,t:-1/0}),T=!1,E=!1;if(g!==_.on&&this.t-_.t>=.12&&(_.on=g,_.t=this.t,T=g,E=!g),_.on&&m.push(y),u.mapping==="standard"&&Nu[y]){_.on&&(A+=Nu[y][0],x+=Nu[y][1]);return}t&&y===n?(T&&(f.hold=0),_.on&&f.hold!==null&&(f.hold+=e,c=Math.max(c,f.hold/1),f.hold>=1&&(f.hold=null,s.push({type:"toggle",pad:u.index}))),E&&f.hold!==null&&(f.hold=null,s.push({type:"drop",pad:u.index}))):T&&s.push({type:"drop",pad:u.index})}),t||(f.hold=null),o.push({index:u.index,id:u.id,pressed:m,axes:[...u.axes.slice(0,4)].map(ao),x:Jo(V0(p[0],f.rest[0])+A),y:Jo(V0(p[1],f.rest[1])+x)})}for(let u of this.state.keys())a.has(u)||this.state.delete(u);o.sort((u,f)=>u.index-f.index);let l=this.keys,h={x:Jo((l.ArrowRight||l.KeyD?1:0)-(l.ArrowLeft||l.KeyA?1:0)),y:Jo((l.ArrowDown?1:0)-(l.ArrowUp||l.KeyW?1:0))};return{pads:o,kb:h,events:s,holdProgress:c}}}});function W0(){addEventListener("keydown",i=>{i.code==="Escape"&&(i.preventDefault(),i.stopImmediatePropagation(),window.close(),setTimeout(()=>{let e=document.getElementById("quit-hint");e||(e=document.createElement("div"),e.id="quit-hint",e.textContent="Press \u2318Q to quit",e.style.cssText="position:fixed;left:50%;top:40%;transform:translateX(-50%);z-index:99;padding:16px 28px;background:#000c;color:#fff;font:bold 32px system-ui,sans-serif;border-radius:14px;pointer-events:none;transition:opacity .4s",document.body.appendChild(e)),e.style.opacity="1",clearTimeout(e.hideTimer),e.hideTimer=setTimeout(()=>{e.style.opacity="0"},2500)},400))},!0)}var X0=Tt(()=>{});function tM(i){let e="C",t=-1;for(let[n,s]of Object.entries(Q1)){let r=i.reduce((o,a)=>o+(s.includes(a.n[0])?a.beats:0),0);r>t&&(t=r,e=n)}return eM[e]}var j1,Z1,J1,$1,Q1,eM,Yc,q0=Tt(()=>{j1=[{name:"Jingle Bells",bpm:150,bells:!0,notes:"E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:0.5 E4:4 F4:1 F4:1 F4:1.5 F4:0.5 F4:1 E4:1 E4:1 E4:0.5 E4:0.5 E4:1 D4:1 D4:1 E4:1 D4:2 G4:2 E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:0.5 E4:4 F4:1 F4:1 F4:1.5 F4:0.5 F4:1 E4:1 E4:1 E4:0.5 E4:0.5 G4:1 G4:1 F4:1 D4:1 C4:4"},{name:"We Wish You a Merry Christmas",bpm:160,beats:3,notes:"G4:1 C5:1 C5:0.5 D5:0.5 C5:0.5 B4:0.5 A4:1 A4:1 A4:1 D5:1 D5:0.5 E5:0.5 D5:0.5 C5:0.5 B4:1 G4:1 G4:1 E5:1 E5:0.5 F5:0.5 E5:0.5 D5:0.5 C5:1 A4:1 G4:0.5 G4:0.5 A4:1 D5:1 B4:1 C5:3 -:2"},{name:"Deck the Halls",bpm:140,notes:"G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 C4:1 B3:1 C4:2 -:2 G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 C4:1 B3:1 C4:2 -:2 D4:1.5 E4:0.5 F4:1 D4:1 E4:1.5 F4:0.5 G4:1 D4:1 E4:0.5 F#4:0.5 G4:1 A4:0.5 B4:0.5 C5:1 B4:1 A4:1 G4:2 -:2 G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 A4:0.5 A4:0.5 A4:0.5 A4:0.5 G4:1.5 F4:0.5 E4:1 D4:1 C4:2 -:2"}],Z1={C:0,D:2,E:4,F:5,G:7,A:9,B:11},J1=i=>{let e=/^([A-G])(#?)(\d)$/.exec(i);return 440*2**((Z1[e[1]]+(e[2]?1:0)+(+e[3]+1)*12-69)/12)},$1=i=>i.trim().split(/\s+/).map(e=>{let[t,n]=e.split(":");return{f:t==="-"?0:J1(t),n:t,beats:+n}}),Q1={C:["C","E","G"],F:["F","A","C"],G:["G","B","D"]},eM={C:130.81/2,F:174.61/2,G:196/2};Yc=class{constructor(){this.on=!0;try{this.on=localStorage.getItem("elf-music")!=="off"}catch{}this.k=1,this.song=0,this.i=0,this.t=0,this.timer=null,this.ctx=null,this.songs=j1.map(e=>({...e,notes:$1(e.notes)}))}start(e){!e||this.timer||(this.ctx=e,this.out=e.createGain(),this.out.gain.value=this.on?.55:0,this.out.connect(e.destination),this.t=e.currentTime+.1,this.barBeat=0,this.bar=[],this.timer=setInterval(()=>this.schedule(),60))}setOn(e){this.on=e;try{localStorage.setItem("elf-music",e?"on":"off")}catch{}this.out&&this.out.gain.setTargetAtTime(e?.55:0,this.ctx.currentTime,.05)}tempo(e){this.k=e}schedule(){let e=this.ctx;for(;this.t<e.currentTime+.25;){let t=this.songs[this.song],n=60/t.bpm/this.k,s=t.notes[this.i],r=t.beats||4;if(this.barBeat===0){let o=0,a=this.i,c=[];for(;o<r&&a<t.notes.length;)c.push(t.notes[a]),o+=t.notes[a].beats,a++;let l=tM(c.filter(h=>h.f));for(let h=0;h<r;h++)this.bass(this.t+h*n,h===0?l:l*1.5,n)}if(s.f&&this.bell(this.t,s.f,s.beats*n),t.bells)for(let o=0;o<s.beats;o+=.5)this.jingle(this.t+o*n,o%1?.5:1);this.t+=s.beats*n,this.barBeat=(this.barBeat+s.beats)%r,++this.i>=t.notes.length&&(this.i=0,this.barBeat=0,this.song=(this.song+1)%this.songs.length,this.t+=n*2)}}bell(e,t,n){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.22,e+.008),r.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(.35,n*1.4)),r.connect(this.out);for(let[o,a]of[[1,1],[2,.25],[3,.08]]){let c=s.createOscillator(),l=s.createGain();c.type="sine",c.frequency.value=t*o,l.gain.value=a,c.connect(l).connect(r),c.start(e),c.stop(e+Math.max(.4,n*1.5))}}bass(e,t,n){let s=this.ctx,r=s.createGain(),o=s.createOscillator();o.type="triangle",o.frequency.value=t,r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.16,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+n*.8),o.connect(r).connect(this.out),o.start(e),o.stop(e+n)}jingle(e,t){let n=this.ctx;if(!this.noise){this.noise=n.createBuffer(1,n.sampleRate*.2,n.sampleRate);let a=this.noise.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=Math.random()*2-1}let s=n.createBufferSource(),r=n.createBiquadFilter(),o=n.createGain();s.buffer=this.noise,r.type="bandpass",r.frequency.value=7500,r.Q.value=1.5,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.09*t,e+.004),o.gain.exponentialRampToValueAtTime(1e-4,e+.12),s.connect(r).connect(o).connect(this.out),s.start(e),s.stop(e+.15)}}});var Mm={};Tm(Mm,{start:()=>xM});function Bt(i){Kc.textContent=i,Kc.classList.remove("show"),Kc.offsetWidth,Kc.classList.add("show")}function na(i,e,t,n,s){$o.style.display="",Rs.style.display=n===or&&!Te.on?"":"none",Oi.style.display=Rs.style.display,sr.style.display=s?"":"none",s&&(sr.textContent=s[0],sr.onclick=()=>{ns(),oi.style.display="none",s[1]()}),sm.textContent=i,rm.innerHTML=e,$o.textContent=t,oi.style.display="flex",zt("gear").style.display=n===or?"flex":"none",$o.onclick=()=>{ns(),oi.style.display="none",zt("gear").style.display="none",n()}}function Rn(i){pe=i,document.body.dataset.phase=i,zt("point").textContent=i==="pointing"?"\u{1F6B6} Walk":"\u{1F3AF} Target"}function or(){nl(),ze=Jr(...qu),dn.visible=!1,wn.visible=!0,Mi.visible=!1,Xt.swing=0,$u(),xi=0,Yu=!1,Ui=!1,Un=-1,ta(),Rn("hide"),Xt.ready=!1,Bt("\u{1F9DD} HIDE THE ELF!")}function $c(i=!1){if(pe==="hide"){if(ze.air){i&&(Yu=!0);return}if(!(ze.cling&&!i)){if(Vt("pop"),Rn("sitting"),Un=0,Te.on){Bt(i?"\u23F0 HIDDEN!":"\u{1F92B} HIDDEN!");return}setTimeout(()=>{pe==="sitting"&&(Rn("handoff"),na(i?"\u23F0 Time's up: he's hidden!":"\u{1F92B} He's hidden!","Hand the phone to the <b>seeker</b>.<br>No peeking!","\u{1F50E} I'm the seeker: go!",am))},1800)}}}function am(){Ue=Oc(...vi),_i=0,Xn=0,Ui=!1,nr=ea=0,document.body.classList.remove("tapaim"),yn.x=yn.y=null,ia(),Rn("seek"),Bt("\u{1F50E} FIND THE ELF!")}function Ku(){pe==="seek"?(Rn("pointing"),Ue.pointing=!0,yn.x=yn.y=null,ia()):pe==="pointing"&&(Rn("seek"),Ue.pointing=!1)}function Qc(i=yn.x,e=yn.y){if(pe!=="pointing"&&pe!=="seek")return;let t=et.getWorldPosition(new w),n=et.getWorldDirection(new w);i!=null&&([i,e]=Ss.unzoom(i,e)),i!=null&&n.set(i/innerWidth*2-1,1-e/innerHeight*2,.5).unproject(et).sub(t).normalize();let s=wn.position.clone();s.y+=Ne.height/2,Ts.set(t,n),Ts.far=30,Ts.camera=et;let r=a=>{for(;a;a=a.parent)if(!a.visible)return!1;return!0},o=Ts.intersectObjects(Ut.children,!0).find(a=>r(a.object)&&!ju.has(a.object)&&!sa.has(a.object)&&a.object!==dn&&!a.object.isSprite);if(Xn++,Bu.bang(),Qe){let a=Qe.bots.filter(l=>!l.found).find(l=>{let h=l.model.position.clone();return h.y+=Ne.height/2,Fc(t.toArray(),n.toArray(),h.toArray(),o?o.distance:1/0)});if(!a){Vt("boing"),Bt(Xn>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!");return}a.found=!0,Vt("yay");let c=Qe.bots.filter(l=>l.found).length;c===Qe.bots.length?xm(!0):Bt(`\u{1F389} FOUND ONE! ${c}/${Qe.bots.length}`);return}if(Te.on){let a=[...ts.values()].filter(c=>c.role==="elf"&&!c.found&&c.model.visible).find(c=>{let l=c.model.position.clone();return l.y+=Ne.height/2,Fc(t.toArray(),n.toArray(),l.toArray(),o?o.distance:1/0)});a?(Vt("yay"),Te.sendFound(a.id)):(Vt("boing"),Bt(Xn>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!"));return}Fc(t.toArray(),n.toArray(),s.toArray(),o?o.distance:1/0)?(Vt("yay"),Rn("found"),Bt("\u{1F389} FOUND HIM!"),setTimeout(()=>na("\u{1F389} Found him!",`In <b>${ho(_i)}</b>, with <b>${Xn}</b> ${Xn===1?"guess":"guesses"}.<br>He was ${Zu()}.`,"\u{1F9DD} Hide him again",or),1600)):(Vt("boing"),Bt(Xn>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!"))}function el(i=!1){if(!(pe!=="seek"&&pe!=="pointing")){if(Qe){xm(!1);return}Rn("reveal"),Ue.pointing=!1,Li=0,dn.visible=Mi.visible=!0,Bt(i?"\u23F0 TIME'S UP!":"\u{1F440} HE WAS HERE!"),i&&Vt("bell"),Un=-1,ta(),ze.yaw=Math.atan2(Ue.x-ze.x,Ue.z-ze.z)+Math.PI,setTimeout(()=>na(i?"\u23F0 Time's up: the elf wins!":"\u{1F9DD} He was here!",`He was ${Zu()}.`,"\u{1F9DD} Hide him again",or),fn.has("giveup")?1e9:6e3)}}function cm(i,e=ze){let t=e.x-Ue.x,n=e.z-Ue.z,s=e.y+Ne.height/2-et.position.y,r=Math.atan2(-t,-n),o=Math.max(-1.3,Math.min(1.1,Math.atan2(s,Math.hypot(t,n)))),a=1-Math.exp(-i*4),c=Math.atan2(Math.sin(r-Ue.yaw),Math.cos(r-Ue.yaw));Ue.yaw+=c*a,Ue.pitch+=(o-Ue.pitch)*a}function Zu(i=wn.position){if(i.y>Kt)return"up on the <b>beam</b>";let e=null,t=1/0,n="near";for(let s of fo.things){if(s.gone)continue;let r=new Ct().setFromObject(s.at),o=i.x>r.min.x-.02&&i.x<r.max.x+.02&&i.z>r.min.z-.02&&i.z<r.max.z+.02,a=o?0:Math.hypot(Math.max(r.min.x-i.x,0,i.x-r.max.x),Math.max(r.min.z-i.z,0,i.z-r.max.z));(a<t||a===0&&t===0&&o)&&(t=a,e=s,n=o?i.y>.05?"on top of":"under":"near")}return e?`${n} the <b>${e.name.replace(/ \+.*/,"")}</b>`:"somewhere sneaky"}function um(i,e,t,n){let s=zt(i),r=()=>{for(let o of s.children)o.classList.toggle("on",+o.dataset.s===t())};for(let o of nM){let a=document.createElement("button");a.textContent=ho(o),a.dataset.s=o,a.addEventListener("click",()=>{n(o);try{localStorage.setItem(e,o)}catch{}r()}),s.appendChild(a)}r()}function sM(i,e){yn.x=i,yn.y=e,ia(),nr=K0+iM,ea=K0,document.body.classList.add("tapaim")}function ia(){let i=zt("aim");i.style.left=yn.x===null?"50%":`${yn.x}px`,i.style.top=yn.y===null?"50%":`${yn.y}px`}function oM(i,e){if(e&&(ku-=i)<=0){ku=.8;let t=new Fo(new Hr({map:rM,transparent:!0,depthWrite:!1}));t.position.set(ze.x,ze.y+Ne.height*.95,ze.z),t.userData={age:0,big:Di.length%3===1?1.5:1,ph:Math.random()*6},Ut.add(t),Di.push(t)}for(let t of Di){let n=t.userData;n.age+=i,t.position.y+=i*.035,t.position.x+=Math.sin(n.age*2.5+n.ph)*i*.015;let s=(.018+n.age*.012)*n.big;t.scale.set(s,s,1),t.material.opacity=Math.min(1,n.age*3)*Math.max(0,1-n.age/2.6)}for(let t=Di.length-1;t>=0;t--)Di[t].userData.age>2.6&&(Ut.remove(Di[t]),Di[t].material.dispose(),Di.splice(t,1))}function dm(i,e,t=[ze]){if(e&&t.length&&(Hu-=i)<=0){Hu=.3/t.length;let n=t[Math.floor(Math.random()*t.length)],s=new Fo(new Hr({map:aM,transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.8})),r=Ni.length%2?1:-1;s.position.set(n.x,n.y+Ne.height*.9,n.z),s.userData={age:0,vx:r*(.02+Math.random()*.02),vz:(Math.random()-.5)*.03},Ut.add(s),Ni.push(s)}for(let n of Ni){let s=n.userData;s.age+=i,n.position.y+=i*.07,n.position.x+=s.vx*i,n.position.z+=s.vz*i;let r=.02+s.age*.03;n.scale.set(r*2,r,1),n.material.opacity=Math.min(1,s.age*5)*Math.max(0,1-s.age/1.4)}for(let n=Ni.length-1;n>=0;n--)Ni[n].userData.age>1.4&&(Ut.remove(Ni[n]),Ni[n].material.dispose(),Ni.splice(n,1))}function $u(){for(let i of Ni)Ut.remove(i),i.material.dispose();Ni.length=0,Hu=0}function ta(){for(let i of Di)Ut.remove(i),i.material.dispose();Di.length=0,ku=0}function Uu(i,e,t){let n=rr.ceiling(i,e),s=t+.01<n?n:pm;for(let r of rr.tops)r.under!==void 0&&r.under>t+.01&&i>r.x0&&i<r.x1&&e>r.z0&&e<r.z1&&(s=Math.min(s,r.under));return s}function Ou(i,e=6,t=wn.position,n=ze.yaw){let s=n+Xt.swing,r=-Math.sin(s),o=-Math.cos(s),a=Math.min(Uu(t.x,t.z,t.y),Uu(t.x-r*.25,t.z-o*.25,t.y)),c=a-(t.y+Ne.height)<.3;c&&(tr.over=a),tr.t=Math.max(0,Math.min(1,tr.t+(c?i:-i)/.35));let l=tr.t*tr.t*(3-2*tr.t),h=.42+(.2-.42)*l,u=.2+(Math.max(.03,Math.min(.1,tr.over-t.y-.025))-.2)*l,f=new w;for(let x=0;x<6;x++){f.set(t.x-r*h,t.y+u,t.z-o*h);let m=fo.whole;if(!cM(f)&&f.x>m.x0+.05&&f.x<m.x1-.05&&f.z>m.z0+.05&&f.z<m.z1-.05)break;h*=.7,l<.5&&(u=Math.max(u,.1))}f.y=Math.min(f.y,Uu(f.x,f.z,t.y)-.025);let p=new w(t.x+r*.15,t.y+Ne.height*(.6-.25*l),t.z+o*.15),A=Xt.ready?1-Math.exp(-i*e):1;Xt.ready=!0,Xt.pos.lerp(f,A),Xt.look.lerp(p,A),l>0&&(Xt.pos.y=Math.min(Xt.pos.y,f.y)),et.position.copy(Xt.pos),et.up.set(0,1,0),et.lookAt(Xt.look),et.fov=66,et.updateProjectionMatrix()}function lM(){et.position.set(Ue.x,Ue.eye,Ue.z),et.rotation.set(Ue.pitch,Ue.yaw,0,"YXZ");let i=Ss.fov(pe==="pointing"?52:72);Math.abs(et.fov-i)>.1&&(et.fov+=(i-et.fov)*.2,et.updateProjectionMatrix())}function hM(){nl(),Ue=Oc(...vi),wn.visible=!1,dn.visible=Mi.visible=!1,Rn("count"),xi=0,Ui=!1,document.body.classList.add("counting"),Bt("\u{1F648} COUNT! NO PEEKING\u2026")}function uM(i){Ue=null,or();for(let e=0;e<16;e++){let t=(i*2.4+e*.7)%(Math.PI*2),n=vi[0]+Math.sin(t)*1.1,s=vi[1]+Math.cos(t)*1.1,r=fo.whole;if(!(n<r.x0+.2||n>r.x1-.2||s<r.z0+.2||s>r.z1-.2||rr.tops.some(o=>Dn(o,n,s,.06)))){ze=Jr(n,s,Math.atan2(n-vi[0],s-vi[1]));break}}Xt.ready=!1,Bt("\u{1F9DD} HIDE! THE SEEKER'S COUNTING")}function Am(i,e){i.traverse(t=>{var n;t.isMesh&&((n=t.material.color)==null?void 0:n.getHex())===14034984&&(t.material=t.material.clone(),t.material.color.setHex(e))})}function fM(i){let e=new Set,t=[...Te.players.keys()];for(let n of Te.on?Te.others():[]){let s=n.st[0]==="s"?"seeker":"elf",r=ts.get(n.id),o=s==="seeker"&&so.includes(n.st[7])?n.st[7]:so[0];if(r&&(r.kind!==s||r.look!==o)&&(Ut.remove(r.model),ts.delete(n.id),r=null),!r){let c=s==="seeker"?v0(o):Hc();s==="elf"&&Am(c,J0[Math.max(0,t.indexOf(n.id))%J0.length]),c.traverse(l=>sa.add(l)),Ut.add(c),r={model:c,kind:s,look:o},ts.set(n.id,r)}e.add(n.id),Object.assign(r,{id:n.id,role:n.role,found:n.found});let a=n.st;s==="seeker"?(r.model.position.set(a[1],0,a[2]),r.model.rotation.y=a[3],M0(r.model,i,{counting:!!a[6],crouch:!!a[5]})):(r.model.position.set(a[1],a[2],a[3]),r.model.rotation.y=a[4],Vc(r.model,i,{walking:a[5],run:a[6],climbing:!!a[7],hanging:!!a[8],air:!!a[9],sit:a[10],asleep:!!a[11],laugh:!!a[12]})),r.model.visible=!(s==="seeker"&&Te.myRole()==="seeker")}for(let[n,s]of ts)e.has(n)||(Ut.remove(s.model),ts.delete(n))}function dM(i){if(Zc=Math.max(0,Zc-i),!Te.on||pe!=="hide"||Zc>0)return;let e=Te.others().find(s=>s.role==="seeker"&&s.st[0]==="s");if(!e)return;let t=ze.x-e.st[1],n=ze.z-e.st[2];Math.hypot(t,n)>mm||(Xc(1),Te.sendShh([ze.x,ze.y+Ne.height,ze.z]),Bt("\u{1F92B} SHHHHH!"),ze.yaw=Math.atan2(-t,-n)+Math.PI,ze.run=1,ze.runT=9,Vu=.7,Zc=1.5)}function gm(i,e,t){let n=new w(vi[0],Sn.eye,vi[1]),s=new w(i,e,t),r=n.distanceTo(s);Ts.set(n,s.sub(n).normalize()),Ts.far=r-.05,Ts.camera=et;let o=a=>{for(;a;a=a.parent)if(!a.visible)return!1;return!0};return Ts.intersectObjects(Ut.children,!0).some(a=>a.object.isMesh&&o(a.object)&&!ju.has(a.object)&&!sa.has(a.object)&&a.object!==dn)}function Qu(){let i=Qe?Qe.saved:[zn,ri];nl(),$u(),ta(),Un=-1,Ue=Oc(...vi),wn.visible=!1,dn.visible=Mi.visible=!1,zn=Jc.count,ri=Jc.seek,Ut.updateMatrixWorld(!0);let e=A0(rr,Jc.elves,{sx:vi[0],sz:vi[1],time:Jc.count-2,hidden:gm});Qe={t:0,over:!1,saved:i,bots:e.map((t,n)=>{let s=Hc();return Am(s,tm[n][0]),s.traverse(r=>sa.add(r)),Ut.add(s),{h:t,model:s,found:!1,shhT:0,arrow:null,name:tm[n][1]}})},Rn("count"),xi=_i=0,Xn=0,Ui=!1,nr=ea=0,yn.x=yn.y=null,ia(),document.body.classList.add("counting"),Bt("\u{1F648} COUNT! NO PEEKING\u2026")}function nl(){if(Qe){for(let i of Qe.bots)Ut.remove(i.model),i.model.traverse(e=>sa.delete(e)),i.arrow&&Ut.remove(i.arrow);[zn,ri]=Qe.saved,Qe=null,dn.visible=!1,document.body.classList.remove("counting")}}function pM(i,e){Qe.t+=i;for(let n of Qe.bots){let s=g0(n.h,Qe.t);n.model.position.set(s.x,s.y,s.z),n.model.rotation.y=s.yaw;let r=n.found||Qe.over&&!n.found;if(Vc(n.model,e,{...s,...r?{sit:0,asleep:!1}:{},laugh:r}),n.shhT-=i,pe==="count"&&s.moving&&n.shhT<=0&&Math.hypot(s.x-Ue.x,s.z-Ue.z)<mm&&(Xc(1),Bt("\u{1F92B} SHHHHH!"),n.shhT=2),n.arrow){let o=Math.max(.5,Math.min(6,et.position.distanceTo(n.model.position)/.8)),a=Math.abs(Math.sin(e*5));n.arrow.quaternion.copy(et.quaternion),n.arrow.scale.setScalar(o),n.arrow.position.set(s.x,s.y+Ne.height,s.z).addScaledVector(new w(0,1,0).applyQuaternion(et.quaternion),(.015+a*.03)*o)}}dm(i,Qe.over||Qe.bots.some(n=>n.found),Qe.bots.filter(n=>n.found||Qe.over).map(n=>n.model.position));let t=Qe.reveal;if(t&&t.i<t.list.length){let n=t.list[t.i],s=n.model.position;t.t===0&&Bt(`\u{1F440} THE ${n.name.toUpperCase()} ELF WAS HERE!`);let r=t.t;t.t+=i,n.model.rotation.y=Math.atan2(Ue.x-s.x,Ue.z-s.z)+Math.PI,t.t<=yi?cm(i,s):r<=yi&&(Xt.pos.copy(et.position),Xt.look.copy(et.position).addScaledVector(et.getWorldDirection(new w),et.position.distanceTo(s)),Xt.ready=!0,Xt.swing=Math.PI,Vt("laugh"));let o=et.position.distanceTo(s);dn.visible=t.t<yi+.6,dn.position.set(s.x,s.y+Ne.height/2,s.z),dn.lookAt(et.position),dn.scale.setScalar(Math.max(.8,Math.min(4,o/1.2))*(1+Math.sin(t.t*6)*.15)),t.t>mM&&(t.i++,t.t=0,dn.visible=!1,t.i>=t.list.length&&t.then())}pe==="count"&&xi>=zn&&(Rn("seek"),document.body.classList.remove("counting"),_i=0,Ui=!1,Bt("\u{1F440} READY OR NOT! FIND THE ELVES!"))}function xm(i){let e=Qe,t=e.bots.length,n=e.bots.filter(o=>o.found).length;if(e.over=!0,Rn("found"),Ue.pointing=!1,i)Bt("\u{1F389} FOUND EVERY ELF!");else{Bt("\u23F0 TIME'S UP!"),Vt("bell"),Vt("laugh");for(let o of e.bots)o.found||(o.arrow=Mi.clone(),o.arrow.visible=!0,Ut.add(o.arrow))}let s=e.bots.filter(o=>!o.found).map(o=>`The <b>${o.name}</b> elf was ${Zu(o.model.position)}.`).join("<br>"),r=()=>{Qe===e&&na(i?"\u{1F50E} Found every elf!":"\u{1F9DD} The elves win!",i?`All ${t} in <b>${ho(_i)}</b>, with <b>${Xn}</b> ${Xn===1?"guess":"guesses"}.`:`You found <b>${n} of ${t}</b>.<br>${s}`,"\u{1F50E} Seek again",Qu,["\u{1F3E0} Back to the start",()=>{nl(),Ue=null,wn.visible=!0,il()}])};i?setTimeout(r,2e3):setTimeout(()=>{Qe===e&&(e.reveal={list:e.bots.filter(o=>!o.found),i:0,t:0,then:()=>setTimeout(r,1200)})},1200)}function AM(i,e){let t=Math.max(0,Math.min(1,i/e)),n=t*Math.PI*2,s=50+Math.sin(n)*42,r=50-Math.cos(n)*42;lo.querySelector(".pie").setAttribute("d",t>=.999?"M50 8 A42 42 0 1 1 49.99 8 Z":t<=0?"":`M50 50 L50 8 A42 42 0 ${t>.5?1:0} 1 ${s.toFixed(2)} ${r.toFixed(2)} Z`);let o=Math.max(0,Math.ceil(i));lo.querySelector("text").textContent=o>=60?ho(o):String(o),lo.classList.toggle("hurry",i<=10)}function ra(){if(zt("online").style.display==="none"&&Te.on)return;let i=a=>String(a).replace(/[&<>"]/g,c=>`&#${c.charCodeAt(0)};`);Tn.querySelector("#ol-name")||(Tn.innerHTML=`<div class="box"><h2>\u{1F310} Play online</h2><div class="row">\u{1F3F7}\uFE0F <input id="ol-name" maxlength="12" placeholder="Your name" autocomplete="off" autocorrect="off" spellcheck="false"></div><div class="row">\u{1F50E} When I seek, I'm <button class="look" data-ol="look" data-look="him">\u{1F385} Him</button><button class="look" data-ol="look" data-look="her">\u2744\uFE0F Her</button></div><div id="ol-rest" style="display:contents"></div></div>`,Fu="");let e=Tn.querySelector("#ol-name");document.activeElement!==e&&(e.value=tl());for(let a of Tn.querySelectorAll(".look"))a.classList.toggle("on",a.dataset.look===ym());let t=[...Te.players.values()].map(a=>i(a.name)).join(", "),n=Te.status()?`<div class="st">${i(Te.status())}</div>`:"",s=`${Te.on?Te.host?`<div class="code">${Te.code()}</div><div>In the room: <span class="who">${t}</span></div><div class="row"><button data-ol="start" ${Te.players.size<2?'disabled style="opacity:.5"':""}>\u25B6\uFE0F Start${Te.players.size<2?" (waiting for a buddy)":""}</button><button class="grey" data-ol="invite">\u{1F4E4} Invite</button></div>`:`<div class="code">${Te.code()}</div><div>In the room: <span class="who">${t}</span></div><div>Waiting for the host to start\u2026</div>`:`<div class="row"><button data-ol="host">\u{1F4E1} Host a game</button></div><div class="row">or <input id="ol-code" maxlength="4" size="5" placeholder="CODE" value="${i(tf)}" autocapitalize="characters" autocomplete="off" autocorrect="off" spellcheck="false"><button data-ol="join">\u{1F517} Join</button></div>`}${n}<div class="row">${Te.on?'<button class="red" data-ol="leave">\u{1F6AA} Leave</button>':""}<button class="grey" data-ol="close">\u2716 Close</button></div>`;if(s===Fu)return;let r=Tn.querySelector("#ol-code");document.activeElement===r&&r||(Fu=s,Tn.querySelector("#ol-rest").innerHTML=s)}function gM(){Rn("title"),oi.style.display="none",Tn.style.display="flex",ra()}function _m(){Te.leave(),document.body.classList.remove("online","counting");for(let i of ts.values())Ut.remove(i.model);ts.clear(),Ue=null,wn.visible=!0,Tn.style.display="none",il()}function il(){na("\u{1F9DD} Hide the Elf","Player 1: you're the elf. <b>Walk into things to climb them</b>, <b>jump</b> near something tall, then press <b>\u{1F648} Hide</b>.<br>Player 2: find him!<br>Or \u{1F50E} practice seeking: the computer hides 3 elves. Or \u{1F310} online: everyone on their own phone.","\u{1F9DD} Start hiding",or)}function co(i,e){let t=e?{pads:[],kb:{x:0,y:0},events:[]}:fm.poll(i,{holdToggle:!1}),n=ws.x+t.kb.x,s=ws.y+t.kb.y,r=!1,o=!1;for(let d of t.pads){n+=d.x,s+=d.y;let y=Z0.get(d.index)||[],g=d.pressed.filter(_=>!y.includes(_));g.includes(0)&&(r=!0),g.includes(2)&&(o=!0),g.includes(3)&&Ss.press("binoculars"),g.includes(1)&&Ss.press("magnifier"),Z0.set(d.index,d.pressed)}e&&({x:n,y:s}=e),n=Math.max(-1,Math.min(1,n)),s=Math.max(-1,Math.min(1,s));let a=t.events.some(d=>d.type==="drop"&&d.pad<0);t.events.some(d=>d.type==="music")&&(ns(),ir.setOn(!ir.on),Xu()),(jc("KeyH")||o&&pe==="hide")&&$c(),(jc("KeyP")||o&&(pe==="seek"||pe==="pointing"))&&Ku(),jc("KeyC")&&Ue&&(Ue.crouch=!Ue.crouch,zt("crouch").classList.toggle("on",Ue.crouch)),jc("KeyG")&&el(),Ss.update(i);let c=performance.now()/1e3;if(pe==="hide"||pe==="title"){let d=pe==="hide"&&(zu||a||r||e&&e.jump);d&&Vt("swoosh"),pe==="hide"&&(Vu>0&&(Vu-=i,n=0,s=-1),Uc(ze,{x:n,y:s,jump:d},i,rr),Te.on?xi=zn-Te.left:e||(xi+=i),xi>=zn-10&&!Ui&&(Ui=!0,Bt("\u23F0 10 SECONDS!"),Vt("bell")),(xi>=zn||Yu&&!ze.air)&&$c(!0)),Xt.swing+=es.x*.8,Xt.swing*=Math.exp(-i*(Qo.size?0:1.5))}else if(Ue&&pe!=="handoff"&&pe!=="sitting"){(pe==="seek"||pe==="pointing")&&(Te.on?_i=ri-Te.left:e||(_i+=i),_i>=ri-10&&!Ui&&(Ui=!0,Bt("\u23F0 10 SECONDS!"),Vt("bell")),_i>=ri&&!Te.on&&el(!0)),pe==="count"&&(xi=Te.on?zn-Te.left:xi+i),pe==="pointing"&&(a||r)&&Qc(),ea>0&&(ea-=i)<=0&&Qc(),nr>0&&(nr-=i)<=0&&(document.body.classList.remove("tapaim"),pe==="seek"&&(yn.x=yn.y=null,ia()));let d=nr>0;pe==="reveal"&&cm(i),n0(Ue,(pe==="seek"||pe==="pointing")&&!d?Ss.steer({x:n,y:s,lookX:es.x,lookY:es.y},i):pe==="count"?{x:0,y:0,lookX:es.x,lookY:es.y}:{x:0,y:0},i,rr)}zu=!1,es.x=es.y=0,wn.position.set(ze.x,ze.y,ze.z),wn.rotation.y=ze.yaw,Un>=0&&(Un+=i);let l=Un>=0&&!ze.cling;if(Vc(wn,c,{walking:pe==="hide"?ze.walking:0,run:ze.run,climbing:ze.climbing,hanging:!!ze.cling,air:ze.air,sit:l?Math.min(1,Un/.7):0,asleep:l&&Un>1,laugh:pe==="reveal"||pe==="out"}),oM(i,l&&Un>1),Qe?pM(i,c):dm(i,pe==="reveal"&&Li>yi||pe==="out"),pe==="reveal"){let d=Li;Li+=i,d<=yi&&Li>yi&&(Xt.pos.copy(et.position),Xt.look.copy(et.position).addScaledVector(et.getWorldDirection(new w),et.position.distanceTo(wn.position)),Xt.ready=!0,Xt.swing=Math.PI,Vt("laugh"));let y=et.position.distanceTo(wn.position),g=Math.abs(Math.sin(Li*5)),_=Math.max(.8,Math.min(4,y/1.2))*(1+Math.sin(Li*6)*.15),T=Math.max(.5,Math.min(6,y/.8));dn.position.set(ze.x,ze.y+Ne.height/2,ze.z),dn.scale.setScalar(_),dn.lookAt(et.position),dn.visible=Li<yi+.6,Mi.quaternion.copy(et.quaternion),Mi.scale.setScalar(T),Mi.position.set(ze.x,ze.y+Ne.height,ze.z).addScaledVector(new w(0,1,0).applyQuaternion(et.quaternion),(.015+g*.03)*T)}let h=pe==="reveal"&&Li>yi,u=Qe==null?void 0:Qe.reveal,f=u&&u.i<u.list.length&&u.t>yi?u.list[u.i]:null;if(h)Ou(i,2.2),er=null;else if(f)Ou(i,2.2,f.model.position,f.model.rotation.y),er=null;else if(Ue&&pe!=="hide"&&pe!=="title"&&pe!=="handoff"&&pe!=="sitting"){lM();let d=er?Math.hypot(Ue.x-er[0],Ue.z-er[1])/Math.max(i,.001)/Sn.walk:0;er=[Ue.x,Ue.z],Bu.update(i,Math.min(1,d),Ue.yaw,pe==="pointing"||nr>0,yn.x??innerWidth/2,yn.y??innerHeight/2)}else Ou(i),er=null;Bu.show(nf()&&!Ss.binoculars());let p=pe==="hide"||pe==="count"?zn-xi:Te.on?Te.left:ri-_i,A=[...Te.players.values()].filter(d=>d.role==="elf"&&!d.found).length,x=Qe?Qe.bots.filter(d=>d.found).length:0;Y0.textContent=pe==="hide"?"\u{1F9DD} Hide! Walk into things to climb":pe==="count"?"\u{1F648} Counting\u2026 the elves are hiding":(pe==="seek"||pe==="pointing")&&Qe?`\u{1F50E} Found ${x}/${Qe.bots.length}${x<Qe.bots.length?` \xB7 ${Qe.bots.length-x} to go`:""}`:(pe==="seek"||pe==="pointing")&&Te.on?`\u{1F50E} ${A} ${A===1?"elf":"elves"} to find`:pe==="seek"||pe==="pointing"?`\u{1F50E} Find the elf! \xB7 ${Xn} ${Xn===1?"guess":"guesses"}`:Te.on&&pe==="sitting"&&Te.phase==="seek"?`\u{1F92B} ${ho(Math.max(0,Math.ceil(Te.left)))} \xB7 stay hidden!`:Te.on&&pe==="sitting"?`\u{1F92B} hidden \xB7 ${ho(Math.max(0,Math.ceil(Te.left)))} till the seeker looks`:pe==="out"?`\u{1F389} found \xB7 ${A} still hidden`:"",["hide","count","seek","pointing"].includes(pe)&&AM(p,pe==="hide"||pe==="count"?zn:ri);let m=(pe==="hide"||pe==="seek"||pe==="pointing")&&p<=10;dM(i),Te.update(i),fM(c),Y0.classList.toggle("hurry",m),ir.tempo(m?1.3:1),fo.update(i)}function vm(i){let e=Math.min(.05,(i-Wu)/1e3);Wu=i,co(e),On.render(Ut,et),Ss.render(On,Ut,et,nf()),requestAnimationFrame(vm)}function xM(){if(fn.get("at")&&qu.splice(0,3,...fn.get("at").split(",").map(Number)),fn.has("shot")){oi.style.display="none",or();let i=+fn.get("sim")||0,e={x:+(fn.get("sx")??0),y:+(fn.get("sy")??0)};for(let t=0;t<i;t+=1/60)co(1/60,e);if(fn.has("seek")&&(Un=2,am(),fn.has("point")&&Ku(),fn.has("giveup"))){el();for(let t=0;t<(+fn.get("giveup")||1.5)*60;t++)co(1/60,{x:0,y:0})}window.__test={elfOnScreen:()=>{let t=wn.position.clone();return t.y+=Ne.height/2,t.project(et),[(t.x+1)/2*innerWidth,(1-t.y)/2*innerHeight]},guesses:()=>Xn,phase:()=>pe},co(1/60,{x:0,y:0}),co(1/60,{x:0,y:0}),On.render(Ut,et)}else fn.has("practice")?(oi.style.display="none",Qu()):il();fn.has("debug")&&(window.__elf={onl:Te,mirrors:ts,seeker:()=>Ue,elf:()=>ze,camera:et,fire:(i,e)=>Qc(i,e),phase:()=>pe,practice:()=>Qe,step:i=>co(i),hidden:gm}),fn.get("join")&&(Tn.style.display="flex",tf=fn.get("join"),Te.join(fn.get("join"),tl()).then(i=>{i&&document.body.classList.add("online"),ra()})),requestAnimationFrame(i=>{Wu=i,vm(i)})}var ir,ns,Xu,fn,nm,im,On,Ut,et,fo,rr,qu,vi,wn,Bu,er,ze,dn,Mi,zt,oi,sm,rm,$o,Kc,Y0,nM,om,zn,ri,Un,pe,Ue,_i,Xn,Li,xi,Yu,Ui,ho,Ts,ju,yn,yi,uo,lm,ws,hm,zu,ar,es,Qo,Ju,nr,ea,K0,iM,fm,Ss,j0,jc,Z0,rM,Di,ku,aM,Ni,Hu,Xt,cM,pm,tr,mm,ts,sa,J0,$0,Vu,Zc,Q0,em,Te,Jc,tm,Qe,mM,Tn,ef,lo,tl,Gu,ym,tf,Fu,Oi,Rs,sr,nf,Wu,bm=Tt(()=>{Bn();oa();Mu();$r();m0();x0();b0();E0();Cc();w0();D0();U0();H0();G0();X0();Du();q0();W0();ir=new Yc,ns=()=>{let i=Lu();return ir.start(i),i},Xu=()=>{let i=document.getElementById("music");i&&(i.textContent=ir.on?"\u{1F3B5}":"\u{1F507}")},fn=new URLSearchParams(location.search),im=!!((nm=globalThis.matchMedia)!=null&&nm.call(globalThis,"(pointer: coarse)").matches);im&&document.body.classList.add("touch");On=new Xs({antialias:!0,preserveDrawingBuffer:fn.has("shot")});On.setPixelRatio(Math.min(devicePixelRatio,1.5));On.setSize(innerWidth,innerHeight);On.shadowMap.enabled=!0;On.shadowMap.type=Nh;On.toneMapping=Uh;document.body.appendChild(On.domElement);Ut=new ms;Ut.background=new Ie(2762016);et=new Yt(66,innerWidth/innerHeight,.01,40);addEventListener("resize",()=>{On.setSize(innerWidth,innerHeight),et.aspect=innerWidth/innerHeight,et.updateProjectionMatrix()});fo=$p(Ut);fo.labels.visible=!1;rr=T0(fo),qu=[2.6,1,0],vi=[2.6,1,0],wn=Hc();Ut.add(wn);Bu=new Wc(document.getElementById("gun")),er=null,ze=Jr(...qu),dn=new xt(new hn(.12,.018,8,32),new Jt({color:16765503,depthTest:!1,transparent:!0}));dn.renderOrder=10;dn.visible=!1;Ut.add(dn);Mi=new Ze;{let i=new Jt({color:15087942,depthTest:!1,transparent:!0}),e=new xt(new wi(.035,.05,16),i);e.rotation.x=Math.PI,e.position.y=.025;let t=new xt(new st(.013,.013,.05,12),i);t.position.y=.075;for(let n of[e,t])n.renderOrder=11,Mi.add(n)}Mi.visible=!1;Ut.add(Mi);zt=i=>document.getElementById(i),oi=zt("screen"),sm=zt("screen-title"),rm=zt("screen-text"),$o=zt("screen-go"),Kc=zt("banner"),Y0=zt("hud"),nM=[30,45,60,90,120],om=i=>{try{return+localStorage.getItem(i)||0}catch{return 0}},zn=+fn.get("hidetime")||om("hide-elf.hidetime")||45,ri=+fn.get("seektime")||om("hide-elf.seektime")||60,Un=-1,pe="title",Ue=null,_i=0,Xn=0,Li=0,xi=0,Yu=!1,Ui=!1;ho=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,Ts=new vc,ju=new Set;wn.traverse(i=>ju.add(i));yn={x:null,y:null};yi=1;uo=zt("stick"),lm=zt("knob"),ws={x:0,y:0},hm=i=>{let e=uo.getBoundingClientRect();[ws.x,ws.y]=N0(i.clientX-(e.left+e.width/2),i.clientY-(e.top+e.height/2),e.width/2),lm.style.transform=`translate(${ws.x*e.width/2}px, ${ws.y*e.width/2}px)`};uo.addEventListener("pointerdown",i=>{i.preventDefault(),uo.setPointerCapture(i.pointerId),hm(i)});uo.addEventListener("pointermove",i=>{uo.hasPointerCapture(i.pointerId)&&hm(i)});for(let i of["pointerup","pointercancel","lostpointercapture"])uo.addEventListener(i,()=>{ws.x=ws.y=0,lm.style.transform=""});zu=!1,ar=(i,e)=>zt(i).addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),ns(),e()});ar("jump",()=>{zu=!0});ar("hide",$c);ar("point",Ku);ar("fire",()=>Qc());ar("crouch",()=>{Ue&&(Ue.crouch=!Ue.crouch,zt("crouch").classList.toggle("on",Ue.crouch))});ar("giveup",el);ar("music",()=>{ir.setOn(!ir.on),Xu()});Xu();um("hide-times","hide-elf.hidetime",()=>zn,i=>{zn=i});um("seek-times","hide-elf.seektime",()=>ri,i=>{ri=i});zt("gear").addEventListener("click",()=>{zt("settings").style.display="flex"});zt("settings-done").addEventListener("click",()=>{zt("settings").style.display="none"});es={x:0,y:0},Qo=new Map,Ju=new Map;On.domElement.addEventListener("pointerdown",i=>{ns(),Qo.set(i.pointerId,[i.clientX,i.clientY]),Ju.set(i.pointerId,[i.clientX,i.clientY,performance.now()]),On.domElement.setPointerCapture(i.pointerId)});On.domElement.addEventListener("pointermove",i=>{let e=Qo.get(i.pointerId);if(!e)return;let t=(pe==="pointing"?.0022:.005)*(im?1:.8);es.x+=(i.clientX-e[0])*t,es.y+=(i.clientY-e[1])*t,Qo.set(i.pointerId,[i.clientX,i.clientY])});On.domElement.addEventListener("pointerup",i=>{let e=Ju.get(i.pointerId);e&&(pe==="pointing"||pe==="seek")&&Math.hypot(i.clientX-e[0],i.clientY-e[1])<14&&performance.now()-e[2]<450&&sM(i.clientX,i.clientY)});for(let i of["pointerup","pointercancel"])On.domElement.addEventListener(i,e=>{Qo.delete(e.pointerId),Ju.delete(e.pointerId)});nr=0,ea=0,K0=.28,iM=.9;addEventListener("touchend",()=>ns());fm=new qc,Ss=k0({canUse:()=>!!Ue&&(pe==="seek"||pe==="pointing")&&nf()}),j0={},jc=i=>{let e=!!fm.keys[i],t=e&&!j0[i];return j0[i]=e,t},Z0=new Map,rM=kp(),Di=[],ku=0;aM=(()=>{let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.font='bold 100px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=12,e.strokeStyle="#9d0208",e.strokeText("HA!",128,68),e.fillStyle="#ffd23f",e.fillText("HA!",128,68);let t=new As(i);return t.colorSpace=gt,t})(),Ni=[],Hu=0;Xt={pos:new w,look:new w,ready:!1,swing:0},cM=i=>rr.tops.some(e=>i.x>e.x0&&i.x<e.x1&&i.z>e.z0&&i.z<e.z1&&i.y<e.y1&&!(e.under!==void 0&&i.y<e.under-.01)),pm=Mt+.24;tr={t:0,over:pm};mm=.55,ts=new Map,sa=new Set,J0=[14034984,1667522,2853438,15764480,7358696,15092096,820633],$0=!1,Vu=0,Zc=0,Q0=0,em=0,Te=p0({myState:()=>{if(Te.myRole()==="seeker")return Ue?["s",Ue.x,Ue.z,Ue.yaw,Ue.pitch,Ue.crouch?1:0,pe==="count"?1:0,ym()]:null;if(!["hide","sitting","seek","out"].includes(pe)&&pe!=="pointing")return null;let i=Un>=0&&!ze.cling;return["e",ze.x,ze.y,ze.z,ze.yaw,pe==="hide"?ze.walking:0,ze.run,ze.climbing?1:0,ze.cling?1:0,ze.air?1:0,i?Math.min(1,Un/.7):0,i&&Un>1?1:0,pe==="out"?1:0]},onRound({seeker:i,hide:e,seek:t,order:n}){zt("online").style.display="none",oi.style.display="none",$o.style.display="",zn=e,ri=t,$0=!1,Q0=0,$u(),ta(),em=Math.max(0,n.indexOf(Te.me)),i===Te.me?hM():uM(em)},onPhase(i){i==="seek"?Te.myRole()==="seeker"?(Rn("seek"),document.body.classList.remove("counting"),_i=0,Ui=!1,Bt("\u{1F440} READY OR NOT! FIND THE ELVES!")):pe==="hide"&&$c(!0):i==="lobby"&&gM()},onFound(i,e,t){i===Te.me?($0=!0,Rn("out"),Q0=0,Un=-1,ta(),Bt(t?"\u{1F389} FOUND! YOU SEEK NEXT ROUND":"\u{1F389} FOUND!"),Vt("boing")):Bt(`\u{1F389} ${Te.name(i).toUpperCase()} FOUND!${t?" (SEEKS NEXT)":""}`)},onShh(i,e){i!==Te.me&&Xc(1-et.position.distanceTo(new w(...e))/4)},onEnd(i){let e=i.next?Te.name(i.next):null;Rn("results"),document.body.classList.remove("counting"),sm.textContent=i.winner==="seeker"?"\u{1F50E} Found every elf!":"\u{1F9DD} The elves win!",rm.innerHTML=`${i.found.length?`Found: <b>${i.found.map(t=>Te.name(t)).join(", ")}</b>.<br>`:""}${e?`<b>${e}</b> was found first: they seek next.`:"Nobody was found: the next player seeks."}<br>Next round in a few seconds\u2026`,$o.style.display=Oi.style.display=Rs.style.display=sr.style.display="none",oi.style.display="flex",zt("gear").style.display="none"},onLost(i){_m(),Bt(`\u{1F310} ${i.toUpperCase()}`)},render:()=>ra()});Jc={elves:3,count:20,seek:45},tm=[[1667522,"blue"],[15764480,"orange"],[7358696,"purple"]],Qe=null;mM=4.6;Tn=document.createElement("div");Tn.id="online";document.body.appendChild(Tn);{let i=document.createElement("style");i.textContent=`
  #online { position: fixed; inset: 0; z-index: 25; display: none; align-items: center; justify-content: center; background: rgba(20,16,12,0.86); color: #fff; font: 500 max(15px, 3.2vmin) system-ui; }
  #online .box { display: flex; flex-direction: column; gap: 2.2vmin; align-items: center; max-width: 90vw; text-align: center; }
  #online h2 { margin: 0; font: 900 7vmin system-ui; color: #fff3b0; text-shadow: 0 0.06em 0 #9d0208; }
  #online .row { display: flex; gap: 1.6vmin; flex-wrap: wrap; justify-content: center; align-items: center; }
  #online button { padding: 1.8vmin 3.6vmin; border: 0; border-radius: 2.4vmin; background: #2b8a3e; color: #fff; font: 800 max(15px, 3.4vmin) system-ui; cursor: pointer; }
  #online button.red { background: #d62828; } #online button.grey { background: #495057; }
  #online input { padding: 1.6vmin 2vmin; border: 0.5vmin solid #ffd23f; border-radius: 2vmin; background: #1b1712; color: #fff; font: 800 max(16px, 3.4vmin) system-ui; text-align: center; }
  #online .code { font: 900 9vmin system-ui; letter-spacing: 1vmin; color: #ffd23f; }
  #online button.look { background: #495057; border: 0.5vmin solid transparent; } #online button.look.on { background: #2b8a3e; border-color: #ffd23f; box-shadow: 0 0 2vmin rgba(255,210,63,0.5); }
  #online .who { color: #ffd23f; } #online .st { color: #ffb4a2; }
  body.online #giveup, body.online #gear { display: none !important; }
  #lids { position: fixed; inset: 0; pointer-events: none; z-index: 3; display: none; overflow: hidden; }
  body.counting #lids { display: block; }
  #lids img { position: absolute; right: -3vw; top: 52%; width: min(74vw, 146vh); transform: translateY(-50%); filter: brightness(0.7) drop-shadow(0 0 5vmin rgba(0,0,0,0.7)); animation: palm 3.2s ease-in-out infinite; }
  @media (orientation: portrait) { #lids img { width: 115vw; right: -16vw; } }
  @keyframes palm { 0%, 100% { transform: translateY(-50%) rotate(-1.5deg); } 50% { transform: translate(-0.6vw, -51.5%) rotate(1.5deg); } }
  body.counting canvas { filter: brightness(0.2) saturate(0.6); }
  #clock { position: fixed; z-index: 6; pointer-events: none; display: none; left: calc(env(safe-area-inset-left) + 2vmin); top: calc(env(safe-area-inset-top) + 11vmin); width: max(64px, 15vmin); height: max(64px, 15vmin); filter: drop-shadow(0 0.6vmin 1.2vmin rgba(0,0,0,0.45)); }
  body[data-phase=hide] #clock, body[data-phase=count] #clock, body[data-phase=seek] #clock, body[data-phase=pointing] #clock { display: block; }
  body.counting #clock { left: 50%; top: 50%; width: 34vmin; height: 34vmin; transform: translate(-50%, -50%); }
  #clock .face { fill: #fff3b0; stroke: #1d3557; stroke-width: 4; } #clock .pie { fill: #2b8a3e; } #clock .tick { stroke: #1d3557; stroke-width: 2.5; stroke-linecap: round; }
  #clock text { font: 900 30px system-ui; fill: #1d3557; text-anchor: middle; dominant-baseline: central; paint-order: stroke; stroke: #fff3b0; stroke-width: 6px; }
  #clock.hurry .pie { fill: #d62828; } #clock.hurry { animation: tick 0.5s ease-in-out infinite alternate; }
  body.counting #clock.hurry { animation: none; }
  @keyframes tick { to { transform: scale(1.1); } }`,document.head.appendChild(i)}ef=document.createElement("div");ef.id="lids";ef.innerHTML=`<img src="${L0()}" alt="">`;document.body.appendChild(ef);lo=document.createElement("div");lo.id="clock";lo.innerHTML=`<svg viewBox="0 0 100 100"><circle class="face" cx="50" cy="50" r="46"/><path class="pie"/>${Array.from({length:12},(i,e)=>{let t=e*Math.PI/6;return`<line class="tick" x1="${50+Math.sin(t)*38}" y1="${50-Math.cos(t)*38}" x2="${50+Math.sin(t)*44}" y2="${50-Math.cos(t)*44}"/>`}).join("")}<text x="50" y="50"></text></svg>`;document.body.appendChild(lo);tl=()=>{try{return localStorage.getItem("hide-elf.name")||""}catch{return""}},Gu=null,ym=()=>{let i=Gu;try{i??=localStorage.getItem("hide-elf.look")}catch{}return so.includes(i)?i:so[0]},tf="",Fu="";Tn.addEventListener("input",i=>{if(i.target.id==="ol-code"&&(tf=i.target.value),i.target.id==="ol-name"){let e=i.target.value.trim().slice(0,12);try{localStorage.setItem("hide-elf.name",e)}catch{}Te.setName(e)}});Tn.addEventListener("click",async i=>{var n;let e=i.target.closest("[data-ol]");if(!e)return;ns();let t=e.dataset.ol;if(t==="host")await Te.hostGame(tl(),{hide:zn,seek:ri}),document.body.classList.add("online");else if(t==="join")await Te.join(Tn.querySelector("#ol-code").value,tl())&&document.body.classList.add("online");else if(t==="start")Te.startRound();else if(t==="look"){Gu=e.dataset.look;try{localStorage.setItem("hide-elf.look",Gu)}catch{}}else if(t==="invite"){let s=`${mo?location.origin+location.pathname.replace(/index\.html$/,""):"https://sean-bostic.github.io/play/hide-elf/"}?join=${Te.code()}`;navigator.share?navigator.share({title:"Hide the Elf",text:`Hide the Elf! Room ${Te.code()}`,url:s}).catch(()=>{}):(n=navigator.clipboard)==null||n.writeText(s)}else t==="leave"?_m():t==="close"&&(Tn.style.display="none",Te.on||il());ra()});Oi=document.createElement("button");Oi.id="screen-online";Oi.textContent="\u{1F310} Play online";oi.appendChild(Oi);Oi.style.cssText="padding:1.8vmin 4vmin;border:0;border-radius:3vmin;background:#1971c2;color:#fff;font:800 max(16px,3.6vmin) system-ui;cursor:pointer";Oi.addEventListener("click",()=>{ns(),Tn.style.display="flex",ra()});Rs=document.createElement("button");Rs.textContent="\u{1F50E} Practice seeking";oi.insertBefore(Rs,Oi);Rs.style.cssText=Oi.style.cssText;Rs.style.background="#f08c00";Rs.addEventListener("click",()=>{ns(),oi.style.display="none",zt("gear").style.display="none",Qu()});sr=document.createElement("button");oi.appendChild(sr);sr.style.cssText=Oi.style.cssText;sr.style.background="#495057";nf=()=>!!Ue&&["seek","pointing","found","reveal"].includes(pe)&&!(pe==="reveal"&&Li>yi)&&!(Qe!=null&&Qe.reveal&&Qe.reveal.i<Qe.reveal.list.length&&Qe.reveal.t>yi),Wu=performance.now()});oa();_u();Up().then(()=>Promise.resolve().then(()=>(bm(),Mm))).then(i=>i.start());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
