import './style.css'
import Alpine from "alpinejs"

// Re-usable local state
Alpine.data('dropdown', () => ({
    open: false,
    toggle() {
        this.open = ! this.open
    }
}))

// Global state
Alpine.store('tabs', {
    current: 'first',
    items: ['first', 'second', 'third'],
})

// Last so data can be registered
Alpine.start();
