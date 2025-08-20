import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
    const { isSignedIn } = useAuth(); // Note: Corrected variable name (case-sensitive)

    if (isSignedIn) {
        return <Redirect href="../" />

    }

    return <Stack />;
}