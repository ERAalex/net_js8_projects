
export default healthHeroe = (heroe, healthNumber) => {
    if (healthNumber >= 50) {
        return 'healthy'
    }
    if (healthNumber >= 15) {
        return 'wounded'
    }
    else {
        return 'critical'
    }
}


