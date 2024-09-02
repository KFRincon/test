import { ClientComp } from "@/components/client";
import { ServerComponent } from "@/components/server";

export default function NamePage() {
    return (
        <>
            <p>Hola</p>
            <ClientComp>
                <ServerComponent></ServerComponent>
            </ClientComp>
        </>
    );
}