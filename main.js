// hw 6 Brady & Sara
// JS file

// declare constants
const FRAME_HEIGHT = 600;
const FRAME_WIDTH = 600;
const MARGINS = {left: 50, right: 50,
				top: 50, bottom: 50};


// for scaling function
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;


// create a frame for first vis in column 1
const FRAME1 = d3.select("#col1")
					.append("svg")
						.attr("height", FRAME_HEIGHT)
						.attr("width", FRAME_WIDTH)
						.attr("class", "frame");


// read data from first file
d3.csv("data/iris.csv").then((data) => {

	// get max x and y values
	const MAX_X = d3.max(data, d => {return parseInt(d.Sepal_Length)});
	const MAX_Y = d3.max(data, d => {return parseInt(d.Petal_Length)});

	// scaling functions
	const X_SCALE = d3.scaleLinear()
						.domain([0, (MAX_X + 1.0)])
	    				.range([0, VIS_WIDTH]);

	// range has to go from big to small so that 
	// the data is flipped along the y-axis (how a user would be 
	//  used to seeing a plot)
	const Y_SCALE = d3.scaleLinear()
						.domain([0, (MAX_Y + 1.0)])
	    				.range([(VIS_HEIGHT),0]);

	// plot
	FRAME1.selectAll(".point")
					.data(data)
	    			.enter().append("circle")
	    						.attr("cx", d => {
	    								return X_SCALE(parseFloat(d.Sepal_Length)) + MARGINS.left
	    							})
	    						.attr("cy", d => {
	    								return Y_SCALE(parseFloat(d.Petal_Length)) + MARGINS.top
	    						})
	    						.attr("r", 5)
	    						.attr("class", "point")
	    						.attr("id", d => {return d.Species});



	// create x-axis
	FRAME1.append("g")
      		.attr("transform", "translate(" + 
      			MARGINS.left + "," + (MARGINS.top + VIS_HEIGHT) + ")")
      			.call(d3.axisBottom(X_SCALE).ticks(6));

	// create y-axis
	FRAME1.append("g")
      		.attr("transform", "translate(" + 
      			MARGINS.left + "," + (MARGINS.top) + ")")
      		.call(d3.axisLeft(Y_SCALE).ticks(15));

});

// create a frame for vis in column 2
const FRAME2 = d3.select("#col2")
					.append("svg")
						.attr("height", FRAME_HEIGHT)
						.attr("width", FRAME_WIDTH)
						.attr("class", "frame");


// read data from first file
d3.csv("data/iris.csv").then((data) => {

	// get max x and y values
	const MAX_X = d3.max(data, d => {return parseInt(d.Sepal_Width)});
	const MAX_Y = d3.max(data, d => {return parseInt(d.Petal_Width)});

	// scaling functions
	const X_SCALE2 = d3.scaleLinear()
						.domain([0, (MAX_X + 1.0)])
	    				.range([0, VIS_WIDTH]);

	// range has to go from big to small so that 
	// the data is flipped along the y-axis (how a user would be 
	//  used to seeing a plot)
	const Y_SCALE2 = d3.scaleLinear()
						.domain([0, (MAX_Y + 1.0)])
	    				.range([(VIS_HEIGHT),0]);

	// plot
	FRAME2.selectAll(".point")
					.data(data)
	    			.enter().append("circle")
	    						.attr("cx", d => {
	    								return X_SCALE2(parseFloat(d.Sepal_Width)) + MARGINS.left
	    							})
	    						.attr("cy", d => {
	    								return Y_SCALE2(parseFloat(d.Petal_Width)) + MARGINS.top
	    						})
	    						.attr("r", 5)
	    						.attr("class", "point")
	    						.attr("id", d => {return d.Species});



	// create x-axis
	FRAME2.append("g")
      		.attr("transform", "translate(" + 
      			MARGINS.left + "," + (MARGINS.top + VIS_HEIGHT) + ")")
      			.call(d3.axisBottom(X_SCALE2).ticks(10));

	// create y-axis
	FRAME2.append("g")
      		.attr("transform", "translate(" + 
      			MARGINS.left + "," + (MARGINS.top) + ")")
      		.call(d3.axisLeft(Y_SCALE2).ticks(15));

});

// create a frame for third vis in column 3
const FRAME3 = d3.select("#col3")
					.append("svg")
						.attr("height", FRAME_HEIGHT)
						.attr("width", FRAME_WIDTH)
						.attr("class", "frame");

// read data
d3.csv("data/iris.csv").then((data) => {


	const MAX_Y3 = 50

	const X_SCALE3 = d3.scaleBand()
							.domain(data.map((d) => {return d.Species}))
							.range([0, VIS_WIDTH]);

	const Y_SCALE3 = d3.scaleLinear()
							.range([VIS_HEIGHT, 0])
							.domain([0, MAX_Y3])

	// plot
	FRAME3.selectAll(".bar")
					.data(data)
		    		.enter().append("rect")
		    					.attr("class", "bar")
		    					.attr("x", d => {
		    							return X_SCALE3(d.Species) + MARGINS.left
		    						})
		    						.attr("y", d => {
		    							return (Y_SCALE3(50))
		    						})
		    					.attr("width", X_SCALE3.bandwidth() - 5)
		    					.attr("height", d => {
		    						return (VIS_HEIGHT - Y_SCALE3(50))
		    					})
		    					.attr("id", d => {return d.Species})

	// add x-axis
	// create x-axis
	FRAME3.append("g")
	      	.attr("transform", "translate(" + 
	      		MARGINS.left+ "," + (MARGINS.top + VIS_HEIGHT) + ")")
	  			.call(d3.axisBottom(X_SCALE3).ticks(10));

	// create y-axis
	FRAME3.append("g")
	      	.attr("transform", "translate(" + 
	      		MARGINS.left + "," + (MARGINS.top) + ")")
	      	.call(d3.axisLeft(Y_SCALE3));


});
