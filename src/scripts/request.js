async function Request(type, path, body, token){
    
    const response = await fetch(`http://api-service.azurewebsites.net${path}`, {
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(body)
    })
    return await response.json()
}

export default Request
