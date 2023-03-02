import { useNavigate } from "react-router-dom"

const goToMain = e => {
    const navigate = useNavigate();

    navigate('/')
  }

export default goToMain;