
function WeatherForm({submit, onChange, cityName}) {
    return (
        <form className="form" onSubmit={submit}>
            <input className="form__input" type="text" placeholder="Search city" value={cityName}
            onChange={event => onChange(event.target.value)}/>
            <input className="form__search-btn" type="submit" value=''/>
        </form>
    )
}

export default WeatherForm;