if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlinjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinjs'.");
}
var kotlinjs = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var numberToInt = Kotlin.numberToInt;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  function TreeThings(canvas, ctx, slider) {
    this.ctx_0 = ctx;
    this.angle = toDouble(slider.value);
    this.width = 1000.0;
    this.height = 1000.0;
    canvas.height = numberToInt(this.height);
    canvas.width = numberToInt(this.width);
    slider.addEventListener('input', TreeThings_init$lambda(slider, this));
    window.requestAnimationFrame(TreeThings_init$lambda_0(this));
  }
  var Math_0 = Math;
  TreeThings.prototype.branch_3l1b2k$ = function (start, len, depth) {
    var tmp$ = start[0];
    var x = this.angle * depth;
    var tmp$_0 = tmp$ + len * Math_0.cos(x);
    var tmp$_1 = start[1];
    var x_0 = this.angle * depth;
    var end = [tmp$_0, tmp$_1 + len * Math_0.sin(x_0)];
    this.ctx_0.beginPath();
    this.ctx_0.strokeStyle = 'black';
    this.ctx_0.moveTo(start[0], start[1]);
    this.ctx_0.lineTo(end[0], end[1]);
    this.ctx_0.stroke();
    if (len > 4) {
      this.branch_3l1b2k$(end, len * 0.67, depth + 1 | 0);
      this.branch_3l1b2k$(end, len * 0.67, depth - 1 | 0);
    }
  };
  function TreeThings$draw$lambda(this$TreeThings) {
    return function (it) {
      this$TreeThings.draw();
      return Unit;
    };
  }
  TreeThings.prototype.draw = function () {
    this.ctx_0.fillStyle = 'white';
    this.ctx_0.clearRect(0.0, 0.0, this.width, this.height);
    var len = 300.0;
    var start = [0.0, this.height / 2];
    var end = [start[0] + len, start[1]];
    this.ctx_0.beginPath();
    this.ctx_0.strokeStyle = 'black';
    this.ctx_0.moveTo(start[0], start[1]);
    this.ctx_0.lineTo(end[0], end[1]);
    this.ctx_0.stroke();
    this.branch_3l1b2k$(end, len * 0.67, 1);
    this.branch_3l1b2k$(end, len * 0.67, -1);
    window.requestAnimationFrame(TreeThings$draw$lambda(this));
  };
  function TreeThings_init$lambda(closure$slider, this$TreeThings) {
    return function (it) {
      this$TreeThings.angle = toDouble(closure$slider.value);
      return Unit;
    };
  }
  function TreeThings_init$lambda_0(this$TreeThings) {
    return function (it) {
      this$TreeThings.draw();
      return Unit;
    };
  }
  TreeThings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeThings',
    interfaces: []
  };
  function main(args) {
    var tmp$, tmp$_0, tmp$_1;
    var canvas = Kotlin.isType(tmp$ = document.getElementById('the_canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var ctx = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    var slider = Kotlin.isType(tmp$_1 = document.getElementById('range_slider'), HTMLInputElement) ? tmp$_1 : throwCCE();
    new TreeThings(canvas, ctx, slider);
  }
  _.TreeThings = TreeThings;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlinjs', _);
  return _;
}(typeof kotlinjs === 'undefined' ? {} : kotlinjs, kotlin);

//# sourceMappingURL=kotlinjs.js.map
