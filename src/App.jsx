import "./App.css";
import { Button } from "./components/ui/button/button";
import { Icon } from "@iconify/react";
import { Textfield } from "./components/ui/input/textfield/textfield";
import { Header } from "./components/shared/header/header";
function App() {
    return (
        <>
            <Header></Header>

            <div style={{ padding: "20px" }}>
                <h1>Button Variants</h1>
                <div style={{ marginBottom: "20px" }}>
                    <h2>Default</h2>
                    <Button variant="default" size="default">
                        Default Button
                    </Button>
                    <Button variant="default" size="sm">
                        Small Default
                    </Button>
                    <Button variant="default" size="lg">
                        Large Default
                    </Button>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <h2>Destructive</h2>
                    <Button variant="destructive" size="default">
                        Destructive Button
                    </Button>
                    <Button variant="destructive" size="sm">
                        Small Destructive
                    </Button>
                    <Button variant="destructive" size="lg">
                        Large Destructive
                    </Button>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <h2>Outline</h2>
                    <Button variant="outline" size="default">
                        Outline Button
                    </Button>
                    <Button variant="outline" size="sm">
                        Small Outline
                    </Button>
                    <Button variant="outline" size="lg">
                        Large Outline
                    </Button>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <h2>Secondary</h2>
                    <Button variant="secondary" size="default">
                        Secondary Button
                    </Button>
                    <Button variant="secondary" size="sm">
                        Small Secondary
                    </Button>
                    <Button variant="secondary" size="lg">
                        Large Secondary
                    </Button>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <h2>Ghost</h2>
                    <Button variant="ghost" size="default">
                        Ghost Button
                    </Button>
                    <Button variant="ghost" size="sm">
                        Small Ghost
                    </Button>
                    <Button variant="ghost" size="lg">
                        Large Ghost
                    </Button>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <h2>Link</h2>
                    <Button variant="link" size="default">
                        Link Button
                    </Button>
                    <Button variant="link" size="sm">
                        Small Link
                    </Button>
                    <Button variant="link" size="lg">
                        Large Link
                    </Button>
                </div>
                <div style={{ padding: "20px" }}>
                    <h1>Button Variants</h1>
                    {/* Các phần khác vẫn giữ nguyên */}

                    <div style={{ marginBottom: "20px" }}>
                        <h2>Icon</h2>
                        <Button variant="icon" size="icon">
                            <Icon width={40} height={40} icon="mdi:home" />
                        </Button>
                        <Button variant="icon" size="icon">
                            <Icon width={40} height={40} icon="mdi:settings" />
                        </Button>
                        <Button variant="icon" size="icon">
                            <Icon icon="mdi:information" />
                        </Button>
                    </div>
                </div>

                <div style={{ padding: "20px" }}>
                    <h1>Textfield Example</h1>
                    <Textfield placeholder="Enter your text here" />
                    <Textfield
                        type="password"
                        placeholder="Enter your password"
                    />
                    <Textfield disabled placeholder="Disabled input" />
                    <Textfield
                        placeholder="Search..."
                        icon={<Icon icon="lucide:search" />}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
