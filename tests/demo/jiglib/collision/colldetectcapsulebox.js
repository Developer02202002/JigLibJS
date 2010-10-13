(function(e){var k=e.Vector3DUtil;var f=e.JMatrix3D;var a=e.JNumber3D;var h=e.JConstraint;var g=e.JConfig;var i=e.JCapsule;var m=e.JSegment;var d=e.JBox;var b=e.MaterialProperties;var n=e.RigidBody;var j=e.CollPointInfo;var l=e.CollisionInfo;var c=function(){this.name="CapsuleBox";this.type0="CAPSULE";this.type1="BOX";};e.extend(c,e.CollDetectFunctor);c.prototype.collDetect=function(G,E){var y;if(G.body0.get_type()=="BOX"){y=G.body0;G.body0=G.body1;G.body1=y;}var x=G.body0;var w=G.body1;if(!x.hitTestObject3D(w)){return;}if(g.aabbDetection&&!x.get_boundingBox().overlapTest(w.get_boundingBox())){return;}var D=[];var t;var o=[0,0,0,0];var r=new m(x.getEndPos(x.get_oldState()),a.getScaleVector(x.get_oldState().getOrientationCols()[1],-k.get_length(x)));var A=new m(x.getEndPos(x.get_currentState()),a.getScaleVector(x.get_currentState().getOrientationCols()[1],-k.get_length(x)));var q=x.get_radius();var J={};var I=r.segmentBoxDistanceSq(J,w,w.get_oldState());var u={};var s=A.segmentBoxDistanceSq(u,w,w.get_currentState());var p=w.get_oldState().getOrientationCols();if(Math.min(I,s)<Math.pow(q+g.collToll,2)){var v=r.getPoint(Number(J.pfLParam));var H=w.get_oldState().position.slice(0);H=k.add(H,a.getScaleVector(p[0],J.pfLParam0));H=k.add(H,a.getScaleVector(p[1],J.pfLParam1));H=k.add(H,a.getScaleVector(p[2],J.pfLParam2));var B=Math.sqrt(I);var K=q-B;var z;if(B>a.NUM_TINY){z=k.subtract(v,H);k.normalize(z);}else{if(k.get_length(k.subtract(v,w.get_oldState().position))>a.NUM_TINY){z=k.subtract(v,w.get_oldState().position);k.normalize(z);}else{z=k.Y_AXIS;f.multiplyVector(f.getRotationMatrix(0,0,1,360*Math.random()),z);}}o=k.add(o,z);t=new j();t.r0=k.subtract(H,x.get_oldState().position);t.r1=k.subtract(H,w.get_oldState().position);t.initialPenetration=K;D.push(t);}r=new m(x.getBottomPos(x.get_oldState()),a.getScaleVector(x.get_oldState().getOrientationCols()[1],k.get_length(x)));A=new m(x.getBottomPos(x.get_currentState()),a.getScaleVector(x.get_currentState().getOrientationCols()[1],k.get_length(x)));J={};I=r.segmentBoxDistanceSq(J,w,w.get_oldState());u={};s=A.segmentBoxDistanceSq(u,w,w.get_currentState());if(Math.min(I,s)<Math.pow(q+g.collToll,2)){v=r.getPoint(Number(J.pfLParam));H=w.get_oldState().position.slice(0);H=k.add(H,a.getScaleVector(p[0],J.pfLParam0));H=k.add(H,a.getScaleVector(p[1],J.pfLParam1));H=k.add(H,a.getScaleVector(p[2],J.pfLParam2));B=Math.sqrt(I);K=q-B;if(B>a.NUM_TINY){z=k.subtract(v,H);k.normalize(z);}else{if(k.get_length(k.subtract(v,w.get_oldState().position))>a.NUM_TINY){z=k.subtract(v,w.get_oldState().position);k.normalize(z);}else{z=k.Y_AXIS;f.multiplyVector(f.getRotationMatrix(0,0,1,360*Math.random()),z);}}o=k.add(o,z);t=new j();t.r0=k.subtract(H,x.get_oldState().position);t.r1=k.subtract(H,w.get_oldState().position);t.initialPenetration=K;D.push(t);}if(D.length>0){o.normalize();var C=new l();C.objInfo=G;C.dirToBody=o;C.pointInfo=D;var F=new b();F.set_restitution(Math.sqrt(x.get_material().get_restitution()*w.get_material().get_restitution()));F.set_friction(Math.sqrt(x.get_material().get_friction()*w.get_material().get_friction()));C.mat=F;E.push(C);G.body0.collisions.push(C);G.body1.collisions.push(C);}};e.CollDetectCapsuleBox=c;})(jigLib);