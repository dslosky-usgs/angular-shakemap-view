import * as L from 'leaflet';

/* Modified from leaflet-svg-shape-markers
https://www.npmjs.com/package/leaflet-svg-shape-markers
https://github.com/rowanwins/Leaflet.SvgShapeMarkers

The MIT License (MIT)

Copyright (c) 2016 Rowan Winsemius

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

L.SVG.include({
	_updateShape: function (layer) {
		
		let p = layer._point;
		let s = layer._radius;
		let shape = layer.options.shape;
		if(shape === "triangle"){
			var d = "M"+ (p.x-s)+ " "+ (p.y+s)+ " L" + (p.x) +" "+ (p.y-s)+ " L" + (p.x+s) + " " + (p.y+s)+  " Z";
			this._setPath(layer, d);
		}
		if(shape === "circle"){
			this._updateCircle(layer)
		}
	}
})

L.ShapeMarker = L.Path.extend({
	options: {
		fill: true,
		shape: 'triangle',
		radius: 10
	},

	initialize: function (latlng, options) {
		L.setOptions(this, options);
		this._latlng = L.latLng(latlng);
		this._radius = this.options.radius;
	},

	setLatLng: function (latlng) {
		this._latlng = L.latLng(latlng);
		this.redraw();
		return this.fire('move', {latlng: this._latlng});
	},

	getLatLng: function () {
		return this._latlng;
	},

	setRadius: function (radius) {
		this.options.radius = this._radius = radius;
		return this.redraw();
	},

	getRadius: function () {
		return this._radius;
	},

	setStyle : function (options) {
		var radius = options && options.radius || this._radius;
		L.Path.prototype.setStyle.call(this, options);
		this.setRadius(radius);
		return this;
	},

	_project: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
		this._updateBounds();
	},

	_updateBounds: function () {
		var r = this._radius,
		r2 = this._radiusY || r,
		w = this._clickTolerance(),
		p = [r + w, r2 + w];
		this._pxBounds = new L.Bounds(this._point.subtract(p), this._point.add(p));
	},

	_update: function () {
		if (this._map) {
			this._updatePath();
		}
	},

	_updatePath: function () {
		this._renderer._updateShape(this);
	},

	_empty: function () {
		return this._size && !this._renderer._bounds.intersects(this._pxBounds);
	},
	
	toGeoJSON: function () {
		return L.GeoJSON.getFeature(this, {
			type: 'Point',
			coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
		});
	}

});


// @factory L.shapeMarker(latlng: LatLng, options? ShapeMarker options)
//
L.shapeMarker = function (latlng, options) {
	return new L.ShapeMarker(latlng, options);
};