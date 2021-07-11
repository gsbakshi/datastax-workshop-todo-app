import { getRestClient, key, tableName  } from './utils/astra-client';

const getClient = async () => {
    let client = await getRestClient();
    if (client === null) {
        wait(1000);
        return getClient();
    }
    return client;
}

const handler = async (event, context) => {
    const todos = await getRestClient();
    let res;
    try {
        // res = await todos.get(`/api/rest/v2/keyspaces/${key}/${tableName}?where=${{'key':{'$eq':'rest'}}}`);
        res = await client.get('/api/rest/v2/keyspaces/todos/rest?where=\{"key":\{"$eq":\"rest"\}\}');
        const formattedTodos = Object.keys(res.data).map((item) => res.data[item]);
        return {
            statusCode: 200,
            body: JSON.stringify(formattedTodos),
            headers: {
                'Content-Type': 'application/json'
            },
        };
     } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify(e),
        };
    }
};

export default handler;