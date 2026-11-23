(()=>{var Um=Object.defineProperty;var ht=(i,e)=>()=>(i&&(e=i(i=0)),e);var Om=(i,e)=>{for(var t in e)Um(i,t,{get:e[t],enumerable:!0})};var ro,Qo=ht(()=>{ro=/\/[^/]+-lab\//.test(location.pathname);if(ro)for(let i of["getItem","setItem","removeItem"]){let e=Storage.prototype[i];Storage.prototype[i]=function(t,...n){return e.call(this,`lab:${t}`,...n)}}});function ni(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function Nh(i,e){return(i%e+e)%e}function NA(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function UA(i,e,t){return i!==e?(t-i)/(e-i):0}function yo(i,e,t){return(1-t)*i+t*e}function OA(i,e,t,n){return yo(i,e,1-Math.exp(-t*n))}function FA(i,e=1){return e-Math.abs(Nh(i,e*2)-e)}function zA(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function BA(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function kA(i,e){return i+Math.floor(Math.random()*(e-i+1))}function HA(i,e){return i+Math.random()*(e-i)}function GA(i){return i*(.5-Math.random())}function VA(i){i!==void 0&&(Gf=i);let e=Gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WA(i){return i*xo}function XA(i){return i*Rr}function Wl(i){return(i&i-1)===0&&i!==0}function qA(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ba(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function YA(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function hp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jA(){let i=So("canvas");return i.style.display="block",i}function _o(i){i in Vf||(Vf[i]=!0,console.warn(i))}function Mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function ul(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);let a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),c=e.dot(bs),l=t.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function _l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function cg(i,e,t,n,s,r,o,a){let c;if(e.side===wn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===xi,a),c===null)return null;ga.copy(a),ga.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ga);return l<t.near||l>t.far?null:{distance:l,point:ga.clone(),object:i}}function xa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,cr),i.getVertexPosition(c,lr),i.getVertexPosition(l,hr);let h=cg(i,e,t,n,cr,lr,hr,Aa);if(h){s&&(da.fromBufferAttribute(s,a),pa.fromBufferAttribute(s,c),ma.fromBufferAttribute(s,l),h.uv=Cs.getInterpolation(Aa,cr,lr,hr,da,pa,ma,new ge)),r&&(da.fromBufferAttribute(r,a),pa.fromBufferAttribute(r,c),ma.fromBufferAttribute(r,l),h.uv1=Cs.getInterpolation(Aa,cr,lr,hr,da,pa,ma,new ge),h.uv2=h.uv1),o&&(nd.fromBufferAttribute(o,a),id.fromBufferAttribute(o,c),sd.fromBufferAttribute(o,l),h.normal=Cs.getInterpolation(Aa,cr,lr,hr,nd,id,sd,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new T,materialIndex:0};Cs.getNormal(cr,lr,hr,u.normal),h.face=u}return h}function Cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=Cr(i[t]);for(let s in n)e[s]=n[s]}return e}function lg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fp(i){return i.getRenderTarget()===null?i.outputColorSpace:ut.workingColorSpace}function dp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mg(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let d=g[x];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}function Ky(i,e,t,n,s,r,o){let a=new De(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(m,d){let y=!1,A=d.isScene===!0?d.background:null;A&&A.isTexture&&(A=(d.backgroundBlurriness>0?t:e).get(A)),A===null?x(a,c):A&&A.isColor&&(x(A,1),y=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Ac)?(h===void 0&&(h=new mt(new Tn(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Cr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ut.getTransfer(A.colorSpace)!==Et,(u!==A||f!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new mt(new Bt(2,2),new On({name:"BackgroundMaterial",uniforms:Cr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=ut.getTransfer(A.colorSpace)!==Et,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,d){m.getRGB(_a,fp(i)),n.buffers.color.setClear(_a.r,_a.g,_a.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function Zy(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(L,z,$,ie,te){let ee=!1;if(o){let he=x(ie,$,z);l!==he&&(l=he,p(l.object)),ee=d(L,ie,$,te),ee&&y(L,ie,$,te)}else{let he=z.wireframe===!0;(l.geometry!==ie.id||l.program!==$.id||l.wireframe!==he)&&(l.geometry=ie.id,l.program=$.id,l.wireframe=he,ee=!0)}te!==null&&t.update(te,i.ELEMENT_ARRAY_BUFFER),(ee||h)&&(h=!1,U(L,z,$,ie),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,z,$){let ie=$.wireframe===!0,te=a[L.id];te===void 0&&(te={},a[L.id]=te);let ee=te[z.id];ee===void 0&&(ee={},te[z.id]=ee);let he=ee[ie];return he===void 0&&(he=m(f()),ee[ie]=he),he}function m(L){let z=[],$=[],ie=[];for(let te=0;te<s;te++)z[te]=0,$[te]=0,ie[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:ie,object:L,attributes:{},index:null}}function d(L,z,$,ie){let te=l.attributes,ee=z.attributes,he=0,fe=$.getAttributes();for(let Me in fe)if(fe[Me].location>=0){let ue=te[Me],be=ee[Me];if(be===void 0&&(Me==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),Me==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),ue===void 0||ue.attribute!==be||be&&ue.data!==be.data)return!0;he++}return l.attributesNum!==he||l.index!==ie}function y(L,z,$,ie){let te={},ee=z.attributes,he=0,fe=$.getAttributes();for(let Me in fe)if(fe[Me].location>=0){let ue=ee[Me];ue===void 0&&(Me==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),Me==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor));let be={};be.attribute=ue,ue&&ue.data&&(be.data=ue.data),te[Me]=be,he++}l.attributes=te,l.attributesNum=he,l.index=ie}function A(){let L=l.newAttributes;for(let z=0,$=L.length;z<$;z++)L[z]=0}function _(L){S(L,0)}function S(L,z){let $=l.newAttributes,ie=l.enabledAttributes,te=l.attributeDivisors;$[L]=1,ie[L]===0&&(i.enableVertexAttribArray(L),ie[L]=1),te[L]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),te[L]=z)}function E(){let L=l.newAttributes,z=l.enabledAttributes;for(let $=0,ie=z.length;$<ie;$++)z[$]!==L[$]&&(i.disableVertexAttribArray($),z[$]=0)}function I(L,z,$,ie,te,ee,he){he===!0?i.vertexAttribIPointer(L,z,$,te,ee):i.vertexAttribPointer(L,z,$,ie,te,ee)}function U(L,z,$,ie){if(n.isWebGL2===!1&&(L.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();let te=ie.attributes,ee=$.getAttributes(),he=z.defaultAttributeValues;for(let fe in ee){let Me=ee[fe];if(Me.location>=0){let Z=te[fe];if(Z===void 0&&(fe==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),fe==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){let ue=Z.normalized,be=Z.itemSize,Re=t.get(Z);if(Re===void 0)continue;let Ie=Re.buffer,We=Re.type,Ge=Re.bytesPerElement,Ue=n.isWebGL2===!0&&(We===i.INT||We===i.UNSIGNED_INT||Z.gpuType===Qd);if(Z.isInterleavedBufferAttribute){let je=Z.data,H=je.stride,j=Z.offset;if(je.isInstancedInterleavedBuffer){for(let J=0;J<Me.locationSize;J++)S(Me.location+J,je.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let J=0;J<Me.locationSize;J++)_(Me.location+J);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let J=0;J<Me.locationSize;J++)I(Me.location+J,be/Me.locationSize,We,ue,H*Ge,(j+be/Me.locationSize*J)*Ge,Ue)}else{if(Z.isInstancedBufferAttribute){for(let je=0;je<Me.locationSize;je++)S(Me.location+je,Z.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let je=0;je<Me.locationSize;je++)_(Me.location+je);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let je=0;je<Me.locationSize;je++)I(Me.location+je,be/Me.locationSize,We,ue,be*Ge,be/Me.locationSize*je*Ge,Ue)}}else if(he!==void 0){let ue=he[fe];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(Me.location,ue);break;case 3:i.vertexAttrib3fv(Me.location,ue);break;case 4:i.vertexAttrib4fv(Me.location,ue);break;default:i.vertexAttrib1fv(Me.location,ue)}}}}E()}function b(){F();for(let L in a){let z=a[L];for(let $ in z){let ie=z[$];for(let te in ie)g(ie[te].object),delete ie[te];delete z[$]}delete a[L]}}function C(L){if(a[L.id]===void 0)return;let z=a[L.id];for(let $ in z){let ie=z[$];for(let te in ie)g(ie[te].object),delete ie[te];delete z[$]}delete a[L.id]}function k(L){for(let z in a){let $=a[z];if($[L.id]===void 0)continue;let ie=$[L.id];for(let te in ie)g(ie[te].object),delete ie[te];delete $[L.id]}}function F(){Q(),h=!0,l!==c&&(l=c,p(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:F,resetDefaultState:Q,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:_,disableUnusedAttributes:E}}function Jy(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function $y(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=f>0,_=o||e.has("OES_texture_float"),S=A&&_,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:A,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:E}}function Qy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Fi,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,A=y*4,_=d.clippingState||null;c.value=_,_=h(g,f,A,p);for(let S=0;S!==A;++S)_[S]=t[S];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,_=p;A!==x;++A,_+=4)o.copy(u[A]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function e_(i){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=Er:a===Hl&&(o.mapping=Sr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===kl||a===Hl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new jl(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function t_(i){let e=[],t=[],n=[],s=i,r=i-yr+1+rd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-yr?c=rd[o-i+yr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,y=new Float32Array(x*g*p),A=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){let I=E%3*2/3-1,U=E>2?0:-1,b=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];y.set(b,x*g*E),A.set(f,m*g*E);let C=[E,E,E,E,E,E];_.set(C,d*g*E)}let S=new Lt;S.setAttribute("position",new Xt(y,x)),S.setAttribute("uv",new Xt(A,m)),S.setAttribute("faceIndex",new Xt(_,d)),e.push(S),s>yr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cd(i,e,t){let n=new si(i,e,t);return n.texture.mapping=Ac,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function n_(i,e,t){let n=new Float32Array(Rs),s=new T(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function ld(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function hd(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Uh(){return`

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
	`}function i_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===kl||c===Hl,h=c===Er||c===Sr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ja(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ja(i));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r_(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let A=0,_=y.length;A<_;A+=3){let S=y[A+0],E=y[A+1],I=y[A+2];f.push(S,E,E,I,I,S)}}else if(g!==void 0){let y=g.array;x=g.version;for(let A=0,_=y.length/3-1;A<_;A+=3){let S=A+0,E=A+1,I=A+2;f.push(S,E,E,I,I,S)}}else return;let m=new(hp(f)?Xa:Wa)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function o_(i,e,t,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*c),t.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,x),t.update(g,r,x)}function f(p,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,x);let d=0;for(let y=0;y<x;y++)d+=g[y];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function a_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function c_(i,e){return i[0]-e[0]}function l_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function h_(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new yt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],U=0;y===!0&&(U=1),A===!0&&(U=2),_===!0&&(U=3);let b=h.attributes.position.count*U,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let k=new Float32Array(b*C*4*g),F=new Ga(k,b,C,g);F.type=zi,F.needsUpdate=!0;let Q=U*4;for(let z=0;z<g;z++){let $=S[z],ie=E[z],te=I[z],ee=b*C*4*z;for(let he=0;he<$.count;he++){let fe=he*Q;y===!0&&(o.fromBufferAttribute($,he),k[ee+fe+0]=o.x,k[ee+fe+1]=o.y,k[ee+fe+2]=o.z,k[ee+fe+3]=0),A===!0&&(o.fromBufferAttribute(ie,he),k[ee+fe+4]=o.x,k[ee+fe+5]=o.y,k[ee+fe+6]=o.z,k[ee+fe+7]=0),_===!0&&(o.fromBufferAttribute(te,he),k[ee+fe+8]=o.x,k[ee+fe+9]=o.y,k[ee+fe+10]=o.z,k[ee+fe+11]=te.itemSize===4?o.w:1)}}x={count:g,texture:F,size:new ge(b,C)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let A=0;A<p;A++)g[A]=[A,0];n[h.id]=g}for(let A=0;A<p;A++){let _=g[A];_[0]=A,_[1]=f[A]}g.sort(l_);for(let A=0;A<8;A++)A<p&&g[A][1]?(a[A][0]=g[A][0],a[A][1]=g[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(c_);let x=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let A=0;A<8;A++){let _=a[A],S=_[0],E=_[1];S!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+A)!==x[S]&&h.setAttribute("morphTarget"+A,x[S]),m&&h.getAttribute("morphNormal"+A)!==m[S]&&h.setAttribute("morphNormal"+A,m[S]),s[A]=E,d+=E):(x&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),m&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),s[A]=0)}let y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function u_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}function Fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ud[s];if(r===void 0&&(r=new Float32Array(s),ud[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yc(i,e){let t=fd[e];t===void 0&&(t=new Int32Array(e),fd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function f_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function A_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;md.set(n),i.uniformMatrix2fv(this.addr,!1,md),Kt(t,n)}}function g_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;pd.set(n),i.uniformMatrix3fv(this.addr,!1,pd),Kt(t,n)}}function x_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;dd.set(n),i.uniformMatrix4fv(this.addr,!1,dd),Kt(t,n)}}function y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function b_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function T_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?mp:pp;t.setTexture2D(e||r,s)}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gp,s)}function C_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xp,s)}function I_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ap,s)}function P_(i){switch(i){case 5126:return f_;case 35664:return d_;case 35665:return p_;case 35666:return m_;case 35674:return A_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return y_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return M_;case 5125:return b_;case 36294:return E_;case 36295:return S_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return I_}}function L_(i,e){i.uniform1fv(this.addr,e)}function D_(i,e){let t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function N_(i,e){let t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function U_(i,e){let t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function O_(i,e){let t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function F_(i,e){let t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function z_(i,e){let t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function B_(i,e){i.uniform1iv(this.addr,e)}function k_(i,e){i.uniform2iv(this.addr,e)}function H_(i,e){i.uniform3iv(this.addr,e)}function G_(i,e){i.uniform4iv(this.addr,e)}function V_(i,e){i.uniform1uiv(this.addr,e)}function W_(i,e){i.uniform2uiv(this.addr,e)}function X_(i,e){i.uniform3uiv(this.addr,e)}function q_(i,e){i.uniform4uiv(this.addr,e)}function Y_(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||pp,r[o])}function j_(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gp,r[o])}function K_(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||xp,r[o])}function Z_(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ap,r[o])}function J_(i){switch(i){case 5126:return L_;case 35664:return D_;case 35665:return N_;case 35666:return U_;case 35674:return O_;case 35675:return F_;case 35676:return z_;case 5124:case 35670:return B_;case 35667:case 35671:return k_;case 35668:case 35672:return H_;case 35669:case 35673:return G_;case 5125:return V_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Z_}}function Ad(i,e){i.seq.push(e),i.map[e.id]=e}function $_(i,e,t){let n=i.name,s=n.length;for(Rl.lastIndex=0;;){let r=Rl.exec(n),o=Rl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ad(t,l===void 0?new Kl(a,i,e):new Zl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Jl(a),Ad(t,u)),t=u}}}function gd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function t1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function n1(i){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i),n;switch(e===t?n="":e===Fa&&t===Oa?n="LinearDisplayP3ToLinearSRGB":e===Oa&&t===Fa&&(n="LinearSRGBToLinearDisplayP3"),i){case qt:case xc:return[n,"LinearTransferOETF"];case ft:case Dh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+t1(i.getShaderSource(e),o)}else return s}function i1(i,e){let t=n1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function s1(i,e){let t;switch(e){case hA:t="Linear";break;case uA:t="Reinhard";break;case fA:t="OptimizedCineon";break;case Rh:t="ACESFilmic";break;case pA:t="AgX";break;case dA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function r1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function o1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_r).join(`
`)}function a1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function c1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function _r(i){return i!==""}function yd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function $l(i){return i.replace(l1,u1)}function u1(i,e){let t=et[e];if(t===void 0){let n=h1.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $l(t)}function vd(i){return i.replace(f1,d1)}function d1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function m1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case Sr:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function g1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jd:e="ENVMAP_BLENDING_MULTIPLY";break;case cA:e="ENVMAP_BLENDING_MIX";break;case lA:e="ENVMAP_BLENDING_ADD";break}return e}function x1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function y1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=p1(t),l=m1(t),h=A1(t),u=g1(t),f=x1(t),p=t.isWebGL2?"":r1(t),g=o1(t),x=a1(r),m=s.createProgram(),d,y,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),d.length>0&&(d+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),y.length>0&&(y+=`
`)):(d=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),y=[p,Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?et.tonemapping_pars_fragment:"",t.toneMapping!==ts?s1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,i1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=$l(o),o=yd(o,t),o=_d(o,t),a=$l(a),a=yd(a,t),a=_d(a,t),o=vd(o),a=vd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let _=A+d+o,S=A+y+a,E=gd(s,s.VERTEX_SHADER,_),I=gd(s,s.FRAGMENT_SHADER,S);s.attachShader(m,E),s.attachShader(m,I),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(F){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(E).trim(),z=s.getShaderInfoLog(I).trim(),$=!0,ie=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,I);else{let te=xd(s,E,"vertex"),ee=xd(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+te+`
`+ee)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||z==="")&&(ie=!1);ie&&(F.diagnostics={runnable:$,programLog:Q,vertexShader:{log:L,prefix:d},fragmentShader:{log:z,prefix:y}})}s.deleteShader(E),s.deleteShader(I),b=new br(s,m),C=c1(s,m)}let b;this.getUniforms=function(){return b===void 0&&U(this),b};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(m,Q_)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=I,this}function v1(i,e,t,n,s,r,o){let a=new wo,c=new Ql,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function m(b,C,k,F,Q){let L=F.fog,z=Q.geometry,$=b.isMeshStandardMaterial?F.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),te=ie&&ie.mapping===Ac?ie.image.height:null,ee=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fe=he!==void 0?he.length:0,Me=0;z.morphAttributes.position!==void 0&&(Me=1),z.morphAttributes.normal!==void 0&&(Me=2),z.morphAttributes.color!==void 0&&(Me=3);let Z,ue,be,Re;if(ee){let mn=Ai[ee];Z=mn.vertexShader,ue=mn.fragmentShader}else Z=b.vertexShader,ue=b.fragmentShader,c.update(b),be=c.getVertexShaderID(b),Re=c.getFragmentShaderID(b);let Ie=i.getRenderTarget(),We=Q.isInstancedMesh===!0,Ge=Q.isBatchedMesh===!0,Ue=!!b.map,je=!!b.matcap,H=!!ie,j=!!b.aoMap,J=!!b.lightMap,ae=!!b.bumpMap,q=!!b.normalMap,re=!!b.displacementMap,ce=!!b.emissiveMap,M=!!b.metalnessMap,v=!!b.roughnessMap,N=b.anisotropy>0,X=b.clearcoat>0,ne=b.iridescence>0,oe=b.sheen>0,ve=b.transmission>0,Ae=N&&!!b.anisotropyMap,Ee=X&&!!b.clearcoatMap,we=X&&!!b.clearcoatNormalMap,R=X&&!!b.clearcoatRoughnessMap,P=ne&&!!b.iridescenceMap,O=ne&&!!b.iridescenceThicknessMap,K=oe&&!!b.sheenColorMap,G=oe&&!!b.sheenRoughnessMap,le=!!b.specularMap,se=!!b.specularColorMap,pe=!!b.specularIntensityMap,Se=ve&&!!b.transmissionMap,Pe=ve&&!!b.thicknessMap,Ce=!!b.gradientMap,de=!!b.alphaMap,D=b.alphaTest>0,me=!!b.alphaHash,xe=!!b.extensions,ke=!!z.attributes.uv1,Be=!!z.attributes.uv2,At=!!z.attributes.uv3,gt=ts;return b.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(gt=i.toneMapping),{isWebGL2:h,shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:Z,fragmentShader:ue,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ge,instancing:We,instancingColor:We&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:qt,map:Ue,matcap:je,envMap:H,envMapMode:H&&ie.mapping,envMapCubeUVHeight:te,aoMap:j,lightMap:J,bumpMap:ae,normalMap:q,displacementMap:f&&re,emissiveMap:ce,normalMapObjectSpace:q&&b.normalMapType===wA,normalMapTangentSpace:q&&b.normalMapType===Lh,metalnessMap:M,roughnessMap:v,anisotropy:N,anisotropyMap:Ae,clearcoat:X,clearcoatMap:Ee,clearcoatNormalMap:we,clearcoatRoughnessMap:R,iridescence:ne,iridescenceMap:P,iridescenceThicknessMap:O,sheen:oe,sheenColorMap:K,sheenRoughnessMap:G,specularMap:le,specularColorMap:se,specularIntensityMap:pe,transmission:ve,transmissionMap:Se,thicknessMap:Pe,gradientMap:Ce,opaque:b.transparent===!1&&b.blending===vr,alphaMap:de,alphaTest:D,alphaHash:me,combine:b.combine,mapUv:Ue&&x(b.map.channel),aoMapUv:j&&x(b.aoMap.channel),lightMapUv:J&&x(b.lightMap.channel),bumpMapUv:ae&&x(b.bumpMap.channel),normalMapUv:q&&x(b.normalMap.channel),displacementMapUv:re&&x(b.displacementMap.channel),emissiveMapUv:ce&&x(b.emissiveMap.channel),metalnessMapUv:M&&x(b.metalnessMap.channel),roughnessMapUv:v&&x(b.roughnessMap.channel),anisotropyMapUv:Ae&&x(b.anisotropyMap.channel),clearcoatMapUv:Ee&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:P&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:O&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:K&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:G&&x(b.sheenRoughnessMap.channel),specularMapUv:le&&x(b.specularMap.channel),specularColorMapUv:se&&x(b.specularColorMap.channel),specularIntensityMapUv:pe&&x(b.specularIntensityMap.channel),transmissionMapUv:Se&&x(b.transmissionMap.channel),thicknessMapUv:Pe&&x(b.thicknessMap.channel),alphaMapUv:de&&x(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(q||N),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Be,vertexUv3s:At,pointsUvs:Q.isPoints===!0&&!!z.attributes.uv&&(Ue||de),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Me,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ue&&b.map.isVideoTexture===!0&&ut.getTransfer(b.map.colorSpace)===Et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Sn,flipSided:b.side===wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:xe&&b.extensions.derivatives===!0,extensionFragDepth:xe&&b.extensions.fragDepth===!0,extensionDrawBuffers:xe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){let C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(let k in b.defines)C.push(k),C.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(y(C,b),A(C,b),C.push(i.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function y(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function A(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),b.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function _(b){let C=g[b.type],k;if(C){let F=Ai[C];k=hg.clone(F.uniforms)}else k=b.uniforms;return k}function S(b,C){let k;for(let F=0,Q=l.length;F<Q;F++){let L=l[F];if(L.cacheKey===C){k=L,++k.usedTimes;break}}return k===void 0&&(k=new y1(i,C,b,r),l.push(k)),k}function E(b){if(--b.usedTimes===0){let C=l.indexOf(b);l[C]=l[l.length-1],l.pop(),b.destroy()}}function I(b){c.remove(b)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:S,releaseProgram:E,releaseShaderCache:I,programs:l,dispose:U}}function M1(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function b1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ed(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,g,x,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||b1),n.length>1&&n.sort(f||bd),s.length>1&&s.sort(f||bd)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function E1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ed,i.set(n,[o])):s>=r.length?(o=new Ed,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function S1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new De};break;case"SpotLight":t={position:new T,direction:new T,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function w1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function R1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C1(i,e){let t=new S1,n=w1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new T);let r=new T,o=new Ye,a=new Ye;function c(h,u){let f=0,p=0,g=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let x=0,m=0,d=0,y=0,A=0,_=0,S=0,E=0,I=0,U=0,b=0;h.sort(R1);let C=u===!0?Math.PI:1;for(let F=0,Q=h.length;F<Q;F++){let L=h[F],z=L.color,$=L.intensity,ie=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=z.r*$*C,p+=z.g*$*C,g+=z.b*$*C;else if(L.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(L.sh.coefficients[ee],$);b++}else if(L.isDirectionalLight){let ee=t.get(L);if(ee.color.copy(L.color).multiplyScalar(L.intensity*C),L.castShadow){let he=L.shadow,fe=n.get(L);fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,s.directionalShadow[x]=fe,s.directionalShadowMap[x]=te,s.directionalShadowMatrix[x]=L.shadow.matrix,_++}s.directional[x]=ee,x++}else if(L.isSpotLight){let ee=t.get(L);ee.position.setFromMatrixPosition(L.matrixWorld),ee.color.copy(z).multiplyScalar($*C),ee.distance=ie,ee.coneCos=Math.cos(L.angle),ee.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ee.decay=L.decay,s.spot[d]=ee;let he=L.shadow;if(L.map&&(s.spotLightMap[I]=L.map,I++,he.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[d]=he.matrix,L.castShadow){let fe=n.get(L);fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,s.spotShadow[d]=fe,s.spotShadowMap[d]=te,E++}d++}else if(L.isRectAreaLight){let ee=t.get(L);ee.color.copy(z).multiplyScalar($),ee.halfWidth.set(L.width*.5,0,0),ee.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=ee,y++}else if(L.isPointLight){let ee=t.get(L);if(ee.color.copy(L.color).multiplyScalar(L.intensity*C),ee.distance=L.distance,ee.decay=L.decay,L.castShadow){let he=L.shadow,fe=n.get(L);fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,fe.shadowCameraNear=he.camera.near,fe.shadowCameraFar=he.camera.far,s.pointShadow[m]=fe,s.pointShadowMap[m]=te,s.pointShadowMatrix[m]=L.shadow.matrix,S++}s.point[m]=ee,m++}else if(L.isHemisphereLight){let ee=t.get(L);ee.skyColor.copy(L.color).multiplyScalar($*C),ee.groundColor.copy(L.groundColor).multiplyScalar($*C),s.hemi[A]=ee,A++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let k=s.hash;(k.directionalLength!==x||k.pointLength!==m||k.spotLength!==d||k.rectAreaLength!==y||k.hemiLength!==A||k.numDirectionalShadows!==_||k.numPointShadows!==S||k.numSpotShadows!==E||k.numSpotMaps!==I||k.numLightProbes!==b)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=y,s.point.length=m,s.hemi.length=A,s.directionalShadow.length=_,s.directionalShadowMap.length=_,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=_,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=E+I-U,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=b,k.directionalLength=x,k.pointLength=m,k.spotLength=d,k.rectAreaLength=y,k.hemiLength=A,k.numDirectionalShadows=_,k.numPointShadows=S,k.numSpotShadows=E,k.numSpotMaps=I,k.numLightProbes=b,s.version=T1++)}function l(h,u){let f=0,p=0,g=0,x=0,m=0,d=u.matrixWorldInverse;for(let y=0,A=h.length;y<A;y++){let _=h[y];if(_.isDirectionalLight){let S=s.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),f++}else if(_.isSpotLight){let S=s.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),g++}else if(_.isRectAreaLight){let S=s.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),a.identity(),o.copy(_.matrixWorld),o.premultiply(d),a.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let S=s.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let S=s.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function Sd(i,e){let t=new C1(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function I1(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Sd(i,e),t.set(r,[c])):o>=a.length?(c=new Sd(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}function D1(i,e,t){let n=new To,s=new ge,r=new ge,o=new yt,a=new th({depthPacking:SA}),c=new nh,l={},h=t.maxTextureSize,u={[xi]:wn,[wn]:xi,[Sn]:Sn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:P1,fragmentShader:L1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let d=this.type;this.render=function(E,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),C=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),F=i.state;F.setBlending(es),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Q=d!==Oi&&this.type===Oi,L=d===Oi&&this.type!==Oi;for(let z=0,$=E.length;z<$;z++){let ie=E[z],te=ie.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);let ee=te.getFrameExtents();if(s.multiply(ee),r.copy(te.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,te.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,te.mapSize.y=r.y)),te.map===null||Q===!0||L===!0){let fe=this.type!==Oi?{minFilter:Ot,magFilter:Ot}:{};te.map!==null&&te.map.dispose(),te.map=new si(s.x,s.y,fe),te.map.texture.name=ie.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();let he=te.getViewportCount();for(let fe=0;fe<he;fe++){let Me=te.getViewport(fe);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),F.viewport(o),te.updateMatrices(ie,fe),n=te.getFrustum(),_(I,U,te.camera,ie,this.type)}te.isPointLightShadow!==!0&&this.type===Oi&&y(te,U),te.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,C,k)};function y(E,I){let U=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new si(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,U,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,U,p,x,null)}function A(E,I,U,b){let C=null,k=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)C=k;else if(C=U.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let F=C.uuid,Q=I.uuid,L=l[F];L===void 0&&(L={},l[F]=L);let z=L[Q];z===void 0&&(z=C.clone(),L[Q]=z,I.addEventListener("dispose",S)),C=z}if(C.visible=I.visible,C.wireframe=I.wireframe,b===Oi?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:u[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,U.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=U}return C}function _(E,I,U,b,C){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Oi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);let Q=e.update(E),L=E.material;if(Array.isArray(L)){let z=Q.groups;for(let $=0,ie=z.length;$<ie;$++){let te=z[$],ee=L[te.materialIndex];if(ee&&ee.visible){let he=A(E,ee,b,C);E.onBeforeShadow(i,E,I,U,Q,he,te),i.renderBufferDirect(U,null,Q,he,E,te),E.onAfterShadow(i,E,I,U,Q,he,te)}}}else if(L.visible){let z=A(E,L,b,C);E.onBeforeShadow(i,E,I,U,Q,z,null),i.renderBufferDirect(U,null,Q,z,E,null),E.onAfterShadow(i,E,I,U,Q,z,null)}}let F=E.children;for(let Q=0,L=F.length;Q<L;Q++)_(F[Q],I,U,b,C)}function S(E){E.target.removeEventListener("dispose",S);for(let U in l){let b=l[U],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function N1(i,e,t){let n=t.isWebGL2;function s(){let D=!1,me=new yt,xe=null,ke=new yt(0,0,0,0);return{setMask:function(Be){xe!==Be&&!D&&(i.colorMask(Be,Be,Be,Be),xe=Be)},setLocked:function(Be){D=Be},setClear:function(Be,At,gt,Qt,mn){mn===!0&&(Be*=Qt,At*=Qt,gt*=Qt),me.set(Be,At,gt,Qt),ke.equals(me)===!1&&(i.clearColor(Be,At,gt,Qt),ke.copy(me))},reset:function(){D=!1,xe=null,ke.set(-1,0,0,0)}}}function r(){let D=!1,me=null,xe=null,ke=null;return{setTest:function(Be){Be?Ge(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(Be){me!==Be&&!D&&(i.depthMask(Be),me=Be)},setFunc:function(Be){if(xe!==Be){switch(Be){case tA:i.depthFunc(i.NEVER);break;case nA:i.depthFunc(i.ALWAYS);break;case iA:i.depthFunc(i.LESS);break;case Da:i.depthFunc(i.LEQUAL);break;case sA:i.depthFunc(i.EQUAL);break;case rA:i.depthFunc(i.GEQUAL);break;case oA:i.depthFunc(i.GREATER);break;case aA:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Be}},setLocked:function(Be){D=Be},setClear:function(Be){ke!==Be&&(i.clearDepth(Be),ke=Be)},reset:function(){D=!1,me=null,xe=null,ke=null}}}function o(){let D=!1,me=null,xe=null,ke=null,Be=null,At=null,gt=null,Qt=null,mn=null;return{setTest:function(_t){D||(_t?Ge(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(_t){me!==_t&&!D&&(i.stencilMask(_t),me=_t)},setFunc:function(_t,An,mi){(xe!==_t||ke!==An||Be!==mi)&&(i.stencilFunc(_t,An,mi),xe=_t,ke=An,Be=mi)},setOp:function(_t,An,mi){(At!==_t||gt!==An||Qt!==mi)&&(i.stencilOp(_t,An,mi),At=_t,gt=An,Qt=mi)},setLocked:function(_t){D=_t},setClear:function(_t){mn!==_t&&(i.clearStencil(_t),mn=_t)},reset:function(){D=!1,me=null,xe=null,ke=null,Be=null,At=null,gt=null,Qt=null,mn=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,x=[],m=null,d=!1,y=null,A=null,_=null,S=null,E=null,I=null,U=null,b=new De(0,0,0),C=0,k=!1,F=null,Q=null,L=null,z=null,$=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ee=0,he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(he)[1]),te=ee>=1):he.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),te=ee>=2);let fe=null,Me={},Z=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),be=new yt().fromArray(Z),Re=new yt().fromArray(ue);function Ie(D,me,xe,ke){let Be=new Uint8Array(4),At=i.createTexture();i.bindTexture(D,At),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<xe;gt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(me,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(me+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return At}let We={};We[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),We[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(We[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),We[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ge(i.DEPTH_TEST),c.setFunc(Da),ce(!1),M(of),Ge(i.CULL_FACE),q(es);function Ge(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function Ue(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function je(D,me){return p[D]!==me?(i.bindFramebuffer(D,me),p[D]=me,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=me),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=me)),!0):!1}function H(D,me){let xe=x,ke=!1;if(D)if(xe=g.get(me),xe===void 0&&(xe=[],g.set(me,xe)),D.isWebGLMultipleRenderTargets){let Be=D.texture;if(xe.length!==Be.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let At=0,gt=Be.length;At<gt;At++)xe[At]=i.COLOR_ATTACHMENT0+At;xe.length=Be.length,ke=!0}}else xe[0]!==i.COLOR_ATTACHMENT0&&(xe[0]=i.COLOR_ATTACHMENT0,ke=!0);else xe[0]!==i.BACK&&(xe[0]=i.BACK,ke=!0);ke&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function j(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let J={[Ts]:i.FUNC_ADD,[km]:i.FUNC_SUBTRACT,[Hm]:i.FUNC_REVERSE_SUBTRACT};if(n)J[lf]=i.MIN,J[hf]=i.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(J[lf]=D.MIN_EXT,J[hf]=D.MAX_EXT)}let ae={[Gm]:i.ZERO,[Vm]:i.ONE,[Wm]:i.SRC_COLOR,[zl]:i.SRC_ALPHA,[Zm]:i.SRC_ALPHA_SATURATE,[jm]:i.DST_COLOR,[qm]:i.DST_ALPHA,[Xm]:i.ONE_MINUS_SRC_COLOR,[Bl]:i.ONE_MINUS_SRC_ALPHA,[Km]:i.ONE_MINUS_DST_COLOR,[Ym]:i.ONE_MINUS_DST_ALPHA,[Jm]:i.CONSTANT_COLOR,[$m]:i.ONE_MINUS_CONSTANT_COLOR,[Qm]:i.CONSTANT_ALPHA,[eA]:i.ONE_MINUS_CONSTANT_ALPHA};function q(D,me,xe,ke,Be,At,gt,Qt,mn,_t){if(D===es){d===!0&&(Ue(i.BLEND),d=!1);return}if(d===!1&&(Ge(i.BLEND),d=!0),D!==Bm){if(D!==y||_t!==k){if((A!==Ts||E!==Ts)&&(i.blendEquation(i.FUNC_ADD),A=Ts,E=Ts),_t)switch(D){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.ONE,i.ONE);break;case af:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case af:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,S=null,I=null,U=null,b.set(0,0,0),C=0,y=D,k=_t}return}Be=Be||me,At=At||xe,gt=gt||ke,(me!==A||Be!==E)&&(i.blendEquationSeparate(J[me],J[Be]),A=me,E=Be),(xe!==_||ke!==S||At!==I||gt!==U)&&(i.blendFuncSeparate(ae[xe],ae[ke],ae[At],ae[gt]),_=xe,S=ke,I=At,U=gt),(Qt.equals(b)===!1||mn!==C)&&(i.blendColor(Qt.r,Qt.g,Qt.b,mn),b.copy(Qt),C=mn),y=D,k=!1}function re(D,me){D.side===Sn?Ue(i.CULL_FACE):Ge(i.CULL_FACE);let xe=D.side===wn;me&&(xe=!xe),ce(xe),D.blending===vr&&D.transparent===!1?q(es):q(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);let ke=D.stencilWrite;l.setTest(ke),ke&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),N(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ge(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(D){F!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),F=D)}function M(D){D!==Fm?(Ge(i.CULL_FACE),D!==Q&&(D===of?i.cullFace(i.BACK):D===zm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),Q=D}function v(D){D!==L&&(te&&i.lineWidth(D),L=D)}function N(D,me,xe){D?(Ge(i.POLYGON_OFFSET_FILL),(z!==me||$!==xe)&&(i.polygonOffset(me,xe),z=me,$=xe)):Ue(i.POLYGON_OFFSET_FILL)}function X(D){D?Ge(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function ne(D){D===void 0&&(D=i.TEXTURE0+ie-1),fe!==D&&(i.activeTexture(D),fe=D)}function oe(D,me,xe){xe===void 0&&(fe===null?xe=i.TEXTURE0+ie-1:xe=fe);let ke=Me[xe];ke===void 0&&(ke={type:void 0,texture:void 0},Me[xe]=ke),(ke.type!==D||ke.texture!==me)&&(fe!==xe&&(i.activeTexture(xe),fe=xe),i.bindTexture(D,me||We[D]),ke.type=D,ke.texture=me)}function ve(){let D=Me[fe];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){be.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),be.copy(D))}function Se(D){Re.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Re.copy(D))}function Pe(D,me){let xe=u.get(me);xe===void 0&&(xe=new WeakMap,u.set(me,xe));let ke=xe.get(D);ke===void 0&&(ke=i.getUniformBlockIndex(me,D.name),xe.set(D,ke))}function Ce(D,me){let ke=u.get(me).get(D);h.get(me)!==ke&&(i.uniformBlockBinding(me,ke,D.__bindingPointIndex),h.set(me,ke))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},fe=null,Me={},p={},g=new WeakMap,x=[],m=null,d=!1,y=null,A=null,_=null,S=null,E=null,I=null,U=null,b=new De(0,0,0),C=0,k=!1,F=null,Q=null,L=null,z=null,$=null,be.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ge,disable:Ue,bindFramebuffer:je,drawBuffers:H,useProgram:j,setBlending:q,setMaterial:re,setFlipSided:ce,setCullFace:M,setLineWidth:v,setPolygonOffset:N,setScissorTest:X,activeTexture:ne,bindTexture:oe,unbindTexture:ve,compressedTexImage2D:Ae,compressedTexImage3D:Ee,texImage2D:le,texImage3D:se,updateUBOMapping:Pe,uniformBlockBinding:Ce,texStorage2D:K,texStorage3D:G,texSubImage2D:we,texSubImage3D:R,compressedTexSubImage2D:P,compressedTexSubImage3D:O,scissor:pe,viewport:Se,reset:de}}function U1(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return p?new OffscreenCanvas(M,v):So("canvas")}function x(M,v,N,X){let ne=1;if((M.width>X||M.height>X)&&(ne=X/Math.max(M.width,M.height)),ne<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let oe=v?Ba:Math.floor,ve=oe(ne*M.width),Ae=oe(ne*M.height);u===void 0&&(u=g(ve,Ae));let Ee=N?g(ve,Ae):u;return Ee.width=ve,Ee.height=Ae,Ee.getContext("2d").drawImage(M,0,0,ve,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ve+"x"+Ae+")."),Ee}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Wl(M.width)&&Wl(M.height)}function d(M){return a?!1:M.wrapS!==nn||M.wrapT!==nn||M.minFilter!==Ot&&M.minFilter!==yn}function y(M,v){return M.generateMipmaps&&v&&M.minFilter!==Ot&&M.minFilter!==yn}function A(M){i.generateMipmap(M)}function _(M,v,N,X,ne=!1){if(a===!1)return v;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let oe=v;if(v===i.RED&&(N===i.FLOAT&&(oe=i.R32F),N===i.HALF_FLOAT&&(oe=i.R16F),N===i.UNSIGNED_BYTE&&(oe=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(oe=i.R8UI),N===i.UNSIGNED_SHORT&&(oe=i.R16UI),N===i.UNSIGNED_INT&&(oe=i.R32UI),N===i.BYTE&&(oe=i.R8I),N===i.SHORT&&(oe=i.R16I),N===i.INT&&(oe=i.R32I)),v===i.RG&&(N===i.FLOAT&&(oe=i.RG32F),N===i.HALF_FLOAT&&(oe=i.RG16F),N===i.UNSIGNED_BYTE&&(oe=i.RG8)),v===i.RGBA){let ve=ne?Ua:ut.getTransfer(X);N===i.FLOAT&&(oe=i.RGBA32F),N===i.HALF_FLOAT&&(oe=i.RGBA16F),N===i.UNSIGNED_BYTE&&(oe=ve===Et?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function S(M,v,N){return y(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==Ot&&M.minFilter!==yn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function E(M){return M===Ot||M===Na||M===go?i.NEAREST:i.LINEAR}function I(M){let v=M.target;v.removeEventListener("dispose",I),b(v),v.isVideoTexture&&h.delete(v)}function U(M){let v=M.target;v.removeEventListener("dispose",U),k(v)}function b(M){let v=n.get(M);if(v.__webglInit===void 0)return;let N=M.source,X=f.get(N);if(X){let ne=X[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(M),Object.keys(X).length===0&&f.delete(N)}n.remove(M)}function C(M){let v=n.get(M);i.deleteTexture(v.__webglTexture);let N=M.source,X=f.get(N);delete X[v.__cacheKey],o.memory.textures--}function k(M){let v=M.texture,N=n.get(M),X=n.get(v);if(X.__webglTexture!==void 0&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(N.__webglFramebuffer[ne]))for(let oe=0;oe<N.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(N.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(N.__webglFramebuffer[ne]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[ne])}else{if(Array.isArray(N.__webglFramebuffer))for(let ne=0;ne<N.__webglFramebuffer.length;ne++)i.deleteFramebuffer(N.__webglFramebuffer[ne]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ne=0;ne<N.__webglColorRenderbuffer.length;ne++)N.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[ne]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ne=0,oe=v.length;ne<oe;ne++){let ve=n.get(v[ne]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(v[ne])}n.remove(v),n.remove(M)}let F=0;function Q(){F=0}function L(){let M=F;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),F+=1,M}function z(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function $(M,v){let N=n.get(M);if(M.isVideoTexture&&re(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let X=M.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(N,M,v);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function ie(M,v){let N=n.get(M);if(M.version>0&&N.__version!==M.version){be(N,M,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function te(M,v){let N=n.get(M);if(M.version>0&&N.__version!==M.version){be(N,M,v);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function ee(M,v){let N=n.get(M);if(M.version>0&&N.__version!==M.version){Re(N,M,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}let he={[ii]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},fe={[Ot]:i.NEAREST,[Na]:i.NEAREST_MIPMAP_NEAREST,[go]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Ch]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},Me={[TA]:i.NEVER,[DA]:i.ALWAYS,[RA]:i.LESS,[cp]:i.LEQUAL,[CA]:i.EQUAL,[LA]:i.GEQUAL,[IA]:i.GREATER,[PA]:i.NOTEQUAL};function Z(M,v,N){if(N?(i.texParameteri(M,i.TEXTURE_WRAP_S,he[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,he[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,he[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,fe[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,fe[v.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==nn||v.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,E(v.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,E(v.minFilter)),v.minFilter!==Ot&&v.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let X=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ot||v.minFilter!==go&&v.minFilter!==is||v.type===zi&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Ds&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(M,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function ue(M,v){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",I));let X=v.source,ne=f.get(X);ne===void 0&&(ne={},f.set(X,ne));let oe=z(v);if(oe!==M.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ne[oe].usedTimes++;let ve=ne[M.__cacheKey];ve!==void 0&&(ne[M.__cacheKey].usedTimes--,ve.usedTimes===0&&C(v)),M.__cacheKey=oe,M.__webglTexture=ne[oe].texture}return N}function be(M,v,N){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let ne=ue(M,v),oe=v.source;t.bindTexture(X,M.__webglTexture,i.TEXTURE0+N);let ve=n.get(oe);if(oe.version!==ve.__version||ne===!0){t.activeTexture(i.TEXTURE0+N);let Ae=ut.getPrimaries(ut.workingColorSpace),Ee=v.colorSpace===Wn?null:ut.getPrimaries(v.colorSpace),we=v.colorSpace===Wn||Ae===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let R=d(v)&&m(v.image)===!1,P=x(v.image,R,!1,s.maxTextureSize);P=ce(v,P);let O=m(P)||a,K=r.convert(v.format,v.colorSpace),G=r.convert(v.type),le=_(v.internalFormat,K,G,v.colorSpace,v.isVideoTexture);Z(X,v,O);let se,pe=v.mipmaps,Se=a&&v.isVideoTexture!==!0&&le!==rp,Pe=ve.__version===void 0||ne===!0,Ce=S(v,P,O);if(v.isDepthTexture)le=i.DEPTH_COMPONENT,a?v.type===zi?le=i.DEPTH_COMPONENT32F:v.type===$i?le=i.DEPTH_COMPONENT24:v.type===Is?le=i.DEPTH24_STENCIL8:le=i.DEPTH_COMPONENT16:v.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ps&&le===i.DEPTH_COMPONENT&&v.type!==Ih&&v.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=$i,G=r.convert(v.type)),v.format===wr&&le===i.DEPTH_COMPONENT&&(le=i.DEPTH_STENCIL,v.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Is,G=r.convert(v.type))),Pe&&(Se?t.texStorage2D(i.TEXTURE_2D,1,le,P.width,P.height):t.texImage2D(i.TEXTURE_2D,0,le,P.width,P.height,0,K,G,null));else if(v.isDataTexture)if(pe.length>0&&O){Se&&Pe&&t.texStorage2D(i.TEXTURE_2D,Ce,le,pe[0].width,pe[0].height);for(let de=0,D=pe.length;de<D;de++)se=pe[de],Se?t.texSubImage2D(i.TEXTURE_2D,de,0,0,se.width,se.height,K,G,se.data):t.texImage2D(i.TEXTURE_2D,de,le,se.width,se.height,0,K,G,se.data);v.generateMipmaps=!1}else Se?(Pe&&t.texStorage2D(i.TEXTURE_2D,Ce,le,P.width,P.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,K,G,P.data)):t.texImage2D(i.TEXTURE_2D,0,le,P.width,P.height,0,K,G,P.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Se&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,le,pe[0].width,pe[0].height,P.depth);for(let de=0,D=pe.length;de<D;de++)se=pe[de],v.format!==Vn?K!==null?Se?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,se.width,se.height,P.depth,K,se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,le,se.width,se.height,P.depth,0,se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,se.width,se.height,P.depth,K,G,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,le,se.width,se.height,P.depth,0,K,G,se.data)}else{Se&&Pe&&t.texStorage2D(i.TEXTURE_2D,Ce,le,pe[0].width,pe[0].height);for(let de=0,D=pe.length;de<D;de++)se=pe[de],v.format!==Vn?K!==null?Se?t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,se.width,se.height,K,se.data):t.compressedTexImage2D(i.TEXTURE_2D,de,le,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage2D(i.TEXTURE_2D,de,0,0,se.width,se.height,K,G,se.data):t.texImage2D(i.TEXTURE_2D,de,le,se.width,se.height,0,K,G,se.data)}else if(v.isDataArrayTexture)Se?(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,le,P.width,P.height,P.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,K,G,P.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,P.width,P.height,P.depth,0,K,G,P.data);else if(v.isData3DTexture)Se?(Pe&&t.texStorage3D(i.TEXTURE_3D,Ce,le,P.width,P.height,P.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,K,G,P.data)):t.texImage3D(i.TEXTURE_3D,0,le,P.width,P.height,P.depth,0,K,G,P.data);else if(v.isFramebufferTexture){if(Pe)if(Se)t.texStorage2D(i.TEXTURE_2D,Ce,le,P.width,P.height);else{let de=P.width,D=P.height;for(let me=0;me<Ce;me++)t.texImage2D(i.TEXTURE_2D,me,le,de,D,0,K,G,null),de>>=1,D>>=1}}else if(pe.length>0&&O){Se&&Pe&&t.texStorage2D(i.TEXTURE_2D,Ce,le,pe[0].width,pe[0].height);for(let de=0,D=pe.length;de<D;de++)se=pe[de],Se?t.texSubImage2D(i.TEXTURE_2D,de,0,0,K,G,se):t.texImage2D(i.TEXTURE_2D,de,le,K,G,se);v.generateMipmaps=!1}else Se?(Pe&&t.texStorage2D(i.TEXTURE_2D,Ce,le,P.width,P.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,K,G,P)):t.texImage2D(i.TEXTURE_2D,0,le,K,G,P);y(v,O)&&A(X),ve.__version=oe.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Re(M,v,N){if(v.image.length!==6)return;let X=ue(M,v),ne=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let oe=n.get(ne);if(ne.version!==oe.__version||X===!0){t.activeTexture(i.TEXTURE0+N);let ve=ut.getPrimaries(ut.workingColorSpace),Ae=v.colorSpace===Wn?null:ut.getPrimaries(v.colorSpace),Ee=v.colorSpace===Wn||ve===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,P=[];for(let de=0;de<6;de++)!we&&!R?P[de]=x(v.image[de],!1,!0,s.maxCubemapSize):P[de]=R?v.image[de].image:v.image[de],P[de]=ce(v,P[de]);let O=P[0],K=m(O)||a,G=r.convert(v.format,v.colorSpace),le=r.convert(v.type),se=_(v.internalFormat,G,le,v.colorSpace),pe=a&&v.isVideoTexture!==!0,Se=oe.__version===void 0||X===!0,Pe=S(v,O,K);Z(i.TEXTURE_CUBE_MAP,v,K);let Ce;if(we){pe&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,se,O.width,O.height);for(let de=0;de<6;de++){Ce=P[de].mipmaps;for(let D=0;D<Ce.length;D++){let me=Ce[D];v.format!==Vn?G!==null?pe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,0,0,me.width,me.height,G,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,0,0,me.width,me.height,G,le,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,se,me.width,me.height,0,G,le,me.data)}}}else{Ce=v.mipmaps,pe&&Se&&(Ce.length>0&&Pe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,se,P[0].width,P[0].height));for(let de=0;de<6;de++)if(R){pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,P[de].width,P[de].height,G,le,P[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,se,P[de].width,P[de].height,0,G,le,P[de].data);for(let D=0;D<Ce.length;D++){let xe=Ce[D].image[de].image;pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,0,0,xe.width,xe.height,G,le,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,se,xe.width,xe.height,0,G,le,xe.data)}}else{pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,G,le,P[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,se,G,le,P[de]);for(let D=0;D<Ce.length;D++){let me=Ce[D];pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,0,0,G,le,me.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,se,G,le,me.image[de])}}}y(v,K)&&A(i.TEXTURE_CUBE_MAP),oe.__version=ne.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Ie(M,v,N,X,ne,oe){let ve=r.convert(N.format,N.colorSpace),Ae=r.convert(N.type),Ee=_(N.internalFormat,ve,Ae,N.colorSpace);if(!n.get(v).__hasExternalTextures){let R=Math.max(1,v.width>>oe),P=Math.max(1,v.height>>oe);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,Ee,R,P,v.depth,0,ve,Ae,null):t.texImage2D(ne,oe,Ee,R,P,0,ve,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),q(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ne,n.get(N).__webglTexture,0,ae(v)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ne,n.get(N).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(M,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let X=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||q(v)){let ne=v.depthTexture;ne&&ne.isDepthTexture&&(ne.type===zi?X=i.DEPTH_COMPONENT32F:ne.type===$i&&(X=i.DEPTH_COMPONENT24));let oe=ae(v);q(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,X,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,X,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){let X=ae(v);N&&q(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,X,i.DEPTH24_STENCIL8,v.width,v.height):q(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{let X=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ne=0;ne<X.length;ne++){let oe=X[ne],ve=r.convert(oe.format,oe.colorSpace),Ae=r.convert(oe.type),Ee=_(oe.internalFormat,ve,Ae,oe.colorSpace),we=ae(v);N&&q(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Ee,v.width,v.height):q(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);let X=n.get(v.depthTexture).__webglTexture,ne=ae(v);if(v.depthTexture.format===Ps)q(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(v.depthTexture.format===wr)q(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Ue(M){let v=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ge(v.__webglFramebuffer,M)}else if(N){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]=i.createRenderbuffer(),We(v.__webglDepthbuffer[X],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),We(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(M,v,N){let X=n.get(M);v!==void 0&&Ie(X.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ue(M)}function H(M){let v=M.texture,N=n.get(M),X=n.get(v);M.addEventListener("dispose",U),M.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,o.memory.textures++);let ne=M.isWebGLCubeRenderTarget===!0,oe=M.isWebGLMultipleRenderTargets===!0,ve=m(M)||a;if(ne){N.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[Ae]=[];for(let Ee=0;Ee<v.mipmaps.length;Ee++)N.__webglFramebuffer[Ae][Ee]=i.createFramebuffer()}else N.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)N.__webglFramebuffer[Ae]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(oe)if(s.drawBuffers){let Ae=M.texture;for(let Ee=0,we=Ae.length;Ee<we;Ee++){let R=n.get(Ae[Ee]);R.__webglTexture===void 0&&(R.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&q(M)===!1){let Ae=oe?v:[v];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Ee=0;Ee<Ae.length;Ee++){let we=Ae[Ee];N.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Ee]);let R=r.convert(we.format,we.colorSpace),P=r.convert(we.type),O=_(we.internalFormat,R,P,we.colorSpace,M.isXRRenderTarget===!0),K=ae(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,O,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,N.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),We(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Z(i.TEXTURE_CUBE_MAP,v,ve);for(let Ae=0;Ae<6;Ae++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)Ie(N.__webglFramebuffer[Ae][Ee],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ee);else Ie(N.__webglFramebuffer[Ae],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(v,ve)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let Ae=M.texture;for(let Ee=0,we=Ae.length;Ee<we;Ee++){let R=Ae[Ee],P=n.get(R);t.bindTexture(i.TEXTURE_2D,P.__webglTexture),Z(i.TEXTURE_2D,R,ve),Ie(N.__webglFramebuffer,M,R,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),y(R,ve)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?Ae=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,X.__webglTexture),Z(Ae,v,ve),a&&v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)Ie(N.__webglFramebuffer[Ee],M,v,i.COLOR_ATTACHMENT0,Ae,Ee);else Ie(N.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,Ae,0);y(v,ve)&&A(Ae),t.unbindTexture()}M.depthBuffer&&Ue(M)}function j(M){let v=m(M)||a,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let X=0,ne=N.length;X<ne;X++){let oe=N[X];if(y(oe,v)){let ve=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(oe).__webglTexture;t.bindTexture(ve,Ae),A(ve),t.unbindTexture()}}}function J(M){if(a&&M.samples>0&&q(M)===!1){let v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,X=M.height,ne=i.COLOR_BUFFER_BIT,oe=[],ve=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(M),Ee=M.isWebGLMultipleRenderTargets===!0;if(Ee)for(let we=0;we<v.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<v.length;we++){oe.push(i.COLOR_ATTACHMENT0+we),M.depthBuffer&&oe.push(ve);let R=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(R===!1&&(M.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),Ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]),R===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ve])),Ee){let P=n.get(v[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,N,X,0,0,N,X,ne,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let we=0;we<v.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let R=n.get(v[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function ae(M){return Math.min(s.maxSamples,M.samples)}function q(M){let v=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function re(M){let v=o.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function ce(M,v){let N=M.colorSpace,X=M.format,ne=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Vl||N!==qt&&N!==Wn&&(ut.getTransfer(N)===Et?a===!1?e.has("EXT_sRGB")===!0&&X===Vn?(M.format=Vl,M.minFilter=yn,M.generateMipmaps=!1):v=ka.sRGBToLinear(v):(X!==Vn||ne!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=L,this.resetTextureUnits=Q,this.setTexture2D=$,this.setTexture2DArray=ie,this.setTexture3D=te,this.setTextureCube=ee,this.rebindTextures=je,this.setupRenderTarget=H,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=q}function O1(i,e,t){let n=t.isWebGL2;function s(r,o=Wn){let a,c=ut.getTransfer(o);if(r===ns)return i.UNSIGNED_BYTE;if(r===ep)return i.UNSIGNED_SHORT_4_4_4_4;if(r===tp)return i.UNSIGNED_SHORT_5_5_5_1;if(r===AA)return i.BYTE;if(r===gA)return i.SHORT;if(r===Ih)return i.UNSIGNED_SHORT;if(r===Qd)return i.INT;if(r===$i)return i.UNSIGNED_INT;if(r===zi)return i.FLOAT;if(r===Ds)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xA)return i.ALPHA;if(r===Vn)return i.RGBA;if(r===yA)return i.LUMINANCE;if(r===_A)return i.LUMINANCE_ALPHA;if(r===Ps)return i.DEPTH_COMPONENT;if(r===wr)return i.DEPTH_STENCIL;if(r===Vl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ph)return i.RED;if(r===np)return i.RED_INTEGER;if(r===vA)return i.RG;if(r===ip)return i.RG_INTEGER;if(r===sp)return i.RGBA_INTEGER;if(r===tl||r===nl||r===il||r===sl)if(c===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===tl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===tl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===il)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ff||r===df||r===pf||r===mf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ff)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===df)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Af||r===gf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Af)return c===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===gf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xf||r===yf||r===_f||r===vf||r===Mf||r===bf||r===Ef||r===Sf||r===wf||r===Tf||r===Rf||r===Cf||r===If||r===Pf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===xf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_f)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ef)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===If)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pf)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rl||r===Lf||r===Df)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===rl)return c===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Lf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Df)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===MA||r===Nf||r===Uf||r===Of)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===rl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Nf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Of)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Is?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function z1(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,fp(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,A,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,A):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===wn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===wn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let A=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*A,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===wn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B1(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,A){let _=A.program;n.uniformBlockBinding(y,_)}function l(y,A){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));let S=A.program;n.updateUBOMapping(y,S);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){let A=u();y.__bindingPointIndex=A;let _=i.createBuffer(),S=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let A=s[y.id],_=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let E=0,I=_.length;E<I;E++){let U=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,C=U.length;b<C;b++){let k=U[b];if(p(k,E,b,S)===!0){let F=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value],L=0;for(let z=0;z<Q.length;z++){let $=Q[z],ie=x($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,F+L,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,L),L+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,A,_,S){let E=y.value,I=A+"_"+_;if(S[I]===void 0)return typeof E=="number"||typeof E=="boolean"?S[I]=E:S[I]=E.clone(),!0;{let U=S[I];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return S[I]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function g(y){let A=y.uniforms,_=0,S=16;for(let I=0,U=A.length;I<U;I++){let b=Array.isArray(A[I])?A[I]:[A[I]];for(let C=0,k=b.length;C<k;C++){let F=b[C],Q=Array.isArray(F.value)?F.value:[F.value];for(let L=0,z=Q.length;L<z;L++){let $=Q[L],ie=x($),te=_%S;te!==0&&S-te<ie.boundary&&(_+=S-te),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=ie.storage}}}let E=_%S;return E>0&&(_+=S-E),y.__size=_,y.__cache={},this}function x(y){let A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),A}function m(y){let A=y.target;A.removeEventListener("dispose",m);let _=o.indexOf(A.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}function Ea(i,e,t,n,s,r){gr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(uo.x=r*gr.x-s*gr.y,uo.y=s*gr.x+r*gr.y):uo.copy(gr),i.copy(e),i.x+=uo.x,i.y+=uo.y,i.applyMatrix4(yp)}function Gd(i,e,t,n,s,r,o){let a=oh.distanceSqToPoint(i);if(a<t){let c=new T;oh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function Oh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function Vd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function V1(i,e){let t=1-i;return t*t*e}function W1(i,e){return 2*(1-i)*i*e}function X1(i,e){return i*i*e}function Mo(i,e,t,n){return V1(i,e)+W1(i,t)+X1(i,n)}function q1(i,e){let t=1-i;return t*t*t*e}function Y1(i,e){let t=1-i;return 3*t*t*i*e}function j1(i,e){return 3*(1-i)*i*i*e}function K1(i,e){return i*i*i*e}function bo(i,e,t,n,s){return q1(i,e)+Y1(i,t)+j1(i,n)+K1(i,s)}function Pa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Z1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function J1(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Xd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function _p(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function $1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return Hi;case"color":return lc;case"quaternion":return _i;case"bool":case"boolean":return ls;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Q1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$1(i.type);if(i.times===void 0){let t=[],n=[];_p(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function Kd(i,e){return i.distance-e.distance}function Sh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Sh(s[r],e,t,!0)}}var wh,Fm,of,zm,Zd,Th,Oi,xi,wn,Sn,es,vr,La,af,cf,Bm,Ts,km,Hm,lf,hf,Gm,Vm,Wm,Xm,zl,Bl,qm,Ym,jm,Km,Zm,Jm,$m,Qm,eA,tA,nA,iA,Da,sA,rA,oA,aA,Jd,cA,lA,ts,hA,uA,fA,Rh,dA,pA,uf,mA,$d,Er,Sr,kl,Hl,Ac,ii,nn,Eo,Ot,Na,go,yn,Ch,is,ns,AA,gA,Ih,Qd,$i,zi,Ds,ep,tp,Is,xA,Vn,yA,_A,Ps,wr,Ph,np,vA,ip,sp,tl,nl,il,sl,ff,df,pf,mf,rp,Af,gf,xf,yf,_f,vf,Mf,bf,Ef,Sf,wf,Tf,Rf,Cf,If,Pf,rl,Lf,Df,MA,Nf,Uf,Of,Tr,Ns,ol,Ff,zf,Bf,bA,op,gc,Fo,ap,Ls,EA,SA,Lh,wA,Wn,ft,qt,Dh,xc,Ua,Et,Oa,Fa,$s,kf,TA,RA,CA,cp,IA,PA,LA,DA,Gl,Hf,Vl,Bi,za,ss,hn,Gf,xo,Rr,lp,ge,it,al,Vf,Wf,Xf,ea,KA,ut,Qs,ka,ZA,Ha,JA,an,yt,Xl,si,Ga,ql,fn,T,hl,qf,dt,Ii,Qn,ta,er,tr,nr,Yi,ji,Ms,oo,na,ia,bs,$A,ao,fl,Un,Pi,dl,sa,Ki,pl,ra,ml,Us,Ye,ir,ei,QA,eg,Zi,oa,Dn,Yf,jf,Va,wo,tg,Kf,sr,Li,aa,co,ng,ig,Zf,Jf,$f,sg,rg,Mt,ti,Di,Al,Ni,rr,or,Qf,gl,xl,yl,ca,Cs,up,Ji,la,De,un,og,_n,Yt,zt,ha,Xt,Wa,Xa,ct,ag,Gn,vl,ar,Nn,lo,tn,Lt,ed,Es,ua,td,cr,lr,hr,Ml,fa,da,pa,ma,nd,id,sd,Aa,ga,mt,Tn,hg,ug,fg,On,qa,Ft,ur,fr,Yl,Ya,jl,bl,dg,pg,Fi,Ss,ya,To,Bt,Ag,gg,xg,yg,_g,vg,Mg,bg,Eg,Sg,wg,Tg,Rg,Cg,Ig,Pg,Lg,Dg,Ng,Ug,Og,Fg,zg,Bg,kg,Hg,Gg,Vg,Wg,Xg,qg,Yg,jg,Kg,Zg,Jg,$g,Qg,ex,tx,nx,ix,sx,rx,ox,ax,cx,lx,hx,ux,fx,dx,px,mx,Ax,gx,xx,yx,_x,vx,Mx,bx,Ex,Sx,wx,Tx,Rx,Cx,Ix,Px,Lx,Dx,Nx,Ux,Ox,Fx,zx,Bx,kx,Hx,Gx,Vx,Wx,Xx,qx,Yx,jx,Kx,Zx,Jx,$x,Qx,ey,ty,ny,iy,sy,ry,oy,ay,cy,ly,hy,uy,fy,dy,py,my,Ay,gy,xy,yy,_y,vy,My,by,Ey,Sy,wy,Ty,Ry,Cy,Iy,Py,Ly,Dy,Ny,Uy,Oy,Fy,zy,By,ky,Hy,Gy,Vy,Wy,Xy,qy,Yy,jy,et,ye,Ai,_a,rs,yr,rd,Rs,El,od,Sl,wl,Tl,ws,dr,ad,ja,Ka,pp,mp,Ap,gp,xp,ud,fd,dd,pd,md,Kl,Zl,Jl,Rl,br,Q_,e1,l1,h1,f1,_1,Ql,eh,T1,th,nh,P1,L1,ih,Ze,F1,vo,sh,Ro,rh,Ir,Pr,gn,Os,Lr,pr,ho,mr,Ar,gr,uo,yp,Ma,fo,ba,wd,Cl,Td,Co,Rd,Cd,Id,k1,Pd,Sa,Il,Ld,Pl,Za,Io,Po,Dd,H1,Ja,Fs,xr,Nd,wa,Ud,G1,po,mo,Dr,os,Od,Fd,zd,Ll,Ta,Nr,Bd,kd,zs,$a,Lo,Hd,oh,Ra,Ca,Qa,as,Xn,Do,ah,Ia,Dl,Nl,Ul,ch,ec,lh,tc,hh,nc,uh,ic,Wd,fh,dh,No,Bs,ks,Je,yi,sc,rc,oc,ac,bt,sn,Rn,qn,cc,cs,ph,mh,Ah,Yn,ls,lc,ki,gh,_i,hs,Hi,hc,Qi,xh,ev,Gi,Ui,yh,Uo,_h,uc,Ur,fc,Ol,qd,Yd,Oo,vh,dc,jd,Ao,Fl,Mh,ri,bh,Or,us,pc,Fh,tv,zh,nv,iv,sv,rv,ov,av,cv,Eh,vt,IM,mc,Cn=ht(()=>{wh="160",Fm=0,of=1,zm=2,Zd=1,Th=2,Oi=3,xi=0,wn=1,Sn=2,es=0,vr=1,La=2,af=3,cf=4,Bm=5,Ts=100,km=101,Hm=102,lf=103,hf=104,Gm=200,Vm=201,Wm=202,Xm=203,zl=204,Bl=205,qm=206,Ym=207,jm=208,Km=209,Zm=210,Jm=211,$m=212,Qm=213,eA=214,tA=0,nA=1,iA=2,Da=3,sA=4,rA=5,oA=6,aA=7,Jd=0,cA=1,lA=2,ts=0,hA=1,uA=2,fA=3,Rh=4,dA=5,pA=6,uf="attached",mA="detached",$d=300,Er=301,Sr=302,kl=303,Hl=304,Ac=306,ii=1e3,nn=1001,Eo=1002,Ot=1003,Na=1004,go=1005,yn=1006,Ch=1007,is=1008,ns=1009,AA=1010,gA=1011,Ih=1012,Qd=1013,$i=1014,zi=1015,Ds=1016,ep=1017,tp=1018,Is=1020,xA=1021,Vn=1023,yA=1024,_A=1025,Ps=1026,wr=1027,Ph=1028,np=1029,vA=1030,ip=1031,sp=1033,tl=33776,nl=33777,il=33778,sl=33779,ff=35840,df=35841,pf=35842,mf=35843,rp=36196,Af=37492,gf=37496,xf=37808,yf=37809,_f=37810,vf=37811,Mf=37812,bf=37813,Ef=37814,Sf=37815,wf=37816,Tf=37817,Rf=37818,Cf=37819,If=37820,Pf=37821,rl=36492,Lf=36494,Df=36495,MA=36283,Nf=36284,Uf=36285,Of=36286,Tr=2300,Ns=2301,ol=2302,Ff=2400,zf=2401,Bf=2402,bA=2500,op=0,gc=1,Fo=2,ap=3e3,Ls=3001,EA=3200,SA=3201,Lh=0,wA=1,Wn="",ft="srgb",qt="srgb-linear",Dh="display-p3",xc="display-p3-linear",Ua="linear",Et="srgb",Oa="rec709",Fa="p3",$s=7680,kf=519,TA=512,RA=513,CA=514,cp=515,IA=516,PA=517,LA=518,DA=519,Gl=35044,Hf="300 es",Vl=1035,Bi=2e3,za=2001,ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=1234567,xo=Math.PI/180,Rr=180/Math.PI;lp={DEG2RAD:xo,RAD2DEG:Rr,generateUUID:ni,clamp:Wt,euclideanModulo:Nh,mapLinear:NA,inverseLerp:UA,lerp:yo,damp:OA,pingpong:FA,smoothstep:zA,smootherstep:BA,randInt:kA,randFloat:HA,randFloatSpread:GA,seededRandom:VA,degToRad:WA,radToDeg:XA,isPowerOfTwo:Wl,ceilPowerOfTwo:qA,floorPowerOfTwo:Ba,setQuaternionFromProperEuler:YA,normalize:xt,denormalize:gi},ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],y=s[1],A=s[4],_=s[7],S=s[2],E=s[5],I=s[8];return r[0]=o*x+a*y+c*S,r[3]=o*m+a*A+c*E,r[6]=o*d+a*_+c*I,r[1]=l*x+h*y+u*S,r[4]=l*m+h*A+u*E,r[7]=l*d+h*_+u*I,r[2]=f*x+p*y+g*S,r[5]=f*m+p*A+g*E,r[8]=f*d+p*_+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(al.makeScale(e,t)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,t){return this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},al=new it;Vf={};Wf=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xf=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[qt]:{transfer:Ua,primaries:Oa,toReference:i=>i,fromReference:i=>i},[ft]:{transfer:Et,primaries:Oa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[xc]:{transfer:Ua,primaries:Fa,toReference:i=>i.applyMatrix3(Xf),fromReference:i=>i.applyMatrix3(Wf)},[Dh]:{transfer:Et,primaries:Fa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xf),fromReference:i=>i.applyMatrix3(Wf).convertLinearToSRGB()}},KA=new Set([qt,xc]),ut={enabled:!0,_workingColorSpace:qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!KA.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ea[e].toReference,s=ea[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ea[i].primaries},getTransfer:function(i){return i===Wn?Ua:ea[i].transfer}};ka=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=So("canvas")),Qs.width=e.width,Qs.height=e.height;let n=Qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=So("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ZA=0,Ha=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ll(s[o].image)):r.push(ll(s[o]))}else r=ll(s);n.url=r}return t||(e.images[this.uuid]=n),n}};JA=0,an=class i extends ss{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=nn,s=nn,r=yn,o=is,a=Vn,c=ns,l=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=ni(),this.name="",this.source=new Ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ls?ft:Wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?Ls:ap}set encoding(e){_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ls?ft:Wn}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=$d;an.DEFAULT_ANISOTROPY=1;yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,_=(p+1)/2,S=(d+1)/2,E=(h+f)/4,I=(u+x)/4,U=(g+m)/4;return A>_&&A>S?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=I/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=U/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=I/r,s=U/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(_o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ls?ft:Wn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ha(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ga=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ql=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==p||h!==g){let m=1-a,d=c*f+l*p+h*g+u*x,y=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){let S=Math.sqrt(A),E=Math.atan2(S,d*y);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}let _=a*y;if(c=c*m+f*_,l=l*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-a*p,e[t+2]=l*g+h*p+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hl=new T,qf=new fn,dt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),na.subVectors(this.max,oo),er.subVectors(e.a,oo),tr.subVectors(e.b,oo),nr.subVectors(e.c,oo),Yi.subVectors(tr,er),ji.subVectors(nr,tr),Ms.subVectors(er,nr);let t=[0,-Yi.z,Yi.y,0,-ji.z,ji.y,0,-Ms.z,Ms.y,Yi.z,0,-Yi.x,ji.z,0,-ji.x,Ms.z,0,-Ms.x,-Yi.y,Yi.x,0,-ji.y,ji.x,0,-Ms.y,Ms.x,0];return!ul(t,er,tr,nr,na)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,er,tr,nr,na))?!1:(ia.crossVectors(Yi,ji),t=[ia.x,ia.y,ia.z],ul(t,er,tr,nr,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ii=[new T,new T,new T,new T,new T,new T,new T,new T],Qn=new T,ta=new dt,er=new T,tr=new T,nr=new T,Yi=new T,ji=new T,Ms=new T,oo=new T,na=new T,ia=new T,bs=new T;$A=new dt,ao=new T,fl=new T,Un=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$A.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);let t=ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ao,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(fl)),this.expandByPoint(ao.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pi=new T,dl=new T,sa=new T,Ki=new T,pl=new T,ra=new T,ml=new T,Us=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){dl.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(dl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=Ki.dot(this.direction),c=-Ki.dot(sa),l=Ki.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dl).addScaledVector(sa,f),p}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);let n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,s,r){pl.subVectors(t,e),ra.subVectors(n,e),ml.crossVectors(pl,ra);let o=this.direction.dot(ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let c=a*this.direction.dot(ra.crossVectors(Ki,ra));if(c<0)return null;let l=a*this.direction.dot(pl.cross(Ki));if(l<0||c+l>o)return null;let h=-a*Ki.dot(ml);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,p,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ir.setFromMatrixColumn(e,0).length(),r=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,x=l*u;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QA,e,eg)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Zi.crossVectors(n,Dn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Zi.crossVectors(n,Dn)),Zi.normalize(),oa.crossVectors(Dn,Zi),s[0]=Zi.x,s[4]=oa.x,s[8]=Dn.x,s[1]=Zi.y,s[5]=oa.y,s[9]=Dn.y,s[2]=Zi.z,s[6]=oa.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],y=n[3],A=n[7],_=n[11],S=n[15],E=s[0],I=s[4],U=s[8],b=s[12],C=s[1],k=s[5],F=s[9],Q=s[13],L=s[2],z=s[6],$=s[10],ie=s[14],te=s[3],ee=s[7],he=s[11],fe=s[15];return r[0]=o*E+a*C+c*L+l*te,r[4]=o*I+a*k+c*z+l*ee,r[8]=o*U+a*F+c*$+l*he,r[12]=o*b+a*Q+c*ie+l*fe,r[1]=h*E+u*C+f*L+p*te,r[5]=h*I+u*k+f*z+p*ee,r[9]=h*U+u*F+f*$+p*he,r[13]=h*b+u*Q+f*ie+p*fe,r[2]=g*E+x*C+m*L+d*te,r[6]=g*I+x*k+m*z+d*ee,r[10]=g*U+x*F+m*$+d*he,r[14]=g*b+x*Q+m*ie+d*fe,r[3]=y*E+A*C+_*L+S*te,r[7]=y*I+A*k+_*z+S*ee,r[11]=y*U+A*F+_*$+S*he,r[15]=y*b+A*Q+_*ie+S*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],y=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,A=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,_=h*x*l-g*u*l+g*a*p-o*x*p-h*a*d+o*u*d,S=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,E=t*y+n*A+s*_+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=y*I,e[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*I,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*d+n*c*d)*I,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*I,e[4]=A*I,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*I,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*d-t*c*d)*I,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*I,e[8]=_*I,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*d-t*u*d)*I,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*d+t*a*d)*I,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*I,e[12]=S*I,e[13]=(h*x*s-g*u*s+g*n*f-t*x*f-h*n*m+t*u*m)*I,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*I,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,y=c*l,A=c*h,_=c*u,S=n.x,E=n.y,I=n.z;return s[0]=(1-(x+d))*S,s[1]=(p+_)*S,s[2]=(g-A)*S,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+A)*I,s[9]=(m-y)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ir.set(s[0],s[1],s[2]).length(),o=ir.set(s[4],s[5],s[6]).length(),a=ir.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);let l=1/r,h=1/o,u=1/a;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Bi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(a===Bi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===za)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Bi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,p=(n+s)*h,g,x;if(a===Bi)g=(o+r)*u,x=-2*u;else if(a===za)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ir=new T,ei=new Ye,QA=new T(0,0,0),eg=new T(1,1,1),Zi=new T,oa=new T,Dn=new T,Yf=new Ye,jf=new fn,Va=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Va.DEFAULT_ORDER="XYZ";wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tg=0,Kf=new T,sr=new fn,Li=new Ye,aa=new T,co=new T,ng=new T,ig=new fn,Zf=new T(1,0,0),Jf=new T(0,1,0),$f=new T(0,0,1),sg={type:"added"},rg={type:"removed"},Mt=class i extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new Va,n=new fn,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new it}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis(Jf,e)}rotateZ(e){return this.rotateOnAxis($f,e)}translateOnAxis(e,t){return Kf.copy(e).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis(Jf,e)}translateZ(e){return this.translateOnAxis($f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(co,aa,this.up):Li.lookAt(aa,co,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(Li),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new T(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ti=new T,Di=new T,Al=new T,Ni=new T,rr=new T,or=new T,Qf=new T,gl=new T,xl=new T,yl=new T,ca=!1,Cs=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Di.subVectors(n,t),Al.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Di),c=ti.dot(Al),l=Di.dot(Di),h=Di.dot(Al),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getUV(e,t,n,s,r,o,a,c){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Di.subVectors(e,t),ti.cross(Di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ti.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;rr.subVectors(s,n),or.subVectors(r,n),gl.subVectors(e,n);let c=rr.dot(gl),l=or.dot(gl);if(c<=0&&l<=0)return t.copy(n);xl.subVectors(e,s);let h=rr.dot(xl),u=or.dot(xl);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(rr,o);yl.subVectors(e,r);let p=rr.dot(yl),g=or.dot(yl);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(or,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Qf.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Qf,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(rr,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},la={h:0,s:0,l:0};De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Nh(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=_l(o,r,e+1/3),this.g=_l(o,r,e),this.b=_l(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=up[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=cl(e.r),this.g=cl(e.g),this.b=cl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return ut.fromWorkingColorSpace(un.copy(this),e),Math.round(Wt(un.r*255,0,255))*65536+Math.round(Wt(un.g*255,0,255))*256+Math.round(Wt(un.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(un.copy(this),t);let n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=ft){ut.fromWorkingColorSpace(un.copy(this),e);let t=un.r,n=un.g,s=un.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(la);let n=yo(Ji.h,la.h,t),s=yo(Ji.s,la.s,t),r=yo(Ji.l,la.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new De;De.NAMES=up;og=0,_n=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=vr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Bl,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Bl&&(n.blendDst=this.blendDst),this.blendEquation!==Ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Da&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Yt=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zt=new T,ha=new ge,Xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}},Wa=class extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Xa=class extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ct=class extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ag=0,Gn=new Ye,vl=new Mt,ar=new T,Nn=new dt,lo=new dt,tn=new T,Lt=class i extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hp(e)?Xa:Wa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Nn.min,lo.min),Nn.expandByPoint(tn),tn.addVectors(Nn.max,lo.max),Nn.expandByPoint(tn)):(Nn.expandByPoint(lo.min),Nn.expandByPoint(lo.max))}Nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)tn.fromBufferAttribute(a,l),c&&(ar.fromBufferAttribute(e,l),tn.add(ar)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let C=0;C<a;C++)l[C]=new T,h[C]=new T;let u=new T,f=new T,p=new T,g=new ge,x=new ge,m=new ge,d=new T,y=new T;function A(C,k,F){u.fromArray(s,C*3),f.fromArray(s,k*3),p.fromArray(s,F*3),g.fromArray(o,C*2),x.fromArray(o,k*2),m.fromArray(o,F*2),f.sub(u),p.sub(u),x.sub(g),m.sub(g);let Q=1/(x.x*m.y-m.x*x.y);isFinite(Q)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(Q),y.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(Q),l[C].add(d),l[k].add(d),l[F].add(d),h[C].add(y),h[k].add(y),h[F].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let C=0,k=_.length;C<k;++C){let F=_[C],Q=F.start,L=F.count;for(let z=Q,$=Q+L;z<$;z+=3)A(n[z+0],n[z+1],n[z+2])}let S=new T,E=new T,I=new T,U=new T;function b(C){I.fromArray(r,C*3),U.copy(I);let k=l[C];S.copy(k),S.sub(I.multiplyScalar(I.dot(k))).normalize(),E.crossVectors(U,k);let Q=E.dot(h[C])<0?-1:1;c[C*4]=S.x,c[C*4+1]=S.y,c[C*4+2]=S.z,c[C*4+3]=Q}for(let C=0,k=_.length;C<k;++C){let F=_[C],Q=F.start,L=F.count;for(let z=Q,$=Q+L;z<$;z+=3)b(n[z+0]),b(n[z+1]),b(n[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Xt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ed=new Ye,Es=new Us,ua=new Un,td=new T,cr=new T,lr=new T,hr=new T,Ml=new T,fa=new T,da=new ge,pa=new ge,ma=new ge,nd=new T,id=new T,sd=new T,Aa=new T,ga=new T,mt=class extends Mt{constructor(e=new Lt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ml.fromBufferAttribute(u,e),o?fa.addScaledVector(Ml,h):fa.addScaledVector(Ml.sub(t),h))}t.add(fa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(ua.containsPoint(Es.origin)===!1&&(Es.intersectSphere(ua,td)===null||Es.origin.distanceToSquared(td)>(e.far-e.near)**2))&&(ed.copy(r).invert(),Es.copy(e.ray).applyMatrix4(ed),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,S=A;_<S;_+=3){let E=a.getX(_),I=a.getX(_+1),U=a.getX(_+2);s=xa(this,d,e,n,l,h,u,E,I,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let y=a.getX(m),A=a.getX(m+1),_=a.getX(m+2);s=xa(this,o,e,n,l,h,u,y,A,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,S=A;_<S;_+=3){let E=_,I=_+1,U=_+2;s=xa(this,d,e,n,l,h,u,E,I,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let y=m,A=m+1,_=m+2;s=xa(this,o,e,n,l,h,u,y,A,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Tn=class i extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function g(x,m,d,y,A,_,S,E,I,U,b){let C=_/I,k=S/U,F=_/2,Q=S/2,L=E/2,z=I+1,$=U+1,ie=0,te=0,ee=new T;for(let he=0;he<$;he++){let fe=he*k-Q;for(let Me=0;Me<z;Me++){let Z=Me*C-F;ee[x]=Z*y,ee[m]=fe*A,ee[d]=L,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[d]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(Me/I),u.push(1-he/U),ie+=1}}for(let he=0;he<U;he++)for(let fe=0;fe<I;fe++){let Me=f+fe+z*he,Z=f+fe+z*(he+1),ue=f+(fe+1)+z*(he+1),be=f+(fe+1)+z*he;c.push(Me,Z,be),c.push(Z,ue,be),te+=6}a.addGroup(p,te,b),p+=te,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};hg={clone:Cr,merge:xn},ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qa=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ft=class extends qa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ur=-90,fr=1,Yl=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(ur,fr,e,t);s.layers=this.layers,this.add(s);let r=new Ft(ur,fr,e,t);r.layers=this.layers,this.add(r);let o=new Ft(ur,fr,e,t);o.layers=this.layers,this.add(o);let a=new Ft(ur,fr,e,t);a.layers=this.layers,this.add(a);let c=new Ft(ur,fr,e,t);c.layers=this.layers,this.add(c);let l=new Ft(ur,fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ya=class extends an{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jl=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(_o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ls?ft:Wn),this.texture=new Ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:es});r.uniforms.tEquirect.value=t;let o=new mt(s,r),a=t.minFilter;return t.minFilter===is&&(t.minFilter=yn),new Yl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},bl=new T,dg=new T,pg=new it,Fi=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bl.subVectors(n,t).cross(dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pg.getNormalMatrix(e),s=this.coplanarPoint(bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new Un,ya=new T,To=class{constructor(e=new Fi,t=new Fi,n=new Fi,s=new Fi,r=new Fi,o=new Fi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],y=s[13],A=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-p,_-d).normalize(),n[1].setComponents(c+r,f+l,m+p,_+d).normalize(),n[2].setComponents(c+o,f+h,m+g,_+y).normalize(),n[3].setComponents(c-o,f-h,m-g,_-y).normalize(),n[4].setComponents(c-a,f-u,m-x,_-A).normalize(),t===Bi)n[5].setComponents(c+a,f+u,m+x,_+A).normalize();else if(t===za)n[5].setComponents(a,u,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ya.x=s.normal.x>0?e.max.x:e.min.x,ya.y=s.normal.y>0?e.max.y:e.min.y,ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Bt=class i extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let y=d*f-o;for(let A=0;A<l;A++){let _=A*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(A/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){let A=y+l*d,_=y+l*(d+1),S=y+1+l*(d+1),E=y+1+l*d;p.push(A,_,E),p.push(_,S,E)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
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
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
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
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ig=`#ifdef USE_BUMPMAP
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bg=`#define PI 3.141592653589793
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
} // validated`,kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`
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
}`,jg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
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
}`,sx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
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
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,px=`PhysicalMaterial material;
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
#endif`,mx=`struct PhysicalMaterial {
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
}`,Ax=`
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_x=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wx=`#if defined( USE_POINTS_UV )
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
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
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
#endif`,Px=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`#ifdef USE_MORPHTARGETS
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
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zx=`#ifdef USE_NORMALMAP
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
#endif`,Bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ey=`float getShadowMask() {
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
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sy=`#ifdef USE_SKINNING
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
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ay=`uniform sampler2D t2D;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,by=`#define DISTANCE
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
}`,Ey=`#define DISTANCE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Py=`#define LAMBERT
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
}`,Ly=`#define LAMBERT
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
}`,Dy=`#define MATCAP
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
}`,Ny=`#define MATCAP
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
}`,Uy=`#define NORMAL
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
}`,Oy=`#define NORMAL
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
}`,Fy=`#define PHONG
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
}`,zy=`#define PHONG
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
}`,By=`#define STANDARD
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
}`,ky=`#define STANDARD
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
}`,Hy=`#define TOON
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
}`,Gy=`#define TOON
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
}`,Vy=`uniform float size;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,qy=`uniform vec3 color;
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
}`,Yy=`uniform float rotation;
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
}`,jy=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Ag,alphahash_pars_fragment:gg,alphamap_fragment:xg,alphamap_pars_fragment:yg,alphatest_fragment:_g,alphatest_pars_fragment:vg,aomap_fragment:Mg,aomap_pars_fragment:bg,batching_pars_vertex:Eg,batching_vertex:Sg,begin_vertex:wg,beginnormal_vertex:Tg,bsdfs:Rg,iridescence_fragment:Cg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Lg,clipping_planes_pars_vertex:Dg,clipping_planes_vertex:Ng,color_fragment:Ug,color_pars_fragment:Og,color_pars_vertex:Fg,color_vertex:zg,common:Bg,cube_uv_reflection_fragment:kg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Vg,emissivemap_fragment:Wg,emissivemap_pars_fragment:Xg,colorspace_fragment:qg,colorspace_pars_fragment:Yg,envmap_fragment:jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Zg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:lx,envmap_vertex:$g,fog_vertex:Qg,fog_pars_vertex:ex,fog_fragment:tx,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_fragment:sx,lightmap_pars_fragment:rx,lights_lambert_fragment:ox,lights_lambert_pars_fragment:ax,lights_pars_begin:cx,lights_toon_fragment:hx,lights_toon_pars_fragment:ux,lights_phong_fragment:fx,lights_phong_pars_fragment:dx,lights_physical_fragment:px,lights_physical_pars_fragment:mx,lights_fragment_begin:Ax,lights_fragment_maps:gx,lights_fragment_end:xx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:vx,logdepthbuf_vertex:Mx,map_fragment:bx,map_pars_fragment:Ex,map_particle_fragment:Sx,map_particle_pars_fragment:wx,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:Rx,morphcolor_vertex:Cx,morphnormal_vertex:Ix,morphtarget_pars_vertex:Px,morphtarget_vertex:Lx,normal_fragment_begin:Dx,normal_fragment_maps:Nx,normal_pars_fragment:Ux,normal_pars_vertex:Ox,normal_vertex:Fx,normalmap_pars_fragment:zx,clearcoat_normal_fragment_begin:Bx,clearcoat_normal_fragment_maps:kx,clearcoat_pars_fragment:Hx,iridescence_pars_fragment:Gx,opaque_fragment:Vx,packing:Wx,premultiplied_alpha_fragment:Xx,project_vertex:qx,dithering_fragment:Yx,dithering_pars_fragment:jx,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:Zx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:$x,shadowmap_vertex:Qx,shadowmask_pars_fragment:ey,skinbase_vertex:ty,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:sy,specularmap_fragment:ry,specularmap_pars_fragment:oy,tonemapping_fragment:ay,tonemapping_pars_fragment:cy,transmission_fragment:ly,transmission_pars_fragment:hy,uv_pars_fragment:uy,uv_pars_vertex:fy,uv_vertex:dy,worldpos_vertex:py,background_vert:my,background_frag:Ay,backgroundCube_vert:gy,backgroundCube_frag:xy,cube_vert:yy,cube_frag:_y,depth_vert:vy,depth_frag:My,distanceRGBA_vert:by,distanceRGBA_frag:Ey,equirect_vert:Sy,equirect_frag:wy,linedashed_vert:Ty,linedashed_frag:Ry,meshbasic_vert:Cy,meshbasic_frag:Iy,meshlambert_vert:Py,meshlambert_frag:Ly,meshmatcap_vert:Dy,meshmatcap_frag:Ny,meshnormal_vert:Uy,meshnormal_frag:Oy,meshphong_vert:Fy,meshphong_frag:zy,meshphysical_vert:By,meshphysical_frag:ky,meshtoon_vert:Hy,meshtoon_frag:Gy,points_vert:Vy,points_frag:Wy,shadow_vert:Xy,shadow_frag:qy,sprite_vert:Yy,sprite_frag:jy},ye={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ai={basic:{uniforms:xn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:xn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new De(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:xn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:xn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:xn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new De(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:xn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:xn([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:xn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:xn([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:xn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:xn([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:xn([ye.common,ye.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:xn([ye.lights,ye.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ai.physical={uniforms:xn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};_a={r:0,b:0,g:0};rs=class extends qa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yr=4,rd=[.125,.215,.35,.446,.526,.582],Rs=20,El=new rs,od=new De,Sl=null,wl=0,Tl=0,ws=(1+Math.sqrt(5))/2,dr=1/ws,ad=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,ws,dr),new T(0,ws,-dr),new T(dr,0,ws),new T(-dr,0,ws),new T(ws,dr,0),new T(-ws,dr,0)],ja=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Sl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,wl,Tl),e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ds,format:Vn,colorSpace:qt,depthBuffer:!1},s=cd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(r)),this._blurMaterial=n_(r,e,t)}return s}_compileMaterial(e){let t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,n,s){let a=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(od),h.toneMapping=ts,h.autoClear=!1;let p=new Yt({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new mt(new Tn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(od),x=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):y===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let A=this._cubeSize;va(s,y*A,d>2?A:0,A,A),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Er||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;va(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,El)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ad[(s-1)%ad.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new mt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Rs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Rs;m>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);let d=[],y=0;for(let I=0;I<Rs;++I){let U=I/x,b=Math.exp(-U*U/2);d.push(b),I===0?y+=b:I<m&&(y+=2*b)}for(let I=0;I<d.length;I++)d[I]=d[I]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-n;let _=this._sizeLods[s],S=3*_*(s>A-yr?s-A+yr:0),E=4*(this._cubeSize-_);va(t,S,E,3*_,2*_),c.setRenderTarget(t),c.render(u,El)}};Ka=class extends an{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ps,h!==Ps&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=$i),n===void 0&&h===wr&&(n=Is),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=c!==void 0?c:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pp=new an,mp=new Ka(1,1);mp.compareFunction=cp;Ap=new Ga,gp=new ql,xp=new Ya,ud=[],fd=[],dd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=P_(t.type)}},Zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}},Jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Rl=/(\w+)(\])?(\[|\.)?/g;br=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};Q_=37297,e1=0;l1=/^[ \t]*#include +<([\w\d./]+)>/gm;h1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);f1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;_1=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eh(e),t.set(e,n)),n}},eh=class{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}};T1=0;th=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nh=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},P1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L1=`uniform sampler2D shadow_pass;
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
}`;ih=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ze=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},F1={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sh=class extends ss{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,x=t.getContextAttributes(),m=null,d=null,y=[],A=[],_=new ge,S=null,E=new Ft;E.layers.enable(1),E.viewport=new yt;let I=new Ft;I.layers.enable(2),I.viewport=new yt;let U=[E,I],b=new ih;b.layers.enable(1),b.layers.enable(2);let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=y[Z];return ue===void 0&&(ue=new vo,y[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=y[Z];return ue===void 0&&(ue=new vo,y[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=y[Z];return ue===void 0&&(ue=new vo,y[Z]=ue),ue.getHandSpace()};function F(Z){let ue=A.indexOf(Z.inputSource);if(ue===-1)return;let be=y[ue];be!==void 0&&(be.update(Z.inputSource,Z.frame,l||o),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Q(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",L);for(let Z=0;Z<y.length;Z++){let ue=A[Z];ue!==null&&(A[Z]=null,y[Z].disconnect(ue))}C=null,k=null,e.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ue={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new si(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:ns,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ue=null,be=null,Re=null;x.depth&&(Re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?wr:Ps,be=x.stencil?Is:$i);let Ie={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new si(f.textureWidth,f.textureHeight,{format:Vn,type:ns,depthTexture:new Ka(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let We=e.properties.get(d);We.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Z){for(let ue=0;ue<Z.removed.length;ue++){let be=Z.removed[ue],Re=A.indexOf(be);Re>=0&&(A[Re]=null,y[Re].disconnect(be))}for(let ue=0;ue<Z.added.length;ue++){let be=Z.added[ue],Re=A.indexOf(be);if(Re===-1){for(let We=0;We<y.length;We++)if(We>=A.length){A.push(be),Re=We;break}else if(A[We]===null){A[We]=be,Re=We;break}if(Re===-1)break}let Ie=y[Re];Ie&&Ie.connect(be)}}let z=new T,$=new T;function ie(Z,ue,be){z.setFromMatrixPosition(ue.matrixWorld),$.setFromMatrixPosition(be.matrixWorld);let Re=z.distanceTo($),Ie=ue.projectionMatrix.elements,We=be.projectionMatrix.elements,Ge=Ie[14]/(Ie[10]-1),Ue=Ie[14]/(Ie[10]+1),je=(Ie[9]+1)/Ie[5],H=(Ie[9]-1)/Ie[5],j=(Ie[8]-1)/Ie[0],J=(We[8]+1)/We[0],ae=Ge*j,q=Ge*J,re=Re/(-j+J),ce=re*-j;ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ce),Z.translateZ(re),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let M=Ge+re,v=Ue+re,N=ae-ce,X=q+(Re-ce),ne=je*Ue/v*M,oe=H*Ue/v*M;Z.projectionMatrix.makePerspective(N,X,ne,oe,M,v),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function te(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;b.near=I.near=E.near=Z.near,b.far=I.far=E.far=Z.far,(C!==b.near||k!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,k=b.far);let ue=Z.parent,be=b.cameras;te(b,ue);for(let Re=0;Re<be.length;Re++)te(be[Re],ue);be.length===2?ie(b,E,I):b.projectionMatrix.copy(E.projectionMatrix),ee(Z,b,ue)};function ee(Z,ue,be){be===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Rr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)};let he=null;function fe(Z,ue){if(h=ue.getViewerPose(l||o),g=ue,h!==null){let be=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Re=!1;be.length!==b.cameras.length&&(b.cameras.length=0,Re=!0);for(let Ie=0;Ie<be.length;Ie++){let We=be[Ie],Ge=null;if(p!==null)Ge=p.getViewport(We);else{let je=u.getViewSubImage(f,We);Ge=je.viewport,Ie===0&&(e.setRenderTargetTextures(d,je.colorTexture,f.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(d))}let Ue=U[Ie];Ue===void 0&&(Ue=new Ft,Ue.layers.enable(Ie),Ue.viewport=new yt,U[Ie]=Ue),Ue.matrix.fromArray(We.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(We.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ie===0&&(b.matrix.copy(Ue.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Re===!0&&b.cameras.push(Ue)}}for(let be=0;be<y.length;be++){let Re=A[be],Ie=y[be];Re!==null&&Ie!==void 0&&Ie.update(Re,ue,l||o)}he&&he(Z,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}let Me=new dp;Me.setAnimationLoop(fe),this.setAnimationLoop=function(Z){he=Z},this.dispose=function(){}}};Ro=class{constructor(e={}){let{canvas:t=jA(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=ts,this.toneMappingExposure=1;let A=this,_=!1,S=0,E=0,I=null,U=-1,b=null,C=new yt,k=new yt,F=null,Q=new De(0),L=0,z=t.width,$=t.height,ie=1,te=null,ee=null,he=new yt(0,0,z,$),fe=new yt(0,0,z,$),Me=!1,Z=new To,ue=!1,be=!1,Re=null,Ie=new Ye,We=new ge,Ge=new T,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return I===null?ie:1}let H=n;function j(w,B){for(let W=0;W<w.length;W++){let Y=w[W],V=t.getContext(Y,B);if(V!==null)return V}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wh}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",me,!1),H===null){let B=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&B.shift(),H=j(B,w),H===null)throw j(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,ae,q,re,ce,M,v,N,X,ne,oe,ve,Ae,Ee,we,R,P,O,K,G,le,se,pe,Se;function Pe(){J=new s_(H),ae=new $y(H,J,e),J.init(ae),se=new O1(H,J,ae),q=new N1(H,J,ae),re=new a_(H),ce=new M1,M=new U1(H,J,q,ce,ae,se,re),v=new e_(A),N=new i_(A),X=new mg(H,ae),pe=new Zy(H,J,X,ae),ne=new r_(H,X,re,pe),oe=new u_(H,ne,X,re),K=new h_(H,ae,M),R=new Qy(ce),ve=new v1(A,v,N,J,ae,pe,R),Ae=new z1(A,ce),Ee=new E1,we=new I1(J,ae),O=new Ky(A,v,N,q,oe,f,c),P=new D1(A,oe,ae),Se=new B1(H,re,ae,q),G=new Jy(H,J,re,ae),le=new o_(H,J,re,ae),re.programs=ve.programs,A.capabilities=ae,A.extensions=J,A.properties=ce,A.renderLists=Ee,A.shadowMap=P,A.state=q,A.info=re}Pe();let Ce=new sh(A,H);this.xr=Ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(z,$,!1))},this.getSize=function(w){return w.set(z,$)},this.setSize=function(w,B,W=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,$=B,t.width=Math.floor(w*ie),t.height=Math.floor(B*ie),W===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(z*ie,$*ie).floor()},this.setDrawingBufferSize=function(w,B,W){z=w,$=B,ie=W,t.width=Math.floor(w*W),t.height=Math.floor(B*W),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(he)},this.setViewport=function(w,B,W,Y){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,B,W,Y),q.viewport(C.copy(he).multiplyScalar(ie).floor())},this.getScissor=function(w){return w.copy(fe)},this.setScissor=function(w,B,W,Y){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,B,W,Y),q.scissor(k.copy(fe).multiplyScalar(ie).floor())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){q.setScissorTest(Me=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor.apply(O,arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha.apply(O,arguments)},this.clear=function(w=!0,B=!0,W=!0){let Y=0;if(w){let V=!1;if(I!==null){let Te=I.texture.format;V=Te===sp||Te===ip||Te===np}if(V){let Te=I.texture.type,Oe=Te===ns||Te===$i||Te===Ih||Te===Is||Te===ep||Te===tp,He=O.getClearColor(),qe=O.getClearAlpha(),tt=He.r,Ke=He.g,Qe=He.b;Oe?(p[0]=tt,p[1]=Ke,p[2]=Qe,p[3]=qe,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=tt,g[1]=Ke,g[2]=Qe,g[3]=qe,H.clearBufferiv(H.COLOR,0,g))}else Y|=H.COLOR_BUFFER_BIT}B&&(Y|=H.DEPTH_BUFFER_BIT),W&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ee.dispose(),we.dispose(),ce.dispose(),v.dispose(),N.dispose(),oe.dispose(),pe.dispose(),Se.dispose(),ve.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",mn),Ce.removeEventListener("sessionend",_t),Re&&(Re.dispose(),Re=null),An.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let w=re.autoReset,B=P.enabled,W=P.autoUpdate,Y=P.needsUpdate,V=P.type;Pe(),re.autoReset=w,P.enabled=B,P.autoUpdate=W,P.needsUpdate=Y,P.type=V}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){let B=w.target;B.removeEventListener("dispose",xe),ke(B)}function ke(w){Be(w),ce.remove(w)}function Be(w){let B=ce.get(w).programs;B!==void 0&&(B.forEach(function(W){ve.releaseProgram(W)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,W,Y,V,Te){B===null&&(B=Ue);let Oe=V.isMesh&&V.matrixWorld.determinant()<0,He=Pm(w,B,W,Y,V);q.setMaterial(Y,Oe);let qe=W.index,tt=1;if(Y.wireframe===!0){if(qe=ne.getWireframeAttribute(W),qe===void 0)return;tt=2}let Ke=W.drawRange,Qe=W.attributes.position,Ut=Ke.start*tt,Ln=(Ke.start+Ke.count)*tt;Te!==null&&(Ut=Math.max(Ut,Te.start*tt),Ln=Math.min(Ln,(Te.start+Te.count)*tt)),qe!==null?(Ut=Math.max(Ut,0),Ln=Math.min(Ln,qe.count)):Qe!=null&&(Ut=Math.max(Ut,0),Ln=Math.min(Ln,Qe.count));let en=Ln-Ut;if(en<0||en===1/0)return;pe.setup(V,Y,He,W,qe);let Ci,Pt=G;if(qe!==null&&(Ci=X.get(qe),Pt=le,Pt.setIndex(Ci)),V.isMesh)Y.wireframe===!0?(q.setLineWidth(Y.wireframeLinewidth*je()),Pt.setMode(H.LINES)):Pt.setMode(H.TRIANGLES);else if(V.isLine){let nt=Y.linewidth;nt===void 0&&(nt=1),q.setLineWidth(nt*je()),V.isLineSegments?Pt.setMode(H.LINES):V.isLineLoop?Pt.setMode(H.LINE_LOOP):Pt.setMode(H.LINE_STRIP)}else V.isPoints?Pt.setMode(H.POINTS):V.isSprite&&Pt.setMode(H.TRIANGLES);if(V.isBatchedMesh)Pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Pt.renderInstances(Ut,en,V.count);else if(W.isInstancedBufferGeometry){let nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Jc=Math.min(W.instanceCount,nt);Pt.renderInstances(Ut,en,Jc)}else Pt.render(Ut,en)};function At(w,B,W){w.transparent===!0&&w.side===Sn&&w.forceSinglePass===!1?(w.side=wn,w.needsUpdate=!0,$o(w,B,W),w.side=xi,w.needsUpdate=!0,$o(w,B,W),w.side=Sn):$o(w,B,W)}this.compile=function(w,B,W=null){W===null&&(W=w),m=we.get(W),m.init(),y.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),w!==W&&w.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(A._useLegacyLights);let Y=new Set;return w.traverse(function(V){let Te=V.material;if(Te)if(Array.isArray(Te))for(let Oe=0;Oe<Te.length;Oe++){let He=Te[Oe];At(He,W,V),Y.add(He)}else At(Te,W,V),Y.add(Te)}),y.pop(),m=null,Y},this.compileAsync=function(w,B,W=null){let Y=this.compile(w,B,W);return new Promise(V=>{function Te(){if(Y.forEach(function(Oe){ce.get(Oe).currentProgram.isReady()&&Y.delete(Oe)}),Y.size===0){V(w);return}setTimeout(Te,10)}J.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let gt=null;function Qt(w){gt&&gt(w)}function mn(){An.stop()}function _t(){An.start()}let An=new dp;An.setAnimationLoop(Qt),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(w){gt=w,Ce.setAnimationLoop(w),w===null?An.stop():An.start()},Ce.addEventListener("sessionstart",mn),Ce.addEventListener("sessionend",_t),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(B),B=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,B,I),m=we.get(w,y.length),m.init(),y.push(m),Ie.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(Ie),be=this.localClippingEnabled,ue=R.init(this.clippingPlanes,be),x=Ee.get(w,d.length),x.init(),d.push(x),mi(w,B,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(te,ee),this.info.render.frame++,ue===!0&&R.beginShadows();let W=m.state.shadowsArray;if(P.render(W,w,B),ue===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),O.render(x,w),m.setupLights(A._useLegacyLights),B.isArrayCamera){let Y=B.cameras;for(let V=0,Te=Y.length;V<Te;V++){let Oe=Y[V];Qu(x,w,Oe,Oe.viewport)}}else Qu(x,w,B);I!==null&&(M.updateMultisampleRenderTarget(I),M.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(A,w,B),pe.resetDefaultState(),U=-1,b=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function mi(w,B,W,Y){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){Y&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);let Oe=oe.update(w),He=w.material;He.visible&&x.push(w,Oe,He,W,Ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){let Oe=oe.update(w),He=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ge.copy(Oe.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(He)){let qe=Oe.groups;for(let tt=0,Ke=qe.length;tt<Ke;tt++){let Qe=qe[tt],Ut=He[Qe.materialIndex];Ut&&Ut.visible&&x.push(w,Oe,Ut,W,Ge.z,Qe)}}else He.visible&&x.push(w,Oe,He,W,Ge.z,null)}}let Te=w.children;for(let Oe=0,He=Te.length;Oe<He;Oe++)mi(Te[Oe],B,W,Y)}function Qu(w,B,W,Y){let V=w.opaque,Te=w.transmissive,Oe=w.transparent;m.setupLightsView(W),ue===!0&&R.setGlobalState(A.clippingPlanes,W),Te.length>0&&Im(V,Te,B,W),Y&&q.viewport(C.copy(Y)),V.length>0&&Jo(V,B,W),Te.length>0&&Jo(Te,B,W),Oe.length>0&&Jo(Oe,B,W),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Im(w,B,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let Te=ae.isWebGL2;Re===null&&(Re=new si(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Ds:ns,minFilter:is,samples:Te?4:0})),A.getDrawingBufferSize(We),Te?Re.setSize(We.x,We.y):Re.setSize(Ba(We.x),Ba(We.y));let Oe=A.getRenderTarget();A.setRenderTarget(Re),A.getClearColor(Q),L=A.getClearAlpha(),L<1&&A.setClearColor(16777215,.5),A.clear();let He=A.toneMapping;A.toneMapping=ts,Jo(w,W,Y),M.updateMultisampleRenderTarget(Re),M.updateRenderTargetMipmap(Re);let qe=!1;for(let tt=0,Ke=B.length;tt<Ke;tt++){let Qe=B[tt],Ut=Qe.object,Ln=Qe.geometry,en=Qe.material,Ci=Qe.group;if(en.side===Sn&&Ut.layers.test(Y.layers)){let Pt=en.side;en.side=wn,en.needsUpdate=!0,ef(Ut,W,Y,Ln,en,Ci),en.side=Pt,en.needsUpdate=!0,qe=!0}}qe===!0&&(M.updateMultisampleRenderTarget(Re),M.updateRenderTargetMipmap(Re)),A.setRenderTarget(Oe),A.setClearColor(Q,L),A.toneMapping=He}function Jo(w,B,W){let Y=B.isScene===!0?B.overrideMaterial:null;for(let V=0,Te=w.length;V<Te;V++){let Oe=w[V],He=Oe.object,qe=Oe.geometry,tt=Y===null?Oe.material:Y,Ke=Oe.group;He.layers.test(W.layers)&&ef(He,B,W,qe,tt,Ke)}}function ef(w,B,W,Y,V,Te){w.onBeforeRender(A,B,W,Y,V,Te),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(A,B,W,Y,w,Te),V.transparent===!0&&V.side===Sn&&V.forceSinglePass===!1?(V.side=wn,V.needsUpdate=!0,A.renderBufferDirect(W,B,Y,V,w,Te),V.side=xi,V.needsUpdate=!0,A.renderBufferDirect(W,B,Y,V,w,Te),V.side=Sn):A.renderBufferDirect(W,B,Y,V,w,Te),w.onAfterRender(A,B,W,Y,V,Te)}function $o(w,B,W){B.isScene!==!0&&(B=Ue);let Y=ce.get(w),V=m.state.lights,Te=m.state.shadowsArray,Oe=V.state.version,He=ve.getParameters(w,V.state,Te,B,W),qe=ve.getProgramCacheKey(He),tt=Y.programs;Y.environment=w.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(w.isMeshStandardMaterial?N:v).get(w.envMap||Y.environment),tt===void 0&&(w.addEventListener("dispose",xe),tt=new Map,Y.programs=tt);let Ke=tt.get(qe);if(Ke!==void 0){if(Y.currentProgram===Ke&&Y.lightsStateVersion===Oe)return nf(w,He),Ke}else He.uniforms=ve.getUniforms(w),w.onBuild(W,He,A),w.onBeforeCompile(He,A),Ke=ve.acquireProgram(He,qe),tt.set(qe,Ke),Y.uniforms=He.uniforms;let Qe=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=R.uniform),nf(w,He),Y.needsLights=Dm(w),Y.lightsStateVersion=Oe,Y.needsLights&&(Qe.ambientLightColor.value=V.state.ambient,Qe.lightProbe.value=V.state.probe,Qe.directionalLights.value=V.state.directional,Qe.directionalLightShadows.value=V.state.directionalShadow,Qe.spotLights.value=V.state.spot,Qe.spotLightShadows.value=V.state.spotShadow,Qe.rectAreaLights.value=V.state.rectArea,Qe.ltc_1.value=V.state.rectAreaLTC1,Qe.ltc_2.value=V.state.rectAreaLTC2,Qe.pointLights.value=V.state.point,Qe.pointLightShadows.value=V.state.pointShadow,Qe.hemisphereLights.value=V.state.hemi,Qe.directionalShadowMap.value=V.state.directionalShadowMap,Qe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Qe.spotShadowMap.value=V.state.spotShadowMap,Qe.spotLightMatrix.value=V.state.spotLightMatrix,Qe.spotLightMap.value=V.state.spotLightMap,Qe.pointShadowMap.value=V.state.pointShadowMap,Qe.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Ke,Y.uniformsList=null,Ke}function tf(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=br.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function nf(w,B){let W=ce.get(w);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Pm(w,B,W,Y,V){B.isScene!==!0&&(B=Ue),M.resetTextureUnits();let Te=B.fog,Oe=Y.isMeshStandardMaterial?B.environment:null,He=I===null?A.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:qt,qe=(Y.isMeshStandardMaterial?N:v).get(Y.envMap||Oe),tt=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Qe=!!W.morphAttributes.position,Ut=!!W.morphAttributes.normal,Ln=!!W.morphAttributes.color,en=ts;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(en=A.toneMapping);let Ci=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Pt=Ci!==void 0?Ci.length:0,nt=ce.get(Y),Jc=m.state.lights;if(ue===!0&&(be===!0||w!==b)){let Hn=w===b&&Y.id===U;R.setState(Y,w,Hn)}let Nt=!1;Y.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Jc.state.version||nt.outputColorSpace!==He||V.isBatchedMesh&&nt.batching===!1||!V.isBatchedMesh&&nt.batching===!0||V.isInstancedMesh&&nt.instancing===!1||!V.isInstancedMesh&&nt.instancing===!0||V.isSkinnedMesh&&nt.skinning===!1||!V.isSkinnedMesh&&nt.skinning===!0||V.isInstancedMesh&&nt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&nt.instancingColor===!1&&V.instanceColor!==null||nt.envMap!==qe||Y.fog===!0&&nt.fog!==Te||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==R.numPlanes||nt.numIntersection!==R.numIntersection)||nt.vertexAlphas!==tt||nt.vertexTangents!==Ke||nt.morphTargets!==Qe||nt.morphNormals!==Ut||nt.morphColors!==Ln||nt.toneMapping!==en||ae.isWebGL2===!0&&nt.morphTargetsCount!==Pt)&&(Nt=!0):(Nt=!0,nt.__version=Y.version);let _s=nt.currentProgram;Nt===!0&&(_s=$o(Y,B,V));let sf=!1,so=!1,$c=!1,ln=_s.getUniforms(),vs=nt.uniforms;if(q.useProgram(_s.program)&&(sf=!0,so=!0,$c=!0),Y.id!==U&&(U=Y.id,so=!0),sf||b!==w){ln.setValue(H,"projectionMatrix",w.projectionMatrix),ln.setValue(H,"viewMatrix",w.matrixWorldInverse);let Hn=ln.map.cameraPosition;Hn!==void 0&&Hn.setValue(H,Ge.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&ln.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ln.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,so=!0,$c=!0)}if(V.isSkinnedMesh){ln.setOptional(H,V,"bindMatrix"),ln.setOptional(H,V,"bindMatrixInverse");let Hn=V.skeleton;Hn&&(ae.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),ln.setValue(H,"boneTexture",Hn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(ln.setOptional(H,V,"batchingTexture"),ln.setValue(H,"batchingTexture",V._matricesTexture,M));let Qc=W.morphAttributes;if((Qc.position!==void 0||Qc.normal!==void 0||Qc.color!==void 0&&ae.isWebGL2===!0)&&K.update(V,W,_s),(so||nt.receiveShadow!==V.receiveShadow)&&(nt.receiveShadow=V.receiveShadow,ln.setValue(H,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(vs.envMap.value=qe,vs.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),so&&(ln.setValue(H,"toneMappingExposure",A.toneMappingExposure),nt.needsLights&&Lm(vs,$c),Te&&Y.fog===!0&&Ae.refreshFogUniforms(vs,Te),Ae.refreshMaterialUniforms(vs,Y,ie,$,Re),br.upload(H,tf(nt),vs,M)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(br.upload(H,tf(nt),vs,M),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ln.setValue(H,"center",V.center),ln.setValue(H,"modelViewMatrix",V.modelViewMatrix),ln.setValue(H,"normalMatrix",V.normalMatrix),ln.setValue(H,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Hn=Y.uniformsGroups;for(let el=0,Nm=Hn.length;el<Nm;el++)if(ae.isWebGL2){let rf=Hn[el];Se.update(rf,_s),Se.bind(rf,_s)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _s}function Lm(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Dm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,B,W){ce.get(w.texture).__webglTexture=B,ce.get(w.depthTexture).__webglTexture=W;let Y=ce.get(w);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){let W=ce.get(w);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,W=0){I=w,S=B,E=W;let Y=!0,V=null,Te=!1,Oe=!1;if(w){let qe=ce.get(w);qe.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1):qe.__webglFramebuffer===void 0?M.setupRenderTarget(w):qe.__hasExternalTextures&&M.rebindTextures(w,ce.get(w.texture).__webglTexture,ce.get(w.depthTexture).__webglTexture);let tt=w.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Oe=!0);let Ke=ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[B])?V=Ke[B][W]:V=Ke[B],Te=!0):ae.isWebGL2&&w.samples>0&&M.useMultisampledRTT(w)===!1?V=ce.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?V=Ke[W]:V=Ke,C.copy(w.viewport),k.copy(w.scissor),F=w.scissorTest}else C.copy(he).multiplyScalar(ie).floor(),k.copy(fe).multiplyScalar(ie).floor(),F=Me;if(q.bindFramebuffer(H.FRAMEBUFFER,V)&&ae.drawBuffers&&Y&&q.drawBuffers(w,V),q.viewport(C),q.scissor(k),q.setScissorTest(F),Te){let qe=ce.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,qe.__webglTexture,W)}else if(Oe){let qe=ce.get(w.texture),tt=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.__webglTexture,W||0,tt)}U=-1},this.readRenderTargetPixels=function(w,B,W,Y,V,Te,Oe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He){q.bindFramebuffer(H.FRAMEBUFFER,He);try{let qe=w.texture,tt=qe.format,Ke=qe.type;if(tt!==Vn&&se.convert(tt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Qe=Ke===Ds&&(J.has("EXT_color_buffer_half_float")||ae.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ke!==ns&&se.convert(Ke)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===zi&&(ae.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Y&&W>=0&&W<=w.height-V&&H.readPixels(B,W,Y,V,se.convert(tt),se.convert(Ke),Te)}finally{let qe=I!==null?ce.get(I).__webglFramebuffer:null;q.bindFramebuffer(H.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(w,B,W=0){let Y=Math.pow(2,-W),V=Math.floor(B.image.width*Y),Te=Math.floor(B.image.height*Y);M.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,w.x,w.y,V,Te),q.unbindTexture()},this.copyTextureToTexture=function(w,B,W,Y=0){let V=B.image.width,Te=B.image.height,Oe=se.convert(W.format),He=se.convert(W.type);M.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,w.x,w.y,V,Te,Oe,He,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,Oe,B.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Y,w.x,w.y,Oe,He,B.image),Y===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(w,B,W,Y,V=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Te=w.max.x-w.min.x+1,Oe=w.max.y-w.min.y+1,He=w.max.z-w.min.z+1,qe=se.convert(Y.format),tt=se.convert(Y.type),Ke;if(Y.isData3DTexture)M.setTexture3D(Y,0),Ke=H.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)M.setTexture2DArray(Y,0),Ke=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);let Qe=H.getParameter(H.UNPACK_ROW_LENGTH),Ut=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ln=H.getParameter(H.UNPACK_SKIP_PIXELS),en=H.getParameter(H.UNPACK_SKIP_ROWS),Ci=H.getParameter(H.UNPACK_SKIP_IMAGES),Pt=W.isCompressedTexture?W.mipmaps[V]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Pt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,w.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,w.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Ke,V,B.x,B.y,B.z,Te,Oe,He,qe,tt,Pt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ke,V,B.x,B.y,B.z,Te,Oe,He,qe,Pt.data)):H.texSubImage3D(Ke,V,B.x,B.y,B.z,Te,Oe,He,qe,tt,Pt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Qe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ut),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ln),H.pixelStorei(H.UNPACK_SKIP_ROWS,en),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ci),V===0&&Y.generateMipmaps&&H.generateMipmap(Ke),q.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),q.unbindTexture()},this.resetState=function(){S=0,E=0,I=null,q.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Dh?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===xc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?Ls:ap}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ls?ft:qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},rh=class extends Ro{};rh.prototype.isWebGL1Renderer=!0;Ir=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new T,Os=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lr=class extends _n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ho=new T,mr=new T,Ar=new T,gr=new ge,uo=new ge,yp=new Ye,Ma=new T,fo=new T,ba=new T,wd=new ge,Cl=new ge,Td=new ge,Co=class extends Mt{constructor(e=new Lr){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pr(t,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new Os(n,3,0,!1)),pr.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=pr,this.material=e,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),yp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-Ar.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ea(Ma.set(-.5,-.5,0),Ar,o,mr,s,r),Ea(fo.set(.5,-.5,0),Ar,o,mr,s,r),Ea(ba.set(.5,.5,0),Ar,o,mr,s,r),wd.set(0,0),Cl.set(1,0),Td.set(1,1);let a=e.ray.intersectTriangle(Ma,fo,ba,!1,ho);if(a===null&&(Ea(fo.set(-.5,.5,0),Ar,o,mr,s,r),Cl.set(0,1),a=e.ray.intersectTriangle(Ma,ba,fo,!1,ho),a===null))return;let c=e.ray.origin.distanceTo(ho);c<e.near||c>e.far||t.push({distance:c,point:ho.clone(),uv:Cs.getInterpolation(ho,Ma,fo,ba,wd,Cl,Td,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Rd=new T,Cd=new yt,Id=new yt,k1=new T,Pd=new Ye,Sa=new T,Il=new Un,Ld=new Ye,Pl=new Us,Za=class extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uf,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Il.copy(this.boundingSphere),Il.applyMatrix4(s),e.ray.intersectsSphere(Il)!==!1&&(Ld.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(Ld),!(this.boundingBox!==null&&Pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mA?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Cd.fromBufferAttribute(s.attributes.skinIndex,e),Id.fromBufferAttribute(s.attributes.skinWeight,e),Rd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Id.getComponent(r);if(o!==0){let a=Cd.getComponent(r);Pd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(k1.copy(Rd).applyMatrix4(Pd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Io=class extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Po=class extends an{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Ot,h=Ot,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dd=new Ye,H1=new Ye,Ja=class i{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:H1;Dd.multiplyMatrices(a,t[r]),Dd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Po(t,e,e,Vn,zi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Io),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Fs=class extends Xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xr=new Ye,Nd=new Ye,wa=[],Ud=new dt,G1=new Ye,po=new mt,mo=new Un,Dr=class extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,G1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),Ud.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(Ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),mo.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(n),e.ray.intersectsSphere(mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xr),Nd.multiplyMatrices(n,xr),po.matrixWorld=Nd,po.raycast(e,wa);for(let o=0,a=wa.length;o<a;o++){let c=wa[o];c.instanceId=r,c.object=this,t.push(c)}wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},os=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Od=new T,Fd=new T,zd=new Ye,Ll=new Us,Ta=new Un,Nr=class extends Mt{constructor(e=new Lt,t=new os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Od.fromBufferAttribute(t,s-1),Fd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Od.distanceTo(Fd);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;zd.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new T,h=new T,u=new T,f=new T,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let d=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let A=d,_=y-1;A<_;A+=p){let S=g.getX(A),E=g.getX(A+1);if(l.fromBufferAttribute(m,S),h.fromBufferAttribute(m,E),Ll.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let A=d,_=y-1;A<_;A+=p){if(l.fromBufferAttribute(m,A),h.fromBufferAttribute(m,A+1),Ll.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Bd=new T,kd=new T,zs=class extends Nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Bd.fromBufferAttribute(t,s),kd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bd.distanceTo(kd);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$a=class extends Nr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Lo=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hd=new Ye,oh=new Us,Ra=new Un,Ca=new T,Qa=class extends Mt{constructor(e=new Lt,t=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;Hd.copy(s).invert(),oh.copy(e.ray).applyMatrix4(Hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=l.getX(g);Ca.fromBufferAttribute(u,m),Gd(Ca,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Ca.fromBufferAttribute(u,g),Gd(Ca,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};as=class extends an{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ge:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,s=[],r=[],o=[],a=new T,c=new Ye;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Wt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Wt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Do=class extends Xn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new ge,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ah=class extends Do{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Ia=new T,Dl=new Oh,Nl=new Oh,Ul=new Oh,ch=class extends Xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),l=Ia);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Dl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),Nl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),Ul.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Nl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ul.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Dl.calc(c),Nl.calc(c),Ul.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ec=class extends Xn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bo(e,s.x,r.x,o.x,a.x),bo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lh=class extends Xn{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bo(e,s.x,r.x,o.x,a.x),bo(e,s.y,r.y,o.y,a.y),bo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tc=class extends Xn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hh=class extends Xn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends Xn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mo(e,s.x,r.x,o.x),Mo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uh=class extends Xn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mo(e,s.x,r.x,o.x),Mo(e,s.y,r.y,o.y),Mo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Vd(a,c.x,l.x,h.x,u.x),Vd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},Wd=Object.freeze({__proto__:null,ArcCurve:ah,CatmullRomCurve3:ch,CubicBezierCurve:ec,CubicBezierCurve3:lh,EllipseCurve:Do,LineCurve:tc,LineCurve3:hh,QuadraticBezierCurve:nc,QuadraticBezierCurve3:uh,SplineCurve:ic}),fh=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wd[s.type]().fromJSON(s))}return this}},dh=class extends fh{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new tc(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new nc(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ec(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ic(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Do(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},No=class i extends Lt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Wt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new T,f=new ge,p=new T,g=new T,x=new T,m=0,d=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let y=0;y<=t;y++){let A=n+y*h*s,_=Math.sin(A),S=Math.cos(A);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*S,o.push(u.x,u.y,u.z),f.x=y/t,f.y=E/(e.length-1),a.push(f.x,f.y);let I=c[3*E+0]*_,U=c[3*E+1],b=c[3*E+0]*S;l.push(I,U,b)}}for(let y=0;y<t;y++)for(let A=0;A<e.length-1;A++){let _=A+y*e.length,S=_,E=_+e.length,I=_+e.length+1,U=_+1;r.push(S,E,U),r.push(I,U,E)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Bs=class i extends No{constructor(e=1,t=1,n=4,s=8){let r=new dh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},ks=class i extends Lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new T,h=new ge;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Je=class i extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],m=n/2,d=0;y(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(p,2));function y(){let _=new T,S=new T,E=0,I=(t-e)/n;for(let U=0;U<=r;U++){let b=[],C=U/r,k=C*(t-e)+e;for(let F=0;F<=s;F++){let Q=F/s,L=Q*c+a,z=Math.sin(L),$=Math.cos(L);S.x=k*z,S.y=-C*n+m,S.z=k*$,u.push(S.x,S.y,S.z),_.set(z,I,$).normalize(),f.push(_.x,_.y,_.z),p.push(Q,1-C),b.push(g++)}x.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){let C=x[b][U],k=x[b+1][U],F=x[b+1][U+1],Q=x[b][U+1];h.push(C,k,Q),h.push(k,F,Q),E+=6}l.addGroup(d,E,0),d+=E}function A(_){let S=g,E=new ge,I=new T,U=0,b=_===!0?e:t,C=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*C,0),f.push(0,C,0),p.push(.5,.5),g++;let k=g;for(let F=0;F<=s;F++){let L=F/s*c+a,z=Math.cos(L),$=Math.sin(L);I.x=b*$,I.y=m*C,I.z=b*z,u.push(I.x,I.y,I.z),f.push(0,C,0),E.x=z*.5+.5,E.y=$*.5*C+.5,p.push(E.x,E.y),g++}for(let F=0;F<s;F++){let Q=S+F,L=k+F;_===!0?h.push(L,L+1,Q):h.push(L+1,L,Q),U+=3}l.addGroup(d,U,_===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yi=class i extends Je{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sc=class i extends Lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let A=new T,_=new T,S=new T;for(let E=0;E<t.length;E+=3)p(t[E+0],A),p(t[E+1],_),p(t[E+2],S),c(A,_,S,y)}function c(y,A,_,S){let E=S+1,I=[];for(let U=0;U<=E;U++){I[U]=[];let b=y.clone().lerp(_,U/E),C=A.clone().lerp(_,U/E),k=E-U;for(let F=0;F<=k;F++)F===0&&U===E?I[U][F]=b:I[U][F]=b.clone().lerp(C,F/k)}for(let U=0;U<E;U++)for(let b=0;b<2*(E-U)-1;b++){let C=Math.floor(b/2);b%2===0?(f(I[U][C+1]),f(I[U+1][C]),f(I[U][C])):(f(I[U][C+1]),f(I[U+1][C+1]),f(I[U+1][C]))}}function l(y){let A=new T;for(let _=0;_<r.length;_+=3)A.x=r[_+0],A.y=r[_+1],A.z=r[_+2],A.normalize().multiplyScalar(y),r[_+0]=A.x,r[_+1]=A.y,r[_+2]=A.z}function h(){let y=new T;for(let A=0;A<r.length;A+=3){y.x=r[A+0],y.y=r[A+1],y.z=r[A+2];let _=m(y)/2/Math.PI+.5,S=d(y)/Math.PI+.5;o.push(_,1-S)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let A=o[y+0],_=o[y+2],S=o[y+4],E=Math.max(A,_,S),I=Math.min(A,_,S);E>.9&&I<.1&&(A<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,A){let _=y*3;A.x=e[_+0],A.y=e[_+1],A.z=e[_+2]}function g(){let y=new T,A=new T,_=new T,S=new T,E=new ge,I=new ge,U=new ge;for(let b=0,C=0;b<r.length;b+=9,C+=6){y.set(r[b+0],r[b+1],r[b+2]),A.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),E.set(o[C+0],o[C+1]),I.set(o[C+2],o[C+3]),U.set(o[C+4],o[C+5]),S.copy(y).add(A).add(_).divideScalar(3);let k=m(S);x(E,C+0,y,k),x(I,C+2,A,k),x(U,C+4,_,k)}}function x(y,A,_,S){S<0&&y.x===1&&(o[A]=y.x-1),_.x===0&&_.z===0&&(o[A]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},rc=class i extends sc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},oc=class i extends sc{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ac=class i extends Lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/s,p=new T,g=new ge;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let d=0;d<n;d++){let y=d+m,A=y,_=y+n+1,S=y+n+2,E=y+1;a.push(A,_,E),a.push(_,S,E)}}this.setIndex(a),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},bt=class i extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new T,f=new T,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let y=[],A=d/n,_=0;d===0&&o===0?_=.5/t:d===n&&c===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let E=S/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+A*a),u.y=e*Math.cos(o+A*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+A*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+_,1-A),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let A=h[d][y+1],_=h[d][y],S=h[d+1][y],E=h[d+1][y+1];(d!==0||o>0)&&p.push(A,_,E),(d!==n-1||c<Math.PI)&&p.push(_,S,E)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},sn=class i extends Lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new T,u=new T,f=new T;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(x,m,y),o.push(m,d,y)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Rn=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qn=class extends Rn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},cc=class extends _n{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new De(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};cs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ph=class extends cs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ff,endingEnd:Ff}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zf:r=e,a=2*t-n;break;case Bf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zf:o=e,c=2*n-t;break;case Bf:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,A=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let S=0;S!==a;++S)r[S]=d*o[h+S]+y*o[l+S]+A*o[c+S]+_*o[u+S];return r}},mh=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Ah=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ph(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Z1(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ol,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Ns;ls=class extends Yn{};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Tr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;lc=class extends Yn{};lc.prototype.ValueTypeName="color";ki=class extends Yn{};ki.prototype.ValueTypeName="number";gh=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)fn.slerpFlat(r,0,o,l-a,o,l,c);return r}},_i=class extends Yn{InterpolantFactoryMethodLinear(e){return new gh(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.DefaultInterpolation=Ns;_i.prototype.InterpolantFactoryMethodSmooth=void 0;hs=class extends Yn{};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Tr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;Hi=class extends Yn{};Hi.prototype.ValueTypeName="vector";hc=class{constructor(e,t=-1,n,s=bA){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Q1(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=J1(c);c=Xd(c,1,h),l=Xd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ki(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,g,x){if(p.length!==0){let m=[],d=[];_p(p,m,d,g),m.length!==0&&x.push(new u(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let y=0;y!==f[g].morphTargets.length;++y){let A=f[g];m.push(A.time),d.push(A.morphTarget===x?1:0)}s.push(new ki(".morphTargetInfluence["+x+"]",m,d))}c=p.length*o}else{let p=".bones["+t[u].name+"]";n(Hi,p+".position",f,"pos",s),n(_i,p+".quaternion",f,"rot",s),n(Hi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Qi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},xh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},ev=new xh,Gi=class{constructor(e){this.manager=e!==void 0?e:ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";Ui={},yh=class extends Error{constructor(e,t){super(e),this.response=t}},Uo=class extends Gi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:s});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ui[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){y();function y(){u.read().then(({done:A,value:_})=>{if(A)d.close();else{x+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let E=0,I=h.length;E<I;E++){let U=h[E];U.onProgress&&U.onProgress(S)}d.enqueue(_),y()}})}}});return new Response(m)}else throw new yh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Qi.add(e,l);let h=Ui[e];delete Ui[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ui[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},_h=class extends Gi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=So("img");function c(){h(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},uc=class extends Gi{constructor(e){super(e)}load(e,t,n,s){let r=new an,o=new _h(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ur=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},fc=class extends Ur{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ol=new Ye,qd=new T,Yd=new T,Oo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(qd),Yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yd),t.updateMatrixWorld(),Ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vh=class extends Oo{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Rr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},dc=class extends Ur{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jd=new Ye,Ao=new T,Fl=new T,Mh=class extends Oo{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ao),Fl.copy(n.position),Fl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fl),n.updateMatrixWorld(),s.makeTranslation(-Ao.x,-Ao.y,-Ao.z),jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd)}},ri=class extends Ur{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},bh=class extends Oo{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Or=class extends Ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new bh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},us=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},pc=class extends Gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Qi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qi.add(e,c),r.manager.itemStart(e)}},Fh="\\[\\]\\.:\\/",tv=new RegExp("["+Fh+"]","g"),zh="[^"+Fh+"]",nv="[^"+Fh.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",zh),sv=/(WCOD+)?/.source.replace("WCOD",nv),rv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zh),ov=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zh),av=new RegExp("^"+iv+sv+rv+ov+"$"),cv=["material","materials","bones","map"],Eh=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tv,"")}static parseTrackName(e){let t=av.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Eh;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];IM=new Float32Array(1),mc=class{constructor(e,t,n=0,s=1/0){this.ray=new Us(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Sh(e,this,n,t),n.sort(Kd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Sh(e[s],this,n,t);return n.sort(Kd),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh)});function jn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;zo.copy(e),zo[n]=0,zo.normalize();let l=.5*o/(o+a),h=1-zo.angleTo(i)/c;return Math.sign(zo[t])===1?h*l:a/(o+a)+l+l*(1-h)}var zo,oi,Bh=ht(()=>{Cn();zo=new T;oi=class extends Tn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new T,c=new T,l=new T(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new T,x=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),f[d+0]=jn(g,c,"z","y",r,n),f[d+1]=1-jn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[d+0]=1-jn(g,c,"z","y",r,n),f[d+1]=1-jn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[d+0]=1-jn(g,c,"x","z",r,e),f[d+1]=jn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[d+0]=1-jn(g,c,"x","z",r,e),f[d+1]=1-jn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[d+0]=1-jn(g,c,"x","y",r,e),f[d+1]=1-jn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[d+0]=jn(g,c,"x","y",r,e),f[d+1]=1-jn(g,c,"y","x",r,t);break}}}});function kh(i,e){if(e===op)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Fo||e===gc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Fo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var vp=ht(()=>{Cn()});function lv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function fv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Rn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),i.DefaultMaterial}function Hs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ds(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function pv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mv(i){let e,t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vh(t.attributes):e=i.indices+":"+Vh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Vh(i.targets[n]);return e}function Vh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function du(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Av(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function xv(i,e,t){let n=e.attributes,s=new dt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),a.normalized){let h=du(zr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new T,c=new T;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=du(zr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Un;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Sp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=fu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ut.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),ds(i,e),xv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dv(i,e.targets,t):i})}var _c,rt,Wh,Xh,qh,Yh,jh,Kh,Zh,Jh,$h,Qh,eu,tu,nu,iu,su,ru,ou,wp,Bo,Mp,au,cu,lu,hu,vc,hv,uu,Kn,zr,bp,Ep,Hh,fu,fs,uv,Gh,gv,pu,Tp=ht(()=>{Cn();vp();_c=class extends Gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new ou(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=us.extractUrlBase(e);o=us.resolveURL(l,this.path)}else o=us.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Uo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wp){try{o[rt.KHR_BINARY_GLTF]=new au(e)}catch(u){s&&s(u);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new pu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:o[u]=new Xh;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new cu(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[u]=new lu;break;case rt.KHR_MESH_QUANTIZATION:o[u]=new hu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Wh=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new De(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Or(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ri(h),l.distance=u;break;case"spot":l=new dc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ds(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Xh=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,n){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(s)}},qh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Yh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(a,a)}return Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Qh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ft)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},iu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},su=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ru=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},ou=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Kn.TRIANGLES&&l.mode!==Kn.TRIANGLE_STRIP&&l.mode!==Kn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let g of u){let x=new Ye,m=new T,d=new fn,y=new T(1,1,1),A=new Dr(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),A.setMatrixAt(_,x.compose(m,d,y));for(let _ in c)if(_==="_COLOR_0"){let S=c[_];A.instanceColor=new Fs(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Mt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),p.push(A)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},wp="glTF",Bo=12,Mp={JSON:1313821514,BIN:5130562},au=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Bo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Bo,r=new DataView(e,Bo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Mp.JSON){let l=new Uint8Array(e,Bo+o,a);this.content=n.decode(l)}else if(c===Mp.BIN){let l=Bo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},cu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=fu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=fu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],p=zr[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let x=p.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(p)},a,l,qt,f)})})}},lu=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},hu=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},vc=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,g=e*l,x=g-l,m=-2*p+3*f,d=p-f,y=1-m,A=d-f+u;for(let _=0;_!==a;_++){let S=o[x+_+a],E=o[x+_+c]*h,I=o[g+_+a],U=o[g+_]*h;r[_]=y*S+A*E+m*I+d*U}return r}},hv=new fn,uu=class extends vc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return hv.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bp={9728:Ot,9729:yn,9984:Na,9985:Ch,9986:go,9987:is},Ep={33071:nn,33648:Eo,10497:ii},Hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uv={CUBICSPLINE:void 0,LINEAR:Ns,STEP:Tr},Gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};gv=new Ye,pu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new uc(this.options.manager):this.textureLoader=new pc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Hs(r,a,s),ds(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(us.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Hh[s.type],a=zr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Xt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Hh[s.type],l=zr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==u){let d=Math.floor(f/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,A=t.cache.get(y);A||(x=new l(a,d*p,s.count*p/h),A=new Pr(x,p/h),t.cache.add(y,A)),m=new Os(A,c,f%p/h,g)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new Xt(x,c,g);if(s.sparse!==void 0){let d=Hh.SCALAR,y=zr[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,S=new y(o[1],A,s.sparse.count*d),E=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized));for(let I=0,U=S.length;I<U;I++){let b=S[I];if(m.setX(b,E[I*c]),c>=2&&m.setY(b,E[I*c+1]),c>=3&&m.setZ(b,E[I*c+2]),c>=4&&m.setW(b,E[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=bp[f.magFilter]||yn,h.minFilter=bp[f.minFilter]||is,h.wrapS=Ep[f.wrapS]||ii,h.wrapT=Ep[f.wrapT]||ii,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new an(x);m.needsUpdate=!0,f(m)}),t.load(us.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||Av(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Lo,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new os,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Rn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[rt.KHR_MATERIALS_UNLIT]){let u=s[rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],qt),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,ft)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Sn);let h=r.alphaMode||Gh.OPAQUE;if(h===Gh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Gh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ge(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Yt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yt){let u=r.emissiveFactor;a.emissive=new De().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&o!==Yt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ft)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ds(u,r),t.associations.set(u,{materials:e}),r.extensions&&Hs(s,u,r),u})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Sp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=mv(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Sp(new Lt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?fv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let x=h[p],m=o[p],d,y=l[p];if(m.mode===Kn.TRIANGLES||m.mode===Kn.TRIANGLE_STRIP||m.mode===Kn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Za(x,y):new mt(x,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Kn.TRIANGLE_STRIP?d.geometry=kh(d.geometry,gc):m.mode===Kn.TRIANGLE_FAN&&(d.geometry=kh(d.geometry,Fo));else if(m.mode===Kn.LINES)d=new zs(x,y);else if(m.mode===Kn.LINE_STRIP)d=new Nr(x,y);else if(m.mode===Kn.LINE_LOOP)d=new $a(x,y);else if(m.mode===Kn.POINTS)d=new Qa(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&pv(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),ds(d,r),m.extensions&&Hs(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Hs(s,u[0],r),u[0];let f=new Ze;r.extensions&&Hs(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(lp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new rs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ds(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Ye;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ja(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],x=u[3],m=u[4],d=[];for(let y=0,A=f.length;y<A;y++){let _=f[y],S=p[y],E=g[y],I=x[y],U=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=n._createAnimationTracks(_,S,E,I,U);if(b)for(let C=0;C<b.length;C++)d.push(b[C])}return new hc(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,gv)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Io:l.length>1?h=new Ze:l.length===1?h=l[0]:h=new Mt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ds(h,r),r.extensions&&Hs(n,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ze;n.name&&(r.name=s.createUniqueName(n.name)),ds(r,n),n.extensions&&Hs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof _n||f instanceof an)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];fs[r.path]===fs.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(fs[r.path]){case fs.weights:l=ki;break;case fs.rotation:l=_i;break;case fs.position:case fs.scale:l=Hi;break;default:switch(n.itemSize){case 1:l=ki;break;case 2:case 3:default:l=Hi;break}break}let h=s.interpolation!==void 0?uv[s.interpolation]:Ns,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+fs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=du(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof _i?uu:vc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function Rp(i){let e=new Map,t=new Map,n=i.clone();return Cp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Cp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Cp(i.children[n],e.children[n],t)}var Ip=ht(()=>{});var Pp,Lp=ht(()=>{Pp={tvCabinet:"Z2xURgIAAAB4IAAAxAMAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjUuMSIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiVkVDMyIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyMjgsIm1heCI6WzAuODAwMDAwMDExOTIwOTI5LDAuMzEwMDAwMDAyMzg0MTg1OCwwXSwibWluIjpbMCwwLC0wLjI1XSwiYnVmZmVyVmlldyI6MCwiYnl0ZU9mZnNldCI6MH0seyJ0eXBlIjoiVkVDMyIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyMjgsImJ1ZmZlclZpZXciOjAsImJ5dGVPZmZzZXQiOjEyfSx7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTI1LCJjb3VudCI6NDYyLCJidWZmZXJWaWV3IjoxLCJieXRlT2Zmc2V0IjowfV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVPZmZzZXQiOjAsImJ5dGVMZW5ndGgiOjU0NzIsImJ5dGVTdHJpZGUiOjI0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZU9mZnNldCI6NTQ3MiwiYnl0ZUxlbmd0aCI6MTg0OCwidGFyZ2V0IjozNDk2M31dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo3MzIwfV0sIm1hdGVyaWFscyI6W3sibmFtZSI6Indvb2QiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjg5NjIyNjQsMC42MDE1NzEyLDAuMzkzMTU1OSwxXSwibWV0YWxsaWNGYWN0b3IiOjB9fV0sIm1lc2hlcyI6W3sibmFtZSI6Ik1lc2ggY2FiaW5ldFRlbGV2aXNpb24iLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjF9LCJtb2RlIjo0LCJtYXRlcmlhbCI6MCwiaW5kaWNlcyI6Mn1dfV0sIm5vZGVzIjpbeyJuYW1lIjoiY2FiaW5ldFRlbGV2aXNpb24oQ2xvbmUpIiwibWVzaCI6MH1dLCJzY2VuZXMiOlt7Im5vZGVzIjpbMF19XSwic2NlbmUiOjAsImV4dGVuc2lvbnNVc2VkIjpbIktIUl9tYXRlcmlhbHNfdW5saXQiXX0gmBwAAEJJTgAAAAAAvw4cJArXI70AAAAAAAAAAAAAgL8K1yM9vw4cJArXI70AAAAAAAAAAAAAgL8AAAAACtcjPQrXI70AAAAAAAAAAAAAgL8K1yM9CtcjPQrXI70AAAAAAAAAAAAAgL8K1yM9AAAAAAAAAIAAAIA/AAAAAAAAAIAK1yM9CtcjPQAAAIAAAIA/AAAAAAAAAIAK1yM9vw4cJArXI70AAIA/AAAAAAAAAIAK1yM9CtcjPQrXI70AAIA/AAAAAAAAAIAAAAAAvw4cJArXI70AAAAAAACAvwAAAIAAAAAAAAAAAAAAAIAAAAAAAACAvwAAAIAK1yM9vw4cJArXI70AAAAAAACAvwAAAIAK1yM9AAAAAAAAAIAAAAAAAACAvwAAAIAAAAAAIY6VJQAAgL4AAAAAAACAvwAAAIAAAAAAWRd3JT0KV74AAAAAAACAvwAAAIAK1yM9IY6VJQAAgL4AAAAAAACAvwAAAIAK1yM9WRd3JT0KV74AAAAAAACAvwAAAIAK1yM9CtcjPT0KV74AAIA/AAAAAAAAAIAK1yM9CtcjPQAAgL4AAIA/AAAAAAAAAIAK1yM9WRd3JT0KV74AAIA/AAAAAAAAAIAK1yM9IY6VJQAAgL4AAIA/AAAAAAAAAIAK1yM9cD2KPj0KV74AAAAAAACAvwAAAIAK1yM9cD2KPgAAAIAAAAAAAACAvwAAAIBcj0I/cD2KPj0KV74AAAAAAACAvwAAAIAVrsc+cD2KPs3MTL0AAAAAAACAvwAAAICG69E+cD2KPs3MTL0AAAAAAACAvwAAAICG69E+cD2KPpDC9bwAAAAAAACAvwAAAIAVrsc+cD2KPpDC9bwAAAAAAACAvwAAAIBcj0I/cD2KPgAAAIAAAAAAAACAvwAAAIAK1yM9CtejPT0KV74AAAAAAACAPwAAAIAVrsc+CtejPZDC9bwAAAAAAACAPwAAAIAK1yM9CtejPQAAAIAAAAAAAACAPwAAAIBcj0I/CtejPQAAAIAAAAAAAACAPwAAAICG69E+CtejPZDC9bwAAAAAAACAPwAAAICG69E+CtejPc3MTL0AAAAAAACAPwAAAIAVrsc+CtejPc3MTL0AAAAAAACAPwAAAIBcj0I/CtejPT0KV74AAAAAAACAPwAAAIAK1yM9WRd3JT0KV74AAAAAAAAAAAAAgD8AAAAAWRd3JT0KV74AAAAAAAAAAAAAgD8K1yM9CtcjPT0KV74AAAAAAAAAAAAAgD8AAAAACtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/SgyCJArXI70AAAAAAACAvwAAAIBcj0I/SgyCJKkT0KUAAAAAAACAvwAAAIDNzEw/SgyCJArXI70AAAAAAACAvwAAAIDNzEw/SgyCJKkT0KUAAAAAAACAvwAAAIBcj0I/SgyCJArXI70AAAAAAAAAAAAAgL/NzEw/SgyCJArXI70AAAAAAAAAAAAAgL9cj0I/CtcjPQrXI70AAAAAAAAAAAAAgL/NzEw/CtcjPQrXI70AAAAAAAAAAAAAgL9cj0I/CtcjPT0KV74AAIC/AAAAAAAAAIBcj0I/54yIJT0KV74AAIC/AAAAAAAAAIBcj0I/CtcjPQAAgL4AAIC/AAAAAAAAAIBcj0I/54yIJQAAgL4AAIC/AAAAAAAAAIDNzEw/54yIJT0KV74AAAAAAAAAAAAAgD9cj0I/54yIJT0KV74AAAAAAAAAAAAAgD/NzEw/CtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/CtcjPT0KV74AAAAAAAAAAAAAgD9cj0I/54yIJQAAgL4AAAAAAACAvwAAAIBcj0I/54yIJT0KV74AAAAAAACAvwAAAIDNzEw/54yIJQAAgL4AAAAAAACAvwAAAIDNzEw/54yIJT0KV74AAAAAAACAvwAAAIAAAAAAUriePgAAAIAAAAAAAACAPwAAAIAAAAAAUriePgAAgL4AAAAAAACAPwAAAIDNzEw/UriePgAAAIAAAAAAAACAPwAAAIDNzEw/UriePgAAgL4AAAAAAACAPwAAAIAAAAAAUriePgAAAIAAAIC/AAAAAAAAAIAAAAAAAAAAAAAAAIAAAIC/AAAAAAAAAIAAAAAAUriePgAAgL4AAIC/AAAAAAAAAIAAAAAACtcjPQrXI70AAIC/AAAAAAAAAIAAAAAACtcjPT0KV74AAIC/AAAAAAAAAIAAAAAAWRd3JT0KV74AAIC/AAAAAAAAAIAAAAAAIY6VJQAAgL4AAIC/AAAAAAAAAIAAAAAAvw4cJArXI70AAIC/AAAAAAAAAIAAAAAAIY6VJQAAgL4AAAAAAAAAAAAAgL8K1yM9IY6VJQAAgL4AAAAAAAAAAAAAgL8AAAAAUriePgAAgL4AAAAAAAAAAAAAgL8K1yM9CtcjPQAAgL4AAAAAAAAAAAAAgL9cj0I/CtcjPQAAgL4AAAAAAAAAAAAAgL/NzEw/UriePgAAgL4AAAAAAAAAAAAAgL/NzEw/54yIJQAAgL4AAAAAAAAAAAAAgL9cj0I/54yIJQAAgL4AAAAAAAAAAAAAgL/NzEw/SgyCJKkT0KUAAIA/AAAAAAAAAIDNzEw/CtcjPQrXI70AAIA/AAAAAAAAAIDNzEw/SgyCJArXI70AAIA/AAAAAAAAAIDNzEw/UriePgAAgL4AAIA/AAAAAAAAAIDNzEw/UriePgAAAIAAAIA/AAAAAAAAAIDNzEw/CtcjPT0KV74AAIA/AAAAAAAAAIDNzEw/54yIJT0KV74AAIA/AAAAAAAAAIDNzEw/54yIJQAAgL4AAIA/AAAAAAAAAIDNzEw/SgyCJKkT0KUAAAAAAAAAAAAAgD9cj0I/SgyCJKkT0KUAAAAAAAAAAAAAgD/NzEw/UriePgAAAIAAAAAAAAAAAAAAgD9cj0I/CtcjPQAAAIAAAAAAAAAAAAAAgD9cj0I/CtejPQAAAIAAAAAAAAAAAAAAgD8K1yM9CtcjPQAAAIAAAAAAAAAAAAAAgD9cj0I/cD2KPgAAAIAAAAAAAAAAAAAAgD8K1yM9cD2KPgAAAIAAAAAAAAAAAAAAgD8K1yM9CtejPQAAAIAAAAAAAAAAAAAAgD8AAAAAUriePgAAAIAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAAIAAAAAAAAAAAAAAgD8K1yM9AAAAAAAAAIAAAAAAAAAAAAAAgD8K1yM9wvUoPj0KV74AAAAAAACAvwAAAIAK1yM9wvUoPpDC9bwAAAAAAACAvwAAAIBcj0I/wvUoPj0KV74AAAAAAACAvwAAAIAVrsc+wvUoPs3MTL0AAAAAAACAvwAAAICG69E+wvUoPs3MTL0AAAAAAACAvwAAAICG69E+wvUoPpDC9bwAAAAAAACAvwAAAIBcj0I/wvUoPpDC9bwAAAAAAACAvwAAAIAVrsc+wvUoPpDC9bwAAAAAAACAvwAAAICG69E+o3A9PpDC9bwAAAAAAACAPwAAAICG69E+o3A9Ps3MTL0AAAAAAACAPwAAAIBcj0I/o3A9PpDC9bwAAAAAAACAPwAAAIBcj0I/o3A9Pj0KV74AAAAAAACAPwAAAIAVrsc+o3A9Ps3MTL0AAAAAAACAPwAAAIAK1yM9o3A9Pj0KV74AAAAAAACAPwAAAIAVrsc+o3A9PpDC9bwAAAAAAACAPwAAAIAK1yM9o3A9PpDC9bwAAAAAAACAPwAAAIBcj0I/o3A9Pj0KV74AAAAAAAAAAAAAgD8K1yM9o3A9Pj0KV74AAAAAAAAAAAAAgD9cj0I/cD2KPj0KV74AAAAAAAAAAAAAgD8K1yM9cD2KPj0KV74AAAAAAAAAAAAAgD9cj0I/CtejPT0KV74AAAAAAAAAAAAAgD8K1yM9CtejPT0KV74AAAAAAAAAAAAAgD9cj0I/wvUoPj0KV74AAAAAAAAAAAAAgD8K1yM9wvUoPj0KV74AAAAAAAAAAAAAgD9cj0I/CtcjPT0KV74AAAAAAACAvwAAAIBcj0I/CtcjPQrXI70AAAAAAACAvwAAAIDNzEw/CtcjPT0KV74AAAAAAACAvwAAAIDNzEw/CtcjPQrXI70AAAAAAACAvwAAAIBcj0I/CtcjPQAAAIAAAAAAAACAvwAAAIBcj0I/CtcjPQAAgL4AAAAAAACAvwAAAIAK1yM9CtcjPQAAAIAAAAAAAACAvwAAAIAK1yM9CtcjPQrXI70AAAAAAACAvwAAAIAK1yM9CtcjPT0KV74AAAAAAACAvwAAAIAK1yM9CtcjPQAAgL4AAAAAAACAvwAAAIAAAAAACtcjPQrXI70AAAAAAACAvwAAAIAAAAAACtcjPT0KV74AAAAAAACAvwAAAIBcj0I/CtcjPQAAAIAAAIC/AAAAAAAAAIBcj0I/SgyCJKkT0KUAAIC/AAAAAAAAAIBcj0I/CtcjPQrXI70AAIC/AAAAAAAAAIBcj0I/SgyCJArXI70AAIC/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAAAAAAAAAAAAgL+G69E+o3A9PpDC9bwAAAAAAAAAAAAAgL8Vrsc+cD2KPpDC9bwAAAAAAAAAAAAAgL+G69E+cD2KPpDC9bwAAAAAAAAAAAAAgL9cj0I/o3A9PpDC9bwAAAAAAAAAAAAAgL8K1yM9o3A9PpDC9bwAAAAAAAAAAAAAgL9cj0I/wvUoPpDC9bwAAAAAAAAAAAAAgL+G69E+wvUoPpDC9bwAAAAAAAAAAAAAgL8Vrsc+wvUoPpDC9bwAAAAAAAAAAAAAgL8K1yM9wvUoPpDC9bwAAAAAAAAAAAAAgL8Vrsc+CtejPZDC9bwAAAAAAAAAAAAAgL+G69E+CtejPZDC9bwAAAAAAAAAAAAAgL8Vrsc+cD2KPpDC9bwAAAAAAAAAAAAAgD+G69E+o3A9PpDC9bwAAAAAAAAAAAAAgD8Vrsc+o3A9PpDC9bwAAAAAAAAAAAAAgD+G69E+cD2KPpDC9bwAAAAAAAAAAAAAgD9cj0I/o3A9PpDC9bwAAAAAAAAAAAAAgD8K1yM9o3A9PpDC9bwAAAAAAAAAAAAAgD9cj0I/wvUoPpDC9bwAAAAAAAAAAAAAgD+G69E+wvUoPpDC9bwAAAAAAAAAAAAAgD8Vrsc+wvUoPpDC9bwAAAAAAAAAAAAAgD8K1yM9wvUoPpDC9bwAAAAAAAAAAAAAgD8Vrsc+CtejPZDC9bwAAAAAAAAAAAAAgD+G69E+CtejPZDC9bwAAAAAAAAAAAAAgD8K1yM9cD2KPgAAAIAAAIA/AAAAAAAAAIAK1yM9wvUoPpDC9bwAAIA/AAAAAAAAAIAK1yM9CtejPQAAAIAAAIA/AAAAAAAAAIAK1yM9CtejPT0KV74AAIA/AAAAAAAAAIAK1yM9wvUoPj0KV74AAIA/AAAAAAAAAIAK1yM9o3A9PpDC9bwAAIA/AAAAAAAAAIAK1yM9cD2KPj0KV74AAIA/AAAAAAAAAIAK1yM9o3A9Pj0KV74AAIA/AAAAAAAAAIBcj0I/CtejPQAAAIAAAIC/AAAAAAAAAIBcj0I/o3A9PpDC9bwAAIC/AAAAAAAAAIBcj0I/cD2KPgAAAIAAAIC/AAAAAAAAAIBcj0I/cD2KPj0KV74AAIC/AAAAAAAAAIBcj0I/o3A9Pj0KV74AAIC/AAAAAAAAAIBcj0I/wvUoPpDC9bwAAIC/AAAAAAAAAIBcj0I/CtejPT0KV74AAIC/AAAAAAAAAIBcj0I/wvUoPj0KV74AAIC/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAAAAAAAAAAAAgL+G69E+o3A9Ps3MTL0AAAAAAAAAAAAAgL8Vrsc+cD2KPs3MTL0AAAAAAAAAAAAAgL+G69E+cD2KPs3MTL0AAAAAAAAAAAAAgL8Vrsc+cD2KPs3MTL0AAAAAAAAAAAAAgD+G69E+o3A9Ps3MTL0AAAAAAAAAAAAAgD8Vrsc+o3A9Ps3MTL0AAAAAAAAAAAAAgD+G69E+cD2KPs3MTL0AAAAAAAAAAAAAgD+G69E+o3A9PpDC9bwAAIA/AAAAAAAAAICG69E+cD2KPpDC9bwAAIA/AAAAAAAAAICG69E+o3A9Ps3MTL0AAIA/AAAAAAAAAICG69E+cD2KPs3MTL0AAIA/AAAAAAAAAICG69E+o3A9Ps3MTL0AAIC/AAAAAAAAAICG69E+cD2KPpDC9bwAAIC/AAAAAAAAAICG69E+o3A9PpDC9bwAAIC/AAAAAAAAAICG69E+cD2KPs3MTL0AAIC/AAAAAAAAAIAVrsc+cD2KPpDC9bwAAIC/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAIC/AAAAAAAAAIAVrsc+cD2KPs3MTL0AAIC/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAIC/AAAAAAAAAIAVrsc+cD2KPs3MTL0AAIA/AAAAAAAAAIAVrsc+o3A9PpDC9bwAAIA/AAAAAAAAAIAVrsc+cD2KPpDC9bwAAIA/AAAAAAAAAIAVrsc+o3A9Ps3MTL0AAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAAAAAAAAAAAAgL+G69E+wvUoPs3MTL0AAAAAAAAAAAAAgL8Vrsc+CtejPc3MTL0AAAAAAAAAAAAAgL8Vrsc+wvUoPs3MTL0AAAAAAAAAAAAAgL8Vrsc+CtejPc3MTL0AAAAAAAAAAAAAgD+G69E+wvUoPs3MTL0AAAAAAAAAAAAAgD+G69E+CtejPc3MTL0AAAAAAAAAAAAAgD8Vrsc+wvUoPs3MTL0AAAAAAAAAAAAAgD8Vrsc+wvUoPpDC9bwAAIC/AAAAAAAAAIAVrsc+CtejPZDC9bwAAIC/AAAAAAAAAIAVrsc+wvUoPs3MTL0AAIC/AAAAAAAAAIAVrsc+CtejPc3MTL0AAIC/AAAAAAAAAIAVrsc+wvUoPs3MTL0AAIA/AAAAAAAAAIAVrsc+CtejPZDC9bwAAIA/AAAAAAAAAIAVrsc+wvUoPpDC9bwAAIA/AAAAAAAAAIAVrsc+CtejPc3MTL0AAIA/AAAAAAAAAICG69E+CtejPZDC9bwAAIA/AAAAAAAAAICG69E+wvUoPpDC9bwAAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAIA/AAAAAAAAAICG69E+wvUoPs3MTL0AAIA/AAAAAAAAAICG69E+CtejPc3MTL0AAIC/AAAAAAAAAICG69E+wvUoPpDC9bwAAIC/AAAAAAAAAICG69E+CtejPZDC9bwAAIC/AAAAAAAAAICG69E+wvUoPs3MTL0AAIC/AAAAAAAAAIACAAAAAQAAAAAAAAABAAAAAgAAAAMAAAAGAAAABQAAAAQAAAAFAAAABgAAAAcAAAAKAAAACQAAAAgAAAAJAAAACgAAAAsAAAAOAAAADQAAAAwAAAANAAAADgAAAA8AAAASAAAAEQAAABAAAAARAAAAEgAAABMAAAAWAAAAFQAAABQAAAAVAAAAFgAAABcAAAAXAAAAFgAAABgAAAAYAAAAFgAAABkAAAAaAAAAFQAAABcAAAAVAAAAGgAAABsAAAAbAAAAGgAAABkAAAAbAAAAGQAAABYAAAAeAAAAHQAAABwAAAAdAAAAHgAAAB8AAAAdAAAAHwAAACAAAAAgAAAAHwAAACEAAAAiAAAAHAAAAB0AAAAcAAAAIgAAACMAAAAjAAAAIgAAACEAAAAjAAAAIQAAAB8AAAAmAAAAJQAAACQAAAAlAAAAJgAAACcAAAAqAAAAKQAAACgAAAApAAAAKgAAACsAAAAuAAAALQAAACwAAAAtAAAALgAAAC8AAAAyAAAAMQAAADAAAAAxAAAAMgAAADMAAAA2AAAANQAAADQAAAA1AAAANgAAADcAAAA6AAAAOQAAADgAAAA5AAAAOgAAADsAAAA+AAAAPQAAADwAAAA9AAAAPgAAAD8AAABCAAAAQQAAAEAAAABBAAAAQgAAAEMAAABDAAAAQgAAAEQAAABEAAAAQgAAAEUAAABFAAAAQgAAAEYAAABHAAAAQQAAAEMAAABKAAAASQAAAEgAAABJAAAASgAAAEsAAABLAAAASgAAAEwAAABNAAAATAAAAEoAAABOAAAATAAAAE0AAABMAAAATgAAAE8AAABSAAAAUQAAAFAAAABTAAAAUAAAAFEAAABQAAAAUwAAAFQAAABTAAAAUQAAAFUAAABTAAAAVQAAAFYAAABTAAAAVgAAAFcAAABaAAAAWQAAAFgAAABZAAAAWgAAAFsAAABbAAAAWgAAAFwAAABbAAAAXAAAAF0AAABcAAAAWgAAAF4AAABeAAAAWgAAAF8AAABgAAAAXQAAAFwAAABhAAAAXQAAAGAAAABhAAAAYAAAAF8AAABhAAAAXwAAAFoAAABiAAAAXQAAAGEAAABdAAAAYgAAAGMAAABmAAAAZQAAAGQAAABlAAAAZgAAAGcAAABnAAAAZgAAAGgAAABoAAAAZgAAAGkAAABpAAAAZgAAAGoAAABrAAAAZQAAAGcAAABuAAAAbQAAAGwAAABvAAAAbQAAAG4AAABvAAAAcAAAAG0AAABxAAAAcAAAAG8AAABxAAAAcgAAAHAAAAByAAAAcQAAAHMAAAB2AAAAdQAAAHQAAAB1AAAAdgAAAHcAAAB6AAAAeQAAAHgAAAB5AAAAegAAAHsAAAB+AAAAfQAAAHwAAAB9AAAAfgAAAH8AAACAAAAAfAAAAH0AAACAAAAAgQAAAHwAAACCAAAAgQAAAIAAAACDAAAAgQAAAIIAAACEAAAAgQAAAIMAAACBAAAAhAAAAIUAAACGAAAAhAAAAIMAAACEAAAAhgAAAIcAAACKAAAAiQAAAIgAAACJAAAAigAAAIsAAACOAAAAjQAAAIwAAACNAAAAjgAAAI8AAACQAAAAjAAAAI0AAACQAAAAkQAAAIwAAACSAAAAkQAAAJAAAACTAAAAkQAAAJIAAACUAAAAkQAAAJMAAACRAAAAlAAAAJUAAACTAAAAlgAAAJQAAACWAAAAkwAAAJcAAACaAAAAmQAAAJgAAACbAAAAmAAAAJkAAACZAAAAmgAAAJwAAACaAAAAnQAAAJwAAACcAAAAnQAAAJ4AAACeAAAAnQAAAJ8AAACfAAAAnQAAAKAAAAChAAAAoAAAAJ0AAACgAAAAogAAAJ8AAACjAAAAnwAAAKIAAACmAAAApQAAAKQAAAClAAAApgAAAKcAAAClAAAApwAAAKgAAACpAAAApAAAAKUAAACkAAAAqQAAAKoAAACqAAAAqQAAAKsAAACuAAAArQAAAKwAAACtAAAArgAAAK8AAACtAAAArwAAALAAAACxAAAArAAAAK0AAACsAAAAsQAAALIAAACyAAAAsQAAALMAAAC2AAAAtQAAALQAAAC1AAAAtgAAALcAAAC6AAAAuQAAALgAAAC7AAAAuAAAALkAAAC+AAAAvQAAALwAAAC9AAAAvgAAAL8AAADCAAAAwQAAAMAAAADDAAAAwAAAAMEAAADGAAAAxQAAAMQAAADFAAAAxgAAAMcAAADKAAAAyQAAAMgAAADLAAAAyAAAAMkAAADOAAAAzQAAAMwAAADNAAAAzgAAAM8AAADSAAAA0QAAANAAAADTAAAA0AAAANEAAADWAAAA1QAAANQAAADVAAAA1gAAANcAAADaAAAA2QAAANgAAADbAAAA2AAAANkAAADeAAAA3QAAANwAAADdAAAA3gAAAN8AAADiAAAA4QAAAOAAAADjAAAA4AAAAOEAAAA="}});function yv(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function mu(){let i=new _c;return Promise.all(Object.entries(Pp).map(([e,t])=>new Promise(n=>{try{i.parse(yv(t),"",s=>{s.scene.traverse(r=>{if(r.isMesh){r.castShadow=r.receiveShadow=!0;for(let o of[].concat(r.material))o.map&&(o.map.colorSpace=ft),o.roughness=Math.max(o.roughness??1,.55),o.metalness=Math.min(o.metalness??0,.2)}}),Dp.set(e,s),n()},s=>{console.warn("model",e,s),n()})}catch(s){console.warn("model",e,s),n()}})))}function Au(i,{w:e,h:t,d:n,stretch:s=!1,turn:r=0,colors:o}={}){let a=Dp.get(i),c=new Ze;if(c.name=i,!a)return c;let l=a.animations.length?Rp(a.scene):a.scene.clone(!0);l.rotation.y=r,l.updateMatrixWorld(!0);let h=new dt().setFromObject(l),u=h.getSize(new T),f,p,g;if(s){let m=t?t/u.y:e?e/u.x:n/u.z;f=e?e/u.x:m,p=t?t/u.y:m,g=n?n/u.z:m}else f=p=g=t?t/u.y:e?e/u.x:n?n/u.z:1;let x=new Ze;return x.add(l),x.scale.set(f,p,g),x.position.set(-(h.min.x+u.x/2)*f,-h.min.y*p,-(h.min.z+u.z/2)*g),c.add(x),o&&_v(c,o),c.userData.size=new T(u.x*f,u.y*p,u.z*g),c}function _v(i,e){let t=new Map;i.traverse(n=>{n.isMesh&&(n.material=[].concat(n.material).map(s=>{if(!(s.name in e))return s;if(!t.has(s)){let r=s.clone();r.color.set(e[s.name]),t.set(s,r)}return t.get(s)}),n.material.length===1&&(n.material=n.material[0]))})}function Np(i,e,t,n,s=0,r=0){return e.position.set(t,r,n),e.rotation.y=s,i.add(e),e}var Dp,gu=ht(()=>{Cn();Tp();Ip();Lp();Dp=new Map});function vn(i=1){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Up(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Zn(i,e=[1,1]){let t=new as(i);return t.colorSpace=ft,t.wrapS=t.wrapT=ii,t.repeat.set(...e),t.anisotropy=8,t}function xu(){let[i,e]=Up(128,128);e.font='bold 110px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=12,e.strokeStyle="#1d3557",e.strokeText("Z",64,68),e.fillStyle="#fff3b0",e.fillText("Z",64,68);let t=Zn(i);return t.wrapS=t.wrapT=nn,t}var Mc,bc=ht(()=>{Cn();Mc=class{constructor(){[this.c,this.g]=Up(256,192),this.texture=Zn(this.c),this.texture.wrapS=this.texture.wrapT=nn,this.t=0,this.flash=0}update(e){let t=this.g,n=this.t+=e,s=256,r=192;t.fillStyle="#10163a",t.fillRect(0,0,s,r),t.fillStyle="#fff";for(let l=0;l<30;l++)t.fillRect((l*53-n*8)%s+(l*53-n*8<0?s:0),l*37%110,2,2);t.fillStyle="#2f855a",t.fillRect(0,150,s,42),t.fillStyle="#8b5a2b";for(let l=-(n*60%32);l<s;l+=32)t.fillRect(l,150,30,6);let o=s-n*60%(s+40);t.fillStyle="#d69e2e",t.fillRect(o,126,24,24),t.fillStyle="#744210",t.fillRect(o+9,133,6,8);let a=o-70,c=a>0&&a<70?Math.sin(a/70*Math.PI)*52:0;t.fillStyle="#e53e3e",t.fillRect(64,122-c,20,10),t.fillStyle="#f6c89f",t.fillRect(66,132-c,16,8),t.fillStyle="#3182ce",t.fillRect(64,140-c,20,10),t.fillStyle="#f6e05e",t.font='bold 14px "Courier New", monospace',t.fillText(`SCORE ${String(Math.floor(n*10)*10).padStart(6,"0")}`,8,18),this.flash>0&&(this.flash-=e,t.fillStyle=`rgba(255,255,255,${Math.min(1,this.flash*2)})`,t.fillRect(0,0,s,r),t.fillStyle="#e53e3e",t.font='bold 48px "Courier New", monospace',t.textAlign="center",t.fillText("HI!",s/2,r/2+16),t.textAlign="left"),t.fillStyle="rgba(0,0,0,0.18)";for(let l=0;l<r;l+=3)t.fillRect(0,l,s,1);this.texture.needsUpdate=!0}}});var Ec,Op=ht(()=>{Ec={"Post 1":{x:-3.2,z:.4,ry:0,gone:!0},"Post 2":{x:.293,z:.4,ry:0},"Post 3":{x:2,z:.4,ry:0,gone:!0},"Window (west)":{x:3.309,z:-3.59,ry:0},"Window (over the hoop)":{x:-3.932,z:-3.566,ry:.0664},Clock:{x:.687,z:-3.57,ry:0},"Play mat":{x:4.395,z:-.755,ry:-1.5782},Couch:{x:1.992,z:-2.42,ry:1.5708},Armchair:{x:2.768,z:-.45,ry:2.5597},Ottoman:{x:3.319,z:-1.158,ry:-.6523},"Basketball hoop":{x:-4.93,z:-3.29,ry:.7854},"Toy house":{x:-4.914,z:-1.7,ry:1.5708},"Red ride-on toy":{x:-3.166,z:-2.017,ry:.6},"Kids' table":{x:4.88,z:2.128,ry:-1.5708},"Braided rug":{x:4.239,z:3.573,ry:.2472},"Totes + pillows":{x:2.1,z:4.64,ry:0},"Bean bag":{x:3.122,z:4.61,ry:0},Fridge:{x:1.2,z:4.36,ry:0},"Black shelves":{x:.554,z:4.434,ry:1.588},"Post 4":{x:-.661,z:3.857,ry:0},"Dining table + chairs":{x:-1.494,z:1.047,ry:-1.5738},"Water cooler":{x:-3.313,z:3.72,ry:0},"Laundry sink":{x:-8.371,z:2.083,ry:4.7146},"Paper towel rack":{x:-8.4,z:2.1,ry:1.5708,gone:!0},Furnace:{x:-5.993,z:2.245,ry:0}}});function Vi(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Fp(){let[i,e]=Vi(1024,512),t=vn(4),n=256,s=128;e.fillStyle="#efeadf",e.fillRect(0,0,1024,512);for(let r=0;r<4;r++)for(let o=-1;o<5;o++){let a=o*n+r%2*n/2,c=r*s,l=236+Math.floor(t()*10);e.fillStyle=`rgb(${l},${l-4},${l-14})`,e.fillRect(a+4,c+4,n-8,s-8);for(let h=0;h<60;h++)e.fillStyle=`rgba(150,140,120,${t()*.12})`,e.fillRect(a+t()*n,c+t()*s,3,3)}e.strokeStyle="rgba(160,150,130,0.55)",e.lineWidth=6;for(let r=0;r<=4;r++)e.beginPath(),e.moveTo(0,r*s),e.lineTo(1024,r*s),e.stroke();for(let r=0;r<4;r++)for(let o=0;o<=4;o++){let a=o*n+r%2*n/2;e.beginPath(),e.moveTo(a,r*s),e.lineTo(a,r*s+s),e.stroke()}return Zn(i)}function zp(){let[i,e]=Vi(512,512),t=256;e.fillStyle="#ece6da",e.fillRect(0,0,512,512),e.strokeStyle="rgba(170,160,145,0.28)",e.lineWidth=2;for(let n=0;n<2;n++)for(let s=0;s<2;s++){let r=n*t,o=s*t;e.beginPath();for(let a=0;a<=8;a++){let c=r+a*t/8;e.lineTo(c,o+(a%2?4:-4))}e.stroke(),e.beginPath();for(let a=0;a<=8;a++){let c=o+a*t/8;e.lineTo(r+(a%2?4:-4),c)}e.stroke()}for(let n=0,s=vn(8);n<900;n++)e.fillStyle=`rgba(120,110,95,${s()*.06})`,e.fillRect(s()*512,s()*512,2,2);return Zn(i)}function Bp(){let[i,e]=Vi(512,512),t=256;e.fillStyle="#5a4a3a",e.beginPath(),e.arc(t,t,t,0,7),e.fill(),e.fillStyle="#e9e1cf",e.beginPath(),e.arc(t,t,t-16,0,7),e.fill(),e.fillStyle="#2c2a2a",e.beginPath(),e.arc(t,t,110,0,7),e.fill(),e.fillStyle="#e9e1cf",e.font="bold 34px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText("OLD TOWN",t,t-12),e.font="20px Georgia, serif",e.fillText("CLOCK CO.",t,t+24);let n=["#9a4b3a","#4d6a7a","#a88b4a","#6b7a5a"];for(let s=1;s<=12;s++){let r=s/12*Math.PI*2-Math.PI/2,o=t+Math.cos(r)*180,a=t+Math.sin(r)*180;e.fillStyle=n[s%4],e.beginPath(),e.arc(o,a,40,0,7),e.fill(),e.fillStyle="#efe7d6",e.beginPath(),e.arc(o,a,31,0,7),e.fill(),e.fillStyle="#2c2a2a",e.font="bold 36px Georgia, serif",e.fillText(String(s),o,a+2)}return Br(Zn(i))}function kp(){let[i,e]=Vi(1024,683),t=1024,n=683,s=vn(5);e.fillStyle="#7cc46a",e.fillRect(0,0,t,n),e.fillStyle="#bfe6f7",e.fillRect(70,70,t-140,n*.55),["#e53e3e","#f6ad55","#f6e05e","#68d391","#4299e1","#805ad5"].forEach((l,h)=>{e.strokeStyle=l,e.lineWidth=26,e.beginPath(),e.arc(t*.55,n*.62,300-h*26,Math.PI,0),e.stroke()});for(let[l,h]of[[300,180],[760,150],[520,120]]){e.fillStyle="#fff";for(let u of[0,30,60])e.beginPath(),e.arc(l+u,h,26,0,7),e.fill()}for(let l=0;l<30;l++)e.fillStyle=["#f687b3","#f6e05e","#fff"][l%3],e.beginPath(),e.arc(80+s()*(t-160),n*.7+s()*120,9,0,7),e.fill();let r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",o=["#e53e3e","#dd6b20","#d69e2e","#38a169","#3182ce","#805ad5","#d53f8c"];e.font='bold 50px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle";let a=(l,h,u)=>{e.fillStyle=o[u%7],e.fillRect(l,h,66,66),e.fillStyle="#fff",e.fillText(r[u%26],l+33,h+36)},c=0;for(let l=0;l<t;l+=68)a(l,0,c++);for(let l=68;l<n-68;l+=68)a(t-68,l,c++);for(let l=t-68;l>=0;l-=68)a(l,n-68,c++);for(let l=n-136;l>=68;l-=68)a(0,l,c++);return Br(Zn(i))}function Hp(i){let[e,t]=Vi(320,400),n=t.createLinearGradient(0,0,0,400);n.addColorStop(0,i?"#d8cfe0":"#d9d2c4"),n.addColorStop(1,i?"#b8aec8":"#a89a86"),t.fillStyle=n,t.fillRect(0,0,320,400),t.fillStyle=i?"#f3d9cf":"#f0d5c2",t.beginPath(),t.ellipse(160,215,105,120,0,0,7),t.fill(),t.fillStyle="#e8b7a8";for(let s of[95,225])t.beginPath(),t.arc(s,250,22,0,7),t.fill();t.strokeStyle="#5a4034",t.lineWidth=5,t.lineCap="round";for(let s of[118,202])t.beginPath(),t.arc(s,205,16,.2,Math.PI-.2),t.stroke();return t.beginPath(),t.arc(160,285,14,.3,Math.PI-.3),t.stroke(),i?(t.fillStyle="#9b7fc8",t.fillRect(55,110,210,34),t.beginPath(),t.ellipse(115,95,70,45,-.4,0,7),t.fill(),t.beginPath(),t.ellipse(205,95,70,45,.4,0,7),t.fill(),t.fillStyle="#7d5fb0",t.beginPath(),t.arc(160,108,26,0,7),t.fill()):(t.fillStyle="#6b5442",t.beginPath(),t.ellipse(160,110,95,30,0,Math.PI,0),t.fill()),t.fillStyle="#f4f1ea",t.fillRect(40,340,240,60),Br(Zn(e))}function Gp(){let[i,e]=Vi(256,512),t=vn(12);e.fillStyle="#f2f1ec",e.fillRect(0,0,256,512);for(let n=0;n<9;n++)e.fillStyle=["#fff","#fefcbf","#e9d8fd"][n%3],e.save(),e.translate(30+t()*190,30+t()*170),e.rotate((t()-.5)*.4),e.fillRect(-28,-34,56,68),e.strokeStyle=["#e53e3e","#3182ce","#38a169"][n%3],e.lineWidth=3,e.beginPath(),e.arc(0,-4,14,0,7),e.stroke(),e.restore();for(let n=0;n<14;n++){let s=30+t()*200,r=40+t()*300,o=["#e53e3e","#f6ad55","#38a169","#805ad5","#d53f8c","#3182ce"][n%6];e.fillStyle=o;for(let a=0;a<6;a++)e.beginPath(),e.arc(s+Math.cos(a)*11,r+Math.sin(a)*11,8,0,7),e.fill();e.fillStyle="#f6e05e",e.beginPath(),e.arc(s,r,7,0,7),e.fill()}return e.fillStyle="#c9c7c0",e.fillRect(226,120,10,160),Br(Zn(i))}function Vp(){let[i,e]=Vi(256,256);e.fillStyle="#f7f5f0",e.fillRect(0,0,256,256),e.fillStyle="rgba(110,110,120,0.35)";for(let t=0;t<256;t+=32)e.fillRect(0,t,256,3);return Zn(i)}function Wp(){let[i,e]=Vi(256,256),t=vn(30);e.fillStyle="#1b1f2e",e.fillRect(0,0,256,256);for(let n=10;n<250;n+=9){let s=8+Math.floor(t()*4)*10;for(;s<230&&t()>.15;){let r=10+t()*40;e.fillStyle=["#c792ea","#82aaff","#c3e88d","#f78c6c","#d6deeb"][Math.floor(t()*5)],e.fillRect(s,n,r,4),s+=r+6}}return Br(Zn(i))}function Xp(i){let[e,t]=Vi(512,128);return t.fillStyle="rgba(29,53,87,0.85)",t.beginPath(),t.roundRect(4,4,504,120,28),t.fill(),t.fillStyle="#fff3b0",t.font="bold 84px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,256,68),Br(Zn(e))}var Br,qp=ht(()=>{Cn();bc();Br=i=>(i.wrapS=i.wrapT=nn,i)});function yu(i){var we;let e=[],t=(R,P={})=>new Rn({color:R,roughness:.85,metalness:0,...P}),n=(R,P=2)=>new Rn({color:R,emissive:R,emissiveIntensity:P});function s(R,P,O=0,K=0,G=0,le=i,{cast:se=!0,receive:pe=!0}={}){let Se=new mt(R,P);return Se.position.set(O,K,G),Se.castShadow=se,Se.receiveShadow=pe,le.add(Se),Se}let r=(R,P,O,K,G,le,se,pe=i,Se)=>s(new Tn(R,P,O),K,G,le,se,pe,Se),o=(R,P,O,K,G,le,se,pe=i,Se)=>r(R,P,O,K,G,le+P/2,se,pe,Se),a=vn(21),c=[],l=[],h=(R,P,O,K,G)=>l.push({x0:R,x1:P,z0:O,z1:K,...G?{under:G}:{}});function u(R,{fly:P=!0,drive:O=!0,under:K}={}){R.updateMatrixWorld(!0);let G=new dt().setFromObject(R);return G.isEmpty()||(P&&c.push({x0:G.min.x,x1:G.max.x,z0:G.min.z,z1:G.max.z,y1:G.max.y,...K?{under:K}:{}}),O&&h(G.min.x,G.max.x,G.min.z,G.max.z,K),O&&K&&f(R)),R}function f(R){R.updateMatrixWorld(!0),R.traverse(P=>{if(!P.isMesh)return;let O=new dt().setFromObject(P);O.min.y<.02&&h(O.min.x,O.max.x,O.min.z,O.max.z)})}let p=[],g=new Set,x=(R,P)=>(p.push({id:p.length+1,name:R,at:P}),g.add(P),P);function m(R,P){let O=i.children.slice(P).filter(se=>!g.has(se)),K=new dt;for(let se of O)K.expandByObject(se);let G=new Ze,le=K.isEmpty()?new T:K.getCenter(new T);G.position.set(le.x,0,le.z),i.add(G),G.updateMatrixWorld(!0);for(let se of O)G.attach(se);return x(R,G)}let d=(R,P,O=0,K=0)=>{let G=new Ze;return G.position.set(R,K,P),G.rotation.y=O,i.add(G),G},y=Xe-ot,A=Ht-kt,_=(kt+Ht)/2,S=lt+kr,E=zp();E.repeat.set(y/1.2,A/1.2),s(new Bt(y,A).rotateX(-Math.PI/2),t(16777215,{map:E,roughness:.95}),0,0,_,i,{cast:!1});let I=Fp(),U=R=>{let P=I.clone();return P.repeat.set(R/1.6,S/.8),P.needsUpdate=!0,t(16777215,{map:P,roughness:.9,side:Sn})};function b(R,P,O,K){let G=Math.hypot(O-R,K-P),le=s(new Bt(G,S),U(G),(R+O)/2,S/2,(P+K)/2,i,{cast:!1});return le.rotation.y=Math.atan2(-(K-P),O-R),le}b(ot,kt,Xe,kt),b(Xe,kt,Xe,Ht),b(ot,Gs.z0,ot,kt),b(ot,Ht,ot,Gs.z1),b(Xe,Ht,St,Ht),b(St,Ht,St,ps.z0),b(St,ps.z0,ot,ps.z0),h(ot-.05,ot+.05,kt,Gs.z0),h(ot-.05,ot+.05,Gs.z1,Ht),h(St,ot+.05,kt,ps.z0);let C=t(10514495,{roughness:.8}),k=t(9068342,{roughness:.9});for(let R=St+.2;R<Xe;R+=.4)r(.045,kr,A-.02,C,R,lt+kr/2,_,i,{cast:!1});s(new Bt(Xe-St,A).rotateX(Math.PI/2),k,(Xe+St)/2,S+.004,_,i,{cast:!1});let F=t(15921386,{roughness:.6}),Q=t(6120038,{roughness:.5,metalness:.3});r(Xe-St-.02,lt-wt-.004,.2,F,(Xe+St)/2,(wt+lt-.004)/2,Rt,i,{cast:!1}),r(Xe-St-.02,.02,.22,t(3815994),(Xe+St)/2,wt+.006,Rt,i,{cast:!1});for(let[R,P]of Yp.entries()){let O=i.children.length;s(new Je(.05,.05,wt,20),Q,P,wt/2,Rt),r(.16,.012,.16,Q,P,.006,Rt),r(.16,.012,.16,Q,P,wt-.012,Rt),h(P-.06,P+.06,Rt-.06,Rt+.06),m(`Post ${R+1}`,O)}let L=t(12896460,{roughness:.35,metalness:.6});s(new Je(.09,.09,7.5,18).rotateZ(Math.PI/2),L,-.8,lt-.1,Rt-.5,i,{cast:!1}),o(.4,.14,.3,L,-1.7,lt-.16,Rt-.75,i,{cast:!1}),o(.36,.02,.26,t(16053488),-1.7,lt-.17,Rt-.75,i,{cast:!1}),s(new Je(.035,.035,A,12).rotateX(Math.PI/2),F,3.6,lt-.05,_,i,{cast:!1});let z=n(16054527,1.6),$=t(15921386,{roughness:.6});function ie(R,P,O){let K=d(R,P,O);s(new Bt(.78,.36),z,0,2.05,.02,K,{cast:!1,receive:!1});for(let[le,se,pe,Se]of[[.88,.05,0,2.25],[.88,.05,0,1.85],[.05,.4,-.42,2.05],[.05,.4,.42,2.05]])r(le,se,.06,$,pe,Se,.03,K,{cast:!1});r(.9,.03,.18,$,0,1.83,.09,K,{cast:!1});let G=new ri(14674687,2.5,5,1.6);return G.position.set(0,1.9,.5),K.add(G),e.push(G),K}x("Window (west)",ie(.8,kt+.01,0)),x("Window (over the hoop)",ie(ot+.01,-2.9,Math.PI/2)),x("Window (over the washer)",ie(St+.01,3.4,Math.PI/2));let te=new fc(16774370,10128504,1.3);i.add(te);let ee=new Or(16773340,1.6);ee.position.set(1.5,8,2.5),ee.target.position.set(0,0,0),i.add(ee,ee.target),Object.assign(ee.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:16}),ee.castShadow=!0,ee.shadow.mapSize.set(1024,1024);let he=t(16052712,{roughness:.4}),fe=n(16773584,3);for(let[R,P]of[[-1.2,-1.6],[1.8,-1.2],[-2.2,1.3],[2.6,2.6],[-4,-1],[1.4,4.2]]){s(new Je(.05,.06,.06,16),he,R,lt-.03,P,i,{cast:!1}),s(new bt(.045,14,10),fe,R,lt-.11,P,i,{cast:!1});let O=new ri(16767392,4,6.5,1.5);O.position.set(R,lt-.2,P),i.add(O)}for(let[R,P]of[[-6.9,1.2],[-6.9,3.7]]){o(1.2,.06,.18,t(14211282),R,lt-.08,P,i,{cast:!1}),o(1.15,.025,.12,n(16317439,2.5),R,lt-.1,P,i,{cast:!1});let O=new ri(15922943,3,6,1.4);O.position.set(R,lt-.25,P),i.add(O),e.push(O)}let Me=x("Clock",d(-1,kt+.03));s(new Je(.33,.33,.04,40).rotateX(Math.PI/2),[t(5917242),t(16777215,{map:Bp(),roughness:.7}),t(5917242)],0,1.68,0,Me,{cast:!1});let Z=(R,P)=>{let O=new Ze;return O.position.set(0,1.68,.03),Me.add(O),r(P,R,.008,t(1710618),0,R/2-.03,0,O,{cast:!1}),O},ue=Z(.16,.022),be=Z(.24,.014),Re=[4.5,-2.95],Ie=-Math.PI/4,We=i.children.length;u(Np(i,Au("tvCabinet",{w:1.35,h:.62,d:.55,stretch:!0,colors:{wood:5911584}}),...Re,Ie));let Ge=new Mc,Ue=d(...Re,Ie,.62);r(1.32,.78,.05,t(1118481,{roughness:.4}),0,.5,0,Ue),s(new Bt(1.26,.72),new Yt({map:Ge.texture,toneMapped:!1}),0,.5,.027,Ue,{cast:!1}),r(.3,.03,.2,t(1118481),0,0,0,Ue),r(.06,.12,.04,t(1118481),0,.03,-.02,Ue),r(.4,.02,.12,t(15790320),.2,0,.18,Ue),u(Ue);let je=new ri(11570431,2.5,4,1.8);je.position.set(3.9,1.1,-2.35),i.add(je),e.push(je),m("TV + cabinet",We),x("Play mat",s(new Bt(2.3,1.55).rotateX(-Math.PI/2),t(16777215,{map:kp(),roughness:1}),2.6,.006,-1.65,i,{cast:!1}));let H=(R,P,O,K)=>{let G=x(R?"Portrait (purple bow)":"Portrait (boy)",d(P,O,K));r(.52,.64,.025,t(16777215,{roughness:.9}),0,1.15,.0125,G,{cast:!1}),s(new Bt(.5,.62),t(16777215,{map:Hp(R),roughness:.8}),0,1.47,.027,G,{cast:!1})};H(!0,ot+.01,-1.3,Math.PI/2),H(!1,Xe-.01,-2,-Math.PI/2);function j(R,P,O,K,G){let le=d(P,O,K),se=t(G,{roughness:1}),pe=t(new De(G).offsetHSL(0,0,.03),{roughness:1}),Se=R*.66+.4,Pe=.95,Ce=(D,me,xe,ke,Be,At,gt)=>s(new oi(D,me,xe,3,Math.min(.06,me/2-.001)),ke,Be,At+me/2,gt,le);Ce(Se-.3,.3,Pe-.1,se,0,.1,.02),Ce(Se-.2,.5,.24,se,0,.3,-Pe/2+.12);for(let D of[-1,1])Ce(.22,.5,Pe,se,D*(Se/2-.11),.1,0),s(new Je(.13,.13,Pe,16).rotateX(Math.PI/2),se,D*(Se/2-.1),.6,0,le);let de=(Se-.44)/R;for(let D=0;D<R;D++){let me=-Se/2+.22+de*(D+.5);Ce(de-.02,.16,Pe-.3,pe,me,.4,.1);let xe=Ce(de-.03,.42,.18,pe,me,.52,-Pe/2+.3);xe.rotation.x=-.12}for(let D of[-1,1])for(let me of[-1,1])s(new Je(.03,.025,.1,10),t(3023904),D*(Se/2-.12),.05,me*(Pe/2-.12),le);return u(le,{under:.1})}x("Couch",j(3,-1.9,-2.42,Math.PI/2,8360358)),x("Armchair",j(1,.6,-.45,Math.PI,9083824));let J=x("Ottoman",d(.6,-1.48));s(new oi(.82,.3,.6,3,.06),t(9083824,{roughness:1}),0,.27,0,J);for(let[R,P]of[[-.35,-.24],[.35,-.24],[-.35,.24],[.35,.24]])s(new Je(.025,.02,.12,10),t(3023904),R,.06,P,J);o(.12,.06,.07,t(3711337,{roughness:.4}),.15,.42,-.02,J),u(J,{under:.12});{let R=x("Basketball hoop",d(-4.75,-3.15,Math.PI/4));s(new Je(.18,.2,.08,20),t(1710618),0,.04,0,R),s(new Je(.03,.03,1.1,12),t(2845872,{roughness:.4}),0,.6,0,R),o(.5,.36,.03,t(16053488,{roughness:.5}),0,1.05,-.02,R),s(new sn(.11,.012,8,24).rotateX(Math.PI/2),t(15023678),0,1.12,.13,R),u(R)}{let R=x("Toy house",d(-4.6,-1.7,Math.PI/2));o(.6,.35,.42,t(16179294,{roughness:.6}),0,0,0,R),s(new Je(.01,.38,.22,4,1).rotateY(Math.PI/4),t(3244750,{roughness:.5}),0,.46,0,R).scale.set(1.15,1,.85),o(.12,.2,.02,t(15023678),0,0,.215,R),o(.12,.1,.02,t(10475775),.18,.15,.215,R),u(R)}{let R=x("Toy tote",d(-3.95,-3.2));o(.6,.32,.42,t(14674158,{transparent:!0,opacity:.55,roughness:.2}),0,0,0,R);for(let P=0;P<6;P++)o(.1+a()*.1,.1,.1,t([15023678,3711337,3244750,16179294][P%4]),(a()-.5)*.4,.02,(a()-.5)*.25,R);u(R)}{let R=x("Red ride-on toy",d(-3.6,-2.35,.6));o(.5,.2,.28,t(15023678,{roughness:.4}),0,.06,0,R),o(.18,.14,.22,t(15023678,{roughness:.4}),-.12,.26,0,R);for(let[P,O]of[[-.18,-.15],[.18,-.15],[-.18,.15],[.18,.15]])s(new Je(.06,.06,.04,14).rotateX(Math.PI/2),t(1710618),P,.06,O,R);u(R)}{let R=x("Speaker cabinet",d(-2.75,-3.33));o(.42,.62,.4,t(2762018,{roughness:.6}),0,0,0,R),s(new Je(.11,.11,.02,20).rotateX(Math.PI/2),t(7829367,{roughness:.4,metalness:.4}),0,.36,.205,R),o(.26,.08,.14,t(16173326,{roughness:.5}),0,.62,0,R),u(R)}{let R=x("Kids' table",d(4.72,1.1,-Math.PI/2)),P=t(7028514,{roughness:.6});o(.75,.03,.55,P,0,.5,0,R);for(let[O,K]of[[-.33,-.23],[.33,-.23],[-.33,.23],[.33,.23]])o(.04,.5,.04,P,O,0,K,R);for(let O of[-1,1]){let K=d(0,0);R.add(K),K.position.set(O*.58,0,0),K.rotation.y=O*Math.PI/2,o(.28,.03,.28,P,0,.3,0,K);for(let[G,le]of[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]])o(.03,.3,.03,P,G,0,le,K);o(.28,.3,.03,P,0,.33,.13,K)}u(R,{under:.3})}{let R=x("Standing desk",d(St+13.05,Ht-.38,Math.PI));o(1.55,.035,.72,t(14207400,{roughness:.7}),0,.93,0,R);for(let K of[-.7,.7])o(.06,.93,.06,t(1710618),K,0,0,R),o(.06,.03,.6,t(1710618),K,0,0,R);o(.55,.6,.55,t(1842206,{roughness:.5}),.4,0,.05,R),o(.5,.3,.3,t(12922954,{roughness:.4}),-.3,0,.12,R);let P=new Yt({map:Wp(),toneMapped:!1}),O=(K,G,le)=>{let se=d(0,0,0);R.add(se),se.position.set(le,.965,-.2),o(K,G,.03,t(1118481,{roughness:.4}),0,.12,0,se),s(new Bt(K-.03,G-.03),P,0,.12+G/2,.016,se,{cast:!1}),o(.04,.12,.04,t(1118481),0,0,0,se)};O(.62,.38,-.2),O(.3,.52,.35),o(.32,.015,.22,t(6974064,{metalness:.5,roughness:.4}),-.25,.965,.12,R),s(new Je(.08,.1,.04,16),t(1710618),-.6,.985,.15,R),s(new Je(.018,.022,.22,10),t(1710618),-.6,1.1,.15,R),u(R,{under:.93})}{let R=x("Braided rug",s(new ks(.6,40).rotateX(-Math.PI/2),t(8028057,{roughness:1}),3.8,.005,3.9,i,{cast:!1}));R.scale.set(1.25,1,.85);for(let[P,O]of[[.45,10127994],[.3,5922682],[.15,11575440]])s(new ac(P-.06,P,40).rotateX(-Math.PI/2),t(O,{roughness:1}),0,.001,0,R,{cast:!1})}{let R=x("Totes + pillows",d(2.3,4.68));o(.75,.42,.55,t(2763306,{roughness:.5}),0,0,0,R),o(.75,.04,.57,t(16179294),0,.42,0,R),o(.72,.36,.52,t(10474928,{roughness:.4}),0,.46,0,R),o(.72,.36,.52,t(12106944,{roughness:.4}),0,.82,0,R);for(let O=0;O<3;O++)s(new oi(.62,.1,.42,3,.04),t(16448250,{roughness:1}),0,1.24+O*.09,(a()-.5)*.05,R);u(R);let P=s(new bt(.32,20,14),t(16052974,{roughness:1}),3,.22,4.55);P.scale.set(1,.7,1),x("Bean bag",u(P))}{let R=x("Fridge",d(1.2,4.62));s(new oi(.75,1.72,.7,3,.03),t(15921644,{roughness:.35}),0,.86,0,R),s(new Bt(.72,1.4),t(16777215,{map:Gp(),roughness:.4}),0,.9,-.352,R,{cast:!1}).rotation.y=Math.PI,u(R)}let ae=(R,P,O,K,G)=>{let le=d(R,P,O),se=t(1907997,{roughness:.5,metalness:.3}),pe=vn(G);for(let Se of[-K/2+.02,K/2-.02])for(let Pe of[-.2,.2])o(.025,1.8,.025,se,Se,0,Pe,le);for(let Se=0;Se<5;Se++){let Pe=.08+Se*.42;if(o(K,.025,.44,se,0,Pe,0,le),Se<4)for(let Ce=-K/2+.16;Ce<K/2-.1;Ce+=.28)pe()>.2&&o(.18+pe()*.08,.12+pe()*.18,.3,t([5231045,15023678,16179294,16777215,8411861,2829099,14510880][Math.floor(pe()*7)],{roughness:.5}),Ce,Pe+.025,0,le)}return u(le)};x("Black shelves",ae(-.2,4.75,0,.9,3)),s(new Je(.05,.05,lt,14),F,-.72,lt/2,4.92);let q=((we=Ec["Post 4"])==null?void 0:we.z)??Sc;{let R=q;r(Xe-ot-.02,lt-wt-.004,.2,F,(Xe+ot)/2,(wt+lt-.004)/2,R,i,{cast:!1}),r(Xe-ot-.02,.02,.22,t(3815994),(Xe+ot)/2,wt+.006,R,i,{cast:!1})}x("Post 4",s(new Je(.05,.05,wt,20),Q,.75,wt/2,Sc)),h(.69,.81,Sc-.06,Sc+.06);let re=i.children.length;{let R=t(12101260,{roughness:.8}),P=t(10133155,{roughness:.7}),O=In,K=O.z1-O.z0,G=(O.z0+O.z1)/2;for(let Pe=0;Pe<O.n;Pe++){let Ce=O.x-Pe*O.run,de=Ce-O.run,D=(Pe+1)*O.rise;o(O.run,D,K,P,(de+Ce)/2,0,G),o(O.run+.01,.025,K,R,(de+Ce)/2,D-.025,G,i,{cast:!1})}let le=O.x-O.n*O.run,se=Math.atan(O.rise/O.run),pe=Math.hypot(O.n*O.run,O.n*O.rise),Se=s(new Tn(pe,.05,.05),t(9067051),(O.x+le)/2,.9+O.n*O.rise/2,O.z0-.03);Se.rotation.z=-se,o(.1,1,.1,P,O.x-.05,0,O.z0+.05),s(new Bt(.55,.95).rotateX(-Math.PI/2),t(15259848,{roughness:1}),O.x+.35,.006,G,i,{cast:!1}),h(le,O.x,O.z0,O.z1);for(let Pe=0;Pe<O.n&&(Pe+1)*O.rise<1;Pe++)c.push({x0:O.x-(Pe+1)*O.run,x1:O.x-Pe*O.run,z0:O.z0,z1:O.z1,y1:(Pe+1)*O.rise})}m("Stairs",re);let ce=i.children.length;{let R={x:-2.3,z:1.35,w:1.75,d:1,h:.76},P=t(11037490,{roughness:.6}),O=d(R.x,R.z);o(R.w,.04,R.d,P,0,R.h-.04,0,O),o(R.w+.06,.012,R.d+.06,t(16250350,{roughness:1}),0,R.h,0,O,{cast:!1});for(let G of[-.6,.6])o(.08,R.h-.04,.14,P,G,0,0,O),o(.12,.06,.8,P,G,0,0,O);o(1.2,.08,.06,P,0,.3,0,O),s(new Je(.06,.05,.16,16),t(16777215,{roughness:.4}),.2,R.h+.09,.05,O);for(let G=0;G<7;G++)s(new bt(.05,10,8),t([9417696,13163248,7246792][G%3]),.2+(a()-.5)*.16,R.h+.22+a()*.06,.05+(a()-.5)*.16,O);c.push({x0:R.x-R.w/2,x1:R.x+R.w/2,z0:R.z-R.d/2,z1:R.z+R.d/2,y1:R.h,under:R.h-.05});for(let G of[-.6,.6])h(R.x+G-.06,R.x+G+.06,R.z-.4,R.z+.4);let K=(G,le,se)=>{let pe=d(G,le,se);o(.44,.05,.44,P,0,.42,0,pe),o(.4,.03,.4,t(14209732),0,.47,0,pe);for(let[Pe,Ce]of[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]])o(.04,.42,.04,P,Pe,0,Ce,pe);for(let Pe of[-.19,.19])o(.045,.6,.045,P,Pe,.47,-.2,pe);for(let Pe=-2;Pe<=2;Pe++)o(.035,.48,.02,P,Pe*.07,.5,-.2,pe);o(.44,.06,.04,P,0,1.03,-.2,pe),pe.updateMatrixWorld(!0);let Se=new dt().setFromObject(pe);c.push({x0:Se.min.x,x1:Se.max.x,z0:Se.min.z,z1:Se.max.z,y1:.5,under:.4}),h(Se.min.x+.04,Se.max.x-.04,Se.min.z+.04,Se.max.z-.04,.4),f(pe)};K(R.x-.4,R.z-.72,0),K(R.x+.4,R.z-.72,0),K(R.x,R.z+.75,Math.PI),K(R.x+1.15,R.z,-Math.PI/2),K(R.x-1.15,R.z,Math.PI/2)}m("Dining table + chairs",ce);{let R=x("Water cooler",d(-2.2,3.6));o(.55,.32,.4,t(2236962,{roughness:.5}),0,0,0,R),o(.55,.06,.4,t(12922928),0,.32,0,R),o(.5,.28,.38,t(16053492,{roughness:.6}),0,.38,0,R);for(let P=0;P<5;P++)s(new bt(.09,10,8),t([16179294,12031220,16777215,9132587][P%4],{roughness:1}),(a()-.5)*.35,.72,(a()-.5)*.2,R);s(new Je(.16,.16,.4,20),t(15895592,{roughness:.4}),0,.96,0,R),s(new Je(.17,.17,.05,20),t(16053492),0,1.18,0,R),u(R)}let M=i.children.length;{let R=ot+.06,P=Gs.z0,O=Gs.curtain,K=O-P,G=new Bt(K,wt,40,1),le=G.attributes.position;for(let pe=0;pe<le.count;pe++)le.setZ(pe,Math.sin(le.getX(pe)*22)*.04);G.computeVertexNormals();let se=Vp();se.repeat.set(1,wt/.5),s(G,t(16777215,{map:se,roughness:1,side:Sn}),R,wt/2+.02,(P+O)/2).rotation.y=Math.PI/2,s(new Je(.012,.012,K+.1,8).rotateX(Math.PI/2),Q,R,wt+.05,(P+O)/2,i,{cast:!1}),h(R-.05,R+.05,P,O),x("Pantry shelves 1",ae(-6.15,ps.z0+.25,0,1.8,9));{let pe=x("Soap table",d(-7.85,ps.z0+.33)),Se=t(2829099,{roughness:.5}),Pe=vn(17);o(1.4,.04,.6,t(15262940,{roughness:.6}),0,.72,0,pe);for(let[de,D]of[[-.65,-.25],[.65,-.25],[-.65,.25],[.65,.25]])o(.04,.72,.04,Se,de,0,D,pe);let Ce=.76;for(let de=-.58;de<.6;de+=.17+Pe()*.05){let D=Pe(),me=(Pe()-.5)*.3,xe=[15895592,2060241,3126138,9323693,15921906,14034984][Math.floor(Pe()*6)];D<.45?(o(.14,.26,.1,t(xe,{roughness:.35}),de,Ce,me,pe),o(.04,.08,.06,t(xe,{roughness:.35}),de+.05,Ce+.2,me,pe),s(new Je(.025,.025,.04,12),t(16179294,{roughness:.4}),de-.03,Ce+.28,me,pe)):D<.8?(s(new Je(.035,.04,.2,14),t(xe,{roughness:.3}),de,Ce+.1,me,pe),s(new Je(.012,.012,.05,8),t(16777215),de,Ce+.225,me,pe)):o(.14,.18,.08,t(16777215,{roughness:.5}),de,Ce,me,pe)}u(pe,{under:.72})}}m("Curtain",M);{let R=ps,P=R.x1-R.x0,O=R.z1-R.z0;s(new Bt(P,O).rotateX(-Math.PI/2),t(9342860,{roughness:.35,metalness:.1}),(R.x0+R.x1)/2,.004,(R.z0+R.z1)/2,i,{cast:!1});let K=t(15921902,{roughness:.35});for(let[le,se]of[[3.05,0],[3.78,1]]){let pe=x(se?"Washer":"Dryer",d(St+.38,le,Math.PI/2));s(new oi(.7,.92,.7,2,.02),K,0,.46,0,pe),o(.7,.14,.1,K,0,.92,-.28,pe),se||s(new ks(.18,24),t(10133670,{roughness:.3}),0,.5,.352,pe),u(pe)}s(new Bt(.8,1.6).rotateX(-Math.PI/2),t(7237230,{roughness:1}),St+1.2,.008,3.4,i,{cast:!1});{let le=x("Laundry sink",d(-7.6,Ht-.3));o(.6,.35,.5,K,0,.55,0,le);for(let[se,pe]of[[-.25,-.2],[.25,-.2],[-.25,.2],[.25,.2]])o(.04,.55,.04,t(13619151),se,0,pe,le);u(le,{under:.55})}x("Paper towel rack",ae(St+.3,2.1,Math.PI/2,.6,14));let G=t(12106944,{roughness:.3,metalness:.6});{let le=x("Furnace",d(-6.6,2));o(.55,1.02,.72,t(9080208,{roughness:.5}),0,.13,0,le);for(let[se,pe]of[[-.24,-.32],[.24,-.32],[-.24,.32],[.24,.32]])o(.04,.13,.04,t(3815994),se,0,pe,le);o(.6,lt-1.155,.8,G,0,1.15,0,le),s(new Je(.06,.06,lt-1,12),F,.15,1+(lt-1)/2,.45,le),u(le,{fly:!1,under:.13}),o(4.4,.28,.55,G,-6.6+2.2,lt-.285,1.6,i,{cast:!1})}}let v=new Ze;i.add(v);for(let[R,P,O,K]of[["WEST",(St+Xe)/2,kt-.7,0],["EAST",(St+Xe)/2,Ht+.7,0],["NORTH",Xe+.85,_,-Math.PI/2],["SOUTH",St-.85,_,Math.PI/2]])s(new Bt(1.6,.4),new Yt({map:Xp(R),transparent:!0,toneMapped:!1}),P,0,O,v,{cast:!1,receive:!1}).rotation.set(-Math.PI/2,0,K);let N=new Ye,X=new T;for(let R of p)R.at.updateMatrixWorld(!0),R.home=new dt().setFromObject(R.at).expandByScalar(.03),R.m0=R.at.matrixWorld.clone(),R.boxes=[];for(let R of[...l,...c]){let P=(R.x0+R.x1)/2,O=(R.z0+R.z1)/2,K=null,G=1/0;for(let le of p){let se=le.home,pe=(se.max.x-se.min.x)*(se.max.z-se.min.z);P>=se.min.x&&P<=se.max.x&&O>=se.min.z&&O<=se.max.z&&pe<G&&(K=le,G=pe)}K&&(N.copy(K.m0).invert(),K.boxes.push({b:R,corners:[[R.x0,R.z0],[R.x1,R.z0],[R.x0,R.z1],[R.x1,R.z1]].map(([le,se])=>X.set(le,0,se).applyMatrix4(N).clone())}))}function ne(R){if(R.at.updateMatrixWorld(!0),R.gone){for(let{b:P}of R.boxes)P.x0=P.x1=P.z0=P.z1=-1e4;return}for(let{b:P,corners:O}of R.boxes){let K=O.map(G=>X.copy(G).applyMatrix4(R.at.matrixWorld).clone());P.x0=Math.min(...K.map(G=>G.x)),P.x1=Math.max(...K.map(G=>G.x)),P.z0=Math.min(...K.map(G=>G.z)),P.z1=Math.max(...K.map(G=>G.z)),P.pts=[0,1,3,2].map(G=>[K[G].x,K[G].z])}}let oe=R=>({x:+R.at.position.x.toFixed(3),z:+R.at.position.z.toFixed(3),ry:+R.at.rotation.y.toFixed(4),...R.gone?{gone:!0}:{}});function ve(R,P){R.at.position.x=P.x,R.at.position.z=P.z,R.at.rotation.y=P.ry,R.gone=!!P.gone,R.at.visible=!R.gone,ne(R)}for(let R of p)R.start=oe(R),Ec[R.name]&&ve(R,Ec[R.name]);function Ae(R){let P=new Date,O=P.getMinutes()+P.getSeconds()/60,K=P.getHours()%12+O/60;be.rotation.z=-O/60*Math.PI*2,ue.rotation.z=-K/12*Math.PI*2,Ge.update(R),je.intensity=2.2+Math.sin(performance.now()/90)*.3+Ge.flash*5}let Ee=new T(Re[0]-.3,1.1,Re[1]+.3);return{hemi:te,extras:e,things:p,setPose:ve,poseOf:oe,beam2:q,room:{x0:ot,x1:Xe,z0:kt,z1:Ht,ceil:lt,util:ps,door:{...Gs,x:ot,low:wt}},whole:{x0:St,x1:Xe,z0:kt,z1:Ht},flyBoxes:c,bumpers:l,update:Ae,tvGame:Ge,tvAt:Ee,labels:v}}var ot,Xe,kt,Ht,St,lt,kr,Rt,wt,Yp,Sc,In,ps,Gs,jp=ht(()=>{Cn();Bh();gu();bc();Op();qp();ot=-5.2,Xe=5.2,kt=-3.6,Ht=5,St=-8.7,lt=2.3,kr=.24,Rt=.4,wt=2.02,Yp=[-3.2,-.6,2],Sc=3.857,In={x:-2.43,z0:4,z1:Ht-.01,rise:.19,run:.23,n:12},ps={x0:St,x1:ot,z0:-.6,z1:Ht},Gs={z0:Rt,z1:In.z0-.05,curtain:1.9}});var Hr=ht(()=>{jp();gu();bc()});function Kp(i,e){let{flyBoxes:t,bumpers:n,things:s,beam2:r}=e,o=lt+kr,a=(j,J={})=>new Rn({color:j,roughness:.85,metalness:0,...J}),c=(j,J=2)=>new Rn({color:j,emissive:j,emissiveIntensity:J});function l(j,J,ae=0,q=0,re=0,ce=i,{cast:M=!0,receive:v=!0}={}){let N=new mt(j,J);return N.position.set(ae,q,re),N.castShadow=M,N.receiveShadow=v,ce.add(N),N}let h=(j,J,ae,q,re,ce,M,v=i,N)=>l(new Tn(j,J,ae),q,re,ce,M,v,N),u=(j,J,ae,q,re,ce,M,v=i,N)=>h(j,J,ae,q,re,ce+J/2,M,v,N),f=vn(21),p=t.length,g=n.length,x=s.length,m=(j,J,ae,q,re)=>n.push({x0:j,x1:J,z0:ae,z1:q,...re?{under:re}:{}});function d(j,{fly:J=!0,drive:ae=!0,under:q}={}){j.updateMatrixWorld(!0);let re=new dt().setFromObject(j);return re.isEmpty()||(J&&t.push({x0:re.min.x,x1:re.max.x,z0:re.min.z,z1:re.max.z,y1:re.max.y,...q?{under:q}:{}}),ae&&m(re.min.x,re.max.x,re.min.z,re.max.z,q),ae&&q&&y(j)),j}function y(j){j.updateMatrixWorld(!0),j.traverse(J=>{if(!J.isMesh)return;let ae=new dt().setFromObject(J);ae.min.y<.02&&m(ae.min.x,ae.max.x,ae.min.z,ae.max.z)})}let A=new Set,_=(j,J)=>(s.push({id:s.length+1,name:j,at:J}),A.add(J),J);function S(j,J){let ae=i.children.slice(J).filter(M=>!A.has(M)),q=new dt;for(let M of ae)q.expandByObject(M);let re=new Ze,ce=q.isEmpty()?new T:q.getCenter(new T);re.position.set(ce.x,0,ce.z),i.add(re),re.updateMatrixWorld(!0);for(let M of ae)re.attach(M);return _(j,re)}let E=(j,J,ae=0,q=0)=>{let re=new Ze;return re.position.set(j,q,J),re.rotation.y=ae,i.add(re),re},I;{let j=_("Christmas tree",E(-.9,kt+.62)),J=a(2055994,{roughness:.9});l(new ks(.6,32).rotateX(-Math.PI/2),a(11739178,{roughness:1}),0,.004,0,j,{cast:!1}),l(new Je(.06,.07,.42,12),a(5913122),0,.21,0,j);let ae=[[.58,.55,.3],[.47,.5,.65],[.36,.45,.98],[.24,.42,1.28]];for(let[v,N,X]of ae)l(new yi(v,N,18),J,0,X+N/2,0,j);let q=[15023678,16173326,3244750,13975436,15921386],re=[];for(let[v,[N,X,ne]]of ae.entries())for(let oe=0;oe<9-v*2;oe++){let ve=oe/(9-v*2)*Math.PI*2+v,Ae=.25+f()*.15,Ee=N*(1-Ae)+.02;l(new bt(.035,10,8),a(q[(oe+v)%q.length],{roughness:.25,metalness:.3}),Math.sin(ve)*Ee,ne+X*Ae,Math.cos(ve)*Ee,j,{cast:!1});let we=Math.sin(ve+.5)*(Ee-.04),R=Math.cos(ve+.5)*(Ee-.04);re.push(l(new bt(.014,6,4),c([16765803,16734810,8315009,7059711][oe%4],3),we,ne+X*(Ae+.18),R,j,{cast:!1}))}l(new oc(.08),c(16767050,2.5),0,1.74,0,j,{cast:!1}).scale.set(1,1.3,.4);let M=new ri(16763255,1.6,2.5,1.6);M.position.set(0,1.1,.55),j.add(M),I={bulbs:re,l:M},d(j,{under:.3})}let U=[],b=new bt(.016,6,4).scale(1,1.4,1),C=new Yt({toneMapped:!1}),k=[16765803,16734810,8315009,7059711,16748504].map(j=>new De(j)),F=new rc(.04,0),Q=a(2055994,{roughness:.9,flatShading:!0}),L=vn(25),z=new bt(.016,6,4),$=new sn(.03,.011,6,12),ie=a(13114922,{roughness:.55}),te=a(3114330,{roughness:.6}),ee=a(2845872,{roughness:.6}),he=j=>(j.raycast=()=>{},j);function fe(j,J,ae,q,re=()=>{}){let ce=ae.reduce((N,X)=>N.add(X),new T).divideScalar(ae.length),M=new Dr(j,J,ae.length),v=new Mt;return ae.forEach((N,X)=>{v.position.copy(N).sub(ce),v.rotation.set(0,0,0),v.scale.setScalar(1),re(v,X),v.updateMatrix(),M.setMatrixAt(X,v.matrix)}),M.position.copy(ce),M.castShadow=M.receiveShadow=!1,q.add(M),M}let Me=(j,J=i,ae=b)=>{let q=he(fe(ae,C,j,J));return j.forEach((re,ce)=>q.setColorAt(ce,k[ce%k.length])),U.push({im:q,base:q.instanceColor.array.slice()}),q},Z=(j,J,ae=i)=>fe(F,Q,j,ae,q=>{q.rotation.set(L()*6,L()*6,L()*6),q.scale.setScalar(J/.04*(.8+L()*.4))});function ue(j,J,ae,q,re=1,ce=ie,M=0){let v=new Ze;v.position.set(J,ae,q),v.rotation.y=M,v.scale.setScalar(re),j.add(v);for(let N of[-1,1]){let X=l($,ce,N*.032,.006,0,v,{cast:!1});X.scale.set(1,.7,.6),X.rotation.z=N*.35,h(.022,.07,.008,ce,N*.02,-.04,0,v,{cast:!1}).rotation.z=N*.3}return h(.026,.026,.024,ce,0,0,0,v,{cast:!1}),v}{let j=i.children.length,J=a(14065198,{roughness:.4,metalness:.3}),ae=a(16052714,{roughness:.6}),q={gold:a(16173326,{roughness:.35,metalness:.4}),red:ie,silver:a(14015459,{roughness:.3,metalness:.5}),green:a(3711337,{roughness:.4})};for(let[re,ce,M,v,N,X,ne]of[[.36,.27,.3,-.82,-2.17,ie,"gold"],[.24,.16,.24,-1.22,-2.2,te,"red"],[.18,.12,.18,-.47,-2.21,ee,"silver"],[.22,.38,.22,-.13,-3.3,J,"red"],[.28,.2,.24,-.12,-2.84,ae,"green"]])u(re,ce,M,X,v,0,N),u(re+.006,ce+.004,.035,q[ne],v,0,N,i,{cast:!1}),u(.035,ce+.004,M+.006,q[ne],v,0,N,i,{cast:!1}),ue(i,v,ce+.024,N,.8+re,q[ne],L()*3),t.push({x0:v-re/2,x1:v+re/2,z0:N-M/2,z1:N+M/2,y1:ce}),m(v-re/2,v+re/2,N-M/2,N+M/2);S("Presents",j)}let be=[-1.4,-.95,-.5,-.05],Re=1.3;{let j=a(16250352,{roughness:1}),J=a(3805204,{roughness:1}),ae=.8,q=1.1,re=ae+.12;for(let[ce,M]of be.entries()){let v=_(`Stocking ${ce+1}`,E(Xe-.005,M,-Math.PI/2)),N=[ie,te,ie,ee][ce];l(new oi(.255,re-ae+.05,.12,2,.03),N,.0425,(ae+re+.05)/2,.075,v),l(new oi(.17,q-re,.12,2,.02),N,0,(re+q)/2,.075,v),u(.15,.004,.1,J,0,q,.08,v,{cast:!1});for(let[X,ne,oe,ve]of[[.21,.025,0,.0125],[.21,.025,0,.1475],[.025,.11,-.0925,.08],[.025,.11,.0925,.08]])u(X,.1,ne,j,oe,q-.03,ve,v);u(.012,Re-q-.07,.006,j,-.08,q+.07,.012,v,{cast:!1}),d(v,{drive:!1,under:re}),m(Xe-.14,Xe-.02,M-.085,M+.085,re)}}{let j=i.children.length,J=[-1.62,...be.map(re=>re-.08),.17],ae=[],q=[];for(let re=0;re<J.length-1;re++)for(let ce=J[re];ce<J[re+1];ce+=.03){let M=(ce-J[re])/(J[re+1]-J[re]),v=Re-.06*4*M*(1-M);ae.push(new T(Xe-.04,v,ce)),ae.length%4===0&&q.push(new T(Xe-.075,v+(L()-.5)*.04,ce))}Z(ae,.034),Me(q);for(let re of[J[0],J[J.length-1]])ue(i,Xe-.08,Re-.02,re,1.5,ie,-Math.PI/2);S("Stocking garland",j)}function Ie(j,J,ae,q,re){let ce=_(j,E(J,ae,q)),M=[],v=[],N=[];for(let X=0;X<28;X++){let ne=X/28*Math.PI*2,oe=X%2?.15:.19;M.push(new T(Math.cos(ne)*oe,re+Math.sin(ne)*oe,.065))}for(let X=0;X<9;X++){let ne=X/9*Math.PI*2+.3,oe=.13+L()*.08;v.push(new T(Math.cos(ne)*oe,re+Math.sin(ne)*oe,.11))}for(let X=0;X<10;X++){let ne=X/10*Math.PI*2+.6;N.push(new T(Math.cos(ne)*.17,re+Math.sin(ne)*.17,.115))}return Z(M,.055,ce),fe(z,ie,v,ce),Me(N,ce),ue(ce,0,re-.185,.12,1.7),ce}Ie("Wreath (north)",Xe-.005,(be[0]+be[3])/2,-Math.PI/2,1.72),Ie("Wreath (west)",-2.75,kt+.005,0,1.5);{let j=In,J=j.rise/j.run,ae=j.z0-.03,q=[],re=[],ce=new Ze;i.add(ce);for(let M=.03;.9+M*J<1.95;M+=.03){let v=j.x-M,N=.9+M*J;if(q.push(new T(v,N+(L()-.5)*.02,ae+(L()-.5)*.03)),q.length%2===0){let X=M*22;re.push(new T(v-Math.sin(X)*.04,N+Math.cos(X)*.05,ae+Math.sin(X)*.05))}}Z(q,.04,ce),Me(re,ce),ue(ce,j.x-.05,.86,j.z0-.006,1.8,ie,Math.PI),s.find(M=>M.name==="Stairs").at.attach(ce)}{let j=lt-.09,J=s.filter(v=>/^Window/.test(v.name)&&!v.gone).map(v=>new dt().setFromObject(v.at).expandByScalar(.1));for(let v of[Rt,r])J.push(new dt(new T(Xe-.25,0,v-.17),new T(Xe+1,o,v+.17)));let ae=[[ot+.15,kt+.035,Xe-.15,kt+.035],[Xe-.035,kt+.15,Xe-.035,Ht-.15],[-2.25,Ht-.035,Xe-.15,Ht-.035],[ot+.25,Rt-.13,Xe-.2,Rt-.13],[ot+.25,Rt+.13,Xe-.2,Rt+.13],[ot+.25,r-.13,Xe-.2,r-.13],[-2.2,r+.13,Xe-.2,r+.13]],q=[],re=[],ce=new T,M=.05;for(let[v,N,X,ne]of ae){let oe=Math.hypot(X-v,ne-N),ve=(we,R)=>new T(v+(X-v)*we/oe,R,N+(ne-N)*we/oe),Ae=[],Ee=null;for(let we=0;we*M<=oe;we++)J.some(R=>R.containsPoint(ce.copy(ve(we*M,j))))?Ee=null:(Ee||Ae.push(Ee=[]),Ee.push(we*M));for(let we of Ae){let R=we[0],P=we[we.length-1]-R,O=Math.max(1,Math.round(P/.8));if(P<.4)continue;let K=null;for(let G=0;R+G*M<=R+P+1e-6;G++){let le=G*M/P*O%1,se=ve(R+G*M,j-.07*4*le*(1-le));K&&q.push(K,se),G%4===2&&re.push(se.clone().setY(se.y-.028)),K=se}}}i.add(he(new zs(new Lt().setFromPoints(q),new os({color:1784356})))),Me(re)}{let j=wt-.004,J=.125,ae=vn(31),q=[],re=[],ce=new bt(.024,8,6).scale(1,1.45,1),M=new bt(.052,8,6),v=new On({transparent:!0,depthWrite:!1,blending:La,vertexShader:"varying vec3 c; varying float a; void main() { vec4 p = modelViewMatrix * instanceMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * mat3(instanceMatrix) * normal); a = max(0.0, -dot(n, normalize(p.xyz))); c = instanceColor; gl_Position = projectionMatrix * p; }",fragmentShader:"varying vec3 c; varying float a; void main() { gl_FragColor = vec4(c, a * a * 0.55); }"});for(let[ne,oe]of[[ot+.25,Rt-J],[ot+.25,Rt+J],[ot+.25,r-J],[-2.2,r+J]])for(let ve=ne;ve<Xe-.4;){let Ae=Math.min(.62+ae()*.3,Xe-.2-ve),Ee=.1+Ae*.13,we=Math.round(Ae/.03),R=null;for(let O=0;O<=we;O++){let K=O/we,G=new T(ve+Ae*K,j-Ee*4*K*(1-K),oe);R&&q.push(R,G),O%6===3&&re.push(G.clone().setY(G.y-.036)),R=G}let P=.08+ae()*.11;q.push(new T(ve,j,oe),new T(ve,j-P,oe));for(let O=.06;O<=P+1e-6;O+=.09)re.push(new T(ve,j-O-.036,oe));ve+=Ae}i.add(he(new zs(new Lt().setFromPoints(q),new os({color:1784356}))));let N=Me(re,i,ce),X=he(fe(M,v,re,i));X.instanceColor=N.instanceColor}let We=new Ye,Ge=new T,Ue=s.slice(x);for(let j of Ue)j.at.updateMatrixWorld(!0),j.home=new dt().setFromObject(j.at).expandByScalar(.03),j.m0=j.at.matrixWorld.clone(),j.boxes=[],j.start=e.poseOf(j);for(let j of[...n.slice(g),...t.slice(p)]){let J=(j.x0+j.x1)/2,ae=(j.z0+j.z1)/2,q=null,re=1/0;for(let ce of Ue){let M=ce.home,v=(M.max.x-M.min.x)*(M.max.z-M.min.z);J>=M.min.x&&J<=M.max.x&&ae>=M.min.z&&ae<=M.max.z&&v<re&&(q=ce,re=v)}q&&(We.copy(q.m0).invert(),q.boxes.push({b:j,corners:[[j.x0,j.z0],[j.x1,j.z0],[j.x0,j.z1],[j.x1,j.z1]].map(([ce,M])=>Ge.set(ce,0,M).applyMatrix4(We).clone())}))}let je=s.find(j=>j.name==="Clock");je==null||je.at.traverse(j=>{var N;if(!j.isMesh||!Array.isArray(j.material)||!((N=j.material[1])!=null&&N.map))return;let J=j.geometry,ae=J.attributes.uv,q=J.attributes.position,re=J.groups[1],ce=-1,M=1/0;for(let X=re.start;X<re.start+re.count;X++){let ne=J.index.getX(X),oe=Math.hypot(ae.getX(ne)-.5,ae.getY(ne)-1);oe<M&&(M=oe,ce=ne)}let v=Math.atan2(q.getY(ce),q.getX(ce))-Math.PI/2;Math.abs(v)>.01&&J.rotateZ(-v)}),i.traverse(j=>{j.isDirectionalLight&&j.castShadow&&!j.shadow.bias&&!j.shadow.normalBias&&(j.shadow.bias=-5e-4,j.shadow.normalBias=.02)});let H=e.update;return e.update=j=>{H(j);let J=performance.now()/1e3;I.bulbs.forEach((ae,q)=>{ae.material.emissiveIntensity=1.5+2*Math.max(0,Math.sin(J*2.2+q*1.7))}),I.l.intensity=1.5+Math.sin(J*1.3)*.2;for(let{im:ae,base:q}of U){let re=ae.instanceColor.array;for(let ce=0;ce<q.length;ce+=3){let M=.4+.6*Math.max(0,Math.sin(J*2.2+ce*.57));re[ce]=q[ce]*M,re[ce+1]=q[ce+1]*M,re[ce+2]=q[ce+2]*M}ae.instanceColor.needsUpdate=!0}},e}var Zp=ht(()=>{Cn();Bh();Hr()});function Jp(i){return Kp(i,yu(i))}var _u=ht(()=>{Hr();Zp();Hr()});function Mn(i,e,t,n=0){if(!(e>i.x0-n&&e<i.x1+n&&t>i.z0-n&&t<i.z1+n))return!1;if(!i.pts)return!0;let s=i.pts,r=(s[0][0]+s[2][0])/2,o=(s[0][1]+s[2][1])/2;for(let a=0;a<4;a++){let[c,l]=s[a],[h,u]=s[(a+1)%4],f=h-c,p=u-l,g=Math.hypot(f,p)||1;if((Math.sign(f*(o-l)-p*(r-c))||1)*(f*(t-l)-p*(e-c))/g<-n)return!1}return!0}function e0(i,e,t,n){let s=Fn(e,i.x0+n,i.x1-n),r=Fn(t,i.z0+n,i.z1-n);if(i.pts){let o=(i.pts[0][0]+i.pts[2][0])/2,a=(i.pts[0][1]+i.pts[2][1])/2;for(let c=0;c<20&&!Mn(i,s,r,-n);c++)s+=(o-s)*.15,r+=(a-r)*.15}return[s,r]}function Mi(i,e,t,n){let s=0;for(let r of i.tops)Mn(r,e,t,Fe.radius*.5)&&r.y1<=n+.03&&r.y1>s&&(s=r.y1);return s}function wc(i,e,t,n){let s=0;for(let r of i.tops)Mn(r,e,t,Fe.radius)&&r.y1>n+.03&&!Tc(r,n,Fe.height)&&(s=Math.max(s,r.y1));return s}function Gr(i,e,t,n){let s=i.walls,r=Fe.radius;if(e<s.x0+r||e>s.x1-r||t<s.z0+r||t>s.z1-r)return!0;if(i.tops.some(o=>Mn(o,e,t,r*.5)&&o.y1>=.05&&o.y1<=n+.03))return!1;for(let o of i.blocks){if(!Mn(o,e,t,r)||Tc(o,n,Fe.height))continue;let a=(i.shells||i.tops).find(c=>c.x0<=o.x0+.03&&c.x1>=o.x1-.03&&c.z0<=o.z0+.03&&c.z1>=o.z1-.03);if(!(a&&$p(o)>$p(a)*.4))return!0}return!1}function vv(i,e,t,n){let s=i.ceiling?i.ceiling(e,t):1/0;for(let r of i.tops)r.under!==void 0&&Mn(r,e,t)&&r.under>n+.01&&(s=Math.min(s,r.under));return s-Fe.height}function Mv(i,e,t,n){let s=i.blocks.filter(o=>Mn(o,e,t,Fe.radius)),r=null;for(let o of i.tops)!Mn(o,e,t,Fe.radius)||o.y1<=n+.03||o.under!==void 0&&n<o.under&&(o.under<.25||!s.some(c=>c.x0>=o.x0-.03&&c.x1<=o.x1+.03&&c.z0>=o.z0-.03&&c.z1<=o.z1+.03&&(c.x1-c.x0)*(c.z1-c.z0)<.05))||(!r||o.y1>r.y1)&&(r=o);return r}function Rc(i,e,t,n){let s=-Fn(e.y,-1,1),r=Fn(e.x,-1,1);i.cling||(i.yaw-=r*Fe.turn*t);let o=-Math.sin(i.yaw),a=-Math.cos(i.yaw),c=Math.cos(i.yaw),l=-Math.sin(i.yaw);i.runT=s>.6&&!i.air&&!i.cling?i.runT+t:0,i.run+=((i.runT>Fe.sprintAfter?1:0)-i.run)*(1-Math.exp(-t*(i.runT>Fe.sprintAfter?4:10)));let h=s*(Fe.walk+(Fe.sprint-Fe.walk)*i.run);if(i.walking=Math.abs(h)/Fe.walk,i.climbing=!1,i.cling)return bv(i,s,r,e.jump,t,n,o,a,c,l);if(e.jump&&!i.air){let g=Sv(n,i);if(g){let x=g.y1-i.y+.06,m=Math.sqrt(2*Fe.gravity*x),d=m/Fe.gravity+.12;i.vy=m,i.leap={vx:(g.px-i.x)/d,vz:(g.pz-i.z)/d,t:d},i.yaw=Math.atan2(-(g.px-i.x),-(g.pz-i.z))}else i.vy=Math.sqrt(2*Fe.gravity*Fe.hop);i.air=!0,i.run=i.runT=0}let u=o*h*t,f=a*h*t;if(i.leap&&(u=i.leap.vx*t,f=i.leap.vz*t,i.leap.t-=t,i.leap.t<=0&&(i.leap=null)),u||f){let g=i.x+u,x=i.z+f;Gr(n,g,x,i.y)||wc(n,g,x,i.y)>0?!i.air&&s>.2&&(i.cling={t:0},i.run=i.runT=0):(i.x=g,i.z=x)}let p=Mi(n,i.x,i.z,i.y);if(i.air||i.y>p+1e-4){i.vy-=Fe.gravity*t,i.y+=i.vy*t,i.air=!0;let g=Mi(n,i.x,i.z,i.y+.05);i.y<=g&&i.vy<=0&&(i.y=g,i.vy=0,i.air=!1,i.leap=null)}else i.y=p,i.vy=0;return ko(i,n)}function bv(i,e,t,n,s,r,o,a,c,l){let h=i.x+o*.04,u=i.z+a*.04,f=Gr(r,h,u,i.y)||wc(r,h,u,i.y)>0;if(!f&&e>=-.3&&!n){let x=Ev(r,h,u,i.y);if(x)return Qp(i,x,o,a,r)}if(!f||e<-.3||n)return i.cling=null,i.air=!0,i.vy=n?Math.sqrt(2*Fe.gravity*Fe.hop):0,n&&(i.leap={vx:-o*.5,vz:-a*.5,t:.3}),ko(i,r);let p=Mv(r,h,u,i.y),g=vv(r,i.x,i.z,i.y);if(e>.2&&(i.climbing=!0,i.y=Math.min(i.y+Fe.climb*e*s,p?Math.max(p.y1,g):g),p&&(i.y>=p.y1-1e-6||i.y>=g-1e-6)))return Qp(i,p,o,a,r);if(t){let x=i.x+c*t*Fe.shuffle*s,m=i.z+l*t*Fe.shuffle*s;!Gr(r,x,m,i.y)&&!wc(r,x,m,i.y)&&(Gr(r,x+o*.04,m+a*.04,i.y)||wc(r,x+o*.04,m+a*.04,i.y))&&(i.x=x,i.z=m,i.climbing=!0)}return i.vy=0,i.air=!1,i.y<=Mi(r,i.x,i.z,i.y)+1e-4&&e<=.2&&(i.cling=null),ko(i,r)}function Ev(i,e,t,n){let s=null;for(let r of i.tops)Mn(r,e,t,Fe.radius)&&r.y1>n-.03&&r.y1<=n+.03&&!Tc(r,n,Fe.height)&&(!s||r.y1>s.y1)&&(s=r);return s}function Qp(i,e,t,n,s){i.y=e.y1,i.cling=null,i.air=!1,i.vy=0;for(let a of[.05,.09,.14]){let c=i.x+t*a,l=i.z+n*a;if(Mi(s,c,l,i.y)>=e.y1-.01)return i.x=c,i.z=l,ko(i,s)}let[r,o]=e0(e,i.x,i.z,.04);return Mi(s,r,o,i.y)>=e.y1-.01&&(i.x=r,i.z=o),ko(i,s)}function ko(i,e){for(let t of e.tops)t.under!==void 0&&Mn(t,i.x,i.z)&&i.y<t.under&&i.y+Fe.height>t.under&&(i.y=Math.max(0,t.under-Fe.height),i.vy=Math.min(i.vy,0));for(let t of["x","y","z","yaw","vy","run"])Number.isFinite(i[t])||(i[t]=0);return i}function Sv(i,e){let t=null,n=1/0;for(let s of i.tops){if(s.y1<=e.y+.05||s.y1-e.y>Fe.leapMax)continue;let[r,o]=e0(s,e.x,e.z,.06),a=Math.hypot(r-e.x,o-e.z);a<Fe.leapReach&&a<n&&!(Tc(s,e.y,Fe.height)&&Mn(s,e.x,e.z))&&(t={...s,px:r,pz:o},n=a)}return t}function n0(i,e){let t=Mi(e,i.x,i.z,i.y);return i.cling&&i.y<=t+.02&&(i.cling=null,i.y=t),i.walking=i.run=i.runT=i.vy=0,i.climbing=!1,i.leap=null,i}function vu(i,e){let t=!!i.cling,n=e>=0;return{hanging:t,sit:n&&!t?Math.min(1,e/.7):0,asleep:n&&e>1}}function s0(i,e,t,n,s=Vs.tiltHigh){let r=t.x-e.x,o=t.z-e.z,a=Math.hypot(r,o),c=1-Math.exp(-n*Vs.ease),l=(h,u)=>Math.sign(h)*Math.min(Math.abs(h)*c,u*n);return a>Vs.near&&(i.yaw+=l(wv(Math.atan2(-r,-o)-i.yaw),Vs.turn)),i.pitch+=l(Fn(Math.atan2(t.y-e.y,Math.max(a,Vs.near)),Vs.tiltLow,s)-i.pitch,Vs.nod),i}function r0(i,e,t,n,s){let r=-Math.sin(e),o=-Math.cos(e),a=Math.cos(e),c=-Math.sin(e),l=Math.cos(t),h=Math.sin(t);for(let[u,f,p,g]of Tv)for(let x of[n,-n]){let m=i.x-r*u*l+a*x*f,d=i.y+p-u*h,y=i.z-o*u*l+c*x*f;if([.25,.5,.75,1].every(A=>s(i.x+(m-i.x)*A,i.y+(d-i.y)*A,i.z+(y-i.z)*A)))return{x:m,y:d,z:y,side:x,w:g}}return{x:i.x,y:i.y+.04,z:i.z,side:n,w:0}}function o0(i,e,t,n){if(i.yaw-=(i.pointing?rn.aim:rn.turn)*Fn(e.x,-1,1)*t,i.yaw-=e.lookX||0,i.pitch=Fn(i.pitch-(e.lookY||0)-(i.pointing?rn.aim*Fn(e.y,-1,1)*t:0),-1.3,1.1),i.eye+=((i.crouch?rn.crouch:rn.eye)-i.eye)*(1-Math.exp(-t*6)),!i.pointing){let o=-Fn(e.y,-1,1)*rn.walk*(i.crouch?.5:1);i.x+=-Math.sin(i.yaw)*o*t,i.z+=-Math.cos(i.yaw)*o*t}let s=rn.radius,r=n.walls;for(let o of n.blocks){let a=Fn(i.x,o.x0,o.x1),c=Fn(i.z,o.z0,o.z1),l=Math.hypot(i.x-a,i.z-c);if(!(l>=s))if(l>1e-6)i.x=a+(i.x-a)/l*s,i.z=c+(i.z-c)/l*s;else{let h=[[o.x0-s-i.x,0],[o.x1+s-i.x,0],[0,o.z0-s-i.z],[0,o.z1+s-i.z]].sort((u,f)=>Math.hypot(...u)-Math.hypot(...f))[0];i.x+=h[0],i.z+=h[1]}}return i.x=Fn(i.x,r.x0+s,r.x1-s),i.z=Fn(i.z,r.z0+s,r.z1-s),i}function Ic(i,e,t,n=1/0,s=.16){let r=[t[0]-i[0],t[1]-i[1],t[2]-i[2]],o=r[0]*e[0]+r[1]*e[1]+r[2]*e[2];return o<=0?!1:Math.hypot(r[0]-e[0]*o,r[1]-e[1]*o,r[2]-e[2]*o)<=s+o*.02&&n>o-.18}function Mu(i){let e=ai[i.kind];return i.on?(a0(i,Math.max(1,e.rest*(1-i.left/e.lasts))),"off"):i.wait>0?"wait":(i.on=!0,i.left=e.lasts,"on")}function c0(i,e){return i.on?(i.left-=e,i.left<=0?(a0(i,ai[i.kind].rest),"empty"):null):i.wait>0&&(i.wait-=e)<=0?(i.wait=0,"ready"):null}var Fe,rn,Fn,Tc,$p,Vr,t0,i0,Vs,wv,Tv,Cc,ai,Pc,a0,l0,Wr=ht(()=>{Fe={height:.12,radius:.035,walk:.55,sprint:1.4,sprintAfter:1,turn:2.6,climb:.9,shuffle:.3,gravity:4.5,hop:.14,leapReach:.5,leapMax:1.4},rn={eye:1.55,crouch:.4,radius:.2,walk:1.2,turn:1.8,aim:.9},Fn=(i,e,t)=>Math.max(e,Math.min(t,i));Tc=(i,e,t)=>i.under!==void 0&&e+t<i.under;$p=i=>(i.x1-i.x0)*(i.z1-i.z0);Vr=(i,e,t=0)=>({x:i,y:0,z:e,yaw:t,vy:0,air:!1,climbing:!1,cling:null,leap:null,walking:0,run:0,runT:0});t0=i=>!i.air;i0=(i,e)=>{let t=i||e;return{x:t.x,y:i!=null&&i.crouch?rn.crouch:rn.eye*.7,z:t.z,live:!!i}},Vs={turn:3.2,nod:2.2,ease:5,near:.2,tiltLow:-.9,tiltHigh:.6},wv=i=>Math.atan2(Math.sin(i),Math.cos(i));Tv=[[.26,.085,.05,0],[.18,.085,.06,0],[.11,.09,.08,.15],[.05,.1,.09,.4],[-.02,.1,.08,.55],[-.05,.07,.12,.55]];Cc=(i,e,t=0)=>({x:i,z:e,yaw:t,pitch:-.15,eye:rn.eye,crouch:!1,pointing:!1});ai={binoculars:{zoom:4,lasts:6,rest:8,turn:.25},magnifier:{zoom:3,lasts:8,rest:6}},Pc=i=>({kind:i,on:!1,left:ai[i].lasts,wait:0,waitOf:1}),a0=(i,e)=>{i.on=!1,i.wait=i.waitOf=e,i.left=ai[i.kind].lasts};l0=i=>i.on?i.left/ai[i.kind].lasts:i.wait>0?1-i.wait/i.waitOf:1});async function Uv(){var i;if(Ho&&Date.now()-p0<12*36e5)return Ho;try{let e=new AbortController,t=setTimeout(()=>e.abort(),5e3),n=await fetch(Cv,{signal:e.signal});clearTimeout(t);let s=await n.json();if(!((i=s.iceServers)!=null&&i.length))throw new Error("no relay");Ho=s.iceServers.map(r=>({...r,urls:[].concat(r.urls).filter(o=>!/:53\b/.test(o))})),p0=Date.now()}catch{return Ho||Iv}return Ho}var Rv,h0,u0,Cv,Iv,Pv,Lv,Dv,Nv,f0,d0,Ho,p0,m0,bu,Lc,A0=ht(()=>{Qo();Rv="https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js",h0=ro?"sb-hide-elf-lab-":"sb-hide-elf-",u0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Cv="https://dogfight-relay.sean-bostic.workers.dev",Iv=[{urls:["stun:stun.cloudflare.com:3478","stun:stun.l.google.com:19302"]}],Pv=2e3,Lv=9e4,Dv=5e3,Nv=2e4,f0=null,d0=()=>f0||=new Promise((i,e)=>{if(globalThis.Peer){i();return}let t=Object.assign(document.createElement("script"),{src:Rv,onload:i,onerror:()=>{f0=null,e(new Error("offline"))}});document.head.append(t)}),Ho=null,p0=0;m0=(()=>{try{let i=sessionStorage.getItem("hide-elf-net");return i||(i=Math.random().toString(36).slice(2,10),sessionStorage.setItem("hide-elf-net",i)),i}catch{return Math.random().toString(36).slice(2,10)}})(),bu=i=>String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4),Lc=class{constructor(e){this.h=e,this.role=null,this.code="",this.peer=null,this.conns=new Map,this.conn=null,this.token=m0,this.lastHeard=0,this.status="",document.addEventListener("visibilitychange",()=>{!document.hidden&&this.role&&(this.awake(),this.watch())})}say(e){var t,n;this.status=e,(n=(t=this.h).onStatus)==null||n.call(t,e)}async host(){this.leave(),this.say("Opening a room\u2026"),await d0();for(let e=0;e<6&&!this.peer;e++){let t=Array.from({length:4},()=>u0[Math.floor(Math.random()*u0.length)]).join("");try{this.peer=await this.open(h0+t),this.code=t}catch(n){if(n.type!=="unavailable-id")throw this.say(`Couldn't open a room (${n.type||n.message})`),n}}return this.role="host",this.say(""),this.peer.on("connection",e=>{var n;let t=((n=e.metadata)==null?void 0:n.token)||e.peer;e.on("open",()=>{var r,o,a,c,l;let s=this.conns.get(t);s&&s!==e&&((r=s.removeAllListeners)==null||r.call(s),s.close()),this.conns.set(t,e),(l=(c=this.h).onJoin)==null||l.call(c,t,String(((o=e.metadata)==null?void 0:o.name)||"").slice(0,12),!!((a=e.metadata)!=null&&a.watch))}),e.on("data",s=>{var r,o;this.conns.get(t)===e&&((o=(r=this.h).onMsg)==null||o.call(r,t,s))}),e.on("close",()=>{var s,r;this.conns.get(t)===e&&(this.conns.delete(t),(r=(s=this.h).onLeave)==null||r.call(s,t))}),e.on("error",()=>{})}),this.awake(),this.code}send(e,t){let n=this.conns.get(e);if(n!=null&&n.open)try{n.send(t)}catch{}}broadcast(e){for(let t of this.conns.values())if(t.open)try{t.send(e)}catch{}}kick(e){let t=this.conns.get(e);this.conns.delete(e),t==null||t.close()}async join(e){return e=bu(e),e.length!==4?(this.say("Room codes are 4 letters"),!1):(this.leave(),this.say(`Joining ${e}\u2026`),await d0(),this.peer=await this.open(),this.role="guest",this.code=e,this.since=Date.now(),this.peer.on("error",t=>{var n,s;t.type==="peer-unavailable"&&(this.everIn?this.retry():(this.say(`No game called ${e}`),this.leave(),(s=(n=this.h).onLost)==null||s.call(n,!1)))}),this.dial(),this.awake(),this.watch(),clearTimeout(this.joinT),this.joinT=setTimeout(()=>{var t,n;if(this.role==="guest"&&!this.everIn){let s=this.code;this.leave(),this.say(`Couldn't reach room ${s}`),(n=(t=this.h).onLost)==null||n.call(t,!1,`Couldn't reach room ${s}`)}},Nv),!0)}dial(){if(this.role!=="guest"||!this.peer||this.peer.destroyed)return;if(this.peer.disconnected)try{this.peer.reconnect()}catch{}let e=this.peer.connect(h0+this.code,{reliable:!0,serialization:"json",metadata:{token:m0,name:this.name||"",watch:!!this.spectate}});this.conn=e,e.dialAt=Date.now(),this.everIn||setTimeout(()=>{this.conn===e&&!e.open&&this.role==="guest"&&(this.conn=null,e.close(),this.dial())},8e3),e.on("open",()=>{this.conn===e&&(this.everIn=!0,this.lastHeard=Date.now(),this.lostAt=0,this.say(""))}),e.on("data",t=>{var n,s,r,o;if(this.conn===e){if(this.lastHeard=Date.now(),(t==null?void 0:t.t)==="bye"){this.leave(),(s=(n=this.h).onLost)==null||s.call(n,!0,"The host ended the game");return}(o=(r=this.h).onMsg)==null||o.call(r,"host",t)}}),e.on("close",()=>{this.conn===e&&this.retry()}),e.on("error",()=>{})}toHost(e){var t;if((t=this.conn)!=null&&t.open)try{this.conn.send(e)}catch{}}retry(){var e,t;if(this.role==="guest"){if(this.lostAt||(this.lostAt=Date.now(),this.say("Reconnecting\u2026")),Date.now()-this.lostAt>Lv){this.leave(),(t=(e=this.h).onLost)==null||t.call(e,!0,"Lost the host");return}this.retryT||(this.retryT=setTimeout(()=>{var n;this.retryT=null,this.role==="guest"&&!((n=this.conn)!=null&&n.open)&&this.dial()},Pv))}}watch(){clearInterval(this.watchT),this.watchT=setInterval(()=>{var e,t;if(this.role!=="guest"){clearInterval(this.watchT);return}if((e=this.conn)!=null&&e.open&&Date.now()-this.lastHeard>Dv){let n=this.conn;this.conn=null,n.close(),this.retry()}else if(!((t=this.conn)!=null&&t.open)&&this.lostAt){if(this.conn&&Date.now()-this.conn.dialAt>6e3){let n=this.conn;this.conn=null,n.close()}this.retry()}},1e3)}async open(e){let t={debug:0,config:{iceServers:await Uv()}};return new URLSearchParams(location.search).has("relayonly")&&(t.config.iceTransportPolicy="relay"),new Promise((n,s)=>{let r=e?new Peer(e,t):new Peer(t),o=a=>{r.destroy(),s(a)};r.once("open",()=>{r.off("error",o),r.on("disconnected",()=>setTimeout(()=>{if(!r.destroyed&&r.disconnected)try{r.reconnect()}catch{}},1e3)),n(r)}),r.once("error",o)})}leave(){var t,n,s,r;this.role==="host"&&this.broadcast({t:"bye"}),clearTimeout(this.retryT),this.retryT=null,clearInterval(this.watchT),clearTimeout(this.joinT);let e=this.peer;this.peer=null,this.conn=null,this.conns.clear(),this.role=null,this.code="",this.everIn=!1,this.lostAt=0,e&&setTimeout(()=>e.destroy(),200),(r=(n=(t=this.wake)==null?void 0:t.release)==null?void 0:(s=n.call(t)).catch)==null||r.call(s,()=>{}),this.wake=null}async awake(){try{this.role&&!this.wake&&navigator.wakeLock&&(this.wake=await navigator.wakeLock.request("screen"),this.wake.addEventListener("release",()=>{this.wake=null}))}catch{}}}});function x0(i){let e={on:!1,host:!1,players:new Map,phase:"lobby",left:0,seeker:null,round:0,firstFound:null,nextSeeker:null,times:{hide:45,seek:60}},t=new Lc({onMsg:d,onJoin:o,onLeave:a,onLost:y,onStatus:()=>i.render()});e.net=t,e.me=t.token;let n=0,s=0,r=()=>e.players.get(t.token);function o(A,_){let S=e.players.get(A);S?(clearTimeout(S.gone),S.gone=null,S.name=_||S.name):(S={id:A,name:_||`Elf ${e.players.size+1}`,role:e.phase==="lobby"?"elf":"wait",found:!1,st:null},e.players.set(A,S)),t.send(A,{t:"hello",phase:e.phase,round:e.round,seeker:e.seeker,times:e.times,order:[...e.players.keys()]}),e.phase!=="lobby"&&S.role!=="wait"&&t.send(A,h()),i.render()}function a(A){let _=e.players.get(A);_&&(clearTimeout(_.gone),_.gone=setTimeout(()=>c(A),Fv*1e3))}function c(A){e.players.get(A)&&(e.players.delete(A),i.render(),e.phase!=="lobby"&&e.phase!=="results"&&A===e.seeker?p("elves"):f())}function l(A,_){let S=e.players.get(A);S&&(_.t==="me"?(S.st=_.s,S.at=performance.now()):_.t==="name"?(S.name=String(_.name||"").slice(0,12)||S.name,i.render()):_.t==="got"?u(_.id,A):_.t==="shh"?(t.broadcast({t:"shh",id:A,at:_.at}),i.onShh(A,_.at)):_.t==="leave"&&(t.kick(A),c(A)))}let h=()=>({t:"round",seeker:e.seeker,n:e.round,hide:e.times.hide,seek:e.times.seek,order:[...e.players.keys()],roles:[...e.players.values()].map(A=>[A.id,A.role])});e.startRound=()=>{if(!e.host||e.players.size<2)return!1;let A=[...e.players.keys()],_=e.nextSeeker&&e.players.has(e.nextSeeker)?e.nextSeeker:null;if(!_){let E=A.indexOf(e.seeker);_=E<0?A[Math.floor(Math.random()*A.length)]:A[(E+1)%A.length]}e.seeker=_,e.round++,e.firstFound=null,e.nextSeeker=null;for(let E of e.players.values())E.role=E.id===_?"seeker":"elf",E.found=!1;e.phase="hide",e.left=e.times.hide;let S=h();return t.broadcast(S),m(S),!0};function u(A,_){let S=e.players.get(A);if(!e.host||e.phase!=="seek"||_!==e.seeker||!S||S.role!=="elf"||S.found)return;S.found=!0;let E=!e.firstFound;E&&(e.firstFound=A),t.broadcast({t:"found",id:A,by:_,first:E}),i.onFound(A,_,E),f()}function f(){if(!e.host||e.phase!=="seek")return;let A=[...e.players.values()].filter(_=>_.role==="elf");A.length&&A.every(_=>_.found)&&p("seeker")}function p(A){e.phase="results",s=Ov,e.nextSeeker=e.firstFound;let _={t:"end",winner:A,found:[...e.players.values()].filter(S=>S.found).map(S=>S.id),firstFound:e.firstFound,next:e.firstFound||null};t.broadcast(_),i.onEnd(_)}function g(A){e.phase==="hide"||e.phase==="seek"?(e.left-=A,e.left<=0&&(e.phase==="hide"?(e.phase="seek",e.left=e.times.seek,t.broadcast({t:"phase",phase:"seek"}),i.onPhase("seek")):p("elves"))):e.phase==="results"&&(s-=A)<=0&&(e.startRound()||(e.phase="lobby",t.broadcast({t:"phase",phase:"lobby"}),i.onPhase("lobby")));let _=r();_&&(_.st=i.myState(),_.at=performance.now()),!((n+=A)<g0)&&(n=0,t.conns.size&&t.broadcast({t:"s",ph:e.phase,left:Eu(e.left),P:[...e.players.values()].map(S=>[S.id,S.name,S.role,S.found?1:0,S.st])}))}function x(A){if(A.t==="hello")e.phase=A.phase,e.round=A.round,e.seeker=A.seeker,e.times=A.times,i.render();else if(A.t==="round")m(A);else if(A.t==="phase")e.phase=A.phase,i.onPhase(A.phase);else if(A.t==="found"){let _=e.players.get(A.id);_&&(_.found=!0),i.onFound(A.id,A.by,A.first)}else if(A.t==="shh")i.onShh(A.id,A.at);else if(A.t==="end")e.phase="results",i.onEnd(A);else if(A.t==="s"){e.phase=A.ph,e.left=A.left;let _=performance.now(),S=new Set;for(let[E,I,U,b,C]of A.P){S.add(E);let k=e.players.get(E);k||(k={id:E},e.players.set(E,k)),Object.assign(k,{name:I,role:U,found:!!b}),E!==t.token&&C&&(k.prev=k.cur,k.cur={st:C,at:_})}for(let E of[...e.players.keys()])S.has(E)||e.players.delete(E);i.render()}}function m(A){e.phase="hide",e.round=A.n,e.seeker=A.seeker,e.times={hide:A.hide,seek:A.seek},e.left=A.hide,e.firstFound=null;for(let[_,S]of A.roles){let E=e.players.get(_);E||(E={id:_},e.players.set(_,E)),E.role=S,E.found=!1}i.onRound({seeker:A.seeker,n:A.n,hide:A.hide,seek:A.seek,order:A.order})}function d(A,_){e.host?l(A,_):x(_)}function y(A,_){!e.on||e.host||(e.on=!1,e.players.clear(),i.onLost(_||"Lost the host"))}return e.update=A=>{if(!e.on)return;if(e.host){g(A);return}if((e.phase==="hide"||e.phase==="seek")&&(e.left-=A),(n+=A)<g0)return;n=0;let _=i.myState();_&&t.toHost({t:"me",s:_.map(Eu)})},e.others=()=>{let A=performance.now()-120,_=[];for(let S of e.players.values()){if(S.id===t.token)continue;let E=null;if(e.host)E=S.st;else if(S.cur){let I=S.prev||S.cur,U=S.cur,b=U.at>I.at?Math.max(0,Math.min(1,(A-I.at)/(U.at-I.at))):1;E=I.st&&U.st&&I.st[0]===U.st[0]?U.st.map((C,k)=>typeof C=="number"&&k>0&&k<5?I.st[k]+(C-I.st[k])*b:C):U.st}E&&_.push({id:S.id,name:S.name,role:S.role,found:S.found,st:E})}return _},e.myRole=()=>{var A;return((A=r())==null?void 0:A.role)||(e.seeker===t.token?"seeker":"elf")},e.name=A=>{var _;return((_=e.players.get(A))==null?void 0:_.name)||"An elf"},e.sendFound=A=>{e.host?u(A,t.token):t.toHost({t:"got",id:A})},e.sendShh=A=>{let _=A.map(Eu);e.host?t.broadcast({t:"shh",id:t.token,at:_}):t.toHost({t:"shh",at:_})},e.setName=A=>{t.name=A;let _=r();_&&(_.name=A||_.name),e.on&&!e.host&&t.toHost({t:"name",name:A}),i.render()},e.hostGame=async(A,_)=>{e.leave(),t.name=A,e.times=_;try{await t.host()}catch{return i.render(),null}return e.on=!0,e.host=!0,e.phase="lobby",e.round=0,e.seeker=null,e.players.set(t.token,{id:t.token,name:A||"Host",role:"elf",found:!1,st:null}),i.render(),t.code},e.join=async(A,_)=>{e.leave(),t.name=_;let S=!1;try{S=await t.join(bu(A))}catch{t.say("Couldn't get online")}return S&&(e.on=!0,e.host=!1,e.phase="lobby",e.players.set(t.token,{id:t.token,name:_||"Me",role:"elf"})),i.render(),S},e.leave=()=>{e.on&&!e.host&&t.toHost({t:"leave"});for(let A of e.players.values())clearTimeout(A.gone);e.on=e.host=!1,e.players.clear(),e.phase="lobby",e.round=0,e.seeker=null,t.leave(),i.render()},e.code=()=>t.code,e.status=()=>t.status,e}var g0,Ov,Fv,Eu,y0=ht(()=>{A0();g0=1/12,Ov=7,Fv=15,Eu=i=>typeof i=="number"?Math.round(i*1e3)/1e3:i});function Bv(i){let e=[];for(let n of i.tops){if(n.name==="sill"||n.x1-n.x0<.08||n.z1-n.z0<.08)continue;let[s,r]=n.pts?[(n.pts[0][0]+n.pts[2][0])/2,(n.pts[0][1]+n.pts[2][1])/2]:[(n.x0+n.x1)/2,(n.z0+n.z1)/2];if(n.name==="beam")for(let o=.2;o<1;o+=.2)e.push({x:n.x0+(n.x1-n.x0)*o,z:r,y:n.y1,how:"up"});else n.y1>.25&&e.push({x:s,z:r,y:n.y1,how:"up"});n.under!==void 0&&n.under>Fe.height+.03&&n.under<.8&&e.push({x:s,z:r,y:0,how:"under"})}let t=i.walls;for(let n=.05;n<1;n+=.1)for(let[s,r]of[[t.x0+.08,t.z0+(t.z1-t.z0)*n],[t.x1-.08,t.z0+(t.z1-t.z0)*n],[t.x0+(t.x1-t.x0)*n,t.z0+.08],[t.x0+(t.x1-t.x0)*n,t.z1-.08]])Mi(i,s,r,0)<.01&&e.push({x:s,z:r,y:0,how:"behind"});return e.filter(n=>Math.abs(Mi(i,n.x,n.z,n.y+.01)-n.y)<.02)}function kv(i,e,t,n){let s=e.x-i.x,r=e.z-i.z,o=Math.hypot(s,r);if(t.stuck=Math.hypot(i.x-t.x,i.y-t.y,i.z-t.z)<.15*n?t.stuck+n:0,t.x=i.x,t.y=i.y,t.z=i.z,t.round>0)return t.round-=n,{x:t.side*.9,y:-.8};if(t.stuck>.5)return t.stuck=0,t.round=.6+t.rand()*.6,t.side=t.rand()<.5?-1:1,{x:0,y:i.cling?1:0};if(i.cling)return{x:0,y:-1};let a=zv(Math.atan2(-s,-r)-i.yaw);return{x:Math.max(-1,Math.min(1,-a*3)),y:o<.04?0:-(Math.abs(a)>1.2?.2:o<.25?.5:1)}}function Gv(i,e,t,n,s,r){let o=Vr(t,n,Math.atan2(-(e.x-t),-(e.z-n))),a={x:t,y:0,z:n,stuck:0,round:0,side:1,rand:r},c=[];for(let l=0;l<s;l+=Xr)if(Rc(o,kv(o,e,a,Xr),Xr,i),c.push([o.x,o.y,o.z,o.yaw,o.walking,o.run,o.climbing?1:0,o.cling?1:0,o.air?1:0]),Hv(o,e))return c;return null}function _0(i,e,{sx:t,sz:n,time:s,hidden:r,rand:o=Math.random}){let a=Bv(i).map(h=>{let u=Math.hypot(h.x-t,h.z-n),f=(r(h.x,h.y+Fe.height/2,h.z)?2:0)+(h.how==="under"?1.5:h.how==="up"?Math.min(1.5,h.y):.5)+Math.min(1,u/3);return{...h,score:f+o()*1.5}}).filter(h=>Math.hypot(h.x-t,h.z-n)>1).sort((h,u)=>u.score-h.score),c=[],l=[...a].sort((h,u)=>Math.hypot(h.x-t,h.z-n)-Math.hypot(u.x-t,u.z-n));for(let h=0;h<e;h++){let u=0;for(let f of[...a.slice(0,30),...l]){if(c.some(y=>Math.hypot(y.spot.x-f.x,y.spot.z-f.z)<1.2))continue;if(++u>50)break;let p=Math.atan2(t-f.x,n-f.z)+(h%2?.5:-.5),g=t+Math.sin(p)*.75,x=n+Math.cos(p)*.75;if(Mi(i,g,x,0)>.01||i.blocks.some(y=>Mn(y,g,x,Fe.radius)))continue;let m=h*2,d=Gv(i,f,g,x,s-m,o);if(d){c.push({run:d,spot:f,wait:m});break}}}return c}function v0(i,e){if(e-=i.wait||0,e<0){let o=i.run[0];return{x:o[0],y:o[1],z:o[2],yaw:o[3],walking:0,run:0,climbing:!1,hanging:!1,air:!1,sit:0,asleep:!1,moving:!0}}let t=Math.min(i.run.length-1,Math.floor(e/Xr)),n=i.run[t],s=e/Xr>=i.run.length,r=s?e-i.run.length*Xr:-1;return{x:n[0],y:n[1],z:n[2],yaw:n[3],walking:s?0:n[4],run:s?0:n[5],climbing:!s&&!!n[6],hanging:!s&&!!n[7],air:!s&&!!n[8],sit:r<0?0:Math.min(1,r/.7),asleep:r>1,moving:!s}}var Xr,zv,Hv,M0=ht(()=>{Wr();Xr=1/30,zv=i=>Math.atan2(Math.sin(i),Math.cos(i));Hv=(i,e)=>!i.air&&!i.cling&&Math.hypot(e.x-i.x,e.z-i.z)<.08&&Math.abs(i.y-e.y)<.03});function zn(i,e){return qr||(qr=new Po(new Uint8Array([90,170,255]),3,1,Ph),qr.minFilter=qr.magFilter=Ot,qr.needsUpdate=!0),new cc({color:i,gradientMap:qr,...e?{map:e}:{}})}function Xv(i,e){let t=document.createElement("canvas");t.width=512,t.height=256;let n=t.getContext("2d"),s=512,r=256;n.fillStyle=i,n.fillRect(0,0,s,r),n.fillStyle="rgba(0,0,0,0.18)";for(let u=0;u<s;u+=8)n.fillRect(u,r-34,4,34);n.fillRect(0,0,s,10);let o=e==="him"?["#c92a2a","#fff"]:["#f8f9fa","#2b8a3e"],a=70,c=56;n.fillStyle=o[0],n.fillRect(0,a,s,c),n.fillStyle=o[1],n.strokeStyle=o[1],n.lineWidth=7;for(let u=0;u<s;u+=32)e==="him"?(n.beginPath(),n.moveTo(u+16,a+8),n.lineTo(u+28,a+c/2),n.lineTo(u+16,a+c-8),n.lineTo(u+4,a+c/2),n.closePath(),n.fill()):(n.beginPath(),n.moveTo(u,a+c-14),n.lineTo(u+16,a+14),n.lineTo(u+32,a+c-14),n.stroke());n.fillStyle=o[e==="him"?1:0],n.fillRect(0,a-8,s,5),n.fillRect(0,a+c+3,s,5);let l=(u,f,p)=>{n.strokeStyle="#fff",n.lineWidth=4;for(let g=0;g<3;g++){let x=Math.sin(g*Math.PI/3)*p,m=Math.cos(g*Math.PI/3)*p;n.beginPath(),n.moveTo(u-m,f-x),n.lineTo(u+m,f+x),n.stroke()}};for(let u=0;u<s;u+=64)for(let[f,p]of[[160,0],[200,32]])e==="her"?l(u+p+16,f,11):(n.fillStyle="#fff",n.beginPath(),n.arc(u+p+16,f,5,0,Math.PI*2),n.fill());let h=new as(t);return h.colorSpace=ft,h.wrapS=ii,h.anisotropy=4,h}function qv(i,e,t){let n=Su.subVectors(e,i),s=Math.min(n.length(),ms+Dc-.001);n.normalize();let r=(ms*ms-Dc*Dc+s*s)/(2*s),o=Math.sqrt(Math.max(0,ms*ms-r*r)),a=t.clone().addScaledVector(n,-t.dot(n)).normalize(),c=i.clone().addScaledVector(n,r).addScaledVector(a,o),l=new fn().setFromUnitVectors(E0,b0.subVectors(c,i).normalize()),h=b0.subVectors(e,c).normalize().applyQuaternion(l.clone().invert());return{sh:l,el:new fn().setFromUnitVectors(E0,h.clone())}}function S0(i=Zr[0]){let e=i==="her",t=e?{jumper:"#c0392b",sleeve:12597547,legs:3878730,boot:13148794,cuff:16446440,hair:14394698,skin:16175022}:{jumper:"#2f8f46",sleeve:3116870,legs:3366041,boot:5978660,cuff:3116870,hair:4007444,skin:15713180},n=zn(t.skin),s=zn(t.hair),r=zn(16447214),o=zn(1907226),a=zn(t.sleeve),c=zn(t.legs),l=zn(t.boot),h=zn(t.cuff),u=zn(15895692),f=zn(13644077),p=new Ze,g=new Ze,x=new Ze;p.add(g),g.add(x),x.position.y=Yr;let m=new bt(1,20,14),d=(F,Q,L,z,$,ie,te=1,ee=te,he=te)=>{let fe=new mt(F,Q);return fe.position.set(z,$,ie),fe.scale.set(te,ee,he),fe.castShadow=!0,L.add(fe),fe},y=(F,Q,L,z,$,ie,te=ie,ee=ie)=>d(m,F,Q,L,z,$,ie,te,ee),A=F=>F-Yr,_=[-1,1].map(F=>{let Q=new Ze;Q.position.set(F*.1,Yr,0),g.add(Q),d(new Bs(.078,jr-.08,4,12),c,Q,0,-jr/2,0);let L=new Ze;L.position.y=-jr,Q.add(L),d(new Bs(.066,Kr-.06,4,12),e?l:c,L,0,-Kr/2,0);let z=new Ze;return z.position.y=-Kr,L.add(z),y(l,z,0,-.022,-.045,.078,.06,.135),e&&(d(new sn(.07,.024,8,18),h,L,0,-.1,0).rotation.x=Math.PI/2),{hip:Q,knee:L,ankle:z}}),S=e?[[.2,.74],[.215,.8],[.19,.9],[.165,1],[.175,1.1],[.185,1.2],[.175,1.28],[.15,1.35],[.09,1.39],[.05,1.41]]:[[.185,.76],[.205,.82],[.215,.92],[.22,1.02],[.22,1.12],[.215,1.22],[.195,1.3],[.155,1.37],[.09,1.41],[.05,1.42]],E=new No(S.map(([F,Q])=>new ge(F,A(Q))),28);d(E,zn(16777215,Xv(t.jumper,i)),x,0,0,0),y(c,x,0,A(.79),0,e?.19:.18,.1,.14),d(new sn(e?.19:.205,.025,8,28),zn(t.sleeve),x,0,A(e?.75:.77),0).rotation.x=Math.PI/2,d(new Je(.055,.06,.08,12),n,x,0,A(1.43),0),d(new sn(.065,.022,8,18),a,x,0,A(1.405),0).rotation.x=Math.PI/2;let I=new Ze;I.position.y=A(bn.y),x.add(I),y(n,I,0,0,0,bn.r,bn.r*1.02,bn.r*.97);let U=(F,Q,L=0)=>-(Math.sqrt(Math.max(0,bn.r*bn.r-F*F-Q*Q))*.97+L),b=rn.eye-bn.y;for(let F of[-1,1])y(o,I,F*.048,b,U(F*.048,b),.019,.026,.012),y(r,I,F*.048+.006,b+.009,U(F*.048,b,.009),.006),y(u,I,F*.082,b-.05,U(F*.082,b-.05,-.004),.026,.018,.012),y(o,I,F*.05,b+.046,U(F*.05,b+.046,.004),e?.022:.028,e?.006:.009,.008).rotation.z=F*(e?-.25:-.12),e||y(n,I,F*bn.r*.98,-.01,.005,.026,.038,.022);if(y(zn(e?15775894:15051394),I,0,b-.032,U(0,b-.032,.012),.024,.02,.02),d(new sn(.036,.0075,6,16,Math.PI),e?f:o,I,0,b-.075,U(0,b-.075,-.004)).rotation.set(-.35,0,Math.PI),e){let F=d(new bt(bn.r*1.07,22,14,0,Math.PI*2,0,Math.PI*.55),s,I,0,.004,.006);F.rotation.x=.42,y(s,I,0,-.1,.05,.155,.2,.105);for(let Q of[-1,1])y(s,I,Q*.118,-.075,-.005,.045,.13,.075);y(s,I,0,.088,U(0,.088,.004),.1,.045,.04).rotation.x=-.4,d(new sn(bn.r*1.14,.013,8,24,Math.PI),f,I,0,-.005,.005);for(let Q of[-1,1])y(r,I,Q*bn.r*1.08,-.01,.004,.035,.052,.05)}else{let F=d(new bt(bn.r*1.05,22,14,0,Math.PI*2,0,Math.PI*.62),s,I,0,0,.004);F.rotation.x=.62;for(let z of[-1,1])y(s,I,z*bn.r*.96,0,-.04,.018,.045,.03);let Q=new Ze;Q.position.set(0,.075,.012),Q.rotation.set(.22,0,0),I.add(Q),d(new sn(bn.r*.95,.034,10,28),r,Q,0,0,0).rotation.x=Math.PI/2,d(new Je(.075,bn.r*.97,.13,22),f,Q,0,.065,0),d(new yi(.078,.2,18),f,Q,.035,.2,.03).rotation.set(.35,0,-.55),y(r,Q,.12,.265,.085,.04)}let k=[-1,1].map(F=>{let Q=new Ze;Q.position.set(F*(e?.2:.225),A(Wv),0),x.add(Q),y(a,Q,0,-.01,0,.066),d(new Bs(.064,ms-.06,4,12),a,Q,0,-ms/2,0);let L=new Ze;L.position.y=-ms,Q.add(L),d(new Bs(.058,.2,4,12),a,L,0,-.12,0),d(new sn(.052,.018,8,16),e?r:a,L,0,-.245,0).rotation.x=Math.PI/2;let z=new Ze;z.position.y=-Dc,L.add(z),y(n,z,0,0,0,.05,.062,.03),y(n,z,F*.044,-.008,0,.018,.032,.018).rotation.z=F*-.5;let $=new fn().setFromAxisAngle(Su.set(0,1,0),F*Math.PI/2),ie=new T(F*.05,A(rn.eye)+.005,U(F*.05,b,.035)),te=qv(Q.position,ie,new T(F*.8,-1.4,-.2)),ee=new fn().setFromAxisAngle(Su.set(0,0,1),-F*.2),he=te.sh.clone().multiply(te.el).invert().multiply(ee);return{sh:Q,el:L,hand:z,side:F,rest:$,count:{sh:te.sh,el:te.el,hand:he}}});return p.userData={look:i,lift:g,body:x,head:I,arms:k,legs:_},p}function w0(i,e,{counting:t=!1,crouch:n=!1}={}){let s=i.userData,{lift:r,body:o,head:a,arms:c,legs:l}=s,h=s.t===void 0?0:Math.min(.25,e-s.t),u=s.x===void 0?0:Math.hypot(i.position.x-s.x,i.position.z-s.z);s.t=e,s.x=i.position.x,s.z=i.position.z,s.walk=(s.walk||0)+((h>0?Math.min(1,u/h/rn.walk):0)-(s.walk||0))*Math.min(1,h*8),s.step=(s.step||0)+u*5.5;let f=t?0:s.walk*(n?.4:1),p=Math.sin(s.step)*.5*f,g=n?1.3:0,x=n?-2:0;l.forEach(({hip:y,knee:A,ankle:_},S)=>{let E=S?-p:p;y.rotation.x=g+E,A.rotation.x=x-Math.max(0,-E)*.9,_.rotation.x=-(y.rotation.x+A.rotation.x)});let m=g,d=g+x;r.position.set(0,n?-(Yr-jr*Math.cos(m)-Kr*Math.cos(d)-(Yr-jr-Kr)):Math.abs(p)*.03,n?jr*Math.sin(m)+Kr*Math.sin(d):0),o.rotation.set(n?-.45:-.05*f,0,t?Math.sin(e*1.3)*.03:0),o.position.y=Yr+(t||f>.1?0:Math.sin(e*2.1)*.004),a.rotation.x=n?.35:0;for(let{sh:y,el:A,hand:_,side:S,rest:E,count:I}of c){if(t){y.quaternion.copy(I.sh),A.quaternion.copy(I.el),_.quaternion.copy(I.hand);continue}y.rotation.set(n?.7:S*p,0,S*.16,"XYZ"),A.rotation.set(n?.6:.15+.35*f,0,0),_.quaternion.copy(E)}}var Zr,Vv,bn,Yr,jr,Kr,Wv,ms,Dc,Su,b0,E0,qr,T0=ht(()=>{Cn();Wr();Zr=["him","her"],Vv=rn.eye/.93,bn={y:Vv-.135,r:.135},Yr=.8,jr=.38,Kr=.34,Wv=1.34,ms=.28,Dc=.31,Su=new T,b0=new T,E0=new T(0,-1,0),qr=null});function Nc(){let i=new Ze,e=new Ze;i.add(e);let t=(g,x=.6)=>new Rn({color:g,roughness:x}),n=t(14034984,.5),s=t(2853438),r=t(16316922,.8),o=t(15976869,.7),a=t(1710618,.4),c=(g,x,m,d,y,A=e,_=0,S=0)=>{let E=new mt(g,x);return E.position.set(m,d,y),E.rotation.set(_,0,S),E.castShadow=!0,A.add(E),E},l=Fe.height/.12,h=[-1,1].map(g=>{let x=new Ze;return x.position.set(g*.009,.034,0),e.add(x),c(new Je(.0065,.006,.03,10),s,0,-.016,0,x),c(new bt(.0085,10,8),n,0,-.031,-.004,x).scale.set(1,.6,1.5),x});c(new Je(.016,.019,.034,16),n,0,.05,0),c(new Je(.0195,.0195,.005,16),a,0,.036,0),c(new Tn(.008,.007,.004),t(16765503,.3),0,.036,-.019),c(new sn(.0145,.0045,8,20),r,0,.067,0,e,Math.PI/2);let u=[-1,1].map(g=>{let x=new Ze;return x.position.set(g*.019,.063,0),e.add(x),c(new Je(.005,.0055,.026,8),n,0,-.013,0,x),c(new bt(.0055,8,6),r,0,-.027,0,x),x.rotation.z=g*.25,x});c(new bt(.017,16,12),o,0,.083,0);let f=[-.006,.006].map(g=>c(new bt(.0022,8,6),a,g,.086,-.0155));for(let g of[-.009,.009])c(new bt(.003,8,6),t(15764620),g,.079,-.013);c(new bt(.0035,8,6),t(15247496),0,.081,-.017),c(new Je(.0175,.0175,.005,16),r,0,.096,0);let p=c(new yi(.0165,.034,16),n,.002,.113,.002,e,.25,-.2);return c(new bt(.0055,10,8),r,.006,.13,.006),i.scale.setScalar(l),i.userData.parts={legs:h,arms:u,body:e,eyes:f},i}function Uc(i,e,{walking:t=0,run:n=0,climbing:s=!1,hanging:r=!1,air:o=!1,sit:a=0,asleep:c=!1,laugh:l=!1}={}){let{legs:h,arms:u,body:f,eyes:p}=i.userData.parts;f.rotation.x=0,f.position.set(0,0,0);let g=c&&!l;for(let A of p)A.scale.set(g?1.3:1,g?.16:1,1);if(l){h[0].rotation.x=h[1].rotation.x=0,u[0].rotation.x=u[1].rotation.x=-.7+Math.sin(e*22)*.15,f.rotation.x=.25+Math.sin(e*22)*.05,f.position.y=Math.abs(Math.sin(e*11))*.006;return}if(a>0){let A=a*a*(3-2*a),_=(S,E)=>S+(E-S)*A;h[0].rotation.x=_(h[0].rotation.x*0,1.45),h[1].rotation.x=_(0,1.45),u[0].rotation.x=u[1].rotation.x=_(0,.9),f.position.y=_(0,-.028),f.position.z=_(0,.004),f.rotation.x=c?.12+Math.sin(e*1.3)*.04:0;return}let x=14+10*n,m=.7+.35*n,d=Math.sin(e*x),y=s?Math.sin(e*12)*.6:r?.15:Math.min(t,1)*d*m;if(h[0].rotation.x=y,h[1].rotation.x=-y,s||r){let A=s?Math.sin(e*12)*.5:0;u[0].rotation.x=-2.6+A,u[1].rotation.x=-2.6-A}else o?u[0].rotation.x=u[1].rotation.x=-1.6:(u[0].rotation.x=y*(.6+.9*n),u[1].rotation.x=-y*(.6+.9*n));f.rotation.x=-.35*n,r&&c&&(f.rotation.x=.04+Math.sin(e*1.3)*.02),t&&!o&&!s&&!r&&(f.position.y=Math.abs(d)*(.003+.004*n))}var R0=ht(()=>{Cn();Wr()});function I0(i){let e=[...i.flyBoxes],t=new Map;for(let c of i.things){let l=c.boxes.filter(({b:f})=>i.flyBoxes.includes(f));if(c.gone||l.length!==1||c.name==="Stairs")continue;let h=l[0].b,u=Yv(c.at,h.under);u.length&&t.set(h,u)}e.splice(0,e.length,...e.flatMap(c=>t.get(c)||[c]));let n=lt-.004;e.push({x0:St,x1:Xe,z0:Rt-.1,z1:Rt+.1,y1:n,under:wt,name:"beam"}),e.push({x0:ot,x1:Xe,z0:i.beam2-.1,z1:i.beam2+.1,y1:n,under:wt,name:"beam"});for(let c of i.things)if(!c.gone&&/^Window/.test(c.name)){c.at.updateMatrixWorld(!0);let l=[[-.45,0],[.45,0],[-.45,.18],[.45,.18]].map(([h,u])=>new T(h,0,u).applyMatrix4(c.at.matrixWorld));e.push({x0:Math.min(...l.map(h=>h.x)),x1:Math.max(...l.map(h=>h.x)),z0:Math.min(...l.map(h=>h.z)),z1:Math.max(...l.map(h=>h.z)),y1:1.845,under:1.83,name:"sill"})}let s=i.things.find(c=>c.name==="Stairs"),r=s?s.at.position.x-s.start.x:0,o=s?s.at.position.z-s.start.z:0;if(!(s!=null&&s.gone))for(let c=0;c<In.n;c++)e.push({x0:In.x-(c+1)*In.run+r,x1:In.x-c*In.run+r,z0:In.z0+o,z1:In.z1+o,y1:(c+1)*In.rise,name:"stairs"});let a=(c,l)=>Math.abs(l-Rt)<.14||Math.abs(l-i.beam2)<.14&&c>ot?wt:lt;return{walls:i.whole,tops:e,shells:i.flyBoxes,blocks:i.bumpers,ceiling:a}}function Yv(i,e){i.updateMatrixWorld(!0);let t=[];return i.traverse(n=>{if(!n.isMesh)return;for(let o=n;o;o=o.parent)if(!o.visible)return;let s=new dt().setFromObject(n,!0);if(s.isEmpty()||s.max.x-s.min.x<.03&&s.max.z-s.min.z<.03||e!==void 0&&s.min.y<e-.01)return;let r={x0:s.min.x,x1:s.max.x,z0:s.min.z,z1:s.max.z,y1:s.max.y,...e!==void 0?{under:e}:{}};if(C0.set(0,1,0).transformDirection(n.matrixWorld),C0.y>.999){n.geometry.boundingBox||n.geometry.computeBoundingBox();let o=n.geometry.boundingBox;r.pts=[[o.min.x,o.min.z],[o.max.x,o.min.z],[o.max.x,o.max.z],[o.min.x,o.max.z]].map(([a,c])=>(wu.set(a,o.min.y,c).applyMatrix4(n.matrixWorld),[wu.x,wu.z]))}t.push(r)}),t}var wu,C0,P0=ht(()=>{Cn();_u();wu=new T,C0=new T});var L0,D0,N0=ht(()=>{L0='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-8 -8 526 704" width="526" height="704"><defs><path id="s" transform="translate(0,700) scale(.1,-.1)" d="M1275 6966 c-153 -103 -255 -362 -325 -826 -28 -186 -47 -198 -139 -91 -154 178 -355 173 -416 -9 -41 -124 -4 -219 185 -470 153 -204 192 -283 256 -529 64 -247 8 -328 -233 -330 -133 -2 -406 -102 -498 -182 -98 -87 -134 -262 -90 -444 8 -33 15 -85 15 -116 1 -294 180 -744 380 -954 50 -53 61 -71 84 -147 74 -244 205 -322 454 -271 105 22 113 16 123 -94 3 -43 12 -107 18 -143 74 -405 198 -635 471 -872 186 -161 379 -497 420 -729 6 -35 28 -138 50 -229 22 -91 54 -230 71 -310 17 -80 38 -162 46 -182 15 -38 15 -38 1464 -38 865 0 1449 4 1449 9 0 20 -63 61 -142 93 -106 43 -153 89 -247 243 -41 66 -106 163 -146 215 -39 52 -82 113 -95 135 -13 22 -53 80 -89 129 -36 49 -79 111 -96 137 -63 100 -172 258 -243 353 -42 55 -91 125 -111 157 -20 32 -52 82 -72 111 -20 29 -76 112 -123 183 -48 72 -108 158 -134 192 -181 239 -218 305 -575 1023 -143 289 -269 538 -280 553 -10 16 -65 112 -122 215 -56 103 -135 241 -175 307 -40 65 -95 167 -122 226 -27 60 -66 139 -86 176 -85 155 -201 439 -286 699 -45 136 -73 320 -86 554 -6 96 -17 216 -25 265 -8 50 -21 176 -30 280 -44 533 -65 605 -200 705 -78 58 -220 60 -300 6z"/><clipPath id="cs"><use href="#s"/></clipPath><clipPath id="cm"><path d="M93,-20 L93,100 C96,130 101,165 103,200 C103,240 99,280 98,320 C98,360 103,405 111,440 L111,720 L530,720 L530,-20 Z"/></clipPath><clipPath id="cf"><path d="M-20,220 L94,222 C90,250 88,280 84,310 C88,335 88,365 81,386 C76,399 62,404 48,400 L-20,420 Z"/></clipPath><clipPath id="cr"><path d="M84,310 C92,318 98,332 101,350 L104,420 C98,424 90,420 86,410 C84,395 88,350 84,310 Z"/></clipPath></defs><g clip-path="url(#cs)"><use href="#s" fill="#ffc896"/><rect x="60" y="215" width="50" height="240" fill="#c9744a"/><path d="M84,310 C92,318 98,332 101,350 L104,420 C98,424 90,420 86,410 C84,395 88,350 84,310 Z" fill="#ffc896"/><path d="M50,392 L115,392 L115,445 L50,445 Z" fill="#ec9c6c"/><path transform="translate(-8,2)" d="M93,-20 L93,100 C96,130 101,165 103,200 C103,240 99,280 98,320 C98,360 103,405 111,440 L111,720 L530,720 L530,-20 Z" fill="#ec9c6c"/><g clip-path="url(#cf)"><rect x="-20" y="210" width="130" height="210" fill="#ec9c6c"/><use href="#s" fill="#ffc896" transform="translate(-9,-10)"/> <ellipse cx="58" cy="385" rx="26" ry="22" fill="#ff9e86" opacity=".55"/></g><g clip-path="url(#cm)"><rect x="60" y="-20" width="470" height="740" fill="#ec9c6c"/><use href="#s" fill="#ffc896" transform="translate(-34,4)"/> <path d="M112,20 C135,-8 175,-2 182,30 C150,16 130,22 112,20Z" fill="#ff9e86" opacity=".55"/></g><g transform="rotate(14 28 366)"><ellipse cx="30" cy="364" rx="11" ry="21" fill="#ffe6d6" stroke="#3b1c0f" stroke-width="4.5"/></g><g transform="rotate(-8 93 396)"><ellipse cx="94" cy="398" rx="8" ry="15" fill="#ffe6d6" stroke="#3b1c0f" stroke-width="4"/></g><path d="M121,28 C126,10 170,6 176,26 C181,42 179,62 173,69 C155,73 137,73 126,68 C120,58 119,40 121,28 Z" fill="#ffe6d6" stroke="#3b1c0f" stroke-width="6" stroke-linejoin="round"/><path d="M126,66 C124,50 124,38 127,30" fill="none" stroke="#f6c9ab" stroke-width="7" stroke-linecap="round"/><path d="M149,14 C162,13 171,18 172,30 C166,24 158,20 149,14Z" fill="#fff"/><path d="M93,103 C97,132 101,165 103,200 C103,240 99,280 98,320 C98,360 103,405 110,438" fill="none" stroke="#3b1c0f" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M94,226 C90,250 88,280 84,310" fill="none" stroke="#3b1c0f" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M84,310 C89,335 88,365 81,386 C76,399 62,404 49,400" fill="none" stroke="#3b1c0f" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M44,250 C56,260 67,276 74,298" fill="none" stroke="#3b1c0f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M82,396 C86,410 96,424 108,432" fill="none" stroke="#3b1c0f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M60,160 C67,156 76,150 84,142" fill="none" stroke="#3b1c0f" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M127,114 C143,120 163,120 178,112" fill="none" stroke="#3b1c0f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M126,131 C143,138 165,137 180,128" fill="none" stroke="#3b1c0f" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M118,222 C128,232 150,232 165,221" fill="none" stroke="#3b1c0f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g><use href="#s" fill="none" stroke="#3b1c0f" stroke-width="80" stroke-linejoin="round"/></svg>',D0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-110 -16 1626 1286" width="1626" height="1286"><defs><path id="s" transform="translate(0,1270) scale(.2,-.2)" d="M4150 6302 c-246 -123 -194 -738 97 -1144 26 -36 64 -93 85 -125 20 -32 68 -94 107 -137 38 -44 87 -111 107 -150 20 -39 69 -114 108 -166 266 -356 268 -362 99 -382 -43 -5 -121 -14 -173 -20 -112 -14 -483 -13 -1290 2 -828 15 -1148 16 -1265 1 -151 -18 -290 -30 -495 -40 -102 -6 -201 -13 -220 -16 -250 -42 -501 -100 -565 -130 -218 -103 -263 -330 -101 -503 79 -84 63 -106 -84 -116 -52 -3 -120 -10 -150 -16 -30 -5 -91 -14 -135 -19 -269 -32 -245 5 -245 -381 0 -359 0 -360 73 -360 82 0 93 -38 37 -130 -88 -145 -79 -260 29 -381 92 -104 192 -133 576 -170 457 -44 465 -45 482 -61 17 -18 18 -35 8 -139 -15 -149 64 -266 229 -337 328 -142 834 -261 1291 -303 55 -5 136 -13 180 -19 44 -6 125 -15 180 -20 242 -24 288 -31 425 -68 80 -22 181 -54 225 -72 44 -18 136 -52 205 -75 69 -23 169 -61 224 -84 93 -40 364 -110 536 -140 36 -6 93 -15 128 -21 65 -12 785 -16 802 -5 13 8 184 25 350 36 74 4 209 13 300 19 325 21 393 13 530 -66 85 -49 124 -80 224 -180 118 -117 299 -271 353 -299 56 -29 53 -103 53 1359 0 1516 8 1359 -72 1409 -28 17 -459 585 -564 743 -33 49 -70 103 -81 120 -12 16 -56 83 -99 149 -231 356 -435 596 -696 819 -76 64 -190 174 -255 244 -349 376 -511 537 -618 617 -44 33 -134 112 -201 175 -67 63 -140 127 -162 142 -42 27 -63 54 -137 170 -135 212 -321 328 -435 270z"/><clipPath id="c"><use href="#s"/><path d="M0,604 C-50,606 -86,640 -86,680 C-86,722 -48,756 0,754 L40,754 L40,604 Z"/></clipPath></defs><g fill="#3b1c0f" stroke="#3b1c0f" stroke-linejoin="round"><use href="#s" stroke-width="150"/><path d="M0,604 C-50,606 -86,640 -86,680 C-86,722 -48,756 0,754 L40,754 L40,604 Z" stroke-width="30"/></g><g fill="#ec9c6c"><use href="#s"/><path d="M0,604 C-50,606 -86,640 -86,680 C-86,722 -48,756 0,754 L40,754 L40,604 Z"/></g><g clip-path="url(#c)"><g fill="#ffc896" transform="translate(-24,-30)"><use href="#s"/><path d="M0,604 C-50,606 -86,640 -86,680 C-86,722 -48,756 0,754 L40,754 L40,604 Z"/></g><path d="M972,505 C925,545 895,620 872,730 C858,860 900,1000 985,1130 C1000,1160 1300,1180 1520,1100 L1520,700 C1400,520 1200,420 1100,420 C1040,430 1000,470 972,505Z" fill="#f7b184" opacity=".5"/><path d="M138,590 C260,592 460,600 612,612" fill="none" stroke="#3b1c0f" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M36,756 C160,757 400,760 572,768" fill="none" stroke="#3b1c0f" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M250,893 C350,882 500,907 600,905 C632,920 660,975 672,1018" fill="none" stroke="#3b1c0f" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M300,455 C306,490 306,540 300,585" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M470,445 C476,490 476,545 470,595" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M180,612 C186,650 186,705 180,748" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M385,612 C392,650 392,710 385,755" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M226,770 C232,810 232,860 226,886" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M410,772 C416,810 416,860 410,888" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M455,915 C461,950 461,1000 452,1040" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M560,915 C566,950 566,1010 556,1055" fill="none" stroke="#3b1c0f" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M976,425 C988,450 990,480 972,505" fill="none" stroke="#3b1c0f" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M972,505 C925,545 895,620 872,730 C858,860 900,1000 985,1130" fill="none" stroke="#3b1c0f" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M640,640 C720,660 810,700 868,735" fill="none" stroke="#3b1c0f" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M620,830 C720,845 810,870 874,905" fill="none" stroke="#3b1c0f" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M920,120 C940,150 960,170 985,190" fill="none" stroke="#3b1c0f" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'});function jv(i,e,t,n){i.src=e;let s=new Image;s.onload=()=>{try{let r=document.createElement("canvas");r.width=Math.round(t*n),r.height=t,r.getContext("2d").drawImage(s,0,0,r.width,r.height),i.src=r.toDataURL("image/png")}catch(r){console.warn("cartoon hand:",r)}},s.src=e}var Tu,Oc,U0,O0,F0,Fc,z0=ht(()=>{N0();Tu=[.82,1.02],Oc=[.103,.146],U0=526/704,O0=i=>`data:image/svg+xml,${encodeURIComponent(i)}`,F0=()=>O0(D0);Fc=class{constructor(e){this.img=e,jv(e,O0(L0),1200,U0),this.walkT=0,this.lag=0,this.aim=0,this.kick=0,this.lastYaw=null}update(e,t,n,s,r=innerWidth/2,o=innerHeight/2){this.walkT+=e*(6+4*t)*(t>.05?1:0);let a=this.lastYaw===null?0:Math.atan2(Math.sin(n-this.lastYaw),Math.cos(n-this.lastYaw))/Math.max(e,.001);this.lastYaw=n,this.lag+=(Math.max(-2,Math.min(2,a))*.04-this.lag)*(1-Math.exp(-e*8)),this.aim+=((s?1:0)-this.aim)*(1-Math.exp(-e*9)),this.kick=Math.max(0,this.kick-e*5);let c=this.aim,l=t*(1-c*.7),h=innerWidth,u=innerHeight,f=u*(Tu[0]+(Tu[1]-Tu[0])*c),p=f*U0,g=h*.8,x=u*.7,m=r+u*.015,d=o+u*.08,y=g+(m-g)*c+Math.cos(this.walkT)*u*.012*l+this.lag*u*.25,A=x+(d-x)*c+Math.abs(Math.sin(this.walkT))*u*.02*l-this.kick*u*.03,_=-18-10*c-this.kick*9+Math.sin(this.walkT)*2*l;Object.assign(this.img.style,{width:`${p}px`,height:`${f}px`,left:`${y-p*Oc[0]}px`,top:`${A-f*Oc[1]}px`,transformOrigin:`${p*Oc[0]}px ${f*Oc[1]}px`,transform:`rotate(${_}deg)`})}show(e){this.img.style.display=e?"block":"none",e||(this.lastYaw=null)}bang(){this.kick=1}}});function B0(i,e,t){let n=Math.hypot(i,e);if(!n)return[0,0];let s=Math.min(n,t)/n/t;return[i*s,e*s]}var k0=ht(()=>{});function Cu(){try{if(!Zt){Zt=new(window.AudioContext||window.webkitAudioContext),at=Zt.createGain(),at.gain.value=G0?1:0,at.connect(Zt.destination),Ru=Zt.createBuffer(1,Zt.sampleRate,Zt.sampleRate);let i=Ru.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1}Zt.state==="suspended"&&Zt.resume()}catch{Zt=null}return Zt}function pt(i,e,t,n,s,r){let o=Zt.createGain();return o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(t,i+n),o.gain.setValueAtTime(t,i+n+s),o.gain.exponentialRampToValueAtTime(1e-4,i+n+s+r),o.connect(e),o}function Gt(i,e,t,n,s){let r=Zt.createOscillator();if(r.type=i,typeof e=="number")r.frequency.setValueAtTime(e,t);else{r.frequency.setValueAtTime(e[0][1],t);for(let[o,a]of e.slice(1))r.frequency.linearRampToValueAtTime(a,t+o)}return r.connect(s),r.start(t),r.stop(t+n+.05),r}function Vt(i,e,t,n=1){let s=Zt.createBiquadFilter();return s.type=i,s.frequency.value=e,s.Q.value=n,s.connect(t),s}function ci(i,e,t){let n=Zt.createBufferSource();return n.buffer=Ru,n.loop=!0,n.connect(t),n.start(i,Math.random()*.5),n.stop(i+e+.05),n}function H0(i,e,t,n,s){let r=Zt.createOscillator(),o=Zt.createGain();r.frequency.value=n,o.gain.value=s,r.connect(o).connect(i.frequency),r.start(e),r.stop(e+t+.05)}function Dt(i){if(V0())try{Kv[i](Zt.currentTime+.005)}catch{}}function zc(i=1){if(!(!V0()||i<=.02))try{let e=Zt.currentTime+.01,t=Math.min(1,i);ci(e,1,Vt("bandpass",3400,pt(e,at,.5*t,.06,.62,.3),1.4)),ci(e,1,Vt("highpass",6e3,pt(e,at,.12*t,.06,.62,.3)))}catch{}}var Zt,at,Ru,G0,V0,Cb,Kv,Iu=ht(()=>{Zt=null,at=null,Ru=null,G0=!0;V0=()=>G0?Cu():null;Cb=(()=>{let i=new Float32Array(1024);for(let e=0;e<1024;e++){let t=e/511.5-1;i[e]=Math.tanh(2.2*t)/Math.tanh(2.2)}return i})(),Kv={moo(i){let e=pt(i,Vt("lowpass",650,at,3),.35,.12,.6,.3),t=Gt("sawtooth",[[0,150],[.25,185],[.75,165],[1,115]],i,1.05,e);H0(t,i,1,5,3)},oink(i){for(let e of[0,.17]){let t=pt(i+e,Vt("lowpass",1100,at,4),.3,.01,.06,.06);Gt("square",[[0,240],[.1,170]],i+e,.13,t),ci(i+e,.1,Vt("bandpass",700,pt(i+e,at,.1,.01,.05,.04),2))}},baa(i){let e=pt(i,Vt("bandpass",1300,at,1.2),.5,.05,.45,.2),t=Gt("sawtooth",[[0,470],[.5,430],[.7,380]],i,.72,e);H0(t,i,.7,9,22)},cluck(i){for(let e of[0,.11,.2,.36]){let t=pt(i+e,Vt("bandpass",1400,at,2),.4,.005,.03,.04);Gt("triangle",[[0,1e3],[.06,620]],i+e,.08,t)}},swoosh(i){let e=Vt("bandpass",400,pt(i,at,.25,.15,.1,.35),1.5);e.frequency.setValueAtTime(300,i),e.frequency.exponentialRampToValueAtTime(3500,i+.45),ci(i,.65,e),Gt("sine",[[0,300],[.4,900]],i,.45,pt(i,at,.08,.05,.2,.15))},chime(i){[784,988,1319,1568].forEach((e,t)=>Gt("sine",e,i+t*.07,.5,pt(i+t*.07,at,.15,.005,.05,.4)))},bell(i){for(let[e,t]of[[660,.18],[1822,.06],[2640,.03]])Gt("sine",e,i,1.4,pt(i,at,t,.003,0,1.3))},boing(i){Gt("sine",[[0,180],[.08,420],[.3,260]],i,.32,pt(i,at,.18,.005,.1,.2))},click(i){for(let e of[0,.07])ci(i+e,.04,Vt("highpass",2500,pt(i+e,at,.2,.002,.01,.03)));Gt("square",300,i,.05,pt(i,Vt("lowpass",800,at),.08,.002,.02,.03))},yay(i){[[523,0],[659,.12],[784,.24],[1047,.38],[784,.56],[1047,.68]].forEach(([e,t])=>{let n=pt(i+t,at,t>.5?.14:.1,.01,t>.6?.3:.06,.2);Gt("triangle",e,i+t,.6,n),Gt("square",e/2,i+t,.3,pt(i+t,Vt("lowpass",900,at),.03,.01,.05,.1))})},clunk(i){Gt("square",[[0,160],[.06,90]],i,.1,pt(i,Vt("lowpass",700,at),.22,.003,.03,.08)),ci(i,.06,Vt("bandpass",1800,pt(i,at,.12,.002,.02,.05),2))},pop(i){Gt("sine",[[0,300],[.08,900],[.16,700]],i,.2,pt(i,at,.18,.005,.06,.12)),[1319,1568].forEach((e,t)=>Gt("sine",e,i+.1+t*.07,.3,pt(i+.1+t*.07,at,.06,.005,.03,.25)))},munch(i){for(let e of[0,.14,.3])ci(i+e,.07,Vt("bandpass",900+e*1e3,pt(i+e,at,.14,.005,.03,.05),3))},splash(i){let e=Vt("lowpass",2500,pt(i,at,.25,.01,.08,.4));e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.45),ci(i,.55,e),Gt("sine",[[0,500],[.15,250]],i,.18,pt(i,at,.05,.005,.05,.1))},laugh(i){[0,.14,.28,.42,.6].forEach((e,t)=>{let n=620-t*45;Gt("sawtooth",[[0,n*1.12],[.1,n]],i+e,.14,Vt("bandpass",1100,pt(i+e,at,.22,.01,.06,.06),1.5)),ci(i+e,.04,Vt("highpass",2e3,pt(i+e,at,.06,.003,.01,.03)))})},zoom(i){Gt("triangle",[[0,260],[.22,620]],i,.24,Vt("lowpass",1400,pt(i,at,.09,.02,.15,.06)));for(let e=0;e<6;e++)ci(i+e*.035,.02,Vt("highpass",3e3,pt(i+e*.035,at,.05,.002,.005,.012)));ci(i+.25,.03,Vt("bandpass",2200,pt(i+.25,at,.16,.002,.01,.03),3))},ting(i){for(let[e,t]of[[2093,.09],[3136,.05],[4186,.025]])Gt("sine",e,i,.7,pt(i,at,t,.002,0,.65))},nope(i){for(let e of[0,.13])Gt("sine",[[0,300],[.09,220]],i+e,.1,pt(i+e,at,.12,.005,.03,.06))},tick(i){Gt("triangle",[[0,900],[.05,1200]],i,.07,pt(i,at,.12,.003,.03,.04))}}});function X0({canUse:i}){let e={binoculars:Pc("binoculars"),magnifier:Pc("magnifier")},t=e.binoculars,n=e.magnifier,s=document.createElement("style");s.textContent=`
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
  #lens { position: fixed; left: 50%; top: 50%; width: ${Jr*100}vmin; height: ${Jr*100}vmin; margin: -${Jr*50}vmin 0 0 -${Jr*50}vmin; border-radius: 50%; pointer-events: none; z-index: 3; display: none;
          box-shadow: 0 0 0 0.5vmin #3d1f08, 0 0 0 1.8vmin #d4a017, 0 0 0 2.4vmin #7a4a0a, 0 1.5vmin 3vmin 2.4vmin rgba(0,0,0,0.45); }
  body.magnify #lens { display: block; }
  #lens::before { content: ''; position: absolute; inset: 8%; border-radius: 50%; border-top: 1.2vmin solid rgba(255,255,255,0.35); transform: rotate(-35deg); filter: blur(0.3vmin); } /* a glint */
  #lens::after { content: ''; position: absolute; left: 50%; top: 50%; width: 5.5vmin; height: 24vmin; margin-left: -2.75vmin; border-radius: 2.5vmin;
                 background: linear-gradient(90deg, #5a2d0c, #9c5a1f 45%, #5a2d0c); border-top: 3vmin solid #d4a017;
                 transform: rotate(45deg) translateY(${Jr*50+2}vmin); transform-origin: 50% 0; } /* the handle, down and left */`,document.head.appendChild(s);let r={};for(let[m,d,y]of[["binoculars","\u{1F52D}","B"],["magnifier","\u{1F50D}","L"]]){let A=document.createElement("div");A.id=`tool-${m}`,A.className="ctl seektool",A.innerHTML=`<span>${d}</span><b>${y}</b>`,A.addEventListener("pointerdown",_=>{_.preventDefault(),_.stopPropagation(),c(m)}),A.addEventListener("animationend",()=>A.classList.remove("nope","ready")),document.body.appendChild(A),r[m]=A}let o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.id="binox",o.setAttribute("viewBox","0 0 160 100"),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.innerHTML=`<defs><filter id="binox-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.6"/></filter>
    <mask id="binox-eyes" maskUnits="userSpaceOnUse" x="-2000" y="-2000" width="4160" height="4100"><rect x="-2000" y="-2000" width="4160" height="4100" fill="#fff"/>
    <g filter="url(#binox-soft)" fill="#000"><circle cx="57" cy="50" r="40"/><circle cx="103" cy="50" r="40"/></g></mask></defs>
    <rect x="-2000" y="-2000" width="4160" height="4100" fill="#050505" mask="url(#binox-eyes)"/>`,document.body.appendChild(o);let a=document.createElement("div");a.id="lens",document.body.appendChild(a),addEventListener("keydown",m=>{m.repeat||(m.code==="KeyB"?c("binoculars"):m.code==="KeyL"&&c("magnifier"))});function c(m){if(!i())return;let d=e[m],y=e[m==="binoculars"?"magnifier":"binoculars"],A=Mu(d);A==="on"?(y.on&&Mu(y),Dt(m==="binoculars"?"zoom":"ting")):A==="off"?Dt("click"):(Dt("nope"),r[m].classList.remove("nope"),r[m].offsetWidth,r[m].classList.add("nope")),l()}function l(){for(let[m,d]of Object.entries(e)){let y=r[m];y.style.setProperty("--c",l0(d).toFixed(3)),y.classList.toggle("on",d.on),y.classList.toggle("resting",d.wait>0)}document.body.classList.toggle("binox",t.on),document.body.classList.toggle("magnify",n.on)}let h=new si(16,16,{type:Ds,samples:4}),u=new Ft(20,1,.01,40),f=new mt(new Bt(2,2),new On({uniforms:{map:{value:h.texture},lensHalf:{value:new ge(.5,.5)}},vertexShader:"uniform vec2 lensHalf; varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy * lensHalf, 0.0, 1.0); }",fragmentShader:`uniform sampler2D map; varying vec2 vUv;
      void main() {
        vec2 p = vUv - 0.5; float r = length(p) * 2.0; if (r > 1.0) discard;
        gl_FragColor = texture2D(map, vUv);
        gl_FragColor.rgb *= 1.0 - 0.3 * smoothstep(0.7, 1.0, r); // (a touch darker toward the rim: it looks like glass)
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1}));f.frustumCulled=!1;let p=new Ir;p.add(f);let g=new rs(-1,1,1,-1,0,1),x=()=>Math.min(innerWidth,innerHeight)*Jr;return{press:c,binoculars:()=>t.on,update(m){if(!i()){for(let d of Object.values(e))Object.assign(d,Pc(d.kind));l();return}for(let[d,y]of Object.entries(e)){let A=c0(y,m);A==="empty"&&Dt("click"),A==="ready"&&(Dt("tick"),r[d].classList.remove("ready"),r[d].offsetWidth,r[d].classList.add("ready"))}l()},steer(m,d){if(!t.on)return m;let y=ai.binoculars.turn;return{x:(m.x||0)*y,y:0,lookX:(m.lookX||0)*y,lookY:(m.lookY||0)*y+(m.y||0)*.5*d}},fov(m){return t.on?2*Math.atan(Math.tan(m*Math.PI/360)/ai.binoculars.zoom)*180/Math.PI:m},unzoom(m,d){let y=innerWidth/2,A=innerHeight/2;return!n.on||Math.hypot(m-y,d-A)>x()/2?[m,d]:[y+(m-y)/ai.magnifier.zoom,A+(d-A)/ai.magnifier.zoom]},render(m,d,y,A=!0){if(!n.on||!A)return;let _=x(),S=innerHeight,E=Math.round(_*m.getPixelRatio());h.width!==E&&h.setSize(E,E),u.position.copy(y.position),u.quaternion.copy(y.quaternion),u.fov=2*Math.atan(Math.tan(y.fov*Math.PI/360)*_/(S*ai.magnifier.zoom))*180/Math.PI,u.updateProjectionMatrix();let I=m.shadowMap.autoUpdate;m.shadowMap.autoUpdate=!1,m.setRenderTarget(h),m.render(d,u),m.setRenderTarget(null),m.shadowMap.autoUpdate=I,f.material.uniforms.lensHalf.value.set(_/innerWidth,_/S);let U=m.autoClear;m.autoClear=!1,m.render(p,g),m.autoClear=U}}}var Jr,q0=ht(()=>{Cn();Wr();Iu();Jr=.5});var Pu,Zv,Jv,$v,Qv,eM,Go,$r,tM,Y0,nM,Bc,j0=ht(()=>{Pu={12:[0,-1],13:[0,1],14:[-1,0],15:[1,0]},Zv=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],Jv=/0079.{0,12}181c/i,$v={3:0,4:1,1:2,0:3,2:4},Qv=(i,e)=>Jv.test(i)?$v[e]??e:e,eM=i=>Math.abs(i)<.18?0:(i-Math.sign(i)*.18)/(1-.18),Go=i=>Math.max(-1,Math.min(1,i)),$r=i=>Number.isFinite(i)?i:0,tM=i=>Math.abs(i)<.3?i:0,Y0=(i,e)=>{let t=i-e;return eM(Go(t/(t>0?1-e:1+e)))},nM=i=>Math.abs(i)>1.05?[0,0]:Zv[Math.round((i+1)*3.5)&7],Bc=class{constructor({extraPads:e=()=>[]}={}){this.extraPads=e,this.keys={},this.keyEvents=[],this.state=new Map,this.t=0,addEventListener("keydown",n=>{if(this.keys[n.code]=!0,n.repeat)return;let s={Space:"drop",Enter:"drop",KeyF:"toggle",KeyP:"parent",KeyM:"music",Escape:"escape"};s[n.code]&&(this.keyEvents.push({type:s[n.code],pad:-1}),n.preventDefault())}),addEventListener("keyup",n=>{this.keys[n.code]=!1}),addEventListener("blur",()=>{this.keys={}});let t=n=>{n.gamepad&&this.state.delete(n.gamepad.index)};addEventListener("gamepadconnected",t),addEventListener("gamepaddisconnected",t)}padState(e){let t=this.state.get(e.index);if(!t||t.id!==e.id){let n=[$r(e.axes[0]),$r(e.axes[1])];t={id:e.id,rest:n.map(tM),anchor:n,still:0,hatAxis:-1,btn:[],hold:null},this.state.set(e.index,t)}return t}poll(e,{holdToggle:t,toggleButton:n=1}){this.t+=e;let s=this.keyEvents.splice(0),r=[...navigator.getGamepads?navigator.getGamepads():[],...this.extraPads()],o=[],a=new Set,c=0;for(let u of r){if(!u||!u.connected)continue;a.add(u.index);let f=this.padState(u),p=[$r(u.axes[0]),$r(u.axes[1])];Math.abs(p[0]-f.anchor[0])<.03&&Math.abs(p[1]-f.anchor[1])<.03?f.still+=e:(f.still=0,f.anchor=p),f.still>=1.5&&p.forEach((d,y)=>{Math.abs(d)<.3&&(f.rest[y]=d)}),f.hatAxis<0&&(f.hatAxis=u.axes.findIndex((d,y)=>y>=4&&Math.abs(d)>1.05));let[g,x]=f.hatAxis>=0?nM($r(u.axes[f.hatAxis])):[0,0],m=[];u.buttons.forEach((d,y)=>{let A=Qv(u.id,y),_=!!d&&(d.pressed||d.value>.5),S=f.btn[A]||(f.btn[A]={on:!1,t:-1/0}),E=!1,I=!1;if(_!==S.on&&this.t-S.t>=.12&&(S.on=_,S.t=this.t,E=_,I=!_),S.on&&m.push(A),u.mapping==="standard"&&Pu[A]){S.on&&(g+=Pu[A][0],x+=Pu[A][1]);return}t&&A===n?(E&&(f.hold=0),S.on&&f.hold!==null&&(f.hold+=e,c=Math.max(c,f.hold/1),f.hold>=1&&(f.hold=null,s.push({type:"toggle",pad:u.index}))),I&&f.hold!==null&&(f.hold=null,s.push({type:"drop",pad:u.index}))):E&&s.push({type:"drop",pad:u.index})}),t||(f.hold=null),o.push({index:u.index,id:u.id,pressed:m,axes:[...u.axes.slice(0,4)].map($r),x:Go(Y0(p[0],f.rest[0])+g),y:Go(Y0(p[1],f.rest[1])+x)})}for(let u of this.state.keys())a.has(u)||this.state.delete(u);o.sort((u,f)=>u.index-f.index);let l=this.keys,h={x:Go((l.ArrowRight||l.KeyD?1:0)-(l.ArrowLeft||l.KeyA?1:0)),y:Go((l.ArrowDown?1:0)-(l.ArrowUp||l.KeyW?1:0))};return{pads:o,kb:h,events:s,holdProgress:c}}}});function K0(){addEventListener("keydown",i=>{i.code==="Escape"&&(i.preventDefault(),i.stopImmediatePropagation(),window.close(),setTimeout(()=>{let e=document.getElementById("quit-hint");e||(e=document.createElement("div"),e.id="quit-hint",e.textContent="Press \u2318Q to quit",e.style.cssText="position:fixed;left:50%;top:40%;transform:translateX(-50%);z-index:99;padding:16px 28px;background:#000c;color:#fff;font:bold 32px system-ui,sans-serif;border-radius:14px;pointer-events:none;transition:opacity .4s",document.body.appendChild(e)),e.style.opacity="1",clearTimeout(e.hideTimer),e.hideTimer=setTimeout(()=>{e.style.opacity="0"},2500)},400))},!0)}var Z0=ht(()=>{});function lM(i){let e="C",t=-1;for(let[n,s]of Object.entries(aM)){let r=i.reduce((o,a)=>o+(s.includes(a.n[0])?a.beats:0),0);r>t&&(t=r,e=n)}return cM[e]}var iM,sM,rM,oM,aM,cM,kc,J0=ht(()=>{iM=[{name:"Jingle Bells",bpm:150,bells:!0,notes:"E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:0.5 E4:4 F4:1 F4:1 F4:1.5 F4:0.5 F4:1 E4:1 E4:1 E4:0.5 E4:0.5 E4:1 D4:1 D4:1 E4:1 D4:2 G4:2 E4:1 E4:1 E4:2 E4:1 E4:1 E4:2 E4:1 G4:1 C4:1.5 D4:0.5 E4:4 F4:1 F4:1 F4:1.5 F4:0.5 F4:1 E4:1 E4:1 E4:0.5 E4:0.5 G4:1 G4:1 F4:1 D4:1 C4:4"},{name:"We Wish You a Merry Christmas",bpm:160,beats:3,notes:"G4:1 C5:1 C5:0.5 D5:0.5 C5:0.5 B4:0.5 A4:1 A4:1 A4:1 D5:1 D5:0.5 E5:0.5 D5:0.5 C5:0.5 B4:1 G4:1 G4:1 E5:1 E5:0.5 F5:0.5 E5:0.5 D5:0.5 C5:1 A4:1 G4:0.5 G4:0.5 A4:1 D5:1 B4:1 C5:3 -:2"},{name:"Deck the Halls",bpm:140,notes:"G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 C4:1 B3:1 C4:2 -:2 G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 C4:1 B3:1 C4:2 -:2 D4:1.5 E4:0.5 F4:1 D4:1 E4:1.5 F4:0.5 G4:1 D4:1 E4:0.5 F#4:0.5 G4:1 A4:0.5 B4:0.5 C5:1 B4:1 A4:1 G4:2 -:2 G4:1.5 F4:0.5 E4:1 D4:1 C4:1 D4:1 E4:1 C4:1 A4:0.5 A4:0.5 A4:0.5 A4:0.5 G4:1.5 F4:0.5 E4:1 D4:1 C4:2 -:2"}],sM={C:0,D:2,E:4,F:5,G:7,A:9,B:11},rM=i=>{let e=/^([A-G])(#?)(\d)$/.exec(i);return 440*2**((sM[e[1]]+(e[2]?1:0)+(+e[3]+1)*12-69)/12)},oM=i=>i.trim().split(/\s+/).map(e=>{let[t,n]=e.split(":");return{f:t==="-"?0:rM(t),n:t,beats:+n}}),aM={C:["C","E","G"],F:["F","A","C"],G:["G","B","D"]},cM={C:130.81/2,F:174.61/2,G:196/2};kc=class{constructor(){this.on=!0;try{this.on=localStorage.getItem("elf-music")!=="off"}catch{}this.k=1,this.song=0,this.i=0,this.t=0,this.timer=null,this.ctx=null,this.songs=iM.map(e=>({...e,notes:oM(e.notes)}))}start(e){!e||this.timer||(this.ctx=e,this.out=e.createGain(),this.out.gain.value=this.on?.55:0,this.out.connect(e.destination),this.t=e.currentTime+.1,this.barBeat=0,this.bar=[],this.timer=setInterval(()=>this.schedule(),60))}setOn(e){this.on=e;try{localStorage.setItem("elf-music",e?"on":"off")}catch{}this.out&&this.out.gain.setTargetAtTime(e?.55:0,this.ctx.currentTime,.05)}tempo(e){this.k=e}schedule(){let e=this.ctx;for(;this.t<e.currentTime+.25;){let t=this.songs[this.song],n=60/t.bpm/this.k,s=t.notes[this.i],r=t.beats||4;if(this.barBeat===0){let o=0,a=this.i,c=[];for(;o<r&&a<t.notes.length;)c.push(t.notes[a]),o+=t.notes[a].beats,a++;let l=lM(c.filter(h=>h.f));for(let h=0;h<r;h++)this.bass(this.t+h*n,h===0?l:l*1.5,n)}if(s.f&&this.bell(this.t,s.f,s.beats*n),t.bells)for(let o=0;o<s.beats;o+=.5)this.jingle(this.t+o*n,o%1?.5:1);this.t+=s.beats*n,this.barBeat=(this.barBeat+s.beats)%r,++this.i>=t.notes.length&&(this.i=0,this.barBeat=0,this.song=(this.song+1)%this.songs.length,this.t+=n*2)}}bell(e,t,n){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.22,e+.008),r.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(.35,n*1.4)),r.connect(this.out);for(let[o,a]of[[1,1],[2,.25],[3,.08]]){let c=s.createOscillator(),l=s.createGain();c.type="sine",c.frequency.value=t*o,l.gain.value=a,c.connect(l).connect(r),c.start(e),c.stop(e+Math.max(.4,n*1.5))}}bass(e,t,n){let s=this.ctx,r=s.createGain(),o=s.createOscillator();o.type="triangle",o.frequency.value=t,r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.16,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+n*.8),o.connect(r).connect(this.out),o.start(e),o.stop(e+n)}jingle(e,t){let n=this.ctx;if(!this.noise){this.noise=n.createBuffer(1,n.sampleRate*.2,n.sampleRate);let a=this.noise.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=Math.random()*2-1}let s=n.createBufferSource(),r=n.createBiquadFilter(),o=n.createGain();s.buffer=this.noise,r.type="bandpass",r.frequency.value=7500,r.Q.value=1.5,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.09*t,e+.004),o.gain.exponentialRampToValueAtTime(1e-4,e+.12),s.connect(r).connect(o).connect(this.out),s.start(e),s.stop(e+.15)}}});var Rm={};Om(Rm,{start:()=>TM});function Ct(i){Hc.textContent=i,Hc.classList.remove("show"),Hc.offsetWidth,Hc.classList.add("show")}function Yo(i,e,t,n,s){Vo.style.display="",ys.style.display=n===Ks&&!Le.on?"":"none",Ri.style.display=ys.style.display,js.style.display=s?"":"none",s&&(js.textContent=s[0],js.onclick=()=>{Xi(),$n.style.display="none",s[1]()}),lm.textContent=i,hm.innerHTML=e,Vo.textContent=t,$n.style.display="flex",It("gear").style.display=n===Ks?"flex":"none",Vo.onclick=()=>{Xi(),$n.style.display="none",It("gear").style.display="none",n()}}function pn(i){_e=i,document.body.dataset.phase=i,It("point").textContent=i==="pointing"?"\u{1F6B6} Walk":"\u{1F3AF} Target"}function Ks(){Kc(),Ne=Vr(...Gu),$t.visible=!1,cn.visible=!0,pi.visible=!1,st.swing=st.tilt=0,li.on=!1,ju(),ui=0,Vu=!1,wi=!1,Ti=-1,qo(),pn("hide"),st.ready=!1,Ct("\u{1F9DD} HIDE THE ELF!")}function Xc(i=!1){if(_e==="hide"){if(!t0(Ne)){i&&(Vu=!0);return}if(n0(Ne,qi),Dt("pop"),pn("sitting"),Ti=0,Le.on){Ct(i?"\u23F0 HIDDEN!":"\u{1F92B} HIDDEN!");return}setTimeout(()=>{_e==="sitting"&&(pn("handoff"),Yo(i?"\u23F0 Time's up: he's hidden!":"\u{1F92B} He's hidden!","Hand the phone to the <b>seeker</b>.<br>No peeking!","\u{1F50E} I'm the seeker: go!",fm))},1800)}}function fm(){ze=Cc(...kn),di=0,Bn=0,wi=!1,qs=Xo=0,document.body.classList.remove("tapaim"),on.x=on.y=null,jo(),pn("seek"),Ct("\u{1F50E} FIND THE ELF!")}function Wu(){_e==="seek"?(pn("pointing"),ze.pointing=!0,on.x=on.y=null,jo()):_e==="pointing"&&(pn("seek"),ze.pointing=!1)}function qc(i=on.x,e=on.y){if(_e!=="pointing"&&_e!=="seek")return;let t=Ve.getWorldPosition(new T),n=Ve.getWorldDirection(new T);i!=null&&([i,e]=As.unzoom(i,e)),i!=null&&n.set(i/innerWidth*2-1,1-e/innerHeight*2,.5).unproject(Ve).sub(t).normalize();let s=cn.position.clone();s.y+=Fe.height/2,gs.set(t,n),gs.far=30,gs.camera=Ve;let r=a=>{for(;a;a=a.parent)if(!a.visible)return!1;return!0},o=gs.intersectObjects(Tt.children,!0).find(a=>r(a.object)&&!Xu.has(a.object)&&!Ko.has(a.object)&&a.object!==$t&&!a.object.isSprite);if(Bn++,Nu.bang(),$e){let a=$e.bots.filter(l=>!l.found).find(l=>{let h=l.model.position.clone();return h.y+=Fe.height/2,Ic(t.toArray(),n.toArray(),h.toArray(),o?o.distance:1/0)});if(!a){Dt("boing"),Ct(Bn>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!");return}a.found=!0,Dt("yay");let c=$e.bots.filter(l=>l.found).length;c===$e.bots.length?Em(!0):Ct(`\u{1F389} FOUND ONE! ${c}/${$e.bots.length}`);return}if(Le.on){let a=[...Wi.values()].filter(c=>c.role==="elf"&&!c.found&&c.model.visible).find(c=>{let l=c.model.position.clone();return l.y+=Fe.height/2,Ic(t.toArray(),n.toArray(),l.toArray(),o?o.distance:1/0)});a?(Dt("yay"),Le.sendFound(a.id)):(Dt("boing"),Ct(Bn>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!"));return}Ic(t.toArray(),n.toArray(),s.toArray(),o?o.distance:1/0)?(Dt("yay"),pn("found"),Ct("\u{1F389} FOUND HIM!"),setTimeout(()=>Yo("\u{1F389} Found him!",`In <b>${to(di)}</b>, with <b>${Bn}</b> ${Bn===1?"guess":"guesses"}.<br>He was ${qu()}.`,"\u{1F9DD} Hide him again",Ks),1600)):(Dt("boing"),Ct(Bn>2?"\u274C NOT THERE! KEEP LOOKING":"\u274C NOT THERE!"))}function Yc(i=!1){if(!(_e!=="seek"&&_e!=="pointing")){if($e){Em(!1);return}pn("reveal"),ze.pointing=!1,bi=0,$t.visible=pi.visible=!0,Ct(i?"\u23F0 TIME'S UP!":"\u{1F440} HE WAS HERE!"),i&&Dt("bell"),Ti=-1,qo(),Ne.yaw=Math.atan2(ze.x-Ne.x,ze.z-Ne.z)+Math.PI,setTimeout(()=>Yo(i?"\u23F0 Time's up: the elf wins!":"\u{1F9DD} He was here!",`He was ${qu()}.`,"\u{1F9DD} Hide him again",Ks),Jt.has("giveup")?1e9:6e3)}}function dm(i,e=Ne){let t=e.x-ze.x,n=e.z-ze.z,s=e.y+Fe.height/2-Ve.position.y,r=Math.atan2(-t,-n),o=Math.max(-1.3,Math.min(1.1,Math.atan2(s,Math.hypot(t,n)))),a=1-Math.exp(-i*4),c=Math.atan2(Math.sin(r-ze.yaw),Math.cos(r-ze.yaw));ze.yaw+=c*a,ze.pitch+=(o-ze.pitch)*a}function qu(i=cn.position){let e=i===cn.position&&!!Ne.cling;if(i.y>wt&&!e)return"up on the <b>beam</b>";let t=null,n=1/0,s="near";for(let r of Zs.things){if(r.gone)continue;let o=new dt().setFromObject(r.at),a=i.x>o.min.x-.02&&i.x<o.max.x+.02&&i.z>o.min.z-.02&&i.z<o.max.z+.02,c=a?0:Math.hypot(Math.max(o.min.x-i.x,0,i.x-o.max.x),Math.max(o.min.z-i.z,0,i.z-o.max.z));(c<n||c===0&&n===0&&a)&&(n=c,t=r,s=a?i.y>.05?"on top of":"under":"near")}return t?`${e?"hanging on near":s} the <b>${t.name.replace(/ \+.*/,"")}</b>`:e?"hanging on the <b>wall</b>":"somewhere sneaky"}function Am(i,e,t,n){let s=It(i),r=()=>{for(let o of s.children)o.classList.toggle("on",+o.dataset.s===t())};for(let o of hM){let a=document.createElement("button");a.textContent=to(o),a.dataset.s=o,a.addEventListener("click",()=>{n(o);try{localStorage.setItem(e,o)}catch{}r()}),s.appendChild(a)}r()}function fM(i,e){on.x=i,on.y=e,jo(),qs=Q0+uM,Xo=Q0,document.body.classList.add("tapaim")}function jo(){let i=It("aim");i.style.left=on.x===null?"50%":`${on.x}px`,i.style.top=on.y===null?"50%":`${on.y}px`}function pM(i,e){if(e&&(Ou-=i)<=0){Ou=.8;let t=new Co(new Lr({map:dM,transparent:!0,depthWrite:!1}));t.position.set(Ne.x,Ne.y+Fe.height*.95,Ne.z),t.userData={age:0,big:Ei.length%3===1?1.5:1,ph:Math.random()*6},Tt.add(t),Ei.push(t)}for(let t of Ei){let n=t.userData;n.age+=i,t.position.y+=i*.035,t.position.x+=Math.sin(n.age*2.5+n.ph)*i*.015;let s=(.018+n.age*.012)*n.big;t.scale.set(s,s,1),t.material.opacity=Math.min(1,n.age*3)*Math.max(0,1-n.age/2.6)}for(let t=Ei.length-1;t>=0;t--)Ei[t].userData.age>2.6&&(Tt.remove(Ei[t]),Ei[t].material.dispose(),Ei.splice(t,1))}function xm(i,e,t=[Ne]){if(e&&t.length&&(Fu-=i)<=0){Fu=.3/t.length;let n=t[Math.floor(Math.random()*t.length)],s=new Co(new Lr({map:mM,transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.8})),r=Si.length%2?1:-1;s.position.set(n.x,n.y+Fe.height*.9,n.z),s.userData={age:0,vx:r*(.02+Math.random()*.02),vz:(Math.random()-.5)*.03},Tt.add(s),Si.push(s)}for(let n of Si){let s=n.userData;s.age+=i,n.position.y+=i*.07,n.position.x+=s.vx*i,n.position.z+=s.vz*i;let r=.02+s.age*.03;n.scale.set(r*2,r,1),n.material.opacity=Math.min(1,s.age*5)*Math.max(0,1-s.age/1.4)}for(let n=Si.length-1;n>=0;n--)Si[n].userData.age>1.4&&(Tt.remove(Si[n]),Si[n].material.dispose(),Si.splice(n,1))}function ju(){for(let i of Si)Tt.remove(i),i.material.dispose();Si.length=0,Fu=0}function qo(){for(let i of Ei)Tt.remove(i),i.material.dispose();Ei.length=0,Ou=0}function Wo(i,e,t){let n=qi.ceiling(i,e),s=t+.01<n?n:_m;for(let r of qi.tops)r.under!==void 0&&r.under>t+.01&&i>r.x0&&i<r.x1&&e>r.z0&&e<r.z1&&(s=Math.min(s,r.under));return s}function Lu(i,e=6,t=cn.position,n=Ne.yaw){let s=n+st.swing,r=-Math.sin(s),o=-Math.cos(s),a=Math.min(Wo(t.x,t.z,t.y),Wo(t.x-r*.25,t.z-o*.25,t.y)),c=a-(t.y+Fe.height)<.3;c&&(Xs.over=a),Xs.t=Math.max(0,Math.min(1,Xs.t+(c?i:-i)/.35));let l=Xs.t*Xs.t*(3-2*Xs.t),h=.42+(.2-.42)*l,u=.2+(Math.max(.03,Math.min(.1,Xs.over-t.y-.025))-.2)*l,f=new T;for(let x=0;x<6;x++){f.set(t.x-r*h,t.y+u,t.z-o*h);let m=Zs.whole;if(!ym(f)&&f.x>m.x0+.05&&f.x<m.x1-.05&&f.z>m.z0+.05&&f.z<m.z1-.05)break;h*=.7,l<.5&&(u=Math.max(u,.1))}f.y=Math.min(f.y,Wo(f.x,f.z,t.y)-.025);let p=new T(t.x+r*.15,t.y+Fe.height*(.6-.25*l),t.z+o*.15),g=st.ready?1-Math.exp(-i*e):1;st.ready=!0,st.pos.lerp(f,g),st.look.lerp(p,g),l>0&&(st.pos.y=Math.min(st.pos.y,f.y)),Ve.position.copy(st.pos),Ve.up.set(0,1,0),Ve.lookAt(st.look),Ve.fov=66,Ve.updateProjectionMatrix()}function gM(i){let e=new T(Ne.x,Ne.y+Fe.height*(Ne.cling?.8:.55),Ne.z),t=Zs.whole;if(!li.on){let h=st.look.clone().sub(st.pos);Object.assign(li,{on:!0,yaw:Math.atan2(-h.x,-h.z),pitch:Math.atan2(h.y,Math.hypot(h.x,h.z)),w:0})}let n=Wo(Ne.x,Ne.z,Ne.y)-(Ne.y+Fe.height)<.3;s0(li,e,i0(AM(),{x:kn[0],z:kn[1]}),i,n?.08:void 0);let s=li.yaw+st.swing,r=Math.max(-1.1,Math.min(1.1,li.pitch+st.tilt)),o=(h,u,f)=>h>t.x0+.035&&h<t.x1-.035&&f>t.z0+.035&&f<t.z1-.035&&u>.015&&u<Wo(h,f,e.y)-.02&&!ym({x:h,y:u,z:f})&&!Gr(qi,h,f,u),a=r0(e,s,r,li.side,o);li.side=a.side;let c=st.ready?1-Math.exp(-i*7):1;st.ready=!0,li.w+=(a.w-li.w)*c;let l=new T(-Math.sin(s)*Math.cos(r),Math.sin(r),-Math.cos(s)*Math.cos(r));l.lerp(e.clone().sub(a).normalize(),li.w).normalize(),st.pos.lerp(new T(a.x,a.y,a.z),c),st.look.lerp(new T(a.x,a.y,a.z).addScaledVector(l,3),c),Ve.position.copy(st.pos),Ve.up.set(0,1,0),Ve.lookAt(st.look),Ve.fov=66,Ve.updateProjectionMatrix()}function xM(){Ve.position.set(ze.x,ze.eye,ze.z),Ve.rotation.set(ze.pitch,ze.yaw,0,"YXZ");let i=As.fov(_e==="pointing"?52:72);Math.abs(Ve.fov-i)>.1&&(Ve.fov+=(i-Ve.fov)*.2,Ve.updateProjectionMatrix())}function yM(){Kc(),ze=Cc(...kn),cn.visible=!1,$t.visible=pi.visible=!1,pn("count"),ui=0,wi=!1,document.body.classList.add("counting"),Ct("\u{1F648} COUNT! NO PEEKING\u2026")}function _M(i){ze=null,Ks();for(let e=0;e<16;e++){let t=(i*2.4+e*.7)%(Math.PI*2),n=kn[0]+Math.sin(t)*1.1,s=kn[1]+Math.cos(t)*1.1,r=Zs.whole;if(!(n<r.x0+.2||n>r.x1-.2||s<r.z0+.2||s>r.z1-.2||qi.tops.some(o=>Mn(o,n,s,.06)))){Ne=Vr(n,s,Math.atan2(n-kn[0],s-kn[1]));break}}st.ready=!1,Ct("\u{1F9DD} HIDE! THE SEEKER'S COUNTING")}function Mm(i,e){i.traverse(t=>{var n;t.isMesh&&((n=t.material.color)==null?void 0:n.getHex())===14034984&&(t.material=t.material.clone(),t.material.color.setHex(e))})}function vM(i){let e=new Set,t=[...Le.players.keys()];for(let n of Le.on?Le.others():[]){let s=n.st[0]==="s"?"seeker":"elf",r=Wi.get(n.id),o=s==="seeker"&&Zr.includes(n.st[7])?n.st[7]:Zr[0];if(r&&(r.kind!==s||r.look!==o)&&(Tt.remove(r.model),Wi.delete(n.id),r=null),!r){let c=s==="seeker"?S0(o):Nc();s==="elf"&&Mm(c,nm[Math.max(0,t.indexOf(n.id))%nm.length]),c.traverse(l=>Ko.add(l)),Tt.add(c),r={model:c,kind:s,look:o},Wi.set(n.id,r)}e.add(n.id),Object.assign(r,{id:n.id,role:n.role,found:n.found});let a=n.st;s==="seeker"?(r.model.position.set(a[1],0,a[2]),r.model.rotation.y=a[3],w0(r.model,i,{counting:!!a[6],crouch:!!a[5]})):(r.model.position.set(a[1],a[2],a[3]),r.model.rotation.y=a[4],Uc(r.model,i,{walking:a[5],run:a[6],climbing:!!a[7],hanging:!!a[8],air:!!a[9],sit:a[10],asleep:!!a[11],laugh:!!a[12]})),r.model.visible=!(s==="seeker"&&Le.myRole()==="seeker")}for(let[n,s]of Wi)e.has(n)||(Tt.remove(s.model),Wi.delete(n))}function MM(i){if(Vc=Math.max(0,Vc-i),!Le.on||_e!=="hide"||Vc>0)return;let e=Le.others().find(s=>s.role==="seeker"&&s.st[0]==="s");if(!e)return;let t=Ne.x-e.st[1],n=Ne.z-e.st[2];Math.hypot(t,n)>vm||(zc(1),Le.sendShh([Ne.x,Ne.y+Fe.height,Ne.z]),Ct("\u{1F92B} SHHHHH!"),Ne.yaw=Math.atan2(-t,-n)+Math.PI,Ne.run=1,Ne.runT=9,zu=.7,Vc=1.5)}function bm(i,e,t){let n=new T(kn[0],rn.eye,kn[1]),s=new T(i,e,t),r=n.distanceTo(s);gs.set(n,s.sub(n).normalize()),gs.far=r-.05,gs.camera=Ve;let o=a=>{for(;a;a=a.parent)if(!a.visible)return!1;return!0};return gs.intersectObjects(Tt.children,!0).some(a=>a.object.isMesh&&o(a.object)&&!Xu.has(a.object)&&!Ko.has(a.object)&&a.object!==$t)}function Ku(){let i=$e?$e.saved:[Pn,Jn];Kc(),ju(),qo(),Ti=-1,ze=Cc(...kn),cn.visible=!1,$t.visible=pi.visible=!1,Pn=Wc.count,Jn=Wc.seek,Tt.updateMatrixWorld(!0);let e=_0(qi,Wc.elves,{sx:kn[0],sz:kn[1],time:Wc.count-2,hidden:bm});$e={t:0,over:!1,saved:i,bots:e.map((t,n)=>{let s=Nc();return Mm(s,om[n][0]),s.traverse(r=>Ko.add(r)),Tt.add(s),{h:t,model:s,found:!1,shhT:0,arrow:null,name:om[n][1]}})},pn("count"),ui=di=0,Bn=0,wi=!1,qs=Xo=0,on.x=on.y=null,jo(),document.body.classList.add("counting"),Ct("\u{1F648} COUNT! NO PEEKING\u2026")}function Kc(){if($e){for(let i of $e.bots)Tt.remove(i.model),i.model.traverse(e=>Ko.delete(e)),i.arrow&&Tt.remove(i.arrow);[Pn,Jn]=$e.saved,$e=null,$t.visible=!1,document.body.classList.remove("counting")}}function bM(i,e){$e.t+=i;for(let n of $e.bots){let s=v0(n.h,$e.t);n.model.position.set(s.x,s.y,s.z),n.model.rotation.y=s.yaw;let r=n.found||$e.over&&!n.found;if(Uc(n.model,e,{...s,...r?{sit:0,asleep:!1}:{},laugh:r}),n.shhT-=i,_e==="count"&&s.moving&&n.shhT<=0&&Math.hypot(s.x-ze.x,s.z-ze.z)<vm&&(zc(1),Ct("\u{1F92B} SHHHHH!"),n.shhT=2),n.arrow){let o=Math.max(.5,Math.min(6,Ve.position.distanceTo(n.model.position)/.8)),a=Math.abs(Math.sin(e*5));n.arrow.quaternion.copy(Ve.quaternion),n.arrow.scale.setScalar(o),n.arrow.position.set(s.x,s.y+Fe.height,s.z).addScaledVector(new T(0,1,0).applyQuaternion(Ve.quaternion),(.015+a*.03)*o)}}xm(i,$e.over||$e.bots.some(n=>n.found),$e.bots.filter(n=>n.found||$e.over).map(n=>n.model.position));let t=$e.reveal;if(t&&t.i<t.list.length){let n=t.list[t.i],s=n.model.position;t.t===0&&Ct(`\u{1F440} THE ${n.name.toUpperCase()} ELF WAS HERE!`);let r=t.t;t.t+=i,n.model.rotation.y=Math.atan2(ze.x-s.x,ze.z-s.z)+Math.PI,t.t<=fi?dm(i,s):r<=fi&&(st.pos.copy(Ve.position),st.look.copy(Ve.position).addScaledVector(Ve.getWorldDirection(new T),Ve.position.distanceTo(s)),st.ready=!0,st.swing=Math.PI,Dt("laugh"));let o=Ve.position.distanceTo(s);$t.visible=t.t<fi+.6,$t.position.set(s.x,s.y+Fe.height/2,s.z),$t.lookAt(Ve.position),$t.scale.setScalar(Math.max(.8,Math.min(4,o/1.2))*(1+Math.sin(t.t*6)*.15)),t.t>EM&&(t.i++,t.t=0,$t.visible=!1,t.i>=t.list.length&&t.then())}_e==="count"&&ui>=Pn&&(pn("seek"),document.body.classList.remove("counting"),di=0,wi=!1,Ct("\u{1F440} READY OR NOT! FIND THE ELVES!"))}function Em(i){let e=$e,t=e.bots.length,n=e.bots.filter(o=>o.found).length;if(e.over=!0,pn("found"),ze.pointing=!1,i)Ct("\u{1F389} FOUND EVERY ELF!");else{Ct("\u23F0 TIME'S UP!"),Dt("bell"),Dt("laugh");for(let o of e.bots)o.found||(o.arrow=pi.clone(),o.arrow.visible=!0,Tt.add(o.arrow))}let s=e.bots.filter(o=>!o.found).map(o=>`The <b>${o.name}</b> elf was ${qu(o.model.position)}.`).join("<br>"),r=()=>{$e===e&&Yo(i?"\u{1F50E} Found every elf!":"\u{1F9DD} The elves win!",i?`All ${t} in <b>${to(di)}</b>, with <b>${Bn}</b> ${Bn===1?"guess":"guesses"}.`:`You found <b>${n} of ${t}</b>.<br>${s}`,"\u{1F50E} Seek again",Ku,["\u{1F3E0} Back to the start",()=>{Kc(),ze=null,cn.visible=!0,Zc()}])};i?setTimeout(r,2e3):setTimeout(()=>{$e===e&&(e.reveal={list:e.bots.filter(o=>!o.found),i:0,t:0,then:()=>setTimeout(r,1200)})},1200)}function SM(i,e){let t=Math.max(0,Math.min(1,i/e)),n=t*Math.PI*2,s=50+Math.sin(n)*42,r=50-Math.cos(n)*42;eo.querySelector(".pie").setAttribute("d",t>=.999?"M50 8 A42 42 0 1 1 49.99 8 Z":t<=0?"":`M50 50 L50 8 A42 42 0 ${t>.5?1:0} 1 ${s.toFixed(2)} ${r.toFixed(2)} Z`);let o=Math.max(0,Math.ceil(i));eo.querySelector("text").textContent=o>=60?to(o):String(o),eo.classList.toggle("hurry",i<=10)}function Zo(){if(It("online").style.display==="none"&&Le.on)return;let i=a=>String(a).replace(/[&<>"]/g,c=>`&#${c.charCodeAt(0)};`);dn.querySelector("#ol-name")||(dn.innerHTML=`<div class="box"><h2>\u{1F310} Play online</h2><div class="row">\u{1F3F7}\uFE0F <input id="ol-name" maxlength="12" placeholder="Your name" autocomplete="off" autocorrect="off" spellcheck="false"></div><div class="row">\u{1F50E} When I seek, I'm <button class="look" data-ol="look" data-look="him">\u{1F385} Him</button><button class="look" data-ol="look" data-look="her">\u2744\uFE0F Her</button></div><div id="ol-rest" style="display:contents"></div></div>`,Du="");let e=dn.querySelector("#ol-name");document.activeElement!==e&&(e.value=jc());for(let a of dn.querySelectorAll(".look"))a.classList.toggle("on",a.dataset.look===Sm());let t=[...Le.players.values()].map(a=>i(a.name)).join(", "),n=Le.status()?`<div class="st">${i(Le.status())}</div>`:"",s=`${Le.on?Le.host?`<div class="code">${Le.code()}</div><div>In the room: <span class="who">${t}</span></div><div class="row"><button data-ol="start" ${Le.players.size<2?'disabled style="opacity:.5"':""}>\u25B6\uFE0F Start${Le.players.size<2?" (waiting for a buddy)":""}</button><button class="grey" data-ol="invite">\u{1F4E4} Invite</button></div>`:`<div class="code">${Le.code()}</div><div>In the room: <span class="who">${t}</span></div><div>Waiting for the host to start\u2026</div>`:`<div class="row"><button data-ol="host">\u{1F4E1} Host a game</button></div><div class="row">or <input id="ol-code" maxlength="4" size="5" placeholder="CODE" value="${i(Ju)}" autocapitalize="characters" autocomplete="off" autocorrect="off" spellcheck="false"><button data-ol="join">\u{1F517} Join</button></div>`}${n}<div class="row">${Le.on?'<button class="red" data-ol="leave">\u{1F6AA} Leave</button>':""}<button class="grey" data-ol="close">\u2716 Close</button></div>`;if(s===Du)return;let r=dn.querySelector("#ol-code");document.activeElement===r&&r||(Du=s,dn.querySelector("#ol-rest").innerHTML=s)}function wM(){pn("title"),$n.style.display="none",dn.style.display="flex",Zo()}function wm(){Le.leave(),document.body.classList.remove("online","counting");for(let i of Wi.values())Tt.remove(i.model);Wi.clear(),ze=null,cn.visible=!0,dn.style.display="none",Zc()}function Zc(){Yo("\u{1F9DD} Hide the Elf","Player 1: you're the elf. <b>Walk into things to climb them</b>, <b>jump</b> near something tall, then press <b>\u{1F648} Hide</b>.<br>Player 2: find him!<br>Or \u{1F50E} practice seeking: the computer hides 3 elves. Or \u{1F310} online: everyone on their own phone.","\u{1F9DD} Start hiding",Ks)}function Qr(i,e){let t=e?{pads:[],kb:{x:0,y:0},events:[]}:gm.poll(i,{holdToggle:!1}),n=xs.x+t.kb.x,s=xs.y+t.kb.y,r=!1,o=!1;for(let d of t.pads){n+=d.x,s+=d.y;let y=tm.get(d.index)||[],A=d.pressed.filter(_=>!y.includes(_));A.includes(0)&&(r=!0),A.includes(2)&&(o=!0),A.includes(3)&&As.press("binoculars"),A.includes(1)&&As.press("magnifier"),tm.set(d.index,d.pressed)}e&&({x:n,y:s}=e),n=Math.max(-1,Math.min(1,n)),s=Math.max(-1,Math.min(1,s));let a=t.events.some(d=>d.type==="drop"&&d.pad<0);t.events.some(d=>d.type==="music")&&(Xi(),Ys.setOn(!Ys.on),Hu()),(Gc("KeyH")||o&&_e==="hide")&&Xc(),(Gc("KeyP")||o&&(_e==="seek"||_e==="pointing"))&&Wu(),Gc("KeyC")&&ze&&(ze.crouch=!ze.crouch,It("crouch").classList.toggle("on",ze.crouch)),Gc("KeyG")&&Yc(),As.update(i);let c=performance.now()/1e3;if(_e==="hide"||_e==="title"){let d=_e==="hide"&&(Uu||a||r||e&&e.jump);d&&Dt("swoosh"),_e==="hide"&&(zu>0&&(zu-=i,n=0,s=-1),Rc(Ne,{x:n,y:s,jump:d},i,qi),Le.on?ui=Pn-Le.left:e||(ui+=i),ui>=Pn-10&&!wi&&(wi=!0,Ct("\u23F0 10 SECONDS!"),Dt("bell")),(ui>=Pn||Vu&&!Ne.air)&&Xc(!0)),st.swing+=hi.x*.8,st.swing*=Math.exp(-i*(io.size?0:1.5))}else if(_e==="sitting"){st.swing+=hi.x*.8,st.tilt=Math.max(-.9,Math.min(.9,st.tilt-hi.y*.8));let d=Math.exp(-i*(io.size?0:1.5));st.swing*=d,st.tilt*=d}else if(ze&&_e!=="handoff"&&_e!=="sitting"){(_e==="seek"||_e==="pointing")&&(Le.on?di=Jn-Le.left:e||(di+=i),di>=Jn-10&&!wi&&(wi=!0,Ct("\u23F0 10 SECONDS!"),Dt("bell")),di>=Jn&&!Le.on&&Yc(!0)),_e==="count"&&(ui=Le.on?Pn-Le.left:ui+i),_e==="pointing"&&(a||r)&&qc(),Xo>0&&(Xo-=i)<=0&&qc(),qs>0&&(qs-=i)<=0&&(document.body.classList.remove("tapaim"),_e==="seek"&&(on.x=on.y=null,jo()));let d=qs>0;_e==="reveal"&&dm(i),o0(ze,(_e==="seek"||_e==="pointing")&&!d?As.steer({x:n,y:s,lookX:hi.x,lookY:hi.y},i):_e==="count"?{x:0,y:0,lookX:hi.x,lookY:hi.y}:{x:0,y:0},i,qi)}Uu=!1,hi.x=hi.y=0,cn.position.set(Ne.x,Ne.y,Ne.z),cn.rotation.y=Ne.yaw,Ti>=0&&(Ti+=i);let l=vu(Ne,Ti);if(Uc(cn,c,{walking:_e==="hide"?Ne.walking:0,run:Ne.run,climbing:Ne.climbing,air:Ne.air,...l,laugh:_e==="reveal"||_e==="out"}),pM(i,l.asleep),$e?bM(i,c):xm(i,_e==="reveal"&&bi>fi||_e==="out"),_e==="reveal"){let d=bi;bi+=i,d<=fi&&bi>fi&&(st.pos.copy(Ve.position),st.look.copy(Ve.position).addScaledVector(Ve.getWorldDirection(new T),Ve.position.distanceTo(cn.position)),st.ready=!0,st.swing=Math.PI,Dt("laugh"));let y=Ve.position.distanceTo(cn.position),A=Math.abs(Math.sin(bi*5)),_=Math.max(.8,Math.min(4,y/1.2))*(1+Math.sin(bi*6)*.15),S=Math.max(.5,Math.min(6,y/.8));$t.position.set(Ne.x,Ne.y+Fe.height/2,Ne.z),$t.scale.setScalar(_),$t.lookAt(Ve.position),$t.visible=bi<fi+.6,pi.quaternion.copy(Ve.quaternion),pi.scale.setScalar(S),pi.position.set(Ne.x,Ne.y+Fe.height,Ne.z).addScaledVector(new T(0,1,0).applyQuaternion(Ve.quaternion),(.015+A*.03)*S)}let h=_e==="reveal"&&bi>fi,u=$e==null?void 0:$e.reveal,f=u&&u.i<u.list.length&&u.t>fi?u.list[u.i]:null;if(h)Lu(i,2.2),Ws=null;else if(f)Lu(i,2.2,f.model.position,f.model.rotation.y),Ws=null;else if(ze&&_e!=="hide"&&_e!=="title"&&_e!=="handoff"&&_e!=="sitting"){xM();let d=Ws?Math.hypot(ze.x-Ws[0],ze.z-Ws[1])/Math.max(i,.001)/rn.walk:0;Ws=[ze.x,ze.z],Nu.update(i,Math.min(1,d),ze.yaw,_e==="pointing"||qs>0,on.x??innerWidth/2,on.y??innerHeight/2)}else _e==="sitting"?gM(i):Lu(i),Ws=null;Nu.show($u()&&!As.binoculars());let p=_e==="hide"||_e==="count"?Pn-ui:Le.on?Le.left:Jn-di,g=[...Le.players.values()].filter(d=>d.role==="elf"&&!d.found).length,x=$e?$e.bots.filter(d=>d.found).length:0;$0.textContent=_e==="hide"?"\u{1F9DD} Hide! Walk into things to climb":_e==="count"?"\u{1F648} Counting\u2026 the elves are hiding":(_e==="seek"||_e==="pointing")&&$e?`\u{1F50E} Found ${x}/${$e.bots.length}${x<$e.bots.length?` \xB7 ${$e.bots.length-x} to go`:""}`:(_e==="seek"||_e==="pointing")&&Le.on?`\u{1F50E} ${g} ${g===1?"elf":"elves"} to find`:_e==="seek"||_e==="pointing"?`\u{1F50E} Find the elf! \xB7 ${Bn} ${Bn===1?"guess":"guesses"}`:Le.on&&_e==="sitting"&&Le.phase==="seek"?`\u{1F92B} ${to(Math.max(0,Math.ceil(Le.left)))} \xB7 stay hidden!`:Le.on&&_e==="sitting"?`\u{1F92B} hidden \xB7 ${to(Math.max(0,Math.ceil(Le.left)))} till the seeker looks`:_e==="out"?`\u{1F389} found \xB7 ${g} still hidden`:"",["hide","count","seek","pointing"].includes(_e)&&SM(p,_e==="hide"||_e==="count"?Pn:Jn);let m=(_e==="hide"||_e==="seek"||_e==="pointing")&&p<=10;MM(i),Le.update(i),vM(c),$0.classList.toggle("hurry",m),Ys.tempo(m?1.3:1),Zs.update(i)}function Tm(i){let e=Math.min(.05,(i-ku)/1e3);ku=i,Qr(e),En.render(Tt,Ve),As.render(En,Tt,Ve,$u()),requestAnimationFrame(Tm)}function TM(){if(Jt.get("at")&&Gu.splice(0,3,...Jt.get("at").split(",").map(Number)),Jt.has("shot")){$n.style.display="none",Ks();let i=+Jt.get("sim")||0,e={x:+(Jt.get("sx")??0),y:+(Jt.get("sy")??0)};for(let t=0;t<i;t+=1/60)Qr(1/60,e);if(Jt.has("seek")&&(Ti=2,fm(),Jt.has("point")&&Wu(),Jt.has("giveup"))){Yc();for(let t=0;t<(+Jt.get("giveup")||1.5)*60;t++)Qr(1/60,{x:0,y:0})}window.__test={elfOnScreen:()=>{let t=cn.position.clone();return t.y+=Fe.height/2,t.project(Ve),[(t.x+1)/2*innerWidth,(1-t.y)/2*innerHeight]},guesses:()=>Bn,phase:()=>_e},Qr(1/60,{x:0,y:0}),Qr(1/60,{x:0,y:0}),En.render(Tt,Ve)}else Jt.has("practice")?($n.style.display="none",Ku()):Zc();Jt.has("debug")&&(window.__elf={onl:Le,mirrors:Wi,seeker:()=>ze,elf:()=>Ne,camera:Ve,fire:(i,e)=>qc(i,e),phase:()=>_e,practice:()=>$e,step:i=>Qr(i),hidden:bm}),Jt.get("join")&&(dn.style.display="flex",Ju=Jt.get("join"),Le.join(Jt.get("join"),jc()).then(i=>{i&&document.body.classList.add("online"),Zo()})),requestAnimationFrame(i=>{ku=i,Tm(i)})}var Ys,Xi,Hu,Jt,am,cm,En,Tt,Ve,Zs,qi,Gu,kn,cn,Nu,Ws,Ne,$t,pi,It,$n,lm,hm,Vo,Hc,$0,hM,um,Pn,Jn,Ti,_e,ze,di,Bn,bi,ui,Vu,wi,to,gs,Xu,on,fi,no,pm,xs,mm,Uu,Js,hi,io,Yu,qs,Xo,Q0,uM,gm,As,em,Gc,tm,dM,Ei,Ou,mM,Si,Fu,st,ym,_m,Xs,li,AM,vm,Wi,Ko,nm,im,zu,Vc,sm,rm,Le,Wc,om,$e,EM,dn,Zu,eo,jc,Bu,Sm,Ju,Du,Ri,ys,js,$u,ku,Cm=ht(()=>{Cn();Qo();_u();Wr();y0();M0();T0();R0();Hr();P0();z0();k0();q0();j0();Z0();Iu();J0();K0();Ys=new kc,Xi=()=>{let i=Cu();return Ys.start(i),i},Hu=()=>{let i=document.getElementById("music");i&&(i.textContent=Ys.on?"\u{1F3B5}":"\u{1F507}")},Jt=new URLSearchParams(location.search),cm=!!((am=globalThis.matchMedia)!=null&&am.call(globalThis,"(pointer: coarse)").matches);cm&&document.body.classList.add("touch");En=new Ro({antialias:!0,preserveDrawingBuffer:Jt.has("shot")});En.setPixelRatio(Math.min(devicePixelRatio,1.5));En.setSize(innerWidth,innerHeight);En.shadowMap.enabled=!0;En.shadowMap.type=Th;En.toneMapping=Rh;document.body.appendChild(En.domElement);Tt=new Ir;Tt.background=new De(2762016);Ve=new Ft(66,innerWidth/innerHeight,.01,40);addEventListener("resize",()=>{En.setSize(innerWidth,innerHeight),Ve.aspect=innerWidth/innerHeight,Ve.updateProjectionMatrix()});Zs=Jp(Tt);Zs.labels.visible=!1;qi=I0(Zs),Gu=[2.6,1,0],kn=[2.6,1,0],cn=Nc();Tt.add(cn);Nu=new Fc(document.getElementById("gun")),Ws=null,Ne=Vr(...Gu),$t=new mt(new sn(.12,.018,8,32),new Yt({color:16765503,depthTest:!1,transparent:!0}));$t.renderOrder=10;$t.visible=!1;Tt.add($t);pi=new Ze;{let i=new Yt({color:15087942,depthTest:!1,transparent:!0}),e=new mt(new yi(.035,.05,16),i);e.rotation.x=Math.PI,e.position.y=.025;let t=new mt(new Je(.013,.013,.05,12),i);t.position.y=.075;for(let n of[e,t])n.renderOrder=11,pi.add(n)}pi.visible=!1;Tt.add(pi);It=i=>document.getElementById(i),$n=It("screen"),lm=It("screen-title"),hm=It("screen-text"),Vo=It("screen-go"),Hc=It("banner"),$0=It("hud"),hM=[30,45,60,90,120],um=i=>{try{return+localStorage.getItem(i)||0}catch{return 0}},Pn=+Jt.get("hidetime")||um("hide-elf.hidetime")||45,Jn=+Jt.get("seektime")||um("hide-elf.seektime")||60,Ti=-1,_e="title",ze=null,di=0,Bn=0,bi=0,ui=0,Vu=!1,wi=!1;to=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,gs=new mc,Xu=new Set;cn.traverse(i=>Xu.add(i));on={x:null,y:null};fi=1;no=It("stick"),pm=It("knob"),xs={x:0,y:0},mm=i=>{let e=no.getBoundingClientRect();[xs.x,xs.y]=B0(i.clientX-(e.left+e.width/2),i.clientY-(e.top+e.height/2),e.width/2),pm.style.transform=`translate(${xs.x*e.width/2}px, ${xs.y*e.width/2}px)`};no.addEventListener("pointerdown",i=>{i.preventDefault(),no.setPointerCapture(i.pointerId),mm(i)});no.addEventListener("pointermove",i=>{no.hasPointerCapture(i.pointerId)&&mm(i)});for(let i of["pointerup","pointercancel","lostpointercapture"])no.addEventListener(i,()=>{xs.x=xs.y=0,pm.style.transform=""});Uu=!1,Js=(i,e)=>It(i).addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),Xi(),e()});Js("jump",()=>{Uu=!0});Js("hide",Xc);Js("point",Wu);Js("fire",()=>qc());Js("crouch",()=>{ze&&(ze.crouch=!ze.crouch,It("crouch").classList.toggle("on",ze.crouch))});Js("giveup",Yc);Js("music",()=>{Ys.setOn(!Ys.on),Hu()});Hu();Am("hide-times","hide-elf.hidetime",()=>Pn,i=>{Pn=i});Am("seek-times","hide-elf.seektime",()=>Jn,i=>{Jn=i});It("gear").addEventListener("click",()=>{It("settings").style.display="flex"});It("settings-done").addEventListener("click",()=>{It("settings").style.display="none"});hi={x:0,y:0},io=new Map,Yu=new Map;En.domElement.addEventListener("pointerdown",i=>{Xi(),io.set(i.pointerId,[i.clientX,i.clientY]),Yu.set(i.pointerId,[i.clientX,i.clientY,performance.now()]),En.domElement.setPointerCapture(i.pointerId)});En.domElement.addEventListener("pointermove",i=>{let e=io.get(i.pointerId);if(!e)return;let t=(_e==="pointing"?.0022:.005)*(cm?1:.8);hi.x+=(i.clientX-e[0])*t,hi.y+=(i.clientY-e[1])*t,io.set(i.pointerId,[i.clientX,i.clientY])});En.domElement.addEventListener("pointerup",i=>{let e=Yu.get(i.pointerId);e&&(_e==="pointing"||_e==="seek")&&Math.hypot(i.clientX-e[0],i.clientY-e[1])<14&&performance.now()-e[2]<450&&fM(i.clientX,i.clientY)});for(let i of["pointerup","pointercancel"])En.domElement.addEventListener(i,e=>{io.delete(e.pointerId),Yu.delete(e.pointerId)});qs=0,Xo=0,Q0=.28,uM=.9;addEventListener("touchend",()=>Xi());gm=new Bc,As=X0({canUse:()=>!!ze&&(_e==="seek"||_e==="pointing")&&$u()}),em={},Gc=i=>{let e=!!gm.keys[i],t=e&&!em[i];return em[i]=e,t},tm=new Map,dM=xu(),Ei=[],Ou=0;mM=(()=>{let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.font='bold 100px "Arial Rounded MT Bold", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=12,e.strokeStyle="#9d0208",e.strokeText("HA!",128,68),e.fillStyle="#ffd23f",e.fillText("HA!",128,68);let t=new as(i);return t.colorSpace=ft,t})(),Si=[],Fu=0;st={pos:new T,look:new T,ready:!1,swing:0,tilt:0},ym=i=>qi.tops.some(e=>i.x>e.x0&&i.x<e.x1&&i.z>e.z0&&i.z<e.z1&&i.y<e.y1&&!(e.under!==void 0&&i.y<e.under-.01)),_m=lt+.24;Xs={t:0,over:_m};li={yaw:0,pitch:0,side:1,w:0,on:!1},AM=()=>{let i=Le.on&&Le.others().find(e=>e.role==="seeker"&&e.st[0]==="s");return i?{x:i.st[1],z:i.st[2],crouch:!!i.st[5]}:null};vm=.55,Wi=new Map,Ko=new Set,nm=[14034984,1667522,2853438,15764480,7358696,15092096,820633],im=!1,zu=0,Vc=0,sm=0,rm=0,Le=x0({myState:()=>{if(Le.myRole()==="seeker")return ze?["s",ze.x,ze.z,ze.yaw,ze.pitch,ze.crouch?1:0,_e==="count"?1:0,Sm()]:null;if(!["hide","sitting","seek","out"].includes(_e)&&_e!=="pointing")return null;let i=vu(Ne,Ti);return["e",Ne.x,Ne.y,Ne.z,Ne.yaw,_e==="hide"?Ne.walking:0,Ne.run,Ne.climbing?1:0,i.hanging?1:0,Ne.air?1:0,i.sit,i.asleep?1:0,_e==="out"?1:0]},onRound({seeker:i,hide:e,seek:t,order:n}){It("online").style.display="none",$n.style.display="none",Vo.style.display="",Pn=e,Jn=t,im=!1,sm=0,ju(),qo(),rm=Math.max(0,n.indexOf(Le.me)),i===Le.me?yM():_M(rm)},onPhase(i){i==="seek"?Le.myRole()==="seeker"?(pn("seek"),document.body.classList.remove("counting"),di=0,wi=!1,Ct("\u{1F440} READY OR NOT! FIND THE ELVES!")):_e==="hide"&&Xc(!0):i==="lobby"&&wM()},onFound(i,e,t){i===Le.me?(im=!0,pn("out"),sm=0,Ti=-1,qo(),Ct(t?"\u{1F389} FOUND! YOU SEEK NEXT ROUND":"\u{1F389} FOUND!"),Dt("boing")):Ct(`\u{1F389} ${Le.name(i).toUpperCase()} FOUND!${t?" (SEEKS NEXT)":""}`)},onShh(i,e){i!==Le.me&&zc(1-Ve.position.distanceTo(new T(...e))/4)},onEnd(i){let e=i.next?Le.name(i.next):null;pn("results"),document.body.classList.remove("counting"),lm.textContent=i.winner==="seeker"?"\u{1F50E} Found every elf!":"\u{1F9DD} The elves win!",hm.innerHTML=`${i.found.length?`Found: <b>${i.found.map(t=>Le.name(t)).join(", ")}</b>.<br>`:""}${e?`<b>${e}</b> was found first: they seek next.`:"Nobody was found: the next player seeks."}<br>Next round in a few seconds\u2026`,Vo.style.display=Ri.style.display=ys.style.display=js.style.display="none",$n.style.display="flex",It("gear").style.display="none"},onLost(i){wm(),Ct(`\u{1F310} ${i.toUpperCase()}`)},render:()=>Zo()});Wc={elves:3,count:20,seek:45},om=[[1667522,"blue"],[15764480,"orange"],[7358696,"purple"]],$e=null;EM=4.6;dn=document.createElement("div");dn.id="online";document.body.appendChild(dn);{let i=document.createElement("style");i.textContent=`
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
  @keyframes tick { to { transform: scale(1.1); } }`,document.head.appendChild(i)}Zu=document.createElement("div");Zu.id="lids";Zu.innerHTML=`<img src="${F0()}" alt="">`;document.body.appendChild(Zu);eo=document.createElement("div");eo.id="clock";eo.innerHTML=`<svg viewBox="0 0 100 100"><circle class="face" cx="50" cy="50" r="46"/><path class="pie"/>${Array.from({length:12},(i,e)=>{let t=e*Math.PI/6;return`<line class="tick" x1="${50+Math.sin(t)*38}" y1="${50-Math.cos(t)*38}" x2="${50+Math.sin(t)*44}" y2="${50-Math.cos(t)*44}"/>`}).join("")}<text x="50" y="50"></text></svg>`;document.body.appendChild(eo);jc=()=>{try{return localStorage.getItem("hide-elf.name")||""}catch{return""}},Bu=null,Sm=()=>{let i=Bu;try{i??=localStorage.getItem("hide-elf.look")}catch{}return Zr.includes(i)?i:Zr[0]},Ju="",Du="";dn.addEventListener("input",i=>{if(i.target.id==="ol-code"&&(Ju=i.target.value),i.target.id==="ol-name"){let e=i.target.value.trim().slice(0,12);try{localStorage.setItem("hide-elf.name",e)}catch{}Le.setName(e)}});dn.addEventListener("click",async i=>{var n;let e=i.target.closest("[data-ol]");if(!e)return;Xi();let t=e.dataset.ol;if(t==="host")await Le.hostGame(jc(),{hide:Pn,seek:Jn}),document.body.classList.add("online");else if(t==="join")await Le.join(dn.querySelector("#ol-code").value,jc())&&document.body.classList.add("online");else if(t==="start")Le.startRound();else if(t==="look"){Bu=e.dataset.look;try{localStorage.setItem("hide-elf.look",Bu)}catch{}}else if(t==="invite"){let s=`${ro?location.origin+location.pathname.replace(/index\.html$/,""):"https://sean-bostic.github.io/play/hide-elf/"}?join=${Le.code()}`;navigator.share?navigator.share({title:"Hide the Elf",text:`Hide the Elf! Room ${Le.code()}`,url:s}).catch(()=>{}):(n=navigator.clipboard)==null||n.writeText(s)}else t==="leave"?wm():t==="close"&&(dn.style.display="none",Le.on||Zc());Zo()});Ri=document.createElement("button");Ri.id="screen-online";Ri.textContent="\u{1F310} Play online";$n.appendChild(Ri);Ri.style.cssText="padding:1.8vmin 4vmin;border:0;border-radius:3vmin;background:#1971c2;color:#fff;font:800 max(16px,3.6vmin) system-ui;cursor:pointer";Ri.addEventListener("click",()=>{Xi(),dn.style.display="flex",Zo()});ys=document.createElement("button");ys.textContent="\u{1F50E} Practice seeking";$n.insertBefore(ys,Ri);ys.style.cssText=Ri.style.cssText;ys.style.background="#f08c00";ys.addEventListener("click",()=>{Xi(),$n.style.display="none",It("gear").style.display="none",Ku()});js=document.createElement("button");$n.appendChild(js);js.style.cssText=Ri.style.cssText;js.style.background="#495057";$u=()=>!!ze&&["seek","pointing","found","reveal"].includes(_e)&&!(_e==="reveal"&&bi>fi)&&!($e!=null&&$e.reveal&&$e.reveal.i<$e.reveal.list.length&&$e.reveal.t>fi),ku=performance.now()});Qo();Hr();mu().then(()=>Promise.resolve().then(()=>(Cm(),Rm))).then(i=>i.start());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
