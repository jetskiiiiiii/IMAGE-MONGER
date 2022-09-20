import { useState } from "react"

const RequestForm = () => {
    const [name, setName] = useState('')
    const [request, setRequest] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const request = {name, request}

        const response = await fetch('/api/requests', {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setName('')
            setRequest('')
            setError(null)
            console.log("Request submitted")
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h1>Submit a request</h1>

            <label>Name:</label>
            <input 
                type = "text"
                onChange={(e) => setName(e.target.value)}
                value = {name}
            />

            <label>Request:</label>
            <input 
                type = "text"
                onChange={(e) => setName(e.target.value)}
                value = {request}
            />
        </form>
    )
}

export default RequestForm