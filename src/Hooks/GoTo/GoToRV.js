import { useNavigate } from "react-router-dom"

const goToRV = e => {
    const navigate = useNavigate();

    navigate('/ravintovalmennus')
  }

export default goToRV;