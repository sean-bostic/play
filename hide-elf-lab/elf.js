(()=>{var Cm=Object.defineProperty;var wt=(i,e)=>()=>(i&&(e=i(i=0)),e);var Im=(i,e)=>{for(var t in e)Cm(i,t,{get:e[t],enumerable:!0})};var po,ra=wt(()=>{po=/\/[^/]+-lab\//.test(location.pathname);if(po)for(let i of["getItem","setItem","removeItem"]){let e=Storage.prototype[i];Storage.prototype[i]=function(t,...n){return e.call(this,`lab:${t}`,...n)}}});function fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function nn(i,e,t){return Math.max(e,Math.min(t,i))}function zh(i,e){return(i%e+e)%e}function RA(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function CA(i,e,t){return i!==e?(t-i)/(e-i):0}function To(i,e,t){return(1-t)*i+t*e}function IA(i,e,t,n){return To(i,e,1-Math.exp(-t*n))}function PA(i,e=1){return e-Math.abs(zh(i,e*2)-e)}function LA(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function DA(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function NA(i,e){return i+Math.floor(Math.random()*(e-i+1))}function UA(i,e){return i+Math.random()*(e-i)}function OA(i){return i*(.5-Math.random())}function FA(i){i!==void 0&&(zf=i);let e=zf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kA(i){return i*wo}function BA(i){return i*Or}function Zl(i){return(i&i-1)===0&&i!==0}function zA(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function HA(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),A=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*A,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*A,a*l);break;case"ZYZ":i.set(c*A,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function cp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Do(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function GA(){let i=Do("canvas");return i.style.display="block",i}function Ro(i){i in Hf||(Hf[i]=!0,console.warn(i))}function Ir(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function gl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ls.fromArray(i,r);let a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),c=e.dot(Ls),l=t.dot(Ls),h=n.dot(Ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function wl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ng(i,e,t,n,s,r,o,a){let c;if(e.side===On?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===wi,a),c===null)return null;ba.copy(a),ba.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ba);return l<t.near||l>t.far?null:{distance:l,point:ba.clone(),object:i}}function Ea(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ar),i.getVertexPosition(c,gr),i.getVertexPosition(l,xr);let h=ng(i,e,t,n,Ar,gr,xr,Ma);if(h){s&&(ya.fromBufferAttribute(s,a),_a.fromBufferAttribute(s,c),va.fromBufferAttribute(s,l),h.uv=ks.getInterpolation(Ma,Ar,gr,xr,ya,_a,va,new fe)),r&&(ya.fromBufferAttribute(r,a),_a.fromBufferAttribute(r,c),va.fromBufferAttribute(r,l),h.uv1=ks.getInterpolation(Ma,Ar,gr,xr,ya,_a,va,new fe),h.uv2=h.uv1),o&&(ed.fromBufferAttribute(o,a),td.fromBufferAttribute(o,c),nd.fromBufferAttribute(o,l),h.normal=ks.getInterpolation(Ma,Ar,gr,xr,ed,td,nd,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new T,materialIndex:0};ks.getNormal(Ar,gr,xr,u.normal),h.face=u}return h}function Fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Cn(i){let e={};for(let t=0;t<i.length;t++){let n=Fr(i[t]);for(let s in n)e[s]=n[s]}return e}function ig(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hp(i){return i.getRenderTarget()===null?i.outputColorSpace:xt.workingColorSpace}function up(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lg(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,m=u.byteLength,A=i.createBuffer();i.bindBuffer(h,A),i.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:A,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let f=h.array,m=h._updateRange,A=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&A.length===0&&i.bufferSubData(u,0,f),A.length!==0){for(let x=0,p=A.length;x<p;x++){let d=A[x];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}function Vy(i,e,t,n,s,r,o){let a=new Pe(0),c=r===!0?0:1,l,h,u=null,f=0,m=null;function A(p,d){let y=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?t:e).get(g)),g===null?x(a,c):g&&g.isColor&&(x(g,1),y=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Mc)?(h===void 0&&(h=new Ct(new $n(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Fr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=xt.getTransfer(g.colorSpace)!==Ut,(u!==g||f!==g.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,f=g.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Ct(new Qt(2,2),new Gn({name:"BackgroundMaterial",uniforms:Fr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=xt.getTransfer(g.colorSpace)!==Ut,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=g,f=g.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,d){p.getRGB(wa,hp(i)),n.buffers.color.setClear(wa.r,wa.g,wa.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),c=d,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:A}}function Wy(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function u(P,k,Y,Q,J){let $=!1;if(o){let ne=x(Q,Y,k);l!==ne&&(l=ne,m(l.object)),$=d(P,Q,Y,J),$&&y(P,Q,Y,J)}else{let ne=k.wireframe===!0;(l.geometry!==Q.id||l.program!==Y.id||l.wireframe!==ne)&&(l.geometry=Q.id,l.program=Y.id,l.wireframe=ne,$=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,U(P,k,Y,Q),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function A(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,k,Y){let Q=Y.wireframe===!0,J=a[P.id];J===void 0&&(J={},a[P.id]=J);let $=J[k.id];$===void 0&&($={},J[k.id]=$);let ne=$[Q];return ne===void 0&&(ne=p(f()),$[Q]=ne),ne}function p(P){let k=[],Y=[],Q=[];for(let J=0;J<s;J++)k[J]=0,Y[J]=0,Q[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:Q,object:P,attributes:{},index:null}}function d(P,k,Y,Q){let J=l.attributes,$=k.attributes,ne=0,re=Y.getAttributes();for(let _e in re)if(re[_e].location>=0){let ie=J[_e],xe=$[_e];if(xe===void 0&&(_e==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),_e==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor)),ie===void 0||ie.attribute!==xe||xe&&ie.data!==xe.data)return!0;ne++}return l.attributesNum!==ne||l.index!==Q}function y(P,k,Y,Q){let J={},$=k.attributes,ne=0,re=Y.getAttributes();for(let _e in re)if(re[_e].location>=0){let ie=$[_e];ie===void 0&&(_e==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),_e==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor));let xe={};xe.attribute=ie,ie&&ie.data&&(xe.data=ie.data),J[_e]=xe,ne++}l.attributes=J,l.attributesNum=ne,l.index=Q}function g(){let P=l.newAttributes;for(let k=0,Y=P.length;k<Y;k++)P[k]=0}function _(P){w(P,0)}function w(P,k){let Y=l.newAttributes,Q=l.enabledAttributes,J=l.attributeDivisors;Y[P]=1,Q[P]===0&&(i.enableVertexAttribArray(P),Q[P]=1),J[P]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,k),J[P]=k)}function E(){let P=l.newAttributes,k=l.enabledAttributes;for(let Y=0,Q=k.length;Y<Q;Y++)k[Y]!==P[Y]&&(i.disableVertexAttribArray(Y),k[Y]=0)}function I(P,k,Y,Q,J,$,ne){ne===!0?i.vertexAttribIPointer(P,k,Y,J,$):i.vertexAttribPointer(P,k,Y,Q,J,$)}function U(P,k,Y,Q){if(n.isWebGL2===!1&&(P.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let J=Q.attributes,$=Y.getAttributes(),ne=k.defaultAttributeValues;for(let re in $){let _e=$[re];if(_e.location>=0){let K=J[re];if(K===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let ie=K.normalized,xe=K.itemSize,Re=t.get(K);if(Re===void 0)continue;let Ce=Re.buffer,Xe=Re.type,Ve=Re.bytesPerElement,Be=n.isWebGL2===!0&&(Xe===i.INT||Xe===i.UNSIGNED_INT||K.gpuType===Jd);if(K.isInterleavedBufferAttribute){let ft=K.data,W=ft.stride,Jt=K.offset;if(ft.isInstancedInterleavedBuffer){for(let Ne=0;Ne<_e.locationSize;Ne++)w(_e.location+Ne,ft.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ne=0;Ne<_e.locationSize;Ne++)_(_e.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Ne=0;Ne<_e.locationSize;Ne++)I(_e.location+Ne,xe/_e.locationSize,Xe,ie,W*Ve,(Jt+xe/_e.locationSize*Ne)*Ve,Be)}else{if(K.isInstancedBufferAttribute){for(let ft=0;ft<_e.locationSize;ft++)w(_e.location+ft,K.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ft=0;ft<_e.locationSize;ft++)_(_e.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let ft=0;ft<_e.locationSize;ft++)I(_e.location+ft,xe/_e.locationSize,Xe,ie,xe*Ve,xe/_e.locationSize*ft*Ve,Be)}}else if(ne!==void 0){let ie=ne[re];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(_e.location,ie);break;case 3:i.vertexAttrib3fv(_e.location,ie);break;case 4:i.vertexAttrib4fv(_e.location,ie);break;default:i.vertexAttrib1fv(_e.location,ie)}}}}E()}function v(){F();for(let P in a){let k=a[P];for(let Y in k){let Q=k[Y];for(let J in Q)A(Q[J].object),delete Q[J];delete k[Y]}delete a[P]}}function R(P){if(a[P.id]===void 0)return;let k=a[P.id];for(let Y in k){let Q=k[Y];for(let J in Q)A(Q[J].object),delete Q[J];delete k[Y]}delete a[P.id]}function B(P){for(let k in a){let Y=a[k];if(Y[P.id]===void 0)continue;let Q=Y[P.id];for(let J in Q)A(Q[J].object),delete Q[J];delete Y[P.id]}}function F(){Z(),h=!0,l!==c&&(l=c,m(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:F,resetDefaultState:Z,dispose:v,releaseStatesOfGeometry:R,releaseStatesOfProgram:B,initAttributes:g,enableAttribute:_,disableUnusedAttributes:E}}function Xy(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let m,A;if(s)m=i,A="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[A](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let A=0;A<f;A++)this.render(h[A],u[A]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let A=0;for(let x=0;x<f;x++)A+=u[x];t.update(A,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function qy(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,_=o||e.has("OES_texture_float"),w=g&&_,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:A,maxAttributes:x,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:w,maxSamples:E}}function Yy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new qi,a=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let A=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||A===null||A.length===0||r&&!p)r?h(null):l();else{let y=r?0:n,g=y*4,_=d.clippingState||null;c.value=_,_=h(A,f,g,m);for(let w=0;w!==g;++w)_[w]=t[w];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,A){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,A!==!0||p===null){let d=m+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let g=0,_=m;g!==x;++g,_+=4)o.copy(u[g]).applyMatrix4(y,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Ky(i){let e=new WeakMap;function t(o,a){return a===ql?o.mapping=Lr:a===Yl&&(o.mapping=Dr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ql||a===Yl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new eh(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function jy(i){let e=[],t=[],n=[],s=i,r=i-Tr+1+id.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Tr?c=id[o-i+Tr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,A=6,x=3,p=2,d=1,y=new Float32Array(x*A*m),g=new Float32Array(p*A*m),_=new Float32Array(d*A*m);for(let E=0;E<m;E++){let I=E%3*2/3-1,U=E>2?0:-1,v=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];y.set(v,x*A*E),g.set(f,p*A*E);let R=[E,E,E,E,E,E];_.set(R,d*A*E)}let w=new Gt;w.setAttribute("position",new sn(y,x)),w.setAttribute("uv",new sn(g,p)),w.setAttribute("faceIndex",new sn(_,d)),e.push(w),s>Tr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function od(i,e,t){let n=new pi(i,e,t);return n.texture.mapping=Mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zy(i,e,t){let n=new Float32Array(Fs),s=new T(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function ad(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function cd(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

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
	`}function Jy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ql||c===Yl,h=c===Lr||c===Dr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ec(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ec(i));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $y(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qy(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let A in f.attributes)e.remove(f.attributes[A]);for(let A in f.morphAttributes){let x=f.morphAttributes[A];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let A in f)e.update(f[A],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let A in m){let x=m[A];for(let p=0,d=x.length;p<d;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(u){let f=[],m=u.index,A=u.attributes.position,x=0;if(m!==null){let y=m.array;x=m.version;for(let g=0,_=y.length;g<_;g+=3){let w=y[g+0],E=y[g+1],I=y[g+2];f.push(w,E,E,I,I,w)}}else if(A!==void 0){let y=A.array;x=A.version;for(let g=0,_=y.length/3-1;g<_;g+=3){let w=g+0,E=g+1,I=g+2;f.push(w,E,E,I,I,w)}}else return;let p=new(cp(f)?Ja:Za)(f,1);p.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function e_(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,A){i.drawElements(r,A,a,m*c),t.update(A,r,1)}function u(m,A,x){if(x===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,A,a,m*c,x),t.update(A,r,x)}function f(m,A,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<x;d++)this.render(m[d]/c,A[d]);else{p.multiDrawElementsWEBGL(r,A,0,a,m,0,x);let d=0;for(let y=0;y<x;y++)d+=A[y];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function t_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function n_(i,e){return i[0]-e[0]}function i_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function s_(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Rt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,A=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==A){let P=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],U=0;y===!0&&(U=1),g===!0&&(U=2),_===!0&&(U=3);let v=h.attributes.position.count*U,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let B=new Float32Array(v*R*4*A),F=new Ka(B,v,R,A);F.type=Yi,F.needsUpdate=!0;let Z=U*4;for(let k=0;k<A;k++){let Y=w[k],Q=E[k],J=I[k],$=v*R*4*k;for(let ne=0;ne<Y.count;ne++){let re=ne*Z;y===!0&&(o.fromBufferAttribute(Y,ne),B[$+re+0]=o.x,B[$+re+1]=o.y,B[$+re+2]=o.z,B[$+re+3]=0),g===!0&&(o.fromBufferAttribute(Q,ne),B[$+re+4]=o.x,B[$+re+5]=o.y,B[$+re+6]=o.z,B[$+re+7]=0),_===!0&&(o.fromBufferAttribute(J,ne),B[$+re+8]=o.x,B[$+re+9]=o.y,B[$+re+10]=o.z,B[$+re+11]=J.itemSize===4?o.w:1)}}x={count:A,texture:F,size:new fe(v,R)},r.set(h,x),h.addEventListener("dispose",P)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,A=n[h.id];if(A===void 0||A.length!==m){A=[];for(let g=0;g<m;g++)A[g]=[g,0];n[h.id]=A}for(let g=0;g<m;g++){let _=A[g];_[0]=g,_[1]=f[g]}A.sort(i_);for(let g=0;g<8;g++)g<m&&A[g][1]?(a[g][0]=A[g][0],a[g][1]=A[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(n_);let x=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let g=0;g<8;g++){let _=a[g],w=_[0],E=_[1];w!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+g)!==x[w]&&h.setAttribute("morphTarget"+g,x[w]),p&&h.getAttribute("morphNormal"+g)!==p[w]&&h.setAttribute("morphNormal"+g,p[w]),s[g]=E,d+=E):(x&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),p&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),s[g]=0)}let y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function r_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}function qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sc(i,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function o_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function h_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),an(t,n)}}function u_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),an(t,n)}}function f_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;ud.set(n),i.uniformMatrix4fv(this.addr,!1,ud),an(t,n)}}function d_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function g_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?dp:fp;t.setTexture2D(e||r,s)}function M_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mp,s)}function b_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ap,s)}function E_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pp,s)}function S_(i){switch(i){case 5126:return o_;case 35664:return a_;case 35665:return c_;case 35666:return l_;case 35674:return h_;case 35675:return u_;case 35676:return f_;case 5124:case 35670:return d_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return A_;case 5125:return g_;case 36294:return x_;case 36295:return y_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return E_}}function w_(i,e){i.uniform1fv(this.addr,e)}function T_(i,e){let t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function R_(i,e){let t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function C_(i,e){let t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function I_(i,e){let t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function P_(i,e){let t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function L_(i,e){let t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function D_(i,e){i.uniform1iv(this.addr,e)}function N_(i,e){i.uniform2iv(this.addr,e)}function U_(i,e){i.uniform3iv(this.addr,e)}function O_(i,e){i.uniform4iv(this.addr,e)}function F_(i,e){i.uniform1uiv(this.addr,e)}function k_(i,e){i.uniform2uiv(this.addr,e)}function B_(i,e){i.uniform3uiv(this.addr,e)}function z_(i,e){i.uniform4uiv(this.addr,e)}function H_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||fp,r[o])}function G_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mp,r[o])}function V_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ap,r[o])}function W_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pp,r[o])}function X_(i){switch(i){case 5126:return w_;case 35664:return T_;case 35665:return R_;case 35666:return C_;case 35674:return I_;case 35675:return P_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return N_;case 35668:case 35672:return U_;case 35669:case 35673:return O_;case 5125:return F_;case 36294:return k_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return W_}}function pd(i,e){i.seq.push(e),i.map[e.id]=e}function q_(i,e,t){let n=i.name,s=n.length;for(Nl.lastIndex=0;;){let r=Nl.exec(n),o=Nl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){pd(t,l===void 0?new th(a,i,e):new nh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ih(a),pd(t,u)),t=u}}}function md(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function j_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Z_(i){let e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(i),n;switch(e===t?n="":e===Va&&t===Ga?n="LinearDisplayP3ToLinearSRGB":e===Ga&&t===Va&&(n="LinearSRGBToLinearDisplayP3"),i){case rn:case Ec:return[n,"LinearTransferOETF"];case yt:case Bh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ad(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+j_(i.getShaderSource(e),o)}else return s}function J_(i,e){let t=Z_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $_(i,e){let t;switch(e){case sA:t="Linear";break;case rA:t="Reinhard";break;case oA:t="OptimizedCineon";break;case Nh:t="ACESFilmic";break;case cA:t="AgX";break;case aA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rr).join(`
`)}function e1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Rr).join(`
`)}function t1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Rr(i){return i!==""}function gd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function sh(i){return i.replace(i1,r1)}function r1(i,e){let t=rt[e];if(t===void 0){let n=s1.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sh(t)}function yd(i){return i.replace(o1,a1)}function a1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function l1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Lr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function u1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jd:e="ENVMAP_BLENDING_MULTIPLY";break;case nA:e="ENVMAP_BLENDING_MIX";break;case iA:e="ENVMAP_BLENDING_ADD";break}return e}function f1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function d1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=c1(t),l=l1(t),h=h1(t),u=u1(t),f=f1(t),m=t.isWebGL2?"":Q_(t),A=e1(t),x=t1(r),p=s.createProgram(),d,y,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Rr).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Rr).join(`
`),y.length>0&&(y+=`
`)):(d=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),y=[m,_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==us?"#define TONE_MAPPING":"",t.toneMapping!==us?rt.tonemapping_pars_fragment:"",t.toneMapping!==us?$_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,J_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),o=sh(o),o=gd(o,t),o=xd(o,t),a=sh(a),a=gd(a,t),a=xd(a,t),o=yd(o),a=yd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let _=g+d+o,w=g+y+a,E=md(s,s.VERTEX_SHADER,_),I=md(s,s.FRAGMENT_SHADER,w);s.attachShader(p,E),s.attachShader(p,I),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function U(F){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(E).trim(),k=s.getShaderInfoLog(I).trim(),Y=!0,Q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,E,I);else{let J=Ad(s,E,"vertex"),$=Ad(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+J+`
`+$)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(P===""||k==="")&&(Q=!1);Q&&(F.diagnostics={runnable:Y,programLog:Z,vertexShader:{log:P,prefix:d},fragmentShader:{log:k,prefix:y}})}s.deleteShader(E),s.deleteShader(I),v=new Pr(s,p),R=n1(s,p)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(p,Y_)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=I,this}function m1(i,e,t,n,s,r,o){let a=new No,c=new rh,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function p(v,R,B,F,Z){let P=F.fog,k=Z.geometry,Y=v.isMeshStandardMaterial?F.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),J=Q&&Q.mapping===Mc?Q.image.height:null,$=A[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=ne!==void 0?ne.length:0,_e=0;k.morphAttributes.position!==void 0&&(_e=1),k.morphAttributes.normal!==void 0&&(_e=2),k.morphAttributes.color!==void 0&&(_e=3);let K,ie,xe,Re;if($){let N=Ei[$];K=N.vertexShader,ie=N.fragmentShader}else K=v.vertexShader,ie=v.fragmentShader,c.update(v),xe=c.getVertexShaderID(v),Re=c.getFragmentShaderID(v);let Ce=i.getRenderTarget(),Xe=Z.isInstancedMesh===!0,Ve=Z.isBatchedMesh===!0,Be=!!v.map,ft=!!v.matcap,W=!!Q,Jt=!!v.aoMap,Ne=!!v.lightMap,Fe=!!v.bumpMap,Se=!!v.normalMap,Dt=!!v.displacementMap,nt=!!v.emissiveMap,C=!!v.metalnessMap,M=!!v.roughnessMap,q=v.anisotropy>0,ae=v.clearcoat>0,oe=v.iridescence>0,ce=v.sheen>0,Me=v.transmission>0,ye=q&&!!v.anisotropyMap,be=ae&&!!v.clearcoatMap,Ie=ae&&!!v.clearcoatNormalMap,Ze=ae&&!!v.clearcoatRoughnessMap,se=oe&&!!v.iridescenceMap,mt=oe&&!!v.iridescenceThicknessMap,Je=ce&&!!v.sheenColorMap,ze=ce&&!!v.sheenRoughnessMap,Le=!!v.specularMap,ve=!!v.specularColorMap,qe=!!v.specularIntensityMap,At=Me&&!!v.transmissionMap,Nt=Me&&!!v.thicknessMap,$e=!!v.gradientMap,ue=!!v.alphaMap,L=v.alphaTest>0,ge=!!v.alphaHash,Ae=!!v.extensions,He=!!k.attributes.uv1,ke=!!k.attributes.uv2,St=!!k.attributes.uv3,Mt=us;return v.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Mt=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:ie,defines:v.defines,customVertexShaderID:xe,customFragmentShaderID:Re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Ve,instancing:Xe,instancingColor:Xe&&Z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?i.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:rn,map:Be,matcap:ft,envMap:W,envMapMode:W&&Q.mapping,envMapCubeUVHeight:J,aoMap:Jt,lightMap:Ne,bumpMap:Fe,normalMap:Se,displacementMap:f&&Dt,emissiveMap:nt,normalMapObjectSpace:Se&&v.normalMapType===_A,normalMapTangentSpace:Se&&v.normalMapType===kh,metalnessMap:C,roughnessMap:M,anisotropy:q,anisotropyMap:ye,clearcoat:ae,clearcoatMap:be,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ze,iridescence:oe,iridescenceMap:se,iridescenceThicknessMap:mt,sheen:ce,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:Le,specularColorMap:ve,specularIntensityMap:qe,transmission:Me,transmissionMap:At,thicknessMap:Nt,gradientMap:$e,opaque:v.transparent===!1&&v.blending===Cr,alphaMap:ue,alphaTest:L,alphaHash:ge,combine:v.combine,mapUv:Be&&x(v.map.channel),aoMapUv:Jt&&x(v.aoMap.channel),lightMapUv:Ne&&x(v.lightMap.channel),bumpMapUv:Fe&&x(v.bumpMap.channel),normalMapUv:Se&&x(v.normalMap.channel),displacementMapUv:Dt&&x(v.displacementMap.channel),emissiveMapUv:nt&&x(v.emissiveMap.channel),metalnessMapUv:C&&x(v.metalnessMap.channel),roughnessMapUv:M&&x(v.roughnessMap.channel),anisotropyMapUv:ye&&x(v.anisotropyMap.channel),clearcoatMapUv:be&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(v.sheenRoughnessMap.channel),specularMapUv:Le&&x(v.specularMap.channel),specularColorMapUv:ve&&x(v.specularColorMap.channel),specularIntensityMapUv:qe&&x(v.specularIntensityMap.channel),transmissionMapUv:At&&x(v.transmissionMap.channel),thicknessMapUv:Nt&&x(v.thicknessMap.channel),alphaMapUv:ue&&x(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Se||q),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:He,vertexUv2s:ke,vertexUv3s:St,pointsUvs:Z.isPoints===!0&&!!k.attributes.uv&&(Be||ue),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:_e,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&xt.getTransfer(v.map.colorSpace)===Ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Un,flipSided:v.side===On,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:Ae&&v.extensions.derivatives===!0,extensionFragDepth:Ae&&v.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(let B in v.defines)R.push(B),R.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(y(R,v),g(R,v),R.push(i.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function y(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function g(v,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function _(v){let R=A[v.type],B;if(R){let F=Ei[R];B=sg.clone(F.uniforms)}else B=v.uniforms;return B}function w(v,R){let B;for(let F=0,Z=l.length;F<Z;F++){let P=l[F];if(P.cacheKey===R){B=P,++B.usedTimes;break}}return B===void 0&&(B=new d1(i,R,v,r),l.push(B)),B}function E(v){if(--v.usedTimes===0){let R=l.indexOf(v);l[R]=l[l.length-1],l.pop(),v.destroy()}}function I(v){c.remove(v)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:_,acquireProgram:w,releaseProgram:E,releaseShaderCache:I,programs:l,dispose:U}}function A1(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function g1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Md(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,m,A,x,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:A,renderOrder:u.renderOrder,z:x,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=A,d.renderOrder=u.renderOrder,d.z=x,d.group=p),e++,d}function a(u,f,m,A,x,p){let d=o(u,f,m,A,x,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function c(u,f,m,A,x,p){let d=o(u,f,m,A,x,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||g1),n.length>1&&n.sort(f||vd),s.length>1&&s.sort(f||vd)}function h(){for(let u=e,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function x1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Md,i.set(n,[o])):s>=r.length?(o=new Md,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function y1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Pe};break;case"SpotLight":t={position:new T,direction:new T,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function _1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function M1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function b1(i,e){let t=new y1,n=_1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new T);let r=new T,o=new et,a=new et;function c(h,u){let f=0,m=0,A=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let x=0,p=0,d=0,y=0,g=0,_=0,w=0,E=0,I=0,U=0,v=0;h.sort(M1);let R=u===!0?Math.PI:1;for(let F=0,Z=h.length;F<Z;F++){let P=h[F],k=P.color,Y=P.intensity,Q=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=k.r*Y*R,m+=k.g*Y*R,A+=k.b*Y*R;else if(P.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(P.sh.coefficients[$],Y);v++}else if(P.isDirectionalLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){let ne=P.shadow,re=n.get(P);re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,s.directionalShadow[x]=re,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=P.shadow.matrix,_++}s.directional[x]=$,x++}else if(P.isSpotLight){let $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(k).multiplyScalar(Y*R),$.distance=Q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,s.spot[d]=$;let ne=P.shadow;if(P.map&&(s.spotLightMap[I]=P.map,I++,ne.updateMatrices(P),P.castShadow&&U++),s.spotLightMatrix[d]=ne.matrix,P.castShadow){let re=n.get(P);re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,s.spotShadow[d]=re,s.spotShadowMap[d]=J,E++}d++}else if(P.isRectAreaLight){let $=t.get(P);$.color.copy(k).multiplyScalar(Y),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=$,y++}else if(P.isPointLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*R),$.distance=P.distance,$.decay=P.decay,P.castShadow){let ne=P.shadow,re=n.get(P);re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,s.pointShadow[p]=re,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=P.shadow.matrix,w++}s.point[p]=$,p++}else if(P.isHemisphereLight){let $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(Y*R),$.groundColor.copy(P.groundColor).multiplyScalar(Y*R),s.hemi[g]=$,g++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=A;let B=s.hash;(B.directionalLength!==x||B.pointLength!==p||B.spotLength!==d||B.rectAreaLength!==y||B.hemiLength!==g||B.numDirectionalShadows!==_||B.numPointShadows!==w||B.numSpotShadows!==E||B.numSpotMaps!==I||B.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=y,s.point.length=p,s.hemi.length=g,s.directionalShadow.length=_,s.directionalShadowMap.length=_,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=_,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=E+I-U,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=v,B.directionalLength=x,B.pointLength=p,B.spotLength=d,B.rectAreaLength=y,B.hemiLength=g,B.numDirectionalShadows=_,B.numPointShadows=w,B.numSpotShadows=E,B.numSpotMaps=I,B.numLightProbes=v,s.version=v1++)}function l(h,u){let f=0,m=0,A=0,x=0,p=0,d=u.matrixWorldInverse;for(let y=0,g=h.length;y<g;y++){let _=h[y];if(_.isDirectionalLight){let w=s.directional[f];w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),f++}else if(_.isSpotLight){let w=s.spot[A];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),A++}else if(_.isRectAreaLight){let w=s.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(_.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let w=s.point[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),m++}else if(_.isHemisphereLight){let w=s.hemi[p];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:s}}function bd(i,e){let t=new b1(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function E1(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new bd(i,e),t.set(r,[c])):o>=a.length?(c=new bd(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}function T1(i,e,t){let n=new Uo,s=new fe,r=new fe,o=new Rt,a=new ah({depthPacking:yA}),c=new ch,l={},h=t.maxTextureSize,u={[wi]:On,[On]:wi,[Un]:Un},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:S1,fragmentShader:w1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let A=new Gt;A.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ct(A,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd;let d=this.type;this.render=function(E,I,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let v=i.getRenderTarget(),R=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),F=i.state;F.setBlending(hs),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Z=d!==Xi&&this.type===Xi,P=d===Xi&&this.type!==Xi;for(let k=0,Y=E.length;k<Y;k++){let Q=E[k],J=Q.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let $=J.getFrameExtents();if(s.multiply($),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,J.mapSize.y=r.y)),J.map===null||Z===!0||P===!0){let re=this.type!==Xi?{minFilter:jt,magFilter:jt}:{};J.map!==null&&J.map.dispose(),J.map=new pi(s.x,s.y,re),J.map.texture.name=Q.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let ne=J.getViewportCount();for(let re=0;re<ne;re++){let _e=J.getViewport(re);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),F.viewport(o),J.updateMatrices(Q,re),n=J.getFrustum(),_(I,U,J.camera,Q,this.type)}J.isPointLightShadow!==!0&&this.type===Xi&&y(J,U),J.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(v,R,B)};function y(E,I){let U=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,U,f,x,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,U,m,x,null)}function g(E,I,U,v){let R=null,B=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(B!==void 0)R=B;else if(R=U.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let F=R.uuid,Z=I.uuid,P=l[F];P===void 0&&(P={},l[F]=P);let k=P[Z];k===void 0&&(k=R.clone(),P[Z]=k,I.addEventListener("dispose",w)),R=k}if(R.visible=I.visible,R.wireframe=I.wireframe,v===Xi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:u[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,U.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=U}return R}function _(E,I,U,v,R){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Xi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);let Z=e.update(E),P=E.material;if(Array.isArray(P)){let k=Z.groups;for(let Y=0,Q=k.length;Y<Q;Y++){let J=k[Y],$=P[J.materialIndex];if($&&$.visible){let ne=g(E,$,v,R);E.onBeforeShadow(i,E,I,U,Z,ne,J),i.renderBufferDirect(U,null,Z,ne,E,J),E.onAfterShadow(i,E,I,U,Z,ne,J)}}}else if(P.visible){let k=g(E,P,v,R);E.onBeforeShadow(i,E,I,U,Z,k,null),i.renderBufferDirect(U,null,Z,k,E,null),E.onAfterShadow(i,E,I,U,Z,k,null)}}let F=E.children;for(let Z=0,P=F.length;Z<P;Z++)_(F[Z],I,U,v,R)}function w(E){E.target.removeEventListener("dispose",w);for(let U in l){let v=l[U],R=E.target.uuid;R in v&&(v[R].dispose(),delete v[R])}}}function R1(i,e,t){let n=t.isWebGL2;function s(){let L=!1,ge=new Rt,Ae=null,He=new Rt(0,0,0,0);return{setMask:function(ke){Ae!==ke&&!L&&(i.colorMask(ke,ke,ke,ke),Ae=ke)},setLocked:function(ke){L=ke},setClear:function(ke,St,Mt,S,N){N===!0&&(ke*=S,St*=S,Mt*=S),ge.set(ke,St,Mt,S),He.equals(ge)===!1&&(i.clearColor(ke,St,Mt,S),He.copy(ge))},reset:function(){L=!1,Ae=null,He.set(-1,0,0,0)}}}function r(){let L=!1,ge=null,Ae=null,He=null;return{setTest:function(ke){ke?Ve(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(ke){ge!==ke&&!L&&(i.depthMask(ke),ge=ke)},setFunc:function(ke){if(Ae!==ke){switch(ke){case jm:i.depthFunc(i.NEVER);break;case Zm:i.depthFunc(i.ALWAYS);break;case Jm:i.depthFunc(i.LESS);break;case Ba:i.depthFunc(i.LEQUAL);break;case $m:i.depthFunc(i.EQUAL);break;case Qm:i.depthFunc(i.GEQUAL);break;case eA:i.depthFunc(i.GREATER);break;case tA:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ke}},setLocked:function(ke){L=ke},setClear:function(ke){He!==ke&&(i.clearDepth(ke),He=ke)},reset:function(){L=!1,ge=null,Ae=null,He=null}}}function o(){let L=!1,ge=null,Ae=null,He=null,ke=null,St=null,Mt=null,S=null,N=null;return{setTest:function(D){L||(D?Ve(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(D){ge!==D&&!L&&(i.stencilMask(D),ge=D)},setFunc:function(D,X,z){(Ae!==D||He!==X||ke!==z)&&(i.stencilFunc(D,X,z),Ae=D,He=X,ke=z)},setOp:function(D,X,z){(St!==D||Mt!==X||S!==z)&&(i.stencilOp(D,X,z),St=D,Mt=X,S=z)},setLocked:function(D){L=D},setClear:function(D){N!==D&&(i.clearStencil(D),N=D)},reset:function(){L=!1,ge=null,Ae=null,He=null,ke=null,St=null,Mt=null,S=null,N=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},m={},A=new WeakMap,x=[],p=null,d=!1,y=null,g=null,_=null,w=null,E=null,I=null,U=null,v=new Pe(0,0,0),R=0,B=!1,F=null,Z=null,P=null,k=null,Y=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,$=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ne)[1]),J=$>=1):ne.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),J=$>=2);let re=null,_e={},K=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),xe=new Rt().fromArray(K),Re=new Rt().fromArray(ie);function Ce(L,ge,Ae,He){let ke=new Uint8Array(4),St=i.createTexture();i.bindTexture(L,St),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<Ae;Mt++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ge,0,i.RGBA,1,1,He,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(ge+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return St}let Xe={};Xe[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Xe[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Xe[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Xe[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ve(i.DEPTH_TEST),c.setFunc(Ba),nt(!1),C(sf),Ve(i.CULL_FACE),Se(hs);function Ve(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Be(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function ft(L,ge){return m[L]!==ge?(i.bindFramebuffer(L,ge),m[L]=ge,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ge),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ge)),!0):!1}function W(L,ge){let Ae=x,He=!1;if(L)if(Ae=A.get(ge),Ae===void 0&&(Ae=[],A.set(ge,Ae)),L.isWebGLMultipleRenderTargets){let ke=L.texture;if(Ae.length!==ke.length||Ae[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Mt=ke.length;St<Mt;St++)Ae[St]=i.COLOR_ATTACHMENT0+St;Ae.length=ke.length,He=!0}}else Ae[0]!==i.COLOR_ATTACHMENT0&&(Ae[0]=i.COLOR_ATTACHMENT0,He=!0);else Ae[0]!==i.BACK&&(Ae[0]=i.BACK,He=!0);He&&(t.isWebGL2?i.drawBuffers(Ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ae))}function Jt(L){return p!==L?(i.useProgram(L),p=L,!0):!1}let Ne={[Os]:i.FUNC_ADD,[Nm]:i.FUNC_SUBTRACT,[Um]:i.FUNC_REVERSE_SUBTRACT};if(n)Ne[af]=i.MIN,Ne[cf]=i.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(Ne[af]=L.MIN_EXT,Ne[cf]=L.MAX_EXT)}let Fe={[Om]:i.ZERO,[Fm]:i.ONE,[km]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[Wm]:i.SRC_ALPHA_SATURATE,[Gm]:i.DST_COLOR,[zm]:i.DST_ALPHA,[Bm]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[Vm]:i.ONE_MINUS_DST_COLOR,[Hm]:i.ONE_MINUS_DST_ALPHA,[Xm]:i.CONSTANT_COLOR,[qm]:i.ONE_MINUS_CONSTANT_COLOR,[Ym]:i.CONSTANT_ALPHA,[Km]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(L,ge,Ae,He,ke,St,Mt,S,N,D){if(L===hs){d===!0&&(Be(i.BLEND),d=!1);return}if(d===!1&&(Ve(i.BLEND),d=!0),L!==Dm){if(L!==y||D!==B){if((g!==Os||E!==Os)&&(i.blendEquation(i.FUNC_ADD),g=Os,E=Os),D)switch(L){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFunc(i.ONE,i.ONE);break;case rf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case of:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case of:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,w=null,I=null,U=null,v.set(0,0,0),R=0,y=L,B=D}return}ke=ke||ge,St=St||Ae,Mt=Mt||He,(ge!==g||ke!==E)&&(i.blendEquationSeparate(Ne[ge],Ne[ke]),g=ge,E=ke),(Ae!==_||He!==w||St!==I||Mt!==U)&&(i.blendFuncSeparate(Fe[Ae],Fe[He],Fe[St],Fe[Mt]),_=Ae,w=He,I=St,U=Mt),(S.equals(v)===!1||N!==R)&&(i.blendColor(S.r,S.g,S.b,N),v.copy(S),R=N),y=L,B=!1}function Dt(L,ge){L.side===Un?Be(i.CULL_FACE):Ve(i.CULL_FACE);let Ae=L.side===On;ge&&(Ae=!Ae),nt(Ae),L.blending===Cr&&L.transparent===!1?Se(hs):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let He=L.stencilWrite;l.setTest(He),He&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),q(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ve(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(L){F!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),F=L)}function C(L){L!==Pm?(Ve(i.CULL_FACE),L!==Z&&(L===sf?i.cullFace(i.BACK):L===Lm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),Z=L}function M(L){L!==P&&(J&&i.lineWidth(L),P=L)}function q(L,ge,Ae){L?(Ve(i.POLYGON_OFFSET_FILL),(k!==ge||Y!==Ae)&&(i.polygonOffset(ge,Ae),k=ge,Y=Ae)):Be(i.POLYGON_OFFSET_FILL)}function ae(L){L?Ve(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function oe(L){L===void 0&&(L=i.TEXTURE0+Q-1),re!==L&&(i.activeTexture(L),re=L)}function ce(L,ge,Ae){Ae===void 0&&(re===null?Ae=i.TEXTURE0+Q-1:Ae=re);let He=_e[Ae];He===void 0&&(He={type:void 0,texture:void 0},_e[Ae]=He),(He.type!==L||He.texture!==ge)&&(re!==Ae&&(i.activeTexture(Ae),re=Ae),i.bindTexture(L,ge||Xe[L]),He.type=L,He.texture=ge)}function Me(){let L=_e[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ye(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(L){xe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),xe.copy(L))}function At(L){Re.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Re.copy(L))}function Nt(L,ge){let Ae=u.get(ge);Ae===void 0&&(Ae=new WeakMap,u.set(ge,Ae));let He=Ae.get(L);He===void 0&&(He=i.getUniformBlockIndex(ge,L.name),Ae.set(L,He))}function $e(L,ge){let He=u.get(ge).get(L);h.get(ge)!==He&&(i.uniformBlockBinding(ge,He,L.__bindingPointIndex),h.set(ge,He))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},re=null,_e={},m={},A=new WeakMap,x=[],p=null,d=!1,y=null,g=null,_=null,w=null,E=null,I=null,U=null,v=new Pe(0,0,0),R=0,B=!1,F=null,Z=null,P=null,k=null,Y=null,xe.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ve,disable:Be,bindFramebuffer:ft,drawBuffers:W,useProgram:Jt,setBlending:Se,setMaterial:Dt,setFlipSided:nt,setCullFace:C,setLineWidth:M,setPolygonOffset:q,setScissorTest:ae,activeTexture:oe,bindTexture:ce,unbindTexture:Me,compressedTexImage2D:ye,compressedTexImage3D:be,texImage2D:Le,texImage3D:ve,updateUBOMapping:Nt,uniformBlockBinding:$e,texStorage2D:Je,texStorage3D:ze,texSubImage2D:Ie,texSubImage3D:Ze,compressedTexSubImage2D:se,compressedTexSubImage3D:mt,scissor:qe,viewport:At,reset:ue}}function C1(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(C,M){return m?new OffscreenCanvas(C,M):Do("canvas")}function x(C,M,q,ae){let oe=1;if((C.width>ae||C.height>ae)&&(oe=ae/Math.max(C.width,C.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let ce=M?Xa:Math.floor,Me=ce(oe*C.width),ye=ce(oe*C.height);u===void 0&&(u=A(Me,ye));let be=q?A(Me,ye):u;return be.width=Me,be.height=ye,be.getContext("2d").drawImage(C,0,0,Me,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+ye+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return Zl(C.width)&&Zl(C.height)}function d(C){return a?!1:C.wrapS!==dn||C.wrapT!==dn||C.minFilter!==jt&&C.minFilter!==In}function y(C,M){return C.generateMipmaps&&M&&C.minFilter!==jt&&C.minFilter!==In}function g(C){i.generateMipmap(C)}function _(C,M,q,ae,oe=!1){if(a===!1)return M;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce=M;if(M===i.RED&&(q===i.FLOAT&&(ce=i.R32F),q===i.HALF_FLOAT&&(ce=i.R16F),q===i.UNSIGNED_BYTE&&(ce=i.R8)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ce=i.R8UI),q===i.UNSIGNED_SHORT&&(ce=i.R16UI),q===i.UNSIGNED_INT&&(ce=i.R32UI),q===i.BYTE&&(ce=i.R8I),q===i.SHORT&&(ce=i.R16I),q===i.INT&&(ce=i.R32I)),M===i.RG&&(q===i.FLOAT&&(ce=i.RG32F),q===i.HALF_FLOAT&&(ce=i.RG16F),q===i.UNSIGNED_BYTE&&(ce=i.RG8)),M===i.RGBA){let Me=oe?Ha:xt.getTransfer(ae);q===i.FLOAT&&(ce=i.RGBA32F),q===i.HALF_FLOAT&&(ce=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ce=Me===Ut?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(C,M,q){return y(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){return C===jt||C===za||C===So?i.NEAREST:i.LINEAR}function I(C){let M=C.target;M.removeEventListener("dispose",I),v(M),M.isVideoTexture&&h.delete(M)}function U(C){let M=C.target;M.removeEventListener("dispose",U),B(M)}function v(C){let M=n.get(C);if(M.__webglInit===void 0)return;let q=C.source,ae=f.get(q);if(ae){let oe=ae[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(C),Object.keys(ae).length===0&&f.delete(q)}n.remove(C)}function R(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let q=C.source,ae=f.get(q);delete ae[M.__cacheKey],o.memory.textures--}function B(C){let M=C.texture,q=n.get(C),ae=n.get(M);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(q.__webglFramebuffer[oe]))for(let ce=0;ce<q.__webglFramebuffer[oe].length;ce++)i.deleteFramebuffer(q.__webglFramebuffer[oe][ce]);else i.deleteFramebuffer(q.__webglFramebuffer[oe]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[oe])}else{if(Array.isArray(q.__webglFramebuffer))for(let oe=0;oe<q.__webglFramebuffer.length;oe++)i.deleteFramebuffer(q.__webglFramebuffer[oe]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let oe=0;oe<q.__webglColorRenderbuffer.length;oe++)q.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[oe]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,ce=M.length;oe<ce;oe++){let Me=n.get(M[oe]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(M[oe])}n.remove(M),n.remove(C)}let F=0;function Z(){F=0}function P(){let C=F;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function k(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){let q=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(q,C,M);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}function Q(C,M){let q=n.get(C);if(C.version>0&&q.__version!==C.version){xe(q,C,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}function J(C,M){let q=n.get(C);if(C.version>0&&q.__version!==C.version){xe(q,C,M);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}function $(C,M){let q=n.get(C);if(C.version>0&&q.__version!==C.version){Re(q,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}let ne={[di]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},re={[jt]:i.NEAREST,[za]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[Uh]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},_e={[vA]:i.NEVER,[TA]:i.ALWAYS,[MA]:i.LESS,[op]:i.LEQUAL,[bA]:i.EQUAL,[wA]:i.GEQUAL,[EA]:i.GREATER,[SA]:i.NOTEQUAL};function K(C,M,q){if(q?(i.texParameteri(C,i.TEXTURE_WRAP_S,ne[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ne[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ne[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,re[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,re[M.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==dn||M.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,E(M.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==jt&&M.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===jt||M.minFilter!==So&&M.minFilter!==ds||M.type===Yi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Gs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ie(C,M){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));let ae=M.source,oe=f.get(ae);oe===void 0&&(oe={},f.set(ae,oe));let ce=k(M);if(ce!==C.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),oe[ce].usedTimes++;let Me=oe[C.__cacheKey];Me!==void 0&&(oe[C.__cacheKey].usedTimes--,Me.usedTimes===0&&R(M)),C.__cacheKey=ce,C.__webglTexture=oe[ce].texture}return q}function xe(C,M,q){let ae=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=i.TEXTURE_3D);let oe=ie(C,M),ce=M.source;t.bindTexture(ae,C.__webglTexture,i.TEXTURE0+q);let Me=n.get(ce);if(ce.version!==Me.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let ye=xt.getPrimaries(xt.workingColorSpace),be=M.colorSpace===Jn?null:xt.getPrimaries(M.colorSpace),Ie=M.colorSpace===Jn||ye===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ze=d(M)&&p(M.image)===!1,se=x(M.image,Ze,!1,s.maxTextureSize);se=nt(M,se);let mt=p(se)||a,Je=r.convert(M.format,M.colorSpace),ze=r.convert(M.type),Le=_(M.internalFormat,Je,ze,M.colorSpace,M.isVideoTexture);K(ae,M,mt);let ve,qe=M.mipmaps,At=a&&M.isVideoTexture!==!0&&Le!==ip,Nt=Me.__version===void 0||oe===!0,$e=w(M,se,mt);if(M.isDepthTexture)Le=i.DEPTH_COMPONENT,a?M.type===Yi?Le=i.DEPTH_COMPONENT32F:M.type===cs?Le=i.DEPTH_COMPONENT24:M.type===Bs?Le=i.DEPTH24_STENCIL8:Le=i.DEPTH_COMPONENT16:M.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===zs&&Le===i.DEPTH_COMPONENT&&M.type!==Oh&&M.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=cs,ze=r.convert(M.type)),M.format===Nr&&Le===i.DEPTH_COMPONENT&&(Le=i.DEPTH_STENCIL,M.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Bs,ze=r.convert(M.type))),Nt&&(At?t.texStorage2D(i.TEXTURE_2D,1,Le,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Le,se.width,se.height,0,Je,ze,null));else if(M.isDataTexture)if(qe.length>0&&mt){At&&Nt&&t.texStorage2D(i.TEXTURE_2D,$e,Le,qe[0].width,qe[0].height);for(let ue=0,L=qe.length;ue<L;ue++)ve=qe[ue],At?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,Je,ze,ve.data):t.texImage2D(i.TEXTURE_2D,ue,Le,ve.width,ve.height,0,Je,ze,ve.data);M.generateMipmaps=!1}else At?(Nt&&t.texStorage2D(i.TEXTURE_2D,$e,Le,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,Je,ze,se.data)):t.texImage2D(i.TEXTURE_2D,0,Le,se.width,se.height,0,Je,ze,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){At&&Nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,Le,qe[0].width,qe[0].height,se.depth);for(let ue=0,L=qe.length;ue<L;ue++)ve=qe[ue],M.format!==Zn?Je!==null?At?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ve.width,ve.height,se.depth,Je,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Le,ve.width,ve.height,se.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ve.width,ve.height,se.depth,Je,ze,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Le,ve.width,ve.height,se.depth,0,Je,ze,ve.data)}else{At&&Nt&&t.texStorage2D(i.TEXTURE_2D,$e,Le,qe[0].width,qe[0].height);for(let ue=0,L=qe.length;ue<L;ue++)ve=qe[ue],M.format!==Zn?Je!==null?At?t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,Je,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve.width,ve.height,Je,ze,ve.data):t.texImage2D(i.TEXTURE_2D,ue,Le,ve.width,ve.height,0,Je,ze,ve.data)}else if(M.isDataArrayTexture)At?(Nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,Le,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Je,ze,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,Je,ze,se.data);else if(M.isData3DTexture)At?(Nt&&t.texStorage3D(i.TEXTURE_3D,$e,Le,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Je,ze,se.data)):t.texImage3D(i.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,Je,ze,se.data);else if(M.isFramebufferTexture){if(Nt)if(At)t.texStorage2D(i.TEXTURE_2D,$e,Le,se.width,se.height);else{let ue=se.width,L=se.height;for(let ge=0;ge<$e;ge++)t.texImage2D(i.TEXTURE_2D,ge,Le,ue,L,0,Je,ze,null),ue>>=1,L>>=1}}else if(qe.length>0&&mt){At&&Nt&&t.texStorage2D(i.TEXTURE_2D,$e,Le,qe[0].width,qe[0].height);for(let ue=0,L=qe.length;ue<L;ue++)ve=qe[ue],At?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Je,ze,ve):t.texImage2D(i.TEXTURE_2D,ue,Le,Je,ze,ve);M.generateMipmaps=!1}else At?(Nt&&t.texStorage2D(i.TEXTURE_2D,$e,Le,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Je,ze,se)):t.texImage2D(i.TEXTURE_2D,0,Le,Je,ze,se);y(M,mt)&&g(ae),Me.__version=ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Re(C,M,q){if(M.image.length!==6)return;let ae=ie(C,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let ce=n.get(oe);if(oe.version!==ce.__version||ae===!0){t.activeTexture(i.TEXTURE0+q);let Me=xt.getPrimaries(xt.workingColorSpace),ye=M.colorSpace===Jn?null:xt.getPrimaries(M.colorSpace),be=M.colorSpace===Jn||Me===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,Ze=M.image[0]&&M.image[0].isDataTexture,se=[];for(let ue=0;ue<6;ue++)!Ie&&!Ze?se[ue]=x(M.image[ue],!1,!0,s.maxCubemapSize):se[ue]=Ze?M.image[ue].image:M.image[ue],se[ue]=nt(M,se[ue]);let mt=se[0],Je=p(mt)||a,ze=r.convert(M.format,M.colorSpace),Le=r.convert(M.type),ve=_(M.internalFormat,ze,Le,M.colorSpace),qe=a&&M.isVideoTexture!==!0,At=ce.__version===void 0||ae===!0,Nt=w(M,mt,Je);K(i.TEXTURE_CUBE_MAP,M,Je);let $e;if(Ie){qe&&At&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ve,mt.width,mt.height);for(let ue=0;ue<6;ue++){$e=se[ue].mipmaps;for(let L=0;L<$e.length;L++){let ge=$e[L];M.format!==Zn?ze!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,ge.width,ge.height,ze,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,ve,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,ge.width,ge.height,ze,Le,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,ve,ge.width,ge.height,0,ze,Le,ge.data)}}}else{$e=M.mipmaps,qe&&At&&($e.length>0&&Nt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ve,se[0].width,se[0].height));for(let ue=0;ue<6;ue++)if(Ze){qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,se[ue].width,se[ue].height,ze,Le,se[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ve,se[ue].width,se[ue].height,0,ze,Le,se[ue].data);for(let L=0;L<$e.length;L++){let Ae=$e[L].image[ue].image;qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,Ae.width,Ae.height,ze,Le,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,ve,Ae.width,Ae.height,0,ze,Le,Ae.data)}}else{qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ze,Le,se[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ve,ze,Le,se[ue]);for(let L=0;L<$e.length;L++){let ge=$e[L];qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,ze,Le,ge.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,ve,ze,Le,ge.image[ue])}}}y(M,Je)&&g(i.TEXTURE_CUBE_MAP),ce.__version=oe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ce(C,M,q,ae,oe,ce){let Me=r.convert(q.format,q.colorSpace),ye=r.convert(q.type),be=_(q.internalFormat,Me,ye,q.colorSpace);if(!n.get(M).__hasExternalTextures){let Ze=Math.max(1,M.width>>ce),se=Math.max(1,M.height>>ce);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ce,be,Ze,se,M.depth,0,Me,ye,null):t.texImage2D(oe,ce,be,Ze,se,0,Me,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Se(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,oe,n.get(q).__webglTexture,0,Fe(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,oe,n.get(q).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(C,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ae=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||Se(M)){let oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Yi?ae=i.DEPTH_COMPONENT32F:oe.type===cs&&(ae=i.DEPTH_COMPONENT24));let ce=Fe(M);Se(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ae,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ae,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){let ae=Fe(M);q&&Se(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,M.width,M.height):Se(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<ae.length;oe++){let ce=ae[oe],Me=r.convert(ce.format,ce.colorSpace),ye=r.convert(ce.type),be=_(ce.internalFormat,Me,ye,ce.colorSpace),Ie=Fe(M);q&&Se(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,be,M.width,M.height):Se(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,be,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,be,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let ae=n.get(M.depthTexture).__webglTexture,oe=Fe(M);if(M.depthTexture.format===zs)Se(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(M.depthTexture.format===Nr)Se(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Be(C){let M=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ve(M.__webglFramebuffer,C)}else if(q){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=i.createRenderbuffer(),Xe(M.__webglDepthbuffer[ae],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Xe(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,M,q){let ae=n.get(C);M!==void 0&&Ce(ae.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Be(C)}function W(C){let M=C.texture,q=n.get(C),ae=n.get(M);C.addEventListener("dispose",U),C.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=M.version,o.memory.textures++);let oe=C.isWebGLCubeRenderTarget===!0,ce=C.isWebGLMultipleRenderTargets===!0,Me=p(C)||a;if(oe){q.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[ye]=[];for(let be=0;be<M.mipmaps.length;be++)q.__webglFramebuffer[ye][be]=i.createFramebuffer()}else q.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)q.__webglFramebuffer[ye]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){let ye=C.texture;for(let be=0,Ie=ye.length;be<Ie;be++){let Ze=n.get(ye[be]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Se(C)===!1){let ye=ce?M:[M];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let be=0;be<ye.length;be++){let Ie=ye[be];q.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[be]);let Ze=r.convert(Ie.format,Ie.colorSpace),se=r.convert(Ie.type),mt=_(Ie.internalFormat,Ze,se,Ie.colorSpace,C.isXRRenderTarget===!0),Je=Fe(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,q.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),K(i.TEXTURE_CUBE_MAP,M,Me);for(let ye=0;ye<6;ye++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Ce(q.__webglFramebuffer[ye][be],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else Ce(q.__webglFramebuffer[ye],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);y(M,Me)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let ye=C.texture;for(let be=0,Ie=ye.length;be<Ie;be++){let Ze=ye[be],se=n.get(Ze);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),K(i.TEXTURE_2D,Ze,Me),Ce(q.__webglFramebuffer,C,Ze,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),y(Ze,Me)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ye=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,ae.__webglTexture),K(ye,M,Me),a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Ce(q.__webglFramebuffer[be],C,M,i.COLOR_ATTACHMENT0,ye,be);else Ce(q.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,ye,0);y(M,Me)&&g(ye),t.unbindTexture()}C.depthBuffer&&Be(C)}function Jt(C){let M=p(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0,oe=q.length;ae<oe;ae++){let ce=q[ae];if(y(ce,M)){let Me=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(ce).__webglTexture;t.bindTexture(Me,ye),g(Me),t.unbindTexture()}}}function Ne(C){if(a&&C.samples>0&&Se(C)===!1){let M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,ae=C.height,oe=i.COLOR_BUFFER_BIT,ce=[],Me=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(C),be=C.isWebGLMultipleRenderTargets===!0;if(be)for(let Ie=0;Ie<M.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){ce.push(i.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&ce.push(Me);let Ze=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ze===!1&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]),Ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),be){let se=n.get(M[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,q,ae,0,0,q,ae,oe,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ie=0;Ie<M.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);let Ze=n.get(M[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Fe(C){return Math.min(s.maxSamples,C.samples)}function Se(C){let M=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Dt(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function nt(C,M){let q=C.colorSpace,ae=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===jl||q!==rn&&q!==Jn&&(xt.getTransfer(q)===Ut?a===!1?e.has("EXT_sRGB")===!0&&ae===Zn?(C.format=jl,C.minFilter=In,C.generateMipmaps=!1):M=qa.sRGBToLinear(M):(ae!==Zn||oe!==fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}this.allocateTextureUnit=P,this.resetTextureUnits=Z,this.setTexture2D=Y,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=ft,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Se}function I1(i,e,t){let n=t.isWebGL2;function s(r,o=Jn){let a,c=xt.getTransfer(o);if(r===fs)return i.UNSIGNED_BYTE;if(r===$d)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Qd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===hA)return i.BYTE;if(r===uA)return i.SHORT;if(r===Oh)return i.UNSIGNED_SHORT;if(r===Jd)return i.INT;if(r===cs)return i.UNSIGNED_INT;if(r===Yi)return i.FLOAT;if(r===Gs)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===fA)return i.ALPHA;if(r===Zn)return i.RGBA;if(r===dA)return i.LUMINANCE;if(r===pA)return i.LUMINANCE_ALPHA;if(r===zs)return i.DEPTH_COMPONENT;if(r===Nr)return i.DEPTH_STENCIL;if(r===jl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Fh)return i.RED;if(r===ep)return i.RED_INTEGER;if(r===mA)return i.RG;if(r===tp)return i.RG_INTEGER;if(r===np)return i.RGBA_INTEGER;if(r===al||r===cl||r===ll||r===hl)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===al)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===al)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ll)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hf||r===uf||r===ff||r===df)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ff)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===df)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ip)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===pf||r===mf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===pf)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===mf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Af||r===gf||r===xf||r===yf||r===_f||r===vf||r===Mf||r===bf||r===Ef||r===Sf||r===wf||r===Tf||r===Rf||r===Cf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Af)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_f)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ef)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ul||r===If||r===Pf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ul)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===If)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===AA||r===Lf||r===Df||r===Nf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ul)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Lf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Df)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function L1(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,hp(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,g,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,_)):d.isMeshMatcapMaterial?(r(p,d),A(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,y,g):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===On&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===On&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y=e.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let g=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*g,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,y,g){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=g*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===On&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function A(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){let y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D1(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,g){let _=g.program;n.uniformBlockBinding(y,_)}function l(y,g){let _=s[y.id];_===void 0&&(A(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",p));let w=g.program;n.updateUBOMapping(y,w);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){let g=u();y.__bindingPointIndex=g;let _=i.createBuffer(),w=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let g=s[y.id],_=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let E=0,I=_.length;E<I;E++){let U=Array.isArray(_[E])?_[E]:[_[E]];for(let v=0,R=U.length;v<R;v++){let B=U[v];if(m(B,E,v,w)===!0){let F=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value],P=0;for(let k=0;k<Z.length;k++){let Y=Z[k],Q=x(Y);typeof Y=="number"||typeof Y=="boolean"?(B.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,F+P,B.__data)):Y.isMatrix3?(B.__data[0]=Y.elements[0],B.__data[1]=Y.elements[1],B.__data[2]=Y.elements[2],B.__data[3]=0,B.__data[4]=Y.elements[3],B.__data[5]=Y.elements[4],B.__data[6]=Y.elements[5],B.__data[7]=0,B.__data[8]=Y.elements[6],B.__data[9]=Y.elements[7],B.__data[10]=Y.elements[8],B.__data[11]=0):(Y.toArray(B.__data,P),P+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,g,_,w){let E=y.value,I=g+"_"+_;if(w[I]===void 0)return typeof E=="number"||typeof E=="boolean"?w[I]=E:w[I]=E.clone(),!0;{let U=w[I];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return w[I]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function A(y){let g=y.uniforms,_=0,w=16;for(let I=0,U=g.length;I<U;I++){let v=Array.isArray(g[I])?g[I]:[g[I]];for(let R=0,B=v.length;R<B;R++){let F=v[R],Z=Array.isArray(F.value)?F.value:[F.value];for(let P=0,k=Z.length;P<k;P++){let Y=Z[P],Q=x(Y),J=_%w;J!==0&&w-J<Q.boundary&&(_+=w-J),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=Q.storage}}}let E=_%w;return E>0&&(_+=w-E),y.__size=_,y.__cache={},this}function x(y){let g={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function p(y){let g=y.target;g.removeEventListener("dispose",p);let _=o.indexOf(g.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}function Ia(i,e,t,n,s,r){Sr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(_o.x=r*Sr.x-s*Sr.y,_o.y=s*Sr.x+r*Sr.y):_o.copy(Sr),i.copy(e),i.x+=_o.x,i.y+=_o.y,i.applyMatrix4(gp)}function zd(i,e,t,n,s,r,o){let a=fh.distanceSqToPoint(i);if(a<t){let c=new T;fh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function Gh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,m*=h,s(o,a,f,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function Hd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function F1(i,e){let t=1-i;return t*t*e}function k1(i,e){return 2*(1-i)*i*e}function B1(i,e){return i*i*e}function Io(i,e,t,n){return F1(i,e)+k1(i,t)+B1(i,n)}function z1(i,e){let t=1-i;return t*t*t*e}function H1(i,e){let t=1-i;return 3*t*t*i*e}function G1(i,e){return 3*(1-i)*i*i*e}function V1(i,e){return i*i*i*e}function Po(i,e,t,n,s){return z1(i,e)+H1(i,t)+G1(i,n)+V1(i,s)}function Fa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function W1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function X1(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Vd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function xp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function q1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ji;case"vector":case"vector2":case"vector3":case"vector4":return Zi;case"color":return mc;case"quaternion":return Ri;case"bool":case"boolean":return ys;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Y1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=q1(i.type);if(i.times===void 0){let t=[],n=[];xp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function Yd(i,e){return i.distance-e.distance}function Ph(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Ph(s[r],e,t,!0)}}var Lh,Pm,sf,Lm,Kd,Dh,Xi,wi,On,Un,hs,Cr,ka,rf,of,Dm,Os,Nm,Um,af,cf,Om,Fm,km,Bm,Wl,Xl,zm,Hm,Gm,Vm,Wm,Xm,qm,Ym,Km,jm,Zm,Jm,Ba,$m,Qm,eA,tA,jd,nA,iA,us,sA,rA,oA,Nh,aA,cA,lf,lA,Zd,Lr,Dr,ql,Yl,Mc,di,dn,Lo,jt,za,So,In,Uh,ds,fs,hA,uA,Oh,Jd,cs,Yi,Gs,$d,Qd,Bs,fA,Zn,dA,pA,zs,Nr,Fh,ep,mA,tp,np,al,cl,ll,hl,hf,uf,ff,df,ip,pf,mf,Af,gf,xf,yf,_f,vf,Mf,bf,Ef,Sf,wf,Tf,Rf,Cf,ul,If,Pf,AA,Lf,Df,Nf,Ur,Vs,fl,Uf,Of,Ff,gA,sp,bc,Xo,rp,Hs,xA,yA,kh,_A,Jn,yt,rn,Bh,Ec,Ha,Ut,Ga,Va,or,kf,vA,MA,bA,op,EA,SA,wA,TA,Kl,Bf,jl,Ki,Wa,ps,bn,zf,wo,Or,ap,fe,ht,dl,Hf,Gf,Vf,oa,VA,xt,ar,qa,WA,Ya,XA,yn,Rt,Jl,pi,Ka,$l,Sn,T,Al,Wf,Pt,Bi,li,aa,cr,lr,hr,is,ss,Ps,mo,ca,la,Ls,qA,Ao,xl,Hn,zi,yl,ha,rs,_l,ua,vl,Ws,et,ur,hi,YA,KA,os,fa,Bn,Xf,qf,ja,No,jA,Yf,fr,Hi,da,go,ZA,JA,Kf,jf,Zf,$A,QA,Lt,ui,Gi,Ml,Vi,dr,pr,Jf,bl,El,Sl,pa,ks,lp,as,ma,Pe,En,eg,Pn,pn,$t,Aa,sn,Za,Ja,gt,tg,jn,Tl,mr,zn,xo,fn,Gt,$f,Ds,ga,Qf,Ar,gr,xr,Rl,xa,ya,_a,va,ed,td,nd,Ma,ba,Ct,$n,sg,rg,og,Gn,$a,Zt,yr,_r,Ql,Qa,eh,Cl,ag,cg,qi,Ns,Sa,Uo,Qt,hg,ug,fg,dg,pg,mg,Ag,gg,xg,yg,_g,vg,Mg,bg,Eg,Sg,wg,Tg,Rg,Cg,Ig,Pg,Lg,Dg,Ng,Ug,Og,Fg,kg,Bg,zg,Hg,Gg,Vg,Wg,Xg,qg,Yg,Kg,jg,Zg,Jg,$g,Qg,ex,tx,nx,ix,sx,rx,ox,ax,cx,lx,hx,ux,fx,dx,px,mx,Ax,gx,xx,yx,_x,vx,Mx,bx,Ex,Sx,wx,Tx,Rx,Cx,Ix,Px,Lx,Dx,Nx,Ux,Ox,Fx,kx,Bx,zx,Hx,Gx,Vx,Wx,Xx,qx,Yx,Kx,jx,Zx,Jx,$x,Qx,ey,ty,ny,iy,sy,ry,oy,ay,cy,ly,hy,uy,fy,dy,py,my,Ay,gy,xy,yy,_y,vy,My,by,Ey,Sy,wy,Ty,Ry,Cy,Iy,Py,Ly,Dy,Ny,Uy,Oy,Fy,ky,By,zy,Hy,Gy,rt,de,Ei,wa,ms,Tr,id,Fs,Il,sd,Pl,Ll,Dl,Us,vr,rd,ec,tc,fp,dp,pp,mp,Ap,ld,hd,ud,fd,dd,th,nh,ih,Nl,Pr,Y_,K_,i1,s1,o1,p1,rh,oh,v1,ah,ch,S1,w1,lh,at,P1,Co,hh,Oo,uh,kr,Br,Rn,Xs,zr,Mr,yo,br,Er,Sr,_o,gp,Ra,vo,Ca,Ed,Ul,Sd,Fo,wd,Td,Rd,N1,Cd,Pa,Ol,Id,Fl,nc,ko,Bo,Pd,U1,ic,qs,wr,Ld,La,Dd,O1,Mo,bo,Hr,As,Nd,Ud,Od,kl,Da,Gr,Fd,kd,Ys,sc,zo,Bd,fh,Na,Ua,rc,gs,Qn,Ho,dh,Oa,Bl,zl,Hl,ph,oc,mh,ac,Ah,cc,gh,lc,Gd,xh,yh,Go,Ks,Vr,st,Ti,hc,uc,fc,dc,Ot,_n,mi,ei,pc,xs,_h,vh,Mh,ti,ys,mc,ji,bh,Ri,_s,Zi,Ac,ls,Eh,K1,Ji,Wi,Sh,Vo,wh,gc,Wr,xc,Gl,Wd,Xd,Wo,Th,yc,qd,Eo,Vl,Rh,Ci,Ch,Xr,vs,_c,Vh,j1,Wh,Z1,J1,$1,Q1,ev,tv,nv,Ih,It,MM,vc,Vn=wt(()=>{Lh="160",Pm=0,sf=1,Lm=2,Kd=1,Dh=2,Xi=3,wi=0,On=1,Un=2,hs=0,Cr=1,ka=2,rf=3,of=4,Dm=5,Os=100,Nm=101,Um=102,af=103,cf=104,Om=200,Fm=201,km=202,Bm=203,Wl=204,Xl=205,zm=206,Hm=207,Gm=208,Vm=209,Wm=210,Xm=211,qm=212,Ym=213,Km=214,jm=0,Zm=1,Jm=2,Ba=3,$m=4,Qm=5,eA=6,tA=7,jd=0,nA=1,iA=2,us=0,sA=1,rA=2,oA=3,Nh=4,aA=5,cA=6,lf="attached",lA="detached",Zd=300,Lr=301,Dr=302,ql=303,Yl=304,Mc=306,di=1e3,dn=1001,Lo=1002,jt=1003,za=1004,So=1005,In=1006,Uh=1007,ds=1008,fs=1009,hA=1010,uA=1011,Oh=1012,Jd=1013,cs=1014,Yi=1015,Gs=1016,$d=1017,Qd=1018,Bs=1020,fA=1021,Zn=1023,dA=1024,pA=1025,zs=1026,Nr=1027,Fh=1028,ep=1029,mA=1030,tp=1031,np=1033,al=33776,cl=33777,ll=33778,hl=33779,hf=35840,uf=35841,ff=35842,df=35843,ip=36196,pf=37492,mf=37496,Af=37808,gf=37809,xf=37810,yf=37811,_f=37812,vf=37813,Mf=37814,bf=37815,Ef=37816,Sf=37817,wf=37818,Tf=37819,Rf=37820,Cf=37821,ul=36492,If=36494,Pf=36495,AA=36283,Lf=36284,Df=36285,Nf=36286,Ur=2300,Vs=2301,fl=2302,Uf=2400,Of=2401,Ff=2402,gA=2500,sp=0,bc=1,Xo=2,rp=3e3,Hs=3001,xA=3200,yA=3201,kh=0,_A=1,Jn="",yt="srgb",rn="srgb-linear",Bh="display-p3",Ec="display-p3-linear",Ha="linear",Ut="srgb",Ga="rec709",Va="p3",or=7680,kf=519,vA=512,MA=513,bA=514,op=515,EA=516,SA=517,wA=518,TA=519,Kl=35044,Bf="300 es",jl=1035,Ki=2e3,Wa=2001,ps=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zf=1234567,wo=Math.PI/180,Or=180/Math.PI;ap={DEG2RAD:wo,RAD2DEG:Or,generateUUID:fi,clamp:nn,euclideanModulo:zh,mapLinear:RA,inverseLerp:CA,lerp:To,damp:IA,pingpong:PA,smoothstep:LA,smootherstep:DA,randInt:NA,randFloat:UA,randFloatSpread:OA,seededRandom:FA,degToRad:kA,radToDeg:BA,isPowerOfTwo:Zl,ceilPowerOfTwo:zA,floorPowerOfTwo:Xa,setQuaternionFromProperEuler:HA,normalize:Tt,denormalize:Si},fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],A=n[8],x=s[0],p=s[3],d=s[6],y=s[1],g=s[4],_=s[7],w=s[2],E=s[5],I=s[8];return r[0]=o*x+a*y+c*w,r[3]=o*p+a*g+c*E,r[6]=o*d+a*_+c*I,r[1]=l*x+h*y+u*w,r[4]=l*p+h*g+u*E,r[7]=l*d+h*_+u*I,r[2]=f*x+m*y+A*w,r[5]=f*p+m*g+A*E,r[8]=f*d+m*_+A*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,m=l*r-o*c,A=t*u+n*f+s*m;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/A;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dl.makeScale(e,t)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dl=new ht;Hf={};Gf=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vf=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oa={[rn]:{transfer:Ha,primaries:Ga,toReference:i=>i,fromReference:i=>i},[yt]:{transfer:Ut,primaries:Ga,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ec]:{transfer:Ha,primaries:Va,toReference:i=>i.applyMatrix3(Vf),fromReference:i=>i.applyMatrix3(Gf)},[Bh]:{transfer:Ut,primaries:Va,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vf),fromReference:i=>i.applyMatrix3(Gf).convertLinearToSRGB()}},VA=new Set([rn,Ec]),xt={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!VA.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=oa[e].toReference,s=oa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return oa[i].primaries},getTransfer:function(i){return i===Jn?Ha:oa[i].transfer}};qa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=Do("canvas")),ar.width=e.width,ar.height=e.height;let n=ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Do("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ir(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ir(t[n]/255)*255):t[n]=Ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},WA=0,Ya=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WA++}),this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ml(s[o].image)):r.push(ml(s[o]))}else r=ml(s);n.url=r}return t||(e.images[this.uuid]=n),n}};XA=0,yn=class i extends ps{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=dn,s=dn,r=In,o=ds,a=Zn,c=fs,l=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XA++}),this.uuid=fi(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hs?yt:Jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?Hs:rp}set encoding(e){Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hs?yt:Jn}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Zd;yn.DEFAULT_ANISOTROPY=1;Rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],A=c[9],x=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(A-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(A+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(l+1)/2,_=(m+1)/2,w=(d+1)/2,E=(h+f)/4,I=(u+x)/4,U=(A+p)/4;return g>_&&g>w?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=E/n,r=I/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=U/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=I/r,s=U/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-A)*(p-A)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-A)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((l+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jl=class extends ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hs?yt:Jn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new yn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Jl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ka=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$l=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],m=r[o+1],A=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=A,e[t+3]=x;return}if(u!==x||c!==f||l!==m||h!==A){let p=1-a,d=c*f+l*m+h*A+u*x,y=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){let w=Math.sqrt(g),E=Math.atan2(w,d*y);p=Math.sin(p*E)/w,a=Math.sin(a*E)/w}let _=a*y;if(c=c*p+f*_,l=l*p+m*_,h=h*p+A*_,u=u*p+x*_,p===1-a){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],m=r[o+2],A=r[o+3];return e[t]=a*A+h*u+c*m-l*f,e[t+1]=c*A+h*f+l*u-a*m,e[t+2]=l*A+h*m+a*f-c*u,e[t+3]=h*A-a*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),m=c(s/2),A=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*m*A,this._y=l*m*u-f*h*A,this._z=l*h*A+f*m*u,this._w=l*h*u-f*m*A;break;case"YXZ":this._x=f*h*u+l*m*A,this._y=l*m*u-f*h*A,this._z=l*h*A-f*m*u,this._w=l*h*u+f*m*A;break;case"ZXY":this._x=f*h*u-l*m*A,this._y=l*m*u+f*h*A,this._z=l*h*A+f*m*u,this._w=l*h*u-f*m*A;break;case"ZYX":this._x=f*h*u-l*m*A,this._y=l*m*u+f*h*A,this._z=l*h*A-f*m*u,this._w=l*h*u+f*m*A;break;case"YZX":this._x=f*h*u+l*m*A,this._y=l*m*u+f*h*A,this._z=l*h*A-f*m*u,this._w=l*h*u-f*m*A;break;case"XZY":this._x=f*h*u-l*m*A,this._y=l*m*u-f*h*A,this._z=l*h*A+f*m*u,this._w=l*h*u+f*m*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Al=new T,Wf=new Sn,Pt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),ca.subVectors(this.max,mo),cr.subVectors(e.a,mo),lr.subVectors(e.b,mo),hr.subVectors(e.c,mo),is.subVectors(lr,cr),ss.subVectors(hr,lr),Ps.subVectors(cr,hr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ps.z,Ps.y,is.z,0,-is.x,ss.z,0,-ss.x,Ps.z,0,-Ps.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ps.y,Ps.x,0];return!gl(t,cr,lr,hr,ca)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,cr,lr,hr,ca))?!1:(la.crossVectors(is,ss),t=[la.x,la.y,la.z],gl(t,cr,lr,hr,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new T,new T,new T,new T,new T,new T,new T,new T],li=new T,aa=new Pt,cr=new T,lr=new T,hr=new T,is=new T,ss=new T,Ps=new T,mo=new T,ca=new T,la=new T,Ls=new T;qA=new Pt,Ao=new T,xl=new T,Hn=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qA.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);let t=Ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ao,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(xl)),this.expandByPoint(Ao.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new T,yl=new T,ha=new T,rs=new T,_l=new T,ua=new T,vl=new T,Ws=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yl.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(yl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ha),a=rs.dot(this.direction),c=-rs.dot(ha),l=rs.lengthSq(),h=Math.abs(1-o*o),u,f,m,A;if(h>0)if(u=o*c-a,f=o*a-c,A=r*h,u>=0)if(f>=-A)if(f<=A){let x=1/h;u*=x,f*=x,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-A?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=A?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yl).addScaledVector(ha,f),m}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){_l.subVectors(t,e),ua.subVectors(n,e),vl.crossVectors(_l,ua);let o=this.direction.dot(vl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);let c=a*this.direction.dot(ua.crossVectors(rs,ua));if(c<0)return null;let l=a*this.direction.dot(_l.cross(rs));if(l<0||c+l>o)return null;let h=-a*rs.dot(vl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,m,A,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,m,A,x,p)}set(e,t,n,s,r,o,a,c,l,h,u,f,m,A,x,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=A,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*u,A=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+A*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=A+m*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,m=c*u,A=l*h,x=l*u;t[0]=f+x*a,t[4]=A*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-A,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,m=c*u,A=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=A+m*a,t[1]=m+A*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,m=o*u,A=a*h,x=a*u;t[0]=c*h,t[4]=A*l-m,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=m*l-A,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,m=o*l,A=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=A*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+A,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,m=o*l,A=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=m*u-A,t[2]=A*u-m,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YA,e,KA)}lookAt(e,t,n){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),os.crossVectors(n,Bn),os.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),os.crossVectors(n,Bn)),os.normalize(),fa.crossVectors(Bn,os),s[0]=os.x,s[4]=fa.x,s[8]=Bn.x,s[1]=os.y,s[5]=fa.y,s[9]=Bn.y,s[2]=os.z,s[6]=fa.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],A=n[2],x=n[6],p=n[10],d=n[14],y=n[3],g=n[7],_=n[11],w=n[15],E=s[0],I=s[4],U=s[8],v=s[12],R=s[1],B=s[5],F=s[9],Z=s[13],P=s[2],k=s[6],Y=s[10],Q=s[14],J=s[3],$=s[7],ne=s[11],re=s[15];return r[0]=o*E+a*R+c*P+l*J,r[4]=o*I+a*B+c*k+l*$,r[8]=o*U+a*F+c*Y+l*ne,r[12]=o*v+a*Z+c*Q+l*re,r[1]=h*E+u*R+f*P+m*J,r[5]=h*I+u*B+f*k+m*$,r[9]=h*U+u*F+f*Y+m*ne,r[13]=h*v+u*Z+f*Q+m*re,r[2]=A*E+x*R+p*P+d*J,r[6]=A*I+x*B+p*k+d*$,r[10]=A*U+x*F+p*Y+d*ne,r[14]=A*v+x*Z+p*Q+d*re,r[3]=y*E+g*R+_*P+w*J,r[7]=y*I+g*B+_*k+w*$,r[11]=y*U+g*F+_*Y+w*ne,r[15]=y*v+g*Z+_*Q+w*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],A=e[3],x=e[7],p=e[11],d=e[15];return A*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*m-n*c*m)+x*(+t*c*m-t*l*f+r*o*f-s*o*m+s*l*h-r*c*h)+p*(+t*l*u-t*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],A=e[12],x=e[13],p=e[14],d=e[15],y=u*p*l-x*f*l+x*c*m-a*p*m-u*c*d+a*f*d,g=A*f*l-h*p*l-A*c*m+o*p*m+h*c*d-o*f*d,_=h*x*l-A*u*l+A*a*m-o*x*m-h*a*d+o*u*d,w=A*u*c-h*x*c-A*a*f+o*x*f+h*a*p-o*u*p,E=t*y+n*g+s*_+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=y*I,e[1]=(x*f*r-u*p*r-x*s*m+n*p*m+u*s*d-n*f*d)*I,e[2]=(a*p*r-x*c*r+x*s*l-n*p*l-a*s*d+n*c*d)*I,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*m-n*c*m)*I,e[4]=g*I,e[5]=(h*p*r-A*f*r+A*s*m-t*p*m-h*s*d+t*f*d)*I,e[6]=(A*c*r-o*p*r-A*s*l+t*p*l+o*s*d-t*c*d)*I,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*m+t*c*m)*I,e[8]=_*I,e[9]=(A*u*r-h*x*r-A*n*m+t*x*m+h*n*d-t*u*d)*I,e[10]=(o*x*r-A*a*r+A*n*l-t*x*l-o*n*d+t*a*d)*I,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*m-t*a*m)*I,e[12]=w*I,e[13]=(h*x*s-A*u*s+A*n*f-t*x*f-h*n*p+t*u*p)*I,e[14]=(A*a*s-o*x*s-A*n*c+t*x*c+o*n*p-t*a*p)*I,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,m=r*h,A=r*u,x=o*h,p=o*u,d=a*u,y=c*l,g=c*h,_=c*u,w=n.x,E=n.y,I=n.z;return s[0]=(1-(x+d))*w,s[1]=(m+_)*w,s[2]=(A-g)*w,s[3]=0,s[4]=(m-_)*E,s[5]=(1-(f+d))*E,s[6]=(p+y)*E,s[7]=0,s[8]=(A+g)*I,s[9]=(p-y)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),a=ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hi.copy(this);let l=1/r,h=1/o,u=1/a;return hi.elements[0]*=l,hi.elements[1]*=l,hi.elements[2]*=l,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,t.setFromRotationMatrix(hi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ki){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),m,A;if(a===Ki)m=-(o+r)/(o-r),A=-2*o*r/(o-r);else if(a===Wa)m=-o/(o-r),A=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ki){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,m=(n+s)*h,A,x;if(a===Ki)A=(o+r)*u,x=-2*u;else if(a===Wa)A=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ur=new T,hi=new et,YA=new T(0,0,0),KA=new T(1,1,1),os=new T,fa=new T,Bn=new T,Xf=new et,qf=new Sn,ja=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qf.setFromEuler(this),this.setFromQuaternion(qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ja.DEFAULT_ORDER="XYZ";No=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jA=0,Yf=new T,fr=new Sn,Hi=new et,da=new T,go=new T,ZA=new T,JA=new Sn,Kf=new T(1,0,0),jf=new T(0,1,0),Zf=new T(0,0,1),$A={type:"added"},QA={type:"removed"},Lt=class i extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jA++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new ja,n=new Sn,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new ht}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(Kf,e)}rotateY(e){return this.rotateOnAxis(jf,e)}rotateZ(e){return this.rotateOnAxis(Zf,e)}translateOnAxis(e,t){return Yf.copy(e).applyQuaternion(this.quaternion),this.position.add(Yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kf,e)}translateY(e){return this.translateOnAxis(jf,e)}translateZ(e){return this.translateOnAxis(Zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?da.copy(e):da.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(go,da,this.up):Hi.lookAt(da,go,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),fr.setFromRotationMatrix(Hi),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($A)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QA)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,ZA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,JA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),A=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),A.length>0&&(n.nodes=A)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new T(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ui=new T,Gi=new T,Ml=new T,Vi=new T,dr=new T,pr=new T,Jf=new T,bl=new T,El=new T,Sl=new T,pa=!1,ks=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ui.subVectors(e,t),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ui.subVectors(s,t),Gi.subVectors(n,t),Ml.subVectors(e,t);let o=ui.dot(ui),a=ui.dot(Gi),c=ui.dot(Ml),l=Gi.dot(Gi),h=Gi.dot(Ml),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(l*c-a*h)*f,A=(o*h-a*c)*f;return r.set(1-m-A,A,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getUV(e,t,n,s,r,o,a,c){return pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pa=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(o,Vi.y),c.addScaledVector(a,Vi.z),c)}static isFrontFacing(e,t,n,s){return ui.subVectors(n,t),Gi.subVectors(e,t),ui.cross(Gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ui.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pa=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;dr.subVectors(s,n),pr.subVectors(r,n),bl.subVectors(e,n);let c=dr.dot(bl),l=pr.dot(bl);if(c<=0&&l<=0)return t.copy(n);El.subVectors(e,s);let h=dr.dot(El),u=pr.dot(El);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(dr,o);Sl.subVectors(e,r);let m=dr.dot(Sl),A=pr.dot(Sl);if(A>=0&&m<=A)return t.copy(r);let x=m*l-c*A;if(x<=0&&l>=0&&A<=0)return a=l/(l-A),t.copy(n).addScaledVector(pr,a);let p=h*A-m*u;if(p<=0&&u-h>=0&&m-A>=0)return Jf.subVectors(r,s),a=(u-h)/(u-h+(m-A)),t.copy(s).addScaledVector(Jf,a);let d=1/(p+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(dr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},ma={h:0,s:0,l:0};Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=zh(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wl(o,r,e+1/3),this.g=wl(o,r,e),this.b=wl(o,r,e-1/3)}return xt.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=pl(e.r),this.g=pl(e.g),this.b=pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return xt.fromWorkingColorSpace(En.copy(this),e),Math.round(nn(En.r*255,0,255))*65536+Math.round(nn(En.g*255,0,255))*256+Math.round(nn(En.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(En.copy(this),t);let n=En.r,s=En.g,r=En.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=yt){xt.fromWorkingColorSpace(En.copy(this),e);let t=En.r,n=En.g,s=En.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(ma);let n=To(as.h,ma.h,t),s=To(as.s,ma.s,t),r=To(as.l,ma.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new Pe;Pe.NAMES=lp;eg=0,Pn=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Cr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Xl&&(n.blendDst=this.blendDst),this.blendEquation!==Os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pn=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$t=new T,Aa=new fe,sn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}},Za=class extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ja=class extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},gt=class extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},tg=0,jn=new et,Tl=new Lt,mr=new T,zn=new Pt,xo=new Pt,fn=new T,Gt=class i extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cp(e)?Ja:Za)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(zn.min,xo.min),zn.expandByPoint(fn),fn.addVectors(zn.max,xo.max),zn.expandByPoint(fn)):(zn.expandByPoint(xo.min),zn.expandByPoint(xo.max))}zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fn.fromBufferAttribute(a,l),c&&(mr.fromBufferAttribute(e,l),fn.add(mr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<a;R++)l[R]=new T,h[R]=new T;let u=new T,f=new T,m=new T,A=new fe,x=new fe,p=new fe,d=new T,y=new T;function g(R,B,F){u.fromArray(s,R*3),f.fromArray(s,B*3),m.fromArray(s,F*3),A.fromArray(o,R*2),x.fromArray(o,B*2),p.fromArray(o,F*2),f.sub(u),m.sub(u),x.sub(A),p.sub(A);let Z=1/(x.x*p.y-p.x*x.y);isFinite(Z)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(Z),y.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(Z),l[R].add(d),l[B].add(d),l[F].add(d),h[R].add(y),h[B].add(y),h[F].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let R=0,B=_.length;R<B;++R){let F=_[R],Z=F.start,P=F.count;for(let k=Z,Y=Z+P;k<Y;k+=3)g(n[k+0],n[k+1],n[k+2])}let w=new T,E=new T,I=new T,U=new T;function v(R){I.fromArray(r,R*3),U.copy(I);let B=l[R];w.copy(B),w.sub(I.multiplyScalar(I.dot(B))).normalize(),E.crossVectors(U,B);let Z=E.dot(h[R])<0?-1:1;c[R*4]=w.x,c[R*4+1]=w.y,c[R*4+2]=w.z,c[R*4+3]=Z}for(let R=0,B=_.length;R<B;++R){let F=_[R],Z=F.start,P=F.count;for(let k=Z,Y=Z+P;k<Y;k+=3)v(n[k+0]),v(n[k+1]),v(n[k+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(e)for(let f=0,m=e.count;f<m;f+=3){let A=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,A),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,A),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(A,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),m=0,A=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*h;for(let d=0;d<h;d++)f[A++]=l[m++]}return new sn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$f=new et,Ds=new Ws,ga=new Hn,Qf=new T,Ar=new T,gr=new T,xr=new T,Rl=new T,xa=new T,ya=new fe,_a=new fe,va=new fe,ed=new T,td=new T,nd=new T,Ma=new T,ba=new T,Ct=class extends Lt{constructor(e=new Gt,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){xa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Rl.fromBufferAttribute(u,e),o?xa.addScaledVector(Rl,h):xa.addScaledVector(Rl.sub(t),h))}t.add(xa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(ga.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(ga,Qf)===null||Ds.origin.distanceToSquared(Qf)>(e.far-e.near)**2))&&($f.copy(r).invert(),Ds.copy(e.ray).applyMatrix4($f),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let A=0,x=f.length;A<x;A++){let p=f[A],d=o[p.materialIndex],y=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=y,w=g;_<w;_+=3){let E=a.getX(_),I=a.getX(_+1),U=a.getX(_+2);s=Ea(this,d,e,n,l,h,u,E,I,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let A=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=A,d=x;p<d;p+=3){let y=a.getX(p),g=a.getX(p+1),_=a.getX(p+2);s=Ea(this,o,e,n,l,h,u,y,g,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let A=0,x=f.length;A<x;A++){let p=f[A],d=o[p.materialIndex],y=Math.max(p.start,m.start),g=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let _=y,w=g;_<w;_+=3){let E=_,I=_+1,U=_+2;s=Ea(this,d,e,n,l,h,u,E,I,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let A=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=A,d=x;p<d;p+=3){let y=p,g=p+1,_=p+2;s=Ea(this,o,e,n,l,h,u,y,g,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};$n=class i extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,m=0;A("z","y","x",-1,-1,n,t,e,o,r,0),A("z","y","x",1,-1,n,t,-e,o,r,1),A("x","z","y",1,1,e,n,t,s,o,2),A("x","z","y",1,-1,e,n,-t,s,o,3),A("x","y","z",1,-1,e,t,n,s,r,4),A("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function A(x,p,d,y,g,_,w,E,I,U,v){let R=_/I,B=w/U,F=_/2,Z=w/2,P=E/2,k=I+1,Y=U+1,Q=0,J=0,$=new T;for(let ne=0;ne<Y;ne++){let re=ne*B-Z;for(let _e=0;_e<k;_e++){let K=_e*R-F;$[x]=K*y,$[p]=re*g,$[d]=P,l.push($.x,$.y,$.z),$[x]=0,$[p]=0,$[d]=E>0?1:-1,h.push($.x,$.y,$.z),u.push(_e/I),u.push(1-ne/U),Q+=1}}for(let ne=0;ne<U;ne++)for(let re=0;re<I;re++){let _e=f+re+k*ne,K=f+re+k*(ne+1),ie=f+(re+1)+k*(ne+1),xe=f+(re+1)+k*ne;c.push(_e,K,xe),c.push(K,ie,xe),J+=6}a.addGroup(m,J,v),m+=J,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};sg={clone:Fr,merge:Cn},rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$a=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zt=class extends $a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yr=-90,_r=1,Ql=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(yr,_r,e,t);s.layers=this.layers,this.add(s);let r=new Zt(yr,_r,e,t);r.layers=this.layers,this.add(r);let o=new Zt(yr,_r,e,t);o.layers=this.layers,this.add(o);let a=new Zt(yr,_r,e,t);a.layers=this.layers,this.add(a);let c=new Zt(yr,_r,e,t);c.layers=this.layers,this.add(c);let l=new Zt(yr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}},Qa=class extends yn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},eh=class extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hs?yt:Jn),this.texture=new Qa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:hs});r.uniforms.tEquirect.value=t;let o=new Ct(s,r),a=t.minFilter;return t.minFilter===ds&&(t.minFilter=In),new Ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Cl=new T,ag=new T,cg=new ht,qi=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Cl.subVectors(n,t).cross(ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Cl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cg.getNormalMatrix(e),s=this.coplanarPoint(Cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ns=new Hn,Sa=new T,Uo=class{constructor(e=new qi,t=new qi,n=new qi,s=new qi,r=new qi,o=new qi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ki){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],m=s[8],A=s[9],x=s[10],p=s[11],d=s[12],y=s[13],g=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,p-m,_-d).normalize(),n[1].setComponents(c+r,f+l,p+m,_+d).normalize(),n[2].setComponents(c+o,f+h,p+A,_+y).normalize(),n[3].setComponents(c-o,f-h,p-A,_-y).normalize(),n[4].setComponents(c-a,f-u,p-x,_-g).normalize(),t===Ki)n[5].setComponents(c+a,f+u,p+x,_+g).normalize();else if(t===Wa)n[5].setComponents(a,u,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Qt=class i extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,m=[],A=[],x=[],p=[];for(let d=0;d<h;d++){let y=d*f-o;for(let g=0;g<l;g++){let _=g*u-r;A.push(_,-y,0),x.push(0,0,1),p.push(g/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){let g=y+l*d,_=y+l*(d+1),w=y+1+l*(d+1),E=y+1+l*d;m.push(g,_,E),m.push(_,w,E)}this.setIndex(m),this.setAttribute("position",new gt(A,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
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
#endif`,fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
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
#endif`,gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xg=`#ifdef USE_BATCHING
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
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bg=`#ifdef USE_IRIDESCENCE
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
#endif`,Eg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dg=`#define PI 3.141592653589793
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
} // validated`,Ng=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ug=`vec3 transformedNormal = objectNormal;
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
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hg=`
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
}`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
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
}`,$g=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
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
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
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
#endif`,lx=`struct PhysicalMaterial {
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
}`,hx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_x=`#if defined( USE_POINTS_UV )
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
#endif`,vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ex=`#ifdef USE_MORPHNORMALS
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
#endif`,Sx=`#ifdef USE_MORPHTARGETS
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
#endif`,wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
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
#endif`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hy=`uniform sampler2D t2D;
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
}`,gy=`#define DISTANCE
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
}`,xy=`#define DISTANCE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`uniform float scale;
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
}`,My=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Sy=`#define LAMBERT
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
}`,wy=`#define LAMBERT
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
}`,Ty=`#define MATCAP
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
}`,Ry=`#define MATCAP
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
}`,Cy=`#define NORMAL
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
}`,Iy=`#define NORMAL
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
}`,Py=`#define PHONG
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
}`,Ly=`#define PHONG
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
}`,Dy=`#define STANDARD
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
}`,Ny=`#define STANDARD
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
}`,Uy=`#define TOON
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
}`,Oy=`#define TOON
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
}`,Fy=`uniform float size;
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
}`,ky=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,zy=`uniform vec3 color;
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
}`,Hy=`uniform float rotation;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:hg,alphahash_pars_fragment:ug,alphamap_fragment:fg,alphamap_pars_fragment:dg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:Ag,aomap_pars_fragment:gg,batching_pars_vertex:xg,batching_vertex:yg,begin_vertex:_g,beginnormal_vertex:vg,bsdfs:Mg,iridescence_fragment:bg,bumpmap_pars_fragment:Eg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:wg,clipping_planes_pars_vertex:Tg,clipping_planes_vertex:Rg,color_fragment:Cg,color_pars_fragment:Ig,color_pars_vertex:Pg,color_vertex:Lg,common:Dg,cube_uv_reflection_fragment:Ng,defaultnormal_vertex:Ug,displacementmap_pars_vertex:Og,displacementmap_vertex:Fg,emissivemap_fragment:kg,emissivemap_pars_fragment:Bg,colorspace_fragment:zg,colorspace_pars_fragment:Hg,envmap_fragment:Gg,envmap_common_pars_fragment:Vg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:ix,envmap_vertex:qg,fog_vertex:Yg,fog_pars_vertex:Kg,fog_fragment:jg,fog_pars_fragment:Zg,gradientmap_pars_fragment:Jg,lightmap_fragment:$g,lightmap_pars_fragment:Qg,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:nx,lights_toon_fragment:sx,lights_toon_pars_fragment:rx,lights_phong_fragment:ox,lights_phong_pars_fragment:ax,lights_physical_fragment:cx,lights_physical_pars_fragment:lx,lights_fragment_begin:hx,lights_fragment_maps:ux,lights_fragment_end:fx,logdepthbuf_fragment:dx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:Ax,map_fragment:gx,map_pars_fragment:xx,map_particle_fragment:yx,map_particle_pars_fragment:_x,metalnessmap_fragment:vx,metalnessmap_pars_fragment:Mx,morphcolor_vertex:bx,morphnormal_vertex:Ex,morphtarget_pars_vertex:Sx,morphtarget_vertex:wx,normal_fragment_begin:Tx,normal_fragment_maps:Rx,normal_pars_fragment:Cx,normal_pars_vertex:Ix,normal_vertex:Px,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Nx,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:Ox,opaque_fragment:Fx,packing:kx,premultiplied_alpha_fragment:Bx,project_vertex:zx,dithering_fragment:Hx,dithering_pars_fragment:Gx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:qx,shadowmap_vertex:Yx,shadowmask_pars_fragment:Kx,skinbase_vertex:jx,skinning_pars_vertex:Zx,skinning_vertex:Jx,skinnormal_vertex:$x,specularmap_fragment:Qx,specularmap_pars_fragment:ey,tonemapping_fragment:ty,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:sy,uv_pars_fragment:ry,uv_pars_vertex:oy,uv_vertex:ay,worldpos_vertex:cy,background_vert:ly,background_frag:hy,backgroundCube_vert:uy,backgroundCube_frag:fy,cube_vert:dy,cube_frag:py,depth_vert:my,depth_frag:Ay,distanceRGBA_vert:gy,distanceRGBA_frag:xy,equirect_vert:yy,equirect_frag:_y,linedashed_vert:vy,linedashed_frag:My,meshbasic_vert:by,meshbasic_frag:Ey,meshlambert_vert:Sy,meshlambert_frag:wy,meshmatcap_vert:Ty,meshmatcap_frag:Ry,meshnormal_vert:Cy,meshnormal_frag:Iy,meshphong_vert:Py,meshphong_frag:Ly,meshphysical_vert:Dy,meshphysical_frag:Ny,meshtoon_vert:Uy,meshtoon_frag:Oy,points_vert:Fy,points_frag:ky,shadow_vert:By,shadow_frag:zy,sprite_vert:Hy,sprite_frag:Gy},de={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ei={basic:{uniforms:Cn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Cn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Pe(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Cn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Cn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Cn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Pe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Cn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Cn([de.points,de.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Cn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Cn([de.common,de.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Cn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Cn([de.sprite,de.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Cn([de.common,de.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Cn([de.lights,de.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ei.physical={uniforms:Cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};wa={r:0,b:0,g:0};ms=class extends $a{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tr=4,id=[.125,.215,.35,.446,.526,.582],Fs=20,Il=new ms,sd=new Pe,Pl=null,Ll=0,Dl=0,Us=(1+Math.sqrt(5))/2,vr=1/Us,rd=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Us,vr),new T(0,Us,-vr),new T(vr,0,Us),new T(-vr,0,Us),new T(Us,vr,0),new T(-Us,vr,0)],ec=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Ll,Dl),e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Gs,format:Zn,colorSpace:rn,depthBuffer:!1},s=od(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jy(r)),this._blurMaterial=Zy(r,e,t)}return s}_compileMaterial(e){let t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Il)}_sceneToCubeUV(e,t,n,s){let a=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sd),h.toneMapping=us,h.autoClear=!1;let m=new pn({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),A=new Ct(new $n,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(sd),x=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):y===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let g=this._cubeSize;Ta(s,y*g,d>2?g:0,g,g),h.setRenderTarget(s),x&&h.render(A,a),h.render(e,a)}A.geometry.dispose(),A.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Lr||e.mapping===Dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ta(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Il)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rd[(s-1)%rd.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ct(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,A=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fs-1),x=r/A,p=isFinite(r)?1+Math.floor(h*x):Fs;p>Fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fs}`);let d=[],y=0;for(let I=0;I<Fs;++I){let U=I/x,v=Math.exp(-U*U/2);d.push(v),I===0?y+=v:I<p&&(y+=2*v)}for(let I=0;I<d.length;I++)d[I]=d[I]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:g}=this;f.dTheta.value=A,f.mipInt.value=g-n;let _=this._sizeLods[s],w=3*_*(s>g-Tr?s-g+Tr:0),E=4*(this._cubeSize-_);Ta(t,w,E,3*_,2*_),c.setRenderTarget(t),c.render(u,Il)}};tc=class extends yn{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:zs,h!==zs&&h!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=cs),n===void 0&&h===Nr&&(n=Bs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fp=new yn,dp=new tc(1,1);dp.compareFunction=op;pp=new Ka,mp=new $l,Ap=new Qa,ld=[],hd=[],ud=new Float32Array(16),fd=new Float32Array(9),dd=new Float32Array(4);th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=S_(t.type)}},nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X_(t.type)}},ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Nl=/(\w+)(\])?(\[|\.)?/g;Pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);q_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};Y_=37297,K_=0;i1=/^[ \t]*#include +<([\w\d./]+)>/gm;s1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);o1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;p1=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new oh(e),t.set(e,n)),n}},oh=class{constructor(e){this.id=p1++,this.code=e,this.usedTimes=0}};v1=0;ah=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ch=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w1=`uniform sampler2D shadow_pass;
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
}`;lh=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},at=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},P1={type:"move"},Co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),d=this._getHandJoint(l,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,A=.005;l.inputState.pinching&&f>m+A?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-A&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hh=class extends ps{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,A=null,x=t.getContextAttributes(),p=null,d=null,y=[],g=[],_=new fe,w=null,E=new Zt;E.layers.enable(1),E.viewport=new Rt;let I=new Zt;I.layers.enable(2),I.viewport=new Rt;let U=[E,I],v=new lh;v.layers.enable(1),v.layers.enable(2);let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=y[K];return ie===void 0&&(ie=new Co,y[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=y[K];return ie===void 0&&(ie=new Co,y[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=y[K];return ie===void 0&&(ie=new Co,y[K]=ie),ie.getHandSpace()};function F(K){let ie=g.indexOf(K.inputSource);if(ie===-1)return;let xe=y[ie];xe!==void 0&&(xe.update(K.inputSource,K.frame,l||o),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function Z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",P);for(let K=0;K<y.length;K++){let ie=g[K];ie!==null&&(g[K]=null,y[K].disconnect(ie))}R=null,B=null,e.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ie={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new pi(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:fs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ie=null,xe=null,Re=null;x.depth&&(Re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=x.stencil?Nr:zs,xe=x.stencil?Bs:cs);let Ce={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new pi(f.textureWidth,f.textureHeight,{format:Zn,type:fs,depthTexture:new tc(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Xe=e.properties.get(d);Xe.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(K){for(let ie=0;ie<K.removed.length;ie++){let xe=K.removed[ie],Re=g.indexOf(xe);Re>=0&&(g[Re]=null,y[Re].disconnect(xe))}for(let ie=0;ie<K.added.length;ie++){let xe=K.added[ie],Re=g.indexOf(xe);if(Re===-1){for(let Xe=0;Xe<y.length;Xe++)if(Xe>=g.length){g.push(xe),Re=Xe;break}else if(g[Xe]===null){g[Xe]=xe,Re=Xe;break}if(Re===-1)break}let Ce=y[Re];Ce&&Ce.connect(xe)}}let k=new T,Y=new T;function Q(K,ie,xe){k.setFromMatrixPosition(ie.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);let Re=k.distanceTo(Y),Ce=ie.projectionMatrix.elements,Xe=xe.projectionMatrix.elements,Ve=Ce[14]/(Ce[10]-1),Be=Ce[14]/(Ce[10]+1),ft=(Ce[9]+1)/Ce[5],W=(Ce[9]-1)/Ce[5],Jt=(Ce[8]-1)/Ce[0],Ne=(Xe[8]+1)/Xe[0],Fe=Ve*Jt,Se=Ve*Ne,Dt=Re/(-Jt+Ne),nt=Dt*-Jt;ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(Dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let C=Ve+Dt,M=Be+Dt,q=Fe-nt,ae=Se+(Re-nt),oe=ft*Be/M*C,ce=W*Be/M*C;K.projectionMatrix.makePerspective(q,ae,oe,ce,C,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function J(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;v.near=I.near=E.near=K.near,v.far=I.far=E.far=K.far,(R!==v.near||B!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,B=v.far);let ie=K.parent,xe=v.cameras;J(v,ie);for(let Re=0;Re<xe.length;Re++)J(xe[Re],ie);xe.length===2?Q(v,E,I):v.projectionMatrix.copy(E.projectionMatrix),$(K,v,ie)};function $(K,ie,xe){xe===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Or*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)};let ne=null;function re(K,ie){if(h=ie.getViewerPose(l||o),A=ie,h!==null){let xe=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let Re=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,Re=!0);for(let Ce=0;Ce<xe.length;Ce++){let Xe=xe[Ce],Ve=null;if(m!==null)Ve=m.getViewport(Xe);else{let ft=u.getViewSubImage(f,Xe);Ve=ft.viewport,Ce===0&&(e.setRenderTargetTextures(d,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(d))}let Be=U[Ce];Be===void 0&&(Be=new Zt,Be.layers.enable(Ce),Be.viewport=new Rt,U[Ce]=Be),Be.matrix.fromArray(Xe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Xe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ce===0&&(v.matrix.copy(Be.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Re===!0&&v.cameras.push(Be)}}for(let xe=0;xe<y.length;xe++){let Re=g[xe],Ce=y[xe];Re!==null&&Ce!==void 0&&Ce.update(Re,ie,l||o)}ne&&ne(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),A=null}let _e=new up;_e.setAnimationLoop(re),this.setAnimationLoop=function(K){ne=K},this.dispose=function(){}}};Oo=class{constructor(e={}){let{canvas:t=GA(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),A=new Int32Array(4),x=null,p=null,d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=us,this.toneMappingExposure=1;let g=this,_=!1,w=0,E=0,I=null,U=-1,v=null,R=new Rt,B=new Rt,F=null,Z=new Pe(0),P=0,k=t.width,Y=t.height,Q=1,J=null,$=null,ne=new Rt(0,0,k,Y),re=new Rt(0,0,k,Y),_e=!1,K=new Uo,ie=!1,xe=!1,Re=null,Ce=new et,Xe=new fe,Ve=new T,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return I===null?Q:1}let W=n;function Jt(b,O){for(let H=0;H<b.length;H++){let V=b[H],G=t.getContext(V,O);if(G!==null)return G}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lh}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ge,!1),W===null){let O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),W=Jt(O,b),W===null)throw Jt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ne,Fe,Se,Dt,nt,C,M,q,ae,oe,ce,Me,ye,be,Ie,Ze,se,mt,Je,ze,Le,ve,qe,At;function Nt(){Ne=new $y(W),Fe=new qy(W,Ne,e),Ne.init(Fe),ve=new I1(W,Ne,Fe),Se=new R1(W,Ne,Fe),Dt=new t_(W),nt=new A1,C=new C1(W,Ne,Se,nt,Fe,ve,Dt),M=new Ky(g),q=new Jy(g),ae=new lg(W,Fe),qe=new Wy(W,Ne,ae,Fe),oe=new Qy(W,ae,Dt,qe),ce=new r_(W,oe,ae,Dt),Je=new s_(W,Fe,C),Ze=new Yy(nt),Me=new m1(g,M,q,Ne,Fe,qe,Ze),ye=new L1(g,nt),be=new x1,Ie=new E1(Ne,Fe),mt=new Vy(g,M,q,Se,ce,f,c),se=new T1(g,ce,Fe),At=new D1(W,Dt,Fe,Se),ze=new Xy(W,Ne,Dt,Fe),Le=new e_(W,Ne,Dt,Fe),Dt.programs=Me.programs,g.capabilities=Fe,g.extensions=Ne,g.properties=nt,g.renderLists=be,g.shadowMap=se,g.state=Se,g.info=Dt}Nt();let $e=new hh(g,W);this.xr=$e,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let b=Ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(k,Y,!1))},this.getSize=function(b){return b.set(k,Y)},this.setSize=function(b,O,H=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,Y=O,t.width=Math.floor(b*Q),t.height=Math.floor(O*Q),H===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(k*Q,Y*Q).floor()},this.setDrawingBufferSize=function(b,O,H){k=b,Y=O,Q=H,t.width=Math.floor(b*H),t.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(ne)},this.setViewport=function(b,O,H,V){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,O,H,V),Se.viewport(R.copy(ne).multiplyScalar(Q).floor())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,O,H,V){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,O,H,V),Se.scissor(B.copy(re).multiplyScalar(Q).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(b){Se.setScissorTest(_e=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(b=!0,O=!0,H=!0){let V=0;if(b){let G=!1;if(I!==null){let me=I.texture.format;G=me===np||me===tp||me===ep}if(G){let me=I.texture.type,we=me===fs||me===cs||me===Oh||me===Bs||me===$d||me===Qd,Ue=mt.getClearColor(),Ye=mt.getClearAlpha(),ot=Ue.r,Qe=Ue.g,it=Ue.b;we?(m[0]=ot,m[1]=Qe,m[2]=it,m[3]=Ye,W.clearBufferuiv(W.COLOR,0,m)):(A[0]=ot,A[1]=Qe,A[2]=it,A[3]=Ye,W.clearBufferiv(W.COLOR,0,A))}else V|=W.COLOR_BUFFER_BIT}O&&(V|=W.DEPTH_BUFFER_BIT),H&&(V|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),be.dispose(),Ie.dispose(),nt.dispose(),M.dispose(),q.dispose(),ce.dispose(),qe.dispose(),At.dispose(),Me.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",N),$e.removeEventListener("sessionend",D),Re&&(Re.dispose(),Re=null),X.stop()};function ue(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let b=Dt.autoReset,O=se.enabled,H=se.autoUpdate,V=se.needsUpdate,G=se.type;Nt(),Dt.autoReset=b,se.enabled=O,se.autoUpdate=H,se.needsUpdate=V,se.type=G}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ae(b){let O=b.target;O.removeEventListener("dispose",Ae),He(O)}function He(b){ke(b),nt.remove(b)}function ke(b){let O=nt.get(b).programs;O!==void 0&&(O.forEach(function(H){Me.releaseProgram(H)}),b.isShaderMaterial&&Me.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,V,G,me){O===null&&(O=Be);let we=G.isMesh&&G.matrixWorld.determinant()<0,Ue=ct(b,O,H,V,G);Se.setMaterial(V,we);let Ye=H.index,ot=1;if(V.wireframe===!0){if(Ye=oe.getWireframeAttribute(H),Ye===void 0)return;ot=2}let Qe=H.drawRange,it=H.attributes.position,Kt=Qe.start*ot,kn=(Qe.start+Qe.count)*ot;me!==null&&(Kt=Math.max(Kt,me.start*ot),kn=Math.min(kn,(me.start+me.count)*ot)),Ye!==null?(Kt=Math.max(Kt,0),kn=Math.min(kn,Ye.count)):it!=null&&(Kt=Math.max(Kt,0),kn=Math.min(kn,it.count));let un=kn-Kt;if(un<0||un===1/0)return;qe.setup(G,V,Ue,H,Ye);let ki,Ht=ze;if(Ye!==null&&(ki=ae.get(Ye),Ht=Le,Ht.setIndex(ki)),G.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*ft()),Ht.setMode(W.LINES)):Ht.setMode(W.TRIANGLES);else if(G.isLine){let lt=V.linewidth;lt===void 0&&(lt=1),Se.setLineWidth(lt*ft()),G.isLineSegments?Ht.setMode(W.LINES):G.isLineLoop?Ht.setMode(W.LINE_LOOP):Ht.setMode(W.LINE_STRIP)}else G.isPoints?Ht.setMode(W.POINTS):G.isSprite&&Ht.setMode(W.TRIANGLES);if(G.isBatchedMesh)Ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Ht.renderInstances(Kt,un,G.count);else if(H.isInstancedBufferGeometry){let lt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,il=Math.min(H.instanceCount,lt);Ht.renderInstances(Kt,un,il)}else Ht.render(Kt,un)};function St(b,O,H){b.transparent===!0&&b.side===Un&&b.forceSinglePass===!1?(b.side=On,b.needsUpdate=!0,he(b,O,H),b.side=wi,b.needsUpdate=!0,he(b,O,H),b.side=Un):he(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),p=Ie.get(H),p.init(),y.push(p),H.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),b!==H&&b.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(g._useLegacyLights);let V=new Set;return b.traverse(function(G){let me=G.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){let Ue=me[we];St(Ue,H,G),V.add(Ue)}else St(me,H,G),V.add(me)}),y.pop(),p=null,V},this.compileAsync=function(b,O,H=null){let V=this.compile(b,O,H);return new Promise(G=>{function me(){if(V.forEach(function(we){nt.get(we).currentProgram.isReady()&&V.delete(we)}),V.size===0){G(b);return}setTimeout(me,10)}Ne.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Mt=null;function S(b){Mt&&Mt(b)}function N(){X.stop()}function D(){X.start()}let X=new up;X.setAnimationLoop(S),typeof self<"u"&&X.setContext(self),this.setAnimationLoop=function(b){Mt=b,$e.setAnimationLoop(b),b===null?X.stop():X.start()},$e.addEventListener("sessionstart",N),$e.addEventListener("sessionend",D),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(O),O=$e.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,O,I),p=Ie.get(b,y.length),p.init(),y.push(p),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(Ce),xe=this.localClippingEnabled,ie=Ze.init(this.clippingPlanes,xe),x=be.get(b,d.length),x.init(),d.push(x),z(b,O,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(J,$),this.info.render.frame++,ie===!0&&Ze.beginShadows();let H=p.state.shadowsArray;if(se.render(H,b,O),ie===!0&&Ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),mt.render(x,b),p.setupLights(g._useLegacyLights),O.isArrayCamera){let V=O.cameras;for(let G=0,me=V.length;G<me;G++){let we=V[G];te(x,b,we,we.viewport)}}else te(x,b,O);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(g,b,O),qe.resetDefaultState(),U=-1,v=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function z(b,O,H,V){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){V&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ce);let we=ce.update(b),Ue=b.material;Ue.visible&&x.push(b,we,Ue,H,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){let we=ce.update(b),Ue=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ve.copy(we.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ue)){let Ye=we.groups;for(let ot=0,Qe=Ye.length;ot<Qe;ot++){let it=Ye[ot],Kt=Ue[it.materialIndex];Kt&&Kt.visible&&x.push(b,we,Kt,H,Ve.z,it)}}else Ue.visible&&x.push(b,we,Ue,H,Ve.z,null)}}let me=b.children;for(let we=0,Ue=me.length;we<Ue;we++)z(me[we],O,H,V)}function te(b,O,H,V){let G=b.opaque,me=b.transmissive,we=b.transparent;p.setupLightsView(H),ie===!0&&Ze.setGlobalState(g.clippingPlanes,H),me.length>0&&ee(G,me,O,H),V&&Se.viewport(R.copy(V)),G.length>0&&j(G,O,H),me.length>0&&j(me,O,H),we.length>0&&j(we,O,H),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ee(b,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let me=Fe.isWebGL2;Re===null&&(Re=new pi(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?Gs:fs,minFilter:ds,samples:me?4:0})),g.getDrawingBufferSize(Xe),me?Re.setSize(Xe.x,Xe.y):Re.setSize(Xa(Xe.x),Xa(Xe.y));let we=g.getRenderTarget();g.setRenderTarget(Re),g.getClearColor(Z),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();let Ue=g.toneMapping;g.toneMapping=us,j(b,H,V),C.updateMultisampleRenderTarget(Re),C.updateRenderTargetMipmap(Re);let Ye=!1;for(let ot=0,Qe=O.length;ot<Qe;ot++){let it=O[ot],Kt=it.object,kn=it.geometry,un=it.material,ki=it.group;if(un.side===Un&&Kt.layers.test(V.layers)){let Ht=un.side;un.side=On,un.needsUpdate=!0,le(Kt,H,V,kn,un,ki),un.side=Ht,un.needsUpdate=!0,Ye=!0}}Ye===!0&&(C.updateMultisampleRenderTarget(Re),C.updateRenderTargetMipmap(Re)),g.setRenderTarget(we),g.setClearColor(Z,P),g.toneMapping=Ue}function j(b,O,H){let V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,me=b.length;G<me;G++){let we=b[G],Ue=we.object,Ye=we.geometry,ot=V===null?we.material:V,Qe=we.group;Ue.layers.test(H.layers)&&le(Ue,O,H,Ye,ot,Qe)}}function le(b,O,H,V,G,me){b.onBeforeRender(g,O,H,V,G,me),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(g,O,H,V,b,me),G.transparent===!0&&G.side===Un&&G.forceSinglePass===!1?(G.side=On,G.needsUpdate=!0,g.renderBufferDirect(H,O,V,G,b,me),G.side=wi,G.needsUpdate=!0,g.renderBufferDirect(H,O,V,G,b,me),G.side=Un):g.renderBufferDirect(H,O,V,G,b,me),b.onAfterRender(g,O,H,V,G,me)}function he(b,O,H){O.isScene!==!0&&(O=Be);let V=nt.get(b),G=p.state.lights,me=p.state.shadowsArray,we=G.state.version,Ue=Me.getParameters(b,G.state,me,O,H),Ye=Me.getProgramCacheKey(Ue),ot=V.programs;V.environment=b.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(b.isMeshStandardMaterial?q:M).get(b.envMap||V.environment),ot===void 0&&(b.addEventListener("dispose",Ae),ot=new Map,V.programs=ot);let Qe=ot.get(Ye);if(Qe!==void 0){if(V.currentProgram===Qe&&V.lightsStateVersion===we)return je(b,Ue),Qe}else Ue.uniforms=Me.getUniforms(b),b.onBuild(H,Ue,g),b.onBeforeCompile(Ue,g),Qe=Me.acquireProgram(Ue,Ye),ot.set(Ye,Qe),V.uniforms=Ue.uniforms;let it=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(it.clippingPlanes=Ze.uniform),je(b,Ue),V.needsLights=Yt(b),V.lightsStateVersion=we,V.needsLights&&(it.ambientLightColor.value=G.state.ambient,it.lightProbe.value=G.state.probe,it.directionalLights.value=G.state.directional,it.directionalLightShadows.value=G.state.directionalShadow,it.spotLights.value=G.state.spot,it.spotLightShadows.value=G.state.spotShadow,it.rectAreaLights.value=G.state.rectArea,it.ltc_1.value=G.state.rectAreaLTC1,it.ltc_2.value=G.state.rectAreaLTC2,it.pointLights.value=G.state.point,it.pointLightShadows.value=G.state.pointShadow,it.hemisphereLights.value=G.state.hemi,it.directionalShadowMap.value=G.state.directionalShadowMap,it.directionalShadowMatrix.value=G.state.directionalShadowMatrix,it.spotShadowMap.value=G.state.spotShadowMap,it.spotLightMatrix.value=G.state.spotLightMatrix,it.spotLightMap.value=G.state.spotLightMap,it.pointShadowMap.value=G.state.pointShadowMap,it.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=Qe,V.uniformsList=null,Qe}function Ge(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Pr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function je(b,O){let H=nt.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function ct(b,O,H,V,G){O.isScene!==!0&&(O=Be),C.resetTextureUnits();let me=O.fog,we=V.isMeshStandardMaterial?O.environment:null,Ue=I===null?g.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:rn,Ye=(V.isMeshStandardMaterial?q:M).get(V.envMap||we),ot=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Qe=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),it=!!H.morphAttributes.position,Kt=!!H.morphAttributes.normal,kn=!!H.morphAttributes.color,un=us;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(un=g.toneMapping);let ki=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ht=ki!==void 0?ki.length:0,lt=nt.get(V),il=p.state.lights;if(ie===!0&&(xe===!0||b!==v)){let Kn=b===v&&V.id===U;Ze.setState(V,b,Kn)}let Wt=!1;V.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==il.state.version||lt.outputColorSpace!==Ue||G.isBatchedMesh&&lt.batching===!1||!G.isBatchedMesh&&lt.batching===!0||G.isInstancedMesh&&lt.instancing===!1||!G.isInstancedMesh&&lt.instancing===!0||G.isSkinnedMesh&&lt.skinning===!1||!G.isSkinnedMesh&&lt.skinning===!0||G.isInstancedMesh&&lt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&lt.instancingColor===!1&&G.instanceColor!==null||lt.envMap!==Ye||V.fog===!0&&lt.fog!==me||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==Ze.numPlanes||lt.numIntersection!==Ze.numIntersection)||lt.vertexAlphas!==ot||lt.vertexTangents!==Qe||lt.morphTargets!==it||lt.morphNormals!==Kt||lt.morphColors!==kn||lt.toneMapping!==un||Fe.isWebGL2===!0&&lt.morphTargetsCount!==Ht)&&(Wt=!0):(Wt=!0,lt.__version=V.version);let Cs=lt.currentProgram;Wt===!0&&(Cs=he(V,O,G));let tf=!1,fo=!1,sl=!1,Mn=Cs.getUniforms(),Is=lt.uniforms;if(Se.useProgram(Cs.program)&&(tf=!0,fo=!0,sl=!0),V.id!==U&&(U=V.id,fo=!0),tf||v!==b){Mn.setValue(W,"projectionMatrix",b.projectionMatrix),Mn.setValue(W,"viewMatrix",b.matrixWorldInverse);let Kn=Mn.map.cameraPosition;Kn!==void 0&&Kn.setValue(W,Ve.setFromMatrixPosition(b.matrixWorld)),Fe.logarithmicDepthBuffer&&Mn.setValue(W,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Mn.setValue(W,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,fo=!0,sl=!0)}if(G.isSkinnedMesh){Mn.setOptional(W,G,"bindMatrix"),Mn.setOptional(W,G,"bindMatrixInverse");let Kn=G.skeleton;Kn&&(Fe.floatVertexTextures?(Kn.boneTexture===null&&Kn.computeBoneTexture(),Mn.setValue(W,"boneTexture",Kn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Mn.setOptional(W,G,"batchingTexture"),Mn.setValue(W,"batchingTexture",G._matricesTexture,C));let rl=H.morphAttributes;if((rl.position!==void 0||rl.normal!==void 0||rl.color!==void 0&&Fe.isWebGL2===!0)&&Je.update(G,H,Cs),(fo||lt.receiveShadow!==G.receiveShadow)&&(lt.receiveShadow=G.receiveShadow,Mn.setValue(W,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Is.envMap.value=Ye,Is.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),fo&&(Mn.setValue(W,"toneMappingExposure",g.toneMappingExposure),lt.needsLights&&bt(Is,sl),me&&V.fog===!0&&ye.refreshFogUniforms(Is,me),ye.refreshMaterialUniforms(Is,V,Q,Y,Re),Pr.upload(W,Ge(lt),Is,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Pr.upload(W,Ge(lt),Is,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Mn.setValue(W,"center",G.center),Mn.setValue(W,"modelViewMatrix",G.modelViewMatrix),Mn.setValue(W,"normalMatrix",G.normalMatrix),Mn.setValue(W,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Kn=V.uniformsGroups;for(let ol=0,Rm=Kn.length;ol<Rm;ol++)if(Fe.isWebGL2){let nf=Kn[ol];At.update(nf,Cs),At.bind(nf,Cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cs}function bt(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Yt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,O,H){nt.get(b.texture).__webglTexture=O,nt.get(b.depthTexture).__webglTexture=H;let V=nt.get(b);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){let H=nt.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,H=0){I=b,w=O,E=H;let V=!0,G=null,me=!1,we=!1;if(b){let Ye=nt.get(b);Ye.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(W.FRAMEBUFFER,null),V=!1):Ye.__webglFramebuffer===void 0?C.setupRenderTarget(b):Ye.__hasExternalTextures&&C.rebindTextures(b,nt.get(b.texture).__webglTexture,nt.get(b.depthTexture).__webglTexture);let ot=b.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(we=!0);let Qe=nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[O])?G=Qe[O][H]:G=Qe[O],me=!0):Fe.isWebGL2&&b.samples>0&&C.useMultisampledRTT(b)===!1?G=nt.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?G=Qe[H]:G=Qe,R.copy(b.viewport),B.copy(b.scissor),F=b.scissorTest}else R.copy(ne).multiplyScalar(Q).floor(),B.copy(re).multiplyScalar(Q).floor(),F=_e;if(Se.bindFramebuffer(W.FRAMEBUFFER,G)&&Fe.drawBuffers&&V&&Se.drawBuffers(b,G),Se.viewport(R),Se.scissor(B),Se.setScissorTest(F),me){let Ye=nt.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ye.__webglTexture,H)}else if(we){let Ye=nt.get(b.texture),ot=O||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.__webglTexture,H||0,ot)}U=-1},this.readRenderTargetPixels=function(b,O,H,V,G,me,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){Se.bindFramebuffer(W.FRAMEBUFFER,Ue);try{let Ye=b.texture,ot=Ye.format,Qe=Ye.type;if(ot!==Zn&&ve.convert(ot)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let it=Qe===Gs&&(Ne.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(Qe!==fs&&ve.convert(Qe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===Yi&&(Fe.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-V&&H>=0&&H<=b.height-G&&W.readPixels(O,H,V,G,ve.convert(ot),ve.convert(Qe),me)}finally{let Ye=I!==null?nt.get(I).__webglFramebuffer:null;Se.bindFramebuffer(W.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(b,O,H=0){let V=Math.pow(2,-H),G=Math.floor(O.image.width*V),me=Math.floor(O.image.height*V);C.setTexture2D(O,0),W.copyTexSubImage2D(W.TEXTURE_2D,H,0,0,b.x,b.y,G,me),Se.unbindTexture()},this.copyTextureToTexture=function(b,O,H,V=0){let G=O.image.width,me=O.image.height,we=ve.convert(H.format),Ue=ve.convert(H.type);C.setTexture2D(H,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,H.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,V,b.x,b.y,G,me,we,Ue,O.image.data):O.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,V,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,V,b.x,b.y,we,Ue,O.image),V===0&&H.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(b,O,H,V,G=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let me=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Ue=b.max.z-b.min.z+1,Ye=ve.convert(V.format),ot=ve.convert(V.type),Qe;if(V.isData3DTexture)C.setTexture3D(V,0),Qe=W.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)C.setTexture2DArray(V,0),Qe=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);let it=W.getParameter(W.UNPACK_ROW_LENGTH),Kt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),kn=W.getParameter(W.UNPACK_SKIP_PIXELS),un=W.getParameter(W.UNPACK_SKIP_ROWS),ki=W.getParameter(W.UNPACK_SKIP_IMAGES),Ht=H.isCompressedTexture?H.mipmaps[G]:H.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Ht.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ht.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,b.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,b.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?W.texSubImage3D(Qe,G,O.x,O.y,O.z,me,we,Ue,Ye,ot,Ht.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Qe,G,O.x,O.y,O.z,me,we,Ue,Ye,Ht.data)):W.texSubImage3D(Qe,G,O.x,O.y,O.z,me,we,Ue,Ye,ot,Ht),W.pixelStorei(W.UNPACK_ROW_LENGTH,it),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Kt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,kn),W.pixelStorei(W.UNPACK_SKIP_ROWS,un),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ki),G===0&&V.generateMipmaps&&W.generateMipmap(Qe),Se.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Se.unbindTexture()},this.resetState=function(){w=0,E=0,I=null,Se.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bh?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===Ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?Hs:rp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hs?yt:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},uh=class extends Oo{};uh.prototype.isWebGL1Renderer=!0;kr=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Br=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new T,Xs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zr=class extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yo=new T,br=new T,Er=new T,Sr=new fe,_o=new fe,gp=new et,Ra=new T,vo=new T,Ca=new T,Ed=new fe,Ul=new fe,Sd=new fe,Fo=class extends Lt{constructor(e=new zr){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new Gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Br(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new Xs(n,3,0,!1)),Mr.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),gp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ia(Ra.set(-.5,-.5,0),Er,o,br,s,r),Ia(vo.set(.5,-.5,0),Er,o,br,s,r),Ia(Ca.set(.5,.5,0),Er,o,br,s,r),Ed.set(0,0),Ul.set(1,0),Sd.set(1,1);let a=e.ray.intersectTriangle(Ra,vo,Ca,!1,yo);if(a===null&&(Ia(vo.set(-.5,.5,0),Er,o,br,s,r),Ul.set(0,1),a=e.ray.intersectTriangle(Ra,Ca,vo,!1,yo),a===null))return;let c=e.ray.origin.distanceTo(yo);c<e.near||c>e.far||t.push({distance:c,point:yo.clone(),uv:ks.getInterpolation(yo,Ra,vo,Ca,Ed,Ul,Sd,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};wd=new T,Td=new Rt,Rd=new Rt,N1=new T,Cd=new et,Pa=new T,Ol=new Hn,Id=new et,Fl=new Ws,nc=class extends Ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lf,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(s),e.ray.intersectsSphere(Ol)!==!1&&(Id.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(Id),!(this.boundingBox!==null&&Fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lA?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Td.fromBufferAttribute(s.attributes.skinIndex,e),Rd.fromBufferAttribute(s.attributes.skinWeight,e),wd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Rd.getComponent(r);if(o!==0){let a=Td.getComponent(r);Cd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(N1.copy(wd).applyMatrix4(Cd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ko=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bo=class extends yn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=jt,h=jt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pd=new et,U1=new et,ic=class i{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:U1;Pd.multiplyMatrices(a,t[r]),Pd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bo(t,e,e,Zn,Yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ko),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},qs=class extends sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new et,Ld=new et,La=[],Dd=new Pt,O1=new et,Mo=new Ct,bo=new Hn,Hr=class extends Ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,O1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Dd.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(Dd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),bo.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(n),e.ray.intersectsSphere(bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),Ld.multiplyMatrices(n,wr),Mo.matrixWorld=Ld,Mo.raycast(e,La);for(let o=0,a=La.length;o<a;o++){let c=La[o];c.instanceId=r,c.object=this,t.push(c)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},As=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nd=new T,Ud=new T,Od=new et,kl=new Ws,Da=new Hn,Gr=class extends Lt{constructor(e=new Gt,t=new As){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Nd.fromBufferAttribute(t,s-1),Ud.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Nd.distanceTo(Ud);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;Od.copy(s).invert(),kl.copy(e.ray).applyMatrix4(Od);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new T,h=new T,u=new T,f=new T,m=this.isLineSegments?2:1,A=n.index,p=n.attributes.position;if(A!==null){let d=Math.max(0,o.start),y=Math.min(A.count,o.start+o.count);for(let g=d,_=y-1;g<_;g+=m){let w=A.getX(g),E=A.getX(g+1);if(l.fromBufferAttribute(p,w),h.fromBufferAttribute(p,E),kl.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let g=d,_=y-1;g<_;g+=m){if(l.fromBufferAttribute(p,g),h.fromBufferAttribute(p,g+1),kl.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Fd=new T,kd=new T,Ys=class extends Gr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Fd.fromBufferAttribute(t,s),kd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fd.distanceTo(kd);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sc=class extends Gr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},zo=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bd=new et,fh=new Ws,Na=new Hn,Ua=new T,rc=class extends Lt{constructor(e=new Gt,t=new zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Bd.copy(s).invert(),fh.copy(e.ray).applyMatrix4(Bd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let A=f,x=m;A<x;A++){let p=l.getX(A);Ua.fromBufferAttribute(u,p),zd(Ua,p,c,s,e,t,this)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let A=f,x=m;A<x;A++)Ua.fromBufferAttribute(u,A),zd(Ua,A,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};gs=class extends yn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new fe:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,s=[],r=[],o=[],a=new T,c=new et;for(let m=0;m<=e;m++){let A=m/e;s[m]=this.getTangentAt(A,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let A=Math.acos(nn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,A))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(nn(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let A=1;A<=e;A++)r[A].applyMatrix4(c.makeRotationAxis(s[A],m*A)),o[A].crossVectors(s[A],r[A])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ho=class extends Qn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new fe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*u+this.aX,l=f*u+m*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dh=class extends Ho{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Oa=new T,Bl=new Gh,zl=new Gh,Hl=new Gh,ph=class extends Qn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Oa.subVectors(s[0],s[1]).add(s[0]),l=Oa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,A=Math.pow(l.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);x<1e-4&&(x=1),A<1e-4&&(A=x),p<1e-4&&(p=x),Bl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,A,x,p),zl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,A,x,p),Hl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,A,x,p)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),zl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Hl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Bl.calc(c),zl.calc(c),Hl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};oc=class extends Qn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Po(e,s.x,r.x,o.x,a.x),Po(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mh=class extends Qn{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Po(e,s.x,r.x,o.x,a.x),Po(e,s.y,r.y,o.y,a.y),Po(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends Qn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ah=class extends Qn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends Qn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Io(e,s.x,r.x,o.x),Io(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gh=class extends Qn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Io(e,s.x,r.x,o.x),Io(e,s.y,r.y,o.y),Io(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Hd(a,c.x,l.x,h.x,u.x),Hd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Gd=Object.freeze({__proto__:null,ArcCurve:dh,CatmullRomCurve3:ph,CubicBezierCurve:oc,CubicBezierCurve3:mh,EllipseCurve:Ho,LineCurve:ac,LineCurve3:Ah,QuadraticBezierCurve:cc,QuadraticBezierCurve3:gh,SplineCurve:lc}),xh=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Gd[s.type]().fromJSON(s))}return this}},yh=class extends xh{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ac(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new cc(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new oc(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new lc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Ho(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Go=class i extends Gt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=nn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new T,f=new fe,m=new T,A=new T,x=new T,p=0,d=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,m.x=d*1,m.y=-p,m.z=d*0,x.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,m.x=d*1,m.y=-p,m.z=d*0,A.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),c.push(m.x,m.y,m.z),x.copy(A)}for(let y=0;y<=t;y++){let g=n+y*h*s,_=Math.sin(g),w=Math.cos(g);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*w,o.push(u.x,u.y,u.z),f.x=y/t,f.y=E/(e.length-1),a.push(f.x,f.y);let I=c[3*E+0]*_,U=c[3*E+1],v=c[3*E+0]*w;l.push(I,U,v)}}for(let y=0;y<t;y++)for(let g=0;g<e.length-1;g++){let _=g+y*e.length,w=_,E=_+e.length,I=_+e.length+1,U=_+1;r.push(w,E,U),r.push(I,U,E)}this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("uv",new gt(a,2)),this.setAttribute("normal",new gt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ks=class i extends Go{constructor(e=1,t=1,n=4,s=8){let r=new yh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Vr=class i extends Gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new T,h=new fe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let m=n+u/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(a,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},st=class i extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],m=[],A=0,x=[],p=n/2,d=0;y(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(m,2));function y(){let _=new T,w=new T,E=0,I=(t-e)/n;for(let U=0;U<=r;U++){let v=[],R=U/r,B=R*(t-e)+e;for(let F=0;F<=s;F++){let Z=F/s,P=Z*c+a,k=Math.sin(P),Y=Math.cos(P);w.x=B*k,w.y=-R*n+p,w.z=B*Y,u.push(w.x,w.y,w.z),_.set(k,I,Y).normalize(),f.push(_.x,_.y,_.z),m.push(Z,1-R),v.push(A++)}x.push(v)}for(let U=0;U<s;U++)for(let v=0;v<r;v++){let R=x[v][U],B=x[v+1][U],F=x[v+1][U+1],Z=x[v][U+1];h.push(R,B,Z),h.push(B,F,Z),E+=6}l.addGroup(d,E,0),d+=E}function g(_){let w=A,E=new fe,I=new T,U=0,v=_===!0?e:t,R=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,p*R,0),f.push(0,R,0),m.push(.5,.5),A++;let B=A;for(let F=0;F<=s;F++){let P=F/s*c+a,k=Math.cos(P),Y=Math.sin(P);I.x=v*Y,I.y=p*R,I.z=v*k,u.push(I.x,I.y,I.z),f.push(0,R,0),E.x=k*.5+.5,E.y=Y*.5*R+.5,m.push(E.x,E.y),A++}for(let F=0;F<s;F++){let Z=w+F,P=B+F;_===!0?h.push(P,P+1,Z):h.push(P+1,P,Z),U+=3}l.addGroup(d,U,_===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ti=class i extends st{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hc=class i extends Gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let g=new T,_=new T,w=new T;for(let E=0;E<t.length;E+=3)m(t[E+0],g),m(t[E+1],_),m(t[E+2],w),c(g,_,w,y)}function c(y,g,_,w){let E=w+1,I=[];for(let U=0;U<=E;U++){I[U]=[];let v=y.clone().lerp(_,U/E),R=g.clone().lerp(_,U/E),B=E-U;for(let F=0;F<=B;F++)F===0&&U===E?I[U][F]=v:I[U][F]=v.clone().lerp(R,F/B)}for(let U=0;U<E;U++)for(let v=0;v<2*(E-U)-1;v++){let R=Math.floor(v/2);v%2===0?(f(I[U][R+1]),f(I[U+1][R]),f(I[U][R])):(f(I[U][R+1]),f(I[U+1][R+1]),f(I[U+1][R]))}}function l(y){let g=new T;for(let _=0;_<r.length;_+=3)g.x=r[_+0],g.y=r[_+1],g.z=r[_+2],g.normalize().multiplyScalar(y),r[_+0]=g.x,r[_+1]=g.y,r[_+2]=g.z}function h(){let y=new T;for(let g=0;g<r.length;g+=3){y.x=r[g+0],y.y=r[g+1],y.z=r[g+2];let _=p(y)/2/Math.PI+.5,w=d(y)/Math.PI+.5;o.push(_,1-w)}A(),u()}function u(){for(let y=0;y<o.length;y+=6){let g=o[y+0],_=o[y+2],w=o[y+4],E=Math.max(g,_,w),I=Math.min(g,_,w);E>.9&&I<.1&&(g<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,g){let _=y*3;g.x=e[_+0],g.y=e[_+1],g.z=e[_+2]}function A(){let y=new T,g=new T,_=new T,w=new T,E=new fe,I=new fe,U=new fe;for(let v=0,R=0;v<r.length;v+=9,R+=6){y.set(r[v+0],r[v+1],r[v+2]),g.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),E.set(o[R+0],o[R+1]),I.set(o[R+2],o[R+3]),U.set(o[R+4],o[R+5]),w.copy(y).add(g).add(_).divideScalar(3);let B=p(w);x(E,R+0,y,B),x(I,R+2,g,B),x(U,R+4,_,B)}}function x(y,g,_,w){w<0&&y.x===1&&(o[g]=y.x-1),_.x===0&&_.z===0&&(o[g]=w/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},uc=class i extends hc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},fc=class i extends hc{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},dc=class i extends Gt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/s,m=new T,A=new fe;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let d=r+p/n*o;m.x=u*Math.cos(d),m.y=u*Math.sin(d),c.push(m.x,m.y,m.z),l.push(0,0,1),A.x=(m.x/t+1)/2,A.y=(m.y/t+1)/2,h.push(A.x,A.y)}u+=f}for(let x=0;x<s;x++){let p=x*(n+1);for(let d=0;d<n;d++){let y=d+p,g=y,_=y+n+1,w=y+n+2,E=y+1;a.push(g,_,E),a.push(_,w,E)}}this.setIndex(a),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ot=class i extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new T,f=new T,m=[],A=[],x=[],p=[];for(let d=0;d<=n;d++){let y=[],g=d/n,_=0;d===0&&o===0?_=.5/t:d===n&&c===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let E=w/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+g*a),u.y=e*Math.cos(o+g*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+g*a),A.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(E+_,1-g),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let g=h[d][y+1],_=h[d][y],w=h[d+1][y],E=h[d+1][y+1];(d!==0||o>0)&&m.push(g,_,E),(d!==n-1||c<Math.PI)&&m.push(_,w,E)}this.setIndex(m),this.setAttribute("position",new gt(A,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},_n=class i extends Gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new T,u=new T,f=new T;for(let m=0;m<=n;m++)for(let A=0;A<=s;A++){let x=A/s*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(A/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let A=1;A<=s;A++){let x=(s+1)*m+A-1,p=(s+1)*(m-1)+A-1,d=(s+1)*(m-1)+A,y=(s+1)*m+A;o.push(x,p,y),o.push(p,d,y)}this.setIndex(o),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},mi=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ei=class extends mi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},pc=class extends Pn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};xs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_h=class extends xs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uf,endingEnd:Uf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Of:r=e,a=2*t-n;break;case Ff:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Of:o=e,c=2*n-t;break;case Ff:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,A=(n-t)/(s-t),x=A*A,p=x*A,d=-f*p+2*f*x-f*A,y=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*A+1,g=(-1-m)*p+(1.5+m)*x+.5*A,_=m*p-m*x;for(let w=0;w!==a;++w)r[w]=d*o[h+w]+y*o[l+w]+g*o[c+w]+_*o[u+w];return r}},vh=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Mh=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fa(t,this.TimeBufferType),this.values=Fa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fa(e.times,Array),values:Fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _h(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&W1(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,m=u+n;for(let A=0;A!==n;++A){let x=t[u+A];if(x!==t[f+A]||x!==t[m+A]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Vs;ys=class extends ti{};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Ur;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;mc=class extends ti{};mc.prototype.ValueTypeName="color";ji=class extends ti{};ji.prototype.ValueTypeName="number";bh=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Sn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ri=class extends ti{InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.DefaultInterpolation=Vs;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;_s=class extends ti{};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Ur;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;Zi=class extends ti{};Zi.prototype.ValueTypeName="vector";Ac=class{constructor(e,t=-1,n,s=gA){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Y1(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ti.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=X1(c);c=Vd(c,1,h),l=Vd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ji(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,m,A,x){if(m.length!==0){let p=[],d=[];xp(m,p,d,A),p.length!==0&&x.push(new u(f,p,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let m={},A;for(A=0;A<f.length;A++)if(f[A].morphTargets)for(let x=0;x<f[A].morphTargets.length;x++)m[f[A].morphTargets[x]]=-1;for(let x in m){let p=[],d=[];for(let y=0;y!==f[A].morphTargets.length;++y){let g=f[A];p.push(g.time),d.push(g.morphTarget===x?1:0)}s.push(new ji(".morphTargetInfluence["+x+"]",p,d))}c=m.length*o}else{let m=".bones["+t[u].name+"]";n(Zi,m+".position",f,"pos",s),n(Ri,m+".quaternion",f,"rot",s),n(Zi,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};ls={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Eh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],A=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return A}return null}}},K1=new Eh,Ji=class{constructor(e){this.manager=e!==void 0?e:K1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";Wi={},Sh=class extends Error{constructor(e,t){super(e),this.response=t}},Vo=class extends Ji{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ls.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:n,onError:s});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Wi[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,A=m!==0,x=0,p=new ReadableStream({start(d){y();function y(){u.read().then(({done:g,value:_})=>{if(g)d.close();else{x+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:A,loaded:x,total:m});for(let E=0,I=h.length;E<I;E++){let U=h[E];U.onProgress&&U.onProgress(w)}d.enqueue(_),y()}})}}});return new Response(p)}else throw new Sh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(A=>m.decode(A))}}}).then(l=>{ls.add(e,l);let h=Wi[e];delete Wi[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=Wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wi[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},wh=class extends Ji{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ls.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Do("img");function c(){h(),ls.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},gc=class extends Ji{constructor(e){super(e)}load(e,t,n,s){let r=new yn,o=new wh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Wr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},xc=class extends Wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gl=new et,Wd=new T,Xd=new T,Wo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wd),Xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xd),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Th=class extends Wo{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},yc=class extends Wr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Th}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},qd=new et,Eo=new T,Vl=new T,Rh=class extends Wo{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Eo),Vl.copy(n.position),Vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vl),n.updateMatrixWorld(),s.makeTranslation(-Eo.x,-Eo.y,-Eo.z),qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd)}},Ci=class extends Wr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ch=class extends Wo{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Ch}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vs=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},_c=class extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ls.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ls.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ls.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ls.add(e,c),r.manager.itemStart(e)}},Vh="\\[\\]\\.:\\/",j1=new RegExp("["+Vh+"]","g"),Wh="[^"+Vh+"]",Z1="[^"+Vh.replace("\\.","")+"]",J1=/((?:WC+[\/:])*)/.source.replace("WC",Wh),$1=/(WCOD+)?/.source.replace("WCOD",Z1),Q1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),ev=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),tv=new RegExp("^"+J1+$1+Q1+ev+"$"),nv=["material","materials","bones","map"],Ih=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(j1,"")}static parseTrackName(e){let t=tv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Ih;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];MM=new Float32Array(1),vc=class{constructor(e,t,n=0,s=1/0){this.ray=new Ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new No,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ph(e,this,n,t),n.sort(Yd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ph(e[s],this,n,t);return n.sort(Yd),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh)});function Xh(i,e){if(e===sp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Xo||e===bc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Xo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var yp=wt(()=>{Vn()});function iv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function ov(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new mi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),i.DefaultMaterial}function js(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bs(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function av(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function cv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lv(i){let e,t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kh(t.attributes):e=i.indices+":"+Kh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Kh(i.targets[n]);return e}function Kh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function xu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function fv(i,e,t){let n=e.attributes,s=new Pt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),a.normalized){let h=xu(Yr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new T,c=new T;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],m=f.min,A=f.max;if(m!==void 0&&A!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(A[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(A[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(A[2]))),f.normalized){let x=xu(Yr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Hn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function bp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=gu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return xt.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),bs(i,e),fv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?av(i,e.targets,t):i})}var wc,dt,jh,Zh,Jh,$h,Qh,eu,tu,nu,iu,su,ru,ou,au,cu,lu,hu,uu,Ep,qo,_p,fu,du,pu,mu,Tc,sv,Au,ni,Yr,vp,Mp,qh,gu,Ms,rv,Yh,uv,yu,Sp=wt(()=>{Vn();yp();wc=class extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $h(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=vs.extractUrlBase(e);o=vs.resolveURL(l,this.path)}else o=vs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Vo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ep){try{o[dt.KHR_BINARY_GLTF]=new fu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:o[u]=new Zh;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[u]=new du(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[u]=new pu;break;case dt.KHR_MESH_QUANTIZATION:o[u]=new mu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},jh=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],rn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Xr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ci(h),l.distance=u;break;case"spot":l=new yc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,bs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Zh=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return pn}extendParams(e,t,n){let s=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}},Jh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(a,a)}return Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],rn),Promise.all(r)}},iu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},ou=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},cu=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},lu=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},hu=class{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){let m=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(m),h,u,f,s.mode,s.filter),m})})}else return null}},uu=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ni.TRIANGLES&&l.mode!==ni.TRIANGLE_STRIP&&l.mode!==ni.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,m=[];for(let A of u){let x=new et,p=new T,d=new Sn,y=new T(1,1,1),g=new Hr(A.geometry,A.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),g.setMatrixAt(_,x.compose(p,d,y));for(let _ in c)if(_==="_COLOR_0"){let w=c[_];g.instanceColor=new qs(w.array,w.itemSize,w.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&A.geometry.setAttribute(_,c[_]);Lt.prototype.copy.call(g,A),this.parser.assignFinalMaterial(g),m.push(g)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}},Ep="glTF",qo=12,_p={JSON:1313821514,BIN:5130562},fu=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,qo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ep)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-qo,r=new DataView(e,qo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===_p.JSON){let l=new Uint8Array(e,qo+o,a);this.content=n.decode(l)}else if(c===_p.BIN){let l=qo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},du=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=gu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=gu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],m=Yr[f.componentType];l[u]=m.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(m){for(let A in m.attributes){let x=m.attributes[A],p=c[A];p!==void 0&&(x.normalized=p)}u(m)},a,l,rn,f)})})}},pu=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},mu=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},Tc=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,m=f*u,A=e*l,x=A-l,p=-2*m+3*f,d=m-f,y=1-p,g=d-f+u;for(let _=0;_!==a;_++){let w=o[x+_+a],E=o[x+_+c]*h,I=o[A+_+a],U=o[A+_]*h;r[_]=y*w+g*E+p*I+d*U}return r}},sv=new Sn,Au=class extends Tc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return sv.fromArray(r).normalize().toArray(r),r}},ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vp={9728:jt,9729:In,9984:za,9985:Uh,9986:So,9987:ds},Mp={33071:dn,33648:Lo,10497:di},qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rv={CUBICSPLINE:void 0,LINEAR:Vs,STEP:Ur},Yh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};uv=new et,yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new gc(this.options.manager):this.textureLoader=new _c(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return js(r,a,s),bs(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(vs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=qh[s.type],a=Yr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new sn(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=qh[s.type],l=Yr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,A=s.normalized===!0,x,p;if(m&&m!==u){let d=Math.floor(f/m),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,g=t.cache.get(y);g||(x=new l(a,d*m,s.count*m/h),g=new Br(x,m/h),t.cache.add(y,g)),p=new Xs(g,c,f%m/h,A)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),p=new sn(x,c,A);if(s.sparse!==void 0){let d=qh.SCALAR,y=Yr[s.sparse.indices.componentType],g=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,w=new y(o[1],g,s.sparse.count*d),E=new l(o[2],_,s.sparse.count*c);a!==null&&(p=new sn(p.array.slice(),p.itemSize,p.normalized));for(let I=0,U=w.length;I<U;I++){let v=w[I];if(p.setX(v,E[I*c]),c>=2&&p.setY(v,E[I*c+1]),c>=3&&p.setZ(v,E[I*c+2]),c>=4&&p.setW(v,E[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=vp[f.magFilter]||In,h.minFilter=vp[f.minFilter]||ds,h.wrapS=Mp[f.wrapS]||di,h.wrapT=Mp[f.wrapT]||di,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,m){let A=f;t.isImageBitmapLoader===!0&&(A=function(x){let p=new yn(x);p.needsUpdate=!0,f(p)}),t.load(vs.resolveURL(u,r.path),A,void 0,m)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||hv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new zo,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new As,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return mi}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],rn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,yt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Un);let h=r.alphaMode||Yh.OPAQUE;if(h===Yh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Yh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==pn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==pn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==pn){let u=r.emissiveFactor;a.emissive=new Pe().setRGB(u[0],u[1],u[2],rn)}return r.emissiveTexture!==void 0&&o!==pn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),bs(u,r),t.associations.set(u,{materials:e}),r.extensions&&js(s,u,r),u})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return bp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=lv(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=bp(new Gt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?ov(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,A=h.length;m<A;m++){let x=h[m],p=o[m],d,y=l[m];if(p.mode===ni.TRIANGLES||p.mode===ni.TRIANGLE_STRIP||p.mode===ni.TRIANGLE_FAN||p.mode===void 0)d=r.isSkinnedMesh===!0?new nc(x,y):new Ct(x,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),p.mode===ni.TRIANGLE_STRIP?d.geometry=Xh(d.geometry,bc):p.mode===ni.TRIANGLE_FAN&&(d.geometry=Xh(d.geometry,Xo));else if(p.mode===ni.LINES)d=new Ys(x,y);else if(p.mode===ni.LINE_STRIP)d=new Gr(x,y);else if(p.mode===ni.LINE_LOOP)d=new sc(x,y);else if(p.mode===ni.POINTS)d=new rc(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&cv(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),bs(d,r),p.extensions&&js(s,d,p),t.assignFinalMaterial(d),u.push(d)}for(let m=0,A=u.length;m<A;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return r.extensions&&js(s,u[0],r),u[0];let f=new at;r.extensions&&js(s,f,r),t.associations.set(f,{meshes:e});for(let m=0,A=u.length;m<A;m++)f.add(u[m]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(ap.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ms(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new et;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ic(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let m=s.channels[u],A=s.samplers[m.sampler],x=m.target,p=x.node,d=s.parameters!==void 0?s.parameters[A.input]:A.input,y=s.parameters!==void 0?s.parameters[A.output]:A.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",y)),l.push(A),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],m=u[1],A=u[2],x=u[3],p=u[4],d=[];for(let y=0,g=f.length;y<g;y++){let _=f[y],w=m[y],E=A[y],I=x[y],U=p[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let v=n._createAnimationTracks(_,w,E,I,U);if(v)for(let R=0;R<v.length;R++)d.push(v[R])}return new Ac(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(f,uv)});for(let m=0,A=u.length;m<A;m++)h.add(u[m]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ko:l.length>1?h=new at:l.length===1?h=l[0]:h=new Lt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),bs(h,r),r.extensions&&js(n,h,r),r.matrix!==void 0){let u=new et;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new at;n.name&&(r.name=s.createUniqueName(n.name)),bs(r,n),n.extensions&&js(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,m]of s.associations)(f instanceof Pn||f instanceof yn)&&u.set(f,m);return h.traverse(f=>{let m=s.associations.get(f);m!=null&&u.set(f,m)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Ms[r.path]===Ms.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Ms[r.path]){case Ms.weights:l=ji;break;case Ms.rotation:l=Ri;break;case Ms.position:case Ms.scale:l=Zi;break;default:switch(n.itemSize){case 1:l=ji;break;case 2:case 3:default:l=Zi;break}break}let h=s.interpolation!==void 0?rv[s.interpolation]:Vs,u=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let A=new l(c[f]+"."+Ms[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(A),o.push(A)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=xu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ri?Au:Tc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function wp(i){let e=new Map,t=new Map,n=i.clone();return Tp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Tp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Tp(i.children[n],e.children[n],t)}var Rp=wt(()=>{});var Cp,Ip=wt(()=>{Cp={tvCabinet:"Z2xURgIAAAB4IAAAxAMAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjUuMSIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiVkVDMyIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyMjgsIm1heCI6WzAuODAwMDAwMDExOTIwOTI5LDAuMzEwMDAwMDAyMzg0MTg1OCwwXSwibWluIjpbMCwwLC0wLjI1XSwiYnVmZmVyVmlldyI6MCwiYnl0ZU9mZnNldCI6MH0seyJ0eXBlIjoiVkVDMyIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyMjgsImJ1ZmZlclZpZXciOjAsImJ5dGVPZmZzZXQiOjEyfSx7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTI1LCJjb3VudCI6NDYyLCJidWZmZXJWaWV3IjoxLCJieXRlT2Zmc2V0IjowfV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVPZmZzZXQiOjAsImJ5dGVMZW5ndGgiOjU0NzIsImJ5dGVTdHJpZGUiOjI0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZU9mZnNldCI6NTQ3MiwiYnl0ZUxlbmd0aCI6MTg0OCwidGFyZ2V0IjozNDk2M31dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo3MzIwfV0sIm1hdGVyaWFscyI6W3sibmFtZSI6Indvb2QiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjg5NjIyNjQsMC42MDE1NzEyLDAuMzkzMTU1OSwxXSwibWV0YWxsaWNGYWN0b3IiOjB9fV0sIm1lc2hlcyI6W3sibmFtZSI6Ik1lc2ggY2FiaW5ldFRlbGV2aXNpb24iLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjF9LCJtb2RlIjo0LCJtYXRlcmlhbCI6MCwiaW5kaWNlcyI6Mn1dfV0sIm5vZGVzIjpbeyJuYW1lIjoiY2FiaW5ldFRlbGV2aXNpb24oQ2xvbmUpIiwibWVzaCI6MH1dLCJzY2VuZXMiOlt7Im5vZGVzIjpbMF19XSwic2NlbmUiOjAsImV4dGVuc2lvbnNVc2VkIjpbIktIUl9tYXRlcmlhbHNfdW5saXQiXX0gmBwAAEJJTgAAAAAAvw4cJArXI70AAAAAAAAAAAAAgL8K1yM9vw4cJArXI70AAAAAAAAAAAAAgL8AAAAACtcjPQrXI70AAAAAAAAAAAAAgL8K1yM9CtcjPQrXI70AAAAAAAAAAAAAgL8K1yM9AAAAAAAAAIAAAIA/AAAAAAAAAIAK1yM9CtcjPQAAAIAAAIA/AAAAAAAAAIAK1yM9vw4cJArXI70AAIA/AAAAAAAAAIAK1yM9CtcjPQrXI70AAIA/AAAAAAAAAIAAAAAAvw4cJArXI70AAAAAAACAvwAAAIAAAAAAAAAAAAAAAIAAAAAAAACAvwAAAIAK1yM9vw4cJArXI70AAAAAAACAvwAAAIAK1yM9AAAAAAAAAIAAAAAAAACAvwAAAIAAAAAAIY6VJQAAgL4AAAAAAACAvwAAAIAAAAAAWRd3JT0KV74AAAAAAACAvwAAAIAK1yM9IY6VJQAAgL4AAAAAAACAvwAAAIAK1yM9WRd3JT0KV74AAAAAAACAvwAAAIAK1yM9CtcjPT0KV74AAIA/AAAAAAAAAIAK1yM9CtcjPQAAgL4AAIA/AAAAAAAAAIAK1yM9WRd3JT0KV74AAIA/AAAAAAAAAIAK1yM9IY6VJQAAgL4AAIA/AAAAAAAAAIAK1yM9cD2KPj0KV74AAAAAAACAvwAAAIAK1yM9cD2KPgAAAIAAAAAAAACAvwAAAIBcj0I/cD2KPj0KV74AAAAAAACAvwAAAIAVrsc+cD2KPs3MTL0AAAAAAACAvwAAAICG69E+cD2KPs3MTL0AAAAAAACAvwAAAICG69E+cD2KPpDC9bwAAAAAAACAvwAAAIAVrsc+cD2KPpDC9bwAAAAAAACAvwAAAIBcj0I/cD2KPgAAAIAAAAAAAACAvwAAAIAK1yM9CtejPT0KV74AAAAAAACAPwAAAIAVrsc+CtejPZDC9bwAAAAAAACAPwAAAIAK1yM9CtejPQAAAIAAAAAAAACAPwAAAIBcj0I/CtejPQAAAIAAAAAAAACAPwAAAICG69E+CtejPZDC9bwAAAAAAACAPwAAAICG69E+CtejPc3MTL0AAAAAAACAPwAAAIAVrsc+CtejPc3MTL0AAAAAAACAPwAAAIBcj0I/CtejPT0KV74AAAAAAACAPwAAAIAK1yM9WRd3JT0KV74AAAAAAAAAAAAAgD8AAAAAWRd3JT0KV74AAAAAAAAAAAAAgD8K1yM9CtcjPT0KV74AAAAAAAAAAAAAgD8AAAAACtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/SgyCJArXI70AAAAAAACAvwAAAIBcj0I/SgyCJKkT0KUAAAAAAACAvwAAAIDNzEw/SgyCJArXI70AAAAAAACAvwAAAIDNzEw/SgyCJKkT0KUAAAAAAACAvwAAAIBcj0I/SgyCJArXI70AAAAAAAAAAAAAgL/NzEw/SgyCJArXI70AAAAAAAAAAAAAgL9cj0I/CtcjPQrXI70AAAAAAAAAAAAAgL/NzEw/CtcjPQrXI70AAAAAAAAAAAAAgL9cj0I/CtcjPT0KV74AAIC/AAAAAAAAAIBcj0I/54yIJT0KV74AAIC/AAAAAAAAAIBcj0I/CtcjPQAAgL4AAIC/AAAAAAAAAIBcj0I/54yIJQAAgL4AAIC/AAAAAAAAAIDNzEw/54yIJT0KV74AAAAAAAAAAAAAgD9cj0I/54yIJT0KV74AAAAAAAAAAAAAgD/NzEw/CtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/CtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/54yIJQAAgL4AAAAAAACAvwAAAIBcj0I/54yIJT0KV74AAAAAAACAvwAAAIDNzEw/54yIJQAAgL4AAAAAAACAvwAAAIDNzEw/54yIJT0KV74AAAAAAACAvwAAAIAAAAAAUriePgAAAIAAAAAAAACAPwAAAIAAAAAAUriePgAAgL4AAAAAAACAPwAAAIDNzEw/UriePgAAAIAAAAAAAACAPwAAAIDNzEw/UriePgAAgL4AAAAAAACAPwAAAIAAAAAAUriePgAAAIAAAIC/AAAAAAAAAIAAAAAAAAAAAAAAAIAAAIC/AAAAAAAAAIAAAAAAUriePgAAgL4AAIC/AAAAAAAAAIAAAAAACtcjPQrXI70AAIC/AAAAAAAAAIAAAAAACtcjPT0KV74AAIC/AAAAAAAAAIAAAAAAWRd3JT0KV74AAIC/AAAAAAAAAIAAAAAAIY6VJQAAgL4AAIC/AAAAAAAAAIAAAAAAvw4cJArXI70AAIC/AAAAAAAAAIAAAAAAIY6VJQAAgL4AAAAAAAAAAAAAgL8K1yM9IY6VJQAAgL4AAAAAAAAAAAAAgL8AAAAAUriePgAAgL4AAAAAAAAAAAAAgL8K1yM9CtcjPQAAgL4AAAAAAAAAAAAAgL9cj0I/CtcjPQAAgL4AAAAAAAAAAAAAgL/NzEw/UriePgAAgL4AAAAAAAAAAAAAgL/NzEw/54yIJQAAgL4AAAAAAAAAAAAAgL9cj0I/54yIJQAAgL4AAAAAAAAAAAAAgL/NzEw/SgyCJKkT0KUAAIA/AAAAAAAAAIDNzEw/CtcjPQrXI70AAIA/AAAAAAAAAIDNzEw/SgyCJArXI70AAIA/AAAAAAAAAIDNzEw/UriePgAAgL4AAIA/AAAAAAAAAIDNzEw/UriePgAAAIAAAIA/AAAAAAAAAIDNzEw/CtcjPT0KV74AAIA/AAAAAAAAAIDNzEw/54yIJT0KV74AAIA/AAAAAAAAAIDNzEw/54yIJQAAgL4AAIA/AAAAAAAAAIDNzEw/SgyCJKkT0KUAAAAAAAAAAAAAgD9cj0I/SgyCJKkT0KUAAAAAAAAAAAAAgD/NzEw/UriePgAAAIAAAAAAAAAAAAAAgD9cj0I/CtcjPQAAAIAAAAAAAAAAAAAAgD9cj0I/CtejPQAAAIAAAAAAAAAAAAAAgD8K1yM9CtcjPQAAAIAAAAAAAAAAAAAAgD9cj0I/cD2KPgAAAIAAAAAAAAAAAAAAgD8K1yM9cD2KPgAAAIAAAAAAAAAAAAAAgD8K1yM9CtejPQAAAIAAAAAAAAAAAAAAgD8AAAAAUriePgAAAIAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAAIAAAAAAAAAAAAAAgD8K1yM9AAAAAAAAAIAAAAAAAAAAAAAAgD8K1yM9wvUoPj0KV74AAAAAAACAvwAAAIAK1yM9wvUoPpDC9bwAAAAAAACAvwAAAIBcj0I/wvUoPj0KV74AAAAAAACAvwAAAIAVrsc+wvUoPs3MTL0AAAAAAACAvwAAAICG69E+wvUoPs3MTL0AAAAAAACAvwAAAICG69E+wvUoPpDC9bwAAAAAAACAvwAAAIBcj0I/wvUoPpDC9bwAAAAAAACAvwAAAIAVrsc+wvUoPpDC9bwAAAAAAACAvwAAAICG69E+o3A9PpDC9bwAAAAAAACAPwAAAICG69E+o3A9Ps3MTL0AAAAAAACAPwAAAIBcj0I/o3A9PpDC9bwAAAAAAACAPwAAAIBcj0I/o3A9Pj0KV74AAAAAAACAPwAAAIAVrsc+o3A9Ps3MTL0AAAAAAACAPwAAAIAK1yM9o3A9Pj0KV74AAAAAAACAPwAAAIAVrsc+o3A9PpDC9bwAAAAAAACAPwAAAIAK1yM9o3A9PpDC9bwAAAAAAACAPwAAAIBcj0I/o3A9Pj0KV74AAAAAAAAAAAAAgD8K1yM9o3A9Pj0KV74AAAAAAAAAAAAAgD9cj0I/cD2KPj0KV74AAAAAAAAAAAAAgD8K1yM9cD2KPj0KV74AAAAAAAAAAAAAgD9cj0I/CtejPT0KV74AAAAAAAAAAAAAgD8K1yM9CtejPT0KV74AAAAAAAAAAAAAgD9cj0I/wvUoPj0KV74AAAAAAAAAAAAAgD8K1yM9wvUoPj0KV74AAAAAAAAAAAAAgD9cj0I/CtcjPT0KV74AAAAAAACAvwAAAIBcj0I/CtcjPQrXI70AAAAAAACAvwAAAIDNzEw/CtcjPT0KV74AAAAAAACAvwAAAIDNzEw/CtcjPQrXI70AAAAAAACAvwAAAIBcj0I/CtcjPQAAAIAAAAAAAACAvwAAAIBcj0I/CtcjPQAAgL4AAAAAAACAvwAAAIAK1yM9CtcjPQAAAIAAAAAAAACAvwAAAIAK1yM9CtcjPQrXI70AAAAAAACAvwAAAIAK1yM9CtcjPT0KV74AAAAAAACAvwAAAIAK1yM9CtcjPQAAgL4AAAAAAACAvwAAAIAAAAAACtcjPQrXI70AAAAAAACAvwAAAIAAAAAACtcjPT0KV74AAAAAAACAvwAAAIBcj0I/CtcjPQAAAIAAAIC/AAAAAAAAAIBcj0I/SgyCJKkT0KUAAIC/AAAAAAAAAIBcj0I/CtcjPQrXI70AAIC/AAAAAAAAAIBcj0I/SgyCJArXI70AAIC/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAAAAAAAAAAAAgL+G69E+o3A9PpDC9bwAAAAAAAAAAAAAgL8Vrsc+cD2KPpDC9bwAAAAAAAAAAAAAgL+G69E+cD2KPpDC9bwAAAAAAAAAAAAAgL9cj0I/o3A9PpDC9bwAAAAAAAAAAAAAgL8K1yM9o3A9PpDC9bwAAAAAAAAAAAAAgL9cj0I/wvUoPpDC9bwAAAAAAAAAAAAAgL+G69E+wvUoPpDC9bwAAAAAAAAAAAAAgL8Vrsc+wvUoPpDC9bwAAAAAAAAAAAAAgL8K1yM9wvUoPpDC9bwAAAAAAAAAAAAAgL8Vrsc+CtejPZDC9bwAAAAAAAAAAAAAgL+G69E+CtejPZDC9bwAAAAAAAAAAAAAgL8Vrsc+cD2KPpDC9bwAAAAAAAAAAAAAgD+G69E+o3A9PpDC9bwAAAAAAAAAAAAAgD8Vrsc+o3A9PpDC9bwAAAAAAAAAAAAAgD+G69E+cD2KPpDC9bwAAAAAAAAAAAAAgD9cj0I/o3A9PpDC9bwAAAAAAAAAAAAAgD8K1yM9o3A9PpDC9bwAAAAAAAAAAAAAgD9cj0I/wvUoPpDC9bwAAAAAAAAAAAAAgD+G69E+wvUoPpDC9bwAAAAAAAAAAAAAgD8Vrsc+wvUoPpDC9bwAAAAAAAAAAAAAgD8K1yM9wvUoPpDC9bwAAAAAAAAAAAAAgD8Vrsc+CtejPZDC9bwAAAAAAAAAAAAAgD+G69E+CtejPZDC9bwAAAAAAAAAAAAAgD8K1yM9cD2KPgAAAIAAAIA/AAAAAAAAAIAK1yM9wvUoPpDC9bwAAIA/AAAAAAAAAIAK1yM9CtejPQAAAIAAAIA/AAAAAAAAAIAK1yM9CtejPT0KV74AAIA/AAAAAAAAAIAK1yM9wvUoPj0KV74AAIA/AAAAAAAAAIAK1yM9o3A9PpDC9bwAAIA/AAAAAAAAAIAK1yM9cD2KPj0KV74AAIA/AAAAAAAAAIAK1yM9o3A9Pj0KV74AAIA/AAAAAAAAAIBcj0I/CtejPQAAAIAAAIC/AAAAAAAAAIBcj0I/o3A9PpDC9bwAAIC/AAAAAAAAAIBcj0I/cD2KPgAAAIAAAIC/AAAAAAAAAIBcj0I/cD2KPj0KV74AAIC/AAAAAAAAAIBcj0I/o3A9Pj0KV74AAIC/AAAAAAAAAIBcj0I/wvUoPpDC9bwAAIC/AAAAAAAAAIBcj0I/CtejPT0KV74AAIC/AAAAAAAAAIBcj0I/wvUoPj0KV74AAIC/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAAAAAAAAAAAAgL+G69E+o3A9Ps3MTL0AAAAAAAAAAAAAgL8Vrsc+cD2KPs3MTL0AAAAAAAAAAAAAgL+G69E+cD2KPs3MTL0AAAAAAAAAAAAAgL8Vrsc+cD2KPs3MTL0AAAAAAAAAAAAAgD+G69E+o3A9Ps3MTL0AAAAAAAAAAAAAgD8Vrsc+o3A9Ps3MTL0AAAAAAAAAAAAAgD+G69E+cD2KPs3MTL0AAAAAAAAAAAAAgD+G69E+o3A9PpDC9bwAAIA/AAAAAAAAAICG69E+cD2KPpDC9bwAAIA/AAAAAAAAAICG69E+o3A9Ps3MTL0AAIA/AAAAAAAAAICG69E+cD2KPs3MTL0AAIA/AAAAAAAAAICG69E+o3A9Ps3MTL0AAIC/AAAAAAAAAICG69E+cD2KPpDC9bwAAIC/AAAAAAAAAICG69E+o3A9PpDC9bwAAIC/AAAAAAAAAICG69E+cD2KPs3MTL0AAIC/AAAAAAAAAIAVrsc+cD2KPpDC9bwAAIC/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAIC/AAAAAAAAAIAVrsc+cD2KPs3MTL0AAIC/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAIC/AAAAAAAAAIAVrsc+cD2KPs3MTL0AAIA/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAIA/AAAAAAAAAIAVrsc+cD2KPpDC9bwAAIA/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAAAAAAAAAAAAgL+G69E+wvUoPs3MTL0AAAAAAAAAAAAAgL8Vrsc+CtejPc3MTL0AAAAAAAAAAAAAgL8Vrsc+wvUoPs3MTL0AAAAAAAAAAAAAgL8Vrsc+CtejPc3MTL0AAAAAAAAAAAAAgD+G69E+wvUoPs3MTL0AAAAAAAAAAAAAgD+G69E+CtejPc3MTL0AAAAAAAAAAAAAgD8Vrsc+wvUoPs3MTL0AAAAAAAAAAAAAgD8Vrsc+wvUoPpDC9bwAAIC/AAAAAAAAAIAVrsc+CtejPZDC9bwAAIC/AAAAAAAAAIAVrsc+wvUoPs3MTL0AAIC/AAAAAAAAAIAVrsc+CtejPc3MTL0AAIC/AAAAAAAAAIAVrsc+wvUoPs3MTL0AAIA/AAAAAAAAAIAVrsc+CtejPZDC9bwAAIA/AAAAAAAAAIAVrsc+wvUoPpDC9bwAAIA/AAAAAAAAAIAVrsc+CtejPc3MTL0AAIA/AAAAAAAAAICG69E+CtejPZDC9bwAAIA/AAAAAAAAAICG69E+wvUoPpDC9bwAAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAIA/AAAAAAAAAICG69E+wvUoPs3MTL0AAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAIC/AAAAAAAAAICG69E+wvUoPpDC9bwAAIC/AAAAAAAAAICG69E+CtejPZDC9bwAAIC/AAAAAAAAAICG69E+wvUoPs3MTL0AAIC/AAAAAAAAAIACAAAAAQAAAAAAAAABAAAAAgAAAAMAAAAGAAAABQAAAAQAAAAFAAAABgAAAAcAAAAKAAAACQAAAAgAAAAJAAAACgAAAAsAAAAOAAAADQAAAAwAAAANAAAADgAAAA8AAAASAAAAEQAAABAAAAARAAAAEgAAABMAAAAWAAAAFQAAABQAAAAVAAAAFgAAABcAAAAXAAAAFgAAABgAAAAYAAAAFgAAABkAAAAaAAAAFQAAABcAAAAVAAAAGgAAABsAAAAbAAAAGgAAABkAAAAbAAAAGQAAABYAAAAeAAAAHQAAABwAAAAdAAAAHgAAAB8AAAAdAAAAHwAAACAAAAAgAAAAHwAAACEAAAAiAAAAHAAAAB0AAAAcAAAAIgAAACMAAAAjAAAAIgAAACEAAAAjAAAAIQAAAB8AAAAmAAAAJQAAACQAAAAlAAAAJgAAACcAAAAqAAAAKQAAACgAAAApAAAAKgAAACsAAAAuAAAALQAAACwAAAAtAAAALgAAAC8AAAAyAAAAMQAAADAAAAAxAAAAMgAAADMAAAA2AAAANQAAADQAAAA1AAAANgAAADcAAAA6AAAAOQAAADgAAAA5AAAAOgAAADsAAAA+AAAAPQAAADwAAAA9AAAAPgAAAD8AAABCAAAAQQAAAEAAAABBAAAAQgAAAEMAAABDAAAAQgAAAEQAAABEAAAAQgAAAEUAAABFAAAAQgAAAEYAAABHAAAAQQAAAEMAAABKAAAASQAAAEgAAABJAAAASgAAAEsAAABLAAAASgAAAEwAAABNAAAATAAAAEoAAABOAAAATAAAAE0AAABMAAAATgAAAE8AAABSAAAAUQAAAFAAAABTAAAAUAAAAFEAAABQAAAAUwAAAFQAAABTAAAAUQAAAFUAAABTAAAAVQAAAFYAAABTAAAAVgAAAFcAAABaAAAAWQAAAFgAAABZAAAAWgAAAFsAAABbAAAAWgAAAFwAAABbAAAAXAAAAF0AAABcAAAAWgAAAF4AAABeAAAAWgAAAF8AAABgAAAAXQAAAFwAAABhAAAAXQAAAGAAAABhAAAAYAAAAF8AAABhAAAAXwAAAFoAAABiAAAAXQAAAGEAAABdAAAAYgAAAGMAAABmAAAAZQAAAGQAAABlAAAAZgAAAGcAAABnAAAAZgAAAGgAAABoAAAAZgAAAGkAAABpAAAAZgAAAGoAAABrAAAAZQAAAGcAAABuAAAAbQAAAGwAAABvAAAAbQAAAG4AAABvAAAAcAAAAG0AAABxAAAAcAAAAG8AAABxAAAAcgAAAHAAAAByAAAAcQAAAHMAAAB2AAAAdQAAAHQAAAB1AAAAdgAAAHcAAAB6AAAAeQAAAHgAAAB5AAAAegAAAHsAAAB+AAAAfQAAAHwAAAB9AAAAfgAAAH8AAACAAAAAfAAAAH0AAACAAAAAgQAAAHwAAACCAAAAgQAAAIAAAACDAAAAgQAAAIIAAACEAAAAgQAAAIMAAACBAAAAhAAAAIUAAACGAAAAhAAAAIMAAACEAAAAhgAAAIcAAACKAAAAiQAAAIgAAACJAAAAigAAAIsAAACOAAAAjQAAAIwAAACNAAAAjgAAAI8AAACQAAAAjAAAAI0AAACQAAAAkQAAAIwAAACSAAAAkQAAAJAAAACTAAAAkQAAAJIAAACUAAAAkQAAAJMAAACRAAAAlAAAAJUAAACTAAAAlgAAAJQAAACWAAAAkwAAAJcAAACaAAAAmQAAAJgAAACbAAAAmAAAAJkAAACZAAAAmgAAAJwAAACaAAAAnQAAAJwAAACcAAAAnQAAAJ4AAACeAAAAnQAAAJ8AAACfAAAAnQAAAKAAAAChAAAAoAAAAJ0AAACgAAAAogAAAJ8AAACjAAAAnwAAAKIAAACmAAAApQAAAKQAAAClAAAApgAAAKcAAAClAAAApwAAAKgAAACpAAAApAAAAKUAAACkAAAAqQAAAKoAAACqAAAAqQAAAKsAAACuAAAArQAAAKwAAACtAAAArgAAAK8AAACtAAAArwAAALAAAACxAAAArAAAAK0AAACsAAAAsQAAALIAAACyAAAAsQAAALMAAAC2AAAAtQAAALQAAAC1AAAAtgAAALcAAAC6AAAAuQAAALgAAAC7AAAAuAAAALkAAAC+AAAAvQAAALwAAAC9AAAAvgAAAL8AAADCAAAAwQAAAMAAAADDAAAAwAAAAMEAAADGAAAAxQAAAMQAAADFAAAAxgAAAMcAAADKAAAAyQAAAMgAAADLAAAAyAAAAMkAAADOAAAAzQAAAMwAAADNAAAAzgAAAM8AAADSAAAA0QAAANAAAADTAAAA0AAAANEAAADWAAAA1QAAANQAAADVAAAA1gAAANcAAADaAAAA2QAAANgAAADbAAAA2AAAANkAAADeAAAA3QAAANwAAADdAAAA3gAAAN8AAADiAAAA4QAAAOAAAADjAAAA4AAAAOEAAAA="}});function dv(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function Lp(){let i=new wc;return Promise.all(Object.entries(Cp).map(([e,t])=>new Promise(n=>{try{i.parse(dv(t),"",s=>{s.scene.traverse(r=>{if(r.isMesh){r.castShadow=r.receiveShadow=!0;for(let o of[].concat(r.material))o.map&&(o.map.colorSpace=yt),o.roughness=Math.max(o.roughness??1,.55),o.metalness=Math.min(o.metalness??0,.2)}}),Pp.set(e,s),n()},s=>{console.warn("model",e,s),n()})}catch(s){console.warn("model",e,s),n()}})))}function Dp(i,{w:e,h:t,d:n,stretch:s=!1,turn:r=0,colors:o}={}){let a=Pp.get(i),c=new at;if(c.name=i,!a)return c;let l=a.animations.length?wp(a.scene):a.scene.clone(!0);l.rotation.y=r,l.updateMatrixWorld(!0);let h=new Pt().setFromObject(l),u=h.getSize(new T),f,m,A;if(s){let p=t?t/u.y:e?e/u.x:n/u.z;f=e?e/u.x:p,m=t?t/u.y:p,A=n?n/u.z:p}else f=m=A=t?t/u.y:e?e/u.x:n?n/u.z:1;let x=new at;return x.add(l),x.scale.set(f,m,A),x.position.set(-(h.min.x+u.x/2)*f,-h.min.y*m,-(h.min.z+u.z/2)*A),c.add(x),o&&pv(c,o),c.userData.size=new T(u.x*f,u.y*m,u.z*A),c}function pv(i,e){let t=new Map;i.traverse(n=>{n.isMesh&&(n.material=[].concat(n.material).map(s=>{if(!(s.name in e))return s;if(!t.has(s)){let r=s.clone();r.color.set(e[s.name]),t.set(s,r)}return t.get(s)}),n.material.length===1&&(n.material=n.material[0]))})}function Np(i,e,t,n,s=0,r=0){return e.position.set(t,r,n),e.rotation.y=s,i.add(e),e}var Pp,_u=wt(()=>{Vn();Sp();Rp();Ip();Pp=new Map});function ii(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Yo.copy(e),Yo[n]=0,Yo.normalize();let l=.5*o/(o+a),h=1-Yo.angleTo(i)/c;return Math.sign(Yo[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Yo,Ii,Up=wt(()=>{Vn();Yo=new T;Ii=class extends $n{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new T,c=new T,l=new T(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=h.length/6,A=new T,x=.5/s;for(let p=0,d=0;p<h.length;p+=3,d+=2)switch(a.fromArray(h,p),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[p+0]=l.x*Math.sign(a.x)+c.x*r,h[p+1]=l.y*Math.sign(a.y)+c.y*r,h[p+2]=l.z*Math.sign(a.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:A.set(1,0,0),f[d+0]=ii(A,c,"z","y",r,n),f[d+1]=1-ii(A,c,"y","z",r,t);break;case 1:A.set(-1,0,0),f[d+0]=1-ii(A,c,"z","y",r,n),f[d+1]=1-ii(A,c,"y","z",r,t);break;case 2:A.set(0,1,0),f[d+0]=1-ii(A,c,"x","z",r,e),f[d+1]=ii(A,c,"z","x",r,n);break;case 3:A.set(0,-1,0),f[d+0]=1-ii(A,c,"x","z",r,e),f[d+1]=1-ii(A,c,"z","x",r,n);break;case 4:A.set(0,0,1),f[d+0]=1-ii(A,c,"x","y",r,e),f[d+1]=1-ii(A,c,"y","x",r,t);break;case 5:A.set(0,0,-1),f[d+0]=ii(A,c,"x","y",r,e),f[d+1]=1-ii(A,c,"y","x",r,t);break}}}});function si(i=1){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Op(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function ri(i,e=[1,1]){let t=new gs(i);return t.colorSpace=yt,t.wrapS=t.wrapT=di,t.repeat.set(...e),t.anisotropy=8,t}function Fp(){let[i,e]=Op(128,128);e.font='bold 110px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=12,e.strokeStyle="#1d3557",e.strokeText("Z",64,68),e.fillStyle="#fff3b0",e.fillText("Z",64,68);let t=ri(i);return t.wrapS=t.wrapT=dn,t}var Rc,Cc=wt(()=>{Vn();Rc=class{constructor(){[this.c,this.g]=Op(256,192),this.texture=ri(this.c),this.texture.wrapS=this.texture.wrapT=dn,this.t=0,this.flash=0}update(e){let t=this.g,n=this.t+=e,s=256,r=192;t.fillStyle="#10163a",t.fillRect(0,0,s,r),t.fillStyle="#fff";for(let l=0;l<30;l++)t.fillRect((l*53-n*8)%s+(l*53-n*8<0?s:0),l*37%110,2,2);t.fillStyle="#2f855a",t.fillRect(0,150,s,42),t.fillStyle="#8b5a2b";for(let l=-(n*60%32);l<s;l+=32)t.fillRect(l,150,30,6);let o=s-n*60%(s+40);t.fillStyle="#d69e2e",t.fillRect(o,126,24,24),t.fillStyle="#744210",t.fillRect(o+9,133,6,8);let a=o-70,c=a>0&&a<70?Math.sin(a/70*Math.PI)*52:0;t.fillStyle="#e53e3e",t.fillRect(64,122-c,20,10),t.fillStyle="#f6c89f",t.fillRect(66,132-c,16,8),t.fillStyle="#3182ce",t.fillRect(64,140-c,20,10),t.fillStyle="#f6e05e",t.font='bold 14px "Courier New", monospace',t.fillText(`SCORE ${String(Math.floor(n*10)*10).padStart(6,"0")}`,8,18),this.flash>0&&(this.flash-=e,t.fillStyle=`rgba(255,255,255,${Math.min(1,this.flash*2)})`,t.fillRect(0,0,s,r),t.fillStyle="#e53e3e",t.font='bold 48px "Courier New", monospace',t.textAlign="center",t.fillText("HI!",s/2,r/2+16),t.textAlign="left"),t.fillStyle="rgba(0,0,0,0.18)";for(let l=0;l<r;l+=3)t.fillRect(0,l,s,1);this.texture.needsUpdate=!0}}});var Ic,kp=wt(()=>{Ic={"Post 1":{x:-3.2,z:.4,ry:0,gone:!0},"Post 2":{x:.293,z:.4,ry:0},"Post 3":{x:2,z:.4,ry:0,gone:!0},"Window (west)":{x:3.309,z:-3.59,ry:0},"Window (over the hoop)":{x:-3.932,z:-3.566,ry:.0664},Clock:{x:.687,z:-3.57,ry:0},"Play mat":{x:4.395,z:-.755,ry:-1.5782},Couch:{x:1.992,z:-2.42,ry:1.5708},Armchair:{x:2.768,z:-.45,ry:2.5597},Ottoman:{x:3.319,z:-1.158,ry:-.6523},"Basketball hoop":{x:-4.93,z:-3.29,ry:.7854},"Toy house":{x:-4.914,z:-1.7,ry:1.5708},"Red ride-on toy":{x:-3.166,z:-2.017,ry:.6},"Kids' table":{x:4.88,z:2.128,ry:-1.5708},"Braided rug":{x:4.239,z:3.573,ry:.2472},"Totes + pillows":{x:2.1,z:4.64,ry:0},"Bean bag":{x:3.122,z:4.61,ry:0},Fridge:{x:1.2,z:4.36,ry:0},"Black shelves":{x:.554,z:4.434,ry:1.588},"Post 4":{x:-.661,z:3.857,ry:0},"Dining table + chairs":{x:-1.494,z:1.047,ry:-1.5738},"Water cooler":{x:-3.313,z:3.72,ry:0},"Laundry sink":{x:-8.371,z:2.083,ry:4.7146},"Paper towel rack":{x:-8.4,z:2.1,ry:1.5708,gone:!0},Furnace:{x:-5.993,z:2.245,ry:0}}});function Qi(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Bp(){let[i,e]=Qi(1024,512),t=si(4),n=256,s=128;e.fillStyle="#efeadf",e.fillRect(0,0,1024,512);for(let r=0;r<4;r++)for(let o=-1;o<5;o++){let a=o*n+r%2*n/2,c=r*s,l=236+Math.floor(t()*10);e.fillStyle=`rgb(${l},${l-4},${l-14})`,e.fillRect(a+4,c+4,n-8,s-8);for(let h=0;h<60;h++)e.fillStyle=`rgba(150,140,120,${t()*.12})`,e.fillRect(a+t()*n,c+t()*s,3,3)}e.strokeStyle="rgba(160,150,130,0.55)",e.lineWidth=6;for(let r=0;r<=4;r++)e.beginPath(),e.moveTo(0,r*s),e.lineTo(1024,r*s),e.stroke();for(let r=0;r<4;r++)for(let o=0;o<=4;o++){let a=o*n+r%2*n/2;e.beginPath(),e.moveTo(a,r*s),e.lineTo(a,r*s+s),e.stroke()}return ri(i)}function zp(){let[i,e]=Qi(512,512),t=256;e.fillStyle="#ece6da",e.fillRect(0,0,512,512),e.strokeStyle="rgba(170,160,145,0.28)",e.lineWidth=2;for(let n=0;n<2;n++)for(let s=0;s<2;s++){let r=n*t,o=s*t;e.beginPath();for(let a=0;a<=8;a++){let c=r+a*t/8;e.lineTo(c,o+(a%2?4:-4))}e.stroke(),e.beginPath();for(let a=0;a<=8;a++){let c=o+a*t/8;e.lineTo(r+(a%2?4:-4),c)}e.stroke()}for(let n=0,s=si(8);n<900;n++)e.fillStyle=`rgba(120,110,95,${s()*.06})`,e.fillRect(s()*512,s()*512,2,2);return ri(i)}function Hp(){let[i,e]=Qi(512,512),t=256;e.fillStyle="#5a4a3a",e.beginPath(),e.arc(t,t,t,0,7),e.fill(),e.fillStyle="#e9e1cf",e.beginPath(),e.arc(t,t,t-16,0,7),e.fill(),e.fillStyle="#2c2a2a",e.beginPath(),e.arc(t,t,110,0,7),e.fill(),e.fillStyle="#e9e1cf",e.font="bold 34px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText("OLD TOWN",t,t-12),e.font="20px Georgia, serif",e.fillText("CLOCK CO.",t,t+24);let n=["#9a4b3a","#4d6a7a","#a88b4a","#6b7a5a"];for(let s=1;s<=12;s++){let r=s/12*Math.PI*2-Math.PI/2,o=t+Math.cos(r)*180,a=t+Math.sin(r)*180;e.fillStyle=n[s%4],e.beginPath(),e.arc(o,a,40,0,7),e.fill(),e.fillStyle="#efe7d6",e.beginPath(),e.arc(o,a,31,0,7),e.fill(),e.fillStyle="#2c2a2a",e.font="bold 36px Georgia, serif",e.fillText(String(s),o,a+2)}return Kr(ri(i))}function Gp(){let[i,e]=Qi(1024,683),t=1024,n=683,s=si(5);e.fillStyle="#7cc46a",e.fillRect(0,0,t,n),e.fillStyle="#bfe6f7",e.fillRect(70,70,t-140,n*.55),["#e53e3e","#f6ad55","#f6e05e","#68d391","#4299e1","#805ad5"].forEach((l,h)=>{e.strokeStyle=l,e.lineWidth=26,e.beginPath(),e.arc(t*.55,n*.62,300-h*26,Math.PI,0),e.stroke()});for(let[l,h]of[[300,180],[760,150],[520,120]]){e.fillStyle="#fff";for(let u of[0,30,60])e.beginPath(),e.arc(l+u,h,26,0,7),e.fill()}for(let l=0;l<30;l++)e.fillStyle=["#f687b3","#f6e05e","#fff"][l%3],e.beginPath(),e.arc(80+s()*(t-160),n*.7+s()*120,9,0,7),e.fill();let r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",o=["#e53e3e","#dd6b20","#d69e2e","#38a169","#3182ce","#805ad5","#d53f8c"];e.font='bold 50px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle";let a=(l,h,u)=>{e.fillStyle=o[u%7],e.fillRect(l,h,66,66),e.fillStyle="#fff",e.fillText(r[u%26],l+33,h+36)},c=0;for(let l=0;l<t;l+=68)a(l,0,c++);for(let l=68;l<n-68;l+=68)a(t-68,l,c++);for(let l=t-68;l>=0;l-=68)a(l,n-68,c++);for(let l=n-136;l>=68;l-=68)a(0,l,c++);return Kr(ri(i))}function Vp(i){let[e,t]=Qi(320,400),n=t.createLinearGradient(0,0,0,400);n.addColorStop(0,i?"#d8cfe0":"#d9d2c4"),n.addColorStop(1,i?"#b8aec8":"#a89a86"),t.fillStyle=n,t.fillRect(0,0,320,400),t.fillStyle=i?"#f3d9cf":"#f0d5c2",t.beginPath(),t.ellipse(160,215,105,120,0,0,7),t.fill(),t.fillStyle="#e8b7a8";for(let s of[95,225])t.beginPath(),t.arc(s,250,22,0,7),t.fill();t.strokeStyle="#5a4034",t.lineWidth=5,t.lineCap="round";for(let s of[118,202])t.beginPath(),t.arc(s,205,16,.2,Math.PI-.2),t.stroke();return t.beginPath(),t.arc(160,285,14,.3,Math.PI-.3),t.stroke(),i?(t.fillStyle="#9b7fc8",t.fillRect(55,110,210,34),t.beginPath(),t.ellipse(115,95,70,45,-.4,0,7),t.fill(),t.beginPath(),t.ellipse(205,95,70,45,.4,0,7),t.fill(),t.fillStyle="#7d5fb0",t.beginPath(),t.arc(160,108,26,0,7),t.fill()):(t.fillStyle="#6b5442",t.beginPath(),t.ellipse(160,110,95,30,0,Math.PI,0),t.fill()),t.fillStyle="#f4f1ea",t.fillRect(40,340,240,60),Kr(ri(e))}function Wp(){let[i,e]=Qi(256,512),t=si(12);e.fillStyle="#f2f1ec",e.fillRect(0,0,256,512);for(let n=0;n<9;n++)e.fillStyle=["#fff","#fefcbf","#e9d8fd"][n%3],e.save(),e.translate(30+t()*190,30+t()*170),e.rotate((t()-.5)*.4),e.fillRect(-28,-34,56,68),e.strokeStyle=["#e53e3e","#3182ce","#38a169"][n%3],e.lineWidth=3,e.beginPath(),e.arc(0,-4,14,0,7),e.stroke(),e.restore();for(let n=0;n<14;n++){let s=30+t()*200,r=40+t()*300,o=["#e53e3e","#f6ad55","#38a169","#805ad5","#d53f8c","#3182ce"][n%6];e.fillStyle=o;for(let a=0;a<6;a++)e.beginPath(),e.arc(s+Math.cos(a)*11,r+Math.sin(a)*11,8,0,7),e.fill();e.fillStyle="#f6e05e",e.beginPath(),e.arc(s,r,7,0,7),e.fill()}return e.fillStyle="#c9c7c0",e.fillRect(226,120,10,160),Kr(ri(i))}function Xp(){let[i,e]=Qi(256,256);e.fillStyle="#f7f5f0",e.fillRect(0,0,256,256),e.fillStyle="rgba(110,110,120,0.35)";for(let t=0;t<256;t+=32)e.fillRect(0,t,256,3);return ri(i)}function qp(){let[i,e]=Qi(256,256),t=si(30);e.fillStyle="#1b1f2e",e.fillRect(0,0,256,256);for(let n=10;n<250;n+=9){let s=8+Math.floor(t()*4)*10;for(;s<230&&t()>.15;){let r=10+t()*40;e.fillStyle=["#c792ea","#82aaff","#c3e88d","#f78c6c","#d6deeb"][Math.floor(t()*5)],e.fillRect(s,n,r,4),s+=r+6}}return Kr(ri(i))}function Yp(i){let[e,t]=Qi(512,128);return t.fillStyle="rgba(29,53,87,0.85)",t.beginPath(),t.roundRect(4,4,504,120,28),t.fill(),t.fillStyle="#fff3b0",t.font="bold 84px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,256,68),Kr(ri(e))}var Kr,Kp=wt(()=>{Vn();Cc();Kr=i=>(i.wrapS=i.wrapT=dn,i)});function jp(i){var Mt;let e=(S,N={})=>new mi({color:S,roughness:.85,metalness:0,...N}),t=(S,N=2)=>new mi({color:S,emissive:S,emissiveIntensity:N});function n(S,N,D=0,X=0,z=0,te=i,{cast:ee=!0,receive:j=!0}={}){let le=new Ct(S,N);return le.position.set(D,X,z),le.castShadow=ee,le.receiveShadow=j,te.add(le),le}let s=(S,N,D,X,z,te,ee,j=i,le)=>n(new $n(S,N,D),X,z,te,ee,j,le),r=(S,N,D,X,z,te,ee,j=i,le)=>s(S,N,D,X,z,te+N/2,ee,j,le),o=si(21),a=[],c=[],l=(S,N,D,X,z)=>c.push({x0:S,x1:N,z0:D,z1:X,...z?{under:z}:{}});function h(S,{fly:N=!0,drive:D=!0,under:X}={}){S.updateMatrixWorld(!0);let z=new Pt().setFromObject(S);return z.isEmpty()||(N&&a.push({x0:z.min.x,x1:z.max.x,z0:z.min.z,z1:z.max.z,y1:z.max.y,...X?{under:X}:{}}),D&&l(z.min.x,z.max.x,z.min.z,z.max.z,X),D&&X&&u(S)),S}function u(S){S.updateMatrixWorld(!0),S.traverse(N=>{if(!N.isMesh)return;let D=new Pt().setFromObject(N);D.min.y<.02&&l(D.min.x,D.max.x,D.min.z,D.max.z)})}let f=[],m=new Set,A=(S,N)=>(f.push({id:f.length+1,name:S,at:N}),m.add(N),N);function x(S,N){let D=i.children.slice(N).filter(ee=>!m.has(ee)),X=new Pt;for(let ee of D)X.expandByObject(ee);let z=new at,te=X.isEmpty()?new T:X.getCenter(new T);z.position.set(te.x,0,te.z),i.add(z),z.updateMatrixWorld(!0);for(let ee of D)z.attach(ee);return A(S,z)}let p=(S,N,D=0,X=0)=>{let z=new at;return z.position.set(S,X,N),z.rotation.y=D,i.add(z),z},d=Ke-_t,y=An-mn,g=(mn+An)/2,_=Et+vu,w=zp();w.repeat.set(d/1.2,y/1.2),n(new Qt(d,y).rotateX(-Math.PI/2),e(16777215,{map:w,roughness:.95}),0,0,g,i,{cast:!1});let E=Bp(),I=S=>{let N=E.clone();return N.repeat.set(S/1.6,_/.8),N.needsUpdate=!0,e(16777215,{map:N,roughness:.9,side:Un})};function U(S,N,D,X){let z=Math.hypot(D-S,X-N),te=n(new Qt(z,_),I(z),(S+D)/2,_/2,(N+X)/2,i,{cast:!1});return te.rotation.y=Math.atan2(-(X-N),D-S),te}U(_t,mn,Ke,mn),U(Ke,mn,Ke,An),U(_t,jr.z0,_t,mn),U(_t,An,_t,jr.z1),U(Ke,An,kt,An),U(kt,An,kt,Zs.z0),U(kt,Zs.z0,_t,Zs.z0),l(_t-.05,_t+.05,mn,jr.z0),l(_t-.05,_t+.05,jr.z1,An),l(kt,_t+.05,mn,Zs.z0);let v=e(10514495,{roughness:.8}),R=e(9068342,{roughness:.9});for(let S=kt+.2;S<Ke;S+=.4)s(.045,vu,y-.02,v,S,Et+vu/2,g,i,{cast:!1});n(new Qt(Ke-kt,y).rotateX(Math.PI/2),R,(Ke+kt)/2,_+.004,g,i,{cast:!1});let B=e(15921386,{roughness:.6}),F=e(6120038,{roughness:.5,metalness:.3});s(Ke-kt-.02,Et-qt-.004,.2,B,(Ke+kt)/2,(qt+Et-.004)/2,Xt,i,{cast:!1}),s(Ke-kt-.02,.02,.22,e(3815994),(Ke+kt)/2,qt+.006,Xt,i,{cast:!1});for(let[S,N]of mv.entries()){let D=i.children.length;n(new st(.05,.05,qt,20),F,N,qt/2,Xt),s(.16,.012,.16,F,N,.006,Xt),s(.16,.012,.16,F,N,qt-.012,Xt),l(N-.06,N+.06,Xt-.06,Xt+.06),x(`Post ${S+1}`,D)}let Z=e(12896460,{roughness:.35,metalness:.6});n(new st(.09,.09,7.5,18).rotateZ(Math.PI/2),Z,-.8,Et-.1,Xt-.5,i,{cast:!1}),r(.4,.14,.3,Z,-1.7,Et-.16,Xt-.75,i,{cast:!1}),r(.36,.02,.26,e(16053488),-1.7,Et-.17,Xt-.75,i,{cast:!1}),n(new st(.035,.035,y,12).rotateX(Math.PI/2),B,3.6,Et-.05,g,i,{cast:!1});let P=t(16054527,1.6),k=e(15921386,{roughness:.6});function Y(S,N,D){let X=p(S,N,D);n(new Qt(.78,.36),P,0,2.05,.02,X,{cast:!1,receive:!1});for(let[te,ee,j,le]of[[.88,.05,0,2.25],[.88,.05,0,1.85],[.05,.4,-.42,2.05],[.05,.4,.42,2.05]])s(te,ee,.06,k,j,le,.03,X,{cast:!1});s(.9,.03,.18,k,0,1.83,.09,X,{cast:!1});let z=new Ci(14674687,2.5,5,1.6);return z.position.set(0,1.9,.5),X.add(z),X}A("Window (west)",Y(.8,mn+.01,0)),A("Window (over the hoop)",Y(_t+.01,-2.9,Math.PI/2)),A("Window (over the washer)",Y(kt+.01,3.4,Math.PI/2)),i.add(new xc(16774370,10128504,1.3));let Q=new Xr(16773340,1.6);Q.position.set(1.5,8,2.5),Q.target.position.set(0,0,0),i.add(Q,Q.target),Object.assign(Q.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:16}),Q.castShadow=!0,Q.shadow.mapSize.set(2048,2048),Q.shadow.bias=-5e-4,Q.shadow.normalBias=.02;let J=e(16052712,{roughness:.4}),$=t(16773584,3);for(let[S,N]of[[-1.2,-1.6],[1.8,-1.2],[-2.2,1.3],[2.6,2.6],[-4,-1],[1.4,4.2]]){n(new st(.05,.06,.06,16),J,S,Et-.03,N,i,{cast:!1}),n(new Ot(.045,14,10),$,S,Et-.11,N,i,{cast:!1});let D=new Ci(16767392,4,6.5,1.5);D.position.set(S,Et-.2,N),i.add(D)}for(let[S,N]of[[-6.9,1.2],[-6.9,3.7]]){r(1.2,.06,.18,e(14211282),S,Et-.08,N,i,{cast:!1}),r(1.15,.025,.12,t(16317439,2.5),S,Et-.1,N,i,{cast:!1});let D=new Ci(15922943,3,6,1.4);D.position.set(S,Et-.25,N),i.add(D)}let ne=A("Clock",p(-1,mn+.03));n(new st(.33,.33,.04,40).rotateY(Math.PI/2).rotateX(Math.PI/2),[e(5917242),e(16777215,{map:Hp(),roughness:.7}),e(5917242)],0,1.68,0,ne,{cast:!1});let re=(S,N)=>{let D=new at;return D.position.set(0,1.68,.03),ne.add(D),s(N,S,.008,e(1710618),0,S/2-.03,0,D,{cast:!1}),D},_e=re(.16,.022),K=re(.24,.014),ie;{let S=A("Christmas tree",p(-.9,mn+.62)),N=e(2055994,{roughness:.9});n(new Vr(.6,32).rotateX(-Math.PI/2),e(11739178,{roughness:1}),0,.004,0,S,{cast:!1}),n(new st(.06,.07,.42,12),e(5913122),0,.21,0,S);let D=[[.58,.55,.3],[.47,.5,.65],[.36,.45,.98],[.24,.42,1.28]];for(let[j,le,he]of D)n(new Ti(j,le,18),N,0,he+le/2,0,S);let X=[15023678,16173326,3244750,13975436,15921386],z=[];for(let[j,[le,he,Ge]]of D.entries())for(let je=0;je<9-j*2;je++){let ct=je/(9-j*2)*Math.PI*2+j,bt=.25+o()*.15,Yt=le*(1-bt)+.02;n(new Ot(.035,10,8),e(X[(je+j)%X.length],{roughness:.25,metalness:.3}),Math.sin(ct)*Yt,Ge+he*bt,Math.cos(ct)*Yt,S,{cast:!1});let b=Math.sin(ct+.5)*(Yt-.04),O=Math.cos(ct+.5)*(Yt-.04);z.push(n(new Ot(.014,6,4),t([16765803,16734810,8315009,7059711][je%4],3),b,Ge+he*(bt+.18),O,S,{cast:!1}))}n(new fc(.08),t(16767050,2.5),0,1.74,0,S,{cast:!1}).scale.set(1,1.3,.4);let ee=new Ci(16763255,1.6,2.5,1.6);ee.position.set(0,1.1,.55),S.add(ee),ie={bulbs:z,l:ee},h(S,{under:.3})}let xe=[4.5,-2.95],Re=-Math.PI/4,Ce=i.children.length;h(Np(i,Dp("tvCabinet",{w:1.35,h:.62,d:.55,stretch:!0,colors:{wood:5911584}}),...xe,Re));let Xe=new Rc,Ve=p(...xe,Re,.62);s(1.32,.78,.05,e(1118481,{roughness:.4}),0,.5,0,Ve),n(new Qt(1.26,.72),new pn({map:Xe.texture,toneMapped:!1}),0,.5,.027,Ve,{cast:!1}),s(.3,.03,.2,e(1118481),0,0,0,Ve),s(.06,.12,.04,e(1118481),0,.03,-.02,Ve),s(.4,.02,.12,e(15790320),.2,0,.18,Ve),h(Ve);let Be=new Ci(11570431,2.5,4,1.8);Be.position.set(3.9,1.1,-2.35),i.add(Be),x("TV + cabinet",Ce),A("Play mat",n(new Qt(2.3,1.55).rotateX(-Math.PI/2),e(16777215,{map:Gp(),roughness:1}),2.6,.006,-1.65,i,{cast:!1}));let ft=(S,N,D,X)=>{let z=A(S?"Portrait (purple bow)":"Portrait (boy)",p(N,D,X));s(.52,.64,.025,e(16777215,{roughness:.9}),0,1.15,.0125,z,{cast:!1}),n(new Qt(.5,.62),e(16777215,{map:Vp(S),roughness:.8}),0,1.47,.027,z,{cast:!1})};ft(!0,_t+.01,-1.3,Math.PI/2),ft(!1,Ke-.01,-2,-Math.PI/2);function W(S,N,D,X,z){let te=p(N,D,X),ee=e(z,{roughness:1}),j=e(new Pe(z).offsetHSL(0,0,.03),{roughness:1}),le=S*.66+.4,he=.95,Ge=(ct,bt,Yt,b,O,H,V)=>n(new Ii(ct,bt,Yt,3,Math.min(.06,bt/2-.001)),b,O,H+bt/2,V,te);Ge(le-.3,.3,he-.1,ee,0,.1,.02),Ge(le-.2,.5,.24,ee,0,.3,-he/2+.12);for(let ct of[-1,1])Ge(.22,.5,he,ee,ct*(le/2-.11),.1,0),n(new st(.13,.13,he,16).rotateX(Math.PI/2),ee,ct*(le/2-.1),.6,0,te);let je=(le-.44)/S;for(let ct=0;ct<S;ct++){let bt=-le/2+.22+je*(ct+.5);Ge(je-.02,.16,he-.3,j,bt,.4,.1);let Yt=Ge(je-.03,.42,.18,j,bt,.52,-he/2+.3);Yt.rotation.x=-.12}for(let ct of[-1,1])for(let bt of[-1,1])n(new st(.03,.025,.1,10),e(3023904),ct*(le/2-.12),.05,bt*(he/2-.12),te);return h(te,{under:.1})}A("Couch",W(3,-1.9,-2.42,Math.PI/2,8360358)),A("Armchair",W(1,.6,-.45,Math.PI,9083824));let Jt=A("Ottoman",p(.6,-1.48));n(new Ii(.82,.3,.6,3,.06),e(9083824,{roughness:1}),0,.27,0,Jt);for(let[S,N]of[[-.35,-.24],[.35,-.24],[-.35,.24],[.35,.24]])n(new st(.025,.02,.12,10),e(3023904),S,.06,N,Jt);r(.12,.06,.07,e(3711337,{roughness:.4}),.15,.42,-.02,Jt),h(Jt,{under:.12});{let S=A("Basketball hoop",p(-4.75,-3.15,Math.PI/4));n(new st(.18,.2,.08,20),e(1710618),0,.04,0,S),n(new st(.03,.03,1.1,12),e(2845872,{roughness:.4}),0,.6,0,S),r(.5,.36,.03,e(16053488,{roughness:.5}),0,1.05,-.02,S),n(new _n(.11,.012,8,24).rotateX(Math.PI/2),e(15023678),0,1.12,.13,S),h(S)}{let S=A("Toy house",p(-4.6,-1.7,Math.PI/2));r(.6,.35,.42,e(16179294,{roughness:.6}),0,0,0,S),n(new st(.01,.38,.22,4,1).rotateY(Math.PI/4),e(3244750,{roughness:.5}),0,.46,0,S).scale.set(1.15,1,.85),r(.12,.2,.02,e(15023678),0,0,.215,S),r(.12,.1,.02,e(10475775),.18,.15,.215,S),h(S)}{let S=A("Toy tote",p(-3.95,-3.2));r(.6,.32,.42,e(14674158,{transparent:!0,opacity:.55,roughness:.2}),0,0,0,S);for(let N=0;N<6;N++)r(.1+o()*.1,.1,.1,e([15023678,3711337,3244750,16179294][N%4]),(o()-.5)*.4,.02,(o()-.5)*.25,S);h(S)}{let S=A("Red ride-on toy",p(-3.6,-2.35,.6));r(.5,.2,.28,e(15023678,{roughness:.4}),0,.06,0,S),r(.18,.14,.22,e(15023678,{roughness:.4}),-.12,.26,0,S);for(let[N,D]of[[-.18,-.15],[.18,-.15],[-.18,.15],[.18,.15]])n(new st(.06,.06,.04,14).rotateX(Math.PI/2),e(1710618),N,.06,D,S);h(S)}{let S=A("Speaker cabinet",p(-2.75,-3.33));r(.42,.62,.4,e(2762018,{roughness:.6}),0,0,0,S),n(new st(.11,.11,.02,20).rotateX(Math.PI/2),e(7829367,{roughness:.4,metalness:.4}),0,.36,.205,S),r(.26,.08,.14,e(16173326,{roughness:.5}),0,.62,0,S),h(S)}{let S=A("Kids' table",p(4.72,1.1,-Math.PI/2)),N=e(7028514,{roughness:.6});r(.75,.03,.55,N,0,.5,0,S);for(let[D,X]of[[-.33,-.23],[.33,-.23],[-.33,.23],[.33,.23]])r(.04,.5,.04,N,D,0,X,S);for(let D of[-1,1]){let X=p(0,0);S.add(X),X.position.set(D*.58,0,0),X.rotation.y=D*Math.PI/2,r(.28,.03,.28,N,0,.3,0,X);for(let[z,te]of[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]])r(.03,.3,.03,N,z,0,te,X);r(.28,.3,.03,N,0,.33,.13,X)}h(S,{under:.3})}{let S=A("Standing desk",p(kt+13.05,An-.38,Math.PI));r(1.55,.035,.72,e(14207400,{roughness:.7}),0,.93,0,S);for(let X of[-.7,.7])r(.06,.93,.06,e(1710618),X,0,0,S),r(.06,.03,.6,e(1710618),X,0,0,S);r(.55,.6,.55,e(1842206,{roughness:.5}),.4,0,.05,S),r(.5,.3,.3,e(12922954,{roughness:.4}),-.3,0,.12,S);let N=new pn({map:qp(),toneMapped:!1}),D=(X,z,te)=>{let ee=p(0,0,0);S.add(ee),ee.position.set(te,.965,-.2),r(X,z,.03,e(1118481,{roughness:.4}),0,.12,0,ee),n(new Qt(X-.03,z-.03),N,0,.12+z/2,.016,ee,{cast:!1}),r(.04,.12,.04,e(1118481),0,0,0,ee)};D(.62,.38,-.2),D(.3,.52,.35),r(.32,.015,.22,e(6974064,{metalness:.5,roughness:.4}),-.25,.965,.12,S),n(new st(.08,.1,.04,16),e(1710618),-.6,.985,.15,S),n(new st(.018,.022,.22,10),e(1710618),-.6,1.1,.15,S),h(S,{under:.93})}{let S=A("Braided rug",n(new Vr(.6,40).rotateX(-Math.PI/2),e(8028057,{roughness:1}),3.8,.005,3.9,i,{cast:!1}));S.scale.set(1.25,1,.85);for(let[N,D]of[[.45,10127994],[.3,5922682],[.15,11575440]])n(new dc(N-.06,N,40).rotateX(-Math.PI/2),e(D,{roughness:1}),0,.001,0,S,{cast:!1})}{let S=A("Totes + pillows",p(2.3,4.68));r(.75,.42,.55,e(2763306,{roughness:.5}),0,0,0,S),r(.75,.04,.57,e(16179294),0,.42,0,S),r(.72,.36,.52,e(10474928,{roughness:.4}),0,.46,0,S),r(.72,.36,.52,e(12106944,{roughness:.4}),0,.82,0,S);for(let D=0;D<3;D++)n(new Ii(.62,.1,.42,3,.04),e(16448250,{roughness:1}),0,1.24+D*.09,(o()-.5)*.05,S);h(S);let N=n(new Ot(.32,20,14),e(16052974,{roughness:1}),3,.22,4.55);N.scale.set(1,.7,1),A("Bean bag",h(N))}{let S=A("Fridge",p(1.2,4.62));n(new Ii(.75,1.72,.7,3,.03),e(15921644,{roughness:.35}),0,.86,0,S),n(new Qt(.72,1.4),e(16777215,{map:Wp(),roughness:.4}),0,.9,-.352,S,{cast:!1}).rotation.y=Math.PI,h(S)}let Ne=(S,N,D,X,z)=>{let te=p(S,N,D),ee=e(1907997,{roughness:.5,metalness:.3}),j=si(z);for(let le of[-X/2+.02,X/2-.02])for(let he of[-.2,.2])r(.025,1.8,.025,ee,le,0,he,te);for(let le=0;le<5;le++){let he=.08+le*.42;if(r(X,.025,.44,ee,0,he,0,te),le<4)for(let Ge=-X/2+.16;Ge<X/2-.1;Ge+=.28)j()>.2&&r(.18+j()*.08,.12+j()*.18,.3,e([5231045,15023678,16179294,16777215,8411861,2829099,14510880][Math.floor(j()*7)],{roughness:.5}),Ge,he+.025,0,te)}return h(te)};A("Black shelves",Ne(-.2,4.75,0,.9,3)),n(new st(.05,.05,Et,14),B,-.72,Et/2,4.92);let Fe=((Mt=Ic["Post 4"])==null?void 0:Mt.z)??Pc;{let S=Fe;s(Ke-_t-.02,Et-qt-.004,.2,B,(Ke+_t)/2,(qt+Et-.004)/2,S,i,{cast:!1}),s(Ke-_t-.02,.02,.22,e(3815994),(Ke+_t)/2,qt+.006,S,i,{cast:!1})}A("Post 4",n(new st(.05,.05,qt,20),F,.75,qt/2,Pc)),l(.69,.81,Pc-.06,Pc+.06);let Se=i.children.length;{let S=e(12101260,{roughness:.8}),N=e(10133155,{roughness:.7}),D=oi,X=D.z1-D.z0,z=(D.z0+D.z1)/2;for(let he=0;he<D.n;he++){let Ge=D.x-he*D.run,je=Ge-D.run,ct=(he+1)*D.rise;r(D.run,ct,X,N,(je+Ge)/2,0,z),r(D.run+.01,.025,X,S,(je+Ge)/2,ct-.025,z,i,{cast:!1})}let te=D.x-D.n*D.run,ee=Math.atan(D.rise/D.run),j=Math.hypot(D.n*D.run,D.n*D.rise),le=n(new $n(j,.05,.05),e(9067051),(D.x+te)/2,.9+D.n*D.rise/2,D.z0-.03);le.rotation.z=-ee,r(.1,1,.1,N,D.x-.05,0,D.z0+.05),n(new Qt(.55,.95).rotateX(-Math.PI/2),e(15259848,{roughness:1}),D.x+.35,.006,z,i,{cast:!1}),l(te,D.x,D.z0,D.z1);for(let he=0;he<D.n&&(he+1)*D.rise<1;he++)a.push({x0:D.x-(he+1)*D.run,x1:D.x-he*D.run,z0:D.z0,z1:D.z1,y1:(he+1)*D.rise})}x("Stairs",Se);let Dt=i.children.length;{let S={x:-2.3,z:1.35,w:1.75,d:1,h:.76},N=e(11037490,{roughness:.6}),D=p(S.x,S.z);r(S.w,.04,S.d,N,0,S.h-.04,0,D),r(S.w+.06,.012,S.d+.06,e(16250350,{roughness:1}),0,S.h,0,D,{cast:!1});for(let z of[-.6,.6])r(.08,S.h-.04,.14,N,z,0,0,D),r(.12,.06,.8,N,z,0,0,D);r(1.2,.08,.06,N,0,.3,0,D),n(new st(.06,.05,.16,16),e(16777215,{roughness:.4}),.2,S.h+.09,.05,D);for(let z=0;z<7;z++)n(new Ot(.05,10,8),e([9417696,13163248,7246792][z%3]),.2+(o()-.5)*.16,S.h+.22+o()*.06,.05+(o()-.5)*.16,D);a.push({x0:S.x-S.w/2,x1:S.x+S.w/2,z0:S.z-S.d/2,z1:S.z+S.d/2,y1:S.h,under:S.h-.05});for(let z of[-.6,.6])l(S.x+z-.06,S.x+z+.06,S.z-.4,S.z+.4);let X=(z,te,ee)=>{let j=p(z,te,ee);r(.44,.05,.44,N,0,.42,0,j),r(.4,.03,.4,e(14209732),0,.47,0,j);for(let[he,Ge]of[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]])r(.04,.42,.04,N,he,0,Ge,j);for(let he of[-.19,.19])r(.045,.6,.045,N,he,.47,-.2,j);for(let he=-2;he<=2;he++)r(.035,.48,.02,N,he*.07,.5,-.2,j);r(.44,.06,.04,N,0,1.03,-.2,j),j.updateMatrixWorld(!0);let le=new Pt().setFromObject(j);a.push({x0:le.min.x,x1:le.max.x,z0:le.min.z,z1:le.max.z,y1:.5,under:.4}),l(le.min.x+.04,le.max.x-.04,le.min.z+.04,le.max.z-.04,.4),u(j)};X(S.x-.4,S.z-.72,0),X(S.x+.4,S.z-.72,0),X(S.x,S.z+.75,Math.PI),X(S.x+1.15,S.z,-Math.PI/2),X(S.x-1.15,S.z,Math.PI/2)}x("Dining table + chairs",Dt);{let S=A("Water cooler",p(-2.2,3.6));r(.55,.32,.4,e(2236962,{roughness:.5}),0,0,0,S),r(.55,.06,.4,e(12922928),0,.32,0,S),r(.5,.28,.38,e(16053492,{roughness:.6}),0,.38,0,S);for(let N=0;N<5;N++)n(new Ot(.09,10,8),e([16179294,12031220,16777215,9132587][N%4],{roughness:1}),(o()-.5)*.35,.72,(o()-.5)*.2,S);n(new st(.16,.16,.4,20),e(15895592,{roughness:.4}),0,.96,0,S),n(new st(.17,.17,.05,20),e(16053492),0,1.18,0,S),h(S)}let nt=i.children.length;{let S=_t+.06,N=jr.z0,D=jr.curtain,X=D-N,z=new Qt(X,qt,40,1),te=z.attributes.position;for(let j=0;j<te.count;j++)te.setZ(j,Math.sin(te.getX(j)*22)*.04);z.computeVertexNormals();let ee=Xp();ee.repeat.set(1,qt/.5),n(z,e(16777215,{map:ee,roughness:1,side:Un}),S,qt/2+.02,(N+D)/2).rotation.y=Math.PI/2,n(new st(.012,.012,X+.1,8).rotateX(Math.PI/2),F,S,qt+.05,(N+D)/2,i,{cast:!1}),l(S-.05,S+.05,N,D),A("Pantry shelves 1",Ne(-6.15,Zs.z0+.25,0,1.8,9));{let j=A("Soap table",p(-7.85,Zs.z0+.33)),le=e(2829099,{roughness:.5}),he=si(17);r(1.4,.04,.6,e(15262940,{roughness:.6}),0,.72,0,j);for(let[je,ct]of[[-.65,-.25],[.65,-.25],[-.65,.25],[.65,.25]])r(.04,.72,.04,le,je,0,ct,j);let Ge=.76;for(let je=-.58;je<.6;je+=.17+he()*.05){let ct=he(),bt=(he()-.5)*.3,Yt=[15895592,2060241,3126138,9323693,15921906,14034984][Math.floor(he()*6)];ct<.45?(r(.14,.26,.1,e(Yt,{roughness:.35}),je,Ge,bt,j),r(.04,.08,.06,e(Yt,{roughness:.35}),je+.05,Ge+.2,bt,j),n(new st(.025,.025,.04,12),e(16179294,{roughness:.4}),je-.03,Ge+.28,bt,j)):ct<.8?(n(new st(.035,.04,.2,14),e(Yt,{roughness:.3}),je,Ge+.1,bt,j),n(new st(.012,.012,.05,8),e(16777215),je,Ge+.225,bt,j)):r(.14,.18,.08,e(16777215,{roughness:.5}),je,Ge,bt,j)}h(j,{under:.72})}}x("Curtain",nt);{let S=Zs,N=S.x1-S.x0,D=S.z1-S.z0;n(new Qt(N,D).rotateX(-Math.PI/2),e(9342860,{roughness:.35,metalness:.1}),(S.x0+S.x1)/2,.004,(S.z0+S.z1)/2,i,{cast:!1});let X=e(15921902,{roughness:.35});for(let[te,ee]of[[3.05,0],[3.78,1]]){let j=A(ee?"Washer":"Dryer",p(kt+.38,te,Math.PI/2));n(new Ii(.7,.92,.7,2,.02),X,0,.46,0,j),r(.7,.14,.1,X,0,.92,-.28,j),ee||n(new Vr(.18,24),e(10133670,{roughness:.3}),0,.5,.352,j),h(j)}n(new Qt(.8,1.6).rotateX(-Math.PI/2),e(7237230,{roughness:1}),kt+1.2,.008,3.4,i,{cast:!1});{let te=A("Laundry sink",p(-7.6,An-.3));r(.6,.35,.5,X,0,.55,0,te);for(let[ee,j]of[[-.25,-.2],[.25,-.2],[-.25,.2],[.25,.2]])r(.04,.55,.04,e(13619151),ee,0,j,te);h(te,{under:.55})}A("Paper towel rack",Ne(kt+.3,2.1,Math.PI/2,.6,14));let z=e(12106944,{roughness:.3,metalness:.6});{let te=A("Furnace",p(-6.6,2));r(.55,1.02,.72,e(9080208,{roughness:.5}),0,.13,0,te);for(let[ee,j]of[[-.24,-.32],[.24,-.32],[-.24,.32],[.24,.32]])r(.04,.13,.04,e(3815994),ee,0,j,te);r(.6,Et-1.155,.8,z,0,1.15,0,te),n(new st(.06,.06,Et-1,12),B,.15,1+(Et-1)/2,.45,te),h(te,{fly:!1,under:.13}),r(4.4,.28,.55,z,-6.6+2.2,Et-.285,1.6,i,{cast:!1})}}let C=[],M=new Ot(.016,6,4).scale(1,1.4,1),q=new pn({toneMapped:!1}),ae=[16765803,16734810,8315009,7059711,16748504].map(S=>new Pe(S)),oe=new uc(.04,0),ce=e(2055994,{roughness:.9,flatShading:!0}),Me=si(25),ye=new Ot(.016,6,4),be=new _n(.03,.011,6,12),Ie=e(13114922,{roughness:.55}),Ze=e(3114330,{roughness:.6}),se=e(2845872,{roughness:.6}),mt=S=>(S.raycast=()=>{},S);function Je(S,N,D,X,z=()=>{}){let te=D.reduce((le,he)=>le.add(he),new T).divideScalar(D.length),ee=new Hr(S,N,D.length),j=new Lt;return D.forEach((le,he)=>{j.position.copy(le).sub(te),j.rotation.set(0,0,0),j.scale.setScalar(1),z(j,he),j.updateMatrix(),ee.setMatrixAt(he,j.matrix)}),ee.position.copy(te),ee.castShadow=ee.receiveShadow=!1,X.add(ee),ee}let ze=(S,N=i,D=M)=>{let X=mt(Je(D,q,S,N));return S.forEach((z,te)=>X.setColorAt(te,ae[te%ae.length])),C.push({im:X,base:X.instanceColor.array.slice()}),X},Le=(S,N,D=i)=>Je(oe,ce,S,D,X=>{X.rotation.set(Me()*6,Me()*6,Me()*6),X.scale.setScalar(N/.04*(.8+Me()*.4))});function ve(S,N,D,X,z=1,te=Ie,ee=0){let j=new at;j.position.set(N,D,X),j.rotation.y=ee,j.scale.setScalar(z),S.add(j);for(let le of[-1,1]){let he=n(be,te,le*.032,.006,0,j,{cast:!1});he.scale.set(1,.7,.6),he.rotation.z=le*.35,s(.022,.07,.008,te,le*.02,-.04,0,j,{cast:!1}).rotation.z=le*.3}return s(.026,.026,.024,te,0,0,0,j,{cast:!1}),j}{let S=i.children.length,N=e(14065198,{roughness:.4,metalness:.3}),D=e(16052714,{roughness:.6}),X={gold:e(16173326,{roughness:.35,metalness:.4}),red:Ie,silver:e(14015459,{roughness:.3,metalness:.5}),green:e(3711337,{roughness:.4})};for(let[z,te,ee,j,le,he,Ge]of[[.36,.27,.3,-.82,-2.17,Ie,"gold"],[.24,.16,.24,-1.22,-2.2,Ze,"red"],[.18,.12,.18,-.47,-2.21,se,"silver"],[.22,.38,.22,-.13,-3.3,N,"red"],[.28,.2,.24,-.12,-2.84,D,"green"]])r(z,te,ee,he,j,0,le),r(z+.006,te+.004,.035,X[Ge],j,0,le,i,{cast:!1}),r(.035,te+.004,ee+.006,X[Ge],j,0,le,i,{cast:!1}),ve(i,j,te+.024,le,.8+z,X[Ge],Me()*3),a.push({x0:j-z/2,x1:j+z/2,z0:le-ee/2,z1:le+ee/2,y1:te}),l(j-z/2,j+z/2,le-ee/2,le+ee/2);x("Presents",S)}let qe=[-1.4,-.95,-.5,-.05],At=1.3;{let S=e(16250352,{roughness:1}),N=e(3805204,{roughness:1}),D=.8,X=1.1,z=D+.12;for(let[te,ee]of qe.entries()){let j=A(`Stocking ${te+1}`,p(Ke-.005,ee,-Math.PI/2)),le=[Ie,Ze,Ie,se][te];n(new Ii(.255,z-D+.05,.12,2,.03),le,.0425,(D+z+.05)/2,.075,j),n(new Ii(.17,X-z,.12,2,.02),le,0,(z+X)/2,.075,j),r(.15,.004,.1,N,0,X,.08,j,{cast:!1});for(let[he,Ge,je,ct]of[[.21,.025,0,.0125],[.21,.025,0,.1475],[.025,.11,-.0925,.08],[.025,.11,.0925,.08]])r(he,.1,Ge,S,je,X-.03,ct,j);r(.012,At-X-.07,.006,S,-.08,X+.07,.012,j,{cast:!1}),h(j,{drive:!1,under:z}),l(Ke-.14,Ke-.02,ee-.085,ee+.085,z)}}{let S=i.children.length,N=[-1.62,...qe.map(z=>z-.08),.17],D=[],X=[];for(let z=0;z<N.length-1;z++)for(let te=N[z];te<N[z+1];te+=.03){let ee=(te-N[z])/(N[z+1]-N[z]),j=At-.06*4*ee*(1-ee);D.push(new T(Ke-.04,j,te)),D.length%4===0&&X.push(new T(Ke-.075,j+(Me()-.5)*.04,te))}Le(D,.034),ze(X);for(let z of[N[0],N[N.length-1]])ve(i,Ke-.08,At-.02,z,1.5,Ie,-Math.PI/2);x("Stocking garland",S)}function Nt(S,N,D,X,z){let te=A(S,p(N,D,X)),ee=[],j=[],le=[];for(let he=0;he<28;he++){let Ge=he/28*Math.PI*2,je=he%2?.15:.19;ee.push(new T(Math.cos(Ge)*je,z+Math.sin(Ge)*je,.065))}for(let he=0;he<9;he++){let Ge=he/9*Math.PI*2+.3,je=.13+Me()*.08;j.push(new T(Math.cos(Ge)*je,z+Math.sin(Ge)*je,.11))}for(let he=0;he<10;he++){let Ge=he/10*Math.PI*2+.6;le.push(new T(Math.cos(Ge)*.17,z+Math.sin(Ge)*.17,.115))}return Le(ee,.055,te),Je(ye,Ie,j,te),ze(le,te),ve(te,0,z-.185,.12,1.7),te}Nt("Wreath (north)",Ke-.005,(qe[0]+qe[3])/2,-Math.PI/2,1.72),Nt("Wreath (west)",-2.75,mn+.005,0,1.5);{let S=oi,N=S.rise/S.run,D=S.z0-.03,X=[],z=[],te=new at;i.add(te);for(let ee=.03;.9+ee*N<1.95;ee+=.03){let j=S.x-ee,le=.9+ee*N;if(X.push(new T(j,le+(Me()-.5)*.02,D+(Me()-.5)*.03)),X.length%2===0){let he=ee*22;z.push(new T(j-Math.sin(he)*.04,le+Math.cos(he)*.05,D+Math.sin(he)*.05))}}Le(X,.04,te),ze(z,te),ve(te,S.x-.05,.86,S.z0-.006,1.8,Ie,Math.PI),f.find(ee=>ee.name==="Stairs").at.attach(te)}let $e=new at;i.add($e);for(let[S,N,D,X]of[["WEST",(kt+Ke)/2,mn-.7,0],["EAST",(kt+Ke)/2,An+.7,0],["NORTH",Ke+.85,g,-Math.PI/2],["SOUTH",kt-.85,g,Math.PI/2]])n(new Qt(1.6,.4),new pn({map:Yp(S),transparent:!0,toneMapped:!1}),N,0,D,$e,{cast:!1,receive:!1}).rotation.set(-Math.PI/2,0,X);let ue=new et,L=new T;for(let S of f)S.at.updateMatrixWorld(!0),S.home=new Pt().setFromObject(S.at).expandByScalar(.03),S.m0=S.at.matrixWorld.clone(),S.boxes=[];for(let S of[...c,...a]){let N=(S.x0+S.x1)/2,D=(S.z0+S.z1)/2,X=null,z=1/0;for(let te of f){let ee=te.home,j=(ee.max.x-ee.min.x)*(ee.max.z-ee.min.z);N>=ee.min.x&&N<=ee.max.x&&D>=ee.min.z&&D<=ee.max.z&&j<z&&(X=te,z=j)}X&&(ue.copy(X.m0).invert(),X.boxes.push({b:S,corners:[[S.x0,S.z0],[S.x1,S.z0],[S.x0,S.z1],[S.x1,S.z1]].map(([te,ee])=>L.set(te,0,ee).applyMatrix4(ue).clone())}))}function ge(S){if(S.at.updateMatrixWorld(!0),S.gone){for(let{b:N}of S.boxes)N.x0=N.x1=N.z0=N.z1=-1e4;return}for(let{b:N,corners:D}of S.boxes){let X=D.map(z=>L.copy(z).applyMatrix4(S.at.matrixWorld).clone());N.x0=Math.min(...X.map(z=>z.x)),N.x1=Math.max(...X.map(z=>z.x)),N.z0=Math.min(...X.map(z=>z.z)),N.z1=Math.max(...X.map(z=>z.z)),N.pts=[0,1,3,2].map(z=>[X[z].x,X[z].z])}}let Ae=S=>({x:+S.at.position.x.toFixed(3),z:+S.at.position.z.toFixed(3),ry:+S.at.rotation.y.toFixed(4),...S.gone?{gone:!0}:{}});function He(S,N){S.at.position.x=N.x,S.at.position.z=N.z,S.at.rotation.y=N.ry,S.gone=!!N.gone,S.at.visible=!S.gone,ge(S)}for(let S of f)S.start=Ae(S),Ic[S.name]&&He(S,Ic[S.name]);{let S=Et-.09,N=f.filter(j=>/^Window/.test(j.name)&&!j.gone).map(j=>new Pt().setFromObject(j.at).expandByScalar(.1));for(let j of[Xt,Fe])N.push(new Pt(new T(Ke-.25,0,j-.17),new T(Ke+1,_,j+.17)));let D=[[_t+.15,mn+.035,Ke-.15,mn+.035],[Ke-.035,mn+.15,Ke-.035,An-.15],[-2.25,An-.035,Ke-.15,An-.035],[_t+.25,Xt-.13,Ke-.2,Xt-.13],[_t+.25,Xt+.13,Ke-.2,Xt+.13],[_t+.25,Fe-.13,Ke-.2,Fe-.13],[-2.2,Fe+.13,Ke-.2,Fe+.13]],X=[],z=[],te=new T,ee=.05;for(let[j,le,he,Ge]of D){let je=Math.hypot(he-j,Ge-le),ct=(b,O)=>new T(j+(he-j)*b/je,O,le+(Ge-le)*b/je),bt=[],Yt=null;for(let b=0;b*ee<=je;b++)N.some(O=>O.containsPoint(te.copy(ct(b*ee,S))))?Yt=null:(Yt||bt.push(Yt=[]),Yt.push(b*ee));for(let b of bt){let O=b[0],H=b[b.length-1]-O,V=Math.max(1,Math.round(H/.8));if(H<.4)continue;let G=null;for(let me=0;O+me*ee<=O+H+1e-6;me++){let we=me*ee/H*V%1,Ue=ct(O+me*ee,S-.07*4*we*(1-we));G&&X.push(G,Ue),me%4===2&&z.push(Ue.clone().setY(Ue.y-.028)),G=Ue}}}i.add(mt(new Ys(new Gt().setFromPoints(X),new As({color:1784356})))),ze(z)}{let S=qt-.004,N=.125,D=si(31),X=[],z=[],te=new Ot(.024,8,6).scale(1,1.45,1),ee=new Ot(.052,8,6),j=new Gn({transparent:!0,depthWrite:!1,blending:ka,vertexShader:"varying vec3 c; varying float a; void main() { vec4 p = modelViewMatrix * instanceMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * mat3(instanceMatrix) * normal); a = max(0.0, -dot(n, normalize(p.xyz))); c = instanceColor; gl_Position = projectionMatrix * p; }",fragmentShader:"varying vec3 c; varying float a; void main() { gl_FragColor = vec4(c, a * a * 0.55); }"});for(let[Ge,je]of[[_t+.25,Xt-N],[_t+.25,Xt+N],[_t+.25,Fe-N],[-2.2,Fe+N]])for(let ct=Ge;ct<Ke-.4;){let bt=Math.min(.62+D()*.3,Ke-.2-ct),Yt=.1+bt*.13,b=Math.round(bt/.03),O=null;for(let V=0;V<=b;V++){let G=V/b,me=new T(ct+bt*G,S-Yt*4*G*(1-G),je);O&&X.push(O,me),V%6===3&&z.push(me.clone().setY(me.y-.036)),O=me}let H=.08+D()*.11;X.push(new T(ct,S,je),new T(ct,S-H,je));for(let V=.06;V<=H+1e-6;V+=.09)z.push(new T(ct,S-V-.036,je));ct+=bt}i.add(mt(new Ys(new Gt().setFromPoints(X),new As({color:1784356}))));let le=ze(z,i,te),he=mt(Je(ee,j,z,i));he.instanceColor=le.instanceColor}function ke(S){let N=new Date,D=N.getMinutes()+N.getSeconds()/60,X=N.getHours()%12+D/60;K.rotation.z=-D/60*Math.PI*2,_e.rotation.z=-X/12*Math.PI*2,Xe.update(S);let z=performance.now()/1e3;ie.bulbs.forEach((te,ee)=>{te.material.emissiveIntensity=1.5+2*Math.max(0,Math.sin(z*2.2+ee*1.7))}),ie.l.intensity=1.5+Math.sin(z*1.3)*.2;for(let{im:te,base:ee}of C){let j=te.instanceColor.array;for(let le=0;le<ee.length;le+=3){let he=.4+.6*Math.max(0,Math.sin(z*2.2+le*.57));j[le]=ee[le]*he,j[le+1]=ee[le+1]*he,j[le+2]=ee[le+2]*he}te.instanceColor.needsUpdate=!0}Be.intensity=2.2+Math.sin(performance.now()/90)*.3+Xe.flash*5}let St=new T(xe[0]-.3,1.1,xe[1]+.3);return{things:f,setPose:He,poseOf:Ae,beam2:Fe,room:{x0:_t,x1:Ke,z0:mn,z1:An,ceil:Et},whole:{x0:kt,x1:Ke,z0:mn,z1:An},flyBoxes:a,bumpers:c,update:ke,tvGame:Xe,tvAt:St,labels:$e}}var _t,Ke,mn,An,kt,Et,vu,Xt,qt,mv,Pc,oi,Zs,jr,Mu=wt(()=>{Vn();Up();_u();Cc();kp();Kp();_t=-5.2,Ke=5.2,mn=-3.6,An=5,kt=-8.7,Et=2.3,vu=.24,Xt=.4,qt=2.02,mv=[-3.2,-.6,2],Pc=3.857,oi={x:-2.43,z0:4,z1:An-.01,rise:.19,run:.23,n:12},Zs={x0:kt,x1:_t,z0:-.6,z1:An},jr={z0:Xt,z1:oi.z0-.05,curtain:1.9}});function Ln(i,e,t,n=0){if(!(e>i.x0-n&&e<i.x1+n&&t>i.z0-n&&t<i.z1+n))return!1;if(!i.pts)return!0;let s=i.pts,r=(s[0][0]+s[2][0])/2,o=(s[0][1]+s[2][1])/2;for(let a=0;a<4;a++){let[c,l]=s[a],[h,u]=s[(a+1)%4],f=h-c,m=u-l,A=Math.hypot(f,m)||1;if((Math.sign(f*(o-l)-m*(r-c))||1)*(f*(t-l)-m*(e-c))/A<-n)return!1}return!0}function $p(i,e,t,n){let s=Wn(e,i.x0+n,i.x1-n),r=Wn(t,i.z0+n,i.z1-n);if(i.pts){let o=(i.pts[0][0]+i.pts[2][0])/2,a=(i.pts[0][1]+i.pts[2][1])/2;for(let c=0;c<20&&!Ln(i,s,r,-n);c++)s+=(o-s)*.15,r+=(a-r)*.15}return[s,r]}function Pi(i,e,t,n){let s=0;for(let r of i.tops)Ln(r,e,t,De.radius*.5)&&r.y1<=n+.03&&r.y1>s&&(s=r.y1);return s}function Lc(i,e,t,n){let s=0;for(let r of i.tops)Ln(r,e,t,De.radius)&&r.y1>n+.03&&!Dc(r,n,De.height)&&(s=Math.max(s,r.y1));return s}function Zr(i,e,t,n){let s=i.walls,r=De.radius;if(e<s.x0+r||e>s.x1-r||t<s.z0+r||t>s.z1-r)return!0;if(i.tops.some(o=>Ln(o,e,t,r*.5)&&o.y1>=.05&&o.y1<=n+.03))return!1;for(let o of i.blocks){if(!Ln(o,e,t,r)||Dc(o,n,De.height))continue;let a=(i.shells||i.tops).find(c=>c.x0<=o.x0+.03&&c.x1>=o.x1-.03&&c.z0<=o.z0+.03&&c.z1>=o.z1-.03);if(!(a&&Zp(o)>Zp(a)*.4))return!0}return!1}function Av(i,e,t,n){let s=i.ceiling?i.ceiling(e,t):1/0;for(let r of i.tops)r.under!==void 0&&Ln(r,e,t)&&r.under>n+.01&&(s=Math.min(s,r.under));return s-De.height}function gv(i,e,t,n){let s=i.blocks.filter(o=>Ln(o,e,t,De.radius)),r=null;for(let o of i.tops)!Ln(o,e,t,De.radius)||o.y1<=n+.03||o.under!==void 0&&n<o.under&&(o.under<.25||!s.some(c=>c.x0>=o.x0-.03&&c.x1<=o.x1+.03&&c.z0>=o.z0-.03&&c.z1<=o.z1+.03&&(c.x1-c.x0)*(c.z1-c.z0)<.05))||(!r||o.y1>r.y1)&&(r=o);return r}function Nc(i,e,t,n){let s=-Wn(e.y,-1,1),r=Wn(e.x,-1,1);i.cling||(i.yaw-=r*De.turn*t);let o=-Math.sin(i.yaw),a=-Math.cos(i.yaw),c=Math.cos(i.yaw),l=-Math.sin(i.yaw);i.runT=s>.6&&!i.air&&!i.cling?i.runT+t:0,i.run+=((i.runT>De.sprintAfter?1:0)-i.run)*(1-Math.exp(-t*(i.runT>De.sprintAfter?4:10)));let h=s*(De.walk+(De.sprint-De.walk)*i.run);if(i.walking=Math.abs(h)/De.walk,i.climbing=!1,i.cling)return xv(i,s,r,e.jump,t,n,o,a,c,l);if(e.jump&&!i.air){let A=_v(n,i);if(A){let x=A.y1-i.y+.06,p=Math.sqrt(2*De.gravity*x),d=p/De.gravity+.12;i.vy=p,i.leap={vx:(A.px-i.x)/d,vz:(A.pz-i.z)/d,t:d},i.yaw=Math.atan2(-(A.px-i.x),-(A.pz-i.z))}else i.vy=Math.sqrt(2*De.gravity*De.hop);i.air=!0,i.run=i.runT=0}let u=o*h*t,f=a*h*t;if(i.leap&&(u=i.leap.vx*t,f=i.leap.vz*t,i.leap.t-=t,i.leap.t<=0&&(i.leap=null)),u||f){let A=i.x+u,x=i.z+f;Zr(n,A,x,i.y)||Lc(n,A,x,i.y)>0?!i.air&&s>.2&&(i.cling={t:0},i.run=i.runT=0):(i.x=A,i.z=x)}let m=Pi(n,i.x,i.z,i.y);if(i.air||i.y>m+1e-4){i.vy-=De.gravity*t,i.y+=i.vy*t,i.air=!0;let A=Pi(n,i.x,i.z,i.y+.05);i.y<=A&&i.vy<=0&&(i.y=A,i.vy=0,i.air=!1,i.leap=null)}else i.y=m,i.vy=0;return Ko(i,n)}function xv(i,e,t,n,s,r,o,a,c,l){let h=i.x+o*.04,u=i.z+a*.04,f=Zr(r,h,u,i.y)||Lc(r,h,u,i.y)>0;if(!f&&e>=-.3&&!n){let x=yv(r,h,u,i.y);if(x)return Jp(i,x,o,a,r)}if(!f||e<-.3||n)return i.cling=null,i.air=!0,i.vy=n?Math.sqrt(2*De.gravity*De.hop):0,n&&(i.leap={vx:-o*.5,vz:-a*.5,t:.3}),Ko(i,r);let m=gv(r,h,u,i.y),A=Av(r,i.x,i.z,i.y);if(e>.2&&(i.climbing=!0,i.y=Math.min(i.y+De.climb*e*s,m?Math.max(m.y1,A):A),m&&(i.y>=m.y1-1e-6||i.y>=A-1e-6)))return Jp(i,m,o,a,r);if(t){let x=i.x+c*t*De.shuffle*s,p=i.z+l*t*De.shuffle*s;!Zr(r,x,p,i.y)&&!Lc(r,x,p,i.y)&&(Zr(r,x+o*.04,p+a*.04,i.y)||Lc(r,x+o*.04,p+a*.04,i.y))&&(i.x=x,i.z=p,i.climbing=!0)}return i.vy=0,i.air=!1,i.y<=Pi(r,i.x,i.z,i.y)+1e-4&&e<=.2&&(i.cling=null),Ko(i,r)}function yv(i,e,t,n){let s=null;for(let r of i.tops)Ln(r,e,t,De.radius)&&r.y1>n-.03&&r.y1<=n+.03&&!Dc(r,n,De.height)&&(!s||r.y1>s.y1)&&(s=r);return s}function Jp(i,e,t,n,s){i.y=e.y1,i.cling=null,i.air=!1,i.vy=0;for(let a of[.05,.09,.14]){let c=i.x+t*a,l=i.z+n*a;if(Pi(s,c,l,i.y)>=e.y1-.01)return i.x=c,i.z=l,Ko(i,s)}let[r,o]=$p(e,i.x,i.z,.04);return Pi(s,r,o,i.y)>=e.y1-.01&&(i.x=r,i.z=o),Ko(i,s)}function Ko(i,e){for(let t of e.tops)t.under!==void 0&&Ln(t,i.x,i.z)&&i.y<t.under&&i.y+De.height>t.under&&(i.y=Math.max(0,t.under-De.height),i.vy=Math.min(i.vy,0));for(let t of["x","y","z","yaw","vy","run"])Number.isFinite(i[t])||(i[t]=0);return i}function _v(i,e){let t=null,n=1/0;for(let s of i.tops){if(s.y1<=e.y+.05||s.y1-e.y>De.leapMax)continue;let[r,o]=$p(s,e.x,e.z,.06),a=Math.hypot(r-e.x,o-e.z);a<De.leapReach&&a<n&&!(Dc(s,e.y,De.height)&&Ln(s,e.x,e.z))&&(t={...s,px:r,pz:o},n=a)}return t}function e0(i,e){let t=Pi(e,i.x,i.z,i.y);return i.cling&&i.y<=t+.02&&(i.cling=null,i.y=t),i.walking=i.run=i.runT=i.vy=0,i.climbing=!1,i.leap=null,i}function bu(i,e){let t=!!i.cling,n=e>=0;return{hanging:t,sit:n&&!t?Math.min(1,e/.7):0,asleep:n&&e>1}}function n0(i,e,t,n,s=Js.tiltHigh){let r=t.x-e.x,o=t.z-e.z,a=Math.hypot(r,o),c=1-Math.exp(-n*Js.ease),l=(h,u)=>Math.sign(h)*Math.min(Math.abs(h)*c,u*n);return a>Js.near&&(i.yaw+=l(vv(Math.atan2(-r,-o)-i.yaw),Js.turn)),i.pitch+=l(Wn(Math.atan2(t.y-e.y,Math.max(a,Js.near)),Js.tiltLow,s)-i.pitch,Js.nod),i}function i0(i,e,t,n,s){let r=-Math.sin(e),o=-Math.cos(e),a=Math.cos(e),c=-Math.sin(e),l=Math.cos(t),h=Math.sin(t);for(let[u,f,m,A]of Mv)for(let x of[n,-n]){let p=i.x-r*u*l+a*x*f,d=i.y+m-u*h,y=i.z-o*u*l+c*x*f;if([.25,.5,.75,1].every(g=>s(i.x+(p-i.x)*g,i.y+(d-i.y)*g,i.z+(y-i.z)*g)))return{x:p,y:d,z:y,side:x,w:A}}return{x:i.x,y:i.y+.04,z:i.z,side:n,w:0}}function s0(i,e,t,n){if(i.yaw-=(i.pointing?gn.aim:gn.turn)*Wn(e.x,-1,1)*t,i.yaw-=e.lookX||0,i.pitch=Wn(i.pitch-(e.lookY||0)-(i.pointing?gn.aim*Wn(e.y,-1,1)*t:0),-1.3,1.1),i.eye+=((i.crouch?gn.crouch:gn.eye)-i.eye)*(1-Math.exp(-t*6)),!i.pointing){let o=-Wn(e.y,-1,1)*gn.walk*(i.crouch?.5:1);i.x+=-Math.sin(i.yaw)*o*t,i.z+=-Math.cos(i.yaw)*o*t}let s=gn.radius,r=n.walls;for(let o of n.blocks){let a=Wn(i.x,o.x0,o.x1),c=Wn(i.z,o.z0,o.z1),l=Math.hypot(i.x-a,i.z-c);if(!(l>=s))if(l>1e-6)i.x=a+(i.x-a)/l*s,i.z=c+(i.z-c)/l*s;else{let h=[[o.x0-s-i.x,0],[o.x1+s-i.x,0],[0,o.z0-s-i.z],[0,o.z1+s-i.z]].sort((u,f)=>Math.hypot(...u)-Math.hypot(...f))[0];i.x+=h[0],i.z+=h[1]}}return i.x=Wn(i.x,r.x0+s,r.x1-s),i.z=Wn(i.z,r.z0+s,r.z1-s),i}function Oc(i,e,t,n=1/0,s=.16){let r=[t[0]-i[0],t[1]-i[1],t[2]-i[2]],o=r[0]*e[0]+r[1]*e[1]+r[2]*e[2];return o<=0?!1:Math.hypot(r[0]-e[0]*o,r[1]-e[1]*o,r[2]-e[2]*o)<=s+o*.02&&n>o-.18}function Eu(i){let e=Ai[i.kind];return i.on?(r0(i,Math.max(1,e.rest*(1-i.left/e.lasts))),"off"):i.wait>0?"wait":(i.on=!0,i.left=e.lasts,"on")}function o0(i,e){return i.on?(i.left-=e,i.left<=0?(r0(i,Ai[i.kind].rest),"empty"):null):i.wait>0&&(i.wait-=e)<=0?(i.wait=0,"ready"):null}var De,gn,Wn,Dc,Zp,Jr,Qp,t0,Js,vv,Mv,Uc,Ai,Fc,r0,a0,$r=wt(()=>{De={height:.12,radius:.035,walk:.55,sprint:1.4,sprintAfter:1,turn:2.6,climb:.9,shuffle:.3,gravity:4.5,hop:.14,leapReach:.5,leapMax:1.4},gn={eye:1.55,crouch:.4,radius:.2,walk:1.2,turn:1.8,aim:.9},Wn=(i,e,t)=>Math.max(e,Math.min(t,i));Dc=(i,e,t)=>i.under!==void 0&&e+t<i.under;Zp=i=>(i.x1-i.x0)*(i.z1-i.z0);Jr=(i,e,t=0)=>({x:i,y:0,z:e,yaw:t,vy:0,air:!1,climbing:!1,cling:null,leap:null,walking:0,run:0,runT:0});Qp=i=>!i.air;t0=(i,e)=>{let t=i||e;return{x:t.x,y:i!=null&&i.crouch?gn.crouch:gn.eye*.7,z:t.z,live:!!i}},Js={turn:3.2,nod:2.2,ease:5,near:.2,tiltLow:-.9,tiltHigh:.6},vv=i=>Math.atan2(Math.sin(i),Math.cos(i));Mv=[[.26,.085,.05,0],[.18,.085,.06,0],[.11,.09,.08,.15],[.05,.1,.09,.4],[-.02,.1,.08,.55],[-.05,.07,.12,.55]];Uc=(i,e,t=0)=>({x:i,z:e,yaw:t,pitch:-.15,eye:gn.eye,crouch:!1,pointing:!1});Ai={binoculars:{zoom:4,lasts:6,rest:8,turn:.25},magnifier:{zoom:3,lasts:8,rest:6}},Fc=i=>({kind:i,on:!1,left:Ai[i].lasts,wait:0,waitOf:1}),r0=(i,e)=>{i.on=!1,i.wait=i.waitOf=e,i.left=Ai[i.kind].lasts};a0=i=>i.on?i.left/Ai[i.kind].lasts:i.wait>0?1-i.wait/i.waitOf:1});async function Iv(){var i;if(jo&&Date.now()-f0<12*36e5)return jo;try{let e=new AbortController,t=setTimeout(()=>e.abort(),5e3),n=await fetch(Ev,{signal:e.signal});clearTimeout(t);let s=await n.json();if(!((i=s.iceServers)!=null&&i.length))throw new Error("no relay");jo=s.iceServers.map(r=>({...r,urls:[].concat(r.urls).filter(o=>!/:53\b/.test(o))})),f0=Date.now()}catch{return jo||Sv}return jo}var bv,c0,l0,Ev,Sv,wv,Tv,Rv,Cv,h0,u0,jo,f0,d0,Su,kc,p0=wt(()=>{ra();bv="https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js",c0=po?"sb-hide-elf-lab-":"sb-hide-elf-",l0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Ev="https://dogfight-relay.sean-bostic.workers.dev",Sv=[{urls:["stun:stun.cloudflare.com:3478","stun:stun.l.google.com:19302"]}],wv=2e3,Tv=9e4,Rv=5e3,Cv=2e4,h0=null,u0=()=>h0||=new Promise((i,e)=>{if(globalThis.Peer){i();return}let t=Object.assign(document.createElement("script"),{src:bv,onload:i,onerror:()=>{h0=null,e(new Error("offline"))}});document.head.append(t)}),jo=null,f0=0;d0=(()=>{try{let i=sessionStorage.getItem("hide-elf-net");return i||(i=Math.random().toString(36).slice(2,10),sessionStorage.setItem("hide-elf-net",i)),i}catch{return Math.random().toString(36).slice(2,10)}})(),Su=i=>String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4),kc=class{constructor(e){this.h=e,this.role=null,this.code="",this.peer=null,this.conns=new Map,this.conn=null,this.token=d0,this.lastHeard=0,this.status="",document.addEventListener("visibilitychange",()=>{!document.hidden&&this.role&&(this.awake(),this.watch())})}say(e){var t,n;this.status=e,(n=(t=this.h).onStatus)==null||n.call(t,e)}async host(){this.leave(),this.say("Opening a room\u2026"),await u0();for(let e=0;e<6&&!this.peer;e++){let t=Array.from({length:4},()=>l0[Math.floor(Math.random()*l0.length)]).join("");try{this.peer=await this.open(c0+t),this.code=t}catch(n){if(n.type!=="unavailable-id")throw this.say(`Couldn't open a room (${n.type||n.message})`),n}}return this.role="host",this.say(""),this.peer.on("connection",e=>{var n;let t=((n=e.metadata)==null?void 0:n.token)||e.peer;e.on("open",()=>{var r,o,a,c,l;let s=this.conns.get(t);s&&s!==e&&((r=s.removeAllListeners)==null||r.call(s),s.close()),this.conns.set(t,e),(l=(c=this.h).onJoin)==null||l.call(c,t,String(((o=e.metadata)==null?void 0:o.name)||"").slice(0,12),!!((a=e.metadata)!=null&&a.watch))}),e.on("data",s=>{var r,o;this.conns.get(t)===e&&((o=(r=this.h).onMsg)==null||o.call(r,t,s))}),e.on("close",()=>{var s,r;this.conns.get(t)===e&&(this.conns.delete(t),(r=(s=this.h).onLeave)==null||r.call(s,t))}),e.on("error",()=>{})}),this.awake(),this.code}send(e,t){let n=this.conns.get(e);if(n!=null&&n.open)try{n.send(t)}catch{}}broadcast(e){for(let t of this.conns.values())if(t.open)try{t.send(e)}catch{}}kick(e){let t=this.conns.get(e);this.conns.delete(e),t==null||t.close()}async join(e){return e=Su(e),e.length!==4?(this.say("Room codes are 4 letters"),!1):(this.leave(),this.say(`Joining ${e}\u2026`),await u0(),this.peer=await this.open(),this.role="guest",this.code=e,this.since=Date.now(),this.peer.on("error",t=>{var n,s;t.type==="peer-unavailable"&&(this.everIn?this.retry():(this.say(`No game called ${e}`),this.leave(),(s=(n=this.h).onLost)==null||s.call(n,!1)))}),this.dial(),this.awake(),this.watch(),clearTimeout(this.joinT),this.joinT=setTimeout(()=>{var t,n;if(this.role==="guest"&&!this.everIn){let s=this.code;this.leave(),this.say(`Couldn't reach room ${s}`),(n=(t=this.h).onLost)==null||n.call(t,!1,`Couldn't reach room ${s}`)}},Cv),!0)}dial(){if(this.role!=="guest"||!this.peer||this.peer.destroyed)return;if(this.peer.disconnected)try{this.peer.reconnect()}catch{}let e=this.peer.connect(c0+this.code,{reliable:!0,serialization:"json",metadata:{token:d0,name:this.name||"",watch:!!this.spectate}});this.conn=e,e.dialAt=Date.now(),this.everIn||setTimeout(()=>{this.conn===e&&!e.open&&this.role==="guest"&&(this.conn=null,e.close(),this.dial())},8e3),e.on("open",()=>{this.conn===e&&(this.everIn=!0,this.lastHeard=Date.now(),this.lostAt=0,this.say(""))}),e.on("data",t=>{var n,s,r,o;if(this.conn===e){if(this.lastHeard=Date.now(),(t==null?void 0:t.t)==="bye"){this.leave(),(s=(n=this.h).onLost)==null||s.call(n,!0,"The host ended the game");return}(o=(r=this.h).onMsg)==null||o.call(r,"host",t)}}),e.on("close",()=>{this.conn===e&&this.retry()}),e.on("error",()=>{})}toHost(e){var t;if((t=this.conn)!=null&&t.open)try{this.conn.send(e)}catch{}}retry(){var e,t;if(this.role==="guest"){if(this.lostAt||(this.lostAt=Date.now(),this.say("Reconnecting\u2026")),Date.now()-this.lostAt>Tv){this.leave(),(t=(e=this.h).onLost)==null||t.call(e,!0,"Lost the host");return}this.retryT||(this.retryT=setTimeout(()=>{var n;this.retryT=null,this.role==="guest"&&!((n=this.conn)!=null&&n.open)&&this.dial()},wv))}}watch(){clearInterval(this.watchT),this.watchT=setInterval(()=>{var e,t;if(this.role!=="guest"){clearInterval(this.watchT);return}if((e=this.conn)!=null&&e.open&&Date.now()-this.lastHeard>Rv){let n=this.conn;this.conn=null,n.close(),this.retry()}else if(!((t=this.conn)!=null&&t.open)&&this.lostAt){if(this.conn&&Date.now()-this.conn.dialAt>6e3){let n=this.conn;this.conn=null,n.close()}this.retry()}},1e3)}async open(e){let t={debug:0,config:{iceServers:await Iv()}};return new URLSearchParams(location.search).has("relayonly")&&(t.config.iceTransportPolicy="relay"),new Promise((n,s)=>{let r=e?new Peer(e,t):new Peer(t),o=a=>{r.destroy(),s(a)};r.once("open",()=>{r.off("error",o),r.on("disconnected",()=>setTimeout(()=>{if(!r.destroyed&&r.disconnected)try{r.reconnect()}catch{}},1e3)),n(r)}),r.once("error",o)})}leave(){var t,n,s,r;this.role==="host"&&this.broadcast({t:"bye"}),clearTimeout(this.retryT),this.retryT=null,clearInterval(this.watchT),clearTimeout(this.joinT);let e=this.peer;this.peer=null,this.conn=null,this.conns.clear(),this.role=null,this.code="",this.everIn=!1,this.lostAt=0,e&&setTimeout(()=>e.destroy(),200),(r=(n=(t=this.wake)==null?void 0:t.release)==null?void 0:(s=n.call(t)).catch)==null||r.call(s,()=>{}),this.wake=null}async awake(){try{this.role&&!this.wake&&navigator.wakeLock&&(this.wake=await navigator.wakeLock.request("screen"),this.wake.addEventListener("release",()=>{this.wake=null}))}catch{}}}});function A0(i){let e={on:!1,host:!1,players:new Map,phase:"lobby",left:0,seeker:null,round:0,firstFound:null,nextSeeker:null,times:{hide:45,seek:60}},t=new kc({onMsg:d,onJoin:o,onLeave:a,onLost:y,onStatus:()=>i.render()});e.net=t,e.me=t.token;let n=0,s=0,r=()=>e.players.get(t.token);function o(g,_){let w=e.players.get(g);w?(clearTimeout(w.gone),w.gone=null,w.name=_||w.name):(w={id:g,name:_||`Elf ${e.players.size+1}`,role:e.phase==="lobby"?"elf":"wait",found:!1,st:null},e.players.set(g,w)),t.send(g,{t:"hello",phase:e.phase,round:e.round,seeker:e.seeker,times:e.times,order:[...e.players.keys()]}),e.phase!=="lobby"&&w.role!=="wait"&&t.send(g,h()),i.render()}function a(g){let _=e.players.get(g);_&&(clearTimeout(_.gone),_.gone=setTimeout(()=>c(g),Lv*1e3))}function c(g){e.players.get(g)&&(e.players.delete(g),i.render(),e.phase!=="lobby"&&e.phase!=="results"&&g===e.seeker?m("elves"):f())}function l(g,_){let w=e.players.get(g);w&&(_.t==="me"?(w.st=_.s,w.at=performance.now()):_.t==="name"?(w.name=String(_.name||"").slice(0,12)||w.name,i.render()):_.t==="got"?u(_.id,g):_.t==="shh"?(t.broadcast({t:"shh",id:g,at:_.at}),i.onShh(g,_.at)):_.t==="leave"&&(t.kick(g),c(g)))}let h=()=>({t:"round",seeker:e.seeker,n:e.round,hide:e.times.hide,seek:e.times.seek,order:[...e.players.keys()],roles:[...e.players.values()].map(g=>[g.id,g.role])});e.startRound=()=>{if(!e.host||e.players.size<2)return!1;let g=[...e.players.keys()],_=e.nextSeeker&&e.players.has(e.nextSeeker)?e.nextSeeker:null;if(!_){let E=g.indexOf(e.seeker);_=E<0?g[Math.floor(Math.random()*g.length)]:g[(E+1)%g.length]}e.seeker=_,e.round++,e.firstFound=null,e.nextSeeker=null;for(let E of e.players.values())E.role=E.id===_?"seeker":"elf",E.found=!1;e.phase="hide",e.left=e.times.hide;let w=h();return t.broadcast(w),p(w),!0};function u(g,_){let w=e.players.get(g);if(!e.host||e.phase!=="seek"||_!==e.seeker||!w||w.role!=="elf"||w.found)return;w.found=!0;let E=!e.firstFound;E&&(e.firstFound=g),t.broadcast({t:"found",id:g,by:_,first:E}),i.onFound(g,_,E),f()}function f(){if(!e.host||e.phase!=="seek")return;let g=[...e.players.values()].filter(_=>_.role==="elf");g.length&&g.every(_=>_.found)&&m("seeker")}function m(g){e.phase="results",s=Pv,e.nextSeeker=e.firstFound;let _={t:"end",winner:g,found:[...e.players.values()].filter(w=>w.found).map(w=>w.id),firstFound:e.firstFound,next:e.firstFound||null};t.broadcast(_),i.onEnd(_)}function A(g){e.phase==="hide"||e.phase==="seek"?(e.left-=g,e.left<=0&&(e.phase==="hide"?(e.phase="seek",e.left=e.times.seek,t.broadcast({t:"phase",phase:"seek"}),i.onPhase("seek")):m("elves"))):e.phase==="results"&&(s-=g)<=0&&(e.startRound()||(e.phase="lobby",t.broadcast({t:"phase",phase:"lobby"}),i.onPhase("lobby")));let _=r();_&&(_.st=i.myState(),_.at=performance.now()),!((n+=g)<m0)&&(n=0,t.conns.size&&t.broadcast({t:"s",ph:e.phase,left:wu(e.left),P:[...e.players.values()].map(w=>[w.id,w.name,w.role,w.found?1:0,w.st])}))}function x(g){if(g.t==="hello")e.phase=g.phase,e.round=g.round,e.seeker=g.seeker,e.times=g.times,i.render();else if(g.t==="round")p(g);else if(g.t==="phase")e.phase=g.phase,i.onPhase(g.phase);else if(g.t==="found"){let _=e.players.get(g.id);_&&(_.found=!0),i.onFound(g.id,g.by,g.first)}else if(g.t==="shh")i.onShh(g.id,g.at);else if(g.t==="end")e.phase="results",i.onEnd(g);else if(g.t==="s"){e.phase=g.ph,e.left=g.left;let _=performance.now(),w=new Set;for(let[E,I,U,v,R]of g.P){w.add(E);let B=e.players.get(E);B||(B={id:E},e.players.set(E,B)),Object.assign(B,{name:I,role:U,found:!!v}),E!==t.token&&R&&(B.prev=B.cur,B.cur={st:R,at:_})}for(let E of[...e.players.keys()])w.has(E)||e.players.delete(E);i.render()}}function p(g){e.phase="hide",e.round=g.n,e.seeker=g.seeker,e.times={hide:g.hide,seek:g.seek},e.left=g.hide,e.firstFound=null;for(let[_,w]of g.roles){let E=e.players.get(_);E||(E={id:_},e.players.set(_,E)),E.role=w,E.found=!1}i.onRound({seeker:g.seeker,n:g.n,hide:g.hide,seek:g.seek,order:g.order})}function d(g,_){e.host?l(g,_):x(_)}function y(g,_){!e.on||e.host||(e.on=!1,e.players.clear(),i.onLost(_||"Lost the host"))}return e.update=g=>{if(!e.on)return;if(e.host){A(g);return}if((e.phase==="hide"||e.phase==="seek")&&(e.left-=g),(n+=g)<m0)return;n=0;let _=i.myState();_&&t.toHost({t:"me",s:_.map(wu)})},e.others=()=>{let g=performance.now()-120,_=[];for(let w of e.players.values()){if(w.id===t.token)continue;let E=null;if(e.host)E=w.st;else if(w.cur){let I=w.prev||w.cur,U=w.cur,v=U.at>I.at?Math.max(0,Math.min(1,(g-I.at)/(U.at-I.at))):1;E=I.st&&U.st&&I.st[0]===U.st[0]?U.st.map((R,B)=>typeof R=="number"&&B>0&&B<5?I.st[B]+(R-I.st[B])*v:R):U.st}E&&_.push({id:w.id,name:w.name,role:w.role,found:w.found,st:E})}return _},e.myRole=()=>{var g;return((g=r())==null?void 0:g.role)||(e.seeker===t.token?"seeker":"elf")},e.name=g=>{var _;return((_=e.players.get(g))==null?void 0:_.name)||"An elf"},e.sendFound=g=>{e.host?u(g,t.token):t.toHost({t:"got",id:g})},e.sendShh=g=>{let _=g.map(wu);e.host?t.broadcast({t:"shh",id:t.token,at:_}):t.toHost({t:"shh",at:_})},e.setName=g=>{t.name=g;let _=r();_&&(_.name=g||_.name),e.on&&!e.host&&t.toHost({t:"name",name:g}),i.render()},e.hostGame=async(g,_)=>{e.leave(),t.name=g,e.times=_;try{await t.host()}catch{return i.render(),null}return e.on=!0,e.host=!0,e.phase="lobby",e.round=0,e.seeker=null,e.players.set(t.token,{id:t.token,name:g||"Host",role:"elf",found:!1,st:null}),i.render(),t.code},e.join=async(g,_)=>{e.leave(),t.name=_;let w=!1;try{w=await t.join(Su(g))}catch{t.say("Couldn't get online")}return w&&(e.on=!0,e.host=!1,e.phase="lobby",e.players.set(t.token,{id:t.token,name:_||"Me",role:"elf"})),i.render(),w},e.leave=()=>{e.on&&!e.host&&t.toHost({t:"leave"});for(let g of e.players.values())clearTimeout(g.gone);e.on=e.host=!1,e.players.clear(),e.phase="lobby",e.round=0,e.seeker=null,t.leave(),i.render()},e.code=()=>t.code,e.status=()=>t.status,e}var m0,Pv,Lv,wu,g0=wt(()=>{p0();m0=1/12,Pv=7,Lv=15,wu=i=>typeof i=="number"?Math.round(i*1e3)/1e3:i});function Nv(i){let e=[];for(let n of i.tops){if(n.name==="sill"||n.x1-n.x0<.08||n.z1-n.z0<.08)continue;let[s,r]=n.pts?[(n.pts[0][0]+n.pts[2][0])/2,(n.pts[0][1]+n.pts[2][1])/2]:[(n.x0+n.x1)/2,(n.z0+n.z1)/2];if(n.name==="beam")for(let o=.2;o<1;o+=.2)e.push({x:n.x0+(n.x1-n.x0)*o,z:r,y:n.y1,how:"up"});else n.y1>.25&&e.push({x:s,z:r,y:n.y1,how:"up"});n.under!==void 0&&n.under>De.height+.03&&n.under<.8&&e.push({x:s,z:r,y:0,how:"under"})}let t=i.walls;for(let n=.05;n<1;n+=.1)for(let[s,r]of[[t.x0+.08,t.z0+(t.z1-t.z0)*n],[t.x1-.08,t.z0+(t.z1-t.z0)*n],[t.x0+(t.x1-t.x0)*n,t.z0+.08],[t.x0+(t.x1-t.x0)*n,t.z1-.08]])Pi(i,s,r,0)<.01&&e.push({x:s,z:r,y:0,how:"behind"});return e.filter(n=>Math.abs(Pi(i,n.x,n.z,n.y+.01)-n.y)<.02)}function Uv(i,e,t,n){let s=e.x-i.x,r=e.z-i.z,o=Math.hypot(s,r);if(t.stuck=Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)<.15*n?t.stuck+n:0,t.x=i.x,t.y=i.y,t.z=i.z,t.round>0)return t.round-=n,{x:t.side*.9,y:-.8};if(t.stuck>.5)return t.stuck=0,t.round=.6+t.rand()*.6,t.side=t.rand()<.5?-1:1,{x:0,y:i.cling?1:0};if(i.cling)return{x:0,y:-1};let a=Dv(Math.atan2(-s,-r)-i.yaw);return{x:Math.max(-1,Math.min(1,-a*3)),y:o<.04?0:-(Math.abs(a)>1.2?.2:o<.25?.5:1)}}function Fv(i,e,t,n,s,r){let o=Jr(t,n,Math.atan2(-(e.x-t),-(e.z-n))),a={x:t,y:0,z:n,stuck:0,round:0,side:1,rand:r},c=[];for(let l=0;l<s;l+=Qr)if(Nc(o,Uv(o,e,a,Qr),Qr,i),c.push([o.x,o.y,o.z,o.yaw,o.walking,o.run,o.climbing?1:0,o.cling?1:0,o.air?1:0]),Ov(o,e))return c;return null}function x0(i,e,{sx:t,sz:n,time:s,hidden:r,rand:o=Math.random}){let a=Nv(i).map(h=>{let u=Math.hypot(h.x-t,h.z-n),f=(r(h.x,h.y+De.height/2,h.z)?2:0)+(h.how==="under"?1.5:h.how==="up"?Math.min(1.5,h.y):.5)+Math.min(1,u/3);return{...h,score:f+o()*1.5}}).filter(h=>Math.hypot(h.x-t,h.z-n)>1).sort((h,u)=>u.score-h.score),c=[],l=[...a].sort((h,u)=>Math.hypot(h.x-t,h.z-n)-Math.hypot(u.x-t,u.z-n));for(let h=0;h<e;h++){let u=0;for(let f of[...a.slice(0,30),...l]){if(c.some(y=>Math.hypot(y.spot.x-f.x,y.spot.z-f.z)<1.2))continue;if(++u>50)break;let m=Math.atan2(t-f.x,n-f.z)+(h%2?.5:-.5),A=t+Math.sin(m)*.75,x=n+Math.cos(m)*.75;if(Pi(i,A,x,0)>.01||i.blocks.some(y=>Ln(y,A,x,De.radius)))continue;let p=h*2,d=Fv(i,f,A,x,s-p,o);if(d){c.push({run:d,spot:f,wait:p});break}}}return c}function y0(i,e){if(e-=i.wait||0,e<0){let o=i.run[0];return{x:o[0],y:o[1],z:o[2],yaw:o[3],walking:0,run:0,climbing:!1,hanging:!1,air:!1,sit:0,asleep:!1,moving:!0}}let t=Math.min(i.run.length-1,Math.floor(e/Qr)),n=i.run[t],s=e/Qr>=i.run.length,r=s?e-i.run.length*Qr:-1;return{x:n[0],y:n[1],z:n[2],yaw:n[3],walking:s?0:n[4],run:s?0:n[5],climbing:!s&&!!n[6],hanging:!s&&!!n[7],air:!s&&!!n[8],sit:r<0?0:Math.min(1,r/.7),asleep:r>1,moving:!s}}var Qr,Dv,Ov,_0=wt(()=>{$r();Qr=1/30,Dv=i=>Math.atan2(Math.sin(i),Math.cos(i));Ov=(i,e)=>!i.air&&!i.cling&&Math.hypot(e.x-i.x,e.z-i.z)<.08&&Math.abs(i.y-e.y)<.03});function Xn(i,e){return eo||(eo=new Bo(new Uint8Array([90,170,255]),3,1,Fh),eo.minFilter=eo.magFilter=jt,eo.needsUpdate=!0),new pc({color:i,gradientMap:eo,...e?{map:e}:{}})}function zv(i,e){let t=document.createElement("canvas");t.width=512,t.height=256;let n=t.getContext("2d"),s=512,r=256;n.fillStyle=i,n.fillRect(0,0,s,r),n.fillStyle="rgba(0,0,0,0.18)";for(let u=0;u<s;u+=8)n.fillRect(u,r-34,4,34);n.fillRect(0,0,s,10);let o=e==="him"?["#c92a2a","#fff"]:["#f8f9fa","#2b8a3e"],a=70,c=56;n.fillStyle=o[0],n.fillRect(0,a,s,c),n.fillStyle=o[1],n.strokeStyle=o[1],n.lineWidth=7;for(let u=0;u<s;u+=32)e==="him"?(n.beginPath(),n.moveTo(u+16,a+8),n.lineTo(u+28,a+c/2),n.lineTo(u+16,a+c-8),n.lineTo(u+4,a+c/2),n.closePath(),n.fill()):(n.beginPath(),n.moveTo(u,a+c-14),n.lineTo(u+16,a+14),n.lineTo(u+32,a+c-14),n.stroke());n.fillStyle=o[e==="him"?1:0],n.fillRect(0,a-8,s,5),n.fillRect(0,a+c+3,s,5);let l=(u,f,m)=>{n.strokeStyle="#fff",n.lineWidth=4;for(let A=0;A<3;A++){let x=Math.sin(A*Math.PI/3)*m,p=Math.cos(A*Math.PI/3)*m;n.beginPath(),n.moveTo(u-p,f-x),n.lineTo(u+p,f+x),n.stroke()}};for(let u=0;u<s;u+=64)for(let[f,m]of[[160,0],[200,32]])e==="her"?l(u+m+16,f,11):(n.fillStyle="#fff",n.beginPath(),n.arc(u+m+16,f,5,0,Math.PI*2),n.fill());let h=new gs(t);return h.colorSpace=yt,h.wrapS=di,h.anisotropy=4,h}function Hv(i,e,t){let n=Tu.subVectors(e,i),s=Math.min(n.length(),Es+Bc-.001);n.normalize();let r=(Es*Es-Bc*Bc+s*s)/(2*s),o=Math.sqrt(Math.max(0,Es*Es-r*r)),a=t.clone().addScaledVector(n,-t.dot(n)).normalize(),c=i.clone().addScaledVector(n,r).addScaledVector(a,o),l=new Sn().setFromUnitVectors(M0,v0.subVectors(c,i).normalize()),h=v0.subVectors(e,c).normalize().applyQuaternion(l.clone().invert());return{sh:l,el:new Sn().setFromUnitVectors(M0,h.clone())}}function b0(i=so[0]){let e=i==="her",t=e?{jumper:"#c0392b",sleeve:12597547,legs:3878730,boot:13148794,cuff:16446440,hair:14394698,skin:16175022}:{jumper:"#2f8f46",sleeve:3116870,legs:3366041,boot:5978660,cuff:3116870,hair:4007444,skin:15713180},n=Xn(t.skin),s=Xn(t.hair),r=Xn(16447214),o=Xn(1907226),a=Xn(t.sleeve),c=Xn(t.legs),l=Xn(t.boot),h=Xn(t.cuff),u=Xn(15895692),f=Xn(13644077),m=new at,A=new at,x=new at;m.add(A),A.add(x),x.position.y=to;let p=new Ot(1,20,14),d=(F,Z,P,k,Y,Q,J=1,$=J,ne=J)=>{let re=new Ct(F,Z);return re.position.set(k,Y,Q),re.scale.set(J,$,ne),re.castShadow=!0,P.add(re),re},y=(F,Z,P,k,Y,Q,J=Q,$=Q)=>d(p,F,Z,P,k,Y,Q,J,$),g=F=>F-to,_=[-1,1].map(F=>{let Z=new at;Z.position.set(F*.1,to,0),A.add(Z),d(new Ks(.078,no-.08,4,12),c,Z,0,-no/2,0);let P=new at;P.position.y=-no,Z.add(P),d(new Ks(.066,io-.06,4,12),e?l:c,P,0,-io/2,0);let k=new at;return k.position.y=-io,P.add(k),y(l,k,0,-.022,-.045,.078,.06,.135),e&&(d(new _n(.07,.024,8,18),h,P,0,-.1,0).rotation.x=Math.PI/2),{hip:Z,knee:P,ankle:k}}),w=e?[[.2,.74],[.215,.8],[.19,.9],[.165,1],[.175,1.1],[.185,1.2],[.175,1.28],[.15,1.35],[.09,1.39],[.05,1.41]]:[[.185,.76],[.205,.82],[.215,.92],[.22,1.02],[.22,1.12],[.215,1.22],[.195,1.3],[.155,1.37],[.09,1.41],[.05,1.42]],E=new Go(w.map(([F,Z])=>new fe(F,g(Z))),28);d(E,Xn(16777215,zv(t.jumper,i)),x,0,0,0),y(c,x,0,g(.79),0,e?.19:.18,.1,.14),d(new _n(e?.19:.205,.025,8,28),Xn(t.sleeve),x,0,g(e?.75:.77),0).rotation.x=Math.PI/2,d(new st(.055,.06,.08,12),n,x,0,g(1.43),0),d(new _n(.065,.022,8,18),a,x,0,g(1.405),0).rotation.x=Math.PI/2;let I=new at;I.position.y=g(Dn.y),x.add(I),y(n,I,0,0,0,Dn.r,Dn.r*1.02,Dn.r*.97);let U=(F,Z,P=0)=>-(Math.sqrt(Math.max(0,Dn.r*Dn.r-F*F-Z*Z))*.97+P),v=gn.eye-Dn.y;for(let F of[-1,1])y(o,I,F*.048,v,U(F*.048,v),.019,.026,.012),y(r,I,F*.048+.006,v+.009,U(F*.048,v,.009),.006),y(u,I,F*.082,v-.05,U(F*.082,v-.05,-.004),.026,.018,.012),y(o,I,F*.05,v+.046,U(F*.05,v+.046,.004),e?.022:.028,e?.006:.009,.008).rotation.z=F*(e?-.25:-.12),e||y(n,I,F*Dn.r*.98,-.01,.005,.026,.038,.022);if(y(Xn(e?15775894:15051394),I,0,v-.032,U(0,v-.032,.012),.024,.02,.02),d(new _n(.036,.0075,6,16,Math.PI),e?f:o,I,0,v-.075,U(0,v-.075,-.004)).rotation.set(-.35,0,Math.PI),e){let F=d(new Ot(Dn.r*1.07,22,14,0,Math.PI*2,0,Math.PI*.55),s,I,0,.004,.006);F.rotation.x=.42,y(s,I,0,-.1,.05,.155,.2,.105);for(let Z of[-1,1])y(s,I,Z*.118,-.075,-.005,.045,.13,.075);y(s,I,0,.088,U(0,.088,.004),.1,.045,.04).rotation.x=-.4,d(new _n(Dn.r*1.14,.013,8,24,Math.PI),f,I,0,-.005,.005);for(let Z of[-1,1])y(r,I,Z*Dn.r*1.08,-.01,.004,.035,.052,.05)}else{let F=d(new Ot(Dn.r*1.05,22,14,0,Math.PI*2,0,Math.PI*.62),s,I,0,0,.004);F.rotation.x=.62;for(let k of[-1,1])y(s,I,k*Dn.r*.96,0,-.04,.018,.045,.03);let Z=new at;Z.position.set(0,.075,.012),Z.rotation.set(.22,0,0),I.add(Z),d(new _n(Dn.r*.95,.034,10,28),r,Z,0,0,0).rotation.x=Math.PI/2,d(new st(.075,Dn.r*.97,.13,22),f,Z,0,.065,0),d(new Ti(.078,.2,18),f,Z,.035,.2,.03).rotation.set(.35,0,-.55),y(r,Z,.12,.265,.085,.04)}let B=[-1,1].map(F=>{let Z=new at;Z.position.set(F*(e?.2:.225),g(Bv),0),x.add(Z),y(a,Z,0,-.01,0,.066),d(new Ks(.064,Es-.06,4,12),a,Z,0,-Es/2,0);let P=new at;P.position.y=-Es,Z.add(P),d(new Ks(.058,.2,4,12),a,P,0,-.12,0),d(new _n(.052,.018,8,16),e?r:a,P,0,-.245,0).rotation.x=Math.PI/2;let k=new at;k.position.y=-Bc,P.add(k),y(n,k,0,0,0,.05,.062,.03),y(n,k,F*.044,-.008,0,.018,.032,.018).rotation.z=F*-.5;let Y=new Sn().setFromAxisAngle(Tu.set(0,1,0),F*Math.PI/2),Q=new T(F*.05,g(gn.eye)+.005,U(F*.05,v,.035)),J=Hv(Z.position,Q,new T(F*.8,-1.4,-.2)),$=new Sn().setFromAxisAngle(Tu.set(0,0,1),-F*.2),ne=J.sh.clone().multiply(J.el).invert().multiply($);return{sh:Z,el:P,hand:k,side:F,rest:Y,count:{sh:J.sh,el:J.el,hand:ne}}});return m.userData={look:i,lift:A,body:x,head:I,arms:B,legs:_},m}function E0(i,e,{counting:t=!1,crouch:n=!1}={}){let s=i.userData,{lift:r,body:o,head:a,arms:c,legs:l}=s,h=s.t===void 0?0:Math.min(.25,e-s.t),u=s.x===void 0?0:Math.hypot(i.position.x-s.x,i.position.z-s.z);s.t=e,s.x=i.position.x,s.z=i.position.z,s.walk=(s.walk||0)+((h>0?Math.min(1,u/h/gn.walk):0)-(s.walk||0))*Math.min(1,h*8),s.step=(s.step||0)+u*5.5;let f=t?0:s.walk*(n?.4:1),m=Math.sin(s.step)*.5*f,A=n?1.3:0,x=n?-2:0;l.forEach(({hip:y,knee:g,ankle:_},w)=>{let E=w?-m:m;y.rotation.x=A+E,g.rotation.x=x-Math.max(0,-E)*.9,_.rotation.x=-(y.rotation.x+g.rotation.x)});let p=A,d=A+x;r.position.set(0,n?-(to-no*Math.cos(p)-io*Math.cos(d)-(to-no-io)):Math.abs(m)*.03,n?no*Math.sin(p)+io*Math.sin(d):0),o.rotation.set(n?-.45:-.05*f,0,t?Math.sin(e*1.3)*.03:0),o.position.y=to+(t||f>.1?0:Math.sin(e*2.1)*.004),a.rotation.x=n?.35:0;for(let{sh:y,el:g,hand:_,side:w,rest:E,count:I}of c){if(t){y.quaternion.copy(I.sh),g.quaternion.copy(I.el),_.quaternion.copy(I.hand);continue}y.rotation.set(n?.7:w*m,0,w*.16,"XYZ"),g.rotation.set(n?.6:.15+.35*f,0,0),_.quaternion.copy(E)}}var so,kv,Dn,to,no,io,Bv,Es,Bc,Tu,v0,M0,eo,S0=wt(()=>{Vn();$r();so=["him","her"],kv=gn.eye/.93,Dn={y:kv-.135,r:.135},to=.8,no=.38,io=.34,Bv=1.34,Es=.28,Bc=.31,Tu=new T,v0=new T,M0=new T(0,-1,0),eo=null});function zc(){let i=new at,e=new at;i.add(e);let t=(A,x=.6)=>new mi({color:A,roughness:x}),n=t(14034984,.5),s=t(2853438),r=t(16316922,.8),o=t(15976869,.7),a=t(1710618,.4),c=(A,x,p,d,y,g=e,_=0,w=0)=>{let E=new Ct(A,x);return E.position.set(p,d,y),E.rotation.set(_,0,w),E.castShadow=!0,g.add(E),E},l=De.height/.12,h=[-1,1].map(A=>{let x=new at;return x.position.set(A*.009,.034,0),e.add(x),c(new st(.0065,.006,.03,10),s,0,-.016,0,x),c(new Ot(.0085,10,8),n,0,-.031,-.004,x).scale.set(1,.6,1.5),x});c(new st(.016,.019,.034,16),n,0,.05,0),c(new st(.0195,.0195,.005,16),a,0,.036,0),c(new $n(.008,.007,.004),t(16765503,.3),0,.036,-.019),c(new _n(.0145,.0045,8,20),r,0,.067,0,e,Math.PI/2);let u=[-1,1].map(A=>{let x=new at;return x.position.set(A*.019,.063,0),e.add(x),c(new st(.005,.0055,.026,8),n,0,-.013,0,x),c(new Ot(.0055,8,6),r,0,-.027,0,x),x.rotation.z=A*.25,x});c(new Ot(.017,16,12),o,0,.083,0);let f=[-.006,.006].map(A=>c(new Ot(.0022,8,6),a,A,.086,-.0155));for(let A of[-.009,.009])c(new Ot(.003,8,6),t(15764620),A,.079,-.013);c(new Ot(.0035,8,6),t(15247496),0,.081,-.017),c(new st(.0175,.0175,.005,16),r,0,.096,0);let m=c(new Ti(.0165,.034,16),n,.002,.113,.002,e,.25,-.2);return c(new Ot(.0055,10,8),r,.006,.13,.006),i.scale.setScalar(l),i.userData.parts={legs:h,arms:u,body:e,eyes:f},i}function Hc(i,e,{walking:t=0,run:n=0,climbing:s=!1,hanging:r=!1,air:o=!1,sit:a=0,asleep:c=!1,laugh:l=!1}={}){let{legs:h,arms:u,body:f,eyes:m}=i.userData.parts;f.rotation.x=0,f.position.set(0,0,0);let A=c&&!l;for(let g of m)g.scale.set(A?1.3:1,A?.16:1,1);if(l){h[0].rotation.x=h[1].rotation.x=0,u[0].rotation.x=u[1].rotation.x=-.7+Math.sin(e*22)*.15,f.rotation.x=.25+Math.sin(e*22)*.05,f.position.y=Math.abs(Math.sin(e*11))*.006;return}if(a>0){let g=a*a*(3-2*a),_=(w,E)=>w+(E-w)*g;h[0].rotation.x=_(h[0].rotation.x*0,1.45),h[1].rotation.x=_(0,1.45),u[0].rotation.x=u[1].rotation.x=_(0,.9),f.position.y=_(0,-.028),f.position.z=_(0,.004),f.rotation.x=c?.12+Math.sin(e*1.3)*.04:0;return}let x=14+10*n,p=.7+.35*n,d=Math.sin(e*x),y=s?Math.sin(e*12)*.6:r?.15:Math.min(t,1)*d*p;if(h[0].rotation.x=y,h[1].rotation.x=-y,s||r){let g=s?Math.sin(e*12)*.5:0;u[0].rotation.x=-2.6+g,u[1].rotation.x=-2.6-g}else o?u[0].rotation.x=u[1].rotation.x=-1.6:(u[0].rotation.x=y*(.6+.9*n),u[1].rotation.x=-y*(.6+.9*n));f.rotation.x=-.35*n,r&&c&&(f.rotation.x=.04+Math.sin(e*1.3)*.02),t&&!o&&!s&&!r&&(f.position.y=Math.abs(d)*(.003+.004*n))}var w0=wt(()=>{Vn();$r()});function R0(i){let e=[...i.flyBoxes],t=new Map;for(let c of i.things){let l=c.boxes.filter(({b:f})=>i.flyBoxes.includes(f));if(c.gone||l.length!==1||c.name==="Stairs")continue;let h=l[0].b,u=Gv(c.at,h.under);u.length&&t.set(h,u)}e.splice(0,e.length,...e.flatMap(c=>t.get(c)||[c]));let n=Et-.004;e.push({x0:kt,x1:Ke,z0:Xt-.1,z1:Xt+.1,y1:n,under:qt,name:"beam"}),e.push({x0:_t,x1:Ke,z0:i.beam2-.1,z1:i.beam2+.1,y1:n,under:qt,name:"beam"});for(let c of i.things)if(!c.gone&&/^Window/.test(c.name)){c.at.updateMatrixWorld(!0);let l=[[-.45,0],[.45,0],[-.45,.18],[.45,.18]].map(([h,u])=>new T(h,0,u).applyMatrix4(c.at.matrixWorld));e.push({x0:Math.min(...l.map(h=>h.x)),x1:Math.max(...l.map(h=>h.x)),z0:Math.min(...l.map(h=>h.z)),z1:Math.max(...l.map(h=>h.z)),y1:1.845,under:1.83,name:"sill"})}let s=i.things.find(c=>c.name==="Stairs"),r=s?s.at.position.x-s.start.x:0,o=s?s.at.position.z-s.start.z:0;if(!(s!=null&&s.gone))for(let c=0;c<oi.n;c++)e.push({x0:oi.x-(c+1)*oi.run+r,x1:oi.x-c*oi.run+r,z0:oi.z0+o,z1:oi.z1+o,y1:(c+1)*oi.rise,name:"stairs"});let a=(c,l)=>Math.abs(l-Xt)<.14||Math.abs(l-i.beam2)<.14&&c>_t?qt:Et;return{walls:i.whole,tops:e,shells:i.flyBoxes,blocks:i.bumpers,ceiling:a}}function Gv(i,e){i.updateMatrixWorld(!0);let t=[];return i.traverse(n=>{if(!n.isMesh)return;for(let o=n;o;o=o.parent)if(!o.visible)return;let s=new Pt().setFromObject(n,!0);if(s.isEmpty()||s.max.x-s.min.x<.03&&s.max.z-s.min.z<.03||e!==void 0&&s.min.y<e-.01)return;let r={x0:s.min.x,x1:s.max.x,z0:s.min.z,z1:s.max.z,y1:s.max.y,...e!==void 0?{under:e}:{}};if(T0.set(0,1,0).transformDirection(n.matrixWorld),T0.y>.999){n.geometry.boundingBox||n.geometry.computeBoundingBox();let o=n.geometry.boundingBox;r.pts=[[o.min.x,o.min.z],[o.max.x,o.min.z],[o.max.x,o.max.z],[o.min.x,o.max.z]].map(([a,c])=>(Ru.set(a,o.min.y,c).applyMatrix4(n.matrixWorld),[Ru.x,Ru.z]))}t.push(r)}),t}var Ru,T0,C0=wt(()=>{Vn();Mu();Ru=new T,T0=new T});var I0,P0,L0=wt(()=>{I0='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-8 -8 526 704" width="526" height="704"><defs><path id="s" transform="translate(0,700) scale(.1,-.1)" d="M1275 6966 c-153 -103 -255 -362 -325 -826 -28 -186 -47 -198 -139 -91 -154 178 -355 173 -416 -9 -41 -124 -4 -219 185 -470 153 -204 192 -283 256 -529 64 -247 8 -328 -233 -330 -133 -2 -406 -102 -498 -182 -98 -87 -134 -262 -90 -444 8 -33 15 -85 15 -116 1 -294 180 -744 380 -954 50 -53 61 -71 84 -147 74 -244 205 -322 454 -271 105 22 113 16 123 -94 3 -43 12 -107 18 -143 74 -405 198 -635 471 -872 186 -161 379 -497 420 -729 6 -35 28 -138 50 -229 22 -91 54 -230 71 -310 17 -80 38 -162 46 -182 15 -38 15 -38 1464 -38 865 0 1449 4 1449 9 0 20 -63 61 -142 93 -106 43 -153 89 -247 243 -41 66 -106 163 -146 215 -39 52 -82 113 -95 135 -13 22 -53 80 -89 129 -36 49 -79 111 -96 137 -63 100 -172 258 -243 353 -42 55 -91 125 -111 157 -20 32 -52 82 -72 111 -20 29 -76 112 -123 183 -48 72 -108 158 -134 192 -181 239 -218 305 -575 1023 -143 289 -269 538 -280 553 -10 16 -65 112 -122 215 -56 103 -135 241 -175 307 -40 65 -95 167 -122 226 -27 60 -66 139 -86 176 -85 155 -201 439 -286 699 -45 136 -73 320 -86 554 -6 96 -17 216 -25 265 -8 50 -21 176 -30 280 -44 533 -65 605 -200 705 -78 58 -220 60 -300 6z"/><clipPath id="cs"><use href="#s"/></clipPath><clipPath id="cm"><path d="M93,-20 L93,100 C96,130 101,165 103,200 C103,240 99,280 98,320 C98,360 103,405 111,440 L111,720 L530,720 L530,-20 Z"/></clipPath><clipPath id="cf"><path d="M-20,220 L94,222 C90,250 88,280 84,310 C88,335 88,365 81,386 C76,399 62,404 48,400 L-20,420 Z"/></clipPath><clipPath id="cr"><path d="M84,310 C92,318 98,332 101,350 L104,420 C98,424 90,420 86,410 C84,395 88,350 84,310 Z"/></clipPath></defs><g clip-path="url(#cs)"><use href="#s" fill="#ffc896"/><rect x="60" y="215" width="50" height="240" fill="#c9744a"/><path d="M84,310 C92,318 98,332 101,350 L104,420 C98,424 90,420 86,410 C84,395 88,350 84,310 Z" fill="#ffc896"/><path d="M50,392 L115,392 L115,445 L50,445 Z" fill="#ec9c6c"/><path transform="translate(-8,2)" d="M93,-20 L93,100 C96,130 101,165 103,200 C103,240 99,280 98,320 C98,360 103,405 111,440 L111,720 L530,720 L530,-20 Z" fill="#ec9c6c"/><g clip-path="url(#cf)"><rect x="-20" y="210" width="130" height="210" fill="#ec9c6c"/><use href="#s" fill="#ffc896" transform="translate(-9,-10)"/> <ellipse cx="58" cy="385" rx="26" ry="22" fill="#ff9e86" opacity=".55"/></g><g clip-path="url(#cm)"><rect x="60" y="-20" width="470" height="740" fill="#ec9c6c"/><use href="#s" fill="#ffc896" transform="translate(-34,4)"/> <path d="M112,20 C135,-8 175,-2 182,30 C150,16 130,22 112,20Z" fill="#ff9e86" opacity=".55"/></g><g transform="rotate(14 28 366)"><ellipse cx="30" cy="364" rx="11" ry="21" fill="#ffe6d6" stroke="#3b1c0f" stroke-width="4.5"/></g><g transform="rotate(-8 93 396)"><ellipse cx="94" cy="398" rx="8" ry="15" fill="#ffe6d6" stroke="#3b1c0f" stroke-width="4"/></g><path d="M121,28 C126,10 170,6 176,26 C181,42 179,62 173,69 C155,73 137,73 126,68 C120,58 119,40 121,28 Z" fill="#ffe6d6" stroke="#3b1c0f" stroke-width="6" stroke-linejoin="round"/><path d="M126,66 C124,50 124,38 127,30" fill="none" stroke="#f6c9ab" stroke-width="7" stroke-linecap="round"/><path d="M149,14 C162,13 171,18 172,30 C166,24 158,20 149,14Z" fill="#fff"/><path d="M93,103 C97,132 101,165 103,200 C103,240 99,280 98,320 C98,360 103,405 110,438" fill="none" stroke="#3b1c0f" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M94,226 C90,250 88,280 84,310" fill="none" stroke="#3b1c0f" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M84,310 C89,335 88,365 81,386 C76,399 62,404 49,400" fill="none" stroke="#3b1c0f" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M44,250 C56,260 67,276 74,298" fill="none" stroke="#3b1c0f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M82,396 C86,410 96,424 108,432" fill="none" stroke="#3b1c0f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M60,160 C67,156 76,150 84,142" fill="none" stroke="#3b1c0f" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M127,114 C143,120 163,120 178,112" fill="none" stroke="#3b1c0f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M126,131 C143,138 165,137 180,128" fill="none" stroke="#3b1c0f" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M118,222 C128,232 150,232 165,221" fill="none" stroke="#3b1c0f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g><use href="#s" fill="none" stroke="#3b1c0f" stroke-width="80" stroke-linejoin="round"/></svg>',P0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-110 -16 1626 1286" width="1626" height="1286"><defs><path id="s" transform="translate(0,1270) scale(.2,-.2)" d="M4150 6302 c-246 -123 -194 -738 97 -1144 26 -36 64 -93 85 -125 20 -32 68 -94 107 -137 38 -44 87 -111 107 -150 20 -39 69 -114 108 -166 266 -356 268 -362 99 -382 -43 -5 -121 -14 -173 -20 -112 -14 -483 -13 -1290 2 -828 15 -1148 16 -1265 1 -151 -18 -290 -30 -495 -40 -102 -6 -201 -13 -220 -16 -250 -42 -501 -100 -565 -130 -218 -103 -263 -330 -101 -503 79 -84 63 -106 -84 -116 -52 -3 -120 -10 -150 -16 -30 -5 -91 -14 -135 -19 -269 -32 -245 5 -245 -381 0 -359 0 -360 73 -360 82 0 93 -38 37 -130 -88 -145 -79 -260 29 -381 92 -104 192 -133 576 -170 457 -44 465 -45 482 -61 17 -18 18 -35 8 -139 -15 -149 64 -266 229 -337 328 -142 834 -261 1291 -303 55 -5 136 -13 180 -19 44 -6 125 -15 180 -20 242 -24 288 -31 425 -68 80 -22 181 -54 225 -72 44 -18 136 -52 205 -75 69 -23 169 -61 224 -84 93 -40 364 -110 536 -140 36 -6 93 -15 128 -21 65 -12 785 -16 802 -5 13 8 184 25 350 36 74 4 209 13 300 19 325 21 393 13 530 -66 85 -49 124 -80 224 -180 118 -117 299 -271 353 -299 56 -29 53 -103 53 1359 0 1516 8 1359 -72 1409 -28 17 -459 585 -564 743 -33 49 -70 103 -81 120 -12 16 -56 83 -99 149 -231 356 -435 596 -696 819 -76 64 -190 174 -255 244 -349 376 -511 537 -618 617 -44 33 -134 112 -201 175 -67 63 -140 127 -162 142 -42 27 -63 54 -137 170 -135 212 -321 328 -435 270z"/><clipPath id="c"><use href="#s"/><path d="M0,604 C-50,606 -86,640 -86,680 C-86,722 -48,756 0,754 L40,754 L40,604 Z"/></clipPath></defs><g fill="#3b1c0f" stroke="#3b1c0f" stroke-linejoin="round"><use href="#s" stroke-width="150"/><path d="M0,604 C-50,606 -86,640 -86,680 C-86,722 -48,756 0,754 L40,754 L40,604 Z" stroke-width="30"/></g><g fill="#ec9c6c"><use href="#s"/><path d="M0,604 C-50,606 -86,640 -86,680 C-86,722 -48,756 0,754 L40,754 L40,604 Z"/></g><g clip-path="url(#c)"><g fill="#ffc896" transform="translate(-24,-30)"><use href="#s"/><path d="M0,604 C-50,606 -86,640 -86,680 C-86,722 -48,756 0,754 L40,754 L40,604 Z"/></g><path d="M972,505 C925,545 895,620 872,730 C858,860 900,1000 985,1130 C1000,1160 1300,1180 1520,1100 L1520,700 C1400,520 1200,420 1100,420 C1040,430 1000,470 972,505Z" fill="#f7b184" opacity=".5"/><path d="M138,590 C260,592 460,600 612,612" fill="none" stroke="#3b1c0f" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M36,756 C160,757 400,760 572,768" fill="none" stroke="#3b1c0f" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M250,893 C350,882 500,907 600,905 C632,920 660,975 672,1018" fill="none" stroke="#3b1c0f" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M300,455 C306,490 306,540 300,585" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M470,445 C476,490 476,545 470,595" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M180,612 C186,650 186,705 180,748" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M385,612 C392,650 392,710 385,755" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M226,770 C232,810 232,860 226,886" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M410,772 C416,810 416,860 410,888" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M455,915 C461,950 461,1000 452,1040" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M560,915 C566,950 566,1010 556,1055" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M976,425 C988,450 990,480 972,505" fill="none" stroke="#3b1c0f" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M972,505 C925,545 895,620 872,730 C858,860 900,1000 985,1130" fill="none" stroke="#3b1c0f" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M640,640 C720,660 810,700 868,735" fill="none" stroke="#3b1c0f" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M620,830 C720,845 810,870 874,905" fill="none" stroke="#3b1c0f" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M920,120 C940,150 960,170 985,190" fill="none" stroke="#3b1c0f" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'});function Vv(i,e,t,n){i.src=e;let s=new Image;s.onload=()=>{try{let r=document.createElement("canvas");r.width=Math.round(t*n),r.height=t,r.getContext("2d").drawImage(s,0,0,r.width,r.height),i.src=r.toDataURL("image/png")}catch(r){console.warn("cartoon hand:",r)}},s.src=e}var Cu,Gc,D0,N0,U0,Vc,O0=wt(()=>{L0();Cu=[.82,1.02],Gc=[.103,.146],D0=526/704,N0=i=>`data:image/svg+xml,${encodeURIComponent(i)}`,U0=()=>N0(P0);Vc=class{constructor(e){this.img=e,Vv(e,N0(I0),1200,D0),this.walkT=0,this.lag=0,this.aim=0,this.kick=0,this.lastYaw=null}update(e,t,n,s,r=innerWidth/2,o=innerHeight/2){this.walkT+=e*(6+4*t)*(t>.05?1:0);let a=this.lastYaw===null?0:Math.atan2(Math.sin(n-this.lastYaw),Math.cos(n-this.lastYaw))/Math.max(e,.001);this.lastYaw=n,this.lag+=(Math.max(-2,Math.min(2,a))*.04-this.lag)*(1-Math.exp(-e*8)),this.aim+=((s?1:0)-this.aim)*(1-Math.exp(-e*9)),this.kick=Math.max(0,this.kick-e*5);let c=this.aim,l=t*(1-c*.7),h=innerWidth,u=innerHeight,f=u*(Cu[0]+(Cu[1]-Cu[0])*c),m=f*D0,A=h*.8,x=u*.7,p=r+u*.015,d=o+u*.08,y=A+(p-A)*c+Math.cos(this.walkT)*u*.012*l+this.lag*u*.25,g=x+(d-x)*c+Math.abs(Math.sin(this.walkT))*u*.02*l-this.kick*u*.03,_=-18-10*c-this.kick*9+Math.sin(this.walkT)*2*l;Object.assign(this.img.style,{width:`${m}px`,height:`${f}px`,left:`${y-m*Gc[0]}px`,top:`${g-f*Gc[1]}px`,transformOrigin:`${m*Gc[0]}px ${f*Gc[1]}px`,transform:`rotate(${_}deg)`})}show(e){this.img.style.display=e?"block":"none",e||(this.lastYaw=null)}bang(){this.kick=1}}});function F0(i,e,t){let n=Math.hypot(i,e);if(!n)return[0,0];let s=Math.min(n,t)/n/t;return[i*s,e*s]}var k0=wt(()=>{});function Pu(){try{if(!cn){cn=new(window.AudioContext||window.webkitAudioContext),pt=cn.createGain(),pt.gain.value=z0?1:0,pt.connect(cn.destination),Iu=cn.createBuffer(1,cn.sampleRate,cn.sampleRate);let i=Iu.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1}cn.state==="suspended"&&cn.resume()}catch{cn=null}return cn}function vt(i,e,t,n,s,r){let o=cn.createGain();return o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(t,i+n),o.gain.setValueAtTime(t,i+n+s),o.gain.exponentialRampToValueAtTime(1e-4,i+n+s+r),o.connect(e),o}function en(i,e,t,n,s){let r=cn.createOscillator();if(r.type=i,typeof e=="number")r.frequency.setValueAtTime(e,t);else{r.frequency.setValueAtTime(e[0][1],t);for(let[o,a]of e.slice(1))r.frequency.linearRampToValueAtTime(a,t+o)}return r.connect(s),r.start(t),r.stop(t+n+.05),r}function tn(i,e,t,n=1){let s=cn.createBiquadFilter();return s.type=i,s.frequency.value=e,s.Q.value=n,s.connect(t),s}function gi(i,e,t){let n=cn.createBufferSource();return n.buffer=Iu,n.loop=!0,n.connect(t),n.start(i,Math.random()*.5),n.stop(i+e+.05),n}function B0(i,e,t,n,s){let r=cn.createOscillator(),o=cn.createGain();r.frequency.value=n,o.gain.value=s,r.connect(o).connect(i.frequency),r.start(e),r.stop(e+t+.05)}function Vt(i){if(H0())try{Wv[i](cn.currentTime+.005)}catch{}}function Wc(i=1){if(!(!H0()||i<=.02))try{let e=cn.currentTime+.01,t=Math.min(1,i);gi(e,1,tn("bandpass",3400,vt(e,pt,.5*t,.06,.62,.3),1.4)),gi(e,1,tn("highpass",6e3,vt(e,pt,.12*t,.06,.62,.3)))}catch{}}var cn,pt,Iu,z0,H0,hb,Wv,Lu=wt(()=>{cn=null,pt=null,Iu=null,z0=!0;H0=()=>z0?Pu():null;hb=(()=>{let i=new Float32Array(1024);for(let e=0;e<1024;e++){let t=e/511.5-1;i[e]=Math.tanh(2.2*t)/Math.tanh(2.2)}return i})(),Wv={moo(i){let e=vt(i,tn("lowpass",650,pt,3),.35,.12,.6,.3),t=en("sawtooth",[[0,150],[.25,185],[.75,165],[1,115]],i,1.05,e);B0(t,i,1,5,3)},oink(i){for(let e of[0,.17]){let t=vt(i+e,tn("lowpass",1100,pt,4),.3,.01,.06,.06);en("square",[[0,240],[.1,170]],i+e,.13,t),gi(i+e,.1,tn("bandpass",700,vt(i+e,pt,.1,.01,.05,.04),2))}},baa(i){let e=vt(i,tn("bandpass",1300,pt,1.2),.5,.05,.45,.2),t=en("sawtooth",[[0,470],[.5,430],[.7,380]],i,.72,e);B0(t,i,.7,9,22)},cluck(i){for(let e of[0,.11,.2,.36]){let t=vt(i+e,tn("bandpass",1400,pt,2),.4,.005,.03,.04);en("triangle",[[0,1e3],[.06,620]],i+e,.08,t)}},swoosh(i){let e=tn("bandpass",400,vt(i,pt,.25,.15,.1,.35),1.5);e.frequency.setValueAtTime(300,i),e.frequency.exponentialRampToValueAtTime(3500,i+.45),gi(i,.65,e),en("sine",[[0,300],[.4,900]],i,.45,vt(i,pt,.08,.05,.2,.15))},chime(i){[784,988,1319,1568].forEach((e,t)=>en("sine",e,i+t*.07,.5,vt(i+t*.07,pt,.15,.005,.05,.4)))},bell(i){for(let[e,t]of[[660,.18],[1822,.06],[2640,.03]])en("sine",e,i,1.4,vt(i,pt,t,.003,0,1.3))},boing(i){en("sine",[[0,180],[.08,420],[.3,260]],i,.32,vt(i,pt,.18,.005,.1,.2))},click(i){for(let e of[0,.07])gi(i+e,.04,tn("highpass",2500,vt(i+e,pt,.2,.002,.01,.03)));en("square",300,i,.05,vt(i,tn("lowpass",800,pt),.08,.002,.02,.03))},yay(i){[[523,0],[659,.12],[784,.24],[1047,.38],[784,.56],[1047,.68]].forEach(([e,t])=>{let n=vt(i+t,pt,t>.5?.14:.1,.01,t>.6?.3:.06,.2);en("triangle",e,i+t,.6,n),en("square",e/2,i+t,.3,vt(i+t,tn("lowpass",900,pt),.03,.01,.05,.1))})},clunk(i){en("square",[[0,160],[.06,90]],i,.1,vt(i,tn("lowpass",700,pt),.22,.003,.03,.08)),gi(i,.06,tn("bandpass",1800,vt(i,pt,.12,.002,.02,.05),2))},pop(i){en("sine",[[0,300],[.08,900],[.16,700]],i,.2,vt(i,pt,.18,.005,.06,.12)),[1319,1568].forEach((e,t)=>en("sine",e,i+.1+t*.07,.3,vt(i+.1+t*.07,pt,.06,.005,.03,.25)))},munch(i){for(let e of[0,.14,.3])gi(i+e,.07,tn("bandpass",900+e*1e3,vt(i+e,pt,.14,.005,.03,.05),3))},splash(i){let e=tn("lowpass",2500,vt(i,pt,.25,.01,.08,.4));e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.45),gi(i,.55,e),en("sine",[[0,500],[.15,250]],i,.18,vt(i,pt,.05,.005,.05,.1))},laugh(i){[0,.14,.28,.42,.6].forEach((e,t)=>{let n=620-t*45;en("sawtooth",[[0,n*1.12],[.1,n]],i+e,.14,tn("bandpass",1100,vt(i+e,pt,.22,.01,.06,.06),1.5)),gi(i+e,.04,tn("highpass",2e3,vt(i+e,pt,.06,.003,.01,.03)))})},zoom(i){en("triangle",[[0,260],[.22,620]],i,.24,tn("lowpass",1400,vt(i,pt,.09,.02,.15,.06)));for(let e=0;e<6;e++)gi(i+e*.035,.02,tn("highpass",3e3,vt(i+e*.035,pt,.05,.002,.005,.012)));gi(i+.25,.03,tn("bandpass",2200,vt(i+.25,pt,.16,.002,.01,.03),3))},ting(i){for(let[e,t]of[[2093,.09],[3136,.05],[4186,.025]])en("sine",e,i,.7,vt(i,pt,t,.002,0,.65))},nope(i){for(let e of[0,.13])en("sine",[[0,300],[.09,220]],i+e,.1,vt(i+e,pt,.12,.005,.03,.06))},tick(i){en("triangle",[[0,900],[.05,1200]],i,.07,vt(i,pt,.12,.003,.03,.04))}}});function V0({canUse:i}){let e={binoculars:Fc("binoculars"),magnifier:Fc("magnifier")},t=e.binoculars,n=e.magnifier,s=document.createElement("style");s.textContent=`
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
  #lens { position: fixed; left: 50%; top: 50%; width: ${ro*100}vmin; height: ${ro*100}vmin; margin: -${ro*50}vmin 0 0 -${ro*50}vmin; border-radius: 50%; pointer-events: none; z-index: 3; display: none;
          box-shadow: 0 0 0 0.5vmin #3d1f08, 0 0 0 1.8vmin #d4a017, 0 0 0 2.4vmin #7a4a0a, 0 1.5vmin 3vmin 2.4vmin rgba(0,0,0,0.45); }
  body.magnify #lens { display: block; }
  #lens::before { content: ''; position: absolute; inset: 8%; border-radius: 50%; border-top: 1.2vmin solid rgba(255,255,255,0.35); transform: rotate(-35deg); filter: blur(0.3vmin); } /* a glint */
  #lens::after { content: ''; position: absolute; left: 50%; top: 50%; width: 5.5vmin; height: 24vmin; margin-left: -2.75vmin; border-radius: 2.5vmin;
                 background: linear-gradient(90deg, #5a2d0c, #9c5a1f 45%, #5a2d0c); border-top: 3vmin solid #d4a017;
                 transform: rotate(45deg) translateY(${ro*50+2}vmin); transform-origin: 50% 0; } /* the handle, down and left */`,document.head.appendChild(s);let r={};for(let[p,d,y]of[["binoculars","\u{1F52D}","B"],["magnifier","\u{1F50D}","L"]]){let g=document.createElement("div");g.id=`tool-${p}`,g.className="ctl seektool",g.innerHTML=`<span>${d}</span><b>${y}</b>`,g.addEventListener("pointerdown",_=>{_.preventDefault(),_.stopPropagation(),c(p)}),g.addEventListener("animationend",()=>g.classList.remove("nope","ready")),document.body.appendChild(g),r[p]=g}let o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.id="binox",o.setAttribute("viewBox","0 0 160 100"),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.innerHTML=`<defs><filter id="binox-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.6"/></filter>
    <mask id="binox-eyes" maskUnits="userSpaceOnUse" x="-2000" y="-2000" width="4160" height="4100"><rect x="-2000" y="-2000" width="4160" height="4100" fill="#fff"/>
    <g filter="url(#binox-soft)" fill="#000"><circle cx="57" cy="50" r="40"/><circle cx="103" cy="50" r="40"/></g></mask></defs>
    <rect x="-2000" y="-2000" width="4160" height="4100" fill="#050505" mask="url(#binox-eyes)"/>`,document.body.appendChild(o);let a=document.createElement("div");a.id="lens",document.body.appendChild(a),addEventListener("keydown",p=>{p.repeat||(p.code==="KeyB"?c("binoculars"):p.code==="KeyL"&&c("magnifier"))});function c(p){if(!i())return;let d=e[p],y=e[p==="binoculars"?"magnifier":"binoculars"],g=Eu(d);g==="on"?(y.on&&Eu(y),Vt(p==="binoculars"?"zoom":"ting")):g==="off"?Vt("click"):(Vt("nope"),r[p].classList.remove("nope"),r[p].offsetWidth,r[p].classList.add("nope")),l()}function l(){for(let[p,d]of Object.entries(e)){let y=r[p];y.style.setProperty("--c",a0(d).toFixed(3)),y.classList.toggle("on",d.on),y.classList.toggle("resting",d.wait>0)}document.body.classList.toggle("binox",t.on),document.body.classList.toggle("magnify",n.on)}let h=new pi(16,16,{type:Gs,samples:4}),u=new Zt(20,1,.01,40),f=new Ct(new Qt(2,2),new Gn({uniforms:{map:{value:h.texture},lensHalf:{value:new fe(.5,.5)}},vertexShader:"uniform vec2 lensHalf; varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy * lensHalf, 0.0, 1.0); }",fragmentShader:`uniform sampler2D map; varying vec2 vUv;
      void main() {
        vec2 p = vUv - 0.5; float r = length(p) * 2.0; if (r > 1.0) discard;
        gl_FragColor = texture2D(map, vUv);
        gl_FragColor.rgb *= 1.0 - 0.3 * smoothstep(0.7, 1.0, r); // (a touch darker toward the rim: it looks like glass)
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1}));f.frustumCulled=!1;let m=new kr;m.add(f);let A=new ms(-1,1,1,-1,0,1),x=()=>Math.min(innerWidth,innerHeight)*ro;return{press:c,binoculars:()=>t.on,update(p){if(!i()){for(let d of Object.values(e))Object.assign(d,Fc(d.kind));l();return}for(let[d,y]of Object.entries(e)){let g=o0(y,p);g==="empty"&&Vt("click"),g==="ready"&&(Vt("tick"),r[d].classList.remove("ready"),r[d].offsetWidth,r[d].classList.add("ready"))}l()},steer(p,d){if(!t.on)return p;let y=Ai.binoculars.turn;return{x:(p.x||0)*y,y:0,lookX:(p.lookX||0)*y,lookY:(p.lookY||0)*y+(p.y||0)*.5*d}},fov(p){return t.on?2*Math.atan(Math.tan(p*Math.PI/360)/Ai.binoculars.zoom)*180/Math.PI:p},unzoom(p,d){let y=innerWidth/2,g=innerHeight/2;return!n.on||Math.hypot(p-y,d-g)>x()/2?[p,d]:[y+(p-y)/Ai.magnifier.zoom,g+(d-g)/Ai.magnifier.zoom]},render(p,d,y,g=!0){if(!n.on||!g)return;let _=x(),w=innerHeight,E=Math.round(_*p.getPixelRatio());h.width!==E&&h.setSize(E,E),u.position.copy(y.position),u.quaternion.copy(y.quaternion),u.fov=2*Math.atan(Math.tan(y.fov*Math.PI/360)*_/(w*Ai.magnifier.zoom))*180/Math.PI,u.updateProjectionMatrix();let I=p.shadowMap.autoUpdate;p.shadowMap.autoUpdate=!1,p.setRenderTarget(h),p.render(d,u),p.setRenderTarget(null),p.shadowMap.autoUpdate=I,f.material.uniforms.lensHalf.value.set(_/innerWidth,_/w);let U=p.autoClear;p.autoClear=!1,p.render(m,A),p.autoClear=U}}}var ro,W0=wt(()=>{Vn();$r();Lu();ro=.5});var Du,Xv,qv,Zo,oo,Yv,X0,Kv,Xc,q0=wt(()=>{Du={12:[0,-1],13:[0,1],14:[-1,0],15:[1,0]},Xv=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],qv=i=>Math.abs(i)<.18?0:(i-Math.sign(i)*.18)/(1-.18),Zo=i=>Math.max(-1,Math.min(1,i)),oo=i=>Number.isFinite(i)?i:0,Yv=i=>Math.abs(i)<.3?i:0,X0=(i,e)=>{let t=i-e;return qv(Zo(t/(t>0?1-e:1+e)))},Kv=i=>Math.abs(i)>1.05?[0,0]:Xv[Math.round((i+1)*3.5)&7],Xc=class{constructor({extraPads:e=()=>[]}={}){this.extraPads=e,this.keys={},this.keyEvents=[],this.state=new Map,this.t=0,addEventListener("keydown",n=>{if(this.keys[n.code]=!0,n.repeat)return;let s={Space:"drop",Enter:"drop",KeyF:"toggle",KeyP:"parent",KeyM:"music",Escape:"escape"};s[n.code]&&(this.keyEvents.push({type:s[n.code],pad:-1}),n.preventDefault())}),addEventListener("keyup",n=>{this.keys[n.code]=!1}),addEventListener("blur",()=>{this.keys={}});let t=n=>{n.gamepad&&this.state.delete(n.gamepad.index)};addEventListener("gamepadconnected",t),addEventListener("gamepaddisconnected",t)}padState(e){let t=this.state.get(e.index);if(!t||t.id!==e.id){let n=[oo(e.axes[0]),oo(e.axes[1])];t={id:e.id,rest:n.map(Yv),anchor:n,still:0,hatAxis:-1,btn:[],hold:null},this.state.set(e.index,t)}return t}poll(e,{holdToggle:t,toggleButton:n=1}){this.t+=e;let s=this.keyEvents.splice(0),r=[...navigator.getGamepads?navigator.getGamepads():[],...this.extraPads()],o=[],a=new Set,c=0;for(let u of r){if(!u||!u.connected)continue;a.add(u.index);let f=this.padState(u),m=[oo(u.axes[0]),oo(u.axes[1])];Math.abs(m[0]-f.anchor[0])<.03&&Math.abs(m[1]-f.anchor[1])<.03?f.still+=e:(f.still=0,f.anchor=m),f.still>=1.5&&m.forEach((d,y)=>{Math.abs(d)<.3&&(f.rest[y]=d)}),f.hatAxis<0&&(f.hatAxis=u.axes.findIndex((d,y)=>y>=4&&Math.abs(d)>1.05));let[A,x]=f.hatAxis>=0?Kv(oo(u.axes[f.hatAxis])):[0,0],p=[];u.buttons.forEach((d,y)=>{let g=!!d&&(d.pressed||d.value>.5),_=f.btn[y]||(f.btn[y]={on:!1,t:-1/0}),w=!1,E=!1;if(g!==_.on&&this.t-_.t>=.12&&(_.on=g,_.t=this.t,w=g,E=!g),_.on&&p.push(y),u.mapping==="standard"&&Du[y]){_.on&&(A+=Du[y][0],x+=Du[y][1]);return}t&&y===n?(w&&(f.hold=0),_.on&&f.hold!==null&&(f.hold+=e,c=Math.max(c,f.hold/1),f.hold>=1&&(f.hold=null,s.push({type:"toggle",pad:u.index}))),E&&f.hold!==null&&(f.hold=null,s.push({type:"drop",pad:u.index}))):w&&s.push({type:"drop",pad:u.index})}),t||(f.hold=null),o.push({index:u.index,id:u.id,pressed:p,axes:[...u.axes.slice(0,4)].map(oo),x:Zo(X0(m[0],f.rest[0])+A),y:Zo(X0(m[1],f.rest[1])+x)})}for(let u of this.state.keys())a.has(u)||this.state.delete(u);o.sort((u,f)=>u.index-f.index);let l=this.keys,h={x:Zo((l.ArrowRight||l.KeyD?1:0)-(l.ArrowLeft||l.KeyA?1:0)),y:Zo((l.ArrowDown?1:0)-(l.ArrowUp||l.KeyW?1:0))};return{pads:o,kb:h,events:s,holdProgress:c}}}});function Y0(){addEventListener("keydown",i=>{i.code==="Escape"&&(i.preventDefault(),i.stopImmediatePropagation(),window.close(),setTimeout(()=>{let e=document.getElementById("quit-hint");e||(e=document.createElement("div"),e.id="quit-hint",e.textContent="Press \u2318Q to quit",e.style.cssText="position:fixed;left:50%;top:40%;transform:translateX(-50%);z-index:99;padding:16px 28px;background:#000c;color:#fff;font:bold 32px system-ui,sans-serif;border-radius:14px;pointer-events:none;transition:opacity .4s",document.body.appendChild(e)),e.style.opacity="1",clearTimeout(e.hideTimer),e.hideTimer=setTimeout(()=>{e.style.opacity="0"},2500)},400))},!0)}var K0=wt(()=>{});function tM(i){let e="C",t=-1;for(let[n,s]of Object.entries(Qv)){let r=i.reduce((o,a)=>o+(s.includes(a.n[0])?a.beats:0),0);r>t&&(t=r,e=n)}return eM[e]}var jv,Zv,Jv,$v,Qv,eM,qc,j0=wt(()=>{jv=[{name:"Jingle Bells",bpm:150,bells:!0,notes:"E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:0.5 E4:4 F4:1 F4:1 F4:1.5 F4:0.5 F4:1 E4:1 E4:1 E4:0.5 E4:0.5 E4:1 D4:1 D4:1 E4:1 D4:2 G4:2 E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:0.5 E4:4 F4:1 F4:1 F4:1.5 F4:0.5 F4:1 E4:1 E4:1 E4:0.5 E4:0.5 G4:1 G4:1 F4:1 D4:1 C4:4"},{name:"We Wish You a Merry Christmas",bpm:160,beats:3,notes:"G4:1 C5:1 C5:0.5 D5:0.5 C5:0.5 B4:0.5 A4:1 A4:1 A4:1 D5:1 D5:0.5 E5:0.5 D5:0.5 C5:0.5 B4:1 G4:1 G4:1 E5:1 E5:0.5 F5:0.5 E5:0.5 D5:0.5 C5:1 A4:1 G4:0.5 G4:0.5 A4:1 D5:1 B4:1 C5:3 -:2"},{name:"Deck the Halls",bpm:140,notes:"G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 C4:1 B3:1 C4:2 -:2 G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 C4:1 B3:1 C4:2 -:2 D4:1.5 E4:0.5 F4:1 D4:1 E4:1.5 F4:0.5 G4:1 D4:1 E4:0.5 F#4:0.5 G4:1 A4:0.5 B4:0.5 C5:1 B4:1 A4:1 G4:2 -:2 G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 A4:0.5 A4:0.5 A4:0.5 A4:0.5 G4:1.5 F4:0.5 E4:1 D4:1 C4:2 -:2"}],Zv={C:0,D:2,E:4,F:5,G:7,A:9,B:11},Jv=i=>{let e=/^([A-G])(#?)(\d)$/.exec(i);return 440*2**((Zv[e[1]]+(e[2]?1:0)+(+e[3]+1)*12-69)/12)},$v=i=>i.trim().split(/\s+/).map(e=>{let[t,n]=e.split(":");return{f:t==="-"?0:Jv(t),n:t,beats:+n}}),Qv={C:["C","E","G"],F:["F","A","C"],G:["G","B","D"]},eM={C:130.81/2,F:174.61/2,G:196/2};qc=class{constructor(){this.on=!0;try{this.on=localStorage.getItem("elf-music")!=="off"}catch{}this.k=1,this.song=0,this.i=0,this.t=0,this.timer=null,this.ctx=null,this.songs=jv.map(e=>({...e,notes:$v(e.notes)}))}start(e){!e||this.timer||(this.ctx=e,this.out=e.createGain(),this.out.gain.value=this.on?.55:0,this.out.connect(e.destination),this.t=e.currentTime+.1,this.barBeat=0,this.bar=[],this.timer=setInterval(()=>this.schedule(),60))}setOn(e){this.on=e;try{localStorage.setItem("elf-music",e?"on":"off")}catch{}this.out&&this.out.gain.setTargetAtTime(e?.55:0,this.ctx.currentTime,.05)}tempo(e){this.k=e}schedule(){let e=this.ctx;for(;this.t<e.currentTime+.25;){let t=this.songs[this.song],n=60/t.bpm/this.k,s=t.notes[this.i],r=t.beats||4;if(this.barBeat===0){let o=0,a=this.i,c=[];for(;o<r&&a<t.notes.length;)c.push(t.notes[a]),o+=t.notes[a].beats,a++;let l=tM(c.filter(h=>h.f));for(let h=0;h<r;h++)this.bass(this.t+h*n,h===0?l:l*1.5,n)}if(s.f&&this.bell(this.t,s.f,s.beats*n),t.bells)for(let o=0;o<s.beats;o+=.5)this.jingle(this.t+o*n,o%1?.5:1);this.t+=s.beats*n,this.barBeat=(this.barBeat+s.beats)%r,++this.i>=t.notes.length&&(this.i=0,this.barBeat=0,this.song=(this.song+1)%this.songs.length,this.t+=n*2)}}bell(e,t,n){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.22,e+.008),r.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(.35,n*1.4)),r.connect(this.out);for(let[o,a]of[[1,1],[2,.25],[3,.08]]){let c=s.createOscillator(),l=s.createGain();c.type="sine",c.frequency.value=t*o,l.gain.value=a,c.connect(l).connect(r),c.start(e),c.stop(e+Math.max(.4,n*1.5))}}bass(e,t,n){let s=this.ctx,r=s.createGain(),o=s.createOscillator();o.type="triangle",o.frequency.value=t,r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.16,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+n*.8),o.connect(r).connect(this.out),o.start(e),o.stop(e+n)}jingle(e,t){let n=this.ctx;if(!this.noise){this.noise=n.createBuffer(1,n.sampleRate*.2,n.sampleRate);let a=this.noise.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=Math.random()*2-1}let s=n.createBufferSource(),r=n.createBiquadFilter(),o=n.createGain();s.buffer=this.noise,r.type="bandpass",r.frequency.value=7500,r.Q.value=1.5,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.09*t,e+.004),o.gain.exponentialRampToValueAtTime(1e-4,e+.12),s.connect(r).connect(o).connect(this.out),s.start(e),s.stop(e+.15)}}});var wm={};Im(wm,{start:()=>yM});function Bt(i){Yc.textContent=i,Yc.classList.remove("show"),Yc.offsetWidth,Yc.classList.add("show")}function ta(i,e,t,n,s){Jo.style.display="",Rs.style.display=n===ir&&!Ee.on?"":"none",Fi.style.display=Rs.style.display,nr.style.display=s?"":"none",s&&(nr.textContent=s[0],nr.onclick=()=>{ts(),ci.style.display="none",s[1]()}),am.textContent=i,cm.innerHTML=e,Jo.textContent=t,ci.style.display="flex",zt("gear").style.display=n===ir?"flex":"none",Jo.onclick=()=>{ts(),ci.style.display="none",zt("gear").style.display="none",n()}}function Tn(i){pe=i,document.body.dataset.phase=i,zt("point").textContent=i==="pointing"?"\u{1F6B6} Walk":"\u{1F3AF} Target"}function ir(){tl(),Te=Jr(...Wu),hn.visible=!1,vn.visible=!0,bi.visible=!1,ut.swing=ut.tilt=0,xi.on=!1,Zu(),_i=0,Xu=!1,Ui=!1,Oi=-1,ea(),Tn("hide"),ut.ready=!1,Bt("\u{1F9DD} HIDE THE ELF!")}function Jc(i=!1){if(pe==="hide"){if(!Qp(Te)){i&&(Xu=!0);return}if(e0(Te,ns),Vt("pop"),Tn("sitting"),Oi=0,Ee.on){Bt(i?"\u23F0 HIDDEN!":"\u{1F92B} HIDDEN!");return}setTimeout(()=>{pe==="sitting"&&(Tn("handoff"),ta(i?"\u23F0 Time's up: he's hidden!":"\u{1F92B} He's hidden!","Hand the phone to the <b>seeker</b>.<br>No peeking!","\u{1F50E} I'm the seeker: go!",hm))},1800)}}function hm(){Oe=Uc(...Yn),Mi=0,qn=0,Ui=!1,er=Qo=0,document.body.classList.remove("tapaim"),xn.x=xn.y=null,na(),Tn("seek"),Bt("\u{1F50E} FIND THE ELF!")}function qu(){pe==="seek"?(Tn("pointing"),Oe.pointing=!0,xn.x=xn.y=null,na()):pe==="pointing"&&(Tn("seek"),Oe.pointing=!1)}function $c(i=xn.x,e=xn.y){if(pe!=="pointing"&&pe!=="seek")return;let t=We.getWorldPosition(new T),n=We.getWorldDirection(new T);i!=null&&([i,e]=Ss.unzoom(i,e)),i!=null&&n.set(i/innerWidth*2-1,1-e/innerHeight*2,.5).unproject(We).sub(t).normalize();let s=vn.position.clone();s.y+=De.height/2,ws.set(t,n),ws.far=30,ws.camera=We;let r=a=>{for(;a;a=a.parent)if(!a.visible)return!1;return!0},o=ws.intersectObjects(Ft.children,!0).find(a=>r(a.object)&&!Yu.has(a.object)&&!ia.has(a.object)&&a.object!==hn&&!a.object.isSprite);if(qn++,Ou.bang(),tt){let a=tt.bots.filter(l=>!l.found).find(l=>{let h=l.model.position.clone();return h.y+=De.height/2,Oc(t.toArray(),n.toArray(),h.toArray(),o?o.distance:1/0)});if(!a){Vt("boing"),Bt(qn>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!");return}a.found=!0,Vt("yay");let c=tt.bots.filter(l=>l.found).length;c===tt.bots.length?Mm(!0):Bt(`\u{1F389} FOUND ONE! ${c}/${tt.bots.length}`);return}if(Ee.on){let a=[...es.values()].filter(c=>c.role==="elf"&&!c.found&&c.model.visible).find(c=>{let l=c.model.position.clone();return l.y+=De.height/2,Oc(t.toArray(),n.toArray(),l.toArray(),o?o.distance:1/0)});a?(Vt("yay"),Ee.sendFound(a.id)):(Vt("boing"),Bt(qn>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!"));return}Oc(t.toArray(),n.toArray(),s.toArray(),o?o.distance:1/0)?(Vt("yay"),Tn("found"),Bt("\u{1F389} FOUND HIM!"),setTimeout(()=>ta("\u{1F389} Found him!",`In <b>${lo(Mi)}</b>, with <b>${qn}</b> ${qn===1?"guess":"guesses"}.<br>He was ${Ku()}.`,"\u{1F9DD} Hide him again",ir),1600)):(Vt("boing"),Bt(qn>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!"))}function Qc(i=!1){if(!(pe!=="seek"&&pe!=="pointing")){if(tt){Mm(!1);return}Tn("reveal"),Oe.pointing=!1,Li=0,hn.visible=bi.visible=!0,Bt(i?"\u23F0 TIME'S UP!":"\u{1F440} HE WAS HERE!"),i&&Vt("bell"),Oi=-1,ea(),Te.yaw=Math.atan2(Oe.x-Te.x,Oe.z-Te.z)+Math.PI,setTimeout(()=>ta(i?"\u23F0 Time's up: the elf wins!":"\u{1F9DD} He was here!",`He was ${Ku()}.`,"\u{1F9DD} Hide him again",ir),ln.has("giveup")?1e9:6e3)}}function um(i,e=Te){let t=e.x-Oe.x,n=e.z-Oe.z,s=e.y+De.height/2-We.position.y,r=Math.atan2(-t,-n),o=Math.max(-1.3,Math.min(1.1,Math.atan2(s,Math.hypot(t,n)))),a=1-Math.exp(-i*4),c=Math.atan2(Math.sin(r-Oe.yaw),Math.cos(r-Oe.yaw));Oe.yaw+=c*a,Oe.pitch+=(o-Oe.pitch)*a}function Ku(i=vn.position){let e=i===vn.position&&!!Te.cling;if(i.y>qt&&!e)return"up on the <b>beam</b>";let t=null,n=1/0,s="near";for(let r of sr.things){if(r.gone)continue;let o=new Pt().setFromObject(r.at),a=i.x>o.min.x-.02&&i.x<o.max.x+.02&&i.z>o.min.z-.02&&i.z<o.max.z+.02,c=a?0:Math.hypot(Math.max(o.min.x-i.x,0,i.x-o.max.x),Math.max(o.min.z-i.z,0,i.z-o.max.z));(c<n||c===0&&n===0&&a)&&(n=c,t=r,s=a?i.y>.05?"on top of":"under":"near")}return t?`${e?"hanging on near":s} the <b>${t.name.replace(/ \+.*/,"")}</b>`:e?"hanging on the <b>wall</b>":"somewhere sneaky"}function pm(i,e,t,n){let s=zt(i),r=()=>{for(let o of s.children)o.classList.toggle("on",+o.dataset.s===t())};for(let o of nM){let a=document.createElement("button");a.textContent=lo(o),a.dataset.s=o,a.addEventListener("click",()=>{n(o);try{localStorage.setItem(e,o)}catch{}r()}),s.appendChild(a)}r()}function sM(i,e){xn.x=i,xn.y=e,na(),er=J0+iM,Qo=J0,document.body.classList.add("tapaim")}function na(){let i=zt("aim");i.style.left=xn.x===null?"50%":`${xn.x}px`,i.style.top=xn.y===null?"50%":`${xn.y}px`}function oM(i,e){if(e&&(ku-=i)<=0){ku=.8;let t=new Fo(new zr({map:rM,transparent:!0,depthWrite:!1}));t.position.set(Te.x,Te.y+De.height*.95,Te.z),t.userData={age:0,big:Di.length%3===1?1.5:1,ph:Math.random()*6},Ft.add(t),Di.push(t)}for(let t of Di){let n=t.userData;n.age+=i,t.position.y+=i*.035,t.position.x+=Math.sin(n.age*2.5+n.ph)*i*.015;let s=(.018+n.age*.012)*n.big;t.scale.set(s,s,1),t.material.opacity=Math.min(1,n.age*3)*Math.max(0,1-n.age/2.6)}for(let t=Di.length-1;t>=0;t--)Di[t].userData.age>2.6&&(Ft.remove(Di[t]),Di[t].material.dispose(),Di.splice(t,1))}function Am(i,e,t=[Te]){if(e&&t.length&&(Bu-=i)<=0){Bu=.3/t.length;let n=t[Math.floor(Math.random()*t.length)],s=new Fo(new zr({map:aM,transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.8})),r=Ni.length%2?1:-1;s.position.set(n.x,n.y+De.height*.9,n.z),s.userData={age:0,vx:r*(.02+Math.random()*.02),vz:(Math.random()-.5)*.03},Ft.add(s),Ni.push(s)}for(let n of Ni){let s=n.userData;s.age+=i,n.position.y+=i*.07,n.position.x+=s.vx*i,n.position.z+=s.vz*i;let r=.02+s.age*.03;n.scale.set(r*2,r,1),n.material.opacity=Math.min(1,s.age*5)*Math.max(0,1-s.age/1.4)}for(let n=Ni.length-1;n>=0;n--)Ni[n].userData.age>1.4&&(Ft.remove(Ni[n]),Ni[n].material.dispose(),Ni.splice(n,1))}function Zu(){for(let i of Ni)Ft.remove(i),i.material.dispose();Ni.length=0,Bu=0}function ea(){for(let i of Di)Ft.remove(i),i.material.dispose();Di.length=0,ku=0}function $o(i,e,t){let n=ns.ceiling(i,e),s=t+.01<n?n:xm;for(let r of ns.tops)r.under!==void 0&&r.under>t+.01&&i>r.x0&&i<r.x1&&e>r.z0&&e<r.z1&&(s=Math.min(s,r.under));return s}function Nu(i,e=6,t=vn.position,n=Te.yaw){let s=n+ut.swing,r=-Math.sin(s),o=-Math.cos(s),a=Math.min($o(t.x,t.z,t.y),$o(t.x-r*.25,t.z-o*.25,t.y)),c=a-(t.y+De.height)<.3;c&&(Qs.over=a),Qs.t=Math.max(0,Math.min(1,Qs.t+(c?i:-i)/.35));let l=Qs.t*Qs.t*(3-2*Qs.t),h=.42+(.2-.42)*l,u=.2+(Math.max(.03,Math.min(.1,Qs.over-t.y-.025))-.2)*l,f=new T;for(let x=0;x<6;x++){f.set(t.x-r*h,t.y+u,t.z-o*h);let p=sr.whole;if(!gm(f)&&f.x>p.x0+.05&&f.x<p.x1-.05&&f.z>p.z0+.05&&f.z<p.z1-.05)break;h*=.7,l<.5&&(u=Math.max(u,.1))}f.y=Math.min(f.y,$o(f.x,f.z,t.y)-.025);let m=new T(t.x+r*.15,t.y+De.height*(.6-.25*l),t.z+o*.15),A=ut.ready?1-Math.exp(-i*e):1;ut.ready=!0,ut.pos.lerp(f,A),ut.look.lerp(m,A),l>0&&(ut.pos.y=Math.min(ut.pos.y,f.y)),We.position.copy(ut.pos),We.up.set(0,1,0),We.lookAt(ut.look),We.fov=66,We.updateProjectionMatrix()}function lM(i){let e=new T(Te.x,Te.y+De.height*(Te.cling?.8:.55),Te.z),t=sr.whole;if(!xi.on){let h=ut.look.clone().sub(ut.pos);Object.assign(xi,{on:!0,yaw:Math.atan2(-h.x,-h.z),pitch:Math.atan2(h.y,Math.hypot(h.x,h.z)),w:0})}let n=$o(Te.x,Te.z,Te.y)-(Te.y+De.height)<.3;n0(xi,e,t0(cM(),{x:Yn[0],z:Yn[1]}),i,n?.08:void 0);let s=xi.yaw+ut.swing,r=Math.max(-1.1,Math.min(1.1,xi.pitch+ut.tilt)),o=(h,u,f)=>h>t.x0+.035&&h<t.x1-.035&&f>t.z0+.035&&f<t.z1-.035&&u>.015&&u<$o(h,f,e.y)-.02&&!gm({x:h,y:u,z:f})&&!Zr(ns,h,f,u),a=i0(e,s,r,xi.side,o);xi.side=a.side;let c=ut.ready?1-Math.exp(-i*7):1;ut.ready=!0,xi.w+=(a.w-xi.w)*c;let l=new T(-Math.sin(s)*Math.cos(r),Math.sin(r),-Math.cos(s)*Math.cos(r));l.lerp(e.clone().sub(a).normalize(),xi.w).normalize(),ut.pos.lerp(new T(a.x,a.y,a.z),c),ut.look.lerp(new T(a.x,a.y,a.z).addScaledVector(l,3),c),We.position.copy(ut.pos),We.up.set(0,1,0),We.lookAt(ut.look),We.fov=66,We.updateProjectionMatrix()}function hM(){We.position.set(Oe.x,Oe.eye,Oe.z),We.rotation.set(Oe.pitch,Oe.yaw,0,"YXZ");let i=Ss.fov(pe==="pointing"?52:72);Math.abs(We.fov-i)>.1&&(We.fov+=(i-We.fov)*.2,We.updateProjectionMatrix())}function uM(){tl(),Oe=Uc(...Yn),vn.visible=!1,hn.visible=bi.visible=!1,Tn("count"),_i=0,Ui=!1,document.body.classList.add("counting"),Bt("\u{1F648} COUNT! NO PEEKING\u2026")}function fM(i){Oe=null,ir();for(let e=0;e<16;e++){let t=(i*2.4+e*.7)%(Math.PI*2),n=Yn[0]+Math.sin(t)*1.1,s=Yn[1]+Math.cos(t)*1.1,r=sr.whole;if(!(n<r.x0+.2||n>r.x1-.2||s<r.z0+.2||s>r.z1-.2||ns.tops.some(o=>Ln(o,n,s,.06)))){Te=Jr(n,s,Math.atan2(n-Yn[0],s-Yn[1]));break}}ut.ready=!1,Bt("\u{1F9DD} HIDE! THE SEEKER'S COUNTING")}function _m(i,e){i.traverse(t=>{var n;t.isMesh&&((n=t.material.color)==null?void 0:n.getHex())===14034984&&(t.material=t.material.clone(),t.material.color.setHex(e))})}function dM(i){let e=new Set,t=[...Ee.players.keys()];for(let n of Ee.on?Ee.others():[]){let s=n.st[0]==="s"?"seeker":"elf",r=es.get(n.id),o=s==="seeker"&&so.includes(n.st[7])?n.st[7]:so[0];if(r&&(r.kind!==s||r.look!==o)&&(Ft.remove(r.model),es.delete(n.id),r=null),!r){let c=s==="seeker"?b0(o):zc();s==="elf"&&_m(c,em[Math.max(0,t.indexOf(n.id))%em.length]),c.traverse(l=>ia.add(l)),Ft.add(c),r={model:c,kind:s,look:o},es.set(n.id,r)}e.add(n.id),Object.assign(r,{id:n.id,role:n.role,found:n.found});let a=n.st;s==="seeker"?(r.model.position.set(a[1],0,a[2]),r.model.rotation.y=a[3],E0(r.model,i,{counting:!!a[6],crouch:!!a[5]})):(r.model.position.set(a[1],a[2],a[3]),r.model.rotation.y=a[4],Hc(r.model,i,{walking:a[5],run:a[6],climbing:!!a[7],hanging:!!a[8],air:!!a[9],sit:a[10],asleep:!!a[11],laugh:!!a[12]})),r.model.visible=!(s==="seeker"&&Ee.myRole()==="seeker")}for(let[n,s]of es)e.has(n)||(Ft.remove(s.model),es.delete(n))}function pM(i){if(jc=Math.max(0,jc-i),!Ee.on||pe!=="hide"||jc>0)return;let e=Ee.others().find(s=>s.role==="seeker"&&s.st[0]==="s");if(!e)return;let t=Te.x-e.st[1],n=Te.z-e.st[2];Math.hypot(t,n)>ym||(Wc(1),Ee.sendShh([Te.x,Te.y+De.height,Te.z]),Bt("\u{1F92B} SHHHHH!"),Te.yaw=Math.atan2(-t,-n)+Math.PI,Te.run=1,Te.runT=9,zu=.7,jc=1.5)}function vm(i,e,t){let n=new T(Yn[0],gn.eye,Yn[1]),s=new T(i,e,t),r=n.distanceTo(s);ws.set(n,s.sub(n).normalize()),ws.far=r-.05,ws.camera=We;let o=a=>{for(;a;a=a.parent)if(!a.visible)return!1;return!0};return ws.intersectObjects(Ft.children,!0).some(a=>a.object.isMesh&&o(a.object)&&!Yu.has(a.object)&&!ia.has(a.object)&&a.object!==hn)}function Ju(){let i=tt?tt.saved:[Fn,ai];tl(),Zu(),ea(),Oi=-1,Oe=Uc(...Yn),vn.visible=!1,hn.visible=bi.visible=!1,Fn=Zc.count,ai=Zc.seek,Ft.updateMatrixWorld(!0);let e=x0(ns,Zc.elves,{sx:Yn[0],sz:Yn[1],time:Zc.count-2,hidden:vm});tt={t:0,over:!1,saved:i,bots:e.map((t,n)=>{let s=zc();return _m(s,sm[n][0]),s.traverse(r=>ia.add(r)),Ft.add(s),{h:t,model:s,found:!1,shhT:0,arrow:null,name:sm[n][1]}})},Tn("count"),_i=Mi=0,qn=0,Ui=!1,er=Qo=0,xn.x=xn.y=null,na(),document.body.classList.add("counting"),Bt("\u{1F648} COUNT! NO PEEKING\u2026")}function tl(){if(tt){for(let i of tt.bots)Ft.remove(i.model),i.model.traverse(e=>ia.delete(e)),i.arrow&&Ft.remove(i.arrow);[Fn,ai]=tt.saved,tt=null,hn.visible=!1,document.body.classList.remove("counting")}}function mM(i,e){tt.t+=i;for(let n of tt.bots){let s=y0(n.h,tt.t);n.model.position.set(s.x,s.y,s.z),n.model.rotation.y=s.yaw;let r=n.found||tt.over&&!n.found;if(Hc(n.model,e,{...s,...r?{sit:0,asleep:!1}:{},laugh:r}),n.shhT-=i,pe==="count"&&s.moving&&n.shhT<=0&&Math.hypot(s.x-Oe.x,s.z-Oe.z)<ym&&(Wc(1),Bt("\u{1F92B} SHHHHH!"),n.shhT=2),n.arrow){let o=Math.max(.5,Math.min(6,We.position.distanceTo(n.model.position)/.8)),a=Math.abs(Math.sin(e*5));n.arrow.quaternion.copy(We.quaternion),n.arrow.scale.setScalar(o),n.arrow.position.set(s.x,s.y+De.height,s.z).addScaledVector(new T(0,1,0).applyQuaternion(We.quaternion),(.015+a*.03)*o)}}Am(i,tt.over||tt.bots.some(n=>n.found),tt.bots.filter(n=>n.found||tt.over).map(n=>n.model.position));let t=tt.reveal;if(t&&t.i<t.list.length){let n=t.list[t.i],s=n.model.position;t.t===0&&Bt(`\u{1F440} THE ${n.name.toUpperCase()} ELF WAS HERE!`);let r=t.t;t.t+=i,n.model.rotation.y=Math.atan2(Oe.x-s.x,Oe.z-s.z)+Math.PI,t.t<=vi?um(i,s):r<=vi&&(ut.pos.copy(We.position),ut.look.copy(We.position).addScaledVector(We.getWorldDirection(new T),We.position.distanceTo(s)),ut.ready=!0,ut.swing=Math.PI,Vt("laugh"));let o=We.position.distanceTo(s);hn.visible=t.t<vi+.6,hn.position.set(s.x,s.y+De.height/2,s.z),hn.lookAt(We.position),hn.scale.setScalar(Math.max(.8,Math.min(4,o/1.2))*(1+Math.sin(t.t*6)*.15)),t.t>AM&&(t.i++,t.t=0,hn.visible=!1,t.i>=t.list.length&&t.then())}pe==="count"&&_i>=Fn&&(Tn("seek"),document.body.classList.remove("counting"),Mi=0,Ui=!1,Bt("\u{1F440} READY OR NOT! FIND THE ELVES!"))}function Mm(i){let e=tt,t=e.bots.length,n=e.bots.filter(o=>o.found).length;if(e.over=!0,Tn("found"),Oe.pointing=!1,i)Bt("\u{1F389} FOUND EVERY ELF!");else{Bt("\u23F0 TIME'S UP!"),Vt("bell"),Vt("laugh");for(let o of e.bots)o.found||(o.arrow=bi.clone(),o.arrow.visible=!0,Ft.add(o.arrow))}let s=e.bots.filter(o=>!o.found).map(o=>`The <b>${o.name}</b> elf was ${Ku(o.model.position)}.`).join("<br>"),r=()=>{tt===e&&ta(i?"\u{1F50E} Found every elf!":"\u{1F9DD} The elves win!",i?`All ${t} in <b>${lo(Mi)}</b>, with <b>${qn}</b> ${qn===1?"guess":"guesses"}.`:`You found <b>${n} of ${t}</b>.<br>${s}`,"\u{1F50E} Seek again",Ju,["\u{1F3E0} Back to the start",()=>{tl(),Oe=null,vn.visible=!0,nl()}])};i?setTimeout(r,2e3):setTimeout(()=>{tt===e&&(e.reveal={list:e.bots.filter(o=>!o.found),i:0,t:0,then:()=>setTimeout(r,1200)})},1200)}function gM(i,e){let t=Math.max(0,Math.min(1,i/e)),n=t*Math.PI*2,s=50+Math.sin(n)*42,r=50-Math.cos(n)*42;co.querySelector(".pie").setAttribute("d",t>=.999?"M50 8 A42 42 0 1 1 49.99 8 Z":t<=0?"":`M50 50 L50 8 A42 42 0 ${t>.5?1:0} 1 ${s.toFixed(2)} ${r.toFixed(2)} Z`);let o=Math.max(0,Math.ceil(i));co.querySelector("text").textContent=o>=60?lo(o):String(o),co.classList.toggle("hurry",i<=10)}function sa(){if(zt("online").style.display==="none"&&Ee.on)return;let i=a=>String(a).replace(/[&<>"]/g,c=>`&#${c.charCodeAt(0)};`);wn.querySelector("#ol-name")||(wn.innerHTML=`<div class="box"><h2>\u{1F310} Play online</h2><div class="row">\u{1F3F7}\uFE0F <input id="ol-name" maxlength="12" placeholder="Your name" autocomplete="off" autocorrect="off" spellcheck="false"></div><div class="row">\u{1F50E} When I seek, I'm <button class="look" data-ol="look" data-look="him">\u{1F385} Him</button><button class="look" data-ol="look" data-look="her">\u2744\uFE0F Her</button></div><div id="ol-rest" style="display:contents"></div></div>`,Uu="");let e=wn.querySelector("#ol-name");document.activeElement!==e&&(e.value=el());for(let a of wn.querySelectorAll(".look"))a.classList.toggle("on",a.dataset.look===bm());let t=[...Ee.players.values()].map(a=>i(a.name)).join(", "),n=Ee.status()?`<div class="st">${i(Ee.status())}</div>`:"",s=`${Ee.on?Ee.host?`<div class="code">${Ee.code()}</div><div>In the room: <span class="who">${t}</span></div><div class="row"><button data-ol="start" ${Ee.players.size<2?'disabled style="opacity:.5"':""}>\u25B6\uFE0F Start${Ee.players.size<2?" (waiting for a buddy)":""}</button><button class="grey" data-ol="invite">\u{1F4E4} Invite</button></div>`:`<div class="code">${Ee.code()}</div><div>In the room: <span class="who">${t}</span></div><div>Waiting for the host to start\u2026</div>`:`<div class="row"><button data-ol="host">\u{1F4E1} Host a game</button></div><div class="row">or <input id="ol-code" maxlength="4" size="5" placeholder="CODE" value="${i(Qu)}" autocapitalize="characters" autocomplete="off" autocorrect="off" spellcheck="false"><button data-ol="join">\u{1F517} Join</button></div>`}${n}<div class="row">${Ee.on?'<button class="red" data-ol="leave">\u{1F6AA} Leave</button>':""}<button class="grey" data-ol="close">\u2716 Close</button></div>`;if(s===Uu)return;let r=wn.querySelector("#ol-code");document.activeElement===r&&r||(Uu=s,wn.querySelector("#ol-rest").innerHTML=s)}function xM(){Tn("title"),ci.style.display="none",wn.style.display="flex",sa()}function Em(){Ee.leave(),document.body.classList.remove("online","counting");for(let i of es.values())Ft.remove(i.model);es.clear(),Oe=null,vn.visible=!0,wn.style.display="none",nl()}function nl(){ta("\u{1F9DD} Hide the Elf","Player 1: you're the elf. <b>Walk into things to climb them</b>, <b>jump</b> near something tall, then press <b>\u{1F648} Hide</b>.<br>Player 2: find him!<br>Or \u{1F50E} practice seeking: the computer hides 3 elves. Or \u{1F310} online: everyone on their own phone.","\u{1F9DD} Start hiding",ir)}function ao(i,e){let t=e?{pads:[],kb:{x:0,y:0},events:[]}:mm.poll(i,{holdToggle:!1}),n=Ts.x+t.kb.x,s=Ts.y+t.kb.y,r=!1,o=!1;for(let d of t.pads){n+=d.x,s+=d.y;let y=Q0.get(d.index)||[],g=d.pressed.filter(_=>!y.includes(_));g.includes(0)&&(r=!0),g.includes(2)&&(o=!0),g.includes(3)&&Ss.press("binoculars"),g.includes(1)&&Ss.press("magnifier"),Q0.set(d.index,d.pressed)}e&&({x:n,y:s}=e),n=Math.max(-1,Math.min(1,n)),s=Math.max(-1,Math.min(1,s));let a=t.events.some(d=>d.type==="drop"&&d.pad<0);t.events.some(d=>d.type==="music")&&(ts(),tr.setOn(!tr.on),Vu()),(Kc("KeyH")||o&&pe==="hide")&&Jc(),(Kc("KeyP")||o&&(pe==="seek"||pe==="pointing"))&&qu(),Kc("KeyC")&&Oe&&(Oe.crouch=!Oe.crouch,zt("crouch").classList.toggle("on",Oe.crouch)),Kc("KeyG")&&Qc(),Ss.update(i);let c=performance.now()/1e3;if(pe==="hide"||pe==="title"){let d=pe==="hide"&&(Fu||a||r||e&&e.jump);d&&Vt("swoosh"),pe==="hide"&&(zu>0&&(zu-=i,n=0,s=-1),Nc(Te,{x:n,y:s,jump:d},i,ns),Ee.on?_i=Fn-Ee.left:e||(_i+=i),_i>=Fn-10&&!Ui&&(Ui=!0,Bt("\u23F0 10 SECONDS!"),Vt("bell")),(_i>=Fn||Xu&&!Te.air)&&Jc(!0)),ut.swing+=yi.x*.8,ut.swing*=Math.exp(-i*(uo.size?0:1.5))}else if(pe==="sitting"){ut.swing+=yi.x*.8,ut.tilt=Math.max(-.9,Math.min(.9,ut.tilt-yi.y*.8));let d=Math.exp(-i*(uo.size?0:1.5));ut.swing*=d,ut.tilt*=d}else if(Oe&&pe!=="handoff"&&pe!=="sitting"){(pe==="seek"||pe==="pointing")&&(Ee.on?Mi=ai-Ee.left:e||(Mi+=i),Mi>=ai-10&&!Ui&&(Ui=!0,Bt("\u23F0 10 SECONDS!"),Vt("bell")),Mi>=ai&&!Ee.on&&Qc(!0)),pe==="count"&&(_i=Ee.on?Fn-Ee.left:_i+i),pe==="pointing"&&(a||r)&&$c(),Qo>0&&(Qo-=i)<=0&&$c(),er>0&&(er-=i)<=0&&(document.body.classList.remove("tapaim"),pe==="seek"&&(xn.x=xn.y=null,na()));let d=er>0;pe==="reveal"&&um(i),s0(Oe,(pe==="seek"||pe==="pointing")&&!d?Ss.steer({x:n,y:s,lookX:yi.x,lookY:yi.y},i):pe==="count"?{x:0,y:0,lookX:yi.x,lookY:yi.y}:{x:0,y:0},i,ns)}Fu=!1,yi.x=yi.y=0,vn.position.set(Te.x,Te.y,Te.z),vn.rotation.y=Te.yaw,Oi>=0&&(Oi+=i);let l=bu(Te,Oi);if(Hc(vn,c,{walking:pe==="hide"?Te.walking:0,run:Te.run,climbing:Te.climbing,air:Te.air,...l,laugh:pe==="reveal"||pe==="out"}),oM(i,l.asleep),tt?mM(i,c):Am(i,pe==="reveal"&&Li>vi||pe==="out"),pe==="reveal"){let d=Li;Li+=i,d<=vi&&Li>vi&&(ut.pos.copy(We.position),ut.look.copy(We.position).addScaledVector(We.getWorldDirection(new T),We.position.distanceTo(vn.position)),ut.ready=!0,ut.swing=Math.PI,Vt("laugh"));let y=We.position.distanceTo(vn.position),g=Math.abs(Math.sin(Li*5)),_=Math.max(.8,Math.min(4,y/1.2))*(1+Math.sin(Li*6)*.15),w=Math.max(.5,Math.min(6,y/.8));hn.position.set(Te.x,Te.y+De.height/2,Te.z),hn.scale.setScalar(_),hn.lookAt(We.position),hn.visible=Li<vi+.6,bi.quaternion.copy(We.quaternion),bi.scale.setScalar(w),bi.position.set(Te.x,Te.y+De.height,Te.z).addScaledVector(new T(0,1,0).applyQuaternion(We.quaternion),(.015+g*.03)*w)}let h=pe==="reveal"&&Li>vi,u=tt==null?void 0:tt.reveal,f=u&&u.i<u.list.length&&u.t>vi?u.list[u.i]:null;if(h)Nu(i,2.2),$s=null;else if(f)Nu(i,2.2,f.model.position,f.model.rotation.y),$s=null;else if(Oe&&pe!=="hide"&&pe!=="title"&&pe!=="handoff"&&pe!=="sitting"){hM();let d=$s?Math.hypot(Oe.x-$s[0],Oe.z-$s[1])/Math.max(i,.001)/gn.walk:0;$s=[Oe.x,Oe.z],Ou.update(i,Math.min(1,d),Oe.yaw,pe==="pointing"||er>0,xn.x??innerWidth/2,xn.y??innerHeight/2)}else pe==="sitting"?lM(i):Nu(i),$s=null;Ou.show(ef()&&!Ss.binoculars());let m=pe==="hide"||pe==="count"?Fn-_i:Ee.on?Ee.left:ai-Mi,A=[...Ee.players.values()].filter(d=>d.role==="elf"&&!d.found).length,x=tt?tt.bots.filter(d=>d.found).length:0;Z0.textContent=pe==="hide"?"\u{1F9DD} Hide! Walk into things to climb":pe==="count"?"\u{1F648} Counting\u2026 the elves are hiding":(pe==="seek"||pe==="pointing")&&tt?`\u{1F50E} Found ${x}/${tt.bots.length}${x<tt.bots.length?` \xB7 ${tt.bots.length-x} to go`:""}`:(pe==="seek"||pe==="pointing")&&Ee.on?`\u{1F50E} ${A} ${A===1?"elf":"elves"} to find`:pe==="seek"||pe==="pointing"?`\u{1F50E} Find the elf! \xB7 ${qn} ${qn===1?"guess":"guesses"}`:Ee.on&&pe==="sitting"&&Ee.phase==="seek"?`\u{1F92B} ${lo(Math.max(0,Math.ceil(Ee.left)))} \xB7 stay hidden!`:Ee.on&&pe==="sitting"?`\u{1F92B} hidden \xB7 ${lo(Math.max(0,Math.ceil(Ee.left)))} till the seeker looks`:pe==="out"?`\u{1F389} found \xB7 ${A} still hidden`:"",["hide","count","seek","pointing"].includes(pe)&&gM(m,pe==="hide"||pe==="count"?Fn:ai);let p=(pe==="hide"||pe==="seek"||pe==="pointing")&&m<=10;pM(i),Ee.update(i),dM(c),Z0.classList.toggle("hurry",p),tr.tempo(p?1.3:1),sr.update(i)}function Sm(i){let e=Math.min(.05,(i-Gu)/1e3);Gu=i,ao(e),Nn.render(Ft,We),Ss.render(Nn,Ft,We,ef()),requestAnimationFrame(Sm)}function yM(){if(ln.get("at")&&Wu.splice(0,3,...ln.get("at").split(",").map(Number)),ln.has("shot")){ci.style.display="none",ir();let i=+ln.get("sim")||0,e={x:+(ln.get("sx")??0),y:+(ln.get("sy")??0)};for(let t=0;t<i;t+=1/60)ao(1/60,e);if(ln.has("seek")&&(Oi=2,hm(),ln.has("point")&&qu(),ln.has("giveup"))){Qc();for(let t=0;t<(+ln.get("giveup")||1.5)*60;t++)ao(1/60,{x:0,y:0})}window.__test={elfOnScreen:()=>{let t=vn.position.clone();return t.y+=De.height/2,t.project(We),[(t.x+1)/2*innerWidth,(1-t.y)/2*innerHeight]},guesses:()=>qn,phase:()=>pe},ao(1/60,{x:0,y:0}),ao(1/60,{x:0,y:0}),Nn.render(Ft,We)}else ln.has("practice")?(ci.style.display="none",Ju()):nl();ln.has("debug")&&(window.__elf={onl:Ee,mirrors:es,seeker:()=>Oe,elf:()=>Te,camera:We,fire:(i,e)=>$c(i,e),phase:()=>pe,practice:()=>tt,step:i=>ao(i),hidden:vm}),ln.get("join")&&(wn.style.display="flex",Qu=ln.get("join"),Ee.join(ln.get("join"),el()).then(i=>{i&&document.body.classList.add("online"),sa()})),requestAnimationFrame(i=>{Gu=i,Sm(i)})}var tr,ts,Vu,ln,rm,om,Nn,Ft,We,sr,ns,Wu,Yn,vn,Ou,$s,Te,hn,bi,zt,ci,am,cm,Jo,Yc,Z0,nM,lm,Fn,ai,Oi,pe,Oe,Mi,qn,Li,_i,Xu,Ui,lo,ws,Yu,xn,vi,ho,fm,Ts,dm,Fu,rr,yi,uo,ju,er,Qo,J0,iM,mm,Ss,$0,Kc,Q0,rM,Di,ku,aM,Ni,Bu,ut,gm,xm,Qs,xi,cM,ym,es,ia,em,tm,zu,jc,nm,im,Ee,Zc,sm,tt,AM,wn,$u,co,el,Hu,bm,Qu,Uu,Fi,Rs,nr,ef,Gu,Tm=wt(()=>{Vn();ra();Mu();$r();g0();_0();S0();w0();Cc();C0();O0();k0();W0();q0();K0();Lu();j0();Y0();tr=new qc,ts=()=>{let i=Pu();return tr.start(i),i},Vu=()=>{let i=document.getElementById("music");i&&(i.textContent=tr.on?"\u{1F3B5}":"\u{1F507}")},ln=new URLSearchParams(location.search),om=!!((rm=globalThis.matchMedia)!=null&&rm.call(globalThis,"(pointer: coarse)").matches);om&&document.body.classList.add("touch");Nn=new Oo({antialias:!0,preserveDrawingBuffer:ln.has("shot")});Nn.setPixelRatio(Math.min(devicePixelRatio,1.5));Nn.setSize(innerWidth,innerHeight);Nn.shadowMap.enabled=!0;Nn.shadowMap.type=Dh;Nn.toneMapping=Nh;document.body.appendChild(Nn.domElement);Ft=new kr;Ft.background=new Pe(2762016);We=new Zt(66,innerWidth/innerHeight,.01,40);addEventListener("resize",()=>{Nn.setSize(innerWidth,innerHeight),We.aspect=innerWidth/innerHeight,We.updateProjectionMatrix()});sr=jp(Ft);sr.labels.visible=!1;ns=R0(sr),Wu=[2.6,1,0],Yn=[2.6,1,0],vn=zc();Ft.add(vn);Ou=new Vc(document.getElementById("gun")),$s=null,Te=Jr(...Wu),hn=new Ct(new _n(.12,.018,8,32),new pn({color:16765503,depthTest:!1,transparent:!0}));hn.renderOrder=10;hn.visible=!1;Ft.add(hn);bi=new at;{let i=new pn({color:15087942,depthTest:!1,transparent:!0}),e=new Ct(new Ti(.035,.05,16),i);e.rotation.x=Math.PI,e.position.y=.025;let t=new Ct(new st(.013,.013,.05,12),i);t.position.y=.075;for(let n of[e,t])n.renderOrder=11,bi.add(n)}bi.visible=!1;Ft.add(bi);zt=i=>document.getElementById(i),ci=zt("screen"),am=zt("screen-title"),cm=zt("screen-text"),Jo=zt("screen-go"),Yc=zt("banner"),Z0=zt("hud"),nM=[30,45,60,90,120],lm=i=>{try{return+localStorage.getItem(i)||0}catch{return 0}},Fn=+ln.get("hidetime")||lm("hide-elf.hidetime")||45,ai=+ln.get("seektime")||lm("hide-elf.seektime")||60,Oi=-1,pe="title",Oe=null,Mi=0,qn=0,Li=0,_i=0,Xu=!1,Ui=!1;lo=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,ws=new vc,Yu=new Set;vn.traverse(i=>Yu.add(i));xn={x:null,y:null};vi=1;ho=zt("stick"),fm=zt("knob"),Ts={x:0,y:0},dm=i=>{let e=ho.getBoundingClientRect();[Ts.x,Ts.y]=F0(i.clientX-(e.left+e.width/2),i.clientY-(e.top+e.height/2),e.width/2),fm.style.transform=`translate(${Ts.x*e.width/2}px, ${Ts.y*e.width/2}px)`};ho.addEventListener("pointerdown",i=>{i.preventDefault(),ho.setPointerCapture(i.pointerId),dm(i)});ho.addEventListener("pointermove",i=>{ho.hasPointerCapture(i.pointerId)&&dm(i)});for(let i of["pointerup","pointercancel","lostpointercapture"])ho.addEventListener(i,()=>{Ts.x=Ts.y=0,fm.style.transform=""});Fu=!1,rr=(i,e)=>zt(i).addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),ts(),e()});rr("jump",()=>{Fu=!0});rr("hide",Jc);rr("point",qu);rr("fire",()=>$c());rr("crouch",()=>{Oe&&(Oe.crouch=!Oe.crouch,zt("crouch").classList.toggle("on",Oe.crouch))});rr("giveup",Qc);rr("music",()=>{tr.setOn(!tr.on),Vu()});Vu();pm("hide-times","hide-elf.hidetime",()=>Fn,i=>{Fn=i});pm("seek-times","hide-elf.seektime",()=>ai,i=>{ai=i});zt("gear").addEventListener("click",()=>{zt("settings").style.display="flex"});zt("settings-done").addEventListener("click",()=>{zt("settings").style.display="none"});yi={x:0,y:0},uo=new Map,ju=new Map;Nn.domElement.addEventListener("pointerdown",i=>{ts(),uo.set(i.pointerId,[i.clientX,i.clientY]),ju.set(i.pointerId,[i.clientX,i.clientY,performance.now()]),Nn.domElement.setPointerCapture(i.pointerId)});Nn.domElement.addEventListener("pointermove",i=>{let e=uo.get(i.pointerId);if(!e)return;let t=(pe==="pointing"?.0022:.005)*(om?1:.8);yi.x+=(i.clientX-e[0])*t,yi.y+=(i.clientY-e[1])*t,uo.set(i.pointerId,[i.clientX,i.clientY])});Nn.domElement.addEventListener("pointerup",i=>{let e=ju.get(i.pointerId);e&&(pe==="pointing"||pe==="seek")&&Math.hypot(i.clientX-e[0],i.clientY-e[1])<14&&performance.now()-e[2]<450&&sM(i.clientX,i.clientY)});for(let i of["pointerup","pointercancel"])Nn.domElement.addEventListener(i,e=>{uo.delete(e.pointerId),ju.delete(e.pointerId)});er=0,Qo=0,J0=.28,iM=.9;addEventListener("touchend",()=>ts());mm=new Xc,Ss=V0({canUse:()=>!!Oe&&(pe==="seek"||pe==="pointing")&&ef()}),$0={},Kc=i=>{let e=!!mm.keys[i],t=e&&!$0[i];return $0[i]=e,t},Q0=new Map,rM=Fp(),Di=[],ku=0;aM=(()=>{let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.font='bold 100px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=12,e.strokeStyle="#9d0208",e.strokeText("HA!",128,68),e.fillStyle="#ffd23f",e.fillText("HA!",128,68);let t=new gs(i);return t.colorSpace=yt,t})(),Ni=[],Bu=0;ut={pos:new T,look:new T,ready:!1,swing:0,tilt:0},gm=i=>ns.tops.some(e=>i.x>e.x0&&i.x<e.x1&&i.z>e.z0&&i.z<e.z1&&i.y<e.y1&&!(e.under!==void 0&&i.y<e.under-.01)),xm=Et+.24;Qs={t:0,over:xm};xi={yaw:0,pitch:0,side:1,w:0,on:!1},cM=()=>{let i=Ee.on&&Ee.others().find(e=>e.role==="seeker"&&e.st[0]==="s");return i?{x:i.st[1],z:i.st[2],crouch:!!i.st[5]}:null};ym=.55,es=new Map,ia=new Set,em=[14034984,1667522,2853438,15764480,7358696,15092096,820633],tm=!1,zu=0,jc=0,nm=0,im=0,Ee=A0({myState:()=>{if(Ee.myRole()==="seeker")return Oe?["s",Oe.x,Oe.z,Oe.yaw,Oe.pitch,Oe.crouch?1:0,pe==="count"?1:0,bm()]:null;if(!["hide","sitting","seek","out"].includes(pe)&&pe!=="pointing")return null;let i=bu(Te,Oi);return["e",Te.x,Te.y,Te.z,Te.yaw,pe==="hide"?Te.walking:0,Te.run,Te.climbing?1:0,i.hanging?1:0,Te.air?1:0,i.sit,i.asleep?1:0,pe==="out"?1:0]},onRound({seeker:i,hide:e,seek:t,order:n}){zt("online").style.display="none",ci.style.display="none",Jo.style.display="",Fn=e,ai=t,tm=!1,nm=0,Zu(),ea(),im=Math.max(0,n.indexOf(Ee.me)),i===Ee.me?uM():fM(im)},onPhase(i){i==="seek"?Ee.myRole()==="seeker"?(Tn("seek"),document.body.classList.remove("counting"),Mi=0,Ui=!1,Bt("\u{1F440} READY OR NOT! FIND THE ELVES!")):pe==="hide"&&Jc(!0):i==="lobby"&&xM()},onFound(i,e,t){i===Ee.me?(tm=!0,Tn("out"),nm=0,Oi=-1,ea(),Bt(t?"\u{1F389} FOUND! YOU SEEK NEXT ROUND":"\u{1F389} FOUND!"),Vt("boing")):Bt(`\u{1F389} ${Ee.name(i).toUpperCase()} FOUND!${t?" (SEEKS NEXT)":""}`)},onShh(i,e){i!==Ee.me&&Wc(1-We.position.distanceTo(new T(...e))/4)},onEnd(i){let e=i.next?Ee.name(i.next):null;Tn("results"),document.body.classList.remove("counting"),am.textContent=i.winner==="seeker"?"\u{1F50E} Found every elf!":"\u{1F9DD} The elves win!",cm.innerHTML=`${i.found.length?`Found: <b>${i.found.map(t=>Ee.name(t)).join(", ")}</b>.<br>`:""}${e?`<b>${e}</b> was found first: they seek next.`:"Nobody was found: the next player seeks."}<br>Next round in a few seconds\u2026`,Jo.style.display=Fi.style.display=Rs.style.display=nr.style.display="none",ci.style.display="flex",zt("gear").style.display="none"},onLost(i){Em(),Bt(`\u{1F310} ${i.toUpperCase()}`)},render:()=>sa()});Zc={elves:3,count:20,seek:45},sm=[[1667522,"blue"],[15764480,"orange"],[7358696,"purple"]],tt=null;AM=4.6;wn=document.createElement("div");wn.id="online";document.body.appendChild(wn);{let i=document.createElement("style");i.textContent=`
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
  @keyframes tick { to { transform: scale(1.1); } }`,document.head.appendChild(i)}$u=document.createElement("div");$u.id="lids";$u.innerHTML=`<img src="${U0()}" alt="">`;document.body.appendChild($u);co=document.createElement("div");co.id="clock";co.innerHTML=`<svg viewBox="0 0 100 100"><circle class="face" cx="50" cy="50" r="46"/><path class="pie"/>${Array.from({length:12},(i,e)=>{let t=e*Math.PI/6;return`<line class="tick" x1="${50+Math.sin(t)*38}" y1="${50-Math.cos(t)*38}" x2="${50+Math.sin(t)*44}" y2="${50-Math.cos(t)*44}"/>`}).join("")}<text x="50" y="50"></text></svg>`;document.body.appendChild(co);el=()=>{try{return localStorage.getItem("hide-elf.name")||""}catch{return""}},Hu=null,bm=()=>{let i=Hu;try{i??=localStorage.getItem("hide-elf.look")}catch{}return so.includes(i)?i:so[0]},Qu="",Uu="";wn.addEventListener("input",i=>{if(i.target.id==="ol-code"&&(Qu=i.target.value),i.target.id==="ol-name"){let e=i.target.value.trim().slice(0,12);try{localStorage.setItem("hide-elf.name",e)}catch{}Ee.setName(e)}});wn.addEventListener("click",async i=>{var n;let e=i.target.closest("[data-ol]");if(!e)return;ts();let t=e.dataset.ol;if(t==="host")await Ee.hostGame(el(),{hide:Fn,seek:ai}),document.body.classList.add("online");else if(t==="join")await Ee.join(wn.querySelector("#ol-code").value,el())&&document.body.classList.add("online");else if(t==="start")Ee.startRound();else if(t==="look"){Hu=e.dataset.look;try{localStorage.setItem("hide-elf.look",Hu)}catch{}}else if(t==="invite"){let s=`${po?location.origin+location.pathname.replace(/index\.html$/,""):"https://sean-bostic.github.io/play/hide-elf/"}?join=${Ee.code()}`;navigator.share?navigator.share({title:"Hide the Elf",text:`Hide the Elf! Room ${Ee.code()}`,url:s}).catch(()=>{}):(n=navigator.clipboard)==null||n.writeText(s)}else t==="leave"?Em():t==="close"&&(wn.style.display="none",Ee.on||nl());sa()});Fi=document.createElement("button");Fi.id="screen-online";Fi.textContent="\u{1F310} Play online";ci.appendChild(Fi);Fi.style.cssText="padding:1.8vmin 4vmin;border:0;border-radius:3vmin;background:#1971c2;color:#fff;font:800 max(16px,3.6vmin) system-ui;cursor:pointer";Fi.addEventListener("click",()=>{ts(),wn.style.display="flex",sa()});Rs=document.createElement("button");Rs.textContent="\u{1F50E} Practice seeking";ci.insertBefore(Rs,Fi);Rs.style.cssText=Fi.style.cssText;Rs.style.background="#f08c00";Rs.addEventListener("click",()=>{ts(),ci.style.display="none",zt("gear").style.display="none",Ju()});nr=document.createElement("button");ci.appendChild(nr);nr.style.cssText=Fi.style.cssText;nr.style.background="#495057";ef=()=>!!Oe&&["seek","pointing","found","reveal"].includes(pe)&&!(pe==="reveal"&&Li>vi)&&!(tt!=null&&tt.reveal&&tt.reveal.i<tt.reveal.list.length&&tt.reveal.t>vi),Gu=performance.now()});ra();_u();Lp().then(()=>Promise.resolve().then(()=>(Tm(),wm))).then(i=>i.start());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
