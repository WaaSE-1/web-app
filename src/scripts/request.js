async function Request(type, path, body){
    const response = await fetch(`http://127.0.0.1:8000${path}`, {
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    return await response.json()
}

export default Request