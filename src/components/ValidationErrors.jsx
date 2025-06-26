import { useSelector } from "react-redux";
import { formatErrors } from "../utils/errorFormatter";

function ValidationErrors() {
  const auth = useSelector((state) => state.auth);

  const allErrors = formatErrors(auth.error);

  return (
    allErrors.length > 0 && (
      <div>
        {allErrors.map((error, index) => (
          <div key={index} className="alert alert-danger" role="alert">
            {error}
          </div>
        ))}
      </div>
    )
  );
}

export default ValidationErrors;
