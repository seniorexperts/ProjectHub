import mongoose from "mongoose";

const mongooseconnect = async () => {

    if (mongoose.connections[0].readyState === 1)
        return mongoose.connections[0].asPromise();
    
    const uri = process.env.MONGODB_URI as string;
    return mongoose.connect(uri);
};

export default mongooseconnect;