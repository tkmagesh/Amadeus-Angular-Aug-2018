var app = (function(){

	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning the result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`)
	}

	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning the result`);
			callback(result);
		}, 4000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`)
		});
	}

	var addAsyncEvents = (function(){

		var _callbacks = [];

		function subscribe(callback){
			_callbacks.push(callback);
		}

		function process(x,y){
			console.log(`	[@Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning the result`);
				_callbacks.forEach(callback => callback(result));
			}, 4000);
		}
		return {
			subscribe,
			process
		};

	})();

	function addAsyncPromise(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);

		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning the result`);
				resolveFn(result);
			}, 4000);
		});

		return promise;
	}

	return { 
		addSyncClient,
		addAsyncClient,
		addAsyncEvents,
		addAsyncPromise
	};

})();