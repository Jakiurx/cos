import "../pages/style/Error.css"

export default function Error() {
    const handlePageChange = () => {
        window.location = '/';
    }
    return(
        <div className="error">
            <p>Error 404</p>
            <button onClick={handlePageChange}>Wróć do strony</button>
        </div>
    )
}