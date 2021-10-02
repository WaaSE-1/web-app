async function Request(type, path, body){
    const response = await fetch(`https://api-service.azurewebsites.net${path}`, {
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
