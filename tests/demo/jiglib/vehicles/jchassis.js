(function(b){var c=b.JNumber3D;var a=b.JBox;var d=function(f,h,g,i,e){if(g==null){g=40;}if(i==null){i=70;}if(e==null){e=30;}this.Super(h,g,i,e);this._car=f;};b.extend(d,b.JBox);d.prototype._car=null;d.prototype.addExternalForces=function(e){this.clearForces();this.addGravity();this._car.addExternalForces(e);};d.prototype.postPhysics=function(e){this._car.postPhysics(e);};b.JChassis=d;})(jigLib);