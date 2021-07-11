import { getRestClient, key, tableName } from './utils/astra-client';

const handler = async (event, context) => {
    const todos = await getRestClient();
    const body = JSON.parse(event.body);
    
    try {
        let delete_path = `/api/rest/v2/keyspaces/${key}/${tableName}/${body.id}`;
        const res = await todos.delete(delete_path);
        return {
            statusCode: 204,
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

export default handler;