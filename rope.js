class rope{
	constructor(body1,body2,pointA,pointB)
	{

	this.pointA= pointA
	this.pointB= pointB
	

	var options={
		bodyA: body1,
		bodyB: body2,
		pointB:{x:this.pointA, y:this.pointB}
	}
	this.body = Bodies.rectangle(body1,body2,this.pointA,this.pointB,options);
	World.add(world,this.body);
}

display()
{
	var pointA = this.rope.bodyA.position
	var pointB = this.rope.bodyB.position

	
	push();
	strokeWeight(4);
	stroke("white");
    line(roof.position.x, roof.position.y, bob1.position.x,bob1.position.y);
	pop();
}

	


    

}
