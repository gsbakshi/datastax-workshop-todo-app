const { getRestClient, key, tableName } = require('./utils/astra-rest-client');

const handler = async (event, context) => {
    const todos = await getRestClient();
    let body = JSON.parse(event.body);

    try {
        let path = `/api/rest/v2/keyspaces/${key}/${tableName}/${body.id}`;
        body = {
            'text': body.text,
            'completed': body.completed
        };
        const res = await todos.put(path, body);
        return {
            statusCode: res.status,
            body: JSON.stringify(res),
            headers: {
                'Content-Type': 'application/json'
            },
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify(error),
        };
    }
};

module.exports = { handler };