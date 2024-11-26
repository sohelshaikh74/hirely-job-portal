import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.headers["authorization"]?.split(" ")[1]; // Check if token is in cookies or Authorization header
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    // Verify the token
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.id = decode.userId; // Attach the userId to the request object for later use in your controllers
    next(); // Call next() to move to the next middleware or controller
  } catch (error) {
    console.error("Authentication error: ", error);

    // Handle expired token or other JWT errors
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired. Please log in again.",
        success: false,
      });
    }

    return res.status(500).json({
      message: "Server error during authentication.",
      success: false,
    });
  }
};

export default isAuthenticated;
