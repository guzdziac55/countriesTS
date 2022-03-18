import { useNavigate } from 'react-router'
export const NotFound = () => {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/')
    }, 2000)

    navigate('/')

    return (
        <div>
            404
            <p className="bg-blue-800">there is no match rule </p>
        </div>
    )
}
