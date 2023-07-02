const reducer = (state, action) => {
    console.log("ค่าก่อนที่จะ state =", state);

    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
        };
    }

    if (action.type === "TOGGLE_QUANTITY") {
        const newCart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
                if (action.payload.type === "increment") {
                    return {
                        ...item,
                        quantity: item.quantity < 999 ? item.quantity + 1 : item.quantity,
                    };
                }
                if (action.payload.type === "decrement") {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
            }
            return item;
        }).filter((item) => item.quantity !== 0);

        console.log(newCart);

        return {
            ...state,
            cart: newCart,
        };
    }

    if (action.type === "CALCULATE_TOTAL") {
        const { total, amount } = state.cart.reduce(
            (cartTotal, item) => {
                const { price, quantity } = item;
                const itemTotal = price * quantity;
                cartTotal.total += itemTotal;
                cartTotal.amount += quantity;
                return cartTotal;
            },
            {
                total: 0,
                amount: 0,
            }
        );

        console.log(total, amount);

        return {
            ...state,total,amount,
        };
    }

    return state;
};

export default reducer
