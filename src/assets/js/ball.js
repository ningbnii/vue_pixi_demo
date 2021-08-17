export default class Ball {
	constructor(radius=20) {
		base(this,LSprite,[]);
		this.ball = new LSprite();
		addChild(this.ball);
		this.ball.graphics.drawArc(0, '', [0, 0, radius, 0, 2 * Math.PI], true, "#ff0000");
		return this.ball;
	}
	setX(x){
		this.ball.x = x;
	}
}
