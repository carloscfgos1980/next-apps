import Card from "@/components/Card";
import Link from "next/link";

export default function DefaultArchivedNotifications(){
    return (
        <Card>
            <div>Archived Notifications</div>
            <Link href="/complex-dashboard">default</Link>
        </Card>)
}