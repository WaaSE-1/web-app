async function Request(type, path, body){
    return await fetch(`http://127.0.0.1:8000${path}`, {
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
}

export default Request