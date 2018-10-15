if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlinjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinjs'.");
}
var kotlinjs = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var numberToInt = Kotlin.numberToInt;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var equals = Kotlin.equals;
  function TreeThings() {
    this.canvas = null;
    this.slider = null;
    this.ctx = null;
    this.angle = 0;
    this.width = 1000.0;
    this.height = 1000.0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var container = Kotlin.isType(tmp$ = document.getElementById('the_container'), HTMLDivElement) ? tmp$ : throwCCE();
    this.canvas = Kotlin.isType(tmp$_0 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_0 : throwCCE();
    this.canvas.id = 'the_canvas';
    this.canvas.height = numberToInt(this.height);
    this.canvas.width = numberToInt(this.width);
    this.slider = Kotlin.isType(tmp$_1 = document.createElement('input'), HTMLInputElement) ? tmp$_1 : throwCCE();
    this.slider.type = 'range';
    this.slider.min = '0';
    this.slider.max = '6.283185307179586';
    this.slider.value = '5.55';
    this.slider.step = '0.01';
    container.append(this.canvas);
    container.append(this.slider);
    this.ctx = Kotlin.isType(tmp$_2 = this.canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_2 : throwCCE();
    this.angle = toDouble(this.slider.value);
    this.slider.addEventListener('input', TreeThings_init$lambda(this));
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
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(start[0], start[1]);
    this.ctx.lineTo(end[0], end[1]);
    this.ctx.stroke();
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
    this.ctx.fillStyle = 'white';
    this.ctx.clearRect(0.0, 0.0, this.width, this.height);
    var len = 300.0;
    var start = [0.0, this.height / 2];
    var end = [start[0] + len, start[1]];
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(start[0], start[1]);
    this.ctx.lineTo(end[0], end[1]);
    this.ctx.stroke();
    this.branch_3l1b2k$(end, len * 0.67, 1);
    this.branch_3l1b2k$(end, len * 0.67, -1);
    window.requestAnimationFrame(TreeThings$draw$lambda(this));
  };
  function TreeThings_init$lambda(this$TreeThings) {
    return function (it) {
      this$TreeThings.angle = toDouble(this$TreeThings.slider.value);
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
    if (equals(window.location.hash, '#fractal_tree'))
      println('fractal tree');
    else {
      new TreeThings();
    }
  }
  var package$FractalTree = _.FractalTree || (_.FractalTree = {});
  package$FractalTree.TreeThings = TreeThings;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlinjs', _);
  return _;
}(typeof kotlinjs === 'undefined' ? {} : kotlinjs, kotlin);

//# sourceMappingURL=kotlinjs.js.map
