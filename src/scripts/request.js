async function Request(type, path, body, token){
    let requestBody = {
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }
    if (type !== "GET") {
        requestBody.body = JSON.stringify(body)
    }
    const response = await fetch(`https://api-service.azurewebsites.net${path}`, requestBody)
    return await response.json()
}

export default Request
