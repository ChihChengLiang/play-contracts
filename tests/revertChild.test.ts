import { assert } from "chai"
import { ethers } from "hardhat"
import { Child__factory, GrandChild__factory, Parent__factory } from "../src/types"


describe("Test revert parent child ", () => {

    it("reverts", async () => {
        const [signer] = await ethers.getSigners()
        const grantChild = await new GrandChild__factory(signer).deploy();
        const child = await new Child__factory(signer).deploy(grantChild.address);
        const parent = await new Parent__factory(signer).deploy(child.address);
        assert.isTrue((await parent.parentState()).isZero())
        assert.isTrue((await child.childState()).isZero())
        assert.isTrue((await grantChild.grandChildState()).isZero())
        await parent.run();
        assert.isFalse((await parent.parentState()).isZero())
        assert.isTrue((await child.childState()).isZero())
        assert.isTrue((await grantChild.grandChildState()).isZero())
    })
})