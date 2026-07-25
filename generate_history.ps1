$commitsToMake = 150
$daysToGoBack = 60
$startDate = (Get-Date).AddDays(-$daysToGoBack)

# We use a dummy file for these commits so we don't interfere with your Next.js project code
$dummyFile = ".history_log.txt"

if (-not (Test-Path $dummyFile)) {
    New-Item -Path $dummyFile -ItemType File | Out-Null
    git add $dummyFile
    git commit -m "chore: initialize history log"
}

Write-Host "Starting to generate $commitsToMake commits over the last $daysToGoBack days..."

for ($i = 1; $i -le $commitsToMake; $i++) {
    # Randomize the day within the last 60 days
    $randomDays = Get-Random -Minimum 0 -Maximum $daysToGoBack
    # Randomize the time between 9 AM and 11 PM
    $commitDate = $startDate.AddDays($randomDays).AddHours((Get-Random -Minimum 9 -Maximum 23)).AddMinutes((Get-Random -Minimum 0 -Maximum 59))
    
    # Format date for Git
    $dateString = $commitDate.ToString("yyyy-MM-dd HH:mm:ss")
    
    # Make a minor change to the dummy file
    Add-Content -Path $dummyFile -Value "Log entry: $dateString"
    
    # Set environment variables for Git to forge the date
    $env:GIT_AUTHOR_DATE = $dateString
    $env:GIT_COMMITTER_DATE = $dateString
    
    # Commit
    git add $dummyFile
    git commit -m "chore: internal repo maintenance" --date="$dateString" | Out-Null
}

# Clean up environment variables
Remove-Item Env:\GIT_AUTHOR_DATE
Remove-Item Env:\GIT_COMMITTER_DATE

Write-Host ""
Write-Host "✅ Successfully generated $commitsToMake commits!"
Write-Host "Your commit history has been enriched. To push these changes to GitHub, run:"
Write-Host "git push origin main"
