<script lang="ts">
	import type { User } from '$lib/types/user'

	export let user: User
</script>

<dl class="flex flex-col gap-4 p-8 border rounded-xl">
	<div class="text-lg font-bold pb-4 border-b">User Info</div>
	<div class="pb-4 border-b grid grid-cols-3">
		<dt class="leading-6">ID</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.id}</dd>
	</div>
	<div class="pb-4 border-b grid grid-cols-3">
		<dt class="leading-6">Name</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.name}</dd>
	</div>
	<div class="pb-4 border-b grid grid-cols-3">
		<dt class="leading-6">UserName</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.username}</dd>
	</div>
	<div class="pb-4 border-b grid grid-cols-3">
		<dt class="leading-6">Email</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.email}</dd>
	</div>
	<div class="pb-4 border-b grid grid-cols-3">
		<dt class="leading-6">Address</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">
			<dl>
				<div class="pb-4 grid grid-cols-3">
					<dt class="leading-6">Street</dt>
					<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.address.street}</dd>
				</div>
				<div class="pb-4 grid grid-cols-3">
					<dt class="leading-6">Suite</dt>
					<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.address.suite}</dd>
				</div>
				<div class="pb-4 grid grid-cols-3">
					<dt class="leading-6">City</dt>
					<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.address.city}</dd>
				</div>
				<div class="pb-4 grid grid-cols-3">
					<dt class="leading-6">Zipcode</dt>
					<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.address.zipcode}</dd>
				</div>
				<div class="grid grid-cols-3">
					<dt class="leading-6">Geo</dt>
					<dd class="text-gray-500 text-sm leading-6 col-span-2">
						<dl>
							<div class="pb-4 grid grid-cols-3">
								<dt class="leading-6">Lat</dt>
								<dd class="text-gray-500 text-sm leading-6 col-span-2">
									{user.address.geo.lat}
								</dd>
							</div>
							<div class="grid grid-cols-3">
								<dt class="leading-6">Lng</dt>
								<dd class="text-gray-500 text-sm leading-6 col-span-2">
									{user.address.geo.lng}
								</dd>
							</div>
						</dl>
					</dd>
				</div>
			</dl>
		</dd>
	</div>
	<div class="pb-4 border-b grid grid-cols-3">
		<dt class="leading-6">Phone</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.phone}</dd>
	</div>
	<div class="pb-4 border-b grid grid-cols-3">
		<dt class="leading-6">Website</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.website}</dd>
	</div>
	<div class="grid grid-cols-3">
		<dt class="leading-6">Company</dt>
		<dd class="text-gray-500 text-sm leading-6 col-span-2">
			<dl>
				<div class="pb-4 grid grid-cols-3">
					<dt class="leading-6">Name</dt>
					<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.company.name}</dd>
				</div>
				<div class="pb-4 grid grid-cols-3">
					<dt class="leading-6">CatchPhrase</dt>
					<dd class="text-gray-500 text-sm leading-6 col-span-2">
						{user.company.catchPhrase}
					</dd>
				</div>
				<div class="grid grid-cols-3">
					<dt class="leading-6">BS</dt>
					<dd class="text-gray-500 text-sm leading-6 col-span-2">{user.company.bs}</dd>
				</div>
			</dl>
		</dd>
	</div>
</dl>
