import { useNavigate } from "react-router-dom"

const goToVT = e => {
    const navigate = useNavigate();

    navigate('/vyohyketerapia')
  }

export default goToVT;