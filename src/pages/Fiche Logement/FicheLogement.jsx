import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';

function FicheLogement() {
  const [apartmentId, setApartmentId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    setApartmentId(id);
  }, [location.search]);

  return (
    <>
      {apartmentId && <Carousel apartmentId={apartmentId} />}
    </>
  );
}

export default FicheLogement;
