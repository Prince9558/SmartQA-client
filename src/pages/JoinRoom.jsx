import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { serverEndpoint } from "../config/appConfig";
// import axios from "axios";

function JoinRoom() {
    const [name, setName] = useState("");
    const [roomCode, setRoomCode] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        let isValid = true;
        const newErrors = {};

        if (name.trim().length === 0) {
            newErrors.name = "Name is mandatory";
            isValid = false;
        }
        if (roomCode.trim().length === 0) {
            newErrors.roomCode = "Room code is mandatory";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleJoin = async () => {
        if (validate()) {
            setLoading(true);
            try {
                
                // Save name to localStorage
                localStorage.setItem("name", name);

                // Navigate to the room
                navigate(`/room/${roomCode}`);
            } catch (error) {
                console.error(error);
                setErrors({ message: "Failed to join room. Please check the code and try again." });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="container py-5">
            <div className="justify-content-center">
                <div className="col-md-5">
                    <h2 className="mb-4 text-center">Join Room</h2>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={errors.name ? "form-control is-invalid" : "form-control"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                        />
                        <div className="invalid-feedback">{errors.name}</div>
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="roomCode"
                            id="roomCode"
                            className={errors.roomCode ? "form-control is-invalid" : "form-control"}
                            value={roomCode}
                            onChange={(e) => setRoomCode(e.target.value)}
                            placeholder="Enter Room Code"
                        />
                        <div className="invalid-feedback">{errors.roomCode}</div>
                    </div>

                    {errors.message && (
                        <div className="alert alert-danger">{errors.message}</div>
                    )}

                    <div className="mb-3">
                        <button
                            type="button"
                            onClick={handleJoin}
                            className="btn btn-success w-100"
                            disabled={loading}
                        >
                            Join Room
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinRoom;