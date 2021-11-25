async function onRequest(request, settings) {
	const body = request.json();
	const userId = body.user && body.user.id;
	const method = body.method;
	const event = body.event_name;

	if (method === 'identify') {
		if (!userId) {
			throw new Error('User ID required');
		}

		Segment.identify({
			userId: userId,
			traits: {
				...body.user,
				...body.data
			}
		});
	} else if (method === 'track') {
		const obj = {
			event: event,
			userId: userId,
			properties: {
				...body.event_properties
			}
		};
		if (!userId) delete obj.userId;

		Segment.track(obj);
	}
}
